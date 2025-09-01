import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function ComingSoon() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex items-center -ml-8'>
        <Image
          src='/logo.png'
          alt='logo'
          width={75}
          height={75}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='mr-2'
        />
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold'>
          OPEN COMMUNITY
        </h1>
      </div>
      <h3 className='text-base font-medium'>We are coming soon...</h3>
      <div className='mt-8'>
        <Link href='/'>
          <Button variant='default'>Go to Home</Button>
        </Link>
      </div>
    </div>
  );
}
