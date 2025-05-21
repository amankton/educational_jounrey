import React from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../../contexts/SearchContext';

const SearchResults = () => {
  const { 
    results, 
    query, 
    isLoading, 
    activeFilters, 
    toggleFilter, 
    filterOptions,
    highlightMatches,
    getContextSnippet
  } = useSearch();

  // Function to render HTML with highlighted matches
  const renderHighlightedHTML = (text) => {
    return { __html: highlightMatches(text, query) };
  };

  // Function to get type label
  const getTypeLabel = (type) => {
    const option = filterOptions.find(opt => opt.id === type);
    return option ? option.label : type;
  };

  // Function to get type icon
  const getTypeIcon = (type) => {
    switch (type) {
      case 'chapter':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#005F81" viewBox="0 0 16 16">
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
          </svg>
        );
      case 'section':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#005F81" viewBox="0 0 16 16">
            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
          </svg>
        );
      case 'glossary':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#005F81" viewBox="0 0 16 16">
            <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
          </svg>
        );
      case 'checklist':
      case 'checklist-item':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#005F81" viewBox="0 0 16 16">
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
          </svg>
        );
      case 'resource':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#005F81" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#005F81" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
        );
    }
  };

  // Styles
  const containerStyle = {
    width: '100%',
  };

  const filtersContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  };

  const filterButtonStyle = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 0.75rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    backgroundColor: isActive ? '#005F81' : 'white',
    color: isActive ? 'white' : '#4b5563',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
  });

  const resultItemStyle = {
    padding: '1.25rem',
    borderRadius: '0.5rem',
    border: '1px solid #e5e7eb',
    marginBottom: '1rem',
    backgroundColor: 'white',
    transition: 'transform 0.2s, box-shadow 0.2s',
  };

  const resultTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#005F81',
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const resultParentStyle = {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '0.5rem',
  };

  const resultContentStyle = {
    fontSize: '1rem',
    color: '#4b5563',
    marginBottom: '1rem',
    lineHeight: '1.5',
  };

  const resultTypeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    backgroundColor: '#f3f4f6',
    color: '#4b5563',
    fontSize: '0.75rem',
    fontWeight: '500',
  };

  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    color: '#6b7280',
  };

  const noResultsStyle = {
    textAlign: 'center',
    padding: '2rem',
    color: '#6b7280',
  };

  return (
    <div style={containerStyle}>
      {/* Filters */}
      <div style={filtersContainerStyle}>
        <div style={{ marginRight: '0.5rem', color: '#4b5563', fontSize: '0.875rem', display: 'flex', alignItems: 'center' }}>
          Filter by:
        </div>
        {filterOptions.map(option => (
          <button
            key={option.id}
            style={filterButtonStyle(activeFilters[option.id])}
            onClick={() => toggleFilter(option.id)}
            aria-pressed={activeFilters[option.id]}
          >
            {getTypeIcon(option.id)}
            {option.label}
          </button>
        ))}
      </div>

      {/* Loading state */}
      {isLoading && (
        <div style={loadingStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin mr-2">
            <circle cx="12" cy="12" r="10" stroke="#d1d5db" strokeWidth="4" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12" stroke="#005F81" strokeWidth="4" />
          </svg>
          <span>Searching...</span>
        </div>
      )}

      {/* No results state */}
      {!isLoading && results.length === 0 && query && (
        <div style={noResultsStyle}>
          <p>No results found for "{query}"</p>
          <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Try adjusting your search terms or filters</p>
        </div>
      )}

      {/* Results list */}
      {!isLoading && results.length > 0 && (
        <div>
          <p style={{ marginBottom: '1rem', color: '#6b7280' }}>
            Found {results.length} results for "{query}"
          </p>
          
          {results.map((result, index) => (
            <div 
              key={index} 
              style={resultItemStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Link to={result.item.url} style={{ textDecoration: 'none' }}>
                <h3 style={resultTitleStyle}>
                  {getTypeIcon(result.item.type)}
                  <span dangerouslySetInnerHTML={renderHighlightedHTML(result.item.title)} />
                </h3>
                
                {result.item.parentTitle && (
                  <div style={resultParentStyle}>
                    In: {result.item.parentTitle}
                  </div>
                )}
                
                <div style={resultContentStyle}>
                  <div dangerouslySetInnerHTML={renderHighlightedHTML(
                    getContextSnippet(result.item.content || result.item.description || '', query)
                  )} />
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={resultTypeStyle}>
                    {getTypeLabel(result.item.type)}
                  </div>
                  
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    Score: {Math.round((1 - result.score) * 100)}%
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
