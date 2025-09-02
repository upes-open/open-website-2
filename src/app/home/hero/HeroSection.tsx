'use client';

import { Button } from '@/components/ui/button';
import Docker3D from '@/components/ui/models/Docker';
import Figma3D from '@/components/ui/models/Figma';
import Git3D from '@/components/ui/models/Git';
import GithubLogo3D from '@/components/ui/models/GitHub';
import Linux3D from '@/components/ui/models/Linux';
import ReactLogo3D from '@/components/ui/models/React';
import { useIsMobile } from '@/hooks/use-mobile';
import clsx from 'clsx';
import { motion } from 'motion/react';
import Link from 'next/link';
import { FloatingImage } from './FloatingImage';
import { FancyText } from './FancyText';
import useVariant from './useVariant';

export default function HeroSection() {
  const isMobile = useIsMobile();
  const { containerVariants, textVariants } = useVariant();

  return (
    <section className='relative flex flex-col md:flex-row md:items-stretch w-full md:h-[90vh] lg:min-h-screen overflow-hidden'>
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
              classname='text-foreground/90 font-bold tracking-tight leading-tight text-4xl md:text-6xl lg:text-7xl
'
              highlightLetters={['u']}
            />
          </motion.h1>

          <motion.h2 variants={textVariants} className='mt-2'>
            <FancyText
              text='with Open Source'
              classname='text-foreground/90 font-bold leading-tight text-4xl md:text-6xl lg:text-7xl'
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
                className='px-8 py-4 rounded-md bg-primary/70 text-foreground sm:text-lg transition-all duration-100 ease-in-out hover:bg-primary/50 hover:scale-105'
              >
                <Link href='/about'>Join Community</Link>
              </Button>
            </motion.div>
            <motion.div variants={textVariants}>
              <Button
                asChild
                variant='outline'
                className='px-8 py-4 rounded-md border-border sm:text-lg transition-all duration-100 ease-in-out hover:scale-105 '
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
