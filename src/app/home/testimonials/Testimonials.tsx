import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { testimonials } from './constants';

export function Testimonials() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-12 p-4 overflow-hidden'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4'>
        Community Voices
      </h1>
      <div>
        <InfiniteMovingCards
          items={testimonials}
          pauseOnHover={false}
          direction='left'
          speed='normal'
        />
      </div>
    </div>
  );
}
