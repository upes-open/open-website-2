export interface NavigationItem {
  href: string;
  label: string;
}

export const navigationItems: NavigationItem[] = [
  { href: '/about', label: 'About' },
  { href: '/our-team', label: 'Our Team' },
  { href: '/alumni', label: 'Alumni' },
  { href: '/events', label: 'Events' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact-us', label: 'Contact Us' },
] as const;
