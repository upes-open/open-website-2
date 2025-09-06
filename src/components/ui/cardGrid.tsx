'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';

export type CardItem = {
  src: string;
  alt: string;
  githubLink: string;
  name: string;
  shortDescription: string;
};

export const DisplayCardGrid = ({
  cards,
  className,
}: {
  cards?: CardItem[];
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  if (!cards) {
    throw new Error('cards are not provided');
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xle ovrflow-hidden',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7',
          className,
        )}
      >
        {cards.map((card, index) => (
          <li
            key={`${card.src}-${index}`}
            className='relative rounded-2xl w-100 h-95 border border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] overflow-hidden'
          >
            <Image
              src={card.src}
              alt={card.alt}
              width={300}
              height={200}
              className='w-full h-[70%] object-cover'
            />

            <div className='absolute bottom-0 left-0 p-3'>
              <h1 className='text-2xl mb-1 font-semibold'>{card.name}</h1>
              <p className='text-sm'>{card.shortDescription}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
