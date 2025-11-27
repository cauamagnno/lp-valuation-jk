import React from 'react';

const steps = [
  {
    icon: "fa-chart-line",
    title: "Múltiplos de EBITDA",
    desc: "Análise algorítmica baseada em transações reais do seu setor."
  },
  {
    icon: "fa-fingerprint",
    title: "Score de Maturidade",
    desc: "O fator 'João Kepler': Ajuste de valor baseado em Governança e Time."
  },
  {
    icon: "fa-layer-group",
    title: "Ativos & Intangíveis",
    desc: "Soma de marca, tecnologia e propriedade intelectual."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="metodologia" className="py-28 bg-[#0f172a] relative overflow-hidden">
      {/* Background Gradients/Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand/5 via-transparent to-transparent opacity-40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/20 bg-brand/5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
              <span className="text-xs font-bold text-brand tracking-widest uppercase">Tecnologia Exclusiva</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
             Como o <span className="text-brand">Valuation</span> é calculado?
           </h2>
           <p className="text-slate-400 max-w-2xl mx-auto text-lg">
             Uma metodologia híbrida que une dados de mercado com a visão estratégica de quem investe.
           </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-brand hover:shadow-[0_0_40px_-10px_rgba(0,200,133,0.4)] overflow-hidden cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Holographic Sheen Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:bg-brand group-hover:border-brand">
                  <i className={`fa-solid ${step.icon} text-2xl text-brand group-hover:text-white transition-colors duration-300`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-5 mt-auto">
                  {step.desc}
                </p>
              </div>
              
              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand/10 blur-[60px] rounded-full group-hover:bg-brand/20 transition-all duration-500 opacity-50 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="500">
          <button className="border border-brand text-brand hover:bg-brand hover:text-white font-bold py-3 px-10 rounded-full transition-all uppercase tracking-wide text-xs md:text-sm shadow-[0_0_15px_rgba(0,200,133,0.05)] hover:shadow-[0_0_30px_rgba(0,200,133,0.4)]">
            Entender a Metodologia Completa
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;