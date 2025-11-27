import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#0f172a]/80 backdrop-blur-lg border-white/10 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="https://valuation.joaokepler.com.br/_nuxt/logo.BkSwgH3Q.png" 
            alt="João Kepler Valuation" 
            className="h-8 md:h-10 object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#metodologia" className="text-sm font-medium text-slate-300 hover:text-brand transition-colors">
            Metodologia
          </a>
          <a href="#depoimentos" className="text-sm font-medium text-slate-300 hover:text-brand transition-colors">
            Depoimentos
          </a>
          <button className="bg-brand hover:bg-brand-dark text-white font-bold py-2.5 px-6 rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,200,133,0.3)] text-sm">
            Iniciar Diagnóstico
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white text-xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;