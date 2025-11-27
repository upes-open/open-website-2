'use client';

import React from 'react';
import { motion } from 'motion/react';
import clsx from 'clsx';
import useVariant from './useVariant';

export interface FloatingImageProps {
  children: React.ReactElement;
  className?: string;
}

export const FloatingImage = ({ children, className }: FloatingImageProps) => {
  const { iconVariants } = useVariant();

  return (
    <motion.div
      variants={iconVariants}
      className={clsx(
        'pointer-events-none select-none z-0 opacity-70 lg:opacity-100 flex items-center justify-center',
        className,
      )}
      initial='hidden'
      animate='visible'
    >
      {/* Responsive sizes without clamp */}
      <div
        className={clsx(
          'w-30 h-30',
          'sm:w-34 sm:h-34',
          'md:w-40 md:h-40',
          'lg:w-44 lg:h-44',
          'xl:w-52 xl:h-52',
          '2xl:w-70 2xl:h-70',
          'flex items-center justify-center',
        )}
      >
        <div className='w-full h-full object-contain'>{children}</div>
      </div>
    </motion.div>
  );
};
