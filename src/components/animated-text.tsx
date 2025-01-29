'use client';

import { useEffect, useState } from 'react';

export default function AnimatedText() {
  const phrases = ['dreamers', 'go-getters', 'night owls', 'visionaries'];
  const [state, setState] = useState({
    currentIndex: 0,
    isVisible: true,
    isMounted: false
  });

  useEffect(() => {
    setState(prev => ({ ...prev, isMounted: true }));
  }, []);

  useEffect(() => {
    if (!state.isMounted) return;

    const intervalId = setInterval(() => {
      setState(prev => ({ ...prev, isVisible: false }));
      
      setTimeout(() => {
        setState(prev => ({
          ...prev,
          currentIndex: prev.currentIndex === phrases.length - 1 ? 0 : prev.currentIndex + 1,
          isVisible: true
        }));
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [state.isMounted, phrases.length]);

  // Use a stable initial render that matches SSR
  if (!state.isMounted) {
    return (
      <span 
        suppressHydrationWarning 
        className="bg-gradient-to-l from-purple-600 to-purple-400 bg-clip-text text-transparent"
      >
        {phrases[0]}
      </span>
    );
  }

  return (
    <span 
      suppressHydrationWarning
      className={`bg-gradient-to-l from-purple-600 to-purple-400 bg-clip-text text-transparent transition-opacity duration-500 ${
        state.isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {phrases[state.currentIndex]}
    </span>
  );
}