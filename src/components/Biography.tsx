import React, { useState, useEffect } from 'react';
import { Film, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Biography: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

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

    const section = document.getElementById('biography');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  return (
    <section id="biography" className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-wide">{t('biography.title')}</h2>
          <div className="w-16 h-0.5 bg-red-600 mb-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Bio image */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] bg-gray-900 relative overflow-hidden">
                <img 
                  src="/images/self/self7.jpeg" 
                  alt="Samuel Skhieh" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              </div>
            </div>

            {/* Bio content */}
            <div className="lg:col-span-7">
              <div className="prose prose-invert max-w-none">
                <div className="flex items-center gap-4 mb-6">
                  <Film className="text-red-600 w-6 h-6" />
                  <h3 className="text-2xl font-bold text-white m-0">{t('biography.role')}</h3>
                </div>

                <div className="space-y-6 text-gray-300">
                  <p>
                    {t('biography.paragraph1')}
                  </p>

                  <p>
                    {t('biography.paragraph2')}
                  </p>

                  <div className="border-l-2 border-red-600 pl-4 my-8">
                    <p className="text-lg italic text-gray-400">
                      {t('biography.quote')}
                    </p>
                  </div>

                  <p>
                    {t('biography.paragraph3')}
                  </p>

                  <p>
                    {t('biography.paragraph4')}
                  </p>

                  <div className="bg-gray-900 p-6 my-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Award className="text-red-600 w-6 h-6" />
                      <h4 className="text-xl font-bold text-white m-0">{t('biography.notableWorks')}</h4>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {t('biography.works', { returnObjects: true }).map((work: string, index: number) => (
                        <li key={index}>{work}</li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    {t('biography.paragraph5')}
                  </p>

                  <p>
                    {t('biography.paragraph6')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;