import ComingSoon from '@/components/comingsoon';
import Footer from '@/components/Footer';
 

// add this only for server rendered pages
export const runtime = 'edge';

export default function Home() {
  return (
    <div>
      {/* Remove this once you have added your content */}
      <ComingSoon />
      <Footer />
    </div>
  );
}
