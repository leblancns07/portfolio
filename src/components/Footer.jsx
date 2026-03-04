import { Mail, Linkedin } from 'lucide-react';

const Footer = ({ t }) => {
  return (
    <footer id="contact" className={`pt-20 pb-8 px-6 border-t ${t.cardBorder} ${t.bg}`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-12 mb-12">
          <div className="text-left">
            <h2 className={`text-4xl md:text-6xl font-bold ${t.heading} mb-6 tracking-tighter uppercase`}>Connect</h2>
            <div className="flex gap-4">
              <a href="mailto:leblancn876@gmail.com" className={`h-12 px-6 ${t.accentBg} text-white rounded-xl font-bold flex items-center gap-2 ${t.accentHover} transition-all shadow-lg active:scale-95`}><Mail size={16} /> Get in touch</a>
              <a href="https://linkedin.com/in/leblancns07" target="_blank" rel="noreferrer" className={`h-12 w-12 border ${t.itemBorder} rounded-xl flex items-center justify-center ${t.innerBg} transition-all ${t.heading} ${t.accentTextHover} ${t.accentBorderHover}`}><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
        <div className={`pt-8 border-t ${t.cardBorder} text-[9px] font-bold uppercase tracking-widest ${t.mutedExtra} text-center md:text-left`}>© 2026 Nick LeBlanc — Senior Enterprise Leader</div>
      </div>
    </footer>
  );
};

export default Footer;
