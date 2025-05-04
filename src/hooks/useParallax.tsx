import React, { useEffect, useState } from 'react';
export const useParallax = (sensitivity = 0.1) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) * sensitivity;
      const y = (window.innerHeight / 2 - e.clientY) * sensitivity;
      setPosition({
        x,
        y
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [sensitivity]);
  return position;
};