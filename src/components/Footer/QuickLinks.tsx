import Link from 'next/link';
import { QUICK_LINKS } from './constants';
import type { QuickLink } from './types';
import { cn } from '@/lib/utils';
import { Route } from 'next';

interface QuickLinksSectionProps {
  className?: string;
}

export function QuickLinksSection({ className }: QuickLinksSectionProps) {
  return (
    <div className={cn('flex-1 min-w-[180px] space-y-3', className)}>
      <h3 className='font-semibold text-foreground'>Quick Links</h3>

      <nav>
        <ul className='space-y-2'>
          {QUICK_LINKS.map((link: QuickLink) => (
            <li key={link.href}>
              <Link
                href={link.href as Route}
                className='text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors duration-200'
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
