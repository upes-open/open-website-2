import Image from 'next/image';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  return (
    <div className='w-full p-2 border-b'>
      <div className='max-w-7xl flex justify-between items-center mx-auto'>
        <div className='flex items-center gap-2'>
          <Image
            src='/logo.png'
            alt='logo'
            width={50}
            height={50}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          <p className='text-lg font-bold'>OPEN COMMUNITY</p>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}
