'use client';

import React from 'react';
import clsx from 'clsx';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { gohuFont } from '@/lib/fonts';

export interface FloatingImageProps {
  children: React.ReactElement;
}

export const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 50, damping: 16 },
  },
};

export const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

export const FloatingImage = ({ children }: FloatingImageProps) => {
  return (
    <motion.div
      variants={iconVariants}
      className={
        'pointer-events-none select-none z-0 opacity-70 lg:opacity-100 flex items-center justify-center'
      }
      initial='hidden'
      animate='visible'
    >
      <div className='w-30 h-30 md:w-40 md:h-40 lg:w-70 lg:h-70 xl:w-73 xl:h-73'>
        {children}
      </div>
    </motion.div>
  );
};

export function FancyText({
  text,
  classname,
  highlightLetters = [],
}: {
  text: string;
  classname?: string;
  highlightLetters?: string[];
}) {
  const seen = new Set<string>();

  return (
    <>
      {Array.from(text).map((ch, i) => {
        const lower = ch.toLowerCase();
        const shouldChangeFont =
          highlightLetters.includes(lower) && !seen.has(lower);

        if (shouldChangeFont) {
          seen.add(lower);
        }

        return (
          <span
            key={`${ch}-${i}`}
            className={clsx(
              classname,
              shouldChangeFont && [gohuFont.className, 'text-primary'],
            )}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        );
      })}
    </>
  );
}
