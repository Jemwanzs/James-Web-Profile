import { useRef } from 'react';
import { Camera } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
  profileImage?: string | null;
  onProfileImageChange?: (image: string) => void;
}

const Hero = ({ onNavigate, profileImage, onProfileImageChange }: HeroProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        onProfileImageChange?.(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative group">
              <div 
                className="profile-image-container w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-secondary shadow-xl cursor-pointer"
                onClick={handleImageClick}
              >
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                    <span className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-muted-foreground/30">JS</span>
                  </div>
                )}
                
                {/* Upload overlay */}
                <div className="absolute inset-0 bg-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full">
                  <div className="text-background flex flex-col items-center gap-2">
                    <Camera className="w-8 h-8 sm:w-10 sm:h-10" />
                    <span className="text-xs sm:text-sm font-medium">Upload Photo</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-border/50 -z-10" />
              
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in">
              Hello
            </h1>
            
            <div className="mb-6 sm:mb-8">
              <h2 className="font-sans-serif text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                A Bit About Me
              </h2>
              <p className="text-black text-xs sm:text-sm leading-relaxed max-w-lg mx-auto lg:mx-0">
                Seasoned professional with 8+ years of experience across Tech Product Development, 
                Payroll & Tax Compliance, Credit & Risk Management, Sales Engineering, and Customer 
                Experience Management. Adept at guiding tech solutions from concept to execution.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onNavigate('resume')}
                className="circle-button-gold"
              >
                Resume
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="circle-button-coral"
              >
                Projects
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="circle-button-teal"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;