import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react-router-dom',
        'lightgallery',
        'lightgallery/css/lightgallery.css',
        'lightgallery/css/lg-zoom.css',
        'lightgallery/css/lg-thumbnail.css',
      ],
      output: {
        globals: {
          'react-router-dom': 'ReactRouterDOM',
          'lightgallery': 'lightGallery',
        },
      },
    },
  },
  optimizeDeps: {
    include: ['lightgallery'],
  },
});
