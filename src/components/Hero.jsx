import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = ({ t, heroData, SHOW_CASE_STUDIES, setIsHeroWhyMeOpen }) => {
  return (
    <section className="relative pt-32 pb-8 px-6 text-left">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${t.innerBg} border ${t.itemBorder} text-[10px] font-bold uppercase tracking-[0.2em] ${t.accentText} mb-6`}>
            <Sparkles size={12} /> Strategic Leadership & MarTech Ops
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold ${t.heading} mb-6 tracking-tighter leading-none`}>{heroData.h1}</h1>
          <h2 className={`text-xl md:text-3xl font-medium ${t.subheading} mb-8 leading-tight`}>{heroData.h2}</h2>
          <p className={`text-base ${t.muted} mb-8 max-w-2xl leading-relaxed`}>{heroData.body}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {heroData.roleTags.map((tag, i) => (
              <div key={i} className={`px-3 py-1 ${t.cardBg} border ${t.cardBorder} rounded-full text-[10px] font-bold ${t.heading} uppercase tracking-widest text-center`}>{tag}</div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mb-8">
            {SHOW_CASE_STUDIES && (
              <a href="#impacts" className={`inline-flex items-center h-12 px-6 ${t.accentBg} text-white rounded-xl font-bold gap-2 ${t.accentHover} transition-all shadow-lg active:scale-95 text-sm`}>
                Explore Impact <ArrowRight size={18} />
              </a>
            )}
            <button 
              onClick={() => setIsHeroWhyMeOpen(true)}
              className={`inline-flex items-center h-12 px-6 ${t.innerBg} border ${t.itemBorder} ${t.heading} rounded-xl font-bold gap-2 hover:${t.accentText} ${t.accentBorderHover} transition-all shadow-lg active:scale-95 text-sm`}
            >
              About Me <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div className="flex-1 w-full max-sm relative group scale-90 md:scale-100">
          <div className={`absolute -inset-2 bg-gradient-to-tr ${t.logoGradient} rounded-[3.5rem] blur opacity-20 group-hover:opacity-40 transition duration-700`}></div>
          <div className={`relative aspect-[4/5] w-full ${t.innerBg} border ${t.modalBorder} rounded-[3.5rem] overflow-hidden shadow-2xl`}>
            <img src={heroData.imageUrl} alt="Professional portrait of Nick LeBlanc" className={`w-full h-full object-cover transition-all duration-700 ${t.imgFilter} group-hover:grayscale-0`} onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"; }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
