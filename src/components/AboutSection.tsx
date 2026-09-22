import React from 'react';
import { UserProfile, ThemeColor, Language } from '../types';
import { themes } from '../utils/theme';
import { translations } from '../utils/translations';
import {
  BarChart3,
  Cpu,
  ShieldCheck,
  Zap,
  Languages,
  Compass,
  CheckCircle,
  Briefcase,
  Database
} from 'lucide-react';

interface AboutSectionProps {
  profile: UserProfile;
  themeColor: ThemeColor;
  language?: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, themeColor, language = 'pt' }) => {
  const currentTheme = themes[themeColor] || themes.indigo;
  const t = translations[language].about;
  const isEn = language === 'en';

  const pillars = isEn
    ? [
        {
          icon: Briefcase,
          title: 'Operations, Risk & Strategy',
          desc: 'Systemic vision connecting operational support, fraud investigation and prevention directly to commercial planning KPIs.',
        },
        {
          icon: ShieldCheck,
          title: 'Data Integrity & Validation',
          desc: 'Thorough auditing, evidence validation, and mathematical consistency for variable compensation calculations and incentives.',
        },
        {
          icon: Zap,
          title: 'Automation & Analytical Efficiency',
          desc: 'Building ETL pipelines (SSIS), Python scripts (openpyxl, PyAutoGUI), and continuous optimization of analytical workflows.',
        },
        {
          icon: BarChart3,
          title: 'Evidence-Driven Decisions',
          desc: 'Formulating business metrics, churn vs. productivity studies, and sustaining interactive Power BI dashboards.',
        },
      ]
    : [
        {
          icon: Briefcase,
          title: 'Operação, Risco e Estratégia',
          desc: 'Visão sistêmica conectando suporte operacional, investigação e prevenção a fraudes até métricas de planejamento comercial.',
        },
        {
          icon: ShieldCheck,
          title: 'Integridade & Validação de Dados',
          desc: 'Auditoria minuciosa, validação de evidências e integridade matemática para cálculos de remuneração variável e apuração de campanhas.',
        },
        {
          icon: Zap,
          title: 'Automação & Eficiência Analítica',
          desc: 'Construção de pipelines de ETL (SSIS), scripts em Python (openpyxl, PyAutoGUI) e otimização contínua de rotinas analíticas.',
        },
        {
          icon: BarChart3,
          title: 'Decisões Orientadas por Evidências',
          desc: 'Construção de métricas de negócio, estudos de correlação (churn vs. produtividade) e sustentação de painéis e dashboards em Power BI.',
        },
      ];

  return (
    <section id="sobre" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            <Compass className="w-3.5 h-3.5" />
            <span>{isEn ? 'Professional Profile' : 'Perfil Profissional'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Story & Languages */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-500" />
                <span>{isEn ? 'Journey & Purpose' : 'Trajetória & Propósito'}</span>
              </h3>

              {profile.aboutStory && profile.aboutStory.length > 0 ? (
                profile.aboutStory.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {profile.bio}
                </p>
              )}

              {/* Languages & Locales */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-indigo-500" />
                  <span>{isEn ? 'Languages & Communication' : 'Idiomas & Comunicação'}</span>
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {profile.languages.map((lang, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      <span className="text-slate-900 dark:text-white">{lang.language}</span>
                      <span className="text-slate-500 dark:text-slate-400 ml-1.5 font-normal">({lang.level})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Topics of Interest */}
              {profile.interests && profile.interests.length > 0 && (
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    {isEn ? 'Focus Areas & Interests:' : 'Áreas de Foco & Interesses:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400"
                      >
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        <span>{interest}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Core Engineering Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-left mb-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isEn ? 'Delivery Pillars' : 'Pilares de Entrega'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isEn ? 'Non-negotiable standards present in every project built.' : 'Padrões inegociáveis presentes em cada projeto construído.'}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    id={`pillar-card-${idx}`}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors text-left space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl ${currentTheme.badgeBg} ${currentTheme.primaryText} flex items-center justify-center font-bold`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal pl-12">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
