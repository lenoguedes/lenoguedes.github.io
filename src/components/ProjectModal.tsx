import React from 'react';
import { Project, ThemeColor, Language } from '../types';
import { themes } from '../utils/theme';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle,
  Cpu,
  Target,
  Lightbulb,
  BarChart3,
  Calendar,
  UserCheck
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  themeColor: ThemeColor;
  onClose: () => void;
  language?: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  themeColor,
  onClose,
  language = 'pt',
}) => {
  if (!project) return null;

  const isEn = language === 'en';
  const currentTheme = themes[themeColor] || themes.indigo;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        id="project-modal-container"
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 max-h-[90vh] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Hero Image */}
        <div className="relative h-64 sm:h-80 w-full bg-slate-950 overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-85"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Close button */}
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-md border border-white/20">
                {project.category}
              </span>
              {project.year && (
                <span className="inline-flex items-center gap-1 text-xs text-slate-300 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{project.year}</span>
                </span>
              )}
              {project.role && (
                <span className="inline-flex items-center gap-1 text-xs text-slate-300 font-medium">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>{project.role}</span>
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-normal">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          
          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                id="modal-project-live-link"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white ${currentTheme.primaryBg} ${currentTheme.primaryHover} shadow-md transition-all`}
              >
                <span>{isEn ? 'Access Demo / Application' : 'Acessar Demo / Aplicação'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                id="modal-project-github-link"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{isEn ? 'GitHub Repository' : 'Repositório GitHub'}</span>
              </a>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
              {isEn ? 'Project Overview' : 'Visão Geral do Projeto'}
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.problemSolved && (
              <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
                  <Target className="w-4 h-4" />
                  <span>{isEn ? 'The Challenge / Problem' : 'O Desafio / Problema'}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {project.problemSolved}
                </p>
              </div>
            )}

            {project.solutionDetails && (
              <div className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/40 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                  <Lightbulb className="w-4 h-4" />
                  <span>{isEn ? 'The Implemented Solution' : 'A Solução Implementada'}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {project.solutionDetails}
                </p>
              </div>
            )}
          </div>

          {/* Metric / Results */}
          {project.metrics && (
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-4">
              <div
                className={`p-2.5 rounded-xl ${currentTheme.badgeBg} ${currentTheme.primaryText} shrink-0`}
              >
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {isEn ? 'Impact & Achieved Metrics' : 'Impacto & Métricas Alcançadas'}
                </h4>
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                  {project.metrics}
                </p>
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {isEn ? 'Key Features & Capabilities' : 'Recursos Principais & Funcionalidades'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.keyFeatures.map((feature, idx) => {
                  const colonIndex = feature.indexOf(':');
                  const hasTitle = colonIndex > 0 && colonIndex < 45;
                  const featureTitle = hasTitle ? feature.substring(0, colonIndex).trim() : null;
                  const featureDesc = hasTitle ? feature.substring(colonIndex + 1).trim() : feature;

                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        {featureTitle && (
                          <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                            {featureTitle}
                          </span>
                        )}
                        <span>{featureDesc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>{isEn ? 'Technologies Used' : 'Tecnologias Utilizadas'}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            id="modal-footer-close-btn"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {isEn ? 'Close Window' : 'Fechar Janela'}
          </button>
        </div>
      </div>
    </div>
  );
};
