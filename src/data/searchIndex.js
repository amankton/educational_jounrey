// Import chapters data
import chapters from './chapters';

// Process HTML content to extract plain text
const extractTextFromHtml = (html) => {
  if (!html) return '';

  // Simple regex-based HTML tag removal for server-side compatibility
  const withoutTags = html.replace(/<[^>]*>/g, ' ');

  // Remove entities
  const withoutEntities = withoutTags.replace(/&[^;]+;/g, ' ');

  // Normalize whitespace
  return withoutEntities.replace(/\s+/g, ' ').trim();
};

// Create search index from chapters data
const createChaptersIndex = () => {
  const chaptersIndex = [];

  chapters.forEach(chapter => {
    // Add chapter as a searchable item
    chaptersIndex.push({
      id: `chapter-${chapter.id}`,
      type: 'chapter',
      title: chapter.title,
      shortTitle: chapter.shortTitle || '',
      description: chapter.description || '',
      content: '',
      url: `/guide/${chapter.id}`,
      image: chapter.image || '',
      tags: ['chapter', chapter.shortTitle.toLowerCase()],
      weight: 1.0 // Higher weight for chapters
    });

    // Add each section as a searchable item
    if (chapter.sections && chapter.sections.length > 0) {
      chapter.sections.forEach(section => {
        const plainTextContent = extractTextFromHtml(section.content);

        chaptersIndex.push({
          id: `section-${chapter.id}-${section.id}`,
          type: 'section',
          title: section.title,
          parentTitle: chapter.title,
          parentId: chapter.id,
          content: plainTextContent,
          url: `/guide/${chapter.id}/${section.id}`,
          tags: ['section', chapter.shortTitle.toLowerCase(), section.title.toLowerCase()],
          weight: 0.8 // Medium weight for sections
        });
      });
    }
  });

  return chaptersIndex;
};

// Create search index from glossary terms
// Note: In a real app, this would import from a glossary data file
const createGlossaryIndex = () => {
  // Sample glossary terms - in a real app, these would be imported
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
      id: '504-plan',
      term: '504 Plan',
      definition: 'A plan that provides accommodations for students with disabilities who don\'t require special education services under IDEA. Named after Section 504 of the Rehabilitation Act of 1973.'
    },
    {
      id: 'slo',
      term: 'School Liaison Officer (SLO)',
      definition: 'Military staff who help families navigate educational systems and serve as a link between military families and schools.'
    }
  ];

  return glossaryTerms.map(item => ({
    id: `glossary-${item.id}`,
    type: 'glossary',
    title: item.term,
    content: item.definition,
    url: `/glossary#${item.id}`,
    tags: ['glossary', 'term', item.term.toLowerCase()],
    weight: 0.9 // High weight for glossary terms
  }));
};

// Create search index from checklists
// Note: In a real app, this would import from a checklists data file
const createChecklistsIndex = () => {
  // Sample checklists - in a real app, these would be imported
  const checklists = [
    {
      id: 'pcs-move',
      title: 'PCS Move: School Transition Checklist',
      description: 'A comprehensive checklist to help your child transition smoothly between schools during a Permanent Change of Station.',
      items: [
        { id: 'records', text: 'Request official school records', category: 'Before Moving' },
        { id: 'samples', text: 'Collect samples of schoolwork', category: 'Before Moving' },
        { id: 'recommendations', text: 'Obtain teacher recommendations', category: 'Before Moving' }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment: Education Support Timeline',
      description: 'A timeline to help maintain educational stability during a parent\'s deployment.',
      items: [
        { id: 'inform', text: 'Inform school about upcoming deployment', category: 'Pre-Deployment' },
        { id: 'communication', text: 'Establish communication plan with teachers', category: 'Pre-Deployment' },
        { id: 'calendar', text: 'Create a deployment calendar for children', category: 'Pre-Deployment' }
      ]
    }
  ];

  const checklistsIndex = [];

  checklists.forEach(checklist => {
    // Add checklist as a searchable item
    checklistsIndex.push({
      id: `checklist-${checklist.id}`,
      type: 'checklist',
      title: checklist.title,
      content: checklist.description,
      url: `/checklists/${checklist.id}`,
      tags: ['checklist', checklist.title.toLowerCase()],
      weight: 0.85 // High-medium weight for checklists
    });

    // Add each checklist item as searchable content
    if (checklist.items && checklist.items.length > 0) {
      checklist.items.forEach(item => {
        checklistsIndex.push({
          id: `checklist-item-${checklist.id}-${item.id}`,
          type: 'checklist-item',
          title: item.text,
          parentTitle: checklist.title,
          parentId: checklist.id,
          content: `${item.category}: ${item.text}`,
          url: `/checklists/${checklist.id}#${item.id}`,
          tags: ['checklist-item', checklist.title.toLowerCase(), item.category.toLowerCase()],
          weight: 0.7 // Medium weight for checklist items
        });
      });
    }
  });

  return checklistsIndex;
};

// Create search index from resources
// Note: In a real app, this would import from a resources data file
const createResourcesIndex = () => {
  // Sample resources - in a real app, these would be imported
  const resources = [
    {
      id: 'school-liaison',
      name: 'School Liaison Officers',
      description: 'Primary point of contact for school-related matters at military installations.',
      website: 'https://www.dodea.edu/Partnership/schoolLiaisonOfficers.cfm',
      category: 'Installation-Based Resources'
    },
    {
      id: 'military-onesource',
      name: 'Military OneSource',
      description: 'Comprehensive resource for military families offering counseling, education support, and more.',
      website: 'https://www.militaryonesource.mil',
      category: 'Support Services'
    }
  ];

  return resources.map(resource => ({
    id: `resource-${resource.id}`,
    type: 'resource',
    title: resource.name,
    content: resource.description,
    url: `/resources#${resource.id}`,
    tags: ['resource', resource.category.toLowerCase(), resource.name.toLowerCase()],
    weight: 0.75 // Medium weight for resources
  }));
};

// Combine all indices into one searchable index
const createSearchIndex = () => {
  return [
    ...createChaptersIndex(),
    ...createGlossaryIndex(),
    ...createChecklistsIndex(),
    ...createResourcesIndex()
  ];
};

// Create and export the search index
export const searchIndex = createSearchIndex();

// Export search configuration for Fuse.js
export const searchOptions = {
  includeScore: true,
  threshold: 0.3,
  keys: [
    {
      name: 'title',
      weight: 0.4
    },
    {
      name: 'content',
      weight: 0.3
    },
    {
      name: 'description',
      weight: 0.2
    },
    {
      name: 'tags',
      weight: 0.1
    }
  ]
};
