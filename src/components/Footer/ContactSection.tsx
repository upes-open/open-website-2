'use client';

import Link from 'next/link';
import { CONTACT_INFO } from './constants';
import { useFooter } from './useFooter';
import { cn } from '@/lib/utils';

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className }: ContactSectionProps) {
  const { handleEmailClick } = useFooter();

  return (
    <div className={cn('flex-1 min-w-[180px] space-y-3', className)}>
      <h3 className='font-semibold text-foreground'>Contact</h3>

      <address className='not-italic space-y-1'>
        <div className='text-sm text-muted-foreground'>
          {CONTACT_INFO.location}
        </div>
        <div className='text-sm text-muted-foreground'>
          {CONTACT_INFO.region}
        </div>

        <Link
          href={`mailto:${CONTACT_INFO.email}`}
          className='block text-sm text-primary hover:text-primary/80 hover:underline transition-colors duration-200'
          onClick={() => handleEmailClick(CONTACT_INFO.email)}
        >
          {CONTACT_INFO.email}
        </Link>
      </address>
    </div>
  );
}
