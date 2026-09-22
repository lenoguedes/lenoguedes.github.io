import React, { useEffect, useRef } from 'react';
import {
  Printer,
  Download,
  X,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github
} from 'lucide-react';
import { UserProfile, ThemeColor, Language } from '../types';
import { themes } from '../utils/theme';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  themeColor: ThemeColor;
  language?: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  themeColor,
  language = 'pt',
}) => {
  const printAreaRef = useRef<HTMLDivElement>(null);
  const currentTheme = themes[themeColor] || themes.indigo;
  const isEn = language === 'en';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[94vh] overflow-hidden">
        
        {/* Top Floating Action Bar (Hidden during window.print via print:hidden) */}
        <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-sm print:hidden">
          <div className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${currentTheme.primaryBg}`} />
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              {isEn ? 'Resume Preview • Ready for PDF / Print' : 'Visualização de Currículo • Pronto para PDF / Impressão'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-modal-print-btn"
              onClick={handlePrint}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white ${currentTheme.primaryBg} ${currentTheme.primaryHover} shadow-md transition-all active:scale-95 cursor-pointer`}
              title={isEn ? 'Save as PDF or Print' : 'Salvar como PDF ou Imprimir'}
            >
              <Printer className="w-4 h-4" />
              <span>{isEn ? 'Print / Save as PDF' : 'Imprimir / Salvar em PDF'}</span>
            </button>

            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={isEn ? 'Close' : 'Fechar'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable CV Sheet Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-100 dark:bg-slate-950/60 print:p-0 print:bg-white print:overflow-visible">
          
          {/* Printable Document A4 Frame */}
          <div
            ref={printAreaRef}
            id="printable-cv-document"
            className="w-full max-w-[820px] mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-lg border border-slate-200 print:border-none print:shadow-none print:p-0 print:max-w-none print:w-full print:rounded-none font-sans text-left"
            style={{ minHeight: '1050px' }}
          >
            {/* Header / Identificação */}
            <header className="border-b border-slate-300 pb-5 mb-6 text-center">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase font-sans">
                {profile.name}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-slate-700 mt-1">
                {profile.headline}
              </p>
              
              {/* Contatos & Links em uma linha */}
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-600 mt-2.5 font-medium">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 print:hidden" />
                  {profile.location} ({isEn ? 'Available for Hybrid / Remote' : 'Disponível para Híbrido / Remoto'})
                </span>
                <span>•</span>
                <a href={`tel:${profile.phone.replace(/\D/g, '')}`} className="hover:text-slate-900 inline-flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400 print:hidden" />
                  {profile.phone}
                </a>
                <span>•</span>
                <a href={`mailto:${profile.email}`} className="hover:text-slate-900 inline-flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400 print:hidden" />
                  {profile.email}
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-4 text-xs text-slate-600 mt-1.5 font-medium">
                {profile.socials.linkedin && (
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-900 inline-flex items-center gap-1 text-indigo-700 print:text-slate-700"
                  >
                    <Linkedin className="w-3.5 h-3.5 print:hidden" />
                    {profile.socials.linkedin.replace(/^https?:\/\//, '')}
                  </a>
                )}
                {profile.socials.linkedin && profile.socials.github && <span>•</span>}
                {profile.socials.github && (
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-900 inline-flex items-center gap-1 text-indigo-700 print:text-slate-700"
                  >
                    <Github className="w-3.5 h-3.5 print:hidden" />
                    {profile.socials.github.replace(/^https?:\/\//, '')}
                  </a>
                )}
              </div>
            </header>

            {/* RESUMO PROFISSIONAL */}
            <section className="mb-6">
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                {isEn ? 'Professional Summary' : 'Resumo Profissional'}
              </h2>
              {profile.aboutStory && profile.aboutStory.length > 0 ? (
                profile.aboutStory.map((p, i) => (
                  <p key={i} className="text-xs sm:text-[13px] text-slate-800 leading-relaxed text-justify mb-2">
                    {p}
                  </p>
                ))
              ) : (
                <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed text-justify mb-2">
                  {profile.bio}
                </p>
              )}
            </section>

            {/* EXPERIÊNCIA PROFISSIONAL */}
            <section className="mb-6">
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-3">
                {isEn ? 'Work Experience' : 'Experiência Profissional'}
              </h2>

              <div className="space-y-4">
                {profile.experiences.map((exp, idx) => (
                  <div key={exp.id || idx} className={idx > 0 ? "mt-3 pt-2.5 border-t border-slate-200" : ""}>
                    <div className="flex flex-wrap items-baseline justify-between gap-1 text-xs sm:text-[13px]">
                      <div>
                        <span className="font-bold text-slate-950">
                          {exp.role}
                        </span>
                        <span className="text-slate-700 font-semibold ml-1.5 text-xs">
                          | {exp.company}
                        </span>
                      </div>
                      <span className="font-semibold text-slate-600 text-xs">
                        {exp.period}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="text-xs sm:text-[12px] text-slate-700 mt-1 leading-relaxed">
                        {exp.description}
                      </p>
                    )}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="mt-1.5 space-y-1 text-xs sm:text-[12.5px] text-slate-800 list-disc list-outside pl-4 leading-relaxed">
                        {exp.achievements.map((item, aIdx) => (
                          <li key={aIdx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* PROJETOS EM DESTAQUE */}
            {profile.projects && profile.projects.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                  {isEn ? 'Featured Projects' : 'Projetos em Destaque'}
                </h2>
                <ul className="space-y-2 text-xs sm:text-[12.5px] text-slate-800 list-disc list-outside pl-4 leading-relaxed">
                  {profile.projects.slice(0, 3).map((proj, pIdx) => (
                    <li key={proj.id || pIdx}>
                      <strong className="text-slate-950">{proj.title}:</strong> {proj.description}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* COMPETÊNCIAS TÉCNICAS */}
            <section className="mb-6">
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                {isEn ? 'Technical Skills' : 'Competências Técnicas'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[12.5px] text-slate-800">
                {profile.skills.map((skillGroup, sIdx) => (
                  <div key={sIdx} className="leading-relaxed">
                    <strong className="text-slate-950">{skillGroup.category}:</strong>{' '}
                    <span>{skillGroup.items.join(', ')}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FORMAÇÃO ACADÊMICA, CERTIFICAÇÕES & IDIOMAS */}
            <section className="mb-2">
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                {isEn ? 'Education & Certifications' : 'Formação Acadêmica & Certificações'}
              </h2>
              
              <div className="text-xs sm:text-[12.5px] text-slate-800 space-y-2.5 mb-3">
                {profile.education.map((edu, eIdx) => (
                  <div key={edu.id || eIdx} className={eIdx > 0 ? "pt-2 border-t border-slate-100" : ""}>
                    <div className="flex flex-wrap items-baseline justify-between font-bold text-slate-900">
                      <span>{edu.degree} | {edu.institution}</span>
                      <span className="text-slate-600 font-semibold text-xs">{edu.period}</span>
                    </div>
                    {edu.description && (
                      <p className="text-slate-700 text-[11.5px] mt-0.5 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}

                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-1 text-slate-800">
                  {profile.languages.map((l, lIdx) => (
                    <span key={lIdx}>• <strong>{l.language}:</strong> {l.level}</span>
                  ))}
                </div>
              </div>

              {profile.certifications && profile.certifications.length > 0 && (
                <div className="pt-2 border-t border-slate-200">
                  <div className="text-xs font-bold text-slate-950 uppercase tracking-tight mb-1.5">
                    {isEn ? 'Official Certifications:' : 'Certificações Oficiais:'}
                  </div>
                  <ul className="space-y-1 text-xs sm:text-[12px] text-slate-800 list-disc list-outside pl-4 leading-relaxed">
                    {profile.certifications.map((cert, cIdx) => (
                      <li key={cert.id || cIdx}>
                        <strong>{cert.name}</strong> – {cert.issuer} ({cert.issueDate})
                        {cert.credentialId && (
                          <span className="text-slate-600 italic ml-1">| ID: {cert.credentialId}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950 print:hidden text-xs text-slate-500">
          <span>
            {isEn ? (
              <>💡 Tip: in the print dialog, choose <strong>Save as PDF</strong> with default margins.</>
            ) : (
              <>💡 Dica: no diálogo de impressão, escolha <strong>Salvar como PDF</strong> com margens padrão.</>
            )}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold cursor-pointer"
            >
              {isEn ? 'Close' : 'Fechar'}
            </button>
            <button
              onClick={handlePrint}
              className={`px-4 py-1.5 rounded-xl text-white font-bold ${currentTheme.primaryBg} ${currentTheme.primaryHover} cursor-pointer flex items-center gap-1.5`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isEn ? 'Download PDF' : 'Baixar PDF'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
