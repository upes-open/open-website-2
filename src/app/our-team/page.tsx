import ComingSoon from '@/components/comingsoon';

// add this only for server rendered pages
export const runtime = 'edge';

export default function Home() {
  return (
    <div>
      {/* Remove this once you have added your content */}
      <ComingSoon />
    </div>
  );
}
