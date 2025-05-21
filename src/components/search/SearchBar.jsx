import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../contexts/SearchContext';

const SearchBar = ({ isCompact = false }) => {
  const {
    query,
    setQuery,
    suggestions,
    clearSearch
  } = useSearch();

  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchInputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const navigate = useNavigate();

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setShowSuggestions(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.title);

    // Navigate directly to the content if it has a URL
    if (suggestion.url) {
      navigate(suggestion.url);
    } else {
      navigate(`/search?q=${encodeURIComponent(suggestion.title)}`);
    }

    setShowSuggestions(false);
  };

  // Function to highlight matched text
  const highlightMatch = (text, query) => {
    if (!query.trim() || !text) return text;

    try {
      // Escape special characters in the query
      const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      // Create a regular expression to match the query (case insensitive)
      const regex = new RegExp(`(${escapedQuery})`, 'gi');

      // Split the text by the regex matches
      const parts = text.split(regex);

      // Return the text with highlighted matches
      return parts.map((part, index) =>
        regex.test(part) ? <mark key={index} style={{backgroundColor: '#F6C100', padding: 0}}>{part}</mark> : part
      );
    } catch (e) {
      // If there's an error with the regex, return the original text
      return text;
    }
  };

  // Function to get a short snippet of content around the match
  const getContentSnippet = (content, query, maxLength = 60) => {
    if (!query.trim() || !content) return '';

    try {
      // Escape special characters in the query
      const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      // Create a regular expression to match the query (case insensitive)
      const regex = new RegExp(`(${escapedQuery})`, 'gi');

      // Find the first match
      const match = regex.exec(content);

      if (!match) return content.substring(0, maxLength) + '...';

      // Calculate start and end positions for the snippet
      const matchIndex = match.index;
      const halfLength = Math.floor(maxLength / 2);
      let start = Math.max(0, matchIndex - halfLength);
      let end = Math.min(content.length, matchIndex + match[0].length + halfLength);

      // Adjust if the snippet is shorter than maxLength
      if (end - start < maxLength) {
        if (start === 0) {
          end = Math.min(content.length, maxLength);
        } else if (end === content.length) {
          start = Math.max(0, content.length - maxLength);
        }
      }

      // Create the snippet
      let snippet = content.substring(start, end);

      // Add ellipsis if needed
      if (start > 0) snippet = '...' + snippet;
      if (end < content.length) snippet = snippet + '...';

      return snippet;
    } catch (e) {
      // If there's an error with the regex, return a short version of the original content
      return content.substring(0, maxLength) + '...';
    }
  };

  // Styles
  const containerStyle = {
    position: 'relative',
    width: isCompact ? '200px' : '100%',
    maxWidth: isCompact ? '200px' : '500px',
  };

  const searchFormStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  };

  const searchInputStyle = {
    width: '100%',
    padding: isCompact ? '0.5rem 2.5rem 0.5rem 0.75rem' : '0.75rem 3rem 0.75rem 1rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    fontSize: isCompact ? '0.875rem' : '1rem',
    outline: 'none',
    backgroundColor: 'white',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: isFocused ? '0 0 0 3px rgba(0, 95, 129, 0.2)' : 'none',
    borderColor: isFocused ? '#005F81' : '#d1d5db',
  };

  const searchButtonStyle = {
    position: 'absolute',
    right: '0.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4b5563',
    padding: '0.25rem',
  };

  const clearButtonStyle = {
    position: 'absolute',
    right: isCompact ? '1.75rem' : '2.25rem',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: query ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9ca3af',
    padding: '0.25rem',
  };

  const suggestionsContainerStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: isCompact ? '300px' : '100%', // Wider for compact mode to show more content
    backgroundColor: 'white',
    borderRadius: '0.375rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    marginTop: '0.25rem',
    zIndex: 50,
    maxHeight: '400px',
    overflowY: 'auto',
    display: showSuggestions && suggestions.length > 0 ? 'block' : 'none',
  };

  const suggestionItemStyle = {
    padding: '0.75rem 1rem',
    cursor: 'pointer',
    borderBottom: '1px solid #f3f4f6',
    transition: 'background-color 0.2s',
  };

  const suggestionTitleStyle = {
    fontWeight: '600',
    color: '#003260',
    marginBottom: '0.25rem',
    fontSize: '0.9rem',
  };

  const suggestionTypeStyle = {
    display: 'inline-block',
    fontSize: '0.7rem',
    fontWeight: '500',
    padding: '0.1rem 0.4rem',
    borderRadius: '0.25rem',
    backgroundColor: '#f3f4f6',
    color: '#4b5563',
    marginBottom: '0.25rem',
  };

  const suggestionContentStyle = {
    fontSize: '0.8rem',
    color: '#6b7280',
    marginTop: '0.25rem',
    lineHeight: '1.3',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={searchFormStyle}>
        <input
          ref={searchInputRef}
          type="text"
          placeholder={isCompact ? "Search..." : "Search chapters, glossary, resources..."}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            setIsFocused(true);
            setShowSuggestions(true);
          }}
          onBlur={() => setIsFocused(false)}
          style={searchInputStyle}
          aria-label="Search"
        />

        {query && (
          <button
            type="button"
            onClick={() => {
              clearSearch();
              searchInputRef.current.focus();
            }}
            style={clearButtonStyle}
            aria-label="Clear search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        )}

        <button type="submit" style={searchButtonStyle} aria-label="Submit search">
          <svg xmlns="http://www.w3.org/2000/svg" width={isCompact ? "16" : "20"} height={isCompact ? "16" : "20"} fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </form>

      {/* Suggestions dropdown */}
      <div ref={suggestionsRef} style={suggestionsContainerStyle}>
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            style={suggestionItemStyle}
            onMouseDown={() => handleSuggestionClick(suggestion)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
            }}
          >
            {/* Type badge */}
            <div style={suggestionTypeStyle}>
              {suggestion.typeLabel}
            </div>

            {/* Title with highlighted match */}
            <div style={suggestionTitleStyle}>
              {highlightMatch(suggestion.title, query)}
            </div>

            {/* Content snippet with highlighted match */}
            {suggestion.content && (
              <div style={suggestionContentStyle}>
                {highlightMatch(getContentSnippet(suggestion.content, query), query)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
