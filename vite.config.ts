import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'lightgallery',
        'lightgallery/css/lightgallery.css',
        'lightgallery/css/lg-zoom.css',
        'lightgallery/css/lg-thumbnail.css',
      ],
      output: {
        globals: {
          'lightgallery': 'lightGallery',
        },
        format: 'es',
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash].[ext]',
      },
    },
  },
  optimizeDeps: {
    include: ['lightgallery', 'react-router-dom'],
  },
  resolve: {
    alias: {
      'react-router-dom': 'react-router-dom/dist/index.js',
    },
  },
});
