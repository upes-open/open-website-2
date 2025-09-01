import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  return (
    <header className="w-full border-b bg-white dark:bg-black px-4 sm:px-12 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Text */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="logo"
            width={45}
            height={45}
            className="rounded-md"
            priority
          />
          <span className="font-extrabold text-lg text-gray-800 dark:text-gray-100">
            OPEN COMMUNITY UPES
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden sm:block">
          <ul className="flex gap-8 text-gray-600 dark:text-gray-300 text-base font-medium">
            <li>
              <Link
                href="#about"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#team"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="#alumni"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Alumni
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Theme Toggle */}
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}