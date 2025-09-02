import Link from 'next/link';
import { SOCIAL_LINKS } from './constants';
import type { SocialLink } from './types';
import { cn } from '@/lib/utils';
import { Route } from 'next';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {SOCIAL_LINKS.map((social: SocialLink) => {
        const IconComponent = social.icon;

        return (
          <Link
            key={social.label}
            href={social.href as Route}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={social.label}
            className='text-muted-foreground hover:text-foreground transition-colors duration-200'
          >
            <IconComponent size={iconSize} />
          </Link>
        );
      })}
    </div>
  );
}
