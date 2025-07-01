import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { socialLinks } from '../data/social';
import { Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add this function to render icons, matching Footer style but larger for hero
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Instagram':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" className="w-7 h-7">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        );
      case 'Twitter':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" className="w-7 h-7">
            <path d="M17.53 2H21.5l-7.19 8.21L23 22h-7.24l-5.09-6.91L2.47 22H-1.5l7.61-8.7L1 2h7.39l4.7 6.37L17.53 2zm-2.1 16h2.13L6.62 4h-2.2l10.01 14z"/>
          </svg>
        );
      case 'Linkedin':
        return <Linkedin className="w-7 h-7" />;
      case 'Mail':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" className="w-7 h-7">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
      case 'Vimeo':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" className="w-7 h-7">
            <path d="M22.23 7.75c-.09 1.93-1.43 4.59-4.03 7.98-2.69 3.54-4.96 5.31-6.81 5.31-1.15 0-2.13-1.06-2.94-3.18-.54-1.97-1.08-3.94-1.62-5.91-.6-2.17-1.24-3.26-1.92-3.26-.15 0-.67.31-1.57.92l-.94-1.21c.99-.87 1.97-1.74 2.96-2.61 1.34-1.16 2.34-1.77 3-1.83 1.57-.15 2.54.92 2.91 3.21.39 2.47.66 4.01.8 4.62.45 2.04.95 3.06 1.5 3.06.42 0 1.05-.67 1.89-2.01.84-1.34 1.29-2.36 1.36-3.07.12-1.16-.34-1.74-1.36-1.74-.48 0-.97.11-1.47.33.98-3.21 2.85-4.77 5.61-4.7 2.05.06 3.01 1.39 2.89 4.01z"/>
          </svg>
        );
      case 'YouTube':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" className="w-7 h-7">
            <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="hero" className="h-screen relative overflow-hidden bg-black">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ 
            backgroundImage: "url('/images/hero/hero.jpg')" 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-widest">
            {t('hero.title')}
          </h1>
          <div className="w-20 h-0.5 bg-red-600 mx-auto my-6" />
          <p className="text-xl md:text-2xl text-gray-300 tracking-wide">
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Social links CTA */}
        <div className="flex justify-center gap-6 mt-8 mb-2">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-600 transition-colors duration-200"
              aria-label={link.name}
            >
              {renderIcon(link.icon)}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 cursor-pointer transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={scrollToProjects}
        >
          <div className="flex flex-col items-center animate-bounce">
            <p className="text-white text-sm mb-2">{t('hero.viewWork')}</p>
            <ChevronDown className="w-6 h-6 text-red-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;