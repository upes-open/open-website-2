import { useCallback } from 'react';

export function useFooter() {
  const handleEmailClick = useCallback((email: string) => {
    window.location.href = `mailto:${email}`;
  }, []);

  const handleSocialClick = useCallback((href: string) => {
    // Optional: Add analytics tracking here
    window.open(href, '_blank', 'noopener,noreferrer');
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return {
    handleEmailClick,
    handleSocialClick,
    scrollToSection,
  };
}
