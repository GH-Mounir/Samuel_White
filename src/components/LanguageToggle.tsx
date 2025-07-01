import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-gray-300 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
      aria-label="Toggle language"
    >
      {i18n.language === 'en' ? 'عربي' : 'EN'}
    </button>
  );
};

export default LanguageToggle;