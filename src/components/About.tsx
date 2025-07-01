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
        return <Twitter className="w-5 h-5" />;
      case 'Linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'Mail':
        return <Mail className="w-5 h-5" />;
      case 'Vimeo':
        return <Vimeo className="w-5 h-5" />;
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