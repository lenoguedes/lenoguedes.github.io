import { UserProfile } from '../types';

export const initialProfile: UserProfile = {
  name: "Leno Guedes",
  headline: "Analista de Dados & Business Intelligence | Planejamento Comercial | SQL, Python, ETL & Power BI",
  shortPitch: "Conecto operação, risco e estratégia por meio da análise de dados, transformando informações complexas em indicadores claros, automação e decisões estratégicas orientadas por evidências.",
  bio: "Profissional de Dados com trajetória sólida e visão sistêmica conectando Operação, Prevenção a Riscos e Fraudes e Planejamento Comercial. Especialista em modelagem e consultas avançadas em SQL, pipelines de ETL (SSIS), automação de rotinas analíticas em Python (Pandas, NumPy, PyAutoGUI, openpyxl) e dashboards estratégicos em Power BI. Atuação com foco em apuração de campanhas, cálculos de remuneração variável (RV), análise de churn histórico e estudos de correlação para suporte à tomada de decisão executiva.",
  aboutStory: [
    "Iniciei minha trajetória em tecnologia atuando em Service Desk, onde desenvolvi uma base sólida em suporte técnico, análise de incidentes, gestão de acessos, configuração e monitoramento de ambientes operacionais. Contribuí na criação de soluções internas para otimizar rotinas de atendimento, tratamento de falhas massivas, melhoria no registro de chamados e controle de patrimônio de equipamentos de TI. Foi nesse contexto que iniciei minha formação em Tecnologia em Banco de Dados, direcionando minha carreira para uma atuação cada vez mais analítica e orientada a dados.",
    "Evoluí para a área de Prevenção a Riscos e Fraudes, atuando em ambientes de alta criticidade e grande volumetria de dados. Trabalhei na análise de eventos de brute force, investigação de ocorrências em ferramentas corporativas e monitoramento de transações financeiras, com foco na detecção de ataques, identificação de anomalias, validação de informações e garantia da integridade dos dados. Essa experiência fortaleceu minha capacidade analítica, visão sistêmica e atuação baseada em evidências para suporte à tomada de decisão e mitigação de riscos em contextos sensíveis.",
    "Atualmente atuo em Planejamento Comercial, ampliando minha atuação para indicadores de desempenho e estratégia de negócio. Sou responsável pela apuração de campanhas, cálculos de remuneração variável (RV), construção e validação de métricas, além de análises de churn histórico e estudos de correlação entre evasão de clientes e produtividade de operadores, lojas e regionais. Também atuo na otimização e documentação de processos, automação de rotinas analíticas e sustentação de painéis e dashboards, garantindo a confiabilidade dos dados que apoiam decisões estratégicas.",
    "Minha trajetória conecta operação, risco e estratégia por meio da análise de dados, com foco em transformar informações complexas em indicadores claros, gerar eficiência operacional e apoiar decisões orientadas por dados. Sigo aprofundando meus conhecimentos em SQL, ETL, modelagem e automação, com o objetivo de atuar de forma cada vez mais estratégica na área de Dados."
  ],
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  location: "Florianópolis - SC, Brasil (Disponível Remoto / Híbrido)",
  email: "lenoguedesg@gmail.com",
  phone: "+55 (48) 98442-2718",
  availability: "available",
  availabilityText: "Disponível para novos desafios e projetos estratégicos",
  yearsOfExperience: 5,
  resumeUrl: "#",
  socials: {
    github: "https://github.com/lenoguedes",
    linkedin: "https://www.linkedin.com/in/lenoguedes",
    twitter: "https://twitter.com/lenoguedes",
    website: "",
    whatsapp: "https://wa.me/5548984422718"
  },
  stats: [
    { label: "Pilares Integrados", value: "Operação • Risco • Estratégia", description: "Visão sistêmica ponta a ponta" },
    { label: "Aplicações em Produção", value: "5 Projetos Reais", description: "Acessíveis online para teste" },
    { label: "Automação & ETL", value: "Python + SSIS", description: "Otimização de rotinas analíticas" },
    { label: "Tomada de Decisão", value: "Data-Driven", description: "Dashboards e inteligência estratégica" }
  ],
  skills: [
    {
      category: "Bancos de Dados, SQL & ETL",
      iconName: "Database",
      items: [
        { name: "SQL & Consultas Avançadas", level: 60, years: 3, isKey: true },
        { name: "Banco de Dados Relacional (SQL Server/Postgres)", level: 40, years: 2, isKey: true },
        { name: "SSIS (SQL Server Integration Services)", level: 40, years: 2 },
        { name: "ETL (Extração, Transformação e Carga)", level: 60, years: 3 },
        { name: "Modelagem & Arquitetura de Dados", level: 60, years: 3 },
        { name: "Limpeza e Tratamento de Dados", level: 60, years: 3 }
      ]
    },
    {
      category: "Python & Automação Analítica",
      iconName: "Cpu",
      items: [
        { name: "Python para Análise de Dados", level: 60, years: 3, isKey: true },
        { name: "Pandas & NumPy", level: 40, years: 2 },
        { name: "Automação de Rotinas (PyAutoGUI)", level: 60, years: 3 },
        { name: "Manipulação de Planilhas (openpyxl)", level: 100, years: 5, isKey: true },
        { name: "Scikit-Learn (Modelagem e ML)", level: 40, years: 2 },
        { name: "Jupyter Notebook & VS Code", level: 60, years: 3 }
      ]
    },
    {
      category: "Business Intelligence & Estratégia",
      iconName: "Layout",
      items: [
        { name: "Power BI & DAX", level: 20, years: 1 },
        { name: "Dashboards & Data Visualization", level: 40, years: 2 },
        { name: "Excel Avançado & Modelos Financeiros", level: 100, years: 5, isKey: true },
        { name: "KPIs & Métricas de Negócio", level: 40, years: 2, isKey: true },
        { name: "Análise de Churn Histórico & Evasão", level: 20, years: 1 },
        { name: "Apuração de Campanhas & Remuneração Variável (RV)", level: 20, years: 1 }
      ]
    },
    {
      category: "Risco, Governança & Ferramentas",
      iconName: "Cloud",
      items: [
        { name: "Prevenção a Riscos & Detecção de Fraudes", level: 20, years: 1 },
        { name: "Auditoria & Integridade de Transações", level: 20, years: 1 },
        { name: "Git & GitHub (Versionamento)", level: 80, years: 4, isKey: true },
        { name: "Docker & Ambientes Containerizados", level: 60, years: 3 },
        { name: "Otimização e Documentação de Processos", level: 80, years: 4, isKey: true }
      ]
    }
  ],
  projects: [
    {
      id: "proj-streamlit-fibonacci",
      title: "Dashboard de Ações & Projeções de Fibonacci",
      tagline: "Decisões no mercado financeiro com rigor matemático: rastreamento de ativos e alvos automáticos de Fibonacci",
      description: "Aplicação analítica externa desenvolvida em Python e Streamlit para análise quantitativa e técnica de ativos da B3 (como PETR4.SA, VALE3.SA) e do mercado global. Calcula algoritmicamente projeções matemáticas de Fibonacci (1° Alvo 100% e 2° Alvo 161,8% baseados no pivô entre Topo B e Fundo A), desenhando suportes, resistências e osciladores técnicos em gráficos dinâmicos.",
      category: "IA / Dados",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80",
      technologies: ["Python", "Streamlit", "Plotly", "yfinance (Yahoo Finance)", "Pandas", "Análise Quantitativa"],
      liveUrl: "https://i7qrvxaexuqfix4zjxrtru.streamlit.app/",
      githubUrl: "https://github.com/lenoguedes/dashboard-acoes-streamlit",
      featured: true,
      problemSolved: "Cálculo manual e demorado de projeções matemáticas de pivôs e alvos de Fibonacci em plataformas de trading convencionais pagas.",
      solutionDetails: "Algoritmo em Python que captura cotações históricas em tempo real, identifica extremidades de topos e fundos e traça alvos percentuais de Fibonacci instantaneamente.",
      metrics: "Plotagem dinâmica de alvos de 100% e 161,8% com carregamento instantâneo de séries temporais completas.",
      keyFeatures: [
        "Cálculo Algorítmico de Fibonacci: Identificação de pivô e projeção matemática imediata de 1° Alvo (100%) e 2° Alvo (161,8%).",
        "Ampla Cobertura de Ativos: Suporte a ações da B3 (tickers com sufixo .SA), mercado americano, commodities e criptomoedas.",
        "Gráficos Dinâmicos com Plotly: Visualização rica com velas (candlesticks), médias móveis exponenciais e zoom temporal flexível.",
        "Interface Responsiva e Ágil: Deploy cloud serverless no Streamlit com atualização em tempo real de cotações de mercado."
      ],
      role: "Desenvolvedor Python & Analista Quantitativo",
      year: "2024"
    },
    {
      id: "proj-ibge-carousel",
      title: "IBGE Data Analysis",
      tagline: "Dados públicos transformados em autoridade: da análise estatística ao carrossel pronto para o LinkedIn",
      description: "Aplicação analítica que integra pipelines de extração de dados públicos das APIs oficiais do IBGE com um estúdio visual de criação e diagramação de carrosséis para o LinkedIn. Transforma indicadores demográficos, econômicos e censitários complexos em narrativas visuais orientadas a dados e prontas para publicação.",
      category: "IA / Dados",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      technologies: ["TypeScript", "APIs do IBGE", "Python / Node.js", "Data Visualization", "Tailwind CSS", "Export PDF/Canvas"],
      liveUrl: "https://ais-pre-oydhcodgwvr6ymp532m7qq-773134756843.us-east1.run.app",
      githubUrl: "https://github.com/lenoguedes/ibge-data-analysis-carousel-studio",
      featured: true,
      problemSolved: "Dificuldade de democratizar dados públicos oficiais e o esforço manual demorado para diagramar estatísticas complexas em formatos visuais atrativos para redes profissionais.",
      solutionDetails: "Conexão direta com as APIs públicas do IBGE, tratamento dos dados em tempo real e um estúdio visual tipo canva que formata tabelas e insights em lâminas de carrossel de alta resolução.",
      metrics: "Redução de horas de design e análise para minutos na produção de conteúdo técnico fundamentado em dados oficiais.",
      keyFeatures: [
        "Consumo Automatizado de Dados do IBGE: Extração direta de séries temporais, dados demográficos e indicadores socioeconômicos.",
        "Tratamento & Síntese Estatística: Cálculo automático de taxas de variação, distribuição geográfica e destaques analíticos.",
        "Estúdio de Criação de Carrosséis: Customização visual de tipografia, paletas temáticas, ícones e destaques estatísticos.",
        "Exportação em Alta Fidelidade: Geração imediata de documentos em PDF e pacotes de imagens prontos para upload direto no LinkedIn."
      ],
      role: "Especialista em Dados & Desenvolvedor",
      year: "2024"
    },
    {
      id: "proj-dbfin-v1",
      title: "DBFin v1",
      tagline: "Previsibilidade para o seu dinheiro: controle o mês atual e planeje os próximos sem surpresas",
      description: "Aplicação completa de gestão financeira estruturada em competências mensais, permitindo enxergar tanto o fluxo de caixa do dia a dia quanto a projeção detalhada dos próximos meses. Oferece controle estrito de previsto vs. realizado, parcelamentos inteligentes de até 120x, conciliação e sincronização em nuvem.",
      category: "Fintech / Dados",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "TypeScript", "PostgreSQL / Cloud", "Google Auth", "Tailwind CSS", "Recharts"],
      liveUrl: "https://ais-pre-ktc4uci4itswzynhzvjxbx-773134756843.us-east1.run.app/",
      githubUrl: "https://github.com/lenoguedes/dbfin",
      featured: true,
      problemSolved: "Falta de previsibilidade orçamentária para meses futuros, descontrole no acúmulo de compras parceladas e dificuldade de conciliação entre saldo em conta e faturas de cartão.",
      solutionDetails: "Arquitetura centrada em competências mensais dinâmicas, com projeção antecipada de despesas recorrentes e parcelas futuras, controle transacional de status e isolamento de dados com autenticação segura.",
      metrics: "Previsibilidade orçamentária para múltiplos meses à frente e cálculo em tempo real da taxa de economia e sobra líquida.",
      keyFeatures: [
        "Planejamento por Competências Mensais: Navegação intuitiva entre meses e geração automática de competências a partir de modelos pré-definidos de gastos.",
        "Projetado vs. Realizado: Status de transação (Previsto e Efetivado/OK) para visualizar tanto o saldo real em conta quanto o saldo projetado ao encerramento do mês.",
        "Gestão de Recorrências e Parcelamentos: Cadastro de despesas fixas recorrentes ou compras parceladas em até 120 vezes, com lançamento e numeração automática nos meses seguintes.",
        "Classificação e Meios de Pagamento: Organização por categorias, subcategorias e formas de pagamento (Pix, Débito, Crédito, Boleto, Dinheiro) evitando duplicidade com a fatura.",
        "Métricas Financeiras & Sincronização em Nuvem: Indicadores de receitas, despesas, sobra financeira e taxa de economia em tempo real, além de autenticação Google e backups em JSON/Drive."
      ],
      role: "Engenheiro de Dados & Desenvolvedor Full-Stack",
      year: "2024"
    },
    {
      id: "proj-tarefas-semanais",
      title: "Tarefas Semanais",
      tagline: "Domine o que você controla. Otimize sua energia para o que realmente importa",
      description: "Sistema inteligente de gestão de prioridades e disciplina pessoal baseado na Dicotomia do Controle (princípio estóico). Em vez de apenas listar tarefas, atua como um filtro cognitivo que direciona foco, elimina desperdício de energia e metrifica sua consistência diária por meio de uma matriz filosófica de 3 eixos e constelação cósmica de virtudes.",
      category: "Produtividade",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "TypeScript", "Filosofia Estóica", "Tailwind CSS", "Data Analytics", "Canvas/SVG"],
      liveUrl: "https://ais-pre-gg3r3p4wwslzcbb76ucovb-773134756843.us-east1.run.app/",
      githubUrl: "https://github.com/lenoguedes/tarefas-semanais",
      featured: true,
      problemSolved: "Listas de tarefas tradicionais geram ansiedade e dispersão ao tratar afazeres triviais, urgências de terceiros e preocupações incontroláveis com o mesmo nível de importância.",
      solutionDetails: "Algoritmo de discernimento estóico que filtra itens por temporalidade, capacidade de controle e dever moral, calculando um Score de Prioridade e distribuindo as tarefas em quadrantes estratégicos de ação.",
      metrics: "Direcionamento cirúrgico de energia para ações sob controle direto, com cálculo diário de taxa de consistência e equilíbrio nas 5 áreas da vida.",
      keyFeatures: [
        "Filtro de Discernimento (3 Eixos): Avaliação de cada tarefa em Temporalidade (Presente/Futuro/Passado), Capacidade de Ação (Controlo/Não Controlo) e Alinhamento de Dever (No Alvo/Fora dele).",
        "Cálculo de Score de Prioridade: Algoritmo pondera respostas da matriz, gera índice numérico e ordena automaticamente o que exige ação imediata vs. preocupações inúteis.",
        "Diagnóstico por Quadrantes Estratégicos: Separação em Foco Vital (ações imediatas sob controle), Apoio & Delegação, Planejamento Nobre e Alerta de Desvios de energia.",
        "Constelação de Foco Celestial: Indicador astronômico interativo onde cada dever cumprido acende uma estrela associada às virtudes estóicas (Sabedoria, Coragem, Temperança e Justiça).",
        "Gestor de Rotinas e Hábitos: Acompanhamento de hábitos recorrentes, cálculo de aderência diária e leitura clara de evolução por áreas (intelectual, saúde, carreira, emocional e relacionamentos)."
      ],
      role: "Arquiteto de Soluções & Desenvolvedor",
      year: "2024"
    },
    {
      id: "proj-sintonia-live",
      title: "Sintonia",
      tagline: "Menos ruído, mais conexão: inteligência emocional para o seu relacionamento",
      description: "O Sintonia é um espaço exclusivo e privado projetado para casais cultivarem empatia, alinharem sentimentos e resolverem desafios com leveza e maturidade. A plataforma oferece ambiente interligado com sincronização em tempo real, mediador de conversas por Inteligência Artificial e repertório positivo de acordos e combinados construídos pelo casal.",
      category: "IA / Produto",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "TypeScript", "IA Generativa", "Vite", "Tailwind CSS", "Realtime Sync"],
      liveUrl: "https://ais-pre-2xljofblir66hcpvloeod4-773134756843.us-east1.run.app",
      githubUrl: "https://github.com/lenoguedes/sintonia",
      featured: true,
      problemSolved: "Ruídos de comunicação, acúmulo de cobranças diárias e discussões de relacionamento que escalam por falta de escuta ativa e clareza nas necessidades emocionais de cada parceiro.",
      solutionDetails: "Construção de uma plataforma relacional segura com check-ins emocionais preventivos, DR Inteligente mediada por IA para identificar a causa raiz sem julgamento e módulo de acordos mútuos.",
      metrics: "Prevenção ativa de desgastes emocionais, registro transparente de combinados e acompanhamento contínuo da evolução da reciprocidade do casal.",
      keyFeatures: [
        "Sintonia em Tempo Real: Ambiente interligado onde os parceiros sincronizam contas com segurança para acompanhar o bem-estar mútuo em tempo real.",
        "Check-in Emocional Diário: Registro simples e visual de humor, nível de energia e necessidades do dia, evitando cobranças antes de mal-entendidos.",
        "DR Inteligente mediada por IA: Mediador neutro que analisa a situação, identifica a causa raiz do conflito, traduz dores em necessidades reais e sugere passos práticos de diálogo e reconciliação.",
        "Histórico de Acordos e Resoluções: Repertório positivo com todas as soluções pacíficas encontradas nas DRs, consolidando os combinados e aprendizados do casal.",
        "Espelho Oscilante e Insights do Casal: Gráficos e análises mapeando a evolução da sintonia ao longo das semanas, destacando padrões emocionais, reciprocidade e pontos de atenção."
      ],
      role: "Idealizador, Desenvolvedor & UX",
      year: "2024"
    }
  ],
  experiences: [
    {
      id: "exp-planejamento-pleno",
      role: "Analista de Planejamento Comercial Pleno",
      company: "Ouze (Studio Z)",
      location: "Florianópolis, SC (Disponível para Híbrido / Remoto)",
      period: "Mai/2026 – Atual",
      isCurrent: true,
      description: "Atuação em inteligência de mercado, engenharia analítica e automação, conectando regras de negócio, dados e compliance financeiro.",
      highlights: [
        "Automação e Engenharia de Dados: Desenvolvimento de scripts em Python para atualização de análises, relatórios e modelos de produção e cálculo. Evolução de consultas SQL e pacotes SSIS para automatizar a consolidação e validação de bases de faturamento, metas e forecast, reduzindo o tempo de processamento.",
        "Remuneração Variável (RV) e Incentivos: Gestão integral da apuração e governança das regras de negócio de RV e Campanhas de Incentivo, garantindo compliance financeiro e atuando como ponto focal entre Negócios, Auditoria, Comunicação e TI.",
        "Inteligência de Mercado & Churn: Condução de análises sobre o comportamento de churn, tendências de produção e planta apta, gerando informações para o conhecimento de fatos e causas e redirecionamento de planos de ações estratégicas."
      ],
      technologies: [
        "SQL",
        "Python (Pandas, NumPy, openpyxl)",
        "SSIS",
        "ETL",
        "Remuneração Variável (RV)",
        "Análise de Churn",
        "Planejamento Comercial"
      ]
    },
    {
      id: "exp-planejamento-jr",
      role: "Analista de Planejamento Comercial Júnior",
      company: "Ouze (Studio Z)",
      location: "Florianópolis, SC",
      period: "Jan/2026 – Mai/2026",
      isCurrent: false,
      description: "Monitoramento analítico de KPIs comerciais e otimização de consultas SQL para apuração de incentivos e forecast.",
      highlights: [
        "Monitoramento diário de KPIs de performance comercial (receita, cancelamentos, penetração de serviços e atingimento metas de lojas).",
        "Construção e otimização de consultas SQL para forecast, apuração de Campanhas de Incentivo e Remuneração Variável."
      ],
      technologies: [
        "SQL",
        "KPIs Comerciais",
        "Forecast",
        "Campanhas de Incentivo",
        "Remuneração Variável"
      ]
    },
    {
      id: "exp-riscos",
      role: "Analista de Prevenção de Perdas e Fraudes Júnior",
      company: "Ouze (Studio Z)",
      location: "Florianópolis, SC",
      period: "Set/2025 – Jan/2026",
      isCurrent: false,
      description: "Manipulação de dados transacionais, auditoria e identificação de comportamentos fraudulentos em transações financeiras.",
      highlights: [
        "Manipulação de dados transacionais com foco em auditoria, identificação e monitoramento de comportamentos atípicos ou fraudulentos via SQL.",
        "Análise transacional e bloqueio de estabelecimentos, o que gerou uma redução de 70% na exposição de risco, garantindo uma maior conformidade regulatória nas transações."
      ],
      technologies: [
        "SQL",
        "Auditoria de Dados",
        "Prevenção a Fraudes",
        "Análise Transacional",
        "Mitigação de Risco"
      ]
    },
    {
      id: "exp-servicedesk",
      role: "Técnico de Suporte Computacional (Service Desk)",
      company: "Ouze (Studio Z)",
      location: "Florianópolis, SC",
      period: "Set/2022 – Set/2025",
      isCurrent: false,
      description: "Resolução de incidentes críticos, gestão de acessos e aplicação de automações de dados para redução de backlog.",
      highlights: [
        "Resolução de falhas massivas e incidentes em ambiente de produção, gestão de acessos e configuração de equipamentos de TI e sistemas de faturamento em lojas.",
        "Destaque pela proatividade em aplicar engenharia de dados para automatizar demandas recorrentes da TI, reduzindo o backlog de chamados."
      ],
      technologies: [
        "Engenharia de Dados",
        "Automação",
        "Service Desk",
        "Gestão de Incidentes",
        "Sistemas de Faturamento"
      ]
    }
  ],
  education: [
    {
      id: "edu-banco-de-dados",
      degree: "Tecnologia em Banco de Dados",
      institution: "Senac",
      period: "2024 – 2026 (Conclusão: Junho/2026)",
      location: "Florianópolis, SC",
      status: "Concluído",
      description: "Formação superior com grade 100% concluída com excelência acadêmica nas disciplinas de Engenharia, Administração e Mineração de Dados, Aprendizado de Máquinas e Bancos NoSQL.",
      highlights: [
        "Desempenho Acadêmico de Destaque: Notas máximas (10,0) em Banco de Dados para Tomada de Decisão, Mineração de Dados, Algoritmos e Programação I e Projetos Integradores.",
        "Projetos Aplicados: Desenvolvimento de Projetos Integradores em Diagnóstico Tecnológico (Nota 10), Desenvolvimento (Nota 9,9), Implantação (Nota 9,9), Ciência de Dados (Nota 9,2) e Apoio Decisório (Nota 9,6).",
        "Disciplinas Avançadas Concluídas: Aprendizado de Máquinas (9,6), Bancos de Dados Não Relacionais (9,6), Administração de Banco de Dados (9,4), Programação de Banco de Dados (8,6) e Segurança de Dados & Big Data (7,6)."
      ],
      keyDisciplines: [
        { name: "Banco de Dados para Tomada de Decisão", grade: "10.0", period: "2º Sem/2025" },
        { name: "Mineração de Dados", grade: "10.0", period: "1º Sem/2025" },
        { name: "Aprendizado de Máquinas", grade: "9.6", period: "2º Sem/2025" },
        { name: "Bancos de Dados Não Relacionais (NoSQL)", grade: "9.6", period: "1º Sem/2026" },
        { name: "Administração de Banco de Dados", grade: "9.4", period: "2º Sem/2025" },
        { name: "Projeto Integrador: Apoio à Decisão", grade: "9.6", period: "1º Sem/2026" },
        { name: "Projeto Integrador: Ciência de Dados", grade: "9.2", period: "2º Sem/2025" },
        { name: "Algoritmos e Programação I e II", grade: "10.0", period: "2024" },
        { name: "Programação de Banco de Dados & SQL", grade: "8.6", period: "1º Sem/2025" },
        { name: "Segurança de Dados e Big Data", grade: "7.6", period: "1º Sem/2026" }
      ]
    },
    {
      id: "edu-gestao-ti",
      degree: "Tecnologia em Gestão da Tecnologia da Informação",
      institution: "Senac",
      period: "2018 – 2025",
      location: "Florianópolis, SC",
      status: "Disciplinas de Governança & Gestão Aproveitadas",
      description: "Base sólida em Governança de TI, Gerenciamento de Projetos, Gestão Financeira, Infraestrutura e Direito Digital, com equivalência e continuidade direcionadas à Engenharia de Dados.",
      highlights: [
        "Excelência em Fundamentos de Gestão: Média 9,1 em Tecnologia da Informação, 8,8 em Pesquisa, Tecnologia e Sociedade, 8,8 em Ética e Sustentabilidade e 8,5 em Empreendedorismo e Inovação.",
        "Gestão Ágil e Estratégica: Conclusão de Gerenciamento de Projetos (Nota 8,4), Introdução à Ciência de Serviços (Nota 8,7) e Análise e Desenvolvimento de Sistemas (Nota 7,9)."
      ],
      keyDisciplines: [
        { name: "Tecnologia da Informação", grade: "9.1", period: "2018" },
        { name: "Introdução à Ciência de Serviços", grade: "8.7", period: "2018" },
        { name: "Empreendedorismo, Inovação e Estratégia", grade: "8.5", period: "1º Sem/2025" },
        { name: "Gerenciamento de Projetos", grade: "8.4", period: "2º Sem/2025" },
        { name: "Análise e Desenvolvimento de Sistemas", grade: "7.9", period: "2018" },
        { name: "Direito Digital", grade: "7.5", period: "2018" }
      ]
    }
  ],
  certifications: [
    {
      id: "cert-os-basics",
      title: "Operating Systems Basics",
      issuer: "Cisco",
      year: "2025",
      issueDate: "Maio/2025",
      url: "https://www.credly.com/badges/ab411fcc-36b7-4340-a281-e3a982ef19d2/linked_in_profile",
      skills: [
        "Computadores portáteis",
        "Conhecimento básico de hardware e software",
        "Práticas de segurança cibernética e proteção de dados",
        "Desktop Computers"
      ]
    },
    {
      id: "cert-intro-ds",
      title: "Introdução à Ciência de Dados 3.0",
      issuer: "Data Science Academy",
      year: "2022",
      issueDate: "Novembro/2022",
      credentialId: "0637ff68e8b0c4f83f005e46c",
      url: "https://mycourse.app/vSJj3m3u9QrsqSqLA",
      skills: [
        "ETL (Extração, transformação e carregamento)",
        "Modelos de Machine Learning Básicos"
      ]
    },
    {
      id: "cert-hw-fundamentals",
      title: "Fundamentos do Hardware do Computador",
      issuer: "Cisco Networking Academy",
      year: "2024",
      issueDate: "Março/2024",
      url: "https://www.credly.com/earner/earned/badge/e602e4a8-7c2b-42ff-bc64-2128d4c10c23",
      skills: [
        "Manutenção do dispositivo",
        "Computadores portáteis"
      ]
    },
    {
      id: "cert-py-fundamentals",
      title: "Fundamentos do Python 1",
      issuer: "Cisco Networking Academy",
      year: "2024",
      issueDate: "Maio/2024",
      url: "https://www.credly.com/badges/09074a36-30c1-4ab5-a77b-a383db8f72a2",
      skills: [
        "Pensamento analítico",
        "Pensamento Algorítmico",
        "Projetar, desenvolver e depurar scripts",
        "Melhores práticas em programação",
        "Programação básica em Python"
      ]
    }
  ],
  testimonials: [
    {
      id: "test-1",
      author: "Rodrigo Mendonça",
      role: "Gerente de Planejamento & Estratégia",
      company: "Operações Corporativas",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content: "O Leno possui uma capacidade singular de conectar a operação diária à visão estratégica. Sua habilidade em construir automações com Python e SQL, aliada à precisão nos cálculos de campanhas e RV, transformou a velocidade e a confiabilidade do nosso planejamento."
    },
    {
      id: "test-2",
      author: "Camila Duarte",
      role: "Coordenadora de Prevenção e Riscos",
      company: "Gestão de Riscos & Fraudes",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      content: "Trabalhar com o Leno em ambientes de alta criticidade traz segurança. Seu rigor analítico na investigação de anomalias, análise de brute force e integridade de dados foi fundamental para mitigar perdas e fundamentar decisões técnicas embasadas em fatos."
    }
  ],
  languages: [
    { language: "Português", level: "Nativo" },
    { language: "Inglês", level: "Técnico / Leitura e Escrita Profissional" },
    { language: "Espanhol", level: "Avançado (Conversação Fluente)" }
  ],
  interests: [
    "SQL Avançado & Modelagem Relacional",
    "Pipelines ETL com SSIS & Python",
    "Estudos de Churn & Modelagem Preditiva",
    "Automação de Processos (PyAutoGUI & openpyxl)",
    "Business Intelligence & Estratégia Comercial",
    "Prevenção a Riscos & Detecção de Fraudes"
  ]
};
