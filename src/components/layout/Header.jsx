import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const headerRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll event listener to detect when the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Check if page is scrolled more than 10px
      setIsScrolled(currentScrollPos > 10);

      // Show/hide header based on scroll direction
      // Always show utility bar with search functionality
      if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        // Scrolling down - hide main nav but keep utility bar
        setHeaderVisible(false);
      } else {
        // Scrolling up - show full header
        setHeaderVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    // Add event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  // Header styles
  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    boxShadow: isScrolled
      ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      : 'none',
    borderBottom: isScrolled ? 'none' : '1px solid #e5e7eb',
    zIndex: 1000,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-bottom 0.3s ease',
    transform: headerVisible ? 'translateY(0)' : 'translateY(-100%)',
  };

  // Top utility bar styles
  const utilityBarStyle = {
    backgroundColor: '#003260', // Reverted to navy blue
    color: 'white',
    padding: '0.5rem 0',
    position: 'relative',
    zIndex: 1001, // Higher than the main header
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    fontFamily: '"Bebas Neue", sans-serif',
    fontSize: '1.25rem',
    letterSpacing: '0.05em',
  };

  const utilityLinksStyle = {
    display: 'none',
    gap: '1rem',
    fontSize: '0.875rem',
  };

  // Media query for desktop
  if (window.innerWidth >= 768) {
    utilityLinksStyle.display = 'flex';
  }

  const utilityLinkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  // Main navigation styles
  const navContainerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const brandStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  };

  const brandTextStyle = {
    fontFamily: '"Bebas Neue", sans-serif',
    fontSize: '1.5rem',
    color: '#003260', // Reverted to navy blue
  };

  const desktopNavStyle = {
    display: 'none',
    gap: '1.5rem',
  };

  // Media query for desktop
  if (window.innerWidth >= 768) {
    desktopNavStyle.display = 'flex';
  }

  const navLinkStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '500',
    color: '#343a40',
    textDecoration: 'none',
  };

  const mobileMenuButtonStyle = {
    display: window.innerWidth >= 768 ? 'none' : 'block',
    color: '#343a40',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  const mobileMenuStyle = {
    marginTop: '1rem',
    paddingBottom: '1rem',
    display: isMenuOpen ? 'block' : 'none',
  };

  return (
    <>
      {/* Top Utility Bar - Always visible */}
      <div
        className="utility-bar"
        style={{
          ...utilityBarStyle,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          transform: 'none', // Always visible
        }}>
        <div style={containerStyle}>
          <div style={logoStyle}>
            MILITARY FAMILY EDUCATION GUIDE
          </div>
          <div style={utilityLinksStyle}>
            <Link to="/contact" style={utilityLinkStyle} state={{ scrollToTop: true }}>Contact Us</Link>
            <Link to="/about" style={utilityLinkStyle} state={{ scrollToTop: true }}>About Us</Link>
          </div>
          <div>
            <SearchBar isCompact={true} />
          </div>
        </div>
      </div>

      {/* Main Header - Can hide on scroll down */}
      <header style={{
        ...headerStyle,
        top: '40px', // Height of utility bar
      }}>

      {/* Main Navigation */}
      <div style={navContainerStyle}>
        <Link to="/" style={brandStyle} state={{ scrollToTop: true }}>
          <span style={brandTextStyle}>NAVIGATING EDUCATIONAL JOURNEYS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav style={desktopNavStyle}>
          <Link to="/" style={navLinkStyle} state={{ scrollToTop: true }}>
            Home
          </Link>
          <div style={{ position: 'relative' }}>
            <button style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}>
              Resource Guide
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1rem', width: '1rem', marginLeft: '0.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div style={{
              position: 'absolute',
              left: 0,
              top: '100%',
              width: '240px',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              borderRadius: '0.25rem',
              padding: '0.5rem 0',
              zIndex: 10,
              display: 'none'
            }} className="dropdown-menu">
              <Link to="/guide/introduction" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Introduction</Link>
              <Link to="/guide/chapter-1" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Chapter 1: Foundations</Link>
              <Link to="/guide/chapter-2" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Chapter 2: K-12 System</Link>
              <Link to="/guide/chapter-3" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Chapter 3: After High School</Link>
              <Link to="/guide/chapter-4" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Chapter 4: Military Families</Link>
              <Link to="/guide/chapter-5" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Chapter 5: Alternative Education</Link>
              <Link to="/guide/chapter-6" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Chapter 6: Wellbeing</Link>
              <Link to="/guide/appendices" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Appendices & Resources</Link>
              <Link to="/guide/conclusion" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Conclusion</Link>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <button style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}>
              Checklists
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1rem', width: '1rem', marginLeft: '0.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div style={{
              position: 'absolute',
              left: 0,
              top: '100%',
              width: '280px',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              borderRadius: '0.25rem',
              padding: '0.5rem 0',
              zIndex: 10,
              display: 'none'
            }} className="dropdown-menu">
              <Link to="/checklists#school-transition" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>School Transition Checklist</Link>
              <Link to="/checklists#deployment-support" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Deployment Education Support</Link>
              <Link to="/checklists#college-application" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>College Application Timeline</Link>
              <Link to="/checklists#elementary-school" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Elementary School Checklist</Link>
              <Link to="/checklists#middle-school" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Middle School Planning</Link>
              <Link to="/checklists#high-school" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>High School Year-by-Year</Link>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <button style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}>
              References
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1rem', width: '1rem', marginLeft: '0.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div style={{
              position: 'absolute',
              left: 0,
              top: '100%',
              width: '280px',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              borderRadius: '0.25rem',
              padding: '0.5rem 0',
              zIndex: 10,
              display: 'none'
            }} className="dropdown-menu">
              <Link to="/references#military-family-education" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Military Family Education</Link>
              <Link to="/references#school-readiness" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>School Readiness & Early Education</Link>
              <Link to="/references#college-preparation" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>College Preparation & Applications</Link>
              <Link to="/references#special-education" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Special Education & Learning Support</Link>
              <Link to="/references#homeschooling" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Homeschooling Resources</Link>
              <Link to="/references#mental-health" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Mental Health & Resilience</Link>
              <Link to="/references#career-exploration" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Career Exploration & Planning</Link>
              <Link to="/references#virginia-resources" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Virginia-Specific Resources</Link>
              <Link to="/references#summer-learning" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Summer Learning & Enrichment</Link>
              <Link to="/references#academic-support" style={{ display: 'block', padding: '0.5rem 1rem', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Academic Support & Planning</Link>
            </div>
          </div>
          <Link to="/glossary" style={navLinkStyle} state={{ scrollToTop: true }}>
            Glossary
          </Link>
          <Link to="/search" style={navLinkStyle} state={{ scrollToTop: true }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1rem', width: '1rem', marginRight: '0.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </div>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          style={mobileMenuButtonStyle}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '1.5rem', width: '1.5rem' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div style={mobileMenuStyle}>
          <Link to="/" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none' }} state={{ scrollToTop: true }}>
            Home
          </Link>
          <div style={{ padding: '0.5rem 0' }}>
            <button
              onClick={() => document.getElementById('mobileSubmenu').style.display = document.getElementById('mobileSubmenu').style.display === 'block' ? 'none' : 'block'}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', color: '#343a40', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Resource Guide
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1rem', width: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div id="mobileSubmenu" style={{ display: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
              <Link to="/guide/introduction" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Introduction</Link>
              <Link to="/guide/chapter-1" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Chapter 1: Foundations</Link>
              <Link to="/guide/chapter-2" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Chapter 2: K-12 System</Link>
              <Link to="/guide/chapter-3" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Chapter 3: After High School</Link>
              <Link to="/guide/chapter-4" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Chapter 4: Military Families</Link>
              <Link to="/guide/chapter-5" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Chapter 5: Alternative Education</Link>
              <Link to="/guide/chapter-6" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Chapter 6: Wellbeing</Link>
              <Link to="/guide/appendices" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Appendices & Resources</Link>
              <Link to="/guide/conclusion" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Conclusion</Link>
            </div>
          </div>
          <div style={{ padding: '0.5rem 0' }}>
            <button
              onClick={() => document.getElementById('mobileChecklistsSubmenu').style.display = document.getElementById('mobileChecklistsSubmenu').style.display === 'block' ? 'none' : 'block'}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', color: '#343a40', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Checklists
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1rem', width: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div id="mobileChecklistsSubmenu" style={{ display: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
              <Link to="/checklists#school-transition" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>School Transition Checklist</Link>
              <Link to="/checklists#deployment-support" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Deployment Education Support</Link>
              <Link to="/checklists#college-application" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>College Application Timeline</Link>
              <Link to="/checklists#elementary-school" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Elementary School Checklist</Link>
              <Link to="/checklists#middle-school" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Middle School Planning</Link>
              <Link to="/checklists#high-school" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>High School Year-by-Year</Link>
            </div>
          </div>

          <div style={{ padding: '0.5rem 0' }}>
            <button
              onClick={() => document.getElementById('mobileReferencesSubmenu').style.display = document.getElementById('mobileReferencesSubmenu').style.display === 'block' ? 'none' : 'block'}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', color: '#343a40', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              References
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1rem', width: '1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div id="mobileReferencesSubmenu" style={{ display: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
              <Link to="/references#military-family-education" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Military Family Education</Link>
              <Link to="/references#school-readiness" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>School Readiness & Early Education</Link>
              <Link to="/references#college-preparation" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>College Preparation & Applications</Link>
              <Link to="/references#special-education" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Special Education & Learning Support</Link>
              <Link to="/references#homeschooling" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Homeschooling Resources</Link>
              <Link to="/references#mental-health" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Mental Health & Resilience</Link>
              <Link to="/references#career-exploration" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Career Exploration & Planning</Link>
              <Link to="/references#virginia-resources" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Virginia-Specific Resources</Link>
              <Link to="/references#summer-learning" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Summer Learning & Enrichment</Link>
              <Link to="/references#academic-support" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none', fontSize: '0.875rem' }} state={{ scrollToTop: true }}>Academic Support & Planning</Link>
            </div>
          </div>
          <Link to="/glossary" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none' }} state={{ scrollToTop: true }}>
            Glossary
          </Link>
          <Link to="/contact" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none' }} state={{ scrollToTop: true }}>
            Contact Us
          </Link>
          <Link to="/about" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none' }} state={{ scrollToTop: true }}>
            About Us
          </Link>
          {/* Search link - only the link to search page, no search input field */}
          <Link to="/search" style={{ display: 'block', padding: '0.5rem 0', color: '#343a40', textDecoration: 'none' }} state={{ scrollToTop: true }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1rem', width: '1rem', marginRight: '0.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </div>
          </Link>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
