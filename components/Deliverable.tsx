import React from 'react';

const Deliverable: React.FC = () => {
  return (
    <section className="py-24 relative">
       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
         
         {/* Visual Mockup */}
         <div className="relative order-2 lg:order-1" data-aos="fade-right">
            <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full"></div>
            <div className="relative bg-white p-2 rounded-xl rotate-[-3deg] hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto shadow-2xl">
              <div className="bg-slate-50 border border-slate-200 aspect-[1/1.41] rounded overflow-hidden flex flex-col relative">
                {/* Header of PDF */}
                <div className="h-4 bg-[#00c885] w-full"></div>
                <div className="p-6 flex-1 flex flex-col">
                   <div className="w-16 h-16 bg-slate-200 rounded-full mb-6"></div>
                   <div className="h-4 bg-slate-200 w-3/4 rounded mb-2"></div>
                   <div className="h-3 bg-slate-200 w-1/2 rounded mb-8"></div>
                   
                   <div className="grid grid-cols-2 gap-4 mb-8">
                     <div className="h-20 bg-slate-100 rounded border border-slate-200"></div>
                     <div className="h-20 bg-slate-100 rounded border border-slate-200"></div>
                   </div>
                   
                   <div className="space-y-2 mt-auto">
                     <div className="h-2 bg-slate-100 w-full rounded"></div>
                     <div className="h-2 bg-slate-100 w-full rounded"></div>
                     <div className="h-2 bg-slate-100 w-2/3 rounded"></div>
                   </div>
                </div>
                
                {/* Stamp */}
                <div className="absolute bottom-10 right-8 rotate-[-15deg] border-2 border-[#00c885] p-2 rounded opacity-80">
                  <span className="text-[#00c885] font-bold text-xs uppercase">Assinado Digitalmente</span>
                </div>
              </div>
            </div>
         </div>

         {/* Text Copy */}
         <div className="order-1 lg:order-2" data-aos="fade-left">
           <div className="inline-block px-3 py-1 bg-white/5 rounded-full border border-white/10 mb-4">
             <span className="text-xs font-semibold text-slate-300">Documento Oficial</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
             Receba um <span className="text-brand">Laudo Assinado</span> para apresentar a investidores.
           </h2>
           <p className="text-slate-400 text-lg mb-8">
             Não entregamos apenas um número. Você recebe um relatório completo, detalhando os pontos fortes e de melhoria do seu negócio, pronto para rodadas de investimento.
           </p>
           
           <ul className="space-y-4 mb-8">
             {['Aceito por fundos de VC', 'Metodologia auditável', 'Download imediato em PDF'].map((item, idx) => (
               <li key={idx} className="flex items-center gap-3 text-slate-300">
                 <i className="fa-solid fa-check text-brand"></i>
                 {item}
               </li>
             ))}
           </ul>

           <button className="bg-brand hover:bg-brand-dark text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-brand/40">
             Começar o Diagnóstico
           </button>
         </div>

       </div>
    </section>
  );
};

export default Deliverable;