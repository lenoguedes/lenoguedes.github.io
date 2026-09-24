import React, { useState, useEffect } from 'react';
import { UserProfile, Project, ThemeColor, Language } from './types';
import { initialProfile } from './data/defaultProfile';
import { englishProfile } from './data/enProfile';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { EducationCerts } from './components/EducationCerts';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { CVImportModal } from './components/CVImportModal';
import { AvatarUploadModal } from './components/AvatarUploadModal';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  // Load saved profile or fallback to initial profile
  const [profile, setProfile] = useState<UserProfile>(() => {
    const PROFILE_SYNC_VERSION = 'v16_github_real_avatar';
    try {
      const savedVersion = localStorage.getItem('portfolio_profile_version');
      const savedStr = localStorage.getItem('portfolio_user_profile');

      if (savedStr) {
        const saved: UserProfile = JSON.parse(savedStr);

        // Se for versão anterior ou tiver lista desatualizada, atualiza com a coleção e textos refinados
        if (savedVersion !== PROFILE_SYNC_VERSION || saved.headline?.toLowerCase().includes('full-stack')) {
          const synced: UserProfile = {
            ...initialProfile,
            // Preserva a foto se o usuário tiver feito upload manual de imagem (base64)
            avatar: (saved.avatar && saved.avatar.startsWith('data:image'))
              ? saved.avatar
              : initialProfile.avatar,
          };
          localStorage.setItem('portfolio_profile_version', PROFILE_SYNC_VERSION);
          localStorage.setItem('portfolio_user_profile', JSON.stringify(synced));
          return synced;
        }

        // Garante que novos projetos estejam sempre presentes sem duplicação
        const seenIds = new Set<string>();
        const uniqueProjects: Project[] = [];
        (saved.projects || []).forEach((p, idx) => {
          const id = p.id || `proj-saved-${idx}`;
          if (!seenIds.has(id)) {
            seenIds.add(id);
            uniqueProjects.push({ ...p, id });
          }
        });

        const newProjects = initialProfile.projects.filter((p) => !seenIds.has(p.id));
        const finalProjects = [...newProjects, ...uniqueProjects];

        const merged: UserProfile = {
          ...saved,
          projects: finalProjects
        };
        localStorage.setItem('portfolio_user_profile', JSON.stringify(merged));
        return merged;
      } else {
        localStorage.setItem('portfolio_profile_version', PROFILE_SYNC_VERSION);
        localStorage.setItem('portfolio_user_profile', JSON.stringify(initialProfile));
      }
    } catch (e) {
      console.warn('Erro ao carregar dados salvos:', e);
    }
    return initialProfile;
  });

  // Theme color state
  const [themeColor, setThemeColor] = useState<ThemeColor>(() => {
    try {
      const saved = localStorage.getItem('portfolio_theme_color');
      if (saved) return saved as ThemeColor;
    } catch (e) {}
    return 'indigo';
  });

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('portfolio_dark_mode');
      if (saved !== null) return saved === 'true';
    } catch (e) {}
    return true; // Default to sleek dark mode
  });

  // Language state (pt / en)
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem('portfolio_language');
      if (savedLang === 'en' || savedLang === 'pt') return savedLang;
    } catch (e) {}
    return 'pt';
  });

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isImporterOpen, setIsImporterOpen] = useState(false);
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Sync dark mode class on html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('portfolio_dark_mode', String(isDarkMode));
    } catch (e) {}
  }, [isDarkMode]);

  // Sync theme color
  useEffect(() => {
    try {
      localStorage.setItem('portfolio_theme_color', themeColor);
    } catch (e) {}
  }, [themeColor]);

  // Sync language and html lang tag
  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR';
    try {
      localStorage.setItem('portfolio_language', language);
    } catch (e) {}
  }, [language]);

  // Handle profile updates & local persistence
  const handleUpdateProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
    try {
      localStorage.setItem('portfolio_user_profile', JSON.stringify(newProfile));
    } catch (e) {
      console.error('Erro ao salvar perfil localmente:', e);
    }
  };

  const handleUpdateAvatar = (newAvatarUrl: string) => {
    const updated = { ...profile, avatar: newAvatarUrl };
    handleUpdateProfile(updated);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleToggleLanguage = () => {
    const nextLang: Language = language === 'pt' ? 'en' : 'pt';
    setLanguage(nextLang);
    // Preserve current avatar when switching languages
    const currentAvatar = profile.avatar;
    if (nextLang === 'en') {
      setProfile({
        ...englishProfile,
        avatar: currentAvatar || englishProfile.avatar,
      });
    } else {
      setProfile({
        ...initialProfile,
        avatar: currentAvatar || initialProfile.avatar,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar
        profile={profile}
        themeColor={themeColor}
        onThemeColorChange={setThemeColor}
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onOpenImporter={() => setIsImporterOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          profile={profile}
          themeColor={themeColor}
          language={language}
          onOpenImporter={() => setIsImporterOpen(true)}
          onOpenAvatarUpload={() => setIsAvatarModalOpen(true)}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        <ProjectsSection
          projects={profile.projects}
          themeColor={themeColor}
          language={language}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenImporter={() => setIsImporterOpen(true)}
        />

        <SkillsSection
          skills={profile.skills}
          themeColor={themeColor}
          language={language}
        />

        <AboutSection
          profile={profile}
          themeColor={themeColor}
          language={language}
        />

        <ExperienceTimeline
          experiences={profile.experiences}
          themeColor={themeColor}
          language={language}
        />

        <EducationCerts
          education={profile.education}
          certifications={profile.certifications}
          themeColor={themeColor}
          language={language}
        />

        <TestimonialsSection
          testimonials={profile.testimonials}
          themeColor={themeColor}
          language={language}
        />

        <ContactSection
          profile={profile}
          themeColor={themeColor}
          language={language}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        themeColor={themeColor}
        language={language}
        onOpenImporter={() => setIsImporterOpen(true)}
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        themeColor={themeColor}
        language={language}
        onClose={() => setSelectedProject(null)}
      />

      {/* AI CV / LinkedIn Importer & Editor Modal */}
      <CVImportModal
        isOpen={isImporterOpen}
        onClose={() => setIsImporterOpen(false)}
        profile={profile}
        onUpdateProfile={handleUpdateProfile}
        themeColor={themeColor}
      />

      {/* Avatar / Profile Photo Upload Modal */}
      <AvatarUploadModal
        isOpen={isAvatarModalOpen}
        onClose={() => setIsAvatarModalOpen(false)}
        profile={profile}
        onUpdateAvatar={handleUpdateAvatar}
        themeColor={themeColor}
      />

      {/* Official Printable Resume / PDF Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        profile={profile}
        themeColor={themeColor}
        language={language}
      />
    </div>
  );
}
