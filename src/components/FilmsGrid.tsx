import React, { useState, useEffect } from 'react';
import { films } from '../data/films';
import { useTranslation } from 'react-i18next';
import FilmCard from './FilmCard';
import LightGallery from 'lightgallery/react';

// Import styles manually
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const FilmsGrid: React.FC = () => {
  const { t } = useTranslation();
  // Get category keys directly from the translation file, excluding 'all'
  const categoryKeys = Object.keys(t('projects.categories', { returnObjects: true })).filter(key => key !== 'all');
  // Include 'all' at the beginning for the default category button
  const allCategories = ['all', ...categoryKeys];

  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredFilms, setFilteredFilms] = useState(films);
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredFilms(films);
    } else {
      // Filter films based on the category key
      setFilteredFilms(films.filter(film => film.category === activeCategory));
    }
  }, [activeCategory, films]); // Added 'films' dependency as it's now dynamic

  // Prepare photos data for react-photo-album and lightgallery
  const photos = filteredFilms.map(film => ({
    src: film.imageUrl,
    width: 800, // Placeholder width
    height: 600, // Placeholder height
    alt: film.title, // Alt text for accessibility
    // title: film.title, // Film title for LightGallery caption - will use subHtml instead
    // description: film.description, // Film description for LightGallery content - will use subHtml instead
    subHtml: `<div class="lightgallery-caption"><h3>${film.title}</h3><p>${film.description}</p></div>`, // HTML content for title and description
  }));

  console.log('Filtered Films:', filteredFilms);
  console.log('Photos data:', photos);
  console.log('First 3 photo objects:', photos.slice(0, 3));

  return (
    <section id="projects" className="bg-black py-20 px-4 sm:px-6 lg:px-8" dir={t('direction')}>
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-wide">{t('projects.title')}</h2>
          <div className="w-16 h-0.5 bg-red-600 mb-10" />

          <div className="mb-10 flex flex-wrap gap-2">
            {allCategories.map(categoryKey => (
              <button
                key={categoryKey}
                onClick={() => setActiveCategory(categoryKey)}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeCategory === categoryKey
                    ? 'bg-red-600 text-white'
                    : 'bg-transparent text-gray-400 hover:text-white border border-gray-800 hover:border-red-600'
                }`}
              >
                {/* Use the category key to get the translation directly */}
                {t(`projects.categories.${categoryKey}`)}
              </button>
            ))}
          </div>

          {/* Placeholder text to check if the component is rendering */}
          {/* <p className="text-white">Films Grid Section is rendering (Simplified)</p> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFilms.map(film => (
              <FilmCard key={film.id} film={film} />
            ))}
          </div>

          {/* <PhotoAlbum
            photos={photos}
            layout="rows"
            targetRowHeight={300}
          /> */}

        </div>
      </div>
    </section>
  );
};

export default FilmsGrid;