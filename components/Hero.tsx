import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-32 md:pb-48 overflow-hidden min-h-[85vh] flex items-center group">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#1d293d]/50 to-[#0f172a] z-0 pointer-events-none"></div>
      
      {/* EXPERT IMAGE - GHOSTLY BACKGROUND */}
      <div className="absolute top-0 right-0 w-full lg:w-[70%] h-full z-0 transition-all duration-1000 ease-out">
        <div 
           className="relative w-full h-full opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-1000"
           style={{
             maskImage: 'linear-gradient(to right, transparent 0%, black 50%), linear-gradient(to bottom, black 60%, transparent 100%)',
             WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50%), linear-gradient(to bottom, black 60%, transparent 100%)',
             maskComposite: 'intersect',
             WebkitMaskComposite: 'source-in'
           }}
        >
           <img 
             src="https://gzklniguxhhzoxgmixwt.supabase.co/storage/v1/object/public/valuation/kepler_image.jpg" 
             alt="João Kepler Background" 
             className="w-full h-full object-cover object-top transform scale-105 group-hover:scale-100 transition-transform duration-[2000ms]"
           />
           
           {/* Color Tint Overlay on Hover */}
           <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-overlay"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-20">
        
        {/* Left Column: Copy */}
        <div data-aos="fade-right" className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/50 bg-brand/5 backdrop-blur-sm mb-8 animate-fade-in-up">
            <i className="fa-solid fa-check-circle text-brand text-xs"></i>
            <span className="text-brand text-sm font-semibold tracking-wide uppercase">Metodologia Oficial João Kepler</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-8 tracking-tight">
            Descubra o valor <br className="hidden md:block" /> 
            da sua empresa <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400 relative">
              em minutos.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.0003 3.50002 91.0003 -3.49997 198.001 2.49998" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed border-l-4 border-brand/30 pl-6">
            Utilize a inteligência de dados dos maiores fundos de Venture Capital do Brasil para precificar seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-12">
            <button className="bg-brand hover:bg-brand-dark text-white text-lg font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(0,200,133,0.4)] hover:shadow-[0_0_40px_rgba(0,200,133,0.6)] hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-3 group-btn">
              Fazer Diagnóstico Gratuito
              <i className="fa-solid fa-arrow-right group-btn-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f172a] bg-slate-700 overflow-hidden ring-2 ring-transparent group-hover:ring-brand/30 transition-all duration-700">
                   <img src={`https://picsum.photos/100/100?random=${i}`} alt="Founder" className="w-full h-full object-cover opacity-80 group-hover:opacity-100" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-brand text-xs mb-0.5">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-slate-400 text-sm font-medium"><strong className="text-white">1.200+</strong> founders já validaram</p>
            </div>
          </div>
        </div>

        {/* Right Column is visually empty to let the background image shine, 
            but keeps grid structure for responsiveness */}
        <div className="hidden lg:block h-full pointer-events-none"></div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-[10px] uppercase tracking-widest text-slate-500">Role para ver o Score</span>
        <i className="fa-solid fa-chevron-down text-slate-500"></i>
      </div>
    </section>
  );
};

export default Hero;