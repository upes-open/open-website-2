import localFont from 'next/font/local';

export const gohuFont = localFont({
  src: [
    {
      path: '../../public/fonts/gohufont-11.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-gohu',
});
