
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import VoiceShowcase from './components/VoiceShowcase';
import Addons from './components/Addons';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const handleContactOpen = () => setContactModalOpen(true);
  const handleContactClose = () => setContactModalOpen(false);

  return (
    <div className="bg-black text-white font-sans min-h-screen relative">
      <Header onContactOpen={handleContactOpen} />
      <main className="container mx-auto px-6 lg:px-8 relative z-10">
        <Hero />
        <Partners />
        <VoiceShowcase />
        <Addons />
        <Pricing onContactOpen={handleContactOpen} />
        <FAQ />
      </main>
      <Footer onContactOpen={handleContactOpen} />
      <WhatsAppButton />
      <ContactModal isOpen={isContactModalOpen} onClose={handleContactClose} />
    </div>
  );
};

export default App;
