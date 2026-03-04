import React from 'react';

const Stats = ({ t, stats }) => {
  return (
    <section className="py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-6">
        {stats.map((stat, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center text-center group">
              <span className={`text-2xl md:text-3xl font-black ${t.accentText} tracking-tighter leading-none`}>{stat.value}</span>
              <span className={`text-[10px] font-black uppercase tracking-widest ${t.mutedExtra} mt-1.5`}>{stat.label}</span>
            </div>
            {i < stats.length - 1 && (
              <div className={`hidden md:block h-8 w-px ${t.cardBorder} opacity-30 shrink-0`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Stats;
