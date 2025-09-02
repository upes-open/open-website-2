import { Navigation } from './Navigation';
import { ThemeToggle } from '../theme-toggle';

interface DesktopNavigationProps {
  className?: string;
}

export function DesktopNavigation({ className }: DesktopNavigationProps) {
  return (
    <div className={`hidden md:flex items-center gap-6 ${className}`}>
      <Navigation />
      <ThemeToggle />
    </div>
  );
}
