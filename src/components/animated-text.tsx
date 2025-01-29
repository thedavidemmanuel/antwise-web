'use client';

import { useEffect, useState } from 'react';

export default function AnimatedText() {
  const phrases = ['dreamers', 'go-getters', 'night owls', 'visionaries'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 500); // Half of the interval for fade out/in
      
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId);
  }, [phrases.length]);

  return (
    <span 
      className={`bg-gradient-to-l from-purple-600 to-purple-400 bg-clip-text text-transparent transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {phrases[currentIndex]}
    </span>
  );
}