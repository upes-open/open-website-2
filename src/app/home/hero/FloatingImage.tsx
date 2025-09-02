'use client';

import React from 'react';
import { motion } from 'motion/react';
import useVariant from './useVariant';

export interface FloatingImageProps {
  children: React.ReactElement;
}

export const FloatingImage = ({ children }: FloatingImageProps) => {
  const { iconVariants } = useVariant();

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
