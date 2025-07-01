import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-bold text-white text-xl cursor-pointer" onClick={() => scrollToSection('hero')}>
                SAMUEL SKHIEH
              </span>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">{t('nav.projects')}</button>
              <button onClick={() => scrollToSection('biography')} className="text-gray-300 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">{t('nav.biography')}</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">{t('nav.about')}</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">{t('nav.gallery')}</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-red-600 border border-red-600 hover:bg-red-600/20 px-4 py-2 text-sm font-medium transition-colors duration-200">{t('nav.contact')}</button>
              <LanguageToggle />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <LanguageToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-600 focus:outline-none ml-2"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-red-600 block px-3 py-4 text-base font-medium transition-colors duration-200 w-full text-left">{t('nav.projects')}</button>
            <button onClick={() => scrollToSection('biography')} className="text-gray-300 hover:text-red-600 block px-3 py-4 text-base font-medium transition-colors duration-200 w-full text-left">{t('nav.biography')}</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-red-600 block px-3 py-4 text-base font-medium transition-colors duration-200 w-full text-left">{t('nav.about')}</button>
            <button onClick={() => scrollToSection('gallery')} className='text-gray-300 hover:text-red-600 block px-3 py-4 text-base font-medium transition-colors duration-200 w-full text-left'>{t('nav.gallery')}</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-red-600 block px-3 py-4 text-base font-medium transition-colors duration-200 w-full text-left border-t border-gray-800">{t('nav.contact')}</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;