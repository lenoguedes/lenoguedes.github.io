import React from 'react';
import { Testimonial, ThemeColor, Language } from '../types';
import { themes } from '../utils/theme';
import { MessageSquareQuote, Star, CheckCircle } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  themeColor: ThemeColor;
  language?: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  themeColor,
  language = 'pt',
}) => {
  const isEn = language === 'en';
  const currentTheme = themes[themeColor] || themes.indigo;

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>{isEn ? 'Recommendations' : 'Recomendações'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isEn ? 'What Colleagues & Leaders Say' : 'O que Colegas & Líderes Dizem'}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            {isEn
              ? 'Testimonials from professionals who worked closely on deliveries and technical projects.'
              : 'Depoimentos de profissionais que acompanharam entregas e projetos de perto.'}
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <div
              key={test.id || idx}
              id={`testimonial-${idx}`}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 shadow-xs flex flex-col justify-between space-y-6 text-left"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote Content */}
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed italic font-normal">
                "{test.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <img
                  src={test.avatar}
                  alt={test.author}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-800"
                />
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">
                    {test.author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {test.role} • <span className="font-semibold text-slate-700 dark:text-slate-300">{test.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
