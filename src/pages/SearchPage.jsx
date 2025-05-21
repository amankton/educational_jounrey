import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';
import SearchResults from '../components/search/SearchResults';

const SearchPage = () => {
  const location = useLocation();
  const { query, setQuery } = useSearch();
  
  // Extract query from URL parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryParam = searchParams.get('q');
    if (queryParam) {
      setQuery(queryParam);
    }
  }, [location.search, setQuery]);

  // Styles
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
  };

  const headerStyle = {
    marginBottom: '2rem',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#003260',
    marginBottom: '1rem',
  };

  const breadcrumbStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '1.5rem',
  };

  const searchFormStyle = {
    marginBottom: '2rem',
  };

  const searchInputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    fontSize: '1rem',
    outline: 'none',
    backgroundColor: 'white',
    marginBottom: '1rem',
  };

  const searchButtonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#005F81',
    color: 'white',
    borderRadius: '0.375rem',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  const resultsContainerStyle = {
    backgroundColor: '#f9fafb',
    borderRadius: '0.5rem',
    padding: '2rem',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>
          <Link to="/" style={{ color: '#005F81', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span>Search Results</span>
        </div>
        
        <h1 style={titleStyle}>Search Results</h1>
        
        <form 
          style={searchFormStyle}
          onSubmit={(e) => {
            e.preventDefault();
            // The query is already set via the input field
            // and the results will update automatically
          }}
        >
          <input
            type="text"
            placeholder="Refine your search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={searchInputStyle}
            aria-label="Refine search"
          />
          
          <button 
            type="submit" 
            style={searchButtonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = '#004c68'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#005F81'}
          >
            Search
          </button>
        </form>
      </header>
      
      <div style={resultsContainerStyle}>
        <SearchResults />
      </div>
      
      <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#003260', marginBottom: '1rem' }}>
          Search Tips
        </h2>
        
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4b5563' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            Use specific terms to narrow your results (e.g., "deployment checklist" instead of just "checklist")
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Try different variations of terms (e.g., "PCS", "permanent change of station")
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Use the filters to focus on specific types of content
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Check spelling if you're not getting expected results
          </li>
          <li>
            Browse the <Link to="/glossary" style={{ color: '#005F81', textDecoration: 'none' }}>Glossary</Link> for military education terms
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
