import { EventsAndProjects } from './home/EventsAndProjects';
import { Testimonials } from './home/Testimonials';
import HeroSection from '@/app/home/hero/HeroSection';

// add this only for server rendered pages
export const runtime = 'edge';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EventsAndProjects />
      <Testimonials />
    </div>
  );
}
