import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../utils/motionPreferences';

/**
 * SkeletonLoader component for displaying placeholder content during loading
 * 
 * @param {Object} props - Component props
 * @param {string} props.type - Type of skeleton ('text', 'title', 'image', 'card', 'sidebar', 'chapter')
 * @param {number} props.lines - Number of lines for text skeleton
 * @param {string} props.width - Width of the skeleton (e.g., '100%', '200px')
 * @param {string} props.height - Height of the skeleton (e.g., '20px', '300px')
 * @param {boolean} props.animate - Whether to animate the skeleton
 */
const SkeletonLoader = ({ 
  type = 'text', 
  lines = 1, 
  width = '100%', 
  height, 
  animate = true 
}) => {
  const prefersReducedMotion = useReducedMotion();
  
  // Base skeleton style
  const skeletonStyle = {
    backgroundColor: '#e9ecef',
    borderRadius: '4px',
    display: 'block',
    width: width,
    height: height,
  };
  
  // Animation variants
  const pulseAnimation = prefersReducedMotion || !animate ? {} : {
    animate: {
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  // Render different skeleton types
  const renderSkeleton = () => {
    switch (type) {
      case 'title':
        return (
          <motion.div 
            style={{ ...skeletonStyle, height: height || '40px', marginBottom: '1.5rem' }}
            initial={{ opacity: 0.7 }}
            {...pulseAnimation}
          />
        );
        
      case 'text':
        return Array(lines).fill().map((_, i) => (
          <motion.div 
            key={i}
            style={{ 
              ...skeletonStyle, 
              height: height || '16px', 
              marginBottom: i === lines - 1 ? '1.5rem' : '0.75rem',
              width: i === lines - 1 && lines > 1 ? '80%' : width
            }}
            initial={{ opacity: 0.7 }}
            {...pulseAnimation}
          />
        ));
        
      case 'image':
        return (
          <motion.div 
            style={{ ...skeletonStyle, height: height || '200px', marginBottom: '1rem' }}
            initial={{ opacity: 0.7 }}
            {...pulseAnimation}
          />
        );
        
      case 'card':
        return (
          <div style={{ 
            padding: '1.5rem', 
            borderRadius: '8px', 
            backgroundColor: '#f8f9fa',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <motion.div 
              style={{ ...skeletonStyle, height: '24px', width: '60%', marginBottom: '1rem' }}
              initial={{ opacity: 0.7 }}
              {...pulseAnimation}
            />
            <motion.div 
              style={{ ...skeletonStyle, height: '100px', marginBottom: '1rem' }}
              initial={{ opacity: 0.7 }}
              {...pulseAnimation}
            />
            <motion.div 
              style={{ ...skeletonStyle, height: '16px', marginBottom: '0.5rem' }}
              initial={{ opacity: 0.7 }}
              {...pulseAnimation}
            />
            <motion.div 
              style={{ ...skeletonStyle, height: '16px', width: '90%' }}
              initial={{ opacity: 0.7 }}
              {...pulseAnimation}
            />
          </div>
        );
        
      case 'sidebar':
        return (
          <div style={{ 
            padding: '1.5rem', 
            borderRadius: '8px', 
            backgroundColor: '#f8f9fa',
            height: height || '300px'
          }}>
            <motion.div 
              style={{ ...skeletonStyle, height: '24px', width: '80%', marginBottom: '1.5rem' }}
              initial={{ opacity: 0.7 }}
              {...pulseAnimation}
            />
            {Array(5).fill().map((_, i) => (
              <motion.div 
                key={i}
                style={{ 
                  ...skeletonStyle, 
                  height: '16px', 
                  marginBottom: '1rem',
                  width: `${Math.floor(Math.random() * 30) + 60}%`
                }}
                initial={{ opacity: 0.7 }}
                {...pulseAnimation}
              />
            ))}
          </div>
        );
        
      case 'chapter':
        return (
          <div>
            {/* Header */}
            <motion.div 
              style={{ ...skeletonStyle, height: '60px', marginBottom: '2rem' }}
              initial={{ opacity: 0.7 }}
              {...pulseAnimation}
            />
            
            {/* Content */}
            <div style={{ display: 'flex', gap: '2rem' }}>
              {/* Main content */}
              <div style={{ flex: '3' }}>
                <motion.div 
                  style={{ ...skeletonStyle, height: '32px', marginBottom: '1.5rem', width: '70%' }}
                  initial={{ opacity: 0.7 }}
                  {...pulseAnimation}
                />
                
                {Array(8).fill().map((_, i) => (
                  <motion.div 
                    key={i}
                    style={{ 
                      ...skeletonStyle, 
                      height: '16px', 
                      marginBottom: '0.75rem',
                      width: `${Math.floor(Math.random() * 20) + 80}%`
                    }}
                    initial={{ opacity: 0.7 }}
                    {...pulseAnimation}
                  />
                ))}
                
                <motion.div 
                  style={{ ...skeletonStyle, height: '28px', marginTop: '2rem', marginBottom: '1.5rem', width: '50%' }}
                  initial={{ opacity: 0.7 }}
                  {...pulseAnimation}
                />
                
                {Array(6).fill().map((_, i) => (
                  <motion.div 
                    key={i}
                    style={{ 
                      ...skeletonStyle, 
                      height: '16px', 
                      marginBottom: '0.75rem',
                      width: `${Math.floor(Math.random() * 20) + 80}%`
                    }}
                    initial={{ opacity: 0.7 }}
                    {...pulseAnimation}
                  />
                ))}
              </div>
              
              {/* Sidebar */}
              <div style={{ flex: '1' }}>
                <motion.div 
                  style={{ 
                    ...skeletonStyle, 
                    height: '300px', 
                    borderRadius: '8px',
                    marginBottom: '1.5rem'
                  }}
                  initial={{ opacity: 0.7 }}
                  {...pulseAnimation}
                />
                
                <motion.div 
                  style={{ 
                    ...skeletonStyle, 
                    height: '200px', 
                    borderRadius: '8px'
                  }}
                  initial={{ opacity: 0.7 }}
                  {...pulseAnimation}
                />
              </div>
            </div>
          </div>
        );
        
      default:
        return (
          <motion.div 
            style={{ ...skeletonStyle, height: height || '16px' }}
            initial={{ opacity: 0.7 }}
            {...pulseAnimation}
          />
        );
    }
  };
  
  return (
    <div className="skeleton-loader">
      {renderSkeleton()}
    </div>
  );
};

export default SkeletonLoader;
