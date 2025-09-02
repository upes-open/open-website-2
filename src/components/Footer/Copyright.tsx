import { COPYRIGHT_TEXT } from './constants';
import { cn } from '@/lib/utils';

interface CopyrightProps {
  className?: string;
}

export function Copyright({ className }: CopyrightProps) {
  return (
    <div className={cn('flex flex-col items-center pt-6', className)}>
      <div className='w-full border-t border-border mb-4' />

      <div className='text-xs text-muted-foreground text-center'>
        {COPYRIGHT_TEXT}
      </div>
    </div>
  );
}
