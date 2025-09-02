'use client';

import * as React from 'react';
import { LuSun, LuMoon } from 'react-icons/lu';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant='outline' size='icon'>
        <span className='h-[1.2rem] w-[1.2rem]'></span>
      </Button>
    );
  }

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <LuSun className='h-[1.2rem] w-[1.2rem]' />
      ) : (
        <LuMoon className='h-[1.2rem] w-[1.2rem]' />
      )}
    </Button>
  );
}
