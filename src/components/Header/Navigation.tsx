import Link from 'next/link';
import { navigationItems, type NavigationItem } from './constants';
import { cn } from '@/lib/utils';
import { Route } from 'next';

interface NavigationProps {
  className?: string;
  itemClassName?: string;
  onItemClick?: () => void;
}

export function Navigation({
  className,
  itemClassName,
  onItemClick,
}: NavigationProps) {
  return (
    <nav className={cn('flex items-center gap-4', className)}>
      {navigationItems.map((item: NavigationItem) => (
        <Link
          key={item.href}
          href={item.href as Route}
          className={cn(
            'text-foreground hover:text-muted-foreground transition-colors duration-200',
            itemClassName,
          )}
          onClick={onItemClick}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
