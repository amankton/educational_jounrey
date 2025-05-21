// Utility to check for user's motion preference
import { useEffect, useState } from 'react';

// Hook to detect if user prefers reduced motion
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if the browser supports this feature
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Add listener for changes
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };
    
    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    } 
    // Older browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => {
        mediaQuery.removeListener(handleChange);
      };
    }
  }, []);

  return prefersReducedMotion;
};

// Animation variants that respect reduced motion preferences
export const getAnimationVariants = (prefersReducedMotion) => {
  // Base animation configurations
  const fadeIn = prefersReducedMotion 
    ? { opacity: 1 } 
    : { 
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration: 0.4 }
        }
      };
  
  const slideUp = prefersReducedMotion
    ? { opacity: 1 }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" }
        }
      };
  
  const staggerChildren = prefersReducedMotion
    ? { delayChildren: 0 }
    : { delayChildren: 0.1, staggerChildren: 0.05 };
  
  const scale = prefersReducedMotion
    ? {}
    : {
        hover: { scale: 1.03, transition: { duration: 0.2 } },
        tap: { scale: 0.98 }
      };
  
  const highlight = prefersReducedMotion
    ? {}
    : {
        initial: { backgroundColor: "rgba(122, 0, 60, 0)" },
        highlight: { 
          backgroundColor: "rgba(122, 0, 60, 0.1)",
          transition: { duration: 0.3 }
        },
        exit: { 
          backgroundColor: "rgba(122, 0, 60, 0)",
          transition: { duration: 0.5 }
        }
      };
  
  return {
    fadeIn,
    slideUp,
    staggerChildren,
    scale,
    highlight
  };
};
