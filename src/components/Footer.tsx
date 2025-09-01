import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='w-full bg-[#181818] text-gray-200 pt-8 pb-4 px-4 sm:px-12'>
      <div className='max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-8 pb-6'>
        {/* Community Info */}
        <div className='flex-1 min-w-[220px]'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-[60px] h-[60px] relative rounded-md overflow-hidden'>
              <Image
                src='/logo.png'
                alt='OPEN Community Logo'
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className='font-semibold text-lg font-sans'>
              OPEN COMMUNITY UPES
            </span>
          </div>
          <div className='text-sm mb-1 font-sans'>Aware, adopt, contribute</div>
          <div className='text-xs text-gray-400 mb-3 font-sans'>
            Building the future with open source technology. Join UPES
            Dehradun&apos;s premier open-source community.
          </div>
          <div className='flex gap-3 mt-2'>
            <Link
              href='https://github.com/upes-open'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <FaGithub className='w-5 h-5 hover:text-white transition-colors' />
            </Link>
            <Link
              href='https://twitter.com/upesopen'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <FaTwitter className='w-5 h-5 hover:text-white transition-colors' />
            </Link>
            <Link
              href='https://www.instagram.com/upesopen_/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <FaInstagram className='w-5 h-5 hover:text-white transition-colors' />
            </Link>
          </div>
        </div>
        {/* Quick Links */}
        <div className='flex-1 min-w-[180px]'>
          <div className='font-semibold mb-2 font-sans'>Quick Links</div>
          <ul className='text-sm space-y-1 font-sans'>
            <li>
              <Link href='#about' className='hover:underline'>
                About Us
              </Link>
            </li>
            <li>
              <Link href='#events' className='hover:underline'>
                Events
              </Link>
            </li>
            <li>
              <Link href='#projects' className='hover:underline'>
                Projects
              </Link>
            </li>
            <li>
              <Link href='#placements' className='hover:underline'>
                Placements
              </Link>
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
          <div className='font-semibold mb-2 font-sans'>Contact</div>
          <div className='text-sm font-sans'>UPES Dehradun</div>
          <div className='text-sm font-sans'>Uttarakhand, India</div>
          <a
            href='mailto:opencommunity.managers@gmail.com'
            className='text-sm text-blue-400 hover:underline font-mono'
          >
            opencommunity.managers@gmail.com
          </a>
        </div>
      </div>
      <hr className='border-gray-700 my-4' />
      <div className='max-w-6xl mx-auto flex flex-col items-center'>
        <div className='text-xs text-gray-400 mb-2 font-mono'>
          &copy; 2025 OPEN COMMUNITY UPES.{' '}
          <a
            href='{link to pdf}'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:underline'
          >
            All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
}
