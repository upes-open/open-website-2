'use client';

import clsx from 'clsx';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import Linux3D from '@/components/ui/Linux';
import Docker3D from '@/components/ui/Docker';
import Figma3D from '@/components/ui/Figma';
import Git3D from '@/components/ui/Git';
import ReactLogo3D from '@/components/ui/ReactLogo';
import { useIsMobile } from '@/hooks/use-mobile';
import GithubLogo3D from '@/components/ui/GitHub';
import {
  FloatingImage,
  FancyText,
  containerVariants,
  textVariants,
} from './helpers';

export default function HeroSection() {
  const isMobile = useIsMobile();
  return (
    <section className='relative flex flex-col md:flex-row md:items-stretch w-full md:h-[90vh] overflow-hidden'>
      {/* Left icons */}
      <div
        className={clsx(
          'grid place-items-center gap-3 p-2',
          isMobile
            ? 'grid-cols-3 w-full h-[20vh] order-1'
            : 'grid-rows-3 w-[25vw] h-full order-1',
        )}
      >
        <FloatingImage>
          <ReactLogo3D />
        </FloatingImage>
        <FloatingImage>
          <Linux3D />
        </FloatingImage>
        <FloatingImage>
          <Figma3D />
        </FloatingImage>
      </div>

      {/* Center content */}
      <div className='flex-1 relative z-10 order-2 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='text-center'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h1 variants={textVariants}>
            <FancyText
              text='Building the Future'
              classname='text-foreground font-bold tracking-tight leading-tight text-4xl md:text-6xl lg:text-7xl
'
              highlightLetters={['u']}
            />
          </motion.h1>

          <motion.h2 variants={textVariants} className='mt-2'>
            <FancyText
              text='with Open Source'
              classname='text-foreground font-bold leading-tight text-4xl md:text-6xl lg:text-7xl'
              highlightLetters={['p', 'e', 's']}
            />
          </motion.h2>

          <motion.p
            className='mt-4 max-w-xl mx-auto text-muted-foreground text-sm sm:text-base md:text-lg '
            variants={textVariants}
          >
            <span>
              Join UPES Dehradun&apos;s premier open-source community. Learn,
              contribute, and shape tomorrow&apos;s technology together.
            </span>
          </motion.p>

          <motion.div
            className='mt-6 flex flex-col sm:flex-row justify-center gap-3'
            variants={containerVariants}
          >
            <motion.div variants={textVariants}>
              <Button
                asChild
                className='px-8 py-4 rounded-md bg-foreground text-background text-base sm:text-lg transform-gpu transition-all duration-300 ease-out hover:bg-foreground/90 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 active:translate-y-0'
              >
                <Link href='/about'>Join Community</Link>
              </Button>
            </motion.div>
            <motion.div variants={textVariants}>
              <Button
                asChild
                variant='outline'
                className='px-8 py-4 rounded-md border-border bg-background text-foreground sm:text-lg transform-gpu transition-all duration-300 ease-out hover:bg-background/90 hover:border-border hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:translate-y-0'
              >
                <Link href='/projects'>View Projects</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right icons */}
      <div
        className={clsx(
          'grid place-items-center gap-3 p-2',
          isMobile
            ? 'grid-cols-3 w-full h-[20vh] order-3'
            : 'grid-rows-3 w-[25vw] h-full order-3',
        )}
      >
        <FloatingImage>
          <Docker3D />
        </FloatingImage>
        <FloatingImage>
          <Git3D />
        </FloatingImage>
        <FloatingImage>
          <GithubLogo3D />
        </FloatingImage>
      </div>
    </section>
  );
}
