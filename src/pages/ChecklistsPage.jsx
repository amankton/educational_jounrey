import React from 'react';
import { Link } from 'react-router-dom';

const ChecklistsPage = () => {
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

  const subheadingStyle = {
    fontFamily: 'Montserrat, sans-serif',
    color: '#005F81',
    marginTop: '2rem',
    marginBottom: '1rem',
    fontWeight: '600',
  };

  const paragraphStyle = {
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  };

  const listStyle = {
    marginBottom: '2rem',
  };

  const listItemStyle = {
    marginBottom: '0.75rem',
    lineHeight: '1.5',
  };

  const sectionStyle = {
    backgroundColor: '#f8f9fa',
    padding: '2rem',
    borderRadius: '0.5rem',
    marginBottom: '2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    borderLeft: '4px solid #005F81',
  };

  const cardTitleStyle = {
    fontFamily: 'Montserrat, sans-serif',
    color: '#003260',
    marginBottom: '1rem',
    fontWeight: '600',
  };

  const quoteStyle = {
    fontStyle: 'italic',
    borderLeft: '4px solid #F6C100',
    paddingLeft: '1rem',
    margin: '1.5rem 0',
    color: '#555',
  };

  return (
    <div>
      {/* Page Header */}
      <div style={{ backgroundColor: '#003260', color: 'white', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '2.5rem', marginBottom: '1rem' }}>
            Checklists and Timelines
          </h1>
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1.1rem', maxWidth: '800px' }}>
            Practical tools to help military families navigate key educational transitions and milestones
          </p>
        </div>
      </div>

      {/* Page Content */}
      <div style={containerStyle}>
        {/* Breadcrumb Navigation */}
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ color: '#0071bc', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span>Checklists</span>
        </div>

        {/* Introduction */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>About These Checklists</h2>
          <p style={paragraphStyle}>
            The following checklists and timelines provide practical tools to help military families navigate key educational transitions and milestones. These resources can be adapted to your family's specific circumstances and used as frameworks for planning and preparation.
          </p>
          <p style={paragraphStyle}>
            Each checklist is organized chronologically to help you anticipate and prepare for important steps in your child's educational journey. Whether you're facing a PCS move, deployment, or planning for college, these tools will help you stay organized and ensure you don't miss critical tasks.
          </p>
          <p style={paragraphStyle}>
            Consider printing these checklists or saving them to your device for easy reference during transitions. You can customize them to fit your family's unique needs and military situation.
          </p>
        </div>

        {/* Quick Navigation */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Quick Navigation</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="#school-transition" style={{
              padding: '0.75rem 1rem',
              backgroundColor: '#005F81',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.25rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '500',
              fontSize: '0.9rem',
              display: 'inline-block'
            }}>School Transition Checklist</a>

            <a href="#deployment-support" style={{
              padding: '0.75rem 1rem',
              backgroundColor: '#005F81',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.25rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '500',
              fontSize: '0.9rem',
              display: 'inline-block'
            }}>Deployment Education Support</a>

            <a href="#college-application" style={{
              padding: '0.75rem 1rem',
              backgroundColor: '#005F81',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.25rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '500',
              fontSize: '0.9rem',
              display: 'inline-block'
            }}>College Application Timeline</a>

            <a href="#elementary-school" style={{
              padding: '0.75rem 1rem',
              backgroundColor: '#005F81',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.25rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '500',
              fontSize: '0.9rem',
              display: 'inline-block'
            }}>Elementary School Checklist</a>

            <a href="#middle-school" style={{
              padding: '0.75rem 1rem',
              backgroundColor: '#005F81',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.25rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '500',
              fontSize: '0.9rem',
              display: 'inline-block'
            }}>Middle School Planning</a>

            <a href="#high-school" style={{
              padding: '0.75rem 1rem',
              backgroundColor: '#005F81',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.25rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '500',
              fontSize: '0.9rem',
              display: 'inline-block'
            }}>High School Year-by-Year</a>
          </div>
        </div>

        {/* School Transition Checklist */}
        <div id="school-transition" style={sectionStyle}>
          <h2 style={headingStyle}>School Transition Checklist</h2>
          <p style={paragraphStyle}>
            PCS moves can be challenging for military families, especially when they involve school transitions. This checklist will help you prepare for a smooth educational transition before, during, and after your move.
          </p>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>3-6 Months Before Move</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Contact the School Liaison Officer (SLO) at your current and gaining installations</li>
              <li style={listItemStyle}>Research schools in the new location (public, private, DoDEA, charter, homeschool options)</li>
              <li style={listItemStyle}>Review school websites, performance data, and special programs</li>
              <li style={listItemStyle}>Identify specific programs your child needs (special education, gifted, ELL, etc.)</li>
              <li style={listItemStyle}>Request current school records and review for completeness</li>
              <li style={listItemStyle}>Check Interstate Compact provisions that may apply to your situation</li>
              <li style={listItemStyle}>Research graduation requirements if moving during high school</li>
              <li style={listItemStyle}>Identify extracurricular activities and tryout schedules at new location</li>
              <li style={listItemStyle}>Begin discussions with children about the upcoming school change</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>1-3 Months Before Move</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Schedule exit interviews with current teachers and counselors</li>
              <li style={listItemStyle}>Request letters of recommendation for special programs</li>
              <li style={listItemStyle}>Obtain copies of IEP/504 plans and most recent evaluations</li>
              <li style={listItemStyle}>Collect samples of student work that demonstrate abilities</li>
              <li style={listItemStyle}>Organize a portfolio of academic achievements and extracurricular activities</li>
              <li style={listItemStyle}>Contact the new school to understand registration requirements</li>
              <li style={listItemStyle}>Schedule placement tests if required by the new school</li>
              <li style={listItemStyle}>Research summer programs in the new location to ease transition</li>
              <li style={listItemStyle}>Develop a plan for completing current school year/semester</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>2-4 Weeks Before Move</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Organize hand-carry educational documents (don't pack in household goods)</li>
              <li style={listItemStyle}>Include immunization records, birth certificate, and proof of residency</li>
              <li style={listItemStyle}>Confirm withdrawal process and timeline with current school</li>
              <li style={listItemStyle}>Return all school materials (textbooks, library books, equipment)</li>
              <li style={listItemStyle}>Back up digital school projects and assignments</li>
              <li style={listItemStyle}>Create contact information list for current teachers and friends</li>
              <li style={listItemStyle}>Plan appropriate goodbyes and closure activities</li>
              <li style={listItemStyle}>Prepare questions for new school orientation</li>
              <li style={listItemStyle}>Discuss expectations and concerns about the new school with your child</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Arrival at New Location</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Connect with the School Liaison Officer at the new installation</li>
              <li style={listItemStyle}>Complete school registration process</li>
              <li style={listItemStyle}>Request a school tour before the first day if possible</li>
              <li style={listItemStyle}>Meet with school counselor to discuss course placement</li>
              <li style={listItemStyle}>Provide copies of all educational records</li>
              <li style={listItemStyle}>Discuss special needs and accommodations with appropriate staff</li>
              <li style={listItemStyle}>Review transportation arrangements and schedules</li>
              <li style={listItemStyle}>Purchase required school supplies and appropriate clothing</li>
              <li style={listItemStyle}>Locate key places in the school (classrooms, cafeteria, gym, etc.)</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>First Month at New School</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Schedule meetings with new teachers within first two weeks</li>
              <li style={listItemStyle}>Establish communication channels with teachers and staff</li>
              <li style={listItemStyle}>Monitor homework completion and understanding</li>
              <li style={listItemStyle}>Check in daily with your child about school experiences</li>
              <li style={listItemStyle}>Watch for signs of transition stress or academic struggles</li>
              <li style={listItemStyle}>Help your child connect with peers and activities</li>
              <li style={listItemStyle}>Attend school events and volunteer if possible</li>
              <li style={listItemStyle}>Verify records have been received and properly interpreted</li>
              <li style={listItemStyle}>Confirm appropriate placement in classes and programs</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Ongoing Monitoring</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Schedule follow-up meeting with teachers after 4-6 weeks</li>
              <li style={listItemStyle}>Review first progress report or report card carefully</li>
              <li style={listItemStyle}>Address any academic or social concerns promptly</li>
              <li style={listItemStyle}>Adjust support strategies based on transition progress</li>
              <li style={listItemStyle}>Connect with other military families at the school</li>
              <li style={listItemStyle}>Continue to monitor emotional adjustment to the new environment</li>
              <li style={listItemStyle}>Maintain communication with school staff throughout the year</li>
              <li style={listItemStyle}>Document successful transition strategies for future moves</li>
              <li style={listItemStyle}>Celebrate successful adaptation and achievements</li>
            </ul>
          </div>
        </div>

        {/* Deployment Education Support Timeline */}
        <div id="deployment-support" style={sectionStyle}>
          <h2 style={headingStyle}>Deployment Education Support Timeline</h2>
          <p style={paragraphStyle}>
            Deployments can significantly impact a child's educational experience. This timeline provides guidance for supporting your child's education before, during, and after a parent's deployment.
          </p>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Pre-Deployment</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Inform school staff about upcoming deployment</li>
              <li style={listItemStyle}>Meet with teachers to discuss potential impacts on the student</li>
              <li style={listItemStyle}>Establish communication plan between deployed parent and school</li>
              <li style={listItemStyle}>Update emergency contact information and authorization forms</li>
              <li style={listItemStyle}>Discuss homework and academic expectations during deployment</li>
              <li style={listItemStyle}>Create a family calendar marking important school events</li>
              <li style={listItemStyle}>Record the deploying parent reading books or helping with homework</li>
              <li style={listItemStyle}>Prepare comfort items for school (photos, special notes)</li>
              <li style={listItemStyle}>Discuss how to handle deployment questions from peers</li>
              <li style={listItemStyle}>Connect with school counselor for available support resources</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Initial Deployment Period (First Month)</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Monitor changes in behavior, academic performance, or attendance</li>
              <li style={listItemStyle}>Maintain consistent school routines and homework schedules</li>
              <li style={listItemStyle}>Check in with teachers about any concerning changes</li>
              <li style={listItemStyle}>Provide age-appropriate updates about the deployed parent</li>
              <li style={listItemStyle}>Establish new after-school routines if needed</li>
              <li style={listItemStyle}>Connect with Military Family Life Counselor if available</li>
              <li style={listItemStyle}>Consider joining deployment support groups at school or installation</li>
              <li style={listItemStyle}>Create a system for sharing school news with deployed parent</li>
              <li style={listItemStyle}>Maintain regular sleep schedules to support school performance</li>
              <li style={listItemStyle}>Allow for adjustment time and extra emotional support</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>During Deployment</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Schedule regular check-ins with teachers (every 4-6 weeks)</li>
              <li style={listItemStyle}>Send updates and school work to deployed parent regularly</li>
              <li style={listItemStyle}>Arrange video calls with deployed parent during special school events when possible</li>
              <li style={listItemStyle}>Monitor academic progress and address any issues promptly</li>
              <li style={listItemStyle}>Maintain connection with school support personnel</li>
              <li style={listItemStyle}>Consider tutoring or homework help if needed</li>
              <li style={listItemStyle}>Encourage participation in deployment support programs at school</li>
              <li style={listItemStyle}>Document school achievements to share with deployed parent</li>
              <li style={listItemStyle}>Be aware of emotional triggers around special school events</li>
              <li style={listItemStyle}>Maintain communication with teachers about any concerning changes</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Pre-Reunion (1 Month Before Return)</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Inform teachers about upcoming reunion</li>
              <li style={listItemStyle}>Discuss potential adjustment behaviors with school counselor</li>
              <li style={listItemStyle}>Prepare for possible academic and routine changes</li>
              <li style={listItemStyle}>Help child create school-related welcome home items</li>
              <li style={listItemStyle}>Discuss realistic expectations for parent's attendance at school events</li>
              <li style={listItemStyle}>Prepare for potential school absences during reunion period</li>
              <li style={listItemStyle}>Create a plan for reintegrating parent into school routines</li>
              <li style={listItemStyle}>Organize school work and achievements to share with returning parent</li>
              <li style={listItemStyle}>Discuss with child how to handle excitement at school</li>
              <li style={listItemStyle}>Prepare teachers for potential behavioral changes during reunion</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Post-Deployment</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Gradually reintegrate returning parent into school communication</li>
              <li style={listItemStyle}>Schedule time for returning parent to meet teachers</li>
              <li style={listItemStyle}>Update school records and emergency contacts</li>
              <li style={listItemStyle}>Monitor child's school behavior and performance during readjustment</li>
              <li style={listItemStyle}>Maintain consistent routines while incorporating returning parent</li>
              <li style={listItemStyle}>Be patient with academic performance during reintegration</li>
              <li style={listItemStyle}>Discuss any school concerns that arose during deployment</li>
              <li style={listItemStyle}>Celebrate educational achievements accomplished during deployment</li>
              <li style={listItemStyle}>Consider counseling if school difficulties persist</li>
              <li style={listItemStyle}>Document successful strategies for future deployments</li>
            </ul>
          </div>
        </div>

        {/* College Application Timeline */}
        <div id="college-application" style={sectionStyle}>
          <h2 style={headingStyle}>College Application Timeline</h2>
          <p style={paragraphStyle}>
            Planning for college requires careful preparation, especially for military families who may face PCS moves during high school. This timeline will help you stay on track throughout the college application process.
          </p>

          <div style={quoteStyle}>
            <p>"Early planning is essential for military families navigating the college application process, especially with the possibility of PCS moves during high school." - April 2024 article</p>
          </div>

          <div style={{
            backgroundColor: '#7A003C',
            color: 'white',
            padding: '1rem',
            borderRadius: '0.25rem',
            marginBottom: '1.5rem'
          }}>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>Military Family Tip:</p>
            <p style={{ fontFamily: 'Open Sans, sans-serif', margin: 0 }}>
              Create a portable digital portfolio with all your student's records, achievements, and recommendation letters.
              This will be invaluable if you PCS during the college application process.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>9th Grade</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Meet with high school counselor to plan four-year course schedule</li>
              <li style={listItemStyle}>Understand graduation requirements and college preparatory courses</li>
              <li style={listItemStyle}>Begin exploring potential career interests</li>
              <li style={listItemStyle}>Participate in extracurricular activities and community service</li>
              <li style={listItemStyle}>Develop good study habits and organizational skills</li>
              <li style={listItemStyle}>Create a system for tracking achievements and activities</li>
              <li style={listItemStyle}>Explore summer enrichment opportunities</li>
              <li style={listItemStyle}>Begin researching military-connected college benefits</li>
              <li style={listItemStyle}>Take challenging courses appropriate to ability level</li>
              <li style={listItemStyle}>Establish relationships with teachers and mentors</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>10th Grade</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Take the PSAT for practice</li>
              <li style={listItemStyle}>Continue involvement in extracurricular activities with increasing responsibility</li>
              <li style={listItemStyle}>Research college options and admission requirements</li>
              <li style={listItemStyle}>Attend college fairs and information sessions</li>
              <li style={listItemStyle}>Consider taking SAT Subject Tests in completed courses</li>
              <li style={listItemStyle}>Explore dual enrollment or advanced placement options</li>
              <li style={listItemStyle}>Begin investigating scholarship opportunities</li>
              <li style={listItemStyle}>Consider military academy or ROTC interest and requirements</li>
              <li style={listItemStyle}>Maintain strong academic performance</li>
              <li style={listItemStyle}>Update achievement and activity records</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>11th Grade</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Take the PSAT/NMSQT in October (National Merit Scholarship qualifying)</li>
              <li style={listItemStyle}>Prepare for and take the SAT and/or ACT (spring semester)</li>
              <li style={listItemStyle}>Research colleges more intensively (size, location, programs, cost)</li>
              <li style={listItemStyle}>Visit college campuses when possible</li>
              <li style={listItemStyle}>Meet with college representatives at school events</li>
              <li style={listItemStyle}>Begin gathering information for applications</li>
              <li style={listItemStyle}>Identify teachers for recommendation letters</li>
              <li style={listItemStyle}>Take leadership roles in activities when possible</li>
              <li style={listItemStyle}>Attend financial aid and college planning workshops</li>
              <li style={listItemStyle}>Create a master calendar of application deadlines</li>
              <li style={listItemStyle}>Consider how potential PCS moves might affect application process</li>
              <li style={listItemStyle}>Research in-state tuition options for military dependents</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>12th Grade</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Retake SAT/ACT if needed (early fall)</li>
              <li style={listItemStyle}>Finalize college list with safety, match, and reach schools</li>
              <li style={listItemStyle}>Request letters of recommendation (early fall)</li>
              <li style={listItemStyle}>Complete and submit applications before deadlines</li>
              <li style={listItemStyle}>Complete FAFSA as soon as possible after October 1</li>
              <li style={listItemStyle}>Apply for scholarships (ongoing throughout year)</li>
              <li style={listItemStyle}>Send mid-year reports as required</li>
              <li style={listItemStyle}>Compare financial aid offers</li>
              <li style={listItemStyle}>Make final college decision by May 1</li>
              <li style={listItemStyle}>Request final transcript be sent to selected college</li>
              <li style={listItemStyle}>Complete housing applications and orientation registration</li>
              <li style={listItemStyle}>Apply for military-connected benefits if applicable</li>
            </ul>
          </div>

          <div style={quoteStyle}>
            <p>"Military families should pay particular attention to state residency requirements for tuition purposes and explore the many scholarships specifically available to military dependents." - April 2024 article</p>
          </div>
        </div>

        {/* Elementary School Year-by-Year Checklist */}
        <div id="elementary-school" style={sectionStyle}>
          <h2 style={headingStyle}>Elementary School Year-by-Year Checklist</h2>
          <p style={paragraphStyle}>
            The elementary years provide the foundation for your child's educational journey. This checklist outlines key focus areas for each stage of elementary school to help military families support their children's academic and social development.
          </p>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Kindergarten</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Establish consistent school routines and homework habits</li>
              <li style={listItemStyle}>Create a dedicated homework space</li>
              <li style={listItemStyle}>Develop regular communication with teacher</li>
              <li style={listItemStyle}>Read with your child daily</li>
              <li style={listItemStyle}>Practice basic math concepts through everyday activities</li>
              <li style={listItemStyle}>Monitor development of fine motor skills</li>
              <li style={listItemStyle}>Support social skills development and friendship building</li>
              <li style={listItemStyle}>Attend parent-teacher conferences and school events</li>
              <li style={listItemStyle}>Begin record-keeping system for educational documents</li>
              <li style={listItemStyle}>Explore extracurricular activities based on interests</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>1st-2nd Grade</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Monitor reading progress and provide appropriate materials</li>
              <li style={listItemStyle}>Support math fact fluency development</li>
              <li style={listItemStyle}>Establish regular reading time beyond school assignments</li>
              <li style={listItemStyle}>Encourage writing through journals, letters, and stories</li>
              <li style={listItemStyle}>Develop independence in homework completion</li>
              <li style={listItemStyle}>Watch for signs of learning difficulties</li>
              <li style={listItemStyle}>Explore interests through appropriate activities</li>
              <li style={listItemStyle}>Limit screen time and encourage active play</li>
              <li style={listItemStyle}>Discuss school experiences daily</li>
              <li style={listItemStyle}>Maintain communication with teachers</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>3rd-4th Grade</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Support transition to more complex academic content</li>
              <li style={listItemStyle}>Monitor homework completion and understanding</li>
              <li style={listItemStyle}>Encourage development of study skills and test preparation</li>
              <li style={listItemStyle}>Support increasing reading comprehension demands</li>
              <li style={listItemStyle}>Provide opportunities for writing in various formats</li>
              <li style={listItemStyle}>Develop organizational and time management skills</li>
              <li style={listItemStyle}>Encourage critical thinking and problem-solving</li>
              <li style={listItemStyle}>Support healthy peer relationships</li>
              <li style={listItemStyle}>Begin discussions about long-term interests and strengths</li>
              <li style={listItemStyle}>Continue participation in extracurricular activities</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>5th Grade</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Prepare for transition to middle school</li>
              <li style={listItemStyle}>Visit middle school and attend orientation events</li>
              <li style={listItemStyle}>Discuss increased responsibility and independence</li>
              <li style={listItemStyle}>Develop stronger organizational systems</li>
              <li style={listItemStyle}>Support completion of culminating elementary projects</li>
              <li style={listItemStyle}>Encourage self-advocacy skills development</li>
              <li style={listItemStyle}>Discuss course selection for middle school</li>
              <li style={listItemStyle}>Address any academic gaps before middle school</li>
              <li style={listItemStyle}>Support healthy technology habits</li>
              <li style={listItemStyle}>Celebrate elementary school completion</li>
            </ul>
          </div>
        </div>

        {/* Middle School Planning Checklist */}
        <div id="middle-school" style={sectionStyle}>
          <h2 style={headingStyle}>Middle School Planning Checklist</h2>
          <p style={paragraphStyle}>
            Middle school represents a critical transition period when students develop greater independence and begin preparing for high school. This checklist will help military families support their children through these important years.
          </p>

          <div style={quoteStyle}>
            <p>"Middle school is a critical time for developing the organizational and study skills that will be essential for high school success. Military families should pay particular attention to course selection and academic planning during 8th grade, especially if a PCS move might occur during the high school years." - August 2024 article</p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>6th Grade</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Establish new organizational systems for multiple classes</li>
              <li style={listItemStyle}>Create homework and study schedules</li>
              <li style={listItemStyle}>Develop relationship with school counselor</li>
              <li style={listItemStyle}>Support adaptation to multiple teachers and classrooms</li>
              <li style={listItemStyle}>Monitor use of planner or digital organization tools</li>
              <li style={listItemStyle}>Encourage participation in school activities and clubs</li>
              <li style={listItemStyle}>Discuss appropriate social media and technology use</li>
              <li style={listItemStyle}>Support development of self-advocacy skills</li>
              <li style={listItemStyle}>Maintain regular communication with teachers</li>
              <li style={listItemStyle}>Begin exploring career interests informally</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>7th Grade</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Review academic progress and address any concerns</li>
              <li style={listItemStyle}>Encourage increasing independence in schoolwork</li>
              <li style={listItemStyle}>Support development of study skills for more complex content</li>
              <li style={listItemStyle}>Discuss course selection and its impact on future options</li>
              <li style={listItemStyle}>Explore extracurricular activities aligned with interests</li>
              <li style={listItemStyle}>Consider leadership opportunities in school and community</li>
              <li style={listItemStyle}>Continue career exploration through research and discussions</li>
              <li style={listItemStyle}>Support healthy peer relationships and social development</li>
              <li style={listItemStyle}>Monitor online activities and digital citizenship</li>
              <li style={listItemStyle}>Encourage summer enrichment opportunities</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>8th Grade</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Meet with counselor to plan freshman year courses</li>
              <li style={listItemStyle}>Understand high school graduation requirements</li>
              <li style={listItemStyle}>Consider advanced courses if appropriate</li>
              <li style={listItemStyle}>Attend high school orientation events</li>
              <li style={listItemStyle}>Discuss four-year high school plan</li>
              <li style={listItemStyle}>Research extracurricular opportunities in high school</li>
              <li style={listItemStyle}>Develop stronger time management and study skills</li>
              <li style={listItemStyle}>Take leadership roles in middle school activities</li>
              <li style={listItemStyle}>Begin thinking about college and career goals</li>
              <li style={listItemStyle}>Address any academic weaknesses before high school</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#005F81',
            color: 'white',
            padding: '1rem',
            borderRadius: '0.25rem',
            marginTop: '1.5rem'
          }}>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>Military Family Tip:</p>
            <p style={{ fontFamily: 'Open Sans, sans-serif', margin: 0 }}>
              If a PCS move is anticipated during middle school, research graduation requirements in potential future locations.
              This will help ensure your student takes courses that will transfer appropriately and keep them on track.
            </p>
          </div>
        </div>

        {/* High School Year-by-Year Checklist */}
        <div id="high-school" style={sectionStyle}>
          <h2 style={headingStyle}>High School Year-by-Year Checklist</h2>
          <p style={paragraphStyle}>
            High school is a time of increasing academic rigor and important decisions about the future. This checklist provides military families with a roadmap for supporting their students through each year of high school.
          </p>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>9th Grade</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Meet with counselor to confirm four-year academic plan</li>
              <li style={listItemStyle}>Understand credit requirements for graduation</li>
              <li style={listItemStyle}>Establish strong study habits and time management</li>
              <li style={listItemStyle}>Get involved in meaningful extracurricular activities</li>
              <li style={listItemStyle}>Begin tracking activities, awards, and community service</li>
              <li style={listItemStyle}>Explore summer opportunities (jobs, volunteering, enrichment)</li>
              <li style={listItemStyle}>Develop relationships with teachers and mentors</li>
              <li style={listItemStyle}>Take challenging courses appropriate to ability level</li>
              <li style={listItemStyle}>Begin exploring career interests</li>
              <li style={listItemStyle}>Create a system for organizing school materials</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>10th Grade</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Review and adjust four-year academic plan</li>
              <li style={listItemStyle}>Take PSAT for practice</li>
              <li style={listItemStyle}>Begin researching college options and requirements</li>
              <li style={listItemStyle}>Consider taking SAT Subject Tests in completed courses</li>
              <li style={listItemStyle}>Continue involvement in extracurricular activities</li>
              <li style={listItemStyle}>Update activity and achievement records</li>
              <li style={listItemStyle}>Explore leadership opportunities</li>
              <li style={listItemStyle}>Attend college fairs and information sessions</li>
              <li style={listItemStyle}>Consider job shadowing or career exploration activities</li>
              <li style={listItemStyle}>Research summer programs related to interests</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>11th Grade</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Take challenging courses in areas of strength and interest</li>
              <li style={listItemStyle}>Take PSAT/NMSQT in October</li>
              <li style={listItemStyle}>Prepare for and take SAT and/or ACT (spring)</li>
              <li style={listItemStyle}>Research colleges more intensively</li>
              <li style={listItemStyle}>Visit college campuses when possible</li>
              <li style={listItemStyle}>Meet with college representatives at school</li>
              <li style={listItemStyle}>Take leadership roles in activities</li>
              <li style={listItemStyle}>Update resume and activity records</li>
              <li style={listItemStyle}>Identify potential recommendation writers</li>
              <li style={listItemStyle}>Research scholarship opportunities</li>
              <li style={listItemStyle}>Consider military academy or ROTC options if interested</li>
              <li style={listItemStyle}>Attend college planning and financial aid workshops</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>12th Grade</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Finalize college list with safety, match, and reach schools</li>
              <li style={listItemStyle}>Retake SAT/ACT if needed (early fall)</li>
              <li style={listItemStyle}>Request letters of recommendation</li>
              <li style={listItemStyle}>Complete applications before deadlines</li>
              <li style={listItemStyle}>Submit FAFSA as soon as possible after October 1</li>
              <li style={listItemStyle}>Apply for scholarships throughout the year</li>
              <li style={listItemStyle}>Maintain strong academic performance</li>
              <li style={listItemStyle}>Compare financial aid offers</li>
              <li style={listItemStyle}>Make final college decision by May 1</li>
              <li style={listItemStyle}>Request final transcript be sent to selected college</li>
              <li style={listItemStyle}>Complete housing and orientation registration</li>
              <li style={listItemStyle}>Apply for military-connected benefits if applicable</li>
            </ul>
          </div>

          <div style={quoteStyle}>
            <p>"High school students in military families should be particularly proactive about maintaining detailed records of coursework, activities, and achievements to facilitate transitions between schools." - April 2024 article</p>
          </div>

          <div style={quoteStyle}>
            <p>"Military families should research the specific graduation requirements in potential future locations to ensure students remain on track despite moves." - August 2024 article</p>
          </div>

          <p style={paragraphStyle}>
            These checklists and timelines provide frameworks that can be customized to your family's specific circumstances. They are designed to help you anticipate key milestones and tasks, reducing stress during transitions and ensuring important educational needs are addressed at the appropriate times. Consider creating your own personalized versions based on your children's ages, educational needs, and your family's military situation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChecklistsPage;
