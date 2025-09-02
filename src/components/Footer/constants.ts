import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SocialLink, QuickLink, ContactInfo, CommunityInfo } from './types';

export const COMMUNITY_INFO: CommunityInfo = {
  name: 'OPEN COMMUNITY UPES',
  tagline: 'Aware, adopt, contribute',
  description:
    "Building the future with open source technology. Join UPES Dehradun's premier open-source community.",
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/upes-open',
    label: 'GitHub',
    icon: FaGithub,
  },
  {
    href: 'https://twitter.com/upesopen',
    label: 'Twitter',
    icon: FaTwitter,
  },
  {
    href: 'https://www.instagram.com/upesopen_/',
    label: 'Instagram',
    icon: FaInstagram,
  },
] as const;

export const QUICK_LINKS: QuickLink[] = [
  { href: '/about', label: 'About Us' },
  { href: '/events', label: 'Events' },
  { href: '/projects', label: 'Projects' },
  { href: '/alumni', label: 'Alumni' },
  { href: '/contact-us', label: 'Contact Us' },
] as const;

export const CONTACT_INFO: ContactInfo = {
  location: 'UPES Dehradun',
  region: 'Uttarakhand, India',
  email: 'opencommunity.managers@gmail.com',
} as const;

export const COPYRIGHT_YEAR = new Date().getFullYear();
export const COPYRIGHT_TEXT = `© ${COPYRIGHT_YEAR} OPEN COMMUNITY UPES. All rights reserved.`;
