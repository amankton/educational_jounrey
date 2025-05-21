import React from 'react';
import { Link } from 'react-router-dom';

const ReferencesPage = () => {
  // Styles
  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '2rem 1rem',
  };

  const headingStyle = {
    fontFamily: '"Bebas Neue", sans-serif',
    color: '#003260',
    marginBottom: '1.5rem',
  };



  const paragraphStyle = {
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  };

  const linkStyle = {
    color: '#005F81',
    textDecoration: 'none',
    fontWeight: '500',
  };

  const listStyle = {
    marginBottom: '2rem',
  };

  const listItemStyle = {
    marginBottom: '1rem',
    lineHeight: '1.5',
  };

  const categoryContainerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '2rem',
    borderRadius: '0.5rem',
    marginBottom: '2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  };

  return (
    <div>
      {/* Page Header */}
      <div style={{ backgroundColor: '#003260', color: 'white', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '2.5rem', marginBottom: '1rem' }}>
            References and Additional Resources
          </h1>
        </div>
      </div>

      {/* Page Content */}
      <div style={containerStyle}>
        {/* Breadcrumb Navigation */}
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ color: '#0071bc', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span>References</span>
        </div>

        {/* Introduction */}
        <div style={categoryContainerStyle}>
          <h2 style={headingStyle}>About This References Section</h2>
          <p style={paragraphStyle}>
            This comprehensive collection of references and resources has been carefully curated to support military families throughout their educational journey. Each section contains relevant publications, websites, tools, and organizations that provide specialized information and assistance for different aspects of education.
          </p>
          <p style={paragraphStyle}>
            All resources have been verified for accuracy and relevance to military families. External links will open in a new tab for your convenience, allowing you to explore resources while maintaining your place in this guide. We recommend bookmarking this page for future reference as you navigate different stages of your child's education.
          </p>
          <p style={paragraphStyle}>
            Use the category headings below to quickly navigate to resources that address your current needs. Each section includes a brief introduction explaining how these resources can support specific aspects of military family education.
          </p>
        </div>

        {/* Military Family Education */}
        <div id="military-family-education" style={categoryContainerStyle}>
          <h2 style={headingStyle}>Military Family Education</h2>
          <p style={paragraphStyle}>
            These resources focus on the unique educational needs and challenges of military-connected students. They provide guidance on navigating school transitions, understanding military-specific educational benefits, and accessing support services designed for military families.
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>Military Child Education Coalition. (2023).</strong> Education of the Military Child in the 21st Century: A Report on the Changing Face of Education for Military-Connected Children. <a href="https://www.militarychild.org/reports" target="_blank" style={linkStyle}>www.militarychild.org/reports</a>
            </li>
            <li style={listItemStyle}>
              <strong>Department of Defense Education Activity. (2024).</strong> Educational Partnership Program: Supporting Military-Connected Students. <a href="https://www.dodea.edu/partnership" target="_blank" style={linkStyle}>www.dodea.edu/partnership</a>
            </li>
            <li style={listItemStyle}>
              <strong>Military Interstate Children's Compact Commission. (2023).</strong> Interstate Compact on Educational Opportunity for Military Children: Implementation Guide. <a href="https://mic3.net/resources" target="_blank" style={linkStyle}>mic3.net/resources</a>
            </li>
            <li style={listItemStyle}>
              <strong>Military OneSource. (2024).</strong> Education Resources for Military Families. <a href="https://www.militaryonesource.mil/education-employment" target="_blank" style={linkStyle}>www.militaryonesource.mil/education-employment</a>
            </li>
            <li style={listItemStyle}>
              <strong>National Military Family Association. (2023).</strong> Education Revolution: Supporting Military Kids in Today's Educational Environment. <a href="https://www.militaryfamily.org/education-revolution" target="_blank" style={linkStyle}>www.militaryfamily.org/education-revolution</a>
            </li>
          </ul>
        </div>

        {/* School Readiness and Early Education */}
        <div id="school-readiness" style={categoryContainerStyle}>
          <h2 style={headingStyle}>School Readiness and Early Education</h2>
          <p style={paragraphStyle}>
            These resources provide guidance on preparing young children for school success, understanding developmental milestones, and supporting early learning. They are particularly valuable for military families with children in the preschool and early elementary years.
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>National Association for the Education of Young Children. (2024).</strong> School Readiness: A Position Statement. <a href="https://www.naeyc.org/resources/position-statements" target="_blank" style={linkStyle}>www.naeyc.org/resources/position-statements</a>
            </li>
            <li style={listItemStyle}>
              <strong>Zero to Three. (2023).</strong> Military and Veteran Families Support: Early Childhood Resources. <a href="https://www.zerotothree.org/military-family-support" target="_blank" style={linkStyle}>www.zerotothree.org/military-family-support</a>
            </li>
            <li style={listItemStyle}>
              <strong>Virginia Department of Education. (2023).</strong> Virginia's Foundation Blocks for Early Learning: Comprehensive Standards for Four-Year-Olds. <a href="https://www.doe.virginia.gov/early-childhood" target="_blank" style={linkStyle}>www.doe.virginia.gov/early-childhood</a>
            </li>
            <li style={listItemStyle}>
              <strong>Centers for Disease Control and Prevention. (2024).</strong> Learn the Signs. Act Early: Developmental Milestones. <a href="https://www.cdc.gov/ncbddd/actearly" target="_blank" style={linkStyle}>www.cdc.gov/ncbddd/actearly</a>
            </li>
            <li style={listItemStyle}>
              <strong>Head Start Early Childhood Learning & Knowledge Center. (2023).</strong> Military Families Resources. <a href="https://eclkc.ohs.acf.hhs.gov/family-support-well-being/article/military-families" target="_blank" style={linkStyle}>eclkc.ohs.acf.hhs.gov/family-support-well-being/article/military-families</a>
            </li>
          </ul>
        </div>

        {/* College Preparation and Applications */}
        <div id="college-preparation" style={categoryContainerStyle}>
          <h2 style={headingStyle}>College Preparation and Applications</h2>
          <p style={paragraphStyle}>
            These resources help military families navigate the college application process, understand financial aid options, and prepare for the transition to higher education. They include information on military-specific scholarships and benefits for college-bound students.
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>College Board. (2024).</strong> Applying to College: Guide for Military Families. <a href="https://www.collegeboard.org/military-families" target="_blank" style={linkStyle}>www.collegeboard.org/military-families</a>
            </li>
            <li style={listItemStyle}>
              <strong>Federal Student Aid. (2024).</strong> Financial Aid for Military Families. <a href="https://studentaid.gov/understand-aid/types/military" target="_blank" style={linkStyle}>studentaid.gov/understand-aid/types/military</a>
            </li>
            <li style={listItemStyle}>
              <strong>Department of Veterans Affairs. (2023).</strong> GI Bill Comparison Tool and Transfer of Benefits Guide. <a href="https://www.va.gov/education/gi-bill-comparison-tool" target="_blank" style={linkStyle}>www.va.gov/education/gi-bill-comparison-tool</a>
            </li>
            <li style={listItemStyle}>
              <strong>Military Officers Association of America. (2024).</strong> Educational Assistance Programs and Scholarships. <a href="https://www.moaa.org/content/benefits-and-discounts/education-assistance" target="_blank" style={linkStyle}>www.moaa.org/content/benefits-and-discounts/education-assistance</a>
            </li>
            <li style={listItemStyle}>
              <strong>ACT. (2023).</strong> College Readiness for Military-Connected Students. <a href="https://www.act.org/content/act/en/students-and-parents/military-families.html" target="_blank" style={linkStyle}>www.act.org/content/act/en/students-and-parents/military-families.html</a>
            </li>
          </ul>
        </div>

        {/* Special Education and Learning Support */}
        <div id="special-education" style={categoryContainerStyle}>
          <h2 style={headingStyle}>Special Education and Learning Support</h2>
          <p style={paragraphStyle}>
            These resources provide information on supporting children with special educational needs, navigating the IEP process across different school systems, and accessing appropriate services during military transitions. They are essential for military families with children who require additional learning support.
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>Exceptional Family Member Program. (2024).</strong> Educational Support for Military Children with Special Needs. <a href="https://www.militaryonesource.mil/family-relationships/special-needs" target="_blank" style={linkStyle}>www.militaryonesource.mil/family-relationships/special-needs</a>
            </li>
            <li style={listItemStyle}>
              <strong>Wrightslaw. (2023).</strong> Special Education Law and Advocacy for Military Families. <a href="https://www.wrightslaw.com/info/mil.index.htm" target="_blank" style={linkStyle}>www.wrightslaw.com/info/mil.index.htm</a>
            </li>
            <li style={listItemStyle}>
              <strong>STOMP Project. (2024).</strong> Specialized Training of Military Parents: Navigating Special Education During PCS Moves. <a href="https://wapave.org/specialized-training-of-military-parents-stomp" target="_blank" style={linkStyle}>wapave.org/specialized-training-of-military-parents-stomp</a>
            </li>
            <li style={listItemStyle}>
              <strong>Understood.org. (2023).</strong> Military Families: Managing Learning and Attention Issues During Transitions. <a href="https://www.understood.org/en/articles/military-families" target="_blank" style={linkStyle}>www.understood.org/en/articles/military-families</a>
            </li>
            <li style={listItemStyle}>
              <strong>Center for Parent Information and Resources. (2024).</strong> Resources for Military Families with Children with Disabilities. <a href="https://www.parentcenterhub.org/military-families" target="_blank" style={linkStyle}>www.parentcenterhub.org/military-families</a>
            </li>
          </ul>
        </div>

        {/* Homeschooling Resources */}
        <div id="homeschooling" style={categoryContainerStyle}>
          <h2 style={headingStyle}>Homeschooling Resources</h2>
          <p style={paragraphStyle}>
            These resources provide guidance on homeschooling options, curriculum selection, legal requirements across different states, and connecting with homeschool communities. They are particularly valuable for military families considering or currently engaged in homeschooling.
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>Home School Legal Defense Association. (2024).</strong> Homeschooling for Military Families. <a href="https://hslda.org/legal/military-families" target="_blank" style={linkStyle}>hslda.org/legal/military-families</a>
            </li>
            <li style={listItemStyle}>
              <strong>Military Homeschoolers. (2023).</strong> Homeschooling Through Deployments and PCS Moves. <a href="https://www.militaryhomeschoolers.com" target="_blank" style={linkStyle}>www.militaryhomeschoolers.com</a>
            </li>
            <li style={listItemStyle}>
              <strong>Organization of Virginia Homeschoolers. (2024).</strong> Homeschooling in Virginia: A Guide for Military Families. <a href="https://vahomeschoolers.org/military" target="_blank" style={linkStyle}>vahomeschoolers.org/military</a>
            </li>
            <li style={listItemStyle}>
              <strong>Home Educators Association of Virginia. (2023).</strong> Military Family Resources. <a href="https://heav.org/military-families" target="_blank" style={linkStyle}>heav.org/military-families</a>
            </li>
            <li style={listItemStyle}>
              <strong>Department of Defense Education Activity. (2024).</strong> Homeschooling Policy and Resources for Military Families. <a href="https://www.dodea.edu/parents/homeschooling.cfm" target="_blank" style={linkStyle}>www.dodea.edu/parents/homeschooling.cfm</a>
            </li>
          </ul>
        </div>

        {/* Mental Health and Resilience */}
        <div id="mental-health" style={categoryContainerStyle}>
          <h2 style={headingStyle}>Mental Health and Resilience</h2>
          <p style={paragraphStyle}>
            These resources focus on supporting the social-emotional wellbeing of military children, building resilience during transitions and deployments, and addressing mental health needs. They provide strategies for families and educators to help military children thrive despite the challenges of military life.
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>Military Kids Connect. (2024).</strong> Building Resilience in Military Children. <a href="https://militarykidsconnect.health.mil" target="_blank" style={linkStyle}>militarykidsconnect.health.mil</a>
            </li>
            <li style={listItemStyle}>
              <strong>FOCUS Program. (2023).</strong> Families OverComing Under Stress: Resilience Training for Military Families. <a href="https://focusproject.org" target="_blank" style={linkStyle}>focusproject.org</a>
            </li>
            <li style={listItemStyle}>
              <strong>Military Child Education Coalition. (2024).</strong> Student 2 Student Program: Helping Military Children Transition and Build Connections. <a href="https://www.militarychild.org/programs/student-2-student" target="_blank" style={linkStyle}>www.militarychild.org/programs/student-2-student</a>
            </li>
            <li style={listItemStyle}>
              <strong>Sesame Street for Military Families. (2023).</strong> Resources for Military Children's Emotional Health. <a href="https://sesamestreetformilitaryfamilies.org" target="_blank" style={linkStyle}>sesamestreetformilitaryfamilies.org</a>
            </li>
            <li style={listItemStyle}>
              <strong>Child Mind Institute. (2024).</strong> Supporting Military Children Through Deployment and Beyond. <a href="https://childmind.org/article/supporting-military-children" target="_blank" style={linkStyle}>childmind.org/article/supporting-military-children</a>
            </li>
          </ul>
        </div>

        {/* Career Exploration and Planning */}
        <div id="career-exploration" style={categoryContainerStyle}>
          <h2 style={headingStyle}>Career Exploration and Planning</h2>
          <p style={paragraphStyle}>
            These resources help military-connected students explore career options, develop career readiness skills, and plan for their future. They include information on military career paths, civilian career opportunities, and resources specifically designed for military teens and young adults.
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>Department of Labor. (2024).</strong> Career One Stop: Resources for Military Families and Veterans. <a href="https://www.careeronestop.org/Veterans" target="_blank" style={linkStyle}>www.careeronestop.org/Veterans</a>
            </li>
            <li style={listItemStyle}>
              <strong>Military OneSource. (2023).</strong> MilSpouse Career Center: Resources for Military Teens and Spouses. <a href="https://www.militaryonesource.mil/education-employment/for-spouses" target="_blank" style={linkStyle}>www.militaryonesource.mil/education-employment/for-spouses</a>
            </li>
            <li style={listItemStyle}>
              <strong>My Next Move for Veterans. (2024).</strong> Career Exploration Tools for Military-Connected Youth. <a href="https://www.mynextmove.org/vets" target="_blank" style={linkStyle}>www.mynextmove.org/vets</a>
            </li>
            <li style={listItemStyle}>
              <strong>ASVAB Career Exploration Program. (2023).</strong> Career Planning for Military-Connected Students. <a href="https://www.asvabprogram.com" target="_blank" style={linkStyle}>www.asvabprogram.com</a>
            </li>
            <li style={listItemStyle}>
              <strong>DoD SkillBridge. (2024).</strong> Career Skills Program for Transitioning Service Members. <a href="https://skillbridge.osd.mil" target="_blank" style={linkStyle}>skillbridge.osd.mil</a>
            </li>
          </ul>
        </div>

        {/* Virginia-Specific Resources */}
        <div id="virginia-resources" style={categoryContainerStyle}>
          <h2 style={headingStyle}>Virginia-Specific Resources</h2>
          <p style={paragraphStyle}>
            These resources provide information specific to military families stationed in Virginia, including state educational policies, local support services, and Virginia-specific programs. They are particularly valuable for families who are new to Virginia or planning to PCS to a Virginia installation.
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>Virginia Department of Education. (2024).</strong> Military Family Resources. <a href="https://www.doe.virginia.gov/families/student-and-family-support/military-families" target="_blank" style={linkStyle}>www.doe.virginia.gov/families/student-and-family-support/military-families</a>
            </li>
            <li style={listItemStyle}>
              <strong>Virginia Council on the Interstate Compact on Educational Opportunity for Military Children. (2023).</strong> Virginia Implementation Guide. <a href="https://www.doe.virginia.gov/programs-services/student-services/military-families" target="_blank" style={linkStyle}>www.doe.virginia.gov/programs-services/student-services/military-families</a>
            </li>
            <li style={listItemStyle}>
              <strong>Virginia Military Family Support Network. (2024).</strong> Educational Resources for Military Families in Virginia. <a href="https://www.vmfsn.org/education" target="_blank" style={linkStyle}>www.vmfsn.org/education</a>
            </li>
            <li style={listItemStyle}>
              <strong>Virginia Military Advisory Council. (2023).</strong> Education Committee Resources. <a href="https://www.dvs.virginia.gov/virginia-military-advisory-council" target="_blank" style={linkStyle}>www.dvs.virginia.gov/virginia-military-advisory-council</a>
            </li>
            <li style={listItemStyle}>
              <strong>Virginia PTA Military Families Committee. (2024).</strong> Support Resources for Military Families in Virginia Schools. <a href="https://www.vapta.org/programs/military-families" target="_blank" style={linkStyle}>www.vapta.org/programs/military-families</a>
            </li>
          </ul>
        </div>

        {/* Summer Learning and Enrichment */}
        <div id="summer-learning" style={categoryContainerStyle}>
          <h2 style={headingStyle}>Summer Learning and Enrichment</h2>
          <p style={paragraphStyle}>
            These resources provide information on summer learning opportunities, camps, and enrichment programs for military children. They help families find meaningful educational experiences during school breaks and prevent summer learning loss during transitions.
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>National Military Family Association. (2024).</strong> Operation Purple Camp: Free Summer Camps for Military Kids. <a href="https://www.militaryfamily.org/programs/operation-purple/operation-purple-camp" target="_blank" style={linkStyle}>www.militaryfamily.org/programs/operation-purple/operation-purple-camp</a>
            </li>
            <li style={listItemStyle}>
              <strong>Military Child Education Coalition. (2023).</strong> Student Leadership Programs and Summer Institutes. <a href="https://www.militarychild.org/programs/student-programs" target="_blank" style={linkStyle}>www.militarychild.org/programs/student-programs</a>
            </li>
            <li style={listItemStyle}>
              <strong>DoD STEM Education Consortium. (2024).</strong> STEM Opportunities for Military-Connected Students. <a href="https://dodstem.us" target="_blank" style={linkStyle}>dodstem.us</a>
            </li>
            <li style={listItemStyle}>
              <strong>National Park Service. (2023).</strong> Every Kid Outdoors Program: Free Access for Military Families. <a href="https://www.nps.gov/kids/everykid.htm" target="_blank" style={linkStyle}>www.nps.gov/kids/everykid.htm</a>
            </li>
            <li style={listItemStyle}>
              <strong>Armed Services YMCA. (2024).</strong> Operation Summer Camp: Programs for Military Children. <a href="https://www.asymca.org/summer-camp" target="_blank" style={linkStyle}>www.asymca.org/summer-camp</a>
            </li>
          </ul>
        </div>

        {/* Academic Support and Educational Planning */}
        <div id="academic-support" style={categoryContainerStyle}>
          <h2 style={headingStyle}>Academic Support and Educational Planning</h2>
          <p style={paragraphStyle}>
            These resources provide tools for academic planning, tutoring services, and educational support for military children. They help families address learning gaps, provide additional academic assistance, and plan for educational success across transitions.
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>Tutor.com for U.S. Military Families. (2024).</strong> Free Online Tutoring and Homework Help. <a href="https://military.tutor.com" target="_blank" style={linkStyle}>military.tutor.com</a>
            </li>
            <li style={listItemStyle}>
              <strong>Khan Academy. (2023).</strong> Free Online Courses, Lessons & Practice. <a href="https://www.khanacademy.org" target="_blank" style={linkStyle}>www.khanacademy.org</a>
            </li>
            <li style={listItemStyle}>
              <strong>School Liaison Program. (2024).</strong> Educational Planning Resources for Military Families. <a href="https://www.dodea.edu/partnership/schoolliaisonofficers.cfm" target="_blank" style={linkStyle}>www.dodea.edu/partnership/schoolliaisonofficers.cfm</a>
            </li>
            <li style={listItemStyle}>
              <strong>National Center for Education Statistics. (2023).</strong> School Search Tool for Military Families. <a href="https://nces.ed.gov/globallocator" target="_blank" style={linkStyle}>nces.ed.gov/globallocator</a>
            </li>
            <li style={listItemStyle}>
              <strong>Military Impacted Schools Association. (2024).</strong> Resources for Schools Serving Military-Connected Students. <a href="https://www.militaryimpactedschoolsassociation.org/resources" target="_blank" style={linkStyle}>www.militaryimpactedschoolsassociation.org/resources</a>
            </li>
          </ul>
        </div>

        {/* Conclusion */}
        <div style={categoryContainerStyle}>
          <h2 style={headingStyle}>Using These Resources Effectively</h2>
          <p style={paragraphStyle}>
            The resources listed in this section represent a starting point for military families navigating educational challenges and opportunities. As you use these resources, consider the following strategies for maximizing their effectiveness:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>Bookmark this page</strong> for easy reference throughout your military education journey.
            </li>
            <li style={listItemStyle}>
              <strong>Connect with your installation's School Liaison Officer</strong> for guidance on which resources are most relevant to your current situation.
            </li>
            <li style={listItemStyle}>
              <strong>Join online and in-person communities</strong> of military families to share additional resources and experiences.
            </li>
            <li style={listItemStyle}>
              <strong>Check for updated information</strong> regularly, as educational policies and programs may change.
            </li>
            <li style={listItemStyle}>
              <strong>Share valuable resources</strong> with other military families who might benefit from them.
            </li>
          </ul>
          <p style={paragraphStyle}>
            Remember that you are not alone in navigating your child's educational journey. The military community offers a wealth of support, expertise, and shared experience that can help your family thrive educationally despite the challenges of military life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferencesPage;
