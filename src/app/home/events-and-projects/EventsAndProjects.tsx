import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { images } from './constants';

export function EventsAndProjects() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-12 p-4 overflow-hidden'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4'>
        Events And Projects
      </h1>
      <div>
        <InfiniteMovingCards images={images} direction='left' speed='normal' />
        <InfiniteMovingCards images={images} direction='right' speed='normal' />
        <InfiniteMovingCards images={images} direction='left' speed='normal' />
      </div>
    </div>
  );
}
