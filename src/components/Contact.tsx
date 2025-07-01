import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    alert(t('contact.form.successMessage'));
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="bg-black py-20 px-4 sm:px-6 lg:px-8" dir={t('direction')}>
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-wide">{t('contact.title')}</h2>
          <div className="w-16 h-0.5 bg-red-600 mb-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <p className="text-gray-300 mb-8 max-w-md">
                {t('contact.subtitle')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-red-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">{t('contact.email')}</h4>
                    <a href="mailto:contact@samuelskhieh.com" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                      contact@samuelskhieh.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="text-red-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">{t('contact.representation')}</h4>
                    <p className="text-gray-400">
                      {t('contact.agency')}<br />
                      {t('contact.location')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="bg-gray-900 p-6 lg:p-8">
              <h3 className="text-white text-xl font-semibold mb-6">{t('contact.sendMessage')}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-gray-300 text-sm mb-1 block">
                    {t('contact.form.name')}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black text-white px-4 py-3 border border-gray-800 focus:border-red-600 focus:outline-none transition-colors duration-200"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="text-gray-300 text-sm mb-1 block">
                    {t('contact.form.email')}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black text-white px-4 py-3 border border-gray-800 focus:border-red-600 focus:outline-none transition-colors duration-200"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="text-gray-300 text-sm mb-1 block">
                    {t('contact.form.subject')}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-black text-white px-4 py-3 border border-gray-800 focus:border-red-600 focus:outline-none transition-colors duration-200"
                      placeholder={t('contact.form.subjectPlaceholder')}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="text-gray-300 text-sm mb-1 block">
                    {t('contact.form.message')}
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-black text-white px-4 py-3 border border-gray-800 focus:border-red-600 focus:outline-none transition-colors duration-200"
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-red-800 hover:bg-red-700 text-white px-6 py-3 transition-colors duration-200 flex items-center justify-center"
                  >
                    {t('contact.form.submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;