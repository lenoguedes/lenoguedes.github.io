import React, { useState } from 'react';
import { UserProfile, Project, Experience, ThemeColor } from '../types';
import { themes } from '../utils/theme';
import { initialProfile } from '../data/defaultProfile';
import { optimizeAvatarImage } from '../utils/imageOptimizer';
import {
  X,
  Sparkles,
  FileText,
  Linkedin,
  Upload,
  CheckCircle2,
  AlertCircle,
  Code2,
  User,
  Briefcase,
  Layers,
  Download,
  Copy,
  Plus,
  Trash2,
  Wand2,
  RefreshCw,
  ExternalLink,
  Camera
} from 'lucide-react';

interface CVImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  onUpdateProfile: (newProfile: UserProfile) => void;
  themeColor: ThemeColor;
}

export const CVImportModal: React.FC<CVImportModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  themeColor,
}) => {
  if (!isOpen) return null;

  const currentTheme = themes[themeColor] || themes.indigo;

  const [activeTab, setActiveTab] = useState<
    'ai-resume' | 'ai-project' | 'ai-bio' | 'manual-edit' | 'export-import'
  >('ai-resume');

  // AI Resume Parser state
  const [resumeText, setResumeText] = useState('');
  const [targetRole, setTargetRole] = useState('');
  const [isParsing, setIsParsing] = useState(false);
  const [parseError, setParseError] = useState<string | null>(null);
  const [parsedPreview, setParsedPreview] = useState<any>(null);

  // AI Project Generator state
  const [projectRawText, setProjectRawText] = useState('');
  const [isGeneratingProject, setIsGeneratingProject] = useState(false);
  const [generatedProjectPreview, setGeneratedProjectPreview] = useState<Project | null>(null);

  // AI Bio Enhancer state
  const [bioTone, setBioTone] = useState('Senior Tech Lead & Product Builder');
  const [targetAudience, setTargetAudience] = useState('Recrutadores Técnicos e Clientes de Alto Nível');
  const [isEnhancingBio, setIsEnhancingBio] = useState(false);
  const [enhancedBioResults, setEnhancedBioResults] = useState<any>(null);

  // Editable copy for manual editing
  const [editableProfile, setEditableProfile] = useState<UserProfile>({ ...profile });

  // Sample Resume text for quick testing
  const sampleCVText = `Leno Guedes
São Paulo, Brasil | lenoguedesg@gmail.com | +55 11 98765-4321
GitHub: https://github.com/lenoguedes | LinkedIn: https://www.linkedin.com/in/lenoguedes

RESUMO PROFISSIONAL
Minha trajetória conecta operação, risco e estratégia por meio da análise de dados, com foco em transformar informações complexas em indicadores claros, gerar eficiência operacional e apoiar decisões orientadas por dados. Sigo aprofundando meus conhecimentos em SQL, ETL, modelagem e automação, com o objetivo de atuar de forma cada vez mais estratégica na área de Dados.

EXPERIÊNCIA PROFISSIONAL
Planejamento Comercial — Analista de Planejamento Comercial & Dados (Atualmente)
- Responsável pela apuração de campanhas comerciais e cálculos de remuneração variável (RV).
- Construção e validação de métricas de negócio, análises de churn histórico e estudos de correlação entre evasão de clientes e produtividade de operadores, lojas e regionais.
- Otimização e documentação de processos, automação de rotinas analíticas e sustentação de painéis e dashboards no Power BI, garantindo a confiabilidade dos dados que apoiam decisões estratégicas.

Prevenção a Riscos e Fraudes — Analista de Prevenção a Riscos e Fraudes (Anterior)
- Atuação em ambientes de alta criticidade e grande volumetria de dados.
- Análise de eventos de brute force, investigação de ocorrências em ferramentas corporativas e monitoramento de transações financeiras.
- Foco na detecção de ataques, identificação de anomalias, validação de informações e garantia da integridade dos dados, mitigando riscos e fundamentando decisões em evidências.

Service Desk — Analista de Service Desk & Sustentação de TI (Início da Carreira)
- Base sólida em suporte técnico, análise de incidentes, gestão de acessos, configuração e monitoramento de ambientes operacionais.
- Criação de soluções internas para otimizar rotinas de atendimento, tratamento de falhas massivas, melhoria no registro de chamados e controle de patrimônio de equipamentos de TI.
- Direcionamento da formação acadêmica em Tecnologia em Banco de Dados para atuação analítica e orientada a dados.

FORMAÇÃO ACADÊMICA
- Tecnologia em Banco de Dados (Ensino Superior)

COMPETÊNCIAS E FERRAMENTAS TÉCNICAS
- SQL, SSIS (SQL Server Integration Services), Automação de Processos, Banco de Dados Relacional
- Python (Pandas, NumPy, PyAutoGUI, openpyxl, Scikit-Learn) e automação de rotinas analíticas, Jupyter, VS Code
- Power BI, Excel Avançado, ETL (extração, transformação e carga), KPIs, Modelagem de Dados, Análise de Dados
- Dashboards, Data Visualization, Limpeza de Dados, Docker, versionamento com Git e GitHub, Análise de Churn e Business Intelligence.`;

  // Call Server-side Gemini API to parse resume
  const handleParseResume = async () => {
    if (!resumeText.trim()) {
      setParseError('Por favor, cole o texto do seu currículo ou perfil do LinkedIn.');
      return;
    }

    setIsParsing(true);
    setParseError(null);
    setParsedPreview(null);

    try {
      const response = await fetch('/api/gemini/parse-resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rawText: resumeText, targetRole }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Falha ao processar currículo');
      }

      setParsedPreview(data.data);
    } catch (err: any) {
      console.error(err);
      setParseError(
        err.message || 'Erro ao processar dados com IA. Verifique se o texto está legível.'
      );
    } finally {
      setIsParsing(false);
    }
  };

  // Apply parsed data to portfolio
  const handleApplyParsedResume = () => {
    if (!parsedPreview) return;

    const updated: UserProfile = {
      ...profile,
      name: parsedPreview.name || profile.name,
      headline: parsedPreview.headline || profile.headline,
      bio: parsedPreview.bio || profile.bio,
      shortPitch: parsedPreview.shortPitch || parsedPreview.bio || profile.shortPitch,
      email: parsedPreview.email || profile.email,
      phone: parsedPreview.phone || profile.phone,
      location: parsedPreview.location || profile.location,
      yearsOfExperience: parsedPreview.yearsOfExperience || profile.yearsOfExperience,
      socials: {
        ...profile.socials,
        github: parsedPreview.github || profile.socials.github,
        linkedin: parsedPreview.linkedin || profile.socials.linkedin,
        website: parsedPreview.website || profile.socials.website,
      },
      stats: parsedPreview.stats && parsedPreview.stats.length > 0 ? parsedPreview.stats : profile.stats,
      experiences:
        parsedPreview.experiences && parsedPreview.experiences.length > 0
          ? parsedPreview.experiences.map((e: any, idx: number) => ({
              id: `parsed-exp-${idx}-${Date.now()}`,
              role: e.role,
              company: e.company,
              location: e.location || 'Remoto / Híbrido',
              period: e.period,
              isCurrent: Boolean(e.isCurrent),
              description: e.description || '',
              highlights: e.highlights || [],
              technologies: e.technologies || [],
            }))
          : profile.experiences,
      projects:
        parsedPreview.projects && parsedPreview.projects.length > 0
          ? parsedPreview.projects.map((p: any, idx: number) => ({
              id: `parsed-proj-${idx}-${Date.now()}`,
              title: p.title,
              tagline: p.tagline || p.description,
              description: p.description,
              category: p.category || 'Full-Stack',
              image:
                profile.projects[idx]?.image ||
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
              technologies: p.technologies || ['React', 'TypeScript', 'Node.js'],
              liveUrl: p.liveUrl || '',
              githubUrl: p.githubUrl || '',
              featured: idx === 0,
              metrics: p.metrics || '',
              keyFeatures: p.keyFeatures || [],
            }))
          : profile.projects,
      skills:
        parsedPreview.skills && parsedPreview.skills.length > 0
          ? parsedPreview.skills.map((s: any) => ({
              category: s.category,
              items: (s.items || []).map((item: string, iIdx: number) => ({
                name: item,
                level: 90 - iIdx * 2,
                years: 4,
                isKey: iIdx < 3,
              })),
            }))
          : profile.skills,
      education:
        parsedPreview.education && parsedPreview.education.length > 0
          ? parsedPreview.education.map((edu: any, idx: number) => ({
              id: `parsed-edu-${idx}`,
              degree: edu.degree,
              institution: edu.institution,
              period: edu.period,
              description: edu.description || '',
            }))
          : profile.education,
      certifications:
        parsedPreview.certifications && parsedPreview.certifications.length > 0
          ? parsedPreview.certifications.map((c: any, idx: number) => ({
              id: `parsed-cert-${idx}`,
              title: c.title,
              issuer: c.issuer,
              year: c.year,
              url: c.url || '',
            }))
          : profile.certifications,
      languages:
        parsedPreview.languages && parsedPreview.languages.length > 0
          ? parsedPreview.languages
          : profile.languages,
    };

    onUpdateProfile(updated);
    setEditableProfile(updated);
    onClose();
  };

  // Generate Single Project with AI
  const handleGenerateProject = async () => {
    if (!projectRawText.trim()) return;
    setIsGeneratingProject(true);

    try {
      const response = await fetch('/api/gemini/enhance-project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rawProjectData: projectRawText }),
      });

      const data = await response.json();
      if (data.success && data.data) {
        const newProj: Project = {
          id: `ai-proj-${Date.now()}`,
          title: data.data.title,
          tagline: data.data.tagline,
          description: data.data.description,
          category: data.data.category || 'Full-Stack',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
          technologies: data.data.technologies || ['React', 'TypeScript'],
          problemSolved: data.data.problemSolved,
          solutionDetails: data.data.solutionDetails,
          metrics: data.data.metrics,
          keyFeatures: data.data.keyFeatures || [],
          featured: true,
          year: new Date().getFullYear().toString(),
        };
        setGeneratedProjectPreview(newProj);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsGeneratingProject(false);
    }
  };

  const handleAddGeneratedProject = () => {
    if (!generatedProjectPreview) return;
    const updated = {
      ...profile,
      projects: [generatedProjectPreview, ...profile.projects],
    };
    onUpdateProfile(updated);
    setEditableProfile(updated);
    setGeneratedProjectPreview(null);
    setProjectRawText('');
    onClose();
  };

  // Enhance Bio with AI
  const handleEnhanceBio = async () => {
    setIsEnhancingBio(true);
    try {
      const response = await fetch('/api/gemini/enhance-bio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentBio: profile.bio,
          currentHeadline: profile.headline,
          tone: bioTone,
          targetAudience,
          skills: profile.skills.flatMap((s) => s.items.map((i) => i.name)).slice(0, 10),
        }),
      });

      const data = await response.json();
      if (data.success && data.data) {
        setEnhancedBioResults(data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsEnhancingBio(false);
    }
  };

  const handleApplyEnhancedBio = () => {
    if (!enhancedBioResults) return;
    const updated: UserProfile = {
      ...profile,
      headline: enhancedBioResults.optimizedHeadline || profile.headline,
      shortPitch: enhancedBioResults.heroPitch || profile.shortPitch,
      bio: enhancedBioResults.aboutBio || profile.bio,
    };
    onUpdateProfile(updated);
    setEditableProfile(updated);
    onClose();
  };

  // Save manual edit
  const handleSaveManualEdit = () => {
    onUpdateProfile(editableProfile);
    onClose();
  };

  // Export JSON
  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(profile, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `portfolio-${profile.name.toLowerCase().replace(/\s+/g, '-')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import JSON
  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], 'UTF-8');
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (parsed && parsed.name) {
            onUpdateProfile(parsed);
            setEditableProfile(parsed);
            onClose();
          }
        } catch (err) {
          alert('Arquivo JSON inválido!');
        }
      };
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        id="cv-import-modal-container"
        className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 max-h-[92vh] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-2xl ${currentTheme.badgeBg} ${currentTheme.primaryText}`}>
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Personalizador & Importador Inteligente
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Alimente seu portfólio colando seu Currículo, LinkedIn ou usando IA para gerar cases e refinar sua bio.
              </p>
            </div>
          </div>

          <button
            id="close-importer-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 p-2 bg-slate-100 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 overflow-x-auto scrollbar-none">
          <button
            id="tab-ai-resume"
            onClick={() => setActiveTab('ai-resume')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'ai-resume'
                ? `${currentTheme.primaryBg} text-white shadow-sm`
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>1. Importar CV / LinkedIn (IA)</span>
          </button>

          <button
            id="tab-ai-project"
            onClick={() => setActiveTab('ai-project')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'ai-project'
                ? `${currentTheme.primaryBg} text-white shadow-sm`
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>2. Gerar Case de Projeto</span>
          </button>

          <button
            id="tab-ai-bio"
            onClick={() => setActiveTab('ai-bio')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'ai-bio'
                ? `${currentTheme.primaryBg} text-white shadow-sm`
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>3. Otimizar Bio & Pitch</span>
          </button>

          <button
            id="tab-manual-edit"
            onClick={() => setActiveTab('manual-edit')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'manual-edit'
                ? `${currentTheme.primaryBg} text-white shadow-sm`
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>4. Editor Direto</span>
          </button>

          <button
            id="tab-export-import"
            onClick={() => setActiveTab('export-import')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'export-import'
                ? `${currentTheme.primaryBg} text-white shadow-sm`
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>5. Backup JSON</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          
          {/* TAB 1: AI RESUME / LINKEDIN PARSER */}
          {activeTab === 'ai-resume' && (
            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span>Cole seu Currículo em Texto ou seções do LinkedIn</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    O Gemini AI analisa o texto, organiza suas experiências, habilidades, projetos e métricas automaticamente.
                  </p>
                </div>

                <button
                  id="load-sample-cv-btn"
                  onClick={() => setResumeText(sampleCVText)}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors cursor-pointer shrink-0"
                >
                  📄 Carregar Exemplo de Teste
                </button>
              </div>

              {/* Textarea */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700 dark:text-slate-300">
                  <label htmlFor="resume-raw-text">Texto do Currículo / Perfil LinkedIn *</label>
                  <span className="text-slate-400 font-normal">
                    {resumeText.length} caracteres
                  </span>
                </div>
                <textarea
                  id="resume-raw-text"
                  rows={8}
                  placeholder="Cole aqui o texto completo do seu currículo (PDF/Word copiado) ou as seções Sobre + Experiências + Formação do LinkedIn..."
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                />
              </div>

              {/* Target Role input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Foco Desejado de Cargo / Especialidade (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Engenheiro Full-Stack Sênior com foco em React e Cloud"
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {parseError && (
                <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{parseError}</span>
                </div>
              )}

              {/* Action Trigger */}
              <div className="flex items-center justify-between gap-4 pt-2">
                <button
                  id="trigger-ai-parse-btn"
                  onClick={handleParseResume}
                  disabled={isParsing || !resumeText.trim()}
                  className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white ${currentTheme.primaryBg} ${currentTheme.primaryHover} shadow-md flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50`}
                >
                  {isParsing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Extraindo e Estruturando com Gemini IA...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Extrair & Estruturar Portfólio com IA</span>
                    </>
                  )}
                </button>
              </div>

              {/* Parsed Results Preview & Apply */}
              {parsedPreview && (
                <div className="mt-8 p-6 rounded-3xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 space-y-4 animate-in zoom-in-95">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span>Dados Extraídos com Sucesso pela IA!</span>
                    </div>

                    <button
                      id="apply-parsed-resume-btn"
                      onClick={handleApplyParsedResume}
                      className="px-5 py-2.5 rounded-xl font-extrabold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-md flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Aplicar Tudo ao Portfólio Agora</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="font-bold text-slate-400 uppercase text-[10px]">Nome & Título</span>
                      <p className="font-extrabold text-slate-900 dark:text-white text-sm">
                        {parsedPreview.name}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">{parsedPreview.headline}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="font-bold text-slate-400 uppercase text-[10px]">Volume Extraído</span>
                      <p className="text-slate-700 dark:text-slate-300">
                        • {parsedPreview.experiences?.length || 0} Experiências profissionais
                      </p>
                      <p className="text-slate-700 dark:text-slate-300">
                        • {parsedPreview.skills?.length || 0} Categorias de habilidades
                      </p>
                      <p className="text-slate-700 dark:text-slate-300">
                        • {parsedPreview.projects?.length || 0} Projetos estruturados
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: AI PROJECT GENERATOR */}
          {activeTab === 'ai-project' && (
            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Transforme notas de projetos ou links em Estudos de Caso profissionais
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Cole uma descrição informal, repositório do GitHub ou detalhes do que construiu para a IA formatar o problema, a solução, métricas e features.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Descreva o Projeto ou cole o Readme/Ideia *
                </label>
                <textarea
                  rows={6}
                  placeholder="Ex: Criei uma plataforma de agendamento médico com React, Node e PostgreSQL. O problema era fila de espera no telefone. A solução foi criar confirmação via WhatsApp e dashboard em tempo real, reduzindo no-shows em 40%..."
                  value={projectRawText}
                  onChange={(e) => setProjectRawText(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                id="generate-project-ai-btn"
                onClick={handleGenerateProject}
                disabled={isGeneratingProject || !projectRawText.trim()}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white ${currentTheme.primaryBg} ${currentTheme.primaryHover} shadow-md flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50`}
              >
                {isGeneratingProject ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Formatando Case com IA...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Gerar Estudo de Caso</span>
                  </>
                )}
              </button>

              {generatedProjectPreview && (
                <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4 animate-in zoom-in-95">
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
                      {generatedProjectPreview.title}
                    </h4>
                    <button
                      id="add-generated-project-btn"
                      onClick={handleAddGeneratedProject}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Inserir no Portfólio</span>
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    {generatedProjectPreview.tagline}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {generatedProjectPreview.description}
                  </p>
                  {generatedProjectPreview.metrics && (
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      Métrica: {generatedProjectPreview.metrics}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: AI BIO ENHANCER */}
          {activeTab === 'ai-bio' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Tom Desejado da Comunicação
                  </label>
                  <input
                    type="text"
                    value={bioTone}
                    onChange={(e) => setBioTone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Público-Alvo Principal
                  </label>
                  <input
                    type="text"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <button
                id="enhance-bio-btn"
                onClick={handleEnhanceBio}
                disabled={isEnhancingBio}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white ${currentTheme.primaryBg} ${currentTheme.primaryHover} shadow-md flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50`}
              >
                {isEnhancingBio ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Aprimorando com IA...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    <span>Gerar Apresentação Otimizada</span>
                  </>
                )}
              </button>

              {enhancedBioResults && (
                <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4 animate-in zoom-in-95">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Sugestão Gerada por IA
                    </h4>
                    <button
                      id="apply-enhanced-bio-btn"
                      onClick={handleApplyEnhancedBio}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm cursor-pointer"
                    >
                      Aplicar Headline & Bio
                    </button>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      Headline: <span className="font-normal">{enhancedBioResults.optimizedHeadline}</span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      Hero Pitch: <span className="font-normal">{enhancedBioResults.heroPitch}</span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      Bio Completa: <span className="font-normal">{enhancedBioResults.aboutBio}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: MANUAL DIRECT EDITOR */}
          {activeTab === 'manual-edit' && (
            <div className="space-y-6">
              {/* Avatar / Profile Photo Section */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-indigo-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      Foto de Perfil (Avatar)
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500">Preview ao Vivo</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="relative shrink-0">
                    <img
                      src={editableProfile.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"}
                      alt={editableProfile.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 rounded-2xl object-cover ring-2 ring-indigo-500 shadow-md"
                    />
                  </div>

                  <div className="flex-1 w-full space-y-2">
                    <div className="flex items-center gap-2">
                      <label className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs cursor-pointer transition-colors">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Carregar Arquivo de Foto</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async (e) => {
                            if (e.target.files && e.target.files[0]) {
                              try {
                                const optimized = await optimizeAvatarImage(e.target.files[0], 600);
                                setEditableProfile({ ...editableProfile, avatar: optimized });
                              } catch (err: any) {
                                alert(err.message || 'Erro ao carregar imagem');
                              }
                            }
                          }}
                        />
                      </label>

                      <button
                        type="button"
                        onClick={() => {
                          setEditableProfile({
                            ...editableProfile,
                            avatar: initialProfile.avatar,
                          });
                        }}
                        className="px-3 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                        title="Restaurar padrão"
                      >
                        Restaurar Padrão
                      </button>
                    </div>

                    <input
                      type="text"
                      placeholder="Ou cole uma URL direta da imagem (https://...)"
                      value={editableProfile.avatar || ''}
                      onChange={(e) => setEditableProfile({ ...editableProfile, avatar: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    value={editableProfile.name}
                    onChange={(e) => setEditableProfile({ ...editableProfile, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    E-mail de Contato
                  </label>
                  <input
                    type="email"
                    value={editableProfile.email}
                    onChange={(e) => setEditableProfile({ ...editableProfile, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Headline / Título Profissional
                </label>
                <input
                  type="text"
                  value={editableProfile.headline}
                  onChange={(e) => setEditableProfile({ ...editableProfile, headline: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Pitch Curto (Hero)
                </label>
                <textarea
                  rows={3}
                  value={editableProfile.shortPitch}
                  onChange={(e) => setEditableProfile({ ...editableProfile, shortPitch: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Bio / Apresentação Completa
                </label>
                <textarea
                  rows={4}
                  value={editableProfile.bio}
                  onChange={(e) => setEditableProfile({ ...editableProfile, bio: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    GitHub URL
                  </label>
                  <input
                    type="text"
                    value={editableProfile.socials.github || ''}
                    onChange={(e) =>
                      setEditableProfile({
                        ...editableProfile,
                        socials: { ...editableProfile.socials, github: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    LinkedIn URL
                  </label>
                  <input
                    type="text"
                    value={editableProfile.socials.linkedin || ''}
                    onChange={(e) =>
                      setEditableProfile({
                        ...editableProfile,
                        socials: { ...editableProfile.socials, linkedin: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    WhatsApp Link / Número
                  </label>
                  <input
                    type="text"
                    value={editableProfile.socials.whatsapp || ''}
                    onChange={(e) =>
                      setEditableProfile({
                        ...editableProfile,
                        socials: { ...editableProfile.socials, whatsapp: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Projects & Live Links Editor */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-indigo-500" />
                      <span>Links dos Projetos & Aplicações ao Vivo</span>
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Edite ou atualize as URLs ao vivo (Streamlit, Sintonia, BDFin) e repositórios GitHub.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setEditableProfile({
                        ...editableProfile,
                        projects: initialProfile.projects,
                      });
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                    title="Recarrega as configurações e links padrão dos projetos oficiais"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Restaurar Projetos Padrão</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {editableProfile.projects.map((proj, idx) => (
                    <div
                      key={proj.id || idx}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {proj.title}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold">
                          {proj.category}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                            <span>Link da Aplicação (Live URL)</span>
                            {proj.liveUrl && (
                              <a
                                href={proj.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-500 hover:underline flex items-center gap-0.5 text-[10px]"
                              >
                                Testar <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}
                          </div>
                          <input
                            type="text"
                            placeholder="https://..."
                            value={proj.liveUrl || ''}
                            onChange={(e) => {
                              const updated = [...editableProfile.projects];
                              updated[idx] = { ...updated[idx], liveUrl: e.target.value };
                              setEditableProfile({ ...editableProfile, projects: updated });
                            }}
                            className="w-full px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                            <span>Repositório GitHub</span>
                            {proj.githubUrl && (
                              <a
                                href={proj.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-500 hover:underline flex items-center gap-0.5 text-[10px]"
                              >
                                Abrir <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}
                          </div>
                          <input
                            type="text"
                            placeholder="https://github.com/..."
                            value={proj.githubUrl || ''}
                            onChange={(e) => {
                              const updated = [...editableProfile.projects];
                              updated[idx] = { ...updated[idx], githubUrl: e.target.value };
                              setEditableProfile({ ...editableProfile, projects: updated });
                            }}
                            className="w-full px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  id="save-manual-edit-btn"
                  onClick={handleSaveManualEdit}
                  className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white ${currentTheme.primaryBg} ${currentTheme.primaryHover} shadow-md cursor-pointer`}
                >
                  Salvar Alterações no Portfólio
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: BACKUP & JSON */}
          {activeTab === 'export-import' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Exportar e Salvar Configuração do Portfólio
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Faça download do arquivo JSON com todos os seus dados configurados para guardar como backup ou compartilhar.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    id="export-json-btn"
                    onClick={handleExportJSON}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Baixar Backup JSON</span>
                  </button>

                  <label className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 cursor-pointer">
                    <Upload className="w-4 h-4" />
                    <span>Importar Arquivo JSON</span>
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportJSON}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Powered by Gemini AI • Atualizações instantâneas
          </span>
          <button
            id="footer-close-btn"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
