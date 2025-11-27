import React from 'react';
import ValuationCard from './ValuationCard';

const ValuationSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-[#0f172a] overflow-hidden">
      {/* Abstract Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
           <path d="M-100 800C200 700 400 300 720 500C1040 700 1200 400 1540 800H-100Z" fill="url(#paint0_linear)"/>
           <path d="M-100 800C100 600 500 400 720 600C940 800 1300 500 1540 800H-100Z" fill="url(#paint1_linear)" style={{mixBlendMode: 'overlay'}}/>
           <defs>
             <linearGradient id="paint0_linear" x1="720" y1="0" x2="720" y2="800" gradientUnits="userSpaceOnUse">
               <stop stopColor="#00c885" stopOpacity="0.05"/>
               <stop offset="1" stopColor="#0f172a" stopOpacity="0"/>
             </linearGradient>
             <linearGradient id="paint1_linear" x1="720" y1="300" x2="720" y2="800" gradientUnits="userSpaceOnUse">
               <stop stopColor="#1d293d" stopOpacity="0.5"/>
               <stop offset="1" stopColor="#0f172a" stopOpacity="0"/>
             </linearGradient>
           </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Connection Line from Hero */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-brand/50"></div>

        <div className="text-center mb-12" data-aos="fade-up">
           <span className="text-brand font-bold text-sm tracking-wider uppercase mb-2 block">Simulador em Tempo Real</span>
           <h2 className="text-3xl md:text-4xl font-bold text-white">
             Visualize o potencial do seu negócio
           </h2>
        </div>

        <div className="w-full max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500">
          <ValuationCard />
        </div>
      </div>
    </section>
  );
};

export default ValuationSection;