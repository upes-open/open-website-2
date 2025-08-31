'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  // Simple state for mobile menu
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const currentPath = usePathname();

  // Check if current page matches the link
  const isCurrentPage = (linkPath: string) => {
    return currentPath === linkPath;
  };

  // Toggle mobile menu open/close
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 py-4'>
        <div className='flex justify-between items-center'>
          {/* Logo and Community Name */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-sm sm:text-lg'>U</span>
            </div>
            <h1 className='text-sm sm:text-xl font-bold text-gray-900'>
              OPEN COMMUNITY UPES
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            <Link
              href='/about'
              className={`font-medium ${isCurrentPage('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              About
            </Link>
            <Link
              href='/team'
              className={`font-medium ${isCurrentPage('/team') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Our Team
            </Link>
            <Link
              href='/alumni'
              className={`font-medium ${isCurrentPage('/alumni') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Alumni
            </Link>
            <Link
              href='/contact'
              className={`font-medium ${isCurrentPage('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='text-gray-700 hover:text-blue-600'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {showMobileMenu ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className='md:hidden border-t border-gray-200 mt-4'>
            <nav className='py-4 space-y-2'>
              <Link
                href='/about'
                onClick={() => setShowMobileMenu(false)}
                className={`block px-4 py-2 font-medium ${isCurrentPage('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
              >
                About
              </Link>
              <Link
                href='/team'
                onClick={() => setShowMobileMenu(false)}
                className={`block px-4 py-2 font-medium ${isCurrentPage('/team') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Our Team
              </Link>
              <Link
                href='/alumni'
                onClick={() => setShowMobileMenu(false)}
                className={`block px-4 py-2 font-medium ${isCurrentPage('/alumni') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Alumni
              </Link>
              <Link
                href='/contact'
                onClick={() => setShowMobileMenu(false)}
                className={`block px-4 py-2 font-medium ${isCurrentPage('/contact') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
