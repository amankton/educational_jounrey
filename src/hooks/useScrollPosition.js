import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { useReducedMotion } from '../utils/motionPreferences';

// This custom hook manages scroll position when navigating between pages
const useScrollPosition = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const scrollingRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const [isScrollRestored, setIsScrollRestored] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Calculate and cache header height
  useEffect(() => {
    const calculateHeaderHeight = () => {
      const utilityBarHeight = document.querySelector('.utility-bar')?.offsetHeight || 0;
      const mainHeaderHeight = document.querySelector('header')?.offsetHeight || 0;
      const totalHeaderHeight = utilityBarHeight + mainHeaderHeight;
      setHeaderHeight(totalHeaderHeight);
    };

    calculateHeaderHeight();
    window.addEventListener('resize', calculateHeaderHeight);

    // Small delay to ensure header is fully rendered
    const timeoutId = setTimeout(calculateHeaderHeight, 100);

    return () => {
      window.removeEventListener('resize', calculateHeaderHeight);
      clearTimeout(timeoutId);
    };
  }, []);

  // Store scroll positions in session storage to persist during the session
  const saveScrollPosition = (path) => {
    if (!path) return;
    const scrollPosition = window.scrollY;
    sessionStorage.setItem(`scrollPosition-${path}`, scrollPosition.toString());
  };

  const getScrollPosition = (path) => {
    if (!path) return 0;
    const savedPosition = sessionStorage.getItem(`scrollPosition-${path}`);
    return savedPosition ? parseInt(savedPosition, 10) : 0;
  };

  // Use requestAnimationFrame for smoother scrolling
  const scrollToPosition = (position, smooth = true) => {
    if (scrollingRef.current) return;

    scrollingRef.current = true;

    // Don't use smooth scrolling if user prefers reduced motion
    const shouldUseSmooth = smooth && !prefersReducedMotion;

    if (shouldUseSmooth) {
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });

      // Reset scrolling flag after animation completes
      setTimeout(() => {
        scrollingRef.current = false;
        setIsScrollRestored(true);
      }, 500);
    } else {
      window.scrollTo(0, position);
      scrollingRef.current = false;
      setIsScrollRestored(true);
    }
  };

  // Save scroll position when navigating away
  useEffect(() => {
    // Save the current scroll position when leaving a page
    return () => {
      saveScrollPosition(pathname);
    };
  }, [pathname]);

  // Handle scroll restoration on navigation
  useEffect(() => {
    setIsScrollRestored(false);

    // Use a small delay to ensure page transition animations have started
    const timeoutId = setTimeout(() => {
      // Handle scroll position based on navigation type and hash
      if (hash) {
        // If there's a hash in the URL, scroll to that element
        const element = document.getElementById(hash.substring(1));
        if (element) {
          // Add a small delay to ensure the page is fully rendered
          setTimeout(() => {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            scrollToPosition(elementPosition - headerHeight - 20); // 20px extra padding
          }, 100);
          return;
        }
      }

      // Handle different navigation types
      if (navigationType === 'POP') {
        // Browser back/forward button was used, restore previous position
        const savedPosition = getScrollPosition(pathname);
        scrollToPosition(savedPosition, false);
      } else {
        // For PUSH or REPLACE navigation (clicking links), scroll to top
        scrollToPosition(0, false);
      }
    }, 50); // Small delay to allow for transition animations to start

    return () => clearTimeout(timeoutId);
  }, [pathname, hash, navigationType, headerHeight]);

  // Add a "scroll to top" button functionality
  const scrollToTop = () => {
    scrollToPosition(0);
  };

  return { scrollToTop, isScrollRestored };
};

export default useScrollPosition;
