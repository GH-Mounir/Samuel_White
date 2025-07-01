import React, { useState, useEffect } from 'react';
import PhotoAlbum from 'react-photo-album';
import { useTranslation } from 'react-i18next';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

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
  const [index, setIndex] = useState(-1);
  const [isMounted, setIsMounted] = useState(false);

  // Add proper dimensions to images (you might want to pre-calculate these)
  const photos = galleryImages.map((image, i) => ({
    ...image,
    alt: `Gallery image ${i + 1}`,
    // For better performance, pre-calculate or fetch real dimensions
    // Or use a service like sharp to get dimensions during build
  }));

  console.log('Gallery images:', galleryImages);
  console.log('Photos data for PhotoAlbum:', photos);
  console.log('PhotoAlbum calculated layout:', photos.map(p => ({ src: p.src, width: p.width, height: p.height })));

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <section id="gallery" className="bg-black py-20 px-4 sm:px-6 lg:px-8" dir={t('direction')}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            {t('gallery.title')}
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto" />
        </div>

        {isMounted && (
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <PhotoAlbum
              photos={photos}
              layout="masonry"
              columns={(containerWidth) => {
                if (containerWidth < 640) return 2;
                if (containerWidth < 1024) return 3;
                return 4;
              }}
              spacing={12}
              padding={8}
              onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              slides={photos}
              plugins={[Zoom]}
              animation={{ fade: 300 }}
              carousel={{
                finite: true,
              }}
              controller={{ closeOnBackdropClick: true }}
              styles={{
                container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;