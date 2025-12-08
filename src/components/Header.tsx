import { useState } from 'react';
import { Menu, X, Monitor, Smartphone } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  viewMode: 'desktop' | 'mobile';
  onViewModeChange: (mode: 'desktop' | 'mobile') => void;
}

const Header = ({ activeSection, onNavigate, viewMode, onViewModeChange }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <span className="font-serif text-sm sm:text-lg font-semibold">James Sammy</span>
              <span className="text-muted-foreground text-xs sm:text-sm hidden sm:inline">Tech Product Manager</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div key={item.id} className="flex items-center">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-foreground ${
                    activeSection === item.id ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
                {index < navItems.length - 1 && (
                  <div className="w-px h-4 bg-border" />
                )}
              </div>
            ))}
          </nav>

          {/* View Mode Toggle - Desktop only */}
          <div className="hidden md:flex items-center gap-1 ml-4 border-l border-border pl-4">
            <button
              onClick={() => onViewModeChange('desktop')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'desktop' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
              }`}
              title="Desktop view"
            >
              <Monitor size={18} />
            </button>
            <div className="w-px h-4 bg-border" />
            <button
              onClick={() => onViewModeChange('mobile')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'mobile' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
              }`}
              title="Mobile view"
            >
              <Smartphone size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-secondary ${
                  activeSection === item.id ? 'text-foreground bg-secondary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
