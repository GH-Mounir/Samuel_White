import React, { useState, useEffect } from 'react';
import PhotoAlbum from 'react-photo-album';
import { useTranslation } from 'react-i18next';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';

// Define types for better TypeScript support
interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

const galleryImages: GalleryImage[] = [
  { src: '/images/gallery/prod14.jpeg', width: 800, height: 1200 },
  { src: '/images/gallery/prod24.jpeg', width: 1200, height: 800 },
  { src: '/images/gallery/prod25.jpeg', width: 800, height: 600 },
  { src: '/images/gallery/prod12.jpeg', width: 600, height: 900 },
  { src: '/images/gallery/prod35.jpeg', width: 900, height: 600 },
  { src: '/images/gallery/prod18.jpeg', width: 800, height: 1200 },
  { src: '/images/gallery/prod7.jpeg', width: 1200, height: 800 },
  { src: '/images/gallery/prod27.jpeg', width: 800, height: 600 },
  { src: '/images/gallery/prod22.jpeg', width: 600, height: 900 },
  { src: '/images/gallery/prod26.jpeg', width: 900, height: 600 },
  { src: '/images/gallery/prod21.jpeg', width: 800, height: 1200 },
  { src: '/images/gallery/prod30.jpeg', width: 1200, height: 800 },
  { src: '/images/gallery/prod8.jpeg', width: 800, height: 600 },
  { src: '/images/gallery/prod31.jpeg', width: 600, height: 900 },
  { src: '/images/gallery/prod13.jpeg', width: 900, height: 600 },
  { src: '/images/gallery/prod36.jpeg', width: 800, height: 1200 },
  { src: '/images/gallery/prod15.jpeg', width: 1200, height: 800 },
  { src: '/images/gallery/prod4.jpeg', width: 800, height: 600 },
  { src: '/images/gallery/prod34.jpeg', width: 600, height: 900 },
  { src: '/images/gallery/prod1.jpeg', width: 900, height: 600 },
  { src: '/images/gallery/prod5.jpeg', width: 800, height: 1200 },
  { src: '/images/gallery/prod32.jpeg', width: 1200, height: 800 },
  { src: '/images/gallery/prod16.jpeg', width: 800, height: 600 },
  { src: '/images/gallery/prod17.jpeg', width: 600, height: 900 },
  { src: '/images/gallery/prod11.jpeg', width: 900, height: 600 },
  { src: '/images/gallery/prod6.jpeg', width: 800, height: 1200 },
  { src: '/images/gallery/prod19.jpeg', width: 1200, height: 800 },
  { src: '/images/gallery/prod20.jpeg', width: 800, height: 600 },
  { src: '/images/gallery/prod29.jpeg', width: 600, height: 900 },
  { src: '/images/gallery/prod2.jpeg', width: 900, height: 600 },
  { src: '/images/gallery/prod10.jpeg', width: 800, height: 1200 },
  { src: '/images/gallery/prod3.jpeg', width: 1200, height: 800 },
];

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const length = galleryImages.length;
  const timeoutRef = React.useRef<number | null>(null);

  // Autoplay logic
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, length]);

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);
  const goToSlide = (idx: number) => setCurrent(idx);

  return (
    <section id="gallery" className="bg-black py-20 px-4 sm:px-6 lg:px-8" dir={t('direction')}>
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
          {t('gallery')}
        </h2>
        <div className="w-16 h-1 bg-red-600 mx-auto" />
      </div>
      <div className="slideshow-container relative max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg bg-black">
        {galleryImages.map((img, idx) => (
          <div
            key={img.src}
            className={`mySlides fade ${idx === current ? 'block' : 'hidden'}`}
          >
            <div className="numbertext absolute top-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded text-xs z-10">
              {idx + 1} / {length}
            </div>
            <img
              src={img.src}
              alt={img.alt || `Gallery image ${idx + 1}`}
              className="w-full h-[400px] object-contain object-center bg-black"
            />
          </div>
        ))}
        {/* Navigation Arrows */}
        <button
          className="prev absolute top-1/2 left-2 -translate-y-1/2 text-3xl text-white hover:text-red-600 z-20 bg-black bg-opacity-40 rounded-full px-2 py-1 transition-colors"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          className="next absolute top-1/2 right-2 -translate-y-1/2 text-3xl text-white hover:text-red-600 z-20 bg-black bg-opacity-40 rounded-full px-2 py-1 transition-colors"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {galleryImages.map((_, idx) => (
          <button
            key={idx}
            className={`dot w-3 h-3 rounded-full border-2 border-white ${current === idx ? 'bg-red-600 border-red-600' : 'bg-white bg-opacity-40'} transition-colors`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;