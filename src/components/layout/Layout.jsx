import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import useScrollPosition from '../../hooks/useScrollPosition';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../../utils/motionPreferences';

const Layout = () => {
  // Use the custom hook to manage scroll positions
  const { scrollToTop, isScrollRestored } = useScrollPosition();
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const prevPathRef = useRef(location.pathname);

  // Calculate header height for main content padding
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Function to update header height
    const updateHeaderHeight = () => {
      const utilityBarElement = document.querySelector('.utility-bar');
      const headerElement = document.querySelector('header');

      let totalHeight = 0;

      if (utilityBarElement) {
        totalHeight += utilityBarElement.offsetHeight;
      }

      if (headerElement) {
        totalHeight += headerElement.offsetHeight;
      }

      setHeaderHeight(totalHeight);
    };

    // Update on mount and window resize
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    // Small delay to ensure header is fully rendered
    const timeoutId = setTimeout(updateHeaderHeight, 100);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      clearTimeout(timeoutId);
    };
  }, []);

  // Add scroll event listener to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Track previous path for transition direction
  useEffect(() => {
    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden', // Prevent horizontal scrollbar during transitions
  };

  const mainStyle = {
    flexGrow: 1,
    paddingTop: `${headerHeight}px`, // Add padding to account for fixed header
    position: 'relative', // For absolute positioning of transitions
  };

  // Scroll to top button styles
  const scrollToTopButtonStyle = {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    backgroundColor: '#7A003C', // Maroon from design system
    color: 'white',
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    border: 'none',
    opacity: showScrollToTop ? 1 : 0,
    visibility: showScrollToTop ? 'visible' : 'hidden',
    transition: 'opacity 0.3s, visibility 0.3s',
    zIndex: 999,
  };

  // Enhanced page transition variants
  const pageTransitionVariants = {
    initial: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: "easeOut",
        when: "beforeChildren",
      }
    },
    exit: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : -10,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <div style={layoutStyle}>
      <Header />
      <main style={mainStyle}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransitionVariants}
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
            }}
            onAnimationComplete={() => {
              // This ensures any post-animation cleanup happens
              if (!isScrollRestored) {
                // Force a scroll position update if it hasn't happened yet
                window.scrollTo(window.scrollX, window.scrollY);
              }
            }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />

      {/* Scroll to top button */}
      <motion.button
        style={scrollToTopButtonStyle}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </motion.button>
    </div>
  );
};

export default Layout;
