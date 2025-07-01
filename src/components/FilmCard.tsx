import React, { useState, useEffect, useRef } from 'react';
import { Film } from '../types';
import { Play, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';

interface FilmCardProps {
  film: Film;
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const getCategoryTranslation = (category: string) => {
    switch (category) {
      case 'Feature Film':
        return t('projects.categories.featureFilm');
      case 'Documentary':
        return t('projects.categories.documentary');
      case 'Short Film':
        return t('projects.categories.shortFilm');
      default:
        return category;
    }
  };

  const translatedFilm = {
    title: t(`projects.projects.${film.title}.title`),
    description: t(`projects.projects.${film.title}.description`)
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    };
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showModal]);

  return (
    <div 
      className="group relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setShowModal(true)}
      dir={t('direction')}
    >
      <div className="aspect-[2/3] overflow-hidden bg-gray-900">
        <img 
          src={film.imageUrl} 
          alt={translatedFilm.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div 
        className={`absolute inset-0 border-2 transition-all duration-300 pointer-events-none ${isHovered ? 'border-red-600' : 'border-transparent'}`} 
      />

      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div 
          className={`transition-all duration-300 ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
        >
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
            <div className="text-xs font-semibold text-red-600 mb-1">
              {getCategoryTranslation(film.category)} • {film.year}
            </div>
            <h3 className="text-xl font-bold text-white mb-2 tracking-wide">
              {translatedFilm.title}
            </h3>
            <p className="text-sm text-gray-300 mb-4 line-clamp-2">
              {translatedFilm.description}
            </p>
            {film.videoUrl && (
              <a 
                href={film.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white bg-red-600/30 hover:bg-red-600/50 border border-red-600 px-4 py-2 transition-colors duration-200"
              >
                <Play className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">{t('projects.watchButton')}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <Modal 
        showModal={showModal}
        setShowModal={setShowModal}
        title={translatedFilm.title}
        description={translatedFilm.description}
        dir={t('direction') as 'ltr' | 'rtl'}
      />
    </div>
  );
};

export default FilmCard;