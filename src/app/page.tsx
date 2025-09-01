import ComingSoon from '@/components/comingsoon';
import { EventsAndProjects } from './home/EventsAndProjects';
import { Testimonials } from './home/Testimonials';

// add this only for server rendered pages
export const runtime = 'edge';

export default function Home() {
  return (
    <div>
      {/* Remove this once you have added your content */}
      <ComingSoon />
      <EventsAndProjects />
      <Testimonials />
    </div>
  );
}
