import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [profileImage, setProfileImage] = useState<string | null>(() => {
    return localStorage.getItem('profileImage');
  });

  const handleProfileImageChange = (image: string) => {
    setProfileImage(image);
    localStorage.setItem('profileImage', image);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'resume', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      
      {viewMode === 'mobile' ? (
        <div className="flex justify-center items-start pt-24 pb-12 min-h-screen bg-muted/30">
          <div className="relative">
            {/* Phone Frame */}
            <div className="w-[300px] h-[600px] bg-background rounded-[2.5rem] border-[8px] border-foreground/80 shadow-2xl overflow-hidden relative">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/80 rounded-b-xl z-10" />
              
              {/* Phone Content */}
              <div className="h-full overflow-y-auto pt-6 scrollbar-hide">
                <main className="mobile-preview">
                  <div id="hero-mobile">
                    <Hero 
                      onNavigate={scrollToSection} 
                      profileImage={profileImage}
                      onProfileImageChange={handleProfileImageChange}
                    />
                  </div>
                  <Resume />
                  <Projects />
                  <Contact />
                </main>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <main>
          <div id="hero">
            <Hero 
              onNavigate={scrollToSection}
              profileImage={profileImage}
              onProfileImageChange={handleProfileImageChange}
            />
          </div>
          <Resume />
          <Projects />
          <Contact />
        </main>
      )}
    </div>
  );
};

export default Index;
