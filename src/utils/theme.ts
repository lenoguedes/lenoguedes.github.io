import { ThemeColor } from '../types';

export interface ThemeConfig {
  name: string;
  color: ThemeColor;
  primaryBg: string;
  primaryHover: string;
  primaryText: string;
  borderAccent: string;
  glowColor: string;
  badgeBg: string;
  badgeText: string;
  lightBg: string;
  gradientFrom: string;
  gradientTo: string;
}

export const themes: Record<ThemeColor, ThemeConfig> = {
  indigo: {
    name: 'Índigo Real',
    color: 'indigo',
    primaryBg: 'bg-indigo-600',
    primaryHover: 'hover:bg-indigo-700',
    primaryText: 'text-indigo-600 dark:text-indigo-400',
    borderAccent: 'border-indigo-500',
    glowColor: 'shadow-indigo-500/20',
    badgeBg: 'bg-indigo-50 dark:bg-indigo-950/40',
    badgeText: 'text-indigo-700 dark:text-indigo-300',
    lightBg: 'bg-indigo-500/10',
    gradientFrom: 'from-indigo-600',
    gradientTo: 'to-blue-600',
  },
  emerald: {
    name: 'Esmeralda Tech',
    color: 'emerald',
    primaryBg: 'bg-emerald-600',
    primaryHover: 'hover:bg-emerald-700',
    primaryText: 'text-emerald-600 dark:text-emerald-400',
    borderAccent: 'border-emerald-500',
    glowColor: 'shadow-emerald-500/20',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/40',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    lightBg: 'bg-emerald-500/10',
    gradientFrom: 'from-emerald-600',
    gradientTo: 'to-teal-600',
  },
  violet: {
    name: 'Violeta Cyber',
    color: 'violet',
    primaryBg: 'bg-violet-600',
    primaryHover: 'hover:bg-violet-700',
    primaryText: 'text-violet-600 dark:text-violet-400',
    borderAccent: 'border-violet-500',
    glowColor: 'shadow-violet-500/20',
    badgeBg: 'bg-violet-50 dark:bg-violet-950/40',
    badgeText: 'text-violet-700 dark:text-violet-300',
    lightBg: 'bg-violet-500/10',
    gradientFrom: 'from-violet-600',
    gradientTo: 'to-purple-600',
  },
  amber: {
    name: 'Âmbar Dourado',
    color: 'amber',
    primaryBg: 'bg-amber-600',
    primaryHover: 'hover:bg-amber-700',
    primaryText: 'text-amber-600 dark:text-amber-400',
    borderAccent: 'border-amber-500',
    glowColor: 'shadow-amber-500/20',
    badgeBg: 'bg-amber-50 dark:bg-amber-950/40',
    badgeText: 'text-amber-800 dark:text-amber-300',
    lightBg: 'bg-amber-500/10',
    gradientFrom: 'from-amber-600',
    gradientTo: 'to-orange-600',
  },
  cyan: {
    name: 'Ciano Futurista',
    color: 'cyan',
    primaryBg: 'bg-cyan-600',
    primaryHover: 'hover:bg-cyan-700',
    primaryText: 'text-cyan-600 dark:text-cyan-400',
    borderAccent: 'border-cyan-500',
    glowColor: 'shadow-cyan-500/20',
    badgeBg: 'bg-cyan-50 dark:bg-cyan-950/40',
    badgeText: 'text-cyan-800 dark:text-cyan-300',
    lightBg: 'bg-cyan-500/10',
    gradientFrom: 'from-cyan-600',
    gradientTo: 'to-sky-600',
  },
  rose: {
    name: 'Rosa Quartzo',
    color: 'rose',
    primaryBg: 'bg-rose-600',
    primaryHover: 'hover:bg-rose-700',
    primaryText: 'text-rose-600 dark:text-rose-400',
    borderAccent: 'border-rose-500',
    glowColor: 'shadow-rose-500/20',
    badgeBg: 'bg-rose-50 dark:bg-rose-950/40',
    badgeText: 'text-rose-800 dark:text-rose-300',
    lightBg: 'bg-rose-500/10',
    gradientFrom: 'from-rose-600',
    gradientTo: 'to-pink-600',
  },
};
