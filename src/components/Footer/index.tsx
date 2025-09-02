import { FooterContent } from './FooterContent';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        'w-full bg-background border-t border-border',
        'pt-8 pb-4',
        className,
      )}
      role='contentinfo'
    >
      <FooterContent />
    </footer>
  );
}
