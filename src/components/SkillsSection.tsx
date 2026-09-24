import React, { useState } from 'react';
import { SkillCategory, ThemeColor, Language } from '../types';
import { themes } from '../utils/theme';
import { translations } from '../utils/translations';
import {
  Sparkles,
  Layout,
  Server,
  Database,
  Cloud,
  Cpu,
  Star,
  CheckCircle,
  Award
} from 'lucide-react';

interface SkillsSectionProps {
  skills: SkillCategory[];
  themeColor: ThemeColor;
  language?: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, themeColor, language = 'pt' }) => {
  const t = translations[language].skills;
  const isEn = language === 'en';
  const allLabel = t.filterAll;
  const [selectedCat, setSelectedCat] = useState<string>(allLabel);
  const currentTheme = themes[themeColor] || themes.indigo;

  const getCategoryIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('banco') || lower.includes('sql') || lower.includes('etl') || lower.includes('database')) return Database;
    if (lower.includes('python') || lower.includes('automa') || lower.includes('program') || lower.includes('code')) return Cpu;
    if (lower.includes('business') || lower.includes('power bi') || lower.includes('estratégia') || lower.includes('front') || lower.includes('interface') || lower.includes('visual')) return Layout;
    if (lower.includes('risco') || lower.includes('governan') || lower.includes('cloud') || lower.includes('devops') || lower.includes('fraud')) return Cloud;
    return Server;
  };

  const allCategories = [allLabel, ...skills.map((s) => s.category)];

  const displayedSkills =
    selectedCat === allLabel
      ? skills
      : skills.filter((s) => s.category === selectedCat);

  return (
    <section id="habilidades" className="pt-2 sm:pt-4 pb-8 lg:pb-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{isEn ? 'Technical Mastery' : 'Domínio Técnico'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Category Selector Filter */}
        <div className="flex justify-center items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {allCategories.map((cat) => {
            const isSelected = selectedCat === cat;
            return (
              <button
                key={cat}
                id={`skill-cat-${cat}`}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? `${currentTheme.primaryBg} text-white shadow-sm`
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedSkills.map((categoryGroup, idx) => {
            const IconComponent = getCategoryIcon(categoryGroup.category);

            return (
              <div
                key={idx}
                id={`skill-category-${idx}`}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6 text-left"
              >
                {/* Header with Icon */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-2xl ${currentTheme.badgeBg} ${currentTheme.primaryText} flex items-center justify-center font-bold`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">
                      {categoryGroup.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {categoryGroup.items.length} {isEn ? 'skills mastered' : 'competências dominadas'}
                    </p>
                  </div>
                </div>

                {/* Skill Items List */}
                <div className="space-y-4">
                  {categoryGroup.items.map((skill, sIdx) => {
                    // Maximum bar size is 5 years (each year represents 20% width)
                    const percentWidth = skill.years 
                      ? Math.min(Math.round((skill.years / 5) * 100), 100) 
                      : (skill.level || 80);

                    return (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                            {skill.name}
                            {skill.isKey && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60">
                                {isEn ? 'Key Skill' : 'Destaque'}
                              </span>
                            )}
                          </span>
                          <span className="text-slate-500 font-mono text-[11px]">
                            {skill.years ? (isEn ? `${skill.years}y exp` : `${skill.years}a exp`) : `${percentWidth}%`}
                          </span>
                        </div>

                        {/* Level Progress Bar (Max 5 anos) */}
                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${currentTheme.primaryBg} transition-all duration-700`}
                            style={{ width: `${percentWidth}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {isEn ? 'Continuous Learning & Modern Engineering' : 'Aprendizado Contínuo & Engenharia Moderna'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isEn ? 'Continuous evolution across modern technologies and market standards.' : 'Constante atualização com as versões mais recentes das tecnologias e padrões de mercado.'}
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0">
            {isEn ? 'Ready for Diverse Tech Stacks' : 'Pronto para Tech Stacks Diversas'}
          </span>
        </div>

      </div>
    </section>
  );
};
