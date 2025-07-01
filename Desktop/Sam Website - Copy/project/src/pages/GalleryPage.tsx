import React, { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import { useTranslation } from 'react-i18next';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Navbar from '../components/Navbar';

// Define types for better TypeScript support
interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

const galleryImages: GalleryImage[] = [
  { src: '/images/gallery/prod1.jpeg', width: 1638, height: 2048 },
  { src: '/images/gallery/prod10.jpeg', width: 2048, height: 1365 },
  { src: '/images/gallery/prod11.jpeg', width: 1108, height: 1133 },
  { src: '/images/gallery/prod12.jpeg', width: 1559, height: 1930 },
  { src: '/images/gallery/prod13.jpeg', width: 1638, height: 1638 },
  { src: '/images/gallery/prod14.jpeg', width: 2048, height: 1493 },
  { src: '/images/gallery/prod15.jpeg', width: 2048, height: 1536 },
  { src: '/images/gallery/prod16.jpeg', width: 1183, height: 1183 },
  { src: '/images/gallery/prod17.jpeg', width: 1554, height: 1080 },
  { src: '/images/gallery/prod18.jpeg', width: 2048, height: 1365 },
  { src: '/images/gallery/prod19.jpeg', width: 1984, height: 1488 },
  { src: '/images/gallery/prod2.jpeg', width: 2048, height: 1536 },
  { src: '/images/gallery/prod20.jpeg', width: 1639, height: 2048 },
  { src: '/images/gallery/prod21.jpeg', width: 2048, height: 1427 },
  { src: '/images/gallery/prod22.jpeg', width: 1080, height: 750 },
  { src: '/images/gallery/prod24.jpeg', width: 2048, height: 1365 },
  { src: '/images/gallery/prod25.jpeg', width: 1023, height: 1280 },
  { src: '/images/gallery/prod26.jpeg', width: 1023, height: 1280 },
  { src: '/images/gallery/prod27.jpeg', width: 2048, height: 1365 },
  { src: '/images/gallery/prod29.jpeg', width: 1984, height: 1488 },
  { src: '/images/gallery/prod3.jpeg', width: 816, height: 1024 },
  { src: '/images/gallery/prod30.jpeg', width: 2048, height: 1365 },
  { src: '/images/gallery/prod31.jpeg', width: 1639, height: 2048 },
  { src: '/images/gallery/prod32.jpeg', width: 2048, height: 1365 },
  { src: '/images/gallery/prod34.jpeg', width: 2048, height: 1536 },
  { src: '/images/gallery/prod35.jpeg', width: 2048, height: 1365 },
  { src: '/images/gallery/prod36.jpeg', width: 1366, height: 1366 },
  { src: '/images/gallery/prod4.jpeg', width: 1459, height: 1094 },
  { src: '/images/gallery/prod5.jpeg', width: 960, height: 639 },
  { src: '/images/gallery/prod6.jpeg', width: 2048, height: 1153 },
  { src: '/images/gallery/prod7.jpeg', width: 2048, height: 1365 },
  { src: '/images/gallery/prod8.jpeg', width: 938, height: 938 },
];

const GalleryPage: React.FC = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(-1);

  const photos = galleryImages.map((image, i) => ({
    ...image,
    alt: `Gallery image ${i + 1}`,
  }));

  return (
    <div className="font-[Inter] text-base antialiased bg-black text-white min-h-screen" dir={t('direction')}>
      <Navbar />
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            Gallery
          </h1>
          <div className="w-16 h-1 bg-red-600 mx-auto" />
        </div>

        <div className="masonry-gallery">
          <PhotoAlbum
            photos={photos}
            layout="masonry"
            columns={(containerWidth) => {
              if (containerWidth < 640) return 1;
              if (containerWidth < 1024) return 2;
              return 3;
            }}
            spacing={4}
            padding={8}
            onClick={({ index }) => setIndex(index)}
            sizes={{
              size: "100vw",
              sizes: [
                { viewport: "(max-width: 640px)", size: "100vw" },
                { viewport: "(max-width: 1024px)", size: "100vw" },
                { viewport: "(min-width: 1025px)", size: "1200px" },
              ],
            }}
          />
        </div>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={photos}
          plugins={[Zoom]}
          animation={{ fade: 300 }}
          carousel={{ finite: true }}
          controller={{ closeOnBackdropClick: true }}
          styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' } }}
        />
      </div>
    </div>
  );
};

export default GalleryPage;