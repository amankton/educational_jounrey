import { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div>
      {/* Contact Header */}
      <div style={{ backgroundColor: '#003260', color: 'white', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '2.5rem', marginBottom: '1rem' }}>
            Contact Us
          </h1>
          <p style={{ maxWidth: '800px', marginBottom: '2rem' }}>
            Have questions about military education resources? We're here to help.
          </p>
        </div>
      </div>
      
      {/* Contact Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Breadcrumb Navigation */}
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ color: '#0071bc', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span>Contact Us</span>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          {/* On larger screens, use a two-column layout */}
          {window.innerWidth >= 768 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {/* Contact Form */}
              <div>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', marginBottom: '1.5rem' }}>
                  Send Us a Message
                </h2>
                
                {formSubmitted ? (
                  <div style={{ 
                    backgroundColor: '#e6f7e6', 
                    border: '1px solid #c3e6cb', 
                    color: '#155724', 
                    padding: '1rem', 
                    borderRadius: '0.25rem',
                    marginBottom: '1rem'
                  }}>
                    <p>Thank you for your message! We'll get back to you as soon as possible.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label 
                      htmlFor="name" 
                      style={{ 
                        display: 'block', 
                        marginBottom: '0.5rem', 
                        fontWeight: '500' 
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ccc',
                        borderRadius: '0.25rem'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <label 
                      htmlFor="email" 
                      style={{ 
                        display: 'block', 
                        marginBottom: '0.5rem', 
                        fontWeight: '500' 
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ccc',
                        borderRadius: '0.25rem'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <label 
                      htmlFor="subject" 
                      style={{ 
                        display: 'block', 
                        marginBottom: '0.5rem', 
                        fontWeight: '500' 
                      }}
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ccc',
                        borderRadius: '0.25rem'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label 
                      htmlFor="message" 
                      style={{ 
                        display: 'block', 
                        marginBottom: '0.5rem', 
                        fontWeight: '500' 
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ccc',
                        borderRadius: '0.25rem',
                        resize: 'vertical'
                      }}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#003260',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      border: 'none',
                      borderRadius: '0.25rem',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', marginBottom: '1.5rem' }}>
                  Contact Information
                </h2>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                    Military Family Education Guide
                  </h3>
                  <p style={{ marginBottom: '0.5rem' }}>123 Military Support Lane</p>
                  <p style={{ marginBottom: '0.5rem' }}>Arlington, VA 22201</p>
                  <p style={{ marginBottom: '0.5rem' }}>United States</p>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                    Contact Details
                  </h3>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Email:</strong> info@militaryfamilyeducation.org
                  </p>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM EST
                  </p>
                </div>
                
                <div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                    Follow Us
                  </h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#" style={{ color: '#003260', textDecoration: 'none' }}>Facebook</a>
                    <a href="#" style={{ color: '#003260', textDecoration: 'none' }}>Twitter</a>
                    <a href="#" style={{ color: '#003260', textDecoration: 'none' }}>Instagram</a>
                    <a href="#" style={{ color: '#003260', textDecoration: 'none' }}>LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* On mobile, stack the sections */}
          {window.innerWidth < 768 && (
            <>
              {/* Contact Form */}
              <div>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', marginBottom: '1.5rem' }}>
                  Send Us a Message
                </h2>
                
                {formSubmitted ? (
                  <div style={{ 
                    backgroundColor: '#e6f7e6', 
                    border: '1px solid #c3e6cb', 
                    color: '#155724', 
                    padding: '1rem', 
                    borderRadius: '0.25rem',
                    marginBottom: '1rem'
                  }}>
                    <p>Thank you for your message! We'll get back to you as soon as possible.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label 
                      htmlFor="name" 
                      style={{ 
                        display: 'block', 
                        marginBottom: '0.5rem', 
                        fontWeight: '500' 
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ccc',
                        borderRadius: '0.25rem'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <label 
                      htmlFor="email" 
                      style={{ 
                        display: 'block', 
                        marginBottom: '0.5rem', 
                        fontWeight: '500' 
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ccc',
                        borderRadius: '0.25rem'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <label 
                      htmlFor="subject" 
                      style={{ 
                        display: 'block', 
                        marginBottom: '0.5rem', 
                        fontWeight: '500' 
                      }}
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ccc',
                        borderRadius: '0.25rem'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label 
                      htmlFor="message" 
                      style={{ 
                        display: 'block', 
                        marginBottom: '0.5rem', 
                        fontWeight: '500' 
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ccc',
                        borderRadius: '0.25rem',
                        resize: 'vertical'
                      }}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#003260',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      border: 'none',
                      borderRadius: '0.25rem',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', marginBottom: '1.5rem' }}>
                  Contact Information
                </h2>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                    Military Family Education Guide
                  </h3>
                  <p style={{ marginBottom: '0.5rem' }}>123 Military Support Lane</p>
                  <p style={{ marginBottom: '0.5rem' }}>Arlington, VA 22201</p>
                  <p style={{ marginBottom: '0.5rem' }}>United States</p>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                    Contact Details
                  </h3>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Email:</strong> info@militaryfamilyeducation.org
                  </p>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM EST
                  </p>
                </div>
                
                <div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                    Follow Us
                  </h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#" style={{ color: '#003260', textDecoration: 'none' }}>Facebook</a>
                    <a href="#" style={{ color: '#003260', textDecoration: 'none' }}>Twitter</a>
                    <a href="#" style={{ color: '#003260', textDecoration: 'none' }}>Instagram</a>
                    <a href="#" style={{ color: '#003260', textDecoration: 'none' }}>LinkedIn</a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
