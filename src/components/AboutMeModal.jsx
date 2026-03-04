import { X } from 'lucide-react';

const AboutMeModal = ({ t, isHeroWhyMeOpen, setIsHeroWhyMeOpen, heroData, isDarkMode }) => {
  if (!isHeroWhyMeOpen) return null;

  return (
    <div className={`fixed inset-0 z-[110] ${t.modalBgAlt} backdrop-blur-xl flex items-center justify-center p-4`}>
      <div className={`${t.modalCardBg} w-full max-w-2xl max-h-[90vh] rounded-[2.5rem] overflow-hidden flex flex-col border ${t.modalBorder} shadow-2xl transition-all`}>
        <div className="p-8 overflow-y-auto scrollbar-hide flex flex-col items-center relative">
          <button 
            onClick={() => setIsHeroWhyMeOpen(false)} 
            className={`absolute right-0 top-0 p-3 m-8 ${t.innerBg} border ${t.cardBorder} hover:${t.accentText} ${t.accentBorderHover} rounded-xl transition-all active:scale-95 shrink-0 z-10`}
            aria-label="Close why me"
          >
            <X size={20} />
          </button>

          <div className="mt-12 mb-8 flex flex-col items-center w-full">
            <h2 className={`text-4xl md:text-5xl font-bold ${t.heading} mb-8 tracking-tighter text-center`}>About Me</h2>
            <div className="max-w-xl w-full">
              <p className={`${t.subheading} text-lg md:text-xl leading-relaxed italic text-center border-t-2 ${t.accentBorder} pt-8 mb-12 whitespace-pre-line`}>
                {heroData.whyMeText}
              </p>
              
              <div className={`w-full max-w-[500px] mx-auto aspect-square rounded-[2rem] overflow-hidden border ${t.cardBorder} relative bg-black/5 p-8`}>
                <img 
                  src={isDarkMode ? "/wheel_picture_d.png" : "/wheel_picture_l.png"} 
                  alt="Strategic Systems Visualization" 
                  className="w-full h-full object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeModal;
