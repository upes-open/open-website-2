import getGithubOgImage from './getOGimage';

export interface Project {
  src: string;
  alt: string;
  githubLink: string;
  projectName: string;
  shortDescription: string;
}

export const projects: Project[] = [
  {
    src: getGithubOgImage('https://github.com/upes-open/OSoC-25-Giglance'),
    alt: 'Gallery image 1',
    githubLink: 'https://github.com/upes-open/OSoC-25-Giglance',
    projectName: 'OSoC-25-Giglance',
    shortDescription:
      'Giglance is a modern, open-source freelancing platform tailored for the Indian gig economy. Inspired by platforms like Upwork, it’s built for beginners to gain real-world development experience while solving real-world problems.',
  },
  {
    src: '/images/placeholder.png',
    alt: 'Gallery image 2',
    githubLink: 'https://github.com/upes-open/OSoC-25-Cloud-Craver',
    projectName: 'OSoC-25-Cloud-Craver',
    shortDescription:
      'Cloud Craver is a powerful, command-line-driven framework for simplifying cloud infrastructure management. It provides a unified interface to provision, manage, and monitor resources across multiple cloud providers.',
  },
  {
    src: '/images/placeholder.png',
    alt: 'Gallery image 3',
    githubLink: 'https://github.com/upes-open/OSoC-2025-ClipSync',
    projectName: 'OSoC-2025-ClipSync',
    shortDescription:
      'ClipSync is a minimal Python-based clipboard sync tool that enables bidirectional text sharing between a Windows PC and an Android device over a local network. It uses AES encryption for privacy and a simple client-server model using Flask and requests.',
  },
  {
    src: '/images/placeholder.png',
    alt: 'Gallery image 4',
    githubLink: 'https://github.com/upes-open/OSoC-25-Askage',
    projectName: 'OSoC-25-Askage',
    shortDescription:
      'Askage is a minimalist, context-aware chat extension for Chrome that enhances any webpage with intelligent assistance.',
  },
  {
    src: '/images/placeholder.png',
    alt: 'Gallery image 5',
    githubLink: 'https://github.com/upes-open/OSoC-25-FormEase',
    projectName: 'OSoC-25-FormEase',
    shortDescription:
      'FormEase is a lightweight Chrome Extension that streamlines the file upload process for online application forms. Users can resize, compress, and convert images or videos directly inside any webpage — without needing external tools.',
  },
];
