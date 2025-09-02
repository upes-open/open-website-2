import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href='/'>
      <div className={`flex items-center gap-2 ${className}`}>
        <Image
          src='/logo.png'
          alt='Open Community Logo'
          width={50}
          height={50}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-contain'
          priority
        />
        <span className='text-lg font-bold text-foreground'>
          OPEN COMMUNITY
        </span>
      </div>
    </Link>
  );
}
