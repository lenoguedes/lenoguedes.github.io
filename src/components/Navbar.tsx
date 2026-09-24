import React, { useState, useEffect } from 'react';
import { UserProfile, ThemeColor, Language } from '../types';
import { themes } from '../utils/theme';
import { translations } from '../utils/translations';
import {
  Download,
  Moon,
  Sun,
  Menu,
  X,
  Palette,
  Briefcase,
  FileText,
  User,
  Code2,
  Mail,
  GraduationCap,
  Cpu,
  Languages
} from 'lucide-react';

interface NavbarProps {
  profile: UserProfile;
  themeColor: ThemeColor;
  onThemeColorChange: (color: ThemeColor) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  language: Language;
  onToggleLanguage: () => void;
  onOpenImporter?: () => void;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  themeColor,
  onThemeColorChange,
  isDarkMode,
  onToggleDarkMode,
  language,
  onToggleLanguage,
  onOpenImporter,
  onOpenResume,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const currentTheme = themes[themeColor] || themes.indigo;
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['inicio', 'projetos', 'habilidades', 'sobre', 'experiencia', 'formacao', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: t.inicio, icon: User },
    { id: 'projetos', label: t.projetos, icon: Code2 },
    { id: 'habilidades', label: t.habilidades, icon: Cpu },
    { id: 'sobre', label: t.sobre, icon: FileText },
    { id: 'experiencia', label: t.experiencia, icon: Briefcase },
    { id: 'formacao', label: t.formacao, icon: GraduationCap },
    { id: 'contato', label: t.contato, icon: Mail },
  ];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    if (onOpenResume) {
      onOpenResume();
    } else {
      window.print();
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => handleScrollTo('inicio')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
        >
          {profile.avatar ? (
            <img
              src={profile.avatar}
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
              className="w-10 h-10 rounded-xl object-cover ring-2 ring-slate-200 dark:ring-slate-700 shadow-md transition-transform group-hover:scale-105"
            />
          ) : (
            <div
              className={`w-10 h-10 rounded-xl ${currentTheme.primaryBg} flex items-center justify-center text-white font-bold text-lg shadow-md transition-transform group-hover:scale-105`}
            >
              {profile.name.charAt(0)}
            </div>
          )}
          <div>
            <span className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg tracking-tight block leading-tight">
              {profile.name}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
              Portfólio & Criador
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleScrollTo(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? `${currentTheme.primaryBg} text-white shadow-sm`
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons & Theme Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Language Switcher Button (PT / EN) */}
          <button
            id="toggle-language-btn"
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 bg-slate-100/80 dark:bg-slate-800 hover:bg-slate-200/80 dark:hover:bg-slate-700 transition-all cursor-pointer shadow-xs"
            title={t.languageToggle}
          >
            <Languages className="w-3.5 h-3.5 text-indigo-500" />
            <span className="uppercase tracking-wider">{language === 'pt' ? 'EN' : 'PT'}</span>
          </button>

          {/* Color Palette Toggle */}
          <div className="relative">
            <button
              id="theme-palette-btn"
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={t.colorPalette}
            >
              <Palette className="w-4 h-4" />
            </button>

            {showColorPicker && (
              <div className="absolute right-0 mt-2 p-2 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex gap-1.5 z-50">
                {(Object.keys(themes) as ThemeColor[]).map((c) => (
                  <button
                    key={c}
                    id={`color-choice-${c}`}
                    onClick={() => {
                      onThemeColorChange(c);
                      setShowColorPicker(false);
                    }}
                    className={`w-6 h-6 rounded-full transition-transform cursor-pointer ${
                      themes[c].primaryBg
                    } ${themeColor === c ? 'ring-2 ring-offset-2 ring-slate-900 dark:ring-white scale-110' : 'hover:scale-105'}`}
                    title={themes[c].name}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Dark / Light Mode Switch */}
          <button
            id="toggle-dark-mode-btn"
            onClick={onToggleDarkMode}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title={isDarkMode ? t.darkModeLight : t.darkModeDark}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Print/Download Resume */}
          <button
            id="print-resume-btn"
            onClick={handleDownloadResume}
            className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            title="Salvar / Imprimir Currículo"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.cv}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`mobile-nav-${link.id}`}
                onClick={() => handleScrollTo(link.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? `${currentTheme.primaryBg} text-white`
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <button
              id="mobile-toggle-language"
              onClick={onToggleLanguage}
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100"
            >
              <Languages className="w-4 h-4 text-indigo-500" />
              <span>{language === 'pt' ? 'EN (English)' : 'PT (Português)'}</span>
            </button>
            <button
              id="mobile-download-resume"
              onClick={handleDownloadResume}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100"
            >
              <Download className="w-4 h-4" />
              <span>{language === 'pt' ? 'Imprimir / Baixar CV' : 'Print / Download CV'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
