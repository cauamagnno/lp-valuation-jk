import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValuationSection from './components/ValuationSection';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Deliverable from './components/Deliverable';
import Footer from './components/Footer';

// Define AOS on window for TypeScript
declare global {
  interface Window {
    AOS: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    // Initialize AOS Animation Library
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic',
        offset: 100,
      });
    }
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand selection:text-white bg-[#0f172a]">
      <Navbar />
      <main>
        <Hero />
        <ValuationSection />
        <HowItWorks />
        <Deliverable />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;