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
      <h3 className='text-base font-medium'>
        🛠️ We are under maintenance right now 🛠️
      </h3>
      <h3 className='text-base font-medium'>We will be back shortly!</h3>
      <div className='mt-8 flex flex-col sm:flex-row gap-4'>
        <Button
          asChild
          className='px-8 py-4 rounded-md bg-primary/70 text-foreground sm:text-lg transition-all duration-100 ease-in-out hover:bg-primary/50 hover:scale-105'
        >
          <Link href='/about'>Join Community</Link>
        </Button>
        <Button
          asChild
          variant='outline'
          className='px-8 py-4 rounded-md border-border sm:text-lg transition-all duration-100 ease-in-out hover:scale-105 '
        >
          <Link href='/'>Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
