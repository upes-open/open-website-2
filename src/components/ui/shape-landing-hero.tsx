'use client';

import { motion } from 'motion/react';
import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ElegantShapeProps {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}

const ElegantShape: React.FC<ElegantShapeProps> = ({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-shape-glow',
}) => {
  const isMobile = useIsMobile();
  const scaleFactor = isMobile ? 0.6 : 1.1;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0] as const,
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut' as const,
        }}
        style={{
          width: width * scaleFactor,
          height: height * scaleFactor,
        }}
        className='relative'
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r to-transparent',
            gradient,
            'backdrop-blur-[2px] border-2 border-shape-border',
            
            'dark:shadow-[0_8px_32px_0_var(--shape-glow)]',
            'shadow-[0_4px_16px_0_rgba(0,0,0,0.1)]',
            'after:absolute after:inset-0 after:rounded-full',

            'dark:after:bg-[radial-gradient(circle_at_50%_50%,var(--shape-glow),transparent_70%)]',
            'after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_70%)]',

            'dark:opacity-100 opacity-90',
          )}
        />
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r to-transparent',
            gradient,
            'dark:opacity-0 opacity-30',
            'mix-blend-multiply',
            'border border-shape-border/50',
          )}
        />
      </motion.div>
    </motion.div>
  );
};


const HeroGeometric: React.FC = () => {
  return (
    <div className='relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background'>
      <div className='absolute inset-0 bg-gradient-to-br from-shape-primary/30 via-transparent to-shape-accent/30 blur-3xl' />

      <div className='absolute inset-0 overflow-hidden'>
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient='from-shape-primary'
          className='left-[-20%] md:left-[-5%] top-[8%] md:top-[20%]'
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient='from-shape-secondary'
          className='right-[-15%] md:right-[0%] top-[85%] md:top-[75%]'
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient='from-shape-accent'
          className='left-[-5%] md:left-[10%] bottom-[1%] md:bottom-[10%]'
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient='from-shape-highlight'
          className='right-[8%] md:right-[20%] top-[3%] md:top-[15%]'
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient='from-shape-subtle'
          className='left-[12%] md:left-[25%] top-[1%] md:top-[10%]'
        />

        <ElegantShape
          delay={0.9}
          width={80}
          height={200}
          rotate={-10}
          gradient='from-shape-highlight'
          className='right-[1%] md:right-[5%] top-[35%] md:top-[30%]'
        />

        <ElegantShape
          delay={0.8}
          width={100}
          height={250}
          rotate={8}
          gradient='from-shape-secondary'
          className='left-[1%] md:left-[5%] top-[55%] md:top-[50%]'
        />
      </div>

      

      <div className='absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 pointer-events-none' />

      <div className='absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/60 pointer-events-none dark:opacity-0 opacity-40' />
    </div>
  );
};

export { HeroGeometric, type ElegantShapeProps };
export default HeroGeometric;
