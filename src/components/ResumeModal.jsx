import { X, Target, Briefcase, Cpu, BookOpen, ShieldCheck, Award, Globe } from 'lucide-react';

const ResumeModal = ({ t, isResumeOpen, setIsResumeOpen, resumeData }) => {
  if (!isResumeOpen) return null;

  return (
    <div className={`fixed inset-0 z-[110] ${t.modalBg} backdrop-blur-xl flex items-center justify-center p-4`}>
      <div className={`${t.modalCardBg} w-full max-w-4xl h-[90vh] rounded-[2.5rem] border ${t.modalBorder} shadow-2xl flex flex-col overflow-hidden`}>
        <div className={`p-8 border-b ${t.cardBorder} flex justify-between items-center shrink-0 text-left`}>
            <div><h2 className={`text-2xl font-bold ${t.heading} tracking-tight`}>Full Resume</h2><p className={`${t.accentText} font-bold text-[9px] uppercase tracking-widest mt-1 text-left`}>Nick LeBlanc • Strategic Leadership & MarTech Ops</p></div>
            <button 
              onClick={() => setIsResumeOpen(false)} 
              className={`p-3 ${t.innerBg} border ${t.cardBorder} hover:${t.accentText} ${t.accentBorderHover} rounded-xl transition-all active:scale-95`}
              aria-label="Close resume"
            >
              <X size={18} />
            </button>
        </div>
        <div className="flex-grow overflow-y-auto p-8 space-y-12 scrollbar-hide text-left">
            <section>
                <div className={`text-[9px] font-black uppercase tracking-widest ${t.mutedExtra} mb-6 flex items-center gap-2`}><Target size={14} className={t.accentText} /> Executive Summary</div>
                <p className={`text-lg ${t.subheading} leading-relaxed font-medium border-l-2 ${t.accentBorder} pl-6`}>&quot;{resumeData.summary}&quot;</p>
            </section>
            <section>
                <div className={`text-[9px] font-black uppercase tracking-widest ${t.mutedExtra} mb-8 flex items-center gap-2`}><Briefcase size={14} className={t.accentText} /> Experience</div>
                <div className="space-y-10">
                    {resumeData.experience.map((exp, i) => (
                        <div key={i} className={`group border-l ${t.itemBorder} pl-6 relative`}>
                            <div className={`absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full ${t.itemBorder} border-2 ${t.modalCardBg} group-hover:${t.accentBg} transition-colors`} />
                            <h4 className={`${t.heading} font-bold text-base leading-tight mb-1`}>{exp.role}</h4>
                            <div className={`${t.accentText} font-bold text-[10px] uppercase mb-4 tracking-widest`}>{exp.company}</div>
                            <ul className="space-y-4">
                                {exp.highlights.map((h, j) => (
                                    <li key={j} className={`${t.text} text-[13px] leading-relaxed flex items-start gap-3`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${t.accentBg} mt-1.5 shrink-0`} /> 
                                        <div>
                                          <strong className={`${t.heading} block mb-1 uppercase tracking-tight text-[11px]`}>{h.label}:</strong>
                                          <span className={t.subheading}>{h.text}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <div className={`text-[9px] font-black uppercase tracking-widest ${t.mutedExtra} mb-8 flex items-center gap-2`}><Cpu size={14} className={t.accentText} /> Multi-Disciplinary Skills</div>
                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(resumeData.skills).map(([key, items]) => (
                        <div key={key} className={`border-l ${t.itemBorder} pl-6`}>
                            <h5 className={`${t.heading} font-bold text-[9px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2`}><span className={`w-1.5 h-1.5 ${t.accentBg} rounded-full`} />{key.toUpperCase()}</h5>
                            <div className="flex flex-wrap gap-2">
                              {items.map((s, idx) => (<span key={idx} className={`px-3 py-1 ${t.cardBg} border ${t.cardBorder} ${t.text} text-[11px] font-bold rounded-full uppercase tracking-widest`}>{s}</span>))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <div className={`text-[9px] font-black uppercase tracking-widest ${t.mutedExtra} mb-8 flex items-center gap-2`}><BookOpen size={14} className={t.accentText} /> Education & Credentials</div>
                <div className={`space-y-6 border-l ${t.itemBorder} pl-6`}>
                    {resumeData.education.map((edu, idx) => (
                        <div key={idx}>
                            <div className={`${t.heading} font-bold tracking-tight text-sm`}>{edu.institution}</div>
                            <div className={`${t.muted} text-xs`}>{edu.degree}</div>
                        </div>
                    ))}
                </div>
            </section>
            {resumeData.certifications && (
              <section>
                  <div className={`text-[9px] font-black uppercase tracking-widest ${t.mutedExtra} mb-8 flex items-center gap-2`}><ShieldCheck size={14} className={t.accentText} /> Certifications</div>
                  <div className={`space-y-6 border-l ${t.itemBorder} pl-6`}>
                      {resumeData.certifications.map((cert, idx) => (
                          <div key={idx}>
                              <div className={`${t.heading} font-bold tracking-tight text-sm`}>{cert.name}</div>
                              <div className={`${t.muted} text-xs`}>{cert.issuer}</div>
                          </div>
                      ))}
                  </div>
              </section>
            )}
            {resumeData.awards && (
              <section>
                  <div className={`text-[9px] font-black uppercase tracking-widest ${t.mutedExtra} mb-8 flex items-center gap-2`}><Award size={14} className={t.accentText} /> Key Honors</div>
                  <div className="grid md:grid-cols-2 gap-4">
                      {resumeData.awards.map((award, idx) => (
                          <div key={idx} className={`p-6 ${t.cardBg} rounded-2xl border ${t.cardBorder} ${t.cardHover} group transition-all text-left`}>
                              <div className={`${t.heading} font-bold text-sm tracking-tight mb-2`}>{award.name}</div>
                              <div className={`${t.mutedExtra} text-[11px] font-medium`}>{award.issuer}</div>
                          </div>
                      ))}
                  </div>
              </section>
            )}
            {resumeData.languages && (
              <section>
                  <div className={`text-[9px] font-black uppercase tracking-widest ${t.mutedExtra} mb-8 flex items-center gap-2`}><Globe size={14} className={t.accentText} /> Languages</div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {resumeData.languages.map((lang, idx) => (
                          <div key={idx} className={`p-6 ${t.cardBg} rounded-2xl border ${t.cardBorder} ${t.cardHover} group transition-all text-left`}>
                              <div className={`${t.heading} font-bold text-sm tracking-tight mb-1`}>{lang.name}</div>
                              <div className={`${t.mutedExtra} text-[11px] font-medium`}>{lang.level}</div>
                          </div>
                      ))}
                  </div>
              </section>
            )}
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
