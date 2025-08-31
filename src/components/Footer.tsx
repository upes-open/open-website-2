import React from 'react';
import { Inter, Geist_Mono } from 'next/font/google';

const geistSans = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Footer() {
  return (
    <footer
      className={`w-full bg-[#181818] text-gray-200 pt-8 pb-4 px-4 sm:px-12 ${geistSans.variable} ${geistMono.variable}`}
    >
      <div className='max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-8 pb-6'>
        {/* Community Info */}
        <div className='flex-1 min-w-[220px]'>
          <div className='flex items-center gap-3 mb-2'>
            <div
              className='bg-white text-black rounded-md w-10 h-10 flex items-center justify-center font-bold text-lg'
              style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
              OU
            </div>
            <span
              className='font-semibold text-lg'
              style={{ fontFamily: 'var(--font-geist-sans)' }}
            >
              OPEN COMMUNITY UPES
            </span>
          </div>
          <div
            className='text-sm mb-1'
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            Aware, adopt, contribute
          </div>
          <div
            className='text-xs text-gray-400 mb-3'
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            Building the future with open source technology. Join UPES
            Dehradun&apos;s premier open-source community.
          </div>
          <div className='flex gap-3 mt-2'>
            <a
              href='https://github.com/upes-open'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <svg
                width='20'
                height='20'
                fill='currentColor'
                className='hover:text-white transition-colors'
              >
                <path d='M10 .3A9.7 9.7 0 0 0 .3 10c0 4.3 2.7 8 6.5 9.3.5.1.7-.2.7-.5v-1.7c-2.7.6-3.3-1.2-3.3-1.2-.4-1-.9-1.3-.9-1.3-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.8.8 2.2.6.1-.5.3-.8.5-1-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.7 0 3.7-2.3 4.6-4.5 4.8.3.3.6.8.6 1.7v2.5c0 .3.2.6.7.5A9.7 9.7 0 0 0 19.7 10 9.7 9.7 0 0 0 10 .3z' />
              </svg>
            </a>
            <a
              href='https://twitter.com/upesopen'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <svg
                width='20'
                height='20'
                fill='currentColor'
                className='hover:text-white transition-colors'
              >
                <path d='M20 3.9a8.2 8.2 0 0 1-2.4.7A4.1 4.1 0 0 0 19.4 2c-.8.5-1.7.9-2.6 1.1A4.1 4.1 0 0 0 9.8 7.5c0 .3 0 .6.1.9A11.7 11.7 0 0 1 2.2 2.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1-.3.1-.7.2-1 .2-.2 0-.5 0-.7-.1.5 1.6 2 2.7 3.7 2.7A8.3 8.3 0 0 1 0 17.6a11.7 11.7 0 0 0 6.3 1.8c7.5 0 11.6-6.2 11.6-11.6v-.5A8.2 8.2 0 0 0 20 3.9z' />
              </svg>
            </a>
            <a
              href='https://www.instagram.com/upesopen_/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 448 512'
                fill='currentColor'
                className='hover:text-white transition-colors'
              >
                <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.9S388.6 1.7 353.3 0C317.5-1.7 130.5-1.7 94.7 0 59.4 1.7 28 9.9 1.7 36.2S1.7 123.4 0 158.7c-1.7 35.3-1.7 222.3 0 257.6 1.7 35.3 9.9 66.7 36.2 92.9s57.6 34.5 92.9 36.2c35.8 1.7 222.8 1.7 258.6 0 35.3-1.7 66.7-9.9 92.9-36.2s34.5-57.6 36.2-92.9c1.7-35.3 1.7-222.3 0-257.6zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5C121.2 9 191 11.6 224.1 11.6s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.7 102.9-9 132.3z' />
              </svg>
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div className='flex-1 min-w-[180px]'>
          <div
            className='font-semibold mb-2'
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            Quick Links
          </div>
          <ul
            className='text-sm space-y-1'
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            <li>
              <a href='#about' className='hover:underline'>
                About Us
              </a>
            </li>
            <li>
              <a href='#events' className='hover:underline'>
                Events
              </a>
            </li>
            <li>
              <a href='#projects' className='hover:underline'>
                Projects
              </a>
            </li>
            <li>
              <a href='#placements' className='hover:underline'>
                Placements
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links
                we can add legal links if upes open community reqs
                <div className="min-w-[180px] flex-1">
                    <div className="font-semibold mb-2" style={{ fontFamily: 'var(--font-geist-mono)' }}>Legal</div>
                    <ul className="text-sm space-y-1" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                        <li><a href="#terms" className="hover:underline">Terms of Service</a></li>
                        <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div> */}
        {/* Contact */}
        <div className='flex-1 min-w-[180px]'>
          <div
            className='font-semibold mb-2'
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            Contact
          </div>
          <div
            className='text-sm'
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            UPES Dehradun
          </div>
          <div
            className='text-sm'
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            Uttarakhand, India
          </div>
          <a
            href='mailto:opencommunity.managers@gmail.com'
            className='text-sm text-blue-400 hover:underline'
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            opencommunity.managers@gmail.com
          </a>
        </div>
      </div>
      <hr className='border-gray-700 my-4' />
      <div className='max-w-6xl mx-auto flex flex-col items-center'>
        <div
          className='text-xs text-gray-400 mb-2'
          style={{ fontFamily: 'var(--font-geist-mono)' }}
        >
          © 2025 OPEN COMMUNITY UPES. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
