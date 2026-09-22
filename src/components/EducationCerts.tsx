import React from 'react';
import { Education, Certification, ThemeColor, Language } from '../types';
import { themes } from '../utils/theme';
import { translations } from '../utils/translations';
import {
  GraduationCap,
  Award,
  ExternalLink,
  Calendar,
  Building,
  CheckCircle,
  ShieldCheck,
  Tag,
  Sparkles,
  School
} from 'lucide-react';

interface EducationCertsProps {
  education: Education[];
  certifications: Certification[];
  themeColor: ThemeColor;
  language?: Language;
}

export const EducationCerts: React.FC<EducationCertsProps> = ({
  education,
  certifications,
  themeColor,
  language = 'pt',
}) => {
  const t = translations[language].education;
  const isEn = language === 'en';
  const currentTheme = themes[themeColor] || themes.indigo;

  return (
    <section id="formacao" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{isEn ? 'Education & Specializations' : 'Educação & Especializações'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className={`w-5 h-5 ${currentTheme.primaryText}`} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t.educationSubtitle}
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => {
                const eduKey = edu.id || String(idx);

                return (
                  <div
                    key={eduKey}
                    id={`edu-item-${idx}`}
                    className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg leading-snug">
                          {edu.degree}
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
                          <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                            <School className="w-3.5 h-3.5" />
                            {edu.institution}
                          </span>
                          {edu.location && <span>• {edu.location}</span>}
                        </div>
                      </div>

                      <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                        {edu.period}
                      </span>
                    </div>

                    {edu.status && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span>{isEn && edu.status === 'Concluído' ? 'Completed' : edu.status}</span>
                      </div>
                    )}

                    {edu.description && (
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {edu.description}
                      </p>
                    )}

                    {edu.highlights && edu.highlights.length > 0 && (
                      <div className="space-y-1.5 pt-1">
                        {edu.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-2 mb-2">
              <Award className={`w-5 h-5 text-amber-500`} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t.certificationsSubtitle}
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={cert.id || idx}
                  id={`cert-item-${idx}`}
                  className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-base leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {cert.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                            <span className="font-semibold text-slate-700 dark:text-slate-300">
                              {cert.issuer}
                            </span>
                            <span>•</span>
                            <span className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400">
                              <Calendar className="w-3 h-3 text-slate-400" />
                              {cert.issueDate || cert.year}
                            </span>
                            {cert.credentialId && (
                              <>
                                <span>•</span>
                                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded-md">
                                  ID: {cert.credentialId}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0 cursor-pointer"
                        title={isEn ? "Verify Official Credential" : "Verificar Credencial Oficial"}
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
                        <span className="hidden sm:inline">{t.credentialButton}</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    )}
                  </div>

                  {cert.skills && cert.skills.length > 0 && (
                    <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 pl-6.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
                        <Tag className="w-3 h-3" />
                        <span>{t.skillsAssociated}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
