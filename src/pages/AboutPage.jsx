import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      {/* About Header */}
      <div style={{ backgroundColor: '#003260', color: 'white', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '2.5rem', marginBottom: '1rem' }}>
            About the Military Family Education Guide
          </h1>
          <p style={{ maxWidth: '800px', marginBottom: '2rem' }}>
            Supporting military families through educational transitions and challenges.
          </p>
        </div>
      </div>
      
      {/* About Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Breadcrumb Navigation */}
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ color: '#0071bc', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span>About Us</span>
        </div>
        
        {/* Mission Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '1.75rem', marginBottom: '1.5rem', color: '#003260' }}>
            Our Mission
          </h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            The Military Family Education Guide is dedicated to supporting military families as they navigate the unique educational challenges that come with military life. Our mission is to provide comprehensive, accessible resources that empower military families to make informed decisions about their children's education despite frequent relocations, deployments, and other military-specific challenges.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
            We believe that every military child deserves educational continuity and excellence, regardless of how often they move or where they are stationed. Through our guide, we aim to bridge the information gap and connect military families with the resources they need to advocate effectively for their children's education.
          </p>
        </section>
        
        {/* Who We Are Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '1.75rem', marginBottom: '1.5rem', color: '#003260' }}>
            Who We Are
          </h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            The Military Family Education Guide was created by a team of educators, military family advocates, and military-connected individuals who understand firsthand the challenges of maintaining educational continuity in military life. Our team includes:
          </p>
          <ul style={{ fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>Former military children who experienced multiple school transitions</li>
            <li style={{ marginBottom: '0.75rem' }}>Military spouses with backgrounds in education and child development</li>
            <li style={{ marginBottom: '0.75rem' }}>Educators with experience in schools serving military-connected students</li>
            <li style={{ marginBottom: '0.75rem' }}>Education policy experts focused on military family issues</li>
            <li>Military family support professionals</li>
          </ul>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
            Together, we bring a wealth of personal and professional experience to create resources that are practical, relevant, and responsive to the real needs of military families.
          </p>
        </section>
        
        {/* What We Offer Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '1.75rem', marginBottom: '1.5rem', color: '#003260' }}>
            What We Offer
          </h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            The Military Family Education Guide provides:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr', gap: '2rem' }}>
            <div style={{ backgroundColor: '#f0f0f0', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '1.25rem', marginBottom: '1rem', color: '#003260' }}>
                Comprehensive Information
              </h3>
              <p style={{ lineHeight: '1.6' }}>
                Detailed chapters covering all stages of education from early childhood through post-secondary options, with special attention to military-specific challenges and opportunities.
              </p>
            </div>
            
            <div style={{ backgroundColor: '#f0f0f0', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '1.25rem', marginBottom: '1rem', color: '#003260' }}>
                Practical Tools
              </h3>
              <p style={{ lineHeight: '1.6' }}>
                Downloadable checklists, timelines, and templates to help families prepare for and manage educational transitions, deployments, and other military life events.
              </p>
            </div>
            
            <div style={{ backgroundColor: '#f0f0f0', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '1.25rem', marginBottom: '1rem', color: '#003260' }}>
                Resource Directory
              </h3>
              <p style={{ lineHeight: '1.6' }}>
                Curated lists of military and civilian resources, programs, and organizations that support military children's education and well-being.
              </p>
            </div>
            
            <div style={{ backgroundColor: '#f0f0f0', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '1.25rem', marginBottom: '1rem', color: '#003260' }}>
                Expert Guidance
              </h3>
              <p style={{ lineHeight: '1.6' }}>
                Insights and advice from education professionals, military family support specialists, and experienced military parents on navigating common challenges.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Partners Section */}
        <section>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '1.75rem', marginBottom: '1.5rem', color: '#003260' }}>
            Our Partners
          </h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            The Military Family Education Guide is made possible through collaboration with various organizations dedicated to supporting military families, including:
          </p>
          <ul style={{ fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>Military Child Education Coalition (MCEC)</li>
            <li style={{ marginBottom: '0.75rem' }}>National Military Family Association (NMFA)</li>
            <li style={{ marginBottom: '0.75rem' }}>Military Families Learning Network (MFLN)</li>
            <li style={{ marginBottom: '0.75rem' }}>Department of Defense Education Activity (DoDEA)</li>
            <li>Military OneSource</li>
          </ul>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            We are grateful for their support and shared commitment to military children's educational success.
          </p>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link 
              to="/contact" 
              style={{
                display: 'inline-block',
                backgroundColor: '#003260',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.25rem',
                textDecoration: 'none',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '500'
              }}
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
