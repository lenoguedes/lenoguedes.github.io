import React from 'react';
import { UserProfile, ThemeColor, Language } from '../types';
import { themes } from '../utils/theme';
import { translations } from '../utils/translations';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  profile: UserProfile;
  themeColor: ThemeColor;
  onOpenImporter?: () => void;
  language?: Language;
}

export const Footer: React.FC<FooterProps> = ({ profile, themeColor, language = 'pt' }) => {
  const t = translations[language].footer;
  const isEn = language === 'en';
  const currentTheme = themes[themeColor] || themes.indigo;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3 text-left">
            <div
              className={`w-9 h-9 rounded-xl ${currentTheme.primaryBg} flex items-center justify-center text-white font-bold text-sm`}
            >
              {profile.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {profile.name} • {new Date().getFullYear()}
              </p>
              <div className="mt-1 space-y-1.5">
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {isEn ? 'Built with modern web technologies:' : 'Ferramentas utilizadas para criar esta página:'}
                </p>
                <div className="flex flex-wrap items-center gap-1.5">
                  {[
                    'React 19',
                    'TypeScript',
                    'Vite',
                    'Tailwind CSS',
                    'Motion',
                    'Lucide Icons',
                    'GitHub Pages'
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/70 shadow-2xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Social Icons & Scroll to Top */}
          <div className="flex items-center gap-3">
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {profile.socials.linkedin && (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                title={isEn ? "Email" : "E-mail"}
              >
                <Mail className="w-4 h-4" />
              </a>
            )}

            <button
              id="scroll-to-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer ml-2"
              title={t.backToTop}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
