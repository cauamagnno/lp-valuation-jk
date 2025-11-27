import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Completed', value: 56 },
  { name: 'Remaining', value: 44 },
];

const COLORS = ['#00c885', '#1e293b'];

const ValuationCard: React.FC = () => {
  return (
    <div 
      className="relative w-full max-w-md mx-auto" 
      data-aos="zoom-in" 
      data-aos-delay="200"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand/20 blur-[80px] rounded-full pointer-events-none"></div>

      {/* Main Card */}
      <div className="relative glass-card rounded-2xl p-6 md:p-8 flex flex-col items-center text-center animate-float">
        
        {/* Top Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10">
          <i className="fa-solid fa-crosshairs text-brand text-xs"></i>
          <span className="text-xs font-bold text-brand tracking-wide">75% DE ASSERTIVIDADE</span>
        </div>

        {/* Chart Section */}
        <div className="relative w-48 h-48 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          
          {/* Inner Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">56%</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Score</span>
          </div>
        </div>

        {/* Value Display */}
        <div className="mt-2 mb-6">
          <p className="text-sm text-slate-400 font-medium mb-1">Valuation Estimado</p>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
            R$ 2.2 Bilhões
          </h3>
        </div>

        {/* Status Badge */}
        <div className="w-full bg-[#1e293b] rounded-lg p-3 flex items-center justify-between border border-white/5">
          <span className="text-xs text-slate-400">Status Atual</span>
          <span className="flex items-center gap-1.5 text-xs font-bold text-brand bg-brand/10 px-2 py-1 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
            EM CRESCIMENTO
          </span>
        </div>

        {/* Floating Action Card (Absolute) */}
        <div className="absolute -bottom-6 -left-8 md:-left-12 glass-card p-3 rounded-xl flex items-center gap-3 border-l-4 border-l-brand animate-pulse-slow shadow-xl">
          <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white pl-0.5">
            <i className="fa-solid fa-play text-xs"></i>
          </div>
          <div className="text-left">
            <p className="text-[10px] text-slate-300 font-medium uppercase">Ação Recomendada</p>
            <p className="text-xs font-bold text-white">Iniciar Análise Agora</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuationCard;