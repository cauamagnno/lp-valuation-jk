import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050911] border-t border-white/5 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <div className="max-w-3xl mx-auto mb-16" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sua empresa vale mais do que você imagina.
          </h2>
          <p className="text-slate-400 mb-8">
            Descubra o potencial oculto do seu negócio hoje mesmo.
          </p>
          <button className="bg-brand hover:bg-brand-dark text-white font-bold py-4 px-12 rounded-full transition-all text-lg shadow-[0_0_20px_rgba(0,200,133,0.3)] hover:scale-105">
            Iniciar Diagnóstico Agora
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <img 
            src="https://valuation.joaokepler.com.br/_nuxt/logo.BkSwgH3Q.png" 
            alt="Logo Footer" 
            className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all"
          />
          <p className="text-xs text-slate-600">
            Copyright © {new Date().getFullYear()} João Kepler Valuation. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
             <a href="#" className="text-slate-600 hover:text-brand transition-colors"><i className="fa-brands fa-instagram"></i></a>
             <a href="#" className="text-slate-600 hover:text-brand transition-colors"><i className="fa-brands fa-linkedin"></i></a>
             <a href="#" className="text-slate-600 hover:text-brand transition-colors"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;