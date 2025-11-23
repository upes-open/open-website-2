'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { REDIRECT_CONFIG } from './constants';

export default function RedirectPage() {
  const [counter, setCounter] = useState(REDIRECT_CONFIG.countdown);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      window.location.href = REDIRECT_CONFIG.url;
    }, REDIRECT_CONFIG.countdown * 1000);

    return () => clearInterval(interval);
  }, [router]);

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
          {REDIRECT_CONFIG.companyName}
        </h1>
      </div>
      <h3 className='text-base font-medium'>
        Redirecting to {REDIRECT_CONFIG.url} in {counter}...
      </h3>
      <div className='mt-8'>
        <Link href='/'>
          <Button variant='default'>Go to Home</Button>
        </Link>
      </div>
    </div>
  );
}
