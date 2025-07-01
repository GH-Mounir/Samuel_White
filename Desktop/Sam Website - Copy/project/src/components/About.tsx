import React, { useState, useEffect } from 'react';
import { biography } from '../data/biography';
import { socialLinks } from '../data/social';
import { Instagram, Twitter, Linkedin, Mail, Timer as Vimeo } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Instagram':
        return <Instagram className="w-5 h-5" />;
      case 'Twitter':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" className="w-5 h-5">
            <path d="M17.53 2H21.5l-7.19 8.21L23 22h-7.24l-5.09-6.91L2.47 22H-1.5l7.61-8.7L1 2h7.39l4.7 6.37L17.53 2zm-2.1 16h2.13L6.62 4h-2.2l10.01 14z"/>
          </svg>
        );
      case 'Linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'Mail':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" className="w-5 h-5">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
      case 'Vimeo':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" className="w-5 h-5">
            <path d="M22.23 7.75c-.09 1.93-1.43 4.59-4.03 7.98-2.69 3.54-4.96 5.31-6.81 5.31-1.15 0-2.13-1.06-2.94-3.18-.54-1.97-1.08-3.94-1.62-5.91-.6-2.17-1.24-3.26-1.92-3.26-.15 0-.67.31-1.57.92l-.94-1.21c.99-.87 1.97-1.74 2.96-2.61 1.34-1.16 2.34-1.77 3-1.83 1.57-.15 2.54.92 2.91 3.21.39 2.47.66 4.01.8 4.62.45 2.04.95 3.06 1.5 3.06.42 0 1.05-.67 1.89-2.01.84-1.34 1.29-2.36 1.36-3.07.12-1.16-.34-1.74-1.36-1.74-.48 0-.97.11-1.47.33.98-3.21 2.85-4.77 5.61-4.7 2.05.06 3.01 1.39 2.89 4.01z"/>
          </svg>
        );
      case 'YouTube':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" className="w-5 h-5">
            <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  // Get achievements and collaborations as objects
  const achievements = t('about.achievements', { returnObjects: true }) as Record<string, string>;
  const collaborations = t('about.collaborations', { returnObjects: true }) as Record<string, string>;

  // Convert objects to arrays
  const achievementsArray = Object.values(achievements);
  const collaborationsArray = Object.values(collaborations);

  return (
    <section id="about" className="bg-black py-20 px-4 sm:px-6 lg:px-8" dir={t('direction')}>
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-wide">{t('about.title')}</h2>
          <div className="w-16 h-0.5 bg-red-600 mb-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 h-full">
              <div className="aspect-[3/4] bg-gray-900 relative overflow-hidden">
                <img 
                  src="/images/self/self1.jpeg" 
                  alt={t('about.name')} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-1">{t('about.name')}</h3>
              <p className="text-red-600 mb-6">{t('about.role')}</p>
              
              <div className="text-gray-300 space-y-4 mb-8">
                {t('about.fullBio').split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-white font-semibold mb-3">{t('about.achievementsTitle')}</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {achievementsArray.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 mt-auto">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-600 transition-colors duration-200"
                    aria-label={link.name}
                  >
                    {renderIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;