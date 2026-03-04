import React from 'react';
import { ArrowRight } from 'lucide-react';

const Journey = ({ t, isDarkMode, journeyPoints, activeJourneyStep, setActiveJourneyStep }) => {
  return (
    <section id="journey" className={`py-16 px-6 ${t.sectionBg} border-t ${t.cardBorder}`}>
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="mb-12 text-center w-full">
          <h2 className={`text-3xl font-bold ${t.heading} mb-2 tracking-tight uppercase`}>My Journey</h2>
          <p className={`${t.muted} text-sm italic`}>Professional evolution, pivots, and growth.</p>
        </div>

        {/* Slider Controls */}
        <div className="flex flex-col items-center mb-12 w-full">
          <div className={`text-3xl md:text-5xl font-black ${isDarkMode ? 'text-white' : 'text-zinc-900'} tracking-tighter mb-4 tabular-nums`}>
            {journeyPoints[activeJourneyStep].year}
          </div>
          <div className="flex items-center gap-6 w-full max-w-[716px]">
            <button 
              onClick={() => setActiveJourneyStep(prev => Math.max(0, prev - 1))}
              className={`h-12 px-6 rounded-full border ${t.itemBorder} flex items-center justify-center transition-all active:scale-95 ${t.accentBg} text-white font-black shadow-lg ${t.accentHover}`}
              disabled={activeJourneyStep === 0}
              aria-label="Previous career milestone"
            >
              <ArrowRight size={18} className="rotate-180" />
            </button>
            
            <div className="flex-1 relative group py-4">
              <input 
                type="range" 
                min="0" 
                max={journeyPoints.length - 1} 
                value={activeJourneyStep} 
                onChange={(e) => setActiveJourneyStep(parseInt(e.target.value))}
                className={`w-full h-1.5 appearance-none rounded-full cursor-pointer transition-all ${t.itemBorder} border bg-transparent focus:outline-none ${isDarkMode ? 'accent-orange-600' : 'accent-blue-600'}`}
                aria-label="Career timeline scrub slider"
                style={{
                  background: `linear-gradient(to right, ${isDarkMode ? '#ea580c' : '#2563eb'} 0%, ${isDarkMode ? '#ea580c' : '#2563eb'} ${(activeJourneyStep / (journeyPoints.length - 1)) * 100}%, ${isDarkMode ? '#27272a' : '#e2e8f0'} ${(activeJourneyStep / (journeyPoints.length - 1)) * 100}%, ${isDarkMode ? '#27272a' : '#e2e8f0'} 100%)`
                }}
              />
            </div>

            <button 
              onClick={() => setActiveJourneyStep(prev => Math.min(journeyPoints.length - 1, prev + 1))}
              className={`h-12 px-6 rounded-full border ${t.itemBorder} flex items-center justify-center transition-all active:scale-95 ${t.accentBg} text-white font-black shadow-lg ${t.accentHover}`}
              disabled={activeJourneyStep === journeyPoints.length - 1}
              aria-label="Next career milestone"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="w-full max-w-4xl">
          <div className={`p-8 md:p-12 ${t.cardBg} border ${t.cardBorder} ${t.cardHover} rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group/card transition-all duration-500`}>
              <div className="relative flex flex-col items-center text-center">
                  <div className="flex items-center justify-center gap-5 md:gap-8 w-full">
                      <div className={`w-14 h-14 md:w-20 md:h-20 ${t.bg} border ${t.itemBorder} rounded-xl md:rounded-3xl flex items-center justify-center ${t.accentText} shadow-inner shrink-0 relative group/icon`}>
                        {React.cloneElement(journeyPoints[activeJourneyStep].icon, { size: isDarkMode ? 28 : 34 })}
                      </div>
                      <h3 className={`text-2xl md:text-5xl font-bold ${t.heading} tracking-tight leading-tight`}>
                        {journeyPoints[activeJourneyStep].title}
                      </h3>
                  </div>

                  <div className={`h-px w-full ${t.cardBorder} opacity-30 my-6`} />

                  <p className={`${t.text} text-center text-lg md:text-xl leading-relaxed italic max-w-3xl`}>
                    &quot;{journeyPoints[activeJourneyStep].desc}&quot;
                  </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
