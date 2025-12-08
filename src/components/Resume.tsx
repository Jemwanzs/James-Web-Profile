const Resume = () => {
  const experiences = [
    {
      period: 'Jul 2024 - Present',
      title: 'Product Manager & Sales Engineer',
      company: 'ElevateHR Africa',
      description: 'Lead end-to-end product development, including feature scoping and pre-build testing. Conduct feature-by-feature analysis, POCs, and UAT. Collaborate with engineering teams using Basecamp, Trello, and Notion.',
    },
    {
      period: 'Mar 2023 - Jun 2024',
      title: 'Customer Success Lead',
      company: 'ElevateHR Africa',
      description: 'Lead customer onboarding and ensure smooth adoption of the HR platform. Manage customer accounts, oversee payroll outsourcing, and ensure payroll and tax compliance including statutory deductions.',
    },
    {
      period: 'Jan 2021 - Jun 2022',
      title: 'Credit & Risk Lead',
      company: 'Steward Credit Limited',
      description: 'Managed end-to-end lending processes, from application assessment to loan disbursement. Conducted credit reporting and risk assessments. Led loan recovery efforts and developed loan products.',
    },
    {
      period: 'Jan 2017 - Sep 2020',
      title: 'Assistant Loan Officer & Data Analyst',
      company: 'Nairobi Water Sacco Society Limited',
      description: 'Maintained and managed member accounts. Reconciled and managed the loan book valued at KES 1 Billion. Generated loan reports and financial summaries for management review.',
    },
  ];

  const education = [
    {
      period: '2016',
      title: 'BSc. Mathematical Sciences with IT',
      institution: 'Maseno University',
      description: 'First Class Honours. Pure & Applied Mathematics, Actuarial Science courses, and 16 Information Technology units.',
    },
    {
      period: '2012',
      title: 'Computer Studies in IT',
      institution: "Elijah's Computer Technical College",
      description: 'Distinction grade. Comprehensive IT and computer applications training.',
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

  return (
    <section id="resume" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title mb-8 sm:mb-12 md:mb-16">Resume</h2>

        {/* Work Experience */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h3 className="font-serif text-lg sm:text-xl font-semibold mb-6 sm:mb-8">Work Experience</h3>
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
                  <h4 className="font-serif text-base sm:text-lg font-semibold mb-1">{exp.title}</h4>
                  <p className="text-accent font-medium text-xs sm:text-sm mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h3 className="font-serif text-lg sm:text-xl font-semibold mb-6 sm:mb-8">Education</h3>
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
                  <h4 className="font-serif text-base sm:text-lg font-semibold mb-1">{edu.title}</h4>
                  <p className="text-accent font-medium text-xs sm:text-sm mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{edu.description}</p>
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
      </div>
    </section>
  );
};

export default Resume;