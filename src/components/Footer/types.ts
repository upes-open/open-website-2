import { IconType } from 'react-icons';

export interface SocialLink {
  href: string;
  label: string;
  icon: IconType;
}

export interface QuickLink {
  href: string;
  label: string;
}

export interface ContactInfo {
  location: string;
  region: string;
  email: string;
}

export interface CommunityInfo {
  name: string;
  tagline: string;
  description: string;
}
