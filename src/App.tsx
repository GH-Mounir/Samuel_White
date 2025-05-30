import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilmsGrid from './components/FilmsGrid';
import Biography from './components/Biography';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GalleryPage from './pages/GalleryPage';

function App() {
  useEffect(() => {
    document.title = "Samuel Skhieh | Film Director";
  }, []);

  return (
    <div className="font-[Inter] text-base antialiased">
      <Navbar />
      <main>
        <Hero />
        <FilmsGrid />
        <Biography />
        <About />
        <section id="gallery-section">
          <GalleryPage />
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;