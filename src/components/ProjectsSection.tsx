import React, { useState, useMemo } from 'react';
import { Project, ThemeColor, Language } from '../types';
import { themes } from '../utils/theme';
import { translations } from '../utils/translations';
import {
  Code2,
  ExternalLink,
  Github,
  Search,
  ArrowUpRight,
  Cpu,
  Star
} from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  themeColor: ThemeColor;
  onSelectProject: (project: Project) => void;
  onOpenImporter?: () => void;
  language?: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  themeColor,
  onSelectProject,
  language = 'pt',
}) => {
  const t = translations[language].projects;
  const isEn = language === 'en';
  const allLabel = t.filterAll;
  const [selectedCategory, setSelectedCategory] = useState<string>(allLabel);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentTheme = themes[themeColor] || themes.indigo;

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    if (allLabel) set.add(allLabel);
    (projects || []).forEach((p) => {
      if (p.category && typeof p.category === 'string' && p.category.trim()) {
        set.add(p.category.trim());
      }
    });
    return Array.from(set);
  }, [projects, allLabel]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchCategory =
        selectedCategory === allLabel || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(q));

      return matchCategory && matchQuery;
    });
  }, [projects, selectedCategory, searchQuery, allLabel]);

  return (
    <section id="projetos" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <Code2 className="w-3.5 h-3.5" />
              <span>{isEn ? 'Portfolio & Deliverables' : 'Portfólio & Entregas'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.title}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Live Applications Showcase Bar */}
        <div className="mb-10 p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-indigo-50/70 via-slate-50 to-indigo-50/70 dark:from-slate-900/90 dark:via-indigo-950/20 dark:to-slate-900/90 border border-indigo-100 dark:border-indigo-900/40 text-left">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                  {isEn ? '5 Live Applications & Instant Access' : '5 Aplicações Online & Acesso Imediato'}
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {isEn ? 'Access production applications with a single click:' : 'Acesse as aplicações em produção com apenas um clique:'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                id="live-bar-streamlit"
                href="https://i7qrvxaexuqfix4zjxrtru.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-indigo-400 transition-all cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                <span>Fibonacci (Streamlit)</span>
                <ExternalLink className="w-3 h-3 text-violet-500 ml-0.5" />
              </a>

              <a
                id="live-bar-ibge"
                href="https://ais-pre-oydhcodgwvr6ymp532m7qq-773134756843.us-east1.run.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-indigo-400 transition-all cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>IBGE Data Analysis</span>
                <ExternalLink className="w-3 h-3 text-amber-500 ml-0.5" />
              </a>

              <a
                id="live-bar-sintonia"
                href="https://ais-pre-2xljofblir66hcpvloeod4-773134756843.us-east1.run.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-indigo-400 transition-all cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span>Sintonia</span>
                <ExternalLink className="w-3 h-3 text-indigo-500 ml-0.5" />
              </a>

              <a
                id="live-bar-tarefas"
                href="https://ais-pre-gg3r3p4wwslzcbb76ucovb-773134756843.us-east1.run.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-indigo-400 transition-all cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>{isEn ? 'Weekly Tasks' : 'Tarefas Semanais'}</span>
                <ExternalLink className="w-3 h-3 text-blue-500 ml-0.5" />
              </a>

              <a
                id="live-bar-dbfin"
                href="https://ais-pre-ktc4uci4itswzynhzvjxbx-773134756843.us-east1.run.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-indigo-400 transition-all cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>DBFin v1</span>
                <ExternalLink className="w-3 h-3 text-emerald-500 ml-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Controls (Categories + Search Bar) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((category, catIdx) => {
              const isSelected = selectedCategory === category;
              const catKey = category ? `cat-${category}-${catIdx}` : `cat-${catIdx}`;
              return (
                <button
                  key={catKey}
                  id={`cat-filter-${category || catIdx}`}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? `${currentTheme.primaryBg} text-white shadow-sm`
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="search-projects-input"
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 space-y-3">
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              {t.noProjectsFound}
            </p>
            <button
              onClick={() => {
                setSelectedCategory(allLabel);
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer"
            >
              {t.clearFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, pIdx) => {
              const projectCardKey = project.id ? `card-${project.id}-${pIdx}` : `card-p-${pIdx}`;
              return (
              <div
                key={projectCardKey}
                id={`project-card-${project.id || pIdx}`}
                className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col text-left"
              >
                {/* Project Image & Category Pill */}
                <div
                  className="relative h-48 sm:h-52 w-full bg-slate-950 overflow-hidden cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-900/80 text-white backdrop-blur-md border border-white/10">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-1 rounded-lg text-[10px] font-extrabold bg-amber-500 text-slate-950 flex items-center gap-1 shadow-sm">
                        <Star className="w-3 h-3 fill-slate-950" />
                        <span>{t.featured}</span>
                      </span>
                    )}
                  </div>

                  {project.year && (
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-lg text-[10px] font-bold bg-black/60 text-slate-300 backdrop-blur-md">
                      {project.year}
                    </div>
                  )}

                  {/* View Details Overlay Trigger */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-slate-900 flex items-center gap-1 shadow-md">
                      <span>{t.viewCaseStudy}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Project Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3
                      className="font-extrabold text-slate-900 dark:text-white text-lg group-hover:text-indigo-500 transition-colors cursor-pointer"
                      onClick={() => onSelectProject(project)}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 line-clamp-1">
                      {project.tagline}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies Tags */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={`tech-${project.id || pIdx}-${tech}-${idx}`}
                          className="px-2 py-1 rounded-lg text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span
                          key={`tech-overflow-${project.id || pIdx}`}
                          className="px-2 py-1 rounded-lg text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-500"
                        >
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Actions Bar */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/80">
                      <button
                        id={`view-study-${project.id}`}
                        onClick={() => onSelectProject(project)}
                        className={`text-xs font-bold ${currentTheme.primaryText} hover:underline flex items-center gap-1 cursor-pointer`}
                      >
                        <span>{t.viewCaseStudy}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            id={`card-github-${project.id}`}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            title={isEn ? 'Code on GitHub' : 'Código no GitHub'}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            id={`card-live-${project.id}`}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 shadow-xs hover:shadow transition-all cursor-pointer"
                            title={isEn ? `Access ${project.title} online` : `Acessar ${project.title} online`}
                          >
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                            </span>
                            <span>{t.livePreview}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
          </div>
        )}

      </div>
    </section>
  );
};
