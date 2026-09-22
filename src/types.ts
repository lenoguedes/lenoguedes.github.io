export type ThemeColor = 'indigo' | 'emerald' | 'violet' | 'amber' | 'cyan' | 'rose';
export type Language = 'pt' | 'en';

export interface StatItem {
  label: string;
  value: string;
  description?: string;
}

export interface SkillItem {
  name: string;
  level?: number; // 1-100 or 1-5
  years?: number;
  isKey?: boolean;
}

export interface SkillCategory {
  category: string;
  iconName?: string;
  items: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  problemSolved?: string;
  solutionDetails?: string;
  metrics?: string;
  keyFeatures?: string[];
  role?: string;
  year?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  status?: string;
  description?: string;
  highlights?: string[];
  keyDisciplines?: {
    name: string;
    grade?: string;
    period?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  issueDate?: string;
  url?: string;
  credentialId?: string;
  skills?: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  linkedinUrl?: string;
}

export interface LanguageItem {
  language: string;
  level: string;
}

export interface UserProfile {
  name: string;
  headline: string;
  shortPitch: string;
  bio: string;
  aboutStory: string[];
  avatar: string;
  location: string;
  email: string;
  phone: string;
  availability: 'available' | 'contract' | 'open' | 'busy';
  availabilityText: string;
  yearsOfExperience: number;
  resumeUrl?: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
    whatsapp?: string;
  };
  stats: StatItem[];
  skills: SkillCategory[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  testimonials: Testimonial[];
  languages: LanguageItem[];
  interests: string[];
}
