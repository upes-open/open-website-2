'use client';

import { useState, useCallback } from 'react';

export function useMobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  return {
    isOpen,
    toggleMenu,
    closeMenu,
    openMenu,
  };
}
