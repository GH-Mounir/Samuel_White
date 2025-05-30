import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToFilms = () => {
    const filmsSection = document.getElementById('films');
    if (filmsSection) {
      filmsSection.scrollIntoView({ behavior: 'smooth' });
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

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 cursor-pointer transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={scrollToFilms}
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