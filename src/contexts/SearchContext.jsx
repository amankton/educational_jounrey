import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import Fuse from 'fuse.js';
import { searchIndex, searchOptions } from '../data/searchIndex';

// Create the search context
const SearchContext = createContext();

// Custom hook to use the search context
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

// Search provider component
export const SearchProvider = ({ children }) => {
  // State for search query
  const [query, setQuery] = useState('');

  // State for search results
  const [results, setResults] = useState([]);

  // State for active filters
  const [activeFilters, setActiveFilters] = useState({
    chapter: true,
    section: true,
    glossary: true,
    checklist: true,
    'checklist-item': true,
    resource: true
  });

  // State for suggestions
  const [suggestions, setSuggestions] = useState([]);

  // State for loading status
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Fuse instance
  const fuse = useMemo(() => {
    // Make sure searchIndex is available and not empty
    if (!searchIndex || searchIndex.length === 0) {
      console.warn('Search index is empty or not available');
      return new Fuse([], searchOptions);
    }
    return new Fuse(searchIndex, searchOptions);
  }, []);

  // Available filter options
  const filterOptions = [
    { id: 'chapter', label: 'Chapters' },
    { id: 'section', label: 'Chapter Sections' },
    { id: 'glossary', label: 'Glossary Terms' },
    { id: 'checklist', label: 'Checklists' },
    { id: 'checklist-item', label: 'Checklist Items' },
    { id: 'resource', label: 'Resources' }
  ];

  // Function to perform search
  const performSearch = (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setSuggestions([]);
      return;
    }

    setIsLoading(true);

    // Perform search with Fuse.js
    const searchResults = fuse.search(searchQuery);

    // Filter results based on active filters
    const filteredResults = searchResults.filter(
      result => activeFilters[result.item.type]
    );

    // Create a copy of the array before sorting to avoid mutating the original
    const sortedResults = [...filteredResults].sort((a, b) => {
      // First sort by score (lower is better)
      const scoreDiff = a.score - b.score;
      if (scoreDiff !== 0) return scoreDiff;

      // Then sort by weight (higher is better)
      return b.item.weight - a.item.weight;
    });

    setResults(sortedResults);
    setIsLoading(false);

    // Generate detailed suggestions based on top results
    // Take the top 7 results for suggestions
    const topResults = sortedResults.slice(0, 7);

    // Create detailed suggestions with title, type, content snippet, and URL
    const detailedSuggestions = topResults.map(result => ({
      id: result.item.id,
      title: result.item.title,
      type: result.item.type,
      typeLabel: filterOptions.find(opt => opt.id === result.item.type)?.label || result.item.type,
      content: result.item.content || result.item.description || '',
      url: result.item.url,
      score: result.score
    }));

    setSuggestions(detailedSuggestions);
  };

  // Debounced search function
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query, activeFilters]);

  // Function to toggle filters
  const toggleFilter = (filterId) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterId]: !prev[filterId]
    }));
  };

  // Function to reset filters
  const resetFilters = () => {
    setActiveFilters({
      chapter: true,
      section: true,
      glossary: true,
      checklist: true,
      'checklist-item': true,
      resource: true
    });
  };

  // Function to clear search
  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setSuggestions([]);
    resetFilters();
  };

  // Function to highlight matched terms in text
  const highlightMatches = (text, searchQuery) => {
    if (!searchQuery.trim() || !text) return text;

    // Escape special characters in the search query
    const escapedQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Create a regular expression to match the search query (case insensitive)
    const regex = new RegExp(`(${escapedQuery})`, 'gi');

    // Replace matches with highlighted version
    return text.replace(regex, '<mark>$1</mark>');
  };

  // Function to get context snippet around matched term
  const getContextSnippet = (text, searchQuery, maxLength = 150) => {
    if (!searchQuery.trim() || !text) return text;

    // Escape special characters in the search query
    const escapedQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Create a regular expression to match the search query (case insensitive)
    const regex = new RegExp(`(${escapedQuery})`, 'gi');

    // Find the first match
    const match = regex.exec(text);

    if (!match) return text.substring(0, maxLength) + '...';

    // Calculate start and end positions for the snippet
    const matchIndex = match.index;
    const halfLength = Math.floor(maxLength / 2);
    let start = Math.max(0, matchIndex - halfLength);
    let end = Math.min(text.length, matchIndex + match[0].length + halfLength);

    // Adjust if the snippet is shorter than maxLength
    if (end - start < maxLength) {
      if (start === 0) {
        end = Math.min(text.length, maxLength);
      } else if (end === text.length) {
        start = Math.max(0, text.length - maxLength);
      }
    }

    // Create the snippet
    let snippet = text.substring(start, end);

    // Add ellipsis if needed
    if (start > 0) snippet = '...' + snippet;
    if (end < text.length) snippet = snippet + '...';

    return snippet;
  };

  // Context value wrapped in useMemo to prevent unnecessary re-renders
  const value = useMemo(() => ({
    query,
    setQuery,
    results,
    isLoading,
    activeFilters,
    toggleFilter,
    resetFilters,
    filterOptions,
    clearSearch,
    suggestions,
    highlightMatches,
    getContextSnippet
  }), [
    query,
    results,
    isLoading,
    activeFilters,
    suggestions
  ]);

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
