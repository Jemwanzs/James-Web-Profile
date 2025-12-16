const Resume = () => {
  const experiences = [
    {
      period: 'Jul 2024 - Present',
      title: 'Product Manager & Sales Engineer',
      company: 'ElevateHR Africa',
      description: [
        'Own end-to-end product development from feature discovery to release',
        'Define product scope, requirements, and success metrics',
        'Lead POCs, UAT, and pre-build validation cycles',
        'Translate business needs into actionable engineering tasks',
        'Coordinate delivery using Basecamp, Trello, and Notion',
        'Conduct market demos, client presentations, and technical solution walkthroughs.',
        'Creating advanced Google Sheets Scripts to Automate Sales processes and the pipeline workflows.',
        'Support sales through pre-sales consultations and integrating customer feedback into product improvements.'
      ],
    },
    
    {
      period: 'Mar 2023 - Jun 2024',
      title: 'Customer Success Lead',
      company: 'ElevateHR Africa',
      description: [
        'Led customer onboarding and platform adoption for enterprise clients',
        'Managed client accounts and long-term customer relationships',
        'Oversaw payroll outsourcing operations end-to-end',
        'Ensured payroll accuracy, statutory compliance, and tax remittance',
        'Acted as the primary escalation point for customer success issues',
      ],
    },

    {
      period: 'Jan 2021 - Jun 2022',
      title: 'Credit & Risk Lead',
      company: 'Steward Credit Limited',
      description: [
        'Managed the full lending lifecycle from credit assessment to disbursement',
        'Conducted credit scoring, risk profiling, and reporting',
        'Monitored loan performance and portfolio risk exposure',
        'Led loan recovery strategies and collections operations',
        'Designed and improved loan products based on risk insights',
      ],
    },

    {
      period: 'Jan 2017 - Sep 2020',
      title: 'Assistant Loan Officer & Data Analyst',
      company: 'Nairobi Water Sacco Society Limited',
      description: [
        'Opened & Managed member accounts and daily loan operations',
        'Reconciled and maintained a loan book exceeding KES 1 Billion',
        'Prepared loan analytics, dashboard with trend reports, and summaries',
        'Supported management decision-making through data insights'
      ],
    },

    {
      period: 'May–August (2013–2015, annually)',
      title: 'BOM Teacher',
      company: 'Mii Secondary School',
      description: [
        'Provided subject instruction in Mathematics, Chemistry, Physics, and Business Studies across Forms 1–4.',
        'Planned and delivered structured lessons aligned with curriculum requirements.',
        'Developed assessments and learning activities to reinforce understanding and academic achievement.'
      ],
    },

    {
      period: '2012: (Feb - August: 2012)',
      title: 'Computer Studies Tutor',
      company: 'Elijah School of Computing',
      description: [
        'Provided structured training in Microsoft Excel with a focus on VBA automation.',
        'Taught Microsoft Access database concepts and introductory HTML.',
        'Conducted practical workshops on MS Publisher and PowerPoint.',
        'Developed hands-on learning materials to reinforce technical proficiency.'
      ],
    },
  ];
  
  const education = [
    {
      period: '2012 – 2016',
      title: 'BSc. Mathematical Sciences with IT',
      institution: 'Maseno University',
      description: [
        'First Class Honours',
        'Specialized in Pure & Applied Mathematics and Actuarial Science',
        'Completed 16 Information Technology units',
        'Strong foundation in quantitative analysis and systems thinking',
      ],
    },
    {
      period: '2012 (6-months)',
      title: 'Computer Studies (Information Technology)',
      institution: "Elijah's Computer Technical College",
      description: [
        'Distinction grade',
        'Comprehensive training in computer applications and IT fundamentals',
      ],
    },
    {
      period: '2008 – 2011',
      title: 'Kenya Certificate of Secondary Education (KCSE)',
      institution: 'Kikumini School',
      description: [
        'Mean Grade: B+',
        'Strong performance across all science subjects',
        'Developed early interest in analytical and problem-solving disciplines',
      ],
    },
  ];

  const skills = [
    'Technical Leadership & Product Development',
    'Product Scoping & Documentation',
    'Payroll & Tax Compliance',
    'Sales Engineering & Solution Consulting',
    'Customer Experience Management',
    'Advanced Excel & VBA Automation',
    'Google Sheets Scripting',
    'HTML, CSS, JavaScript, React',
  ];

  const certifications = [
    {
      period: '—',
      title: 'Certificate of Participation',
      institution: 'KUSCCO LTD – WaterBuck Hotel, Nakuru (Kenya)',
      description: [
        'Co-operative Education & Training',
        'Product development, diversification, and innovation for sustainable growth in co-operatives',
      ],
    },
    {
      period: '—',
      title: 'Certificate of Participation',
      institution: 'KUSCCO LTD – Hilton Hotel, Nairobi',
      description: [
        'Co-operative Education & Training',
        'Customer service in-house training',
      ],
    },
    {
      period: '—',
      title: 'Certificate of Participation',
      institution: 'KUSCCO LTD – Hilton Hotel, Nairobi',
      description: [
        'Co-operative Education & Training',
        'Effective debt collection skills',
      ],
    },
    {
      period: '—',
      title: 'Certificate of Participation',
      institution: 'JKUASA – TASSMU Product Design Festival / CT Clinic',
      description: [
        'Product design and development',
      ],
    },
    {
      period: '—',
      title: 'Certificate of Participation',
      institution: 'JKUASA – JKUAT University',
      description: [
        'EA Reinsurance and professional papers',
        'CV writing, soft skills, and HR dynamics',
        'Introduction to Actuarial Science as a career field',
      ],
    },
    {
      period: '—',
      title: 'Certificate of Participation',
      institution: 'Tropical Institute for Sustainable Development (TISD)',
      description: [
        'Resource mobilization',
        'Proposal writing skills for rural development',
      ],
    },
    {
      period: '—',
      title: 'Certificate of Participation',
      institution: 'TASSMU – Maseno University',
      description: [
        '1st Kenyan Actuarial Boot Camp',
      ],
    },
  ];
  

  return (
    <section id="resume" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title mb-8 sm:mb-12 md:mb-16">Resume</h2>

        {/* Work Experience */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h3 className="font-serif text-lg sm:text-xl font-semibold mb-6 sm:mb-8">
            Work Experience
          </h3>

          <div className="space-y-0 border-t border-border">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="timeline-item border-b border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="timeline-date md:pt-1">
                  <h4>{exp.period}</h4>
                </div>

                <div className="hidden md:block" />

                <div>
                  <h4 className="font-serif text-base sm:text-lg font-semibold mb-1">
                    {exp.title}
                  </h4>

                  <p className="text-accent font-medium text-xs sm:text-sm mb-3">
                    {exp.company}
                  </p>

                  {/* Duties */}
                  <ul className="space-y-1">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground text-xs sm:text-sm leading-relaxed"
                      >
                        <span className="text-accent mt-[2px]">→</span>
                        <i className="fa-solid fa-check-circle text-accent mt-[2px]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h3 className="font-serif text-lg sm:text-xl font-semibold mb-6 sm:mb-8">
            Education
          </h3>

          <div className="space-y-0 border-t border-border">
            {education.map((edu, index) => (
              <div
                key={index}
                className="timeline-item border-b border-border"
              >
                <div className="timeline-date md:pt-1">
                  <h4>{edu.period}</h4>
                </div>

                <div className="hidden md:block" />

                <div>
                  <h4 className="font-serif text-base sm:text-lg font-semibold mb-1">
                    {edu.title}
                  </h4>

                  {edu.institution && edu.institution !== '—' && (
                    <p className="text-accent font-medium text-xs sm:text-sm mb-3">
                      {edu.institution}
                    </p>
                  )}

                  {/* Education details */}
                  <ul className="space-y-1">
                    {Array.isArray(edu.description)
                      ? edu.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-muted-foreground text-xs sm:text-sm leading-relaxed"
                          >
                            <span className="text-accent mt-[2px]">→</span>
                            <span>{item}</span>
                          </li>
                        ))
                      : (
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                  </ul>

                  {/* Optional KCSE label */}
                  {edu.title.includes('KCSE') && (
                    <span className="block mt-1 text-[10px] text-muted-foreground italic">
                      Secondary Education
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-semibold mb-6 sm:mb-8">Skills</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary text-secondary-foreground text-xs sm:text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Certifications */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h3 className="font-serif text-lg sm:text-xl font-semibold mb-6 sm:mb-8">
            Certifications
          </h3>

          <div className="space-y-0 border-t border-border">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="timeline-item border-b border-border"
              >
                <div className="timeline-date md:pt-1">
                  <h4>{cert.period}</h4>
                </div>

                <div className="hidden md:block" />

                <div>
                  <h4 className="font-serif text-base sm:text-lg font-semibold mb-1">
                    {cert.title}
                  </h4>

                  <p className="text-accent font-medium text-xs sm:text-sm mb-3">
                    {cert.institution}
                  </p>

                  {/* Certification details */}
                  <ul className="space-y-1">
                    {cert.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground text-xs sm:text-sm leading-relaxed"
                      >
                        <i className="fa-solid fa-check-circle text-accent mt-[2px]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;