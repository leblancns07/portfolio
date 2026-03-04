import { Moon, Sun, Menu, X } from 'lucide-react';

const Navigation = ({ 
  scrolled, 
  t, 
  heroData, 
  SHOW_CASE_STUDIES, 
  setIsResumeOpen, 
  isDarkMode, 
  setIsDarkMode, 
  isMenuOpen, 
  setIsMenuOpen 
}) => {
  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 text-left">
          <div className={`${t.navBg} backdrop-blur-xl border ${t.cardBorder} rounded-full px-6 py-3 flex justify-between items-center shadow-2xl`}>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`w-10 h-10 ${t.accentBg} rounded-full flex items-center justify-center text-white font-black text-xs shadow-lg ${t.accentHover} transition-all active:scale-90`}
                aria-label="Go to top of page"
              >
                NL
              </button>
              <span className={`font-bold ${t.heading} tracking-tight text-sm uppercase`}>{heroData.h1}</span>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-xs font-black uppercase tracking-widest text-left">
              <a href="#journey" className={`transition-colors ${t.navHover}`}>Journey</a>
              {SHOW_CASE_STUDIES && <a href="#impacts" className={`transition-colors ${t.navHover}`}>Impacts</a>}
              <a href="#foundations" className={`transition-colors ${t.navHover}`}>Foundations</a>
              <button onClick={() => setIsResumeOpen(true)} className={`${t.accentBg} text-white px-4 py-2 rounded-full ${t.accentHover} transition-all flex items-center gap-2 font-black shadow-lg`}>Resume</button>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 ${t.innerBg} border ${t.cardBorder} rounded-full transition-all ${t.muted} hover:${t.accentText} ${t.accentBorderHover} shadow-xl active:scale-90`}
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
            <button 
              className={`md:hidden ${t.heading}`} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-[49] md:hidden ${t.modalBg} backdrop-blur-3xl p-6 pt-32 animate-in fade-in zoom-in duration-300`}>
          <div className="flex flex-col space-y-8 items-center text-center">
            {['journey', ...(SHOW_CASE_STUDIES ? ['impacts'] : []), 'foundations'].map((id) => (
              <a 
                key={id} 
                href={`#${id}`} 
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-black uppercase tracking-widest ${t.heading} ${t.navHover} transition-all`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <button 
              onClick={() => { setIsResumeOpen(true); setIsMenuOpen(false); }} 
              className={`w-full max-w-xs ${t.accentBg} text-white px-6 py-4 rounded-2xl font-black text-lg shadow-xl ${t.accentHover} transition-all active:scale-95`}
            >
              RESUME
            </button>
            <div className={`w-full max-w-xs flex justify-between items-center p-4 ${t.innerBg} border ${t.cardBorder} rounded-2xl`}>
              <span className={`font-bold ${t.muted} uppercase tracking-widest text-xs`}>Theme Mode</span>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-3 ${t.bg} border ${t.cardBorder} rounded-xl ${t.accentText} shadow-inner active:scale-95 transition-all`}
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
