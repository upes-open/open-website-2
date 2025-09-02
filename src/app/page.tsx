import { EventsAndProjects } from './home/events-and-projects/EventsAndProjects';
import { Testimonials } from './home/testimonials/Testimonials';
import HeroSection from '@/app/home/hero/HeroSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EventsAndProjects />
      <Testimonials />
    </div>
  );
}
