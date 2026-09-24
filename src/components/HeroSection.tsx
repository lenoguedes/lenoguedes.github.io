import React from 'react';
import { UserProfile, ThemeColor, Language } from '../types';
import { themes } from '../utils/theme';
import { translations } from '../utils/translations';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  FileDown,
  MapPin,
  CheckCircle2,
  Code,
  Layers,
  Cpu,
  ExternalLink,
  Camera,
  Database,
  BarChart3,
  ShieldCheck
} from 'lucide-react';

interface HeroSectionProps {
  profile: UserProfile;
  themeColor: ThemeColor;
  language?: Language;
  onOpenImporter?: () => void;
  onOpenAvatarUpload?: () => void;
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  themeColor,
  language = 'pt',
  onOpenImporter,
  onOpenAvatarUpload,
  onOpenResume,
}) => {
  const currentTheme = themes[themeColor] || themes.indigo;
  const t = translations[language].hero;
  const isEn = language === 'en';

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-8 lg:pt-40 lg:pb-10 overflow-hidden"
    >
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/5 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Calls to Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status / Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{profile.availabilityText || 'Disponível para novos projetos e oportunidades'}</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {isEn ? "Hello, I'm" : "Olá, eu sou"} <br className="hidden sm:inline" />
                <span
                  className={`bg-clip-text text-transparent bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo}`}
                >
                  {profile.name}
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300">
                {profile.headline}
              </p>
            </div>

            {/* Short Elevator Pitch */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-normal">
              {profile.shortPitch || profile.bio}
            </p>

            {/* Quick Location & Direct Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{profile.yearsOfExperience}+ {isEn ? 'years in tech' : 'anos no mercado tech'}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-view-projects-btn"
                onClick={() => scrollToSection('projetos')}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white ${currentTheme.primaryBg} ${currentTheme.primaryHover} shadow-lg shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer`}
              >
                <span>{t.viewProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => scrollToSection('contato')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{t.talkToMe}</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                {isEn ? 'Connect:' : 'Conectar:'}
              </span>
              {profile.socials.github && (
                <a
                  id="hero-github-link"
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {profile.socials.linkedin && (
                <a
                  id="hero-linkedin-link"
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {profile.email && (
                <a
                  id="hero-email-link"
                  href={`mailto:${profile.email}`}
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="E-mail"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Avatar & Live Tech Stack */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing Backdrop Behind Card */}
            <div className={`absolute inset-0 ${currentTheme.primaryBg} opacity-15 filter blur-2xl rounded-3xl -z-10`} />

            <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl space-y-6 relative overflow-hidden">
              
              {/* Profile Card Header */}
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <img
                    src={profile.avatar || "./images/avatar.jpg"}
                    alt={profile.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.dataset.fallbackLevel) {
                        target.dataset.fallbackLevel = "1";
                        target.src = "./images/icon.jpeg";
                      } else if (target.dataset.fallbackLevel === "1") {
                        target.dataset.fallbackLevel = "2";
                        target.src = "https://github.com/lenoguedes.png";
                      }
                    }}
                    className="w-20 h-20 rounded-2xl object-cover ring-4 ring-slate-100 dark:ring-slate-800 shadow-md group-hover:opacity-90 transition-opacity"
                  />
                  {onOpenAvatarUpload && (
                    <button
                      id="hero-change-avatar-overlay-btn"
                      type="button"
                      onClick={onOpenAvatarUpload}
                      className="absolute inset-0 rounded-2xl bg-slate-950/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity cursor-pointer"
                      title="Clique para trocar ou carregar sua foto"
                    >
                      <Camera className="w-5 h-5 mb-0.5" />
                      <span className="text-[9px] font-bold uppercase tracking-wider">Foto</span>
                    </button>
                  )}
                  <button
                    id="hero-change-avatar-badge-btn"
                    type="button"
                    onClick={onOpenAvatarUpload || onOpenImporter}
                    className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-lg ${currentTheme.primaryBg} hover:opacity-90 text-white flex items-center justify-center text-xs font-bold shadow cursor-pointer transition-transform hover:scale-110`}
                    title="Atualizar foto de perfil"
                  >
                    <Camera className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">
                    {profile.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {profile.headline.split('&')[0] || profile.headline}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                    <span>✨ {isEn ? 'Open to Work / Opportunities' : 'Open to Work / Projetos'}</span>
                  </div>
                </div>
              </div>

              {/* Core Pillars / Floating Feature Chips */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs">
                    <Database className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{isEn ? 'SQL & Databases' : 'SQL & Bancos'}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    {isEn ? 'SQL, SSIS & Modeling' : 'SQL, SSIS & Modelagem'}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs">
                    <BarChart3 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Business Intel</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Power BI, DAX & Dashboards
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs">
                    <Cpu className="w-3.5 h-3.5 text-violet-500" />
                    <span>{isEn ? 'Python & Automation' : 'Python & Automação'}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Pandas, PyAutoGUI, openpyxl
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                    <span>{isEn ? 'Risk & Strategy' : 'Risco & Estratégia'}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    {isEn ? 'Churn, RV & Prevention' : 'Churn, RV & Prevenção'}
                  </p>
                </div>
              </div>

              {/* Quick CV Download Trigger */}
              <div className="pt-1">
                <button
                  id="hero-card-cv-btn"
                  onClick={onOpenResume || (() => window.print())}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <FileDown className="w-4 h-4" />
                  <span>{isEn ? 'Download Printable Resume / PDF' : 'Baixar Versão para Impressão / PDF'}</span>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Highlight Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              id={`stat-card-${idx}`}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow text-left"
            >
              <div
                className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${currentTheme.primaryText}`}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
