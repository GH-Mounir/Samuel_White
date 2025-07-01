import React from 'react';
import { socialLinks } from '../data/social';
import { Instagram, Twitter, Linkedin, Mail, Timer as Vimeo } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Instagram':
        return <Instagram className="w-4 h-4" />;
      case 'Twitter':
        return <Twitter className="w-4 h-4" />;
      case 'Linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'Mail':
        return <Mail className="w-4 h-4" />;
      case 'Vimeo':
        return <Vimeo className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo/Name */}
          <div>
            <h2 className="text-white font-bold text-xl mb-3">SAMUEL SKHIEH</h2>
            <p className="text-gray-400 text-sm">Film Director & Cinematographer</p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">{t('footer.navigate')}</h3>
            <div className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-red-600 transition-colors duration-200 text-sm w-fit">
                {t('nav.home')}
              </button>
              <button onClick={() => scrollToSection('films')} className="text-gray-400 hover:text-red-600 transition-colors duration-200 text-sm w-fit">
                {t('nav.films')}
              </button>
              <button onClick={() => scrollToSection('biography')} className="text-gray-400 hover:text-red-600 transition-colors duration-200 text-sm w-fit">
                {t('nav.biography')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-red-600 transition-colors duration-200 text-sm w-fit">
                {t('nav.about')}
              </button>
              <Link to="/gallery" className="text-gray-400 hover:text-red-600 transition-colors duration-200 text-sm w-fit">
                {t('nav.gallery')}
              </Link>
              <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-red-600 transition-colors duration-200 text-sm w-fit">
                {t('nav.contact')}
              </button>
            </div>
          </div>
          
          {/* Social links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">{t('footer.connect')}</h3>
            <div className="flex gap-4">
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
        
        <div className="mt-10 pt-6 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Samuel Skhieh. {t('footer.rights')}</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-red-600 transition-colors duration-200">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-red-600 transition-colors duration-200">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;