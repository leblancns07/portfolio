import { useState, useMemo, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Target, Workflow } from 'lucide-react';
import { caseStudies } from '../data/portfolio.jsx';
import CaseStudyModal from './CaseStudyModal';

const Impacts = ({ t, SHOW_CASE_STUDIES }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const filterScrollRef = useRef(null);

  const checkScroll = () => {
    if (filterScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = filterScrollRef.current;
      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
    }
  };

  useEffect(() => {
    setTimeout(checkScroll, 100);
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const filteredStudies = useMemo(() => {
    if (activeFilter === 'All') return caseStudies;
    return caseStudies.filter(study => study.tags.includes(activeFilter));
  }, [activeFilter]);

  if (!SHOW_CASE_STUDIES) return null;

  return (
    <>
      <section id="impacts" className={`pt-6 pb-12 px-6 ${t.statsBg}`}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-left">
            <div className="mb-8">
              <h2 className={`text-3xl font-bold ${t.heading} mb-2 tracking-tight uppercase`}>Impacts</h2>
              <p className={`${t.muted} text-sm italic`}>Quantifiable value delivery across product and design.</p>
            </div>
            <div className="flex justify-start relative max-w-full w-full">
              <div className={`flex items-center p-1 ${t.innerBg} border ${t.itemBorder} rounded-xl w-full md:w-auto overflow-hidden shadow-sm`}>
                {canScrollLeft && (
                  <button onClick={() => filterScrollRef.current.scrollBy({ left: -200, behavior: 'smooth' })} className={`flex items-center justify-center rounded-lg transition-all active:scale-95 px-2 py-2 mr-1 ${t.tabInactive} shrink-0`} aria-label="Scroll left">
                    <ChevronLeft size={16} />
                  </button>
                )}
                
                <div ref={filterScrollRef} onScroll={checkScroll} className="flex flex-nowrap gap-2 overflow-x-auto scrollbar-hide w-full max-w-full scroll-smooth">
                  {["All", "Leadership", "Product", "UX/Design", "MarTech", "AI/Automation", "MarComm", "Process", "Operations"].map(f => (
                    <button key={f} onClick={() => { setActiveFilter(f); setTimeout(checkScroll, 50); }} className={`px-4 py-2 rounded-lg text-xs font-bold tracking-tight transition-all active:scale-95 whitespace-nowrap ${activeFilter === f ? t.tabActive : t.tabInactive}`}>{f}</button>
                  ))}
                </div>

                {canScrollRight && (
                  <button onClick={() => filterScrollRef.current.scrollBy({ left: 200, behavior: 'smooth' })} className={`flex items-center justify-center rounded-lg transition-all active:scale-95 px-2 py-2 ml-1 ${t.tabInactive} shrink-0`} aria-label="Scroll right">
                    <ChevronRight size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="grid gap-8">
            {filteredStudies.map((study) => (
              <div key={study.id} className={`relative ${t.cardBg} border ${t.cardBorder} ${t.cardHover} rounded-[2.5rem] overflow-hidden p-8 text-left transition-all`}>
                <div className="flex flex-col mb-8 gap-8">
                  <div className="w-full">
                    <div className="flex justify-between items-start gap-[15px] mb-6">
                      <h3 className={`text-2xl md:text-4xl font-bold ${t.heading} tracking-tight leading-tight`}>{study.headline}</h3>
                      <button 
                        onClick={() => setSelectedCaseStudy(study)} 
                        className={`w-10 h-10 flex items-center justify-center ${t.accentBg} text-white rounded-full transition-all shadow-lg active:scale-95 shrink-0 ${t.accentHover} mt-1`}
                        aria-label={`View ${study.headline} case study`}
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>
                    <p className={`${t.subheading} text-base font-medium border-l-2 ${t.accentBorder} pl-6 italic`}>{study.whyImportant}</p>
                  </div>
                  <div className="w-full">
                    <div className={`p-4 md:p-6 ${t.itemBg} border ${t.itemBorder} rounded-2xl flex flex-wrap justify-around items-center gap-4 w-full`}>
                        {study.results.map((r, i) => (
                          <div key={i} className="text-center">
                            <div className="text-[10px] md:text-[11px] uppercase font-bold text-zinc-600 mb-1 tracking-widest">{r.metric}</div>
                            <div className={`text-xl md:text-3xl font-black ${t.accentText} tabular-nums`}>{r.outcome}</div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <section>
                    <div className={`text-[9px] font-black ${t.text} uppercase tracking-widest mb-2 flex items-center gap-2`}><Target size={12} className={t.accentText} /> The problem</div>
                    <p className={`${t.subheading} text-base leading-relaxed`}>{study.problemStatement}</p>
                  </section>
                  <section>
                    <div className={`text-[9px] font-black ${t.text} uppercase tracking-widest mb-2 flex items-center gap-2`}><Workflow size={12} className={t.accentText} /> The solution</div>
                    <p className={`${t.subheading} text-base leading-relaxed`}>{study.how}</p>
                  </section>
                </div>
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-zinc-800/30">
                  {study.tags && study.tags.map((tag, i) => (
                    <div key={i} className={`px-3 py-1 ${t.cardBg} border ${t.cardBorder} rounded-full text-[10px] font-bold ${t.heading} uppercase tracking-widest text-center`}>{tag}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CaseStudyModal 
        t={t} 
        selectedCaseStudy={selectedCaseStudy} 
        setSelectedCaseStudy={setSelectedCaseStudy} 
      />
    </>
  );
};

export default Impacts;
