'use client';

import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import Docker3D from '@/components/ui/models/Docker';
import Figma3D from '@/components/ui/models/Figma';
import Git3D from '@/components/ui/models/Git';
import GithubLogo3D from '@/components/ui/models/GitHub';
import Linux3D from '@/components/ui/models/Linux';
import ReactLogo3D from '@/components/ui/models/React_logo';
import { useIsMobile } from '@/hooks/use-mobile';
import clsx from 'clsx';
import { FloatingImage } from './FloatingImage';
import CenterText from './CenterText';

export default function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section className='relative flex flex-col md:flex-row md:items-stretch w-full md:h-[90vh] lg:min-h-screen overflow-hidden'>
      {/* Animated  background */}
      <div className='absolute inset-0 z-0'>
        <HeroGeometric />
      </div>

      {/* Left icons */}
      <div
        className={clsx(
          'relative z-10 grid place-items-center gap-3 p-2',
          isMobile
            ? 'grid-cols-3 w-full h-[20vh] order-1'
            : 'grid-rows-3 w-[60vw] h-full order-1 justify-start absolute',
        )}
      >
        <FloatingImage className='relative md:left-50'>
          <ReactLogo3D />
        </FloatingImage >
        <FloatingImage className='relative md:left-20'>
          <Linux3D />
        </FloatingImage>
        <FloatingImage className='relative md:left-50'>
          <Figma3D />
        </FloatingImage>
      </div>

      {/* Center content */}
      <CenterText/>

      {/* Right icons */}
      <div
        className={clsx(
          'relative z-10 grid place-items-center gap-3 p-2',
          isMobile
            ? 'grid-cols-3 w-full h-[20vh] order-3'
            : 'grid-rows-3 w-[60vw] h-full order-3 justify-end absolute',
        )}
      >
        <FloatingImage  className='relative md:right-50'>
          <Docker3D />
        </FloatingImage>
        <FloatingImage  className='relative  md:right-10'>
          <Git3D />
        </FloatingImage>
        <FloatingImage  className='relative md:right-50'>
          <GithubLogo3D />
        </FloatingImage>
      </div>
    </section>
  );
}
