import React from 'react';
import { Layers, Briefcase, BookOpen, ShieldCheck, Award, Globe } from 'lucide-react';

const renderIcon = (icon, size = 20) => {
  if (!icon) return null;
  return React.cloneElement(icon, { size });
};

const Foundations = ({ t, skillGroups, resumeData }) => {
  return (
    <section id="foundations" className={`py-12 px-6 ${t.sectionBg} border-t ${t.cardBorder}`}>
      <div className="max-w-5xl mx-auto text-left">
        <div className="mb-12">
          <h2 className={`text-3xl font-bold ${t.heading} mb-2 tracking-tight uppercase`}>Foundations</h2>
          <p className={`${t.muted} text-sm italic`}>Technical ecosystems, multidisciplinary leadership, and academic background.</p>
        </div>

        <div className={`flex items-center gap-3 ${t.accentText} mb-6 font-black uppercase tracking-widest text-[10px]`}><Layers size={14} /> Skills & Tools</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16">
          {/* Professional Tenure Featured Card */}
          <div className={`md:col-span-2 p-8 ${t.cardBg} border ${t.cardBorder} rounded-[2rem] transition-all`}>
              <div className="flex items-center gap-4 mb-6 w-full">
                <div className={`w-10 h-10 md:w-12 md:h-12 ${t.bg} border ${t.itemBorder} rounded-xl flex items-center justify-center ${t.accentText} shadow-inner shrink-0 group/icon`}>
                  <Briefcase size={20} className="md:w-[24px] md:h-[24px]" />
                </div>
                <h3 className={`text-xl md:text-2xl font-bold ${t.heading} tracking-tight leading-tight flex-1`}>{skillGroups[0].group}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroups[0].items.map((item, iIdx) => (
                  <div key={iIdx} className={`px-3 py-1 ${t.cardBg} border ${t.cardBorder} rounded-full text-[10px] font-bold ${t.heading} uppercase tracking-widest text-center`}>{item.name}</div>
                ))}
              </div>
          </div>
          {/* Grid Skills Cards */}
          {skillGroups.slice(1).map((group, gIdx) => (
            <div key={gIdx} className={`p-8 ${t.cardBg} border ${t.cardBorder} rounded-[2rem] transition-all`}>
                <div className="flex items-center gap-4 mb-6 w-full">
                  <div className={`w-10 h-10 md:w-12 md:h-12 ${t.bg} border ${t.itemBorder} rounded-xl flex items-center justify-center ${t.accentText} shadow-inner shrink-0 group/icon`}>
                    {renderIcon(group.icon, 20)}
                  </div>
                  <h3 className={`text-xl md:text-2xl font-bold ${t.heading} tracking-tight leading-tight flex-1`}>{group.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} className={`px-3 py-1 ${t.cardBg} border ${t.cardBorder} rounded-full text-[10px] font-bold ${t.heading} uppercase tracking-widest text-center`}>{item.name}</div>
                  ))}
                </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <section>
              <div className={`flex items-center gap-3 ${t.accentText} mb-6 font-black uppercase tracking-widest text-[10px]`}><BookOpen size={14} /> Education & Credentials</div>
              <div className={`space-y-6 border-l ${t.itemBorder} pl-6`}>
                {resumeData.education.map((edu, idx) => (
                  <div key={idx}><div className={`${t.heading} font-bold tracking-tight text-sm`}>{edu.institution}</div><div className={`${t.muted} text-xs`}>{edu.degree}</div></div>
                ))}
              </div>
            </section>

            {resumeData.certifications && (
              <section>
                <div className={`flex items-center gap-3 ${t.accentText} mb-6 font-black uppercase tracking-widest text-[10px]`}><ShieldCheck size={14} /> Certifications</div>
                <div className={`space-y-6 border-l ${t.itemBorder} pl-6`}>
                  {resumeData.certifications.map((cert, idx) => (
                    <div key={idx}><div className={`${t.heading} font-bold tracking-tight text-sm`}>{cert.name}</div><div className={`${t.muted} text-xs`}>{cert.issuer}</div></div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="space-y-12">
            <section>
              <div className={`flex items-center gap-3 ${t.accentText} mb-8 font-black uppercase tracking-widest text-[10px]`}><Award size={16} /> Key Honors</div>
              <div className="grid gap-4">
                {resumeData.awards.map((award, idx) => (
                    <div key={idx} className={`p-6 ${t.cardBg} rounded-2xl border ${t.cardBorder} ${t.cardHover} transition-all group`}>
                        <div className={`${t.heading} font-bold text-sm tracking-tight mb-2`}>{award.name}</div>
                        <div className={`${t.mutedExtra} text-[10px] font-medium`}>{award.issuer}</div>
                    </div>
                ))}
              </div>
            </section>

            <section>
              <div className={`flex items-center gap-3 ${t.accentText} mb-8 font-black uppercase tracking-widest text-[10px]`}><Globe size={16} /> Languages</div>
              <div className="grid grid-cols-2 gap-4">
                {resumeData.languages.map((lang, idx) => (
                  <div key={idx} className={`p-4 ${t.cardBg} rounded-2xl border ${t.cardBorder} ${t.cardHover} transition-all text-left group`}>
                    <div className={`${t.heading} font-bold text-xs tracking-tight mb-1`}>{lang.name}</div>
                    <div className={`${t.mutedExtra} text-[10px] font-medium`}>{lang.level}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foundations;
