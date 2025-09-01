'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const REDIRECT_URL = 'https://google.com';

export default function RedirectPage() {
  const [counter, setCounter] = useState(3);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      router.push(REDIRECT_URL);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex items-center justify-center h-screen bg-black'>
      <p className='text-white text-2xl'>
        Redirecting to {REDIRECT_URL} in {counter}...
      </p>
    </div>
  );
}
