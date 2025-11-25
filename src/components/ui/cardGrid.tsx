'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import getGithubOgImage from '@/app/projects/project_section/osoc_project/getOGimage';

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
  if (!cards) {
    throw new Error('cards are not provided');
  }

  return (
    <div
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden',
        className,
      )}
    >
      <ul
        className={cn(
          'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7',
          className,
        )}
      >
        {cards.map((card, index) => (
          <li
            key={`${card.src}-${index}`}
            className='relative rounded-2xl border border-border bg-background overflow-hidden p-4'
          >
            <Image
              src={getGithubOgImage(card.githubLink)}
              alt={card.alt}
              width={300}
              height={200}
              className='w-full h-[200px] object-cover rounded-lg'
            />

            <div className='mt-4'>
              <h1 className='text-lg font-semibold text-foreground'>
                {card.name}
              </h1>
              <p className='text-sm text-muted-foreground'>
                {card.shortDescription}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
