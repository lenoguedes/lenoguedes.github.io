import { UserProfile } from '../types';

export const englishProfile: UserProfile = {
  name: "Leno Guedes",
  headline: "Data & Business Intelligence Analyst | Commercial Planning | SQL, Python, ETL & Power BI",
  shortPitch: "I bridge technical operations, risk mitigation, and commercial strategy through advanced data analytics—translating complex datasets into actionable indicators, automated routines, and evidence-driven decisions.",
  bio: "Data professional with a proven track record and systemic perspective connecting Operations, Risk & Fraud Prevention, and Commercial Planning. Specialist in relational modeling, advanced SQL queries, automated ETL pipelines (SSIS), Python analytical automation (Pandas, NumPy, PyAutoGUI, openpyxl), and strategic Power BI dashboards. Extensive experience conducting variable compensation audits, historical churn diagnostics, and correlation studies supporting executive decision-making.",
  aboutStory: [
    "I began my tech journey working in Service Desk, where I developed a deep foundation in technical support, incident troubleshooting, access control, and operational infrastructure monitoring. I engineered internal automated solutions to optimize ticket resolution, manage mass network outages, and improve IT asset tracking. It was during this period that I enrolled in my Database Technology degree, steering my career toward a strictly analytical and data-driven focus.",
    "I advanced to the Risk & Fraud Prevention division, operating in high-volume, mission-critical financial environments. I analyzed brute force attack logs, investigated security incidents across enterprise tooling, and monitored financial transactions to detect fraud, anomalies, and ensure absolute data integrity. This role sharpened my analytical rigor, systemic thinking, and evidence-based problem solving.",
    "Currently, I serve in Commercial Planning, driving business performance indicators and commercial strategy. I lead campaign audits, variable compensation calculations (RV), performance metric validations, and correlation analyses between customer churn and store/operator productivity. I also design analytical automation scripts and maintain dashboards that empower senior leadership with trustworthy metrics.",
    "My background bridges technical operations, risk governance, and executive strategy through robust data engineering. I continually deepen my mastery of SQL, ETL pipelines, predictive modeling, and automation to deliver strategic value."
  ],
  avatar: "./images/avatar.jpg",
  location: "Florianópolis - SC, Brazil (Available Remote / Hybrid)",
  email: "lenoguedesg@gmail.com",
  phone: "+55 (48) 98442-2718",
  availability: "available",
  availabilityText: "Available for strategic positions and high-impact projects",
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
    { label: "Integrated Pillars", value: "Operations • Risk • Strategy", description: "End-to-end systemic business view" },
    { label: "Live Applications", value: "5 Production Projects", description: "Deployed online for interactive testing" },
    { label: "Automation & ETL", value: "Python + SSIS", description: "Analytical pipeline optimization" },
    { label: "Decision Support", value: "Data-Driven", description: "Strategic dashboards and executive metrics" }
  ],
  skills: [
    {
      category: "Databases, SQL & ETL",
      iconName: "Database",
      items: [
        { name: "Advanced SQL Queries", level: 60, years: 3, isKey: true },
        { name: "Relational DBs (SQL Server/PostgreSQL)", level: 40, years: 2, isKey: true },
        { name: "SSIS (SQL Server Integration Services)", level: 40, years: 2 },
        { name: "ETL Pipeline Engineering", level: 60, years: 3 },
        { name: "Data Modeling & Architecture", level: 60, years: 3 },
        { name: "Data Cleaning & Preprocessing", level: 60, years: 3 }
      ]
    },
    {
      category: "Python & Analytical Automation",
      iconName: "Cpu",
      items: [
        { name: "Python for Data Analysis", level: 60, years: 3, isKey: true },
        { name: "Pandas & NumPy", level: 40, years: 2 },
        { name: "Task Automation (PyAutoGUI)", level: 60, years: 3 },
        { name: "Spreadsheet Automation (openpyxl)", level: 100, years: 5, isKey: true },
        { name: "Scikit-Learn (Modeling & ML)", level: 40, years: 2 },
        { name: "Jupyter Notebook & VS Code", level: 60, years: 3 }
      ]
    },
    {
      category: "Business Intelligence & Strategy",
      iconName: "Layout",
      items: [
        { name: "Power BI & DAX", level: 20, years: 1 },
        { name: "Dashboards & Data Visualization", level: 40, years: 2 },
        { name: "Advanced Excel & Financial Modeling", level: 100, years: 5, isKey: true },
        { name: "KPIs & Strategic Business Metrics", level: 40, years: 2, isKey: true },
        { name: "Historical Churn & Retention Analysis", level: 20, years: 1 },
        { name: "Campaign Audit & Variable Comp (RV)", level: 20, years: 1 }
      ]
    },
    {
      category: "Risk, Governance & Tooling",
      iconName: "Cloud",
      items: [
        { name: "Risk Prevention & Fraud Detection", level: 20, years: 1 },
        { name: "Transaction Integrity & Audit", level: 20, years: 1 },
        { name: "Git & GitHub Version Control", level: 80, years: 4, isKey: true },
        { name: "Docker & Containerized Environments", level: 60, years: 3 },
        { name: "Process Optimization & Documentation", level: 80, years: 4, isKey: true }
      ]
    }
  ],
  projects: [
    {
      id: "proj-streamlit-fibonacci",
      title: "Stock Market Dashboard & Fibonacci Projections",
      tagline: "Mathematical precision for financial markets: asset tracking and algorithmic Fibonacci targets",
      description: "Analytical web application engineered with Python and Streamlit for quantitative and technical analysis of B3 stocks (PETR4.SA, VALE3.SA) and global market assets. Algorithmically computes Fibonacci pivot projections (1st Target 100% and 2nd Target 161.8% based on Top B and Bottom A pivots), plotting dynamic support, resistance, and oscillators.",
      category: "IA / Dados",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80",
      technologies: ["Python", "Streamlit", "Plotly", "yfinance (Yahoo Finance)", "Pandas", "Quantitative Analysis"],
      liveUrl: "https://i7qrvxaexuqfix4zjxrtru.streamlit.app/",
      githubUrl: "https://github.com/lenoguedes/dashboard-acoes-streamlit",
      featured: true,
      problemSolved: "Manual and slow calculation of mathematical pivots and Fibonacci targets in expensive proprietary trading platforms.",
      solutionDetails: "Python algorithm fetching real-time historical quotes, identifying candlestick extrema, and calculating percentage targets instantly.",
      metrics: "Real-time rendering of 100% and 161.8% targets with instant temporal series queries.",
      keyFeatures: [
        "Algorithmic Fibonacci Calculation: Automated pivot detection and mathematical projection of 1st Target (100%) and 2nd Target (161.8%).",
        "Broad Asset Coverage: Support for Brazilian B3 tickers (.SA), US markets, commodities, and crypto.",
        "Interactive Plotly Charts: Rich candlestick visualization with exponential moving averages and flexible time windows.",
        "Cloud Serverless Architecture: Deployed on Streamlit Cloud with real-time quote streaming."
      ],
      role: "Python Developer & Quantitative Analyst",
      year: "2024"
    },
    {
      id: "proj-ibge-carousel",
      title: "IBGE Data Analysis & Carousel Studio",
      tagline: "Transforming public data into professional authority: from statistical analysis to LinkedIn-ready carousels",
      description: "Analytical application combining automated extraction pipelines from official IBGE public APIs with an in-browser carousel design studio for LinkedIn. Translates demographic, economic, and census datasets into visual, data-backed narratives ready for publication.",
      category: "IA / Dados",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      technologies: ["TypeScript", "IBGE APIs", "Python / Node.js", "Data Visualization", "Tailwind CSS", "Export PDF/Canvas"],
      liveUrl: "https://ais-pre-oydhcodgwvr6ymp532m7qq-773134756843.us-east1.run.app",
      githubUrl: "https://github.com/lenoguedes/ibge-data-analysis-carousel-studio",
      featured: true,
      problemSolved: "Difficulty in accessing official public data and laborious manual design formatting for technical infographics on professional networks.",
      solutionDetails: "Direct connection with public IBGE APIs, real-time statistical processing, and an interactive design canvas for instant carousel slides.",
      metrics: "Reduces hours of manual graphic design and data analysis to minutes for verified data posts.",
      keyFeatures: [
        "Automated IBGE Data Ingestion: Real-time queries for historical time series, demographics, and GDP indicators.",
        "Statistical Synthesis: Automatic growth rates, regional distribution, and key findings highlights.",
        "Interactive Carousel Studio: Customizable typography, color palettes, icons, and visual cards.",
        "High-Fidelity Export: One-click export to multi-page PDF and crisp image zip packs."
      ],
      role: "Data Specialist & Full-Stack Developer",
      year: "2024"
    },
    {
      id: "proj-dbfin-v1",
      title: "DBFin v1 - Financial Projection",
      tagline: "Cash flow predictability: manage the current month and plan upcoming cycles without surprises",
      description: "Comprehensive financial management system structured around monthly accounting periods. Grants complete visibility over daily cash flow as well as forward-looking projections up to 120 installment cycles with automated reconciliation.",
      category: "Fintech / Dados",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "TypeScript", "PostgreSQL / Cloud", "Google Auth", "Tailwind CSS", "Recharts"],
      liveUrl: "https://ais-pre-ktc4uci4itswzynhzvjxbx-773134756843.us-east1.run.app/",
      githubUrl: "https://github.com/lenoguedes/dbfin",
      featured: true,
      problemSolved: "Lack of budget predictability for upcoming months, unchecked credit installment accumulation, and bank-vs-card reconciliation mismatches.",
      solutionDetails: "Engine centered on forward-looking monthly periods, projected recurring expenses, multi-installment amortization, and bank statement matching.",
      metrics: "Accurate multi-month budget forecast, real-time savings rate calculation, and net surplus tracking.",
      keyFeatures: [
        "Monthly Competence Accounting: Effortless navigation between fiscal cycles with automated budget templates.",
        "Projected vs. Realized Tracking: Differentiates pending vs. settled balances for precise end-of-month cash forecasts.",
        "Installment & Recurrence Engine: Handles up to 120 automated installment periods with sequential numbering.",
        "Categorization & Payment Methods: Distinguishes debit, credit, Pix, and cash to prevent duplicate debt entries.",
        "Cloud Sync & Backup: Google OAuth integration, live metrics, and instant JSON/Drive data backups."
      ],
      role: "Data Engineer & Full-Stack Developer",
      year: "2024"
    },
    {
      id: "proj-tarefas-semanais",
      title: "Weekly Stoic Tasks",
      tagline: "Master what is in your control. Optimize your energy for what truly matters",
      description: "Intelligent personal prioritization and discipline system founded on the Stoic Dichotomy of Control. Acts as a cognitive filter that eliminates decision fatigue and measures daily consistency via a 3-axis philosophical matrix and cosmic virtue constellation.",
      category: "Produtividade",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "TypeScript", "Stoic Philosophy", "Tailwind CSS", "Data Analytics", "Canvas/SVG"],
      liveUrl: "https://ais-pre-gg3r3p4wwslzcbb76ucovb-773134756843.us-east1.run.app/",
      githubUrl: "https://github.com/lenoguedes/tarefas-semanais",
      featured: true,
      problemSolved: "Traditional to-do lists trigger anxiety by treating trivial chores, uncontrollable worries, and urgent demands with equal weight.",
      solutionDetails: "Stoic discernment algorithm filtering items by temporality, control ability, and moral duty—computing an actionable Priority Score.",
      metrics: "Directs 100% of cognitive focus toward controllable actions, tracking consistency scores across 5 life domains.",
      keyFeatures: [
        "3-Axis Discernment Filter: Evaluates each duty across Time (Present/Future/Past), Control (In my control/Not in my control), and Alignment.",
        "Priority Score Algorithm: Computes a numerical priority index ranking high-impact duties ahead of uncontrollable noise.",
        "Strategic Quadrant Diagnostic: Sorts duties into Vital Focus, Delegation, Long-term Planning, and Energy Leak warnings.",
        "Celestial Focus Constellation: Interactive SVG visualization lighting up stars for classical virtues (Wisdom, Courage, Temperance, Justice).",
        "Habit Tracking & Growth Insights: Daily adherence rates across intellectual, physical, career, and emotional growth."
      ],
      role: "Solutions Architect & Developer",
      year: "2024"
    },
    {
      id: "proj-sintonia-live",
      title: "Sintonia - Relationship Harmony",
      tagline: "Less friction, deeper connection: emotional intelligence for modern relationships",
      description: "Private relational space designed for couples to foster empathy, align emotional wellness, and resolve conflicts with maturity. Features cross-account real-time synchronization, an AI-powered dispute mediator, and a positive history of shared commitments.",
      category: "IA / Produto",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "TypeScript", "Generative AI", "Vite", "Tailwind CSS", "Realtime Sync"],
      liveUrl: "https://ais-pre-2xljofblir66hcpvloeod4-773134756843.us-east1.run.app",
      githubUrl: "https://github.com/lenoguedes/sintonia",
      featured: true,
      problemSolved: "Communication friction, escalating discussions, and unexpressed emotional needs due to lack of active listening.",
      solutionDetails: "Secure shared environment with preventive mood check-ins, non-judgmental AI mediation, and a transparent agreements repository.",
      metrics: "Active reduction in emotional fatigue, documented shared compromises, and continuous mutual empathy tracking.",
      keyFeatures: [
        "Real-Time Partner Sync: Encrypted shared portal displaying mutual wellness and connection status.",
        "Daily Emotional Check-in: Intuitive mood, energy, and priority logging to address friction before it starts.",
        "AI Conflict Mediator: Objective mediator uncovering root causes, translating distress into needs, and proposing actionable steps.",
        "Shared Agreements Logbook: Positive archive capturing peaceful resolutions and mutual understandings.",
        "Harmony Insights: Analytical charts tracking relational empathy trends, reciprocity, and connection over time."
      ],
      role: "Creator, Developer & UX Architect",
      year: "2024"
    }
  ],
  experiences: [
    {
      id: "exp-planejamento-pleno",
      role: "Commercial Planning Analyst (Mid-Level)",
      company: "Ouze (Studio Z)",
      location: "Florianópolis, SC (Hybrid / Remote Available)",
      period: "May/2026 – Present",
      isCurrent: true,
      description: "Driving market intelligence, analytics engineering, and workflow automation connecting business logic, datasets, and financial compliance.",
      highlights: [
        "Data Engineering & Python Automation: Built automated Python pipelines to refresh production models, executive reports, and forecasting calculations. Optimized SQL queries and SSIS packages for consolidated billing, goals, and forecasts—slashing processing times.",
        "Variable Compensation & Incentives: End-to-end governance and auditing of Variable Compensation (RV) and sales incentive campaigns, ensuring strict financial compliance as focal point between Business, Audit, and IT.",
        "Market Intelligence & Churn Analytics: Conducted in-depth diagnostics on customer churn, sales production trends, and active accounts to uncover root causes and guide executive strategic pivots."
      ],
      technologies: [
        "SQL",
        "Python (Pandas, NumPy, openpyxl)",
        "SSIS",
        "ETL",
        "Variable Compensation (RV)",
        "Churn Analysis",
        "Commercial Planning"
      ]
    },
    {
      id: "exp-planejamento-jr",
      role: "Commercial Planning Analyst (Junior)",
      company: "Ouze (Studio Z)",
      location: "Florianópolis, SC",
      period: "Jan/2026 – May/2026",
      isCurrent: false,
      description: "Continuous commercial KPI monitoring and SQL query tuning for incentive campaign audits and revenue forecasts.",
      highlights: [
        "Daily performance monitoring across commercial KPIs (revenue, cancellations, insurance penetration, and store targets).",
        "Engineered and optimized SQL procedures for sales forecasting and monthly incentive payouts."
      ],
      technologies: [
        "SQL",
        "Commercial KPIs",
        "Forecast",
        "Incentive Campaigns",
        "Variable Compensation"
      ]
    },
    {
      id: "exp-riscos",
      role: "Risk & Fraud Prevention Analyst (Junior)",
      company: "Ouze (Studio Z)",
      location: "Florianópolis, SC",
      period: "Sep/2025 – Jan/2026",
      isCurrent: false,
      description: "High-volume transactional data analysis, auditing, and anomaly detection in financial operations.",
      highlights: [
        "Queried large-scale transactional databases with SQL to audit, track, and flag atypical or fraudulent purchase patterns.",
        "Executed risk assessments and merchant blocklists, achieving a 70% reduction in risk exposure and strengthening regulatory compliance."
      ],
      technologies: [
        "SQL",
        "Data Audit",
        "Fraud Prevention",
        "Transactional Analytics",
        "Risk Mitigation"
      ]
    },
    {
      id: "exp-servicedesk",
      role: "IT Support & Systems Specialist (Service Desk)",
      company: "Ouze (Studio Z)",
      location: "Florianópolis, SC",
      period: "Sep/2022 – Sep/2025",
      isCurrent: false,
      description: "Critical incident triage, enterprise access governance, and data engineering scripts to reduce support backlogs.",
      highlights: [
        "Resolved massive production outages, managed corporate credentials, and maintained POS billing systems across retail store networks.",
        "Recognized for proactive data automation initiatives that eliminated repetitive IT tickets and drastically shrank queue backlogs."
      ],
      technologies: [
        "Data Engineering",
        "Automation",
        "Service Desk",
        "Incident Management",
        "Billing Systems"
      ]
    }
  ],
  education: [
    {
      id: "edu-banco-de-dados",
      degree: "Associate Degree in Database Technology",
      institution: "Senac",
      period: "2024 – 2026 (Completion: June/2026)",
      location: "Florianópolis, SC",
      status: "Completed",
      description: "Higher education degree with 100% completed coursework, with academic honors across Data Engineering, Database Administration, Data Mining, Machine Learning, and NoSQL systems.",
      highlights: [
        "Distinguished Academic Record: Perfect 10.0 grades in Decision-Support Databases, Data Mining, Algorithms & Programming, and Capstone Projects.",
        "Applied Capstone Deliverables: Excellence in Technological Diagnostics (Grade: 10.0), System Development (9.9), Implementation (9.9), Decision Support (9.6), and Data Science (9.2).",
        "Advanced Disciplines: Machine Learning (9.6), Non-Relational NoSQL Databases (9.6), Database Administration (9.4), Database Programming & SQL (8.6), and Big Data Security (7.6)."
      ],
      keyDisciplines: [
        { name: "Databases for Decision Making", grade: "10.0", period: "2nd Sem/2025" },
        { name: "Data Mining", grade: "10.0", period: "1st Sem/2025" },
        { name: "Machine Learning", grade: "9.6", period: "2nd Sem/2025" },
        { name: "NoSQL Non-Relational Databases", grade: "9.6", period: "1st Sem/2026" },
        { name: "Database Administration (DBA)", grade: "9.4", period: "2nd Sem/2025" },
        { name: "Capstone Project: Decision Support", grade: "9.6", period: "1st Sem/2026" },
        { name: "Capstone Project: Data Science", grade: "9.2", period: "2nd Sem/2025" },
        { name: "Algorithms and Programming I & II", grade: "10.0", period: "2024" },
        { name: "Database Programming & SQL", grade: "8.6", period: "1st Sem/2025" },
        { name: "Data Security and Big Data", grade: "7.6", period: "1st Sem/2026" }
      ]
    },
    {
      id: "edu-gestao-ti",
      degree: "Associate Degree in IT Management",
      institution: "Senac",
      period: "2018 – 2025",
      location: "Florianópolis, SC",
      status: "Governance & Strategic Management Disciplines Transferred",
      description: "Comprehensive foundation in IT Governance, Project Management, Financial Management, Infrastructure, and Cyber Law, transitioning into advanced Data Engineering.",
      highlights: [
        "Excellence in Management Foundations: 9.1 in Information Technology, 8.8 in Technology & Society, 8.8 in Ethics & Sustainability, and 8.5 in Entrepreneurship & Strategy.",
        "Agile & Strategic Management: Completed Project Management (Grade 8.4), Service Science (8.7), and Systems Analysis & Development (7.9)."
      ],
      keyDisciplines: [
        { name: "Information Technology", grade: "9.1", period: "2018" },
        { name: "Introduction to Service Science", grade: "8.7", period: "2018" },
        { name: "Entrepreneurship, Innovation & Strategy", grade: "8.5", period: "1st Sem/2025" },
        { name: "Project Management", grade: "8.4", period: "2nd Sem/2025" },
        { name: "Systems Analysis & Development", grade: "7.9", period: "2018" },
        { name: "Cyber Law & Digital Rights", grade: "7.5", period: "2018" }
      ]
    }
  ],
  certifications: [
    {
      id: "cert-os-basics",
      title: "Operating Systems Basics",
      issuer: "Cisco",
      year: "2025",
      issueDate: "May/2025",
      url: "https://www.credly.com/badges/ab411fcc-36b7-4340-a281-e3a982ef19d2/linked_in_profile",
      skills: [
        "Laptops & Portable Devices",
        "Hardware and Software Foundations",
        "Cybersecurity Practices and Data Protection",
        "Desktop Computers"
      ]
    },
    {
      id: "cert-intro-ds",
      title: "Introduction to Data Science 3.0",
      issuer: "Data Science Academy",
      year: "2022",
      issueDate: "November/2022",
      credentialId: "0637ff68e8b0c4f83f005e46c",
      url: "https://mycourse.app/vSJj3m3u9QrsqSqLA",
      skills: [
        "Data Science Fundamentals",
        "Machine Learning Concepts",
        "Predictive Analysis",
        "Data Cleaning & Exploration"
      ]
    }
  ],
  testimonials: [],
  languages: [
    { language: "Portuguese", level: "Native" },
    { language: "Spanish", level: "Advanced" },
    { language: "English", level: "Intermediate" }
  ],
  interests: ["Data Engineering", "Financial Markets & Quants", "Process Automation", "Continuous Learning"]
};
