'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FancyText } from './FancyText';
import useVariant from './useVariant';

const CenterText = () => {
  const { containerVariants, textVariants } = useVariant();

  return (
    <div className='flex-1 relative z-20 order-2 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <motion.div
        className='text-center'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {/* Main Heading */}
        <motion.h1 variants={textVariants}>
          <FancyText
            text='Building the Future'
            classname='text-foreground/90 font-bold tracking-tight leading-tight text-3xl md:text-5xl lg:text-6xl'
            highlightLetters={['u']}
          />
        </motion.h1>

        {/* Sub Heading */}
        <motion.h2 variants={textVariants} className='mt-2'>
          <FancyText
            text='with Open Source'
            classname='text-foreground/90 font-bold leading-tight text-3xl md:text-5xl lg:text-6xl'
            highlightLetters={['p', 'e', 's']}
          />
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className='mt-4 max-w-lg mx-auto text-muted-foreground text-xs sm:text-sm md:text-base'
          variants={textVariants}
        >
          <span>
            Join UPES Dehradun&apos;s premier open-source community. Learn,
            contribute, and shape tomorrow&apos;s technology together.
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          className='mt-6 flex flex-col sm:flex-row justify-center gap-3'
          variants={containerVariants}
        >
          <motion.div variants={textVariants}>
            <Button
              asChild
              className='px-6 py-3 rounded-md bg-primary/70 text-foreground sm:text-base transition-all duration-100 ease-in-out hover:bg-primary/50 hover:scale-105'
            >
              <Link href='/about'>Join Community</Link>
            </Button>
          </motion.div>
          <motion.div variants={textVariants}>
            <Button
              asChild
              variant='outline'
              className='px-6 py-3 rounded-md border-border sm:text-base transition-all duration-100 ease-in-out hover:scale-105'
            >
              <Link href='/projects'>View Projects</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CenterText;
