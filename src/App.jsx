import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Journey from './components/Journey';
import Impacts from './components/Impacts';
import Foundations from './components/Foundations';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import AboutMeModal from './components/AboutMeModal';

import { heroData, stats, journeyPoints, skillGroups, resumeData } from './data/portfolio.jsx';

const SHOW_CASE_STUDIES = true;

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeroWhyMeOpen, setIsHeroWhyMeOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- THEME DEFINITIONS ---
  const themes = {
    dark: {
      bg: 'bg-zinc-950',
      text: 'text-zinc-400',
      heading: 'text-zinc-100',
      subheading: 'text-zinc-300',
      muted: 'text-zinc-500',
      mutedExtra: 'text-zinc-600',
      navBg: 'bg-zinc-900/60',
      cardBg: 'bg-black/40',
      cardBorder: 'border-zinc-800',
      cardHover: '',
      innerBg: 'bg-zinc-900',
      itemBg: 'bg-zinc-950',
      itemBorder: 'border-zinc-800',
      accentText: 'text-orange-500',
      accentTextHover: 'hover:text-orange-400',
      accentBg: 'bg-orange-600',
      accentHover: 'hover:bg-orange-500',
      accentBorder: 'border-orange-600/50',
      accentBorderHover: 'hover:border-orange-500',
      accentRing: 'ring-orange-500/20',
      navHover: 'hover:text-white',
      tabActive: 'bg-orange-600 text-white shadow-lg shadow-orange-500/20',
      tabInactive: 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50',
      modalBg: 'bg-black/95',
      modalBgAlt: 'bg-black/90',
      modalCardBg: 'bg-zinc-950',
      modalBorder: 'border-white/10',
      statsBg: 'bg-zinc-900/50',
      sectionBg: 'bg-zinc-900/10',
      sectionBgAlt: 'bg-zinc-900/20',
      glowPrimary: 'bg-orange-600/10',
      glowSecondary: 'bg-orange-900/10',
      logoGradient: 'from-orange-600 to-orange-700',
      selection: 'selection:bg-orange-600/30',
      imgFilter: 'grayscale brightness-90',
      iconBg: 'bg-zinc-950'
    },
    light: {
      bg: 'bg-slate-50',
      text: 'text-slate-800',
      heading: 'text-slate-950',
      subheading: 'text-slate-900',
      muted: 'text-slate-700',
      mutedExtra: 'text-slate-600',
      navBg: 'bg-white/70',
      cardBg: 'bg-white/40',
      cardBorder: 'border-slate-200',
      cardHover: '',
      innerBg: 'bg-slate-100',
      itemBg: 'bg-white',
      itemBorder: 'border-slate-200',
      accentText: 'text-blue-600',
      accentTextHover: 'hover:text-blue-700',
      accentBg: 'bg-blue-600',
      accentHover: 'hover:bg-blue-700',
      accentBorder: 'border-blue-600/50',
      accentBorderHover: 'hover:border-blue-600',
      accentRing: 'ring-blue-500/30',
      navHover: 'hover:text-blue-600',
      tabActive: 'bg-blue-600 text-white shadow-lg shadow-blue-500/20',
      tabInactive: 'text-slate-500 hover:text-slate-700 hover:bg-slate-200',
      modalBg: 'bg-white/95',
      modalBgAlt: 'bg-white/90',
      modalCardBg: 'bg-white',
      modalBorder: 'border-slate-200',
      statsBg: 'bg-white/60',
      sectionBg: 'bg-slate-100/50',
      sectionBgAlt: 'bg-slate-200/20',
      glowPrimary: 'bg-blue-600/10',
      glowSecondary: 'bg-blue-900/05',
      logoGradient: 'from-blue-600 to-blue-700',
      selection: 'selection:bg-blue-600/30',
      imgFilter: 'grayscale brightness-105',
      iconBg: 'bg-white'
    }
  };

  const t = isDarkMode ? themes.dark : themes.light;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${t.bg} ${t.text} font-sans ${t.selection}`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] ${t.glowPrimary} blur-[120px] rounded-full`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] ${t.glowSecondary} blur-[120px] rounded-full`} />
      </div>

      <Navigation 
        scrolled={scrolled}
        t={t}
        heroData={heroData}
        SHOW_CASE_STUDIES={SHOW_CASE_STUDIES}
        setIsResumeOpen={setIsResumeOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <Hero 
        t={t}
        heroData={heroData}
        SHOW_CASE_STUDIES={SHOW_CASE_STUDIES}
        setIsHeroWhyMeOpen={setIsHeroWhyMeOpen}
      />
      
      <Stats t={t} stats={stats} />
      
      <Journey 
        t={t}
        isDarkMode={isDarkMode}
        journeyPoints={journeyPoints}
        activeJourneyStep={activeJourneyStep}
        setActiveJourneyStep={setActiveJourneyStep}
      />

      <Impacts 
        t={t}
        SHOW_CASE_STUDIES={SHOW_CASE_STUDIES}
      />
      
      <Foundations 
        t={t}
        skillGroups={skillGroups}
        resumeData={resumeData}
      />

      <Footer t={t} />

      <ResumeModal 
        t={t}
        isResumeOpen={isResumeOpen}
        setIsResumeOpen={setIsResumeOpen}
        resumeData={resumeData}
      />

      <AboutMeModal 
        t={t}
        isHeroWhyMeOpen={isHeroWhyMeOpen}
        setIsHeroWhyMeOpen={setIsHeroWhyMeOpen}
        heroData={heroData}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default App;
