import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

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

// temporary will be removed in the future
const testimonials = [
  {
    testimonial:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amets',
    author: 'John Doe',
    designation: 'CEO, Company',
    profilePic: '/images/profile.png',
  },
  {
    testimonial:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amets',
    author: 'John Doe',
    designation: 'CEO, Company',
    profilePic: '/images/profile.png',
  },
  {
    testimonial:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
    author: 'John Doe',
    designation: 'CEO, Company',
    profilePic: '/images/profile.png',
  },
];
