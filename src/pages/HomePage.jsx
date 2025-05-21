import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../utils/motionPreferences';
import SkeletonLoader from '../components/ui/SkeletonLoader';

const HomePage = () => {
  // State to track window width for responsive behavior (for the feature grid)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  // Add a useEffect hook to handle window resize events
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Simulate content loading
  useEffect(() => {
    // Simulate a loading delay to show skeleton
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Simple parallax style using the approach from the example
  const parallaxStyle = {
    backgroundImage: 'url(https://iili.io/3LAyR0N.png)',
    minHeight: '600px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative', // To position the overlay and content
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    marginBottom: '2rem', // Reduced from 3rem for better balance with the smaller transition
    // Add these properties to help with browser compatibility
    WebkitBackgroundSize: 'cover', // For Safari
    MozBackgroundSize: 'cover', // For Firefox
    OBackgroundSize: 'cover', // For Opera
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 50, 96, 0.7)', // Navy blue with opacity
    zIndex: 1, // Above the background image
  };

  const heroContentStyle = {
    maxWidth: '800px',
    padding: '0 1rem',
    position: 'relative',
    zIndex: 2, // Above the overlay
  };

  const heading1Style = {
    fontFamily: '"Bebas Neue", sans-serif',
    fontSize: '4rem',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  const heading2Style = {
    fontFamily: '"Bebas Neue", sans-serif',
    fontSize: '2.5rem',
    color: '#F6C100', // Yellow
    marginBottom: '2rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  const paragraphStyle = {
    fontSize: '1.25rem',
    maxWidth: '48rem',
    margin: '0 auto 2rem auto',
    lineHeight: '1.6',
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: '0.25rem',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '600',
    backgroundColor: '#F6C100', // Yellow
    color: '#003260', // Navy
    cursor: 'pointer',
    border: 'none',
    fontSize: '1.125rem',
    transition: 'all 0.3s ease',
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '2rem 1rem 4rem',
  };

  const sectionTitleStyle = {
    fontFamily: '"Bebas Neue", sans-serif',
    fontSize: '2.5rem',
    color: '#003260',
    marginBottom: '2rem',
    textAlign: 'center',
  };

  return (
    <div>
      {/* Hero Section with Parallax Effect - Simple Pure CSS Approach */}
      <section style={parallaxStyle}>
        {/* Overlay */}
        <div style={overlayStyle}></div>

        {/* Content */}
        <motion.div
          style={heroContentStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.5,
            ease: "easeOut",
            delay: 0.2
          }}
        >
          <motion.h1
            style={heading1Style}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.4,
              delay: 0.3
            }}
          >
            NAVIGATING EDUCATIONAL JOURNEYS
          </motion.h1>

          <motion.h2
            style={heading2Style}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.4,
              delay: 0.4
            }}
          >
            A MILITARY FAMILY'S GUIDE
          </motion.h2>

          <motion.p
            style={paragraphStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.4,
              delay: 0.5
            }}
          >
            Your trusted companion for navigating your military child's educational journey through transitions, deployments, and new beginnings.
          </motion.p>

          <motion.a
            href="/guide/introduction"
            style={buttonStyle}
            whileHover={{
              backgroundColor: '#e0af00',
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.3,
              delay: 0.6
            }}
          >
            Start Exploring
          </motion.a>
        </motion.div>
      </section>

      {/* Transition Element - creates a subtle smooth visual transition from parallax to content */}
      <div style={{
        height: '40px', // Reduced from 80px to make it less prominent
        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.8) 80%, rgba(255,255,255,1) 100%)',
        marginTop: '-40px', // Adjusted to match the new height
        position: 'relative',
        zIndex: 3, // Higher than the hero content
      }}></div>

      {/* Main Content Section */}
      <section style={{
        ...containerStyle,
        position: 'relative',
        zIndex: 4, // Higher than the transition element
        backgroundColor: 'white',
        boxShadow: '0 -5px 15px rgba(0,0,0,0.03)', // Even more subtle shadow for depth
        paddingTop: '1.5rem', // Add a bit more padding at the top for better spacing
      }}>
        {loading ? (
          <>
            <SkeletonLoader type="title" width="60%" height="40px" />
            <SkeletonLoader type="text" lines={2} />
          </>
        ) : (
          <>
            <motion.h2
              style={sectionTitleStyle}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                delay: 0.1
              }}
            >
              SUPPORTING MILITARY FAMILIES
            </motion.h2>
            <motion.p
              style={{ ...paragraphStyle, textAlign: 'center', color: '#343a40' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                delay: 0.2
              }}
            >
              This comprehensive guide provides resources, tools, and insights to help military families navigate the unique educational challenges that come with military life.
            </motion.p>
          </>
        )}

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: windowWidth >= 768 ? 'repeat(3, 1fr)' : '1fr',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {loading ? (
            // Skeleton loaders for features
            <>
              <SkeletonLoader type="card" height="300px" />
              <SkeletonLoader type="card" height="300px" />
              <SkeletonLoader type="card" height="300px" />
            </>
          ) : (
            // Actual feature content
            <>
              {/* Feature 1 */}
              <motion.a
                href="/guide/introduction"
                style={{
                  backgroundColor: '#f8f9fa',
                  borderRadius: '0.5rem',
                  padding: '2rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.4,
                  delay: 0.3
                }}
                whileHover={{ y: -10 }}
                whileTap={{ y: -5 }}
              >
            <div style={{
              backgroundColor: '#003260',
              color: 'white',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              1
            </div>
            <h3 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontSize: '1.25rem',
              marginBottom: '1rem',
              color: '#003260'
            }}>
              Educational Resources
            </h3>
            <p style={{ color: '#343a40', lineHeight: '1.6' }}>
              Access comprehensive resources for every stage of your child's education, from early childhood through post-secondary options.
            </p>
          </motion.a>

          {/* Feature 2 */}
          <motion.a
            href="/guide/chapter-4"
            style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '0.5rem',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              display: 'block',
              textDecoration: 'none',
              color: 'inherit'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.4,
              delay: 0.4
            }}
            whileHover={{ y: -10 }}
            whileTap={{ y: -5 }}
          >
            <div style={{
              backgroundColor: '#7A003C',
              color: 'white',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              2
            </div>
            <h3 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontSize: '1.25rem',
              marginBottom: '1rem',
              color: '#7A003C'
            }}>
              Transition Support
            </h3>
            <p style={{ color: '#343a40', lineHeight: '1.6' }}>
              Find practical tools and guidance for managing school transitions during PCS moves, deployments, and other military life events.
            </p>
          </motion.a>

          {/* Feature 3 */}
          <motion.a
            href="/guide/chapter-5"
            style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '0.5rem',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              display: 'block',
              textDecoration: 'none',
              color: 'inherit'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.4,
              delay: 0.5
            }}
            whileHover={{ y: -10 }}
            whileTap={{ y: -5 }}
          >
            <div style={{
              backgroundColor: '#005F81',
              color: 'white',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              3
            </div>
            <h3 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontSize: '1.25rem',
              marginBottom: '1rem',
              color: '#005F81'
            }}>
              Special Education Guidance
            </h3>
            <p style={{ color: '#343a40', lineHeight: '1.6' }}>
              Navigate special education services across different school systems with expert advice and advocacy strategies.
            </p>
          </motion.a>
            </>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        style={{
          backgroundColor: '#003260',
          color: 'white',
          padding: '4rem 1rem',
          textAlign: 'center',
          marginTop: '3rem'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.5,
          delay: 0.2
        }}
      >
        {loading ? (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <SkeletonLoader type="title" width="70%" height="40px" />
            <SkeletonLoader type="text" lines={2} />
            <div style={{
              width: '150px',
              height: '50px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '4px',
              margin: '2rem auto 0'
            }} />
          </div>
        ) : (
          <motion.div
            style={{ maxWidth: '800px', margin: '0 auto' }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: prefersReducedMotion ? 0 : 0.15
                }
              }
            }}
          >
            <motion.h2
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: '2.5rem',
                marginBottom: '1.5rem'
              }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 }
                }
              }}
            >
              START YOUR EDUCATIONAL JOURNEY TODAY
            </motion.h2>
            <motion.p
              style={{
                fontSize: '1.125rem',
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 }
                }
              }}
            >
              Access our complete guide and take the first step toward educational success for your military child.
            </motion.p>
            <motion.a
              href="/guide/introduction"
              style={{
                padding: '0.75rem 2rem',
                borderRadius: '0.25rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                backgroundColor: '#F6C100',
                color: '#003260',
                cursor: 'pointer',
                border: 'none',
                fontSize: '1.125rem',
                display: 'inline-block',
                textDecoration: 'none'
              }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 }
                }
              }}
              whileHover={{
                backgroundColor: '#e0af00',
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
};

export default HomePage;
