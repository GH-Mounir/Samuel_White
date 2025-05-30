import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'gallery-vendor': ['lightgallery', 'react-photo-album', 'yet-another-react-lightbox'],
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      'react-router-dom',
      'lightgallery',
      'react-photo-album',
      'yet-another-react-lightbox',
    ],
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['> 1%', 'last 2 versions', 'not dead'],
        }),
        tailwindcss,
      ],
    },
  },
});
