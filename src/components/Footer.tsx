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
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" className="w-4 h-4">
            <path d="M17.53 2H21.5l-7.19 8.21L23 22h-7.24l-5.09-6.91L2.47 22H-1.5l7.61-8.7L1 2h7.39l4.7 6.37L17.53 2zm-2.1 16h2.13L6.62 4h-2.2l10.01 14z"/>
          </svg>
        );
      case 'Linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'Mail':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" className="w-4 h-4">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
      case 'Vimeo':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" className="w-4 h-4">
            <path d="M22.23 7.75c-.09 1.93-1.43 4.59-4.03 7.98-2.69 3.54-4.96 5.31-6.81 5.31-1.15 0-2.13-1.06-2.94-3.18-.54-1.97-1.08-3.94-1.62-5.91-.6-2.17-1.24-3.26-1.92-3.26-.15 0-.67.31-1.57.92l-.94-1.21c.99-.87 1.97-1.74 2.96-2.61 1.34-1.16 2.34-1.77 3-1.83 1.57-.15 2.54.92 2.91 3.21.39 2.47.66 4.01.8 4.62.45 2.04.95 3.06 1.5 3.06.42 0 1.05-.67 1.89-2.01.84-1.34 1.29-2.36 1.36-3.07.12-1.16-.34-1.74-1.36-1.74-.48 0-.97.11-1.47.33.98-3.21 2.85-4.77 5.61-4.7 2.05.06 3.01 1.39 2.89 4.01z"/>
          </svg>
        );
      case 'YouTube':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" className="w-4 h-4">
            <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
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
              <button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-red-600 transition-colors duration-200 text-sm w-fit">
                {t('nav.projects')}
              </button>
              <button onClick={() => scrollToSection('biography')} className="text-gray-400 hover:text-red-600 transition-colors duration-200 text-sm w-fit">
                {t('nav.biography')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-red-600 transition-colors duration-200 text-sm w-fit">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-red-600 transition-colors duration-200 text-sm w-fit">
                {t('nav.gallery')}
              </button>
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