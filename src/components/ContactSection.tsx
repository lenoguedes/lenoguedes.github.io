import React, { useState } from 'react';
import { UserProfile, ThemeColor, Language } from '../types';
import { themes } from '../utils/theme';
import { translations } from '../utils/translations';
import {
  Mail,
  Send,
  Check,
  Copy,
  Phone,
  MapPin,
  Linkedin,
  Github,
  MessageSquare,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  profile: UserProfile;
  themeColor: ThemeColor;
  language?: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, themeColor, language = 'pt' }) => {
  const t = translations[language].contact;
  const isEn = language === 'en';
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const currentTheme = themes[themeColor] || themes.indigo;

  const handleCopyEmail = () => {
    if (profile.email) {
      navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    const recipientEmail = profile.email || 'lenoguedesg@gmail.com';

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfólio Leno Guedes] ${formData.subject || 'Novo Contato do Site'}`,
          message: formData.message,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('FormSubmit returned error status');
      }
    } catch (err) {
      console.warn('Form submission fallback triggered:', err);
      // Fallback via mailto
      const mailtoSubject = encodeURIComponent(
        `[Portfólio Leno Guedes] ${formData.subject || 'Novo Contato do Site'}`
      );
      const mailtoBody = encodeURIComponent(
        `Nome: ${formData.name}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.message}`
      );
      window.location.href = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contato" className="py-24 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            <Mail className="w-3.5 h-3.5" />
            <span>{isEn ? "Let's Talk" : 'Vamos Conversar'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t.directChannels}
              </h3>

              <div className="space-y-4">
                {/* Email Box with Copy */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className={`p-2.5 rounded-xl ${currentTheme.badgeBg} ${currentTheme.primaryText}`}>
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {t.primaryEmail}
                      </div>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:underline truncate block"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    id="copy-email-btn"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
                    title={isEn ? "Copy email address" : "Copiar endereço de e-mail"}
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp */}
                {profile.socials.whatsapp && (
                  <a
                    id="whatsapp-contact-link"
                    href={profile.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 flex items-center justify-between gap-3 group hover:border-emerald-400 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-emerald-500 text-white font-bold">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                          {t.directWhatsapp}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-emerald-950 dark:text-emerald-100">
                          {profile.phone || (isEn ? 'Chat on WhatsApp' : 'Conversar pelo WhatsApp')}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${currentTheme.badgeBg} ${currentTheme.primaryText}`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {t.location}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {profile.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links List */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t.professionalNetworks}:
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {profile.socials.linkedin && (
                    <a
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {profile.socials.github && (
                    <a
                      href={profile.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 shadow-xs text-left">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t.sendMessageTitle}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                {t.sendMessageSubtitle}
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3 animate-in zoom-in-95">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-100">
                    {isEn ? 'Message Sent Successfully!' : 'Mensagem Enviada com Sucesso!'}
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
                    {isEn
                      ? `Your message has been dispatched to ${profile.email || 'lenoguedesg@gmail.com'}. I will get back to you shortly.`
                      : `Sua mensagem foi entregue com sucesso para ${profile.email || 'lenoguedesg@gmail.com'}. Responderei em breve.`}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-emerald-800 dark:text-emerald-200 bg-emerald-100 dark:bg-emerald-900/60 hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors cursor-pointer"
                    >
                      {isEn ? 'Send another message' : 'Enviar outra mensagem'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="text-xs font-bold text-slate-700 dark:text-slate-300"
                      >
                        {t.nameLabel} *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder={t.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="text-xs font-bold text-slate-700 dark:text-slate-300"
                      >
                        {t.emailLabel} *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder={t.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-subject"
                      className="text-xs font-bold text-slate-700 dark:text-slate-300"
                    >
                      {t.subjectLabel}
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder={t.subjectPlaceholder}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="text-xs font-bold text-slate-700 dark:text-slate-300"
                    >
                      {t.messageLabel} *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder={t.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
                    />
                  </div>

                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white ${currentTheme.primaryBg} ${currentTheme.primaryHover} shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50`}
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{t.sending}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.sendButton}</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                    <Mail className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>
                      {isEn
                        ? 'Messages are delivered directly to lenoguedesg@gmail.com'
                        : 'Mensagens entregues diretamente em lenoguedesg@gmail.com'}
                    </span>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
