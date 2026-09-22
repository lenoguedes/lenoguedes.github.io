export type Language = 'pt' | 'en';

export interface TranslationDict {
  nav: {
    inicio: string;
    projetos: string;
    habilidades: string;
    sobre: string;
    experiencia: string;
    formacao: string;
    contato: string;
    cv: string;
    colorPalette: string;
    darkModeLight: string;
    darkModeDark: string;
    languageToggle: string;
  };
  hero: {
    badge: string;
    changeAvatar: string;
    viewProjects: string;
    talkToMe: string;
    downloadCV: string;
    stats: {
      pillars: string;
      pillarsDesc: string;
      realProjects: string;
      realProjectsDesc: string;
      automation: string;
      automationDesc: string;
      decision: string;
      decisionDesc: string;
    };
  };
  projects: {
    sectionTitle: string;
    subtitle: string;
    all: string;
    liveDemo: string;
    githubCode: string;
    viewDetails: string;
    metrics: string;
    techStack: string;
  };
  skills: {
    sectionTitle: string;
    subtitle: string;
    competencies: string;
  };
  about: {
    sectionTitle: string;
    subtitle: string;
    aboutMe: string;
    strategicVision: string;
    languages: string;
  };
  experience: {
    sectionTitle: string;
    subtitle: string;
    current: string;
    highlights: string;
    technologies: string;
  };
  education: {
    sectionTitle: string;
    subtitle: string;
    degrees: string;
    certifications: string;
    viewGrade: string;
    verifyCredential: string;
    competencies: string;
    gradeText: string;
  };
  contact: {
    sectionTitle: string;
    subtitle: string;
    sendMessage: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    successMessage: string;
    quickChannels: string;
    availability: string;
  };
  footer: {
    rights: string;
    backToTop: string;
  };
}

export const translations: Record<Language, TranslationDict> = {
  pt: {
    nav: {
      inicio: 'Início',
      projetos: 'Projetos',
      habilidades: 'Skills',
      sobre: 'Sobre',
      experiencia: 'Experiência',
      formacao: 'Formação',
      contato: 'Contato',
      cv: 'CV',
      colorPalette: 'Mudar paleta de cores',
      darkModeLight: 'Mudar para modo claro',
      darkModeDark: 'Mudar para modo escuro',
      languageToggle: 'Mudar idioma para Inglês (Switch to English)',
    },
    hero: {
      badge: 'Disponível para Projetos & Posições Estratégicas',
      changeAvatar: 'Trocar foto',
      viewProjects: 'Explorar Projetos Reais',
      talkToMe: 'Entrar em Contato',
      downloadCV: 'Visualizar Currículo (PDF)',
      stats: {
        pillars: 'Operação • Risco • Estratégia',
        pillarsDesc: 'Visão sistêmica ponta a ponta',
        realProjects: '5 Projetos Reais',
        realProjectsDesc: 'Acessíveis online para teste',
        automation: 'Python + SSIS',
        automationDesc: 'Otimização de rotinas analíticas',
        decision: 'Data-Driven',
        decisionDesc: 'Dashboards e inteligência estratégica',
      },
    },
    projects: {
      sectionTitle: 'Projetos em Produção',
      subtitle: 'Aplicações reais desenvolvidas para otimização de fluxos, engenharia de dados e suporte à decisão.',
      all: 'Todos',
      liveDemo: 'Testar Online',
      githubCode: 'Ver Código',
      viewDetails: 'Ver Detalhes do Projeto',
      metrics: 'Métricas de Impacto',
      techStack: 'Stack Tecnológica',
    },
    skills: {
      sectionTitle: 'Competências Técnicas',
      subtitle: 'Domínio prático em Bancos de Dados, Programação Python, Pipelines de ETL e Modelagem de Negócio.',
      competencies: 'Competências',
    },
    about: {
      sectionTitle: 'Trajetória Profissional',
      subtitle: 'Conexão entre suporte operacional, mitigação de riscos e inteligência de planejamento comercial.',
      aboutMe: 'Sobre Mim',
      strategicVision: 'Visão Estratégica',
      languages: 'Idiomas',
    },
    experience: {
      sectionTitle: 'Experiência Profissional',
      subtitle: 'Atuação prática em ambientes corporativos de grande escala na Ouze (Studio Z).',
      current: 'Atual',
      highlights: 'Principais Entregas & Impacto',
      technologies: 'Tecnologias Utilizadas',
    },
    education: {
      sectionTitle: 'Formação & Certificações',
      subtitle: 'Excelência acadêmica em Tecnologia em Banco de Dados e credenciais oficiais verificadas.',
      degrees: 'Graduação & Cursos',
      certifications: 'Certificações Oficiais',
      viewGrade: 'Grade Oficial & Notas Avaliadas',
      verifyCredential: 'Credencial',
      competencies: 'Competências associadas:',
      gradeText: 'disciplinas',
    },
    contact: {
      sectionTitle: 'Vamos Conversar?',
      subtitle: 'Estou aberto a oportunidades profissionais, desafios em dados e projetos estratégicos.',
      sendMessage: 'Enviar Mensagem Direta',
      nameLabel: 'Seu Nome',
      namePlaceholder: 'Como posso te chamar?',
      emailLabel: 'Seu E-mail Corporativo ou Pessoal',
      emailPlaceholder: 'seu.email@empresa.com',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Conte-me sobre seu projeto, oportunidade ou desafio analítico...',
      sendButton: 'Enviar Mensagem',
      sending: 'Enviando...',
      successMessage: 'Mensagem enviada com sucesso! Responderei em breve.',
      quickChannels: 'Canais Rápidos',
      availability: 'Disponibilidade Atual',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      backToTop: 'Voltar ao Topo',
    },
  },
  en: {
    nav: {
      inicio: 'Home',
      projetos: 'Projects',
      habilidades: 'Skills',
      sobre: 'About',
      experiencia: 'Experience',
      formacao: 'Education',
      contato: 'Contact',
      cv: 'CV / Resume',
      colorPalette: 'Change color palette',
      darkModeLight: 'Switch to light mode',
      darkModeDark: 'Switch to dark mode',
      languageToggle: 'Mudar para Português (Switch to Portuguese)',
    },
    hero: {
      badge: 'Available for Strategic Positions & Projects',
      changeAvatar: 'Change photo',
      viewProjects: 'Explore Real Projects',
      talkToMe: 'Get in Touch',
      downloadCV: 'View Resume (PDF)',
      stats: {
        pillars: 'Operations • Risk • Strategy',
        pillarsDesc: 'End-to-end systemic business view',
        realProjects: '5 Live Projects',
        realProjectsDesc: 'Online and accessible for testing',
        automation: 'Python + SSIS',
        automationDesc: 'Analytical routine automation',
        decision: 'Data-Driven',
        decisionDesc: 'Dashboards & strategic intelligence',
      },
    },
    projects: {
      sectionTitle: 'Production Projects',
      subtitle: 'Real applications built for workflow optimization, data engineering, and decision intelligence.',
      all: 'All',
      liveDemo: 'Live Demo',
      githubCode: 'Source Code',
      viewDetails: 'View Project Details',
      metrics: 'Impact Metrics',
      techStack: 'Tech Stack',
    },
    skills: {
      sectionTitle: 'Technical Skills',
      subtitle: 'Hands-on expertise in Databases, Python Programming, ETL Pipelines, and Business Modeling.',
      competencies: 'Competencies',
    },
    about: {
      sectionTitle: 'Professional Background',
      subtitle: 'Connecting technical operations, risk mitigation, and commercial planning intelligence.',
      aboutMe: 'About Me',
      strategicVision: 'Strategic Vision',
      languages: 'Languages',
    },
    experience: {
      sectionTitle: 'Professional Experience',
      subtitle: 'Hands-on trajectory across high-scale corporate environments at Ouze (Studio Z).',
      current: 'Current',
      highlights: 'Key Deliverables & Business Impact',
      technologies: 'Technologies Used',
    },
    education: {
      sectionTitle: 'Education & Certifications',
      subtitle: 'Academic excellence in Database Technology and verified official credentials.',
      degrees: 'Academic Degrees & Courses',
      certifications: 'Official Certifications',
      viewGrade: 'Official Curriculum & Verified Grades',
      verifyCredential: 'Badge / Credential',
      competencies: 'Associated Competencies:',
      gradeText: 'courses',
    },
    contact: {
      sectionTitle: "Let's Connect",
      subtitle: 'I am open to professional opportunities, data engineering challenges, and strategic projects.',
      sendMessage: 'Send a Direct Message',
      nameLabel: 'Your Name',
      namePlaceholder: 'How should I address you?',
      emailLabel: 'Your Email',
      emailPlaceholder: 'your.email@company.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project, opportunity, or analytical challenge...',
      sendButton: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Message sent successfully! I will reply shortly.',
      quickChannels: 'Quick Contact',
      availability: 'Current Availability',
    },
    footer: {
      rights: 'All rights reserved.',
      backToTop: 'Back to Top',
    },
  },
};
