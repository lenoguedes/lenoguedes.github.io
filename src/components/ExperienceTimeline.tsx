import React from 'react';
import { Experience, ThemeColor, Language } from '../types';
import { themes } from '../utils/theme';
import { translations } from '../utils/translations';
import {
  Briefcase,
  Building,
  Calendar,
  MapPin,
  CheckCircle2,
  Cpu
} from 'lucide-react';

interface ExperienceTimelineProps {
  experiences: Experience[];
  themeColor: ThemeColor;
  language?: Language;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
  themeColor,
  language = 'pt',
}) => {
  const currentTheme = themes[themeColor] || themes.indigo;
  const t = translations[language].experience;
  const isEn = language === 'en';

  return (
    <section id="experiencia" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{isEn ? 'Corporate Career' : 'Trajetória Corporativa'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id || index}
              id={`experience-item-${index}`}
              className="relative pl-6 sm:pl-8 text-left group"
            >
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 bg-white dark:bg-slate-900 transition-transform group-hover:scale-125 ${
                  exp.isCurrent
                    ? `${currentTheme.borderAccent} ${currentTheme.primaryBg}`
                    : 'border-slate-400 dark:border-slate-600'
                }`}
              />

              {/* Mobile / Left Period Badge */}
              <div className="sm:absolute sm:-left-32 sm:top-1 text-xs font-bold text-slate-500 dark:text-slate-400 sm:text-right sm:w-24 mb-1 sm:mb-0">
                {exp.period}
              </div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow space-y-4">
                
                {/* Header: Role & Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <div className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                        <Building className="w-3.5 h-3.5 text-indigo-500" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {exp.isCurrent && (
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/60">
                      {t.current}
                    </span>
                  )}
                </div>

                {/* Description */}
                {exp.description && (
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {exp.description}
                  </p>
                )}

                {/* Highlights / Achievements */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {isEn ? 'Key Achievements & Impacts:' : 'Principais Realizações:'}
                    </h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-slate-400 mr-1" />
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
