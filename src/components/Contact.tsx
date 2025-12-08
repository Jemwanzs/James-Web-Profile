import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 798 993 404',
      href: 'tel:+254798993404',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'jamosammy@gmail.com',
      href: 'mailto:jamosammy@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/james-sammy-282b5a105',
    },
    {
      icon: Globe,
      label: 'Portfolio',
      href: 'https://jmsweb.netlify.app/',
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Info */}
          {contactInfo.map((item, index) => (
            <div key={index} className="text-center sm:text-left">
              <h3 className="font-serif text-base sm:text-lg font-semibold mb-3 sm:mb-4">{item.label}</h3>
              {item.href ? (
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                >
                  <item.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>{item.value}</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
                  <item.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>{item.value}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-base sm:text-lg font-semibold mb-3 sm:mb-4">Follow Me</h3>
              <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground text-xs sm:text-sm">
              © 2025 By James Sammy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
