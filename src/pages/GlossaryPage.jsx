import { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample glossary terms
const glossaryTerms = [
  {
    id: 'dodea',
    term: 'DoDEA',
    definition: 'Department of Defense Education Activity. The civilian agency within the Department of Defense that operates schools for military children worldwide.'
  },
  {
    id: 'efmp',
    term: 'EFMP',
    definition: 'Exceptional Family Member Program. A mandatory enrollment program for military family members with special medical or educational needs.'
  },
  {
    id: 'iep',
    term: 'IEP',
    definition: 'Individualized Education Program. A legal document that outlines special education services, supports, and accommodations a child will receive.'
  },
  {
    id: 'mcec',
    term: 'MCEC',
    definition: 'Military Child Education Coalition. A non-profit organization focused on ensuring quality educational opportunities for military children.'
  },
  {
    id: 'pcs',
    term: 'PCS',
    definition: 'Permanent Change of Station. The official relocation of an active duty military service member to a different duty location.'
  },
  {
    id: 'slo',
    term: 'SLO',
    definition: 'School Liaison Officer. Military personnel who serve as the primary point of contact for school-related matters between military families, schools, and the military installation.'
  },
  {
    id: '504-plan',
    term: '504 Plan',
    definition: 'A plan developed to ensure that a child with a disability identified under Section 504 of the Rehabilitation Act receives accommodations to access the learning environment.'
  },
  {
    id: 'impact-aid',
    term: 'Impact Aid',
    definition: 'Federal funds provided to school districts that serve children residing on military installations or other federal property.'
  },
  {
    id: 'mic3',
    term: 'MIC3',
    definition: 'Military Interstate Children\'s Compact Commission. An agreement among states to address key educational transition issues for military children.'
  },
  {
    id: 'mflc',
    term: 'MFLC',
    definition: 'Military Family Life Counselor. Provides non-medical counseling services to military service members and their families.'
  },
  {
    id: 'cyp',
    term: 'CYP',
    definition: 'Child and Youth Programs. Military-operated programs that provide child care and youth activities on installations.'
  },
  {
    id: 'tricare',
    term: 'TRICARE',
    definition: 'The health care program for uniformed service members, retirees, and their families.'
  }
];

// Group terms by first letter
const groupTermsByLetter = (terms) => {
  const grouped = {};
  
  terms.forEach(term => {
    const firstLetter = term.term.charAt(0).toUpperCase();
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = [];
    }
    grouped[firstLetter].push(term);
  });
  
  return grouped;
};

const GlossaryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter terms based on search
  const filteredTerms = glossaryTerms.filter(term => 
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Group the filtered terms
  const groupedTerms = groupTermsByLetter(filteredTerms);
  
  // Get all available letters
  const availableLetters = Object.keys(groupedTerms).sort();
  
  // Create an array of all letters A-Z
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  
  return (
    <div>
      {/* Glossary Header */}
      <div style={{ backgroundColor: '#003260', color: 'white', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '2.5rem', marginBottom: '1rem' }}>
            Glossary of Military Education Terms
          </h1>
          <p style={{ maxWidth: '800px', marginBottom: '2rem' }}>
            This glossary provides definitions for common terms, acronyms, and programs related to military education.
          </p>
        </div>
      </div>
      
      {/* Glossary Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Breadcrumb Navigation */}
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ color: '#0071bc', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span>Glossary</span>
        </div>
        
        {/* Search Bar */}
        <div style={{ marginBottom: '2rem' }}>
          <input
            type="text"
            placeholder="Search glossary terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ccc',
              borderRadius: '0.25rem',
              fontSize: '1rem'
            }}
          />
        </div>
        
        {/* Alphabet Navigation */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {alphabet.map(letter => (
            <a
              key={letter}
              href={`#${letter}`}
              style={{
                display: 'inline-block',
                width: '2rem',
                height: '2rem',
                lineHeight: '2rem',
                textAlign: 'center',
                backgroundColor: availableLetters.includes(letter) ? '#003260' : '#e0e0e0',
                color: availableLetters.includes(letter) ? 'white' : '#666',
                borderRadius: '50%',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              {letter}
            </a>
          ))}
        </div>
        
        {/* Glossary Terms */}
        {availableLetters.length > 0 ? (
          availableLetters.map(letter => (
            <div key={letter} id={letter} style={{ marginBottom: '2rem' }}>
              <h2 style={{ 
                fontFamily: '"Bebas Neue", sans-serif', 
                fontSize: '2rem',
                borderBottom: '2px solid #003260',
                paddingBottom: '0.5rem',
                marginBottom: '1rem'
              }}>
                {letter}
              </h2>
              <dl>
                {groupedTerms[letter].map(item => (
                  <div key={item.id} style={{ marginBottom: '1.5rem' }}>
                    <dt style={{ 
                      fontFamily: 'Montserrat, sans-serif', 
                      fontWeight: '600',
                      fontSize: '1.25rem',
                      marginBottom: '0.5rem'
                    }}>
                      {item.term}
                    </dt>
                    <dd style={{ marginLeft: '0', lineHeight: '1.5' }}>
                      {item.definition}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <p>No glossary terms found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlossaryPage;
