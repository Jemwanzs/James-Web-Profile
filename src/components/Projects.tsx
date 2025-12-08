import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const publications = [
    {
      title: 'How to Prepare, Survive, and Thrive Payroll Audits',
      date: 'December 2023',
      description: 'A comprehensive guide on navigating payroll audits with confidence. Learn the key preparation steps, common pitfalls, and best practices for compliance.',
      link: 'https://blog.elevatehr.co/how-to-prepare-survive-thrive-payroll-audits/',
    },
    {
      title: 'Decoding Statutory Deductions in Kenya',
      date: 'January 2024',
      description: 'Understanding the complexities of statutory deductions in Kenya. A deep dive into PAYE, NHIF, NSSF, and other mandatory contributions.',
      link: 'https://blog.elevatehr.co/decoding-statutory-deductions-in-kenya/',
    },
    {
      title: 'Employment Models in Kenya',
      date: 'February 2024',
      description: 'Exploring the various employment models available in Kenya, from permanent employment to freelance arrangements and everything in between.',
      link: 'https://blog.elevatehr.co/employment-models-in-kenya/',
    },
    {
      title: 'ElevateHR vs Microsoft Excel for HR and Payroll',
      date: 'June 2024',
      description: 'A comparative analysis of modern HR software versus traditional spreadsheet-based management. Why businesses are making the switch.',
      link: 'https://blog.elevatehr.co/elevatehr-vs-microsoft-excel-for-hr-and-payroll/',
    },
    {
      title: 'New Payroll Tax Changes in Kenya 2025',
      date: 'February 2025',
      description: 'Stay ahead with the latest payroll tax updates for 2025. Key changes every employer and HR professional needs to know.',
      link: 'https://blog.elevatehr.co/new-payroll-tax-changes-2025/',
    },
    {
      title: 'Income Tax Return Season - Stay Compliant',
      date: 'May 2025',
      description: 'Essential tips for navigating tax return season in Kenya. Ensure compliance and avoid penalties with this practical guide.',
      link: 'https://blog.elevatehr.co/are-you-ready-for-income-tax-return-season/',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-card">
      <div className="container mx-auto max-w-3xl">
        <h2 className="section-title mb-8 sm:mb-12 md:mb-16">Projects</h2>

        <div className="space-y-0">
          {publications.map((project, index) => (
            <div key={index} className="project-card">
              <div>
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="aspect-video bg-secondary rounded-lg overflow-hidden shadow-md mb-4">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-secondary">
                    <div className="text-center p-4">
                      <span className="font-serif text-xl sm:text-2xl font-bold text-muted-foreground/40">
                        Publication
                      </span>
                      <div className="mt-1 text-xs sm:text-sm text-muted-foreground/30">
                        {project.date}
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium text-sm sm:text-base transition-colors"
                >
                  Read Article <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
