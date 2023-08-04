"use client"

import { useState, useEffect } from 'react';

const useViewport = () => {
  const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width };
};

export default useViewport;
