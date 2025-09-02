'use client';

import { Button } from '@/components/ui/button';
import { HiMenu, HiX } from 'react-icons/hi';
import { Navigation } from './Navigation';
import { useMobileNavigation } from './useMobileNavigation';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  className?: string;
}

export function MobileMenu({ className }: MobileMenuProps) {
  const { isOpen, toggleMenu, closeMenu } = useMobileNavigation();

  return (
    <div className={cn('md:hidden', className)}>
      <Button
        variant='ghost'
        size='sm'
        onClick={toggleMenu}
        className='p-2 hover:bg-accent'
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 bg-black/20 z-40 md:hidden'
            onClick={closeMenu}
            aria-hidden='true'
          />

          {/* Mobile Menu Panel */}
          <div className='absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg z-50 md:hidden'>
            <div className='p-4'>
              <Navigation
                className='flex flex-col'
                itemClassName='block py-2 text-foreground hover:text-muted-foreground'
                onItemClick={closeMenu}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
