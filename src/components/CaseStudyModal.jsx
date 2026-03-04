import { X, BarChart3, Award, Workflow } from 'lucide-react';

const CaseStudyModal = ({ t, selectedCaseStudy, setSelectedCaseStudy }) => {
  if (!selectedCaseStudy) return null;

  return (
    <div className={`fixed inset-0 z-[100] ${t.modalBgAlt} backdrop-blur-xl flex items-center justify-center p-4`}>
      <div className={`${t.modalCardBg} w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] overflow-hidden flex flex-col border ${t.modalBorder} shadow-2xl text-left relative`}>
        <div className="p-8 pb-24 overflow-y-auto scrollbar-hide pt-12 md:pt-14 relative">
          <div className="max-w-4xl mx-auto w-full mb-12 flex justify-between items-start gap-[15px]">
            <h2 className={`text-2xl md:text-5xl font-bold ${t.heading} tracking-tight leading-tight`}>{selectedCaseStudy.headline}</h2>
            <button 
              onClick={() => setSelectedCaseStudy(null)} 
              className={`p-3 ${t.innerBg} border ${t.cardBorder} hover:${t.accentText} ${t.accentBorderHover} rounded-xl transition-all active:scale-95 shrink-0 mt-1`}
              aria-label="Close case study"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-12 max-w-4xl mx-auto">
            <section><div className={`flex items-center gap-3 ${t.text} mb-4 font-black uppercase tracking-widest text-[10px]`}><BarChart3 size={14} className={t.accentText} /> Where it started</div><p className={`${t.subheading} text-base leading-relaxed`}>{selectedCaseStudy.problemStatement}</p></section>
            
            <section><div className={`flex items-center gap-3 ${t.text} mb-4 font-black uppercase tracking-widest text-[10px]`}><Award size={14} className={t.accentText} /> Why is this important?</div><p className={`${t.subheading} text-base leading-relaxed`}>{selectedCaseStudy.whyImportant}</p></section>
            <section><p className={`${t.subheading} text-base leading-relaxed font-bold italic`}>{selectedCaseStudy.fundamentalQuestion}</p></section>

            <section><div className={`flex items-center gap-3 ${t.text} mb-4 font-black uppercase tracking-widest text-[10px]`}><Workflow size={14} className={t.accentText} /> The solution</div><p className={`${t.subheading} text-base leading-relaxed`}>{selectedCaseStudy.how}</p></section>

            <section>
              <div className={`p-6 md:p-8 ${t.cardBg} border ${t.cardBorder} rounded-2xl`}>
                <div className="w-full flex flex-wrap justify-around items-center gap-8 md:gap-12">
                   {selectedCaseStudy.results.map((r, i) => (
                    <div key={i} className="text-center flex flex-col items-center justify-center">
                      <div className="text-[11px] uppercase font-bold text-zinc-600 mb-1 tracking-tight">{r.metric}</div>
                      <div className={`text-3xl md:text-3xl font-bold ${t.accentText} tabular-nums`}>{r.outcome}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-800/30">
              {selectedCaseStudy.tags && selectedCaseStudy.tags.map((tag, i) => (
                <div key={i} className={`px-3 py-1 ${t.cardBg} border ${t.cardBorder} rounded-full text-[10px] font-bold ${t.heading} uppercase tracking-widest text-center`}>{tag}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
