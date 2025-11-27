import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    company: "Patrofer06",
    feedback: "Caraca, muito bom. Estou com um investidor em potencial, agora sei qual o ponto de partida na negociação. Gratidão!",
    tag: "Bom",
    tagColor: "bg-blue-500/20 text-blue-400"
  },
  {
    id: 2,
    company: "Vox Soluções",
    feedback: "Bem fácil de preencher, achei a experiência agradável... obrigado.",
    tag: "Bom",
    tagColor: "bg-blue-500/20 text-blue-400"
  },
  {
    id: 3,
    company: "RNS transportes",
    feedback: "Visão ampla do nosso resultado.",
    tag: "Excelente",
    tagColor: "bg-brand/20 text-brand"
  },
  {
    id: 4,
    company: "Bencato Engenharia",
    feedback: "Valor que eu tinha em mente.",
    tag: "Bom",
    tagColor: "bg-blue-500/20 text-blue-400"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Quem já usou, <span className="text-brand">aprovou.</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Veja o que empreendedores reais estão dizendo sobre a precisão e facilidade da nossa ferramenta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <div 
              key={t.id} 
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-slate-300 font-bold text-lg">
                    {t.company.charAt(0)}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${t.tagColor}`}>
                    {t.tag}
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{t.feedback}"
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-white font-semibold text-sm">{t.company}</p>
                <div className="flex text-brand text-[10px] mt-1 gap-0.5">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;