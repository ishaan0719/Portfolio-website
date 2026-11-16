/**
 * All site copy lives here. Edit text, numbers and links in this file only.
 *
 * Metric highlighting: wrap a number in **double asterisks** inside any bullet
 * or summary and it renders in the accent colour, e.g. "Cut latency **30%**".
 *
 * Links: set `github` / `demo` / `writeup` on a project to show that link.
 * Leave a field out (or null) and the link is hidden on the site.
 */

export type Link = { label: string; href: string };

export type Experience = {
  role: string;
  org: string;
  dates: string;
  note?: string;
  bullets: string[];
};

export type Project = {
  title: string;
  dates: string;
  summary: string;
  metrics: string[];
  tags: string[];
  github?: string | null;
  demo?: string | null;
  writeup?: string | null;
};

export type SkillGroup = { label: string; items: string[] };

export const site = {
  // TODO: replace with your custom domain once connected on Vercel.
  url: "https://ishaansrivastava.vercel.app",
  title: "Ishaan Srivastava | AI/ML, Data and Software Engineer",
  description:
    "Ishaan Srivastava builds software, data and AI systems: credit risk models, agentic RAG, LLM agents and ML in production. IIT Bombay, Class of 2027.",
  resume: "/resume.pdf",
};

export const profile = {
  name: "Ishaan Srivastava",
  initials: "IS",
  headline: "I build software, data and AI systems that work in production.",
  meta: "B.Tech Mechanical Engineering, IIT Bombay · Class of 2027 · Mumbai",
  university: "Indian Institute of Technology Bombay",
  // Swap the file in public/ to change the photo; keep a 4:5 portrait crop.
  headshot: {
    src: "/headshot.webp",
    alt: "Portrait of Ishaan Srivastava",
    width: 640,
    height: 800,
  },
  // Split to keep the address out of plain-text scrapes; joined client-side.
  email: { user: "ishaansrivastava", domain: "iitb.ac.in" },
  phone: ["+91", "96518", "27686"],
  linkedin: "https://www.linkedin.com/in/ishaan-srivastava-406a12297/",
  github: "https://github.com/ishaan0719",
};

export const nav: Link[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I work across machine learning, data science and software engineering. I like problems where the answer has to hold up outside a notebook: measured, deployed and used.",
    "At Piramal Finance I built credit risk models and a scorecard that beat the bureau benchmark. After that I built multilingual intent understanding and automation as an AI engineer intern at BharatRix. On my own time I build LLM agents, from agentic RAG over financial filings to LangGraph workflow orchestration.",
  ],
  achievements: [
    { value: "Top 0.4 percentile", label: "JEE Main, of 1.4M+ candidates" },
    { value: "Top 1 percentile", label: "JEE Advanced" },
    { value: "State Rank 23", label: "NTSE Stage 1" },
  ],
};

export const experience: Experience[] = [
  {
    role: "Data Scientist Intern, Business Intelligence Unit",
    org: "Piramal Finance",
    dates: "May 2026 – Jul 2026",
    note: "Awarded a Letter of Recommendation",
    bullets: [
      "Built an ensemble meta-model on **100K+** credit records with higher precision than any individual model for credit risk",
      "Engineered and classified **700K+** credit records using SQL ETL, feature mapping and EDA to develop a scorecard",
      "Showed the internal scorecard beat the CRIF bureau, capturing **2%** more bad rate through bad-capture analysis",
    ],
  },
  {
    role: "AI Engineer Intern",
    org: "BharatRix Private Limited",
    dates: "Jul 2026 – Sep 2026",
    bullets: [
      "Built AI-driven features that understand user context and intent across multiple languages",
      "Built ML-powered automation workflows with **5+** human-in-the-loop controls",
      "Implemented AI capabilities across **3+** communication and engagement workflows for CONNECT-ED initiatives",
    ],
  },
];

export const featuredProjects: Project[] = [
  {
    title: "AI Financial Research Agent",
    dates: "Feb 2026 – Apr 2026",
    summary:
      "Agentic RAG system that retrieves and synthesises insights from financial filings, with tool calling and financial APIs for ratio analysis and valuation.",
    metrics: ["90% Recall@5", "30% lower latency", "100+ filings"],
    tags: ["LangChain", "RAG", "Reranking", "FastAPI", "Docker"],
    github: "https://github.com/ishaan0719/ai-financial-research-agent",
  },
  {
    title: "AI Incident Commander",
    dates: "Aug 2026",
    summary:
      "Autonomous SRE agent that detects incidents, correlates logs, metrics and traces for evidence-backed root-cause analysis, then remediates, verifies recovery and writes the post-incident report.",
    metrics: ["7-agent LangGraph workflow", "50+ simulated incidents benchmarked"],
    tags: ["LangGraph", "FastAPI", "Prometheus", "OpenTelemetry", "Redis", "PostgreSQL", "Docker"],
    github: "https://github.com/ishaan0719/AI-Incident-Commander",
  },
  {
    title: "Multi-Tool AI Workflow Agent",
    dates: "Jul 2026 – Aug 2026",
    summary:
      "LangGraph orchestration with tool routing, permission scoping, parallel execution, failure recovery and execution tracing for auditable agent actions.",
    metrics: ["500+ tasks orchestrated", "90%+ success rate"],
    tags: ["LangGraph", "LLMs", "Tool calling", "Python"],
    github: "https://github.com/ishaan0719/Multi-tool-Workflow-agent",
  },
  {
    title: "RL-Powered Adaptive Traffic Signal Control",
    dates: "Aug 2024 – Oct 2025",
    summary:
      "DQN agent in the SUMO simulator that adapts signal timings to live congestion across multiple intersections. Top 50 at IIT Bombay; Smart India Hackathon 2024 Nationals.",
    metrics: ["32% lower waiting time", "24% higher throughput", "6 scenarios"],
    tags: ["Reinforcement Learning", "DQN", "SUMO", "Python"],
    github: null, // TODO: add repo URL if public
  },
  {
    title: "Industrial Defect Detection",
    dates: "Dec 2025 – Jan 2026",
    summary:
      "Computer vision pipeline that localises and classifies manufacturing defects, with Grad-CAM explanations, served through FastAPI and Docker.",
    metrics: ["84% accuracy", "82%+ mAP", "1,800+ images"],
    tags: ["YOLO", "PyTorch", "OpenCV", "Transfer learning", "Grad-CAM"],
    github: "https://github.com/ishaan0719/Industrial-defect-detection",
  },
];

export const moreProjects: Project[] = [
  {
    title: "Customer Churn & Revenue Analytics",
    dates: "Aug 2025 – Sep 2025",
    summary:
      "Cohort analysis, hypothesis testing and segmentation to find churn drivers, with Power BI dashboards for retention and lifetime value.",
    metrics: ["50K+ records"],
    tags: ["Python", "SQL", "Pandas", "Power BI"],
    github: "https://github.com/ishaan0719/Customer-Churn-Revenue-Analytics-",
  },
  {
    title: "Sentiment Analysis (ME 228)",
    dates: "Jan 2024 – Apr 2024",
    summary:
      "Binary sentiment classifier on Amazon reviews using TF-IDF n-grams and engineered features, comparing LogReg, Naive Bayes and SVM.",
    metrics: ["93.4% accuracy", "AUC 0.94", "568K+ reviews"],
    tags: ["NLTK", "TF-IDF", "SVM", "Scikit-learn"],
  },
  {
    title: "Predictive Data Analysis (IPL)",
    dates: "Jan 2025 – Feb 2025",
    summary:
      "Score prediction with ensemble regressors and time-series forecasting using ARIMA and LSTM.",
    metrics: ["200K+ datapoints", "20% better MAPE vs KNN"],
    tags: ["XGBoost", "ARIMA", "LSTM", "Pandas"],
    github: "https://github.com/ishaan0719/Predictive-Data-Analyst",
  },
  {
    title: "Full-Stack YouTube Clone",
    dates: "Jun 2025 – Jul 2025",
    summary:
      "Video platform with JWT auth, upload and streaming, a personalised dashboard and recommendation logic.",
    metrics: [],
    tags: ["React", "Django", "JWT", "REST APIs"],
  },
  {
    title: "Techfest App",
    dates: "Sep 2024 – Jan 2025",
    summary:
      "Festival app with QR entry and exit, e-passes and Firebase sign-in; folded the web portal into the app and digitised 10+ event setups.",
    metrics: ["20K+ downloads", "25% retention gain", "Up to INR 2M saved"],
    tags: ["Firebase", "REST APIs", "UI/UX"],
  },
  {
    title: "Strain Hardening Study (ME 218)",
    dates: "Aug 2024 – Nov 2024",
    summary:
      "Cold-working experiments on aluminium with true and engineering stress-strain analysis of UTM data in MATLAB.",
    metrics: ["27.37% ductility drop", "12.16% yield strength rise"],
    tags: ["MATLAB", "Solid mechanics"],
  },
  {
    title: "IMU-Controlled Rocker Vehicle (ERC XLR8)",
    dates: "Aug 2023 – Sep 2023",
    summary:
      "Motion-controlled bot built in a team of 4, with an IR sensor circuit and calibrated control through an ESP32 driver.",
    metrics: [],
    tags: ["Arduino", "ESP32", "Embedded"],
  },
];

export const leadership = {
  roles: [
    {
      role: "Events Manager",
      org: "Techfest, IIT Bombay",
      dates: "Apr 2025 – Mar 2026",
      note: "Asia's largest science and technology festival: INR 150M+ budget, 180,000+ footfall",
      bullets: [
        "Led a 2-tier team of **150+** students running **300+** events",
        "Ran the International Exhibitions on zero travel budget, drawing **60,000+** footfall",
        "Engaged **70+** embassies and consulates and institutions from **40+** countries",
        "Built websites with **5M+** hits, plus a mass-mailing portal and dashboard for **20K+** campus ambassadors",
      ],
    },
    {
      role: "Overall Coordinator",
      org: "TechConnect 2025",
      dates: "2025",
      bullets: ["Oversaw **90+** projects worth **INR 200M+**"],
    },
  ] satisfies Experience[],
  venture: {
    role: "ChemEca",
    org: "Desai Sethi School of Entrepreneurship, IIT Bombay",
    dates: "Dec 2024 – Apr 2025",
    note: "Pre-incubated climate-tech venture",
    bullets: [
      "Won an **INR 250K** grant in the IDEAS Level 2 cohort",
      "Building smart direct air capture (DAC) integrated with HVAC systems to capture carbon at lower cost and power",
    ],
  } satisfies Experience,
};

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Python", "C", "C++", "JavaScript", "TypeScript", "SQL"] },
  {
    label: "AI / ML",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "LangChain",
      "LangGraph",
      "Hugging Face",
      "OpenCV",
      "RAG",
    ],
  },
  {
    label: "Engineering",
    items: ["React", "Django", "FastAPI", "Docker", "Git", "REST APIs"],
  },
  {
    label: "Data",
    items: ["MySQL", "MongoDB", "Firebase", "FAISS / vector DBs", "Power BI"],
  },
];

export const beyondWork: string[] = [
  "Ran a menstrual health drive for girls across rural and tier 2/3 India.",
  "Planned a pan-India stem cell donation drive with 5+ NGOs; 100K+ people tested.",
  "Performed a theatrical monologue in the NSO Dramatics course.",
  "Placed 3rd at Gyrations, the inter-hostel dance competition.",
];

export const contact = {
  heading: "Let's talk",
  body: "I'm open to internships and full-time roles in AI/ML engineering, data science and software engineering. Email or phone is the fastest way to reach me.",
};
