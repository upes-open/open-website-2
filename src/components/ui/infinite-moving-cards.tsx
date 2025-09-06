'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export type TestimonialItem = {
  testimonial: string;
  author: string;
  designation: string;
  profilePic: string;
};

export type ImageItem = {
  src: string;
  alt: string;
};

export type ProjectItem = {
  src: string;
  alt: string;
  githubLink: string;
  projectName: string;
  shortDescription: string;
};

export const InfiniteMovingCards = ({
  items,
  images,
  projects,
  direction,
  speed,
  pauseOnHover = true,
  className,
}: {
  items?: TestimonialItem[];
  images?: ImageItem[];
  projects?: ProjectItem[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  });

  const [start, setStart] = useState(false);

  // Validate that either items or images is provided, but not both
  if (!items && !images && !projects) {
    throw new Error(
      "Either 'items' or 'images' or 'projects' prop must be provided",
    );
  }
  if ((items && images) || (items && projects) || (images && projects)) {
    throw new Error(
      "Cannot provide multiple 'items' or 'images' or  'projects' Choose one.",
    );
  }

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };

  const renderTestimonialCard = (item: TestimonialItem, index: number) => (
    <li
      className='relative w-[300px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[350px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]'
      key={`${item.author}-${index}`}
    >
      <blockquote>
        <div
          aria-hidden='true'
          className='user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
        ></div>
        <span className='relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100'>
          {item.testimonial}
        </span>
        <div className='relative z-20 mt-6 flex flex-row items-center'>
          <div className='mr-3'>
            <Image
              src={item.profilePic}
              alt={`${item.author} profile`}
              width={40}
              height={40}
              className='rounded-full object-cover'
            />
          </div>
          <span className='flex flex-col gap-1'>
            <span className='text-sm leading-[1.6] font-medium text-neutral-700 dark:text-gray-200'>
              {item.author}
            </span>
            <span className='text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400'>
              {item.designation}
            </span>
          </span>
        </div>
      </blockquote>
    </li>
  );

  const renderImageCard = (image: ImageItem, index: number) => (
    <li
      className='relative shrink-0 rounded-lg overflow-hidden'
      key={`${image.src}-${index}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={300}
        height={200}
        className='object-cover w-[300px] h-[200px]'
      />
    </li>
  );

  const renderProjectCard = (project: ProjectItem, index: number) => (
    <li
      className='relative w-[300px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] md:w-[350px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]'
      key={`${project.src}-${index}`}
    >
      <Image
        src={project.src}
        alt={project.alt}
        width={300}
        height={200}
        className='object-cover w-[100%] h-[100%] rounded-2xl'
      />

      <div className='mt-4 absolute z-1 bottom-0 left-0 p-5'>
        <h1 className='text-2xl font-semibold text-start'>
          {project.projectName}
        </h1>
        <p className='text-sm text-start'>{project.shortDescription}</p>
      </div>
    </li>
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl ovrflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items &&
          items.map((item, index) => renderTestimonialCard(item, index))}
        {images && images.map((image, index) => renderImageCard(image, index))}
        {projects &&
          projects.map((project, index) => renderProjectCard(project, index))}
      </ul>
    </div>
  );
};
