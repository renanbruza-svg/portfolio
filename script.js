const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");
const translations = {
  pt: {
    pageTitle: "Renan | Portfólio de Data Science",
    metaDescription: "Portfólio de Data Science, Machine Learning, Python e SQL com estética de terminal e código.",
    brandAria: "Ir para o início",
    languageAria: "Selecionar idioma",
    navAbout: "cat sobre.json",
    navSkills: "ls skills/",
    navProjects: "cd projetos",
    navCredentials: "cat formacao.md",
    navContact: "ssh contato",
    heroPrompt: "Início",
    roleLine: "Eu sou",
    heroText: "transformando dados em modelos, automações e decisões",
    statProjects: "5 projetos",
    statStacks: "Python · SQL · ML · BI",
    statFocus: "Saúde · Churn · E-commerce · Mobilidade",
    aboutTitle: "Perfil técnico com narrativa de produto e dados.",
    aboutJson: `{
  "sobre": {
    "foco": "resolver problemas com dados",
    "metodo": [
      "entender contexto",
      "explorar dados",
      "testar hipóteses",
      "modelar",
      "comunicar impacto"
    ],
    "stack": "Python, SQL, ML, BI"
  }
}`,
    skillsTitle: "Ferramentas organizadas como módulos de trabalho.",
    skillPythonTitle: "Python para dados",
    skillPythonText: "Pandas, NumPy, notebooks, scripts, automações e APIs simples.",
    skillMlTitle: "Machine Learning",
    skillMlText: "Regressão, classificação, validação, métricas, tuning e explicabilidade.",
    skillSqlTitle: "SQL Analytics",
    skillSqlText: "Joins, CTEs, agregações, cohorts, qualidade e modelagem analítica.",
    skillVizTitle: "Visualização",
    skillVizText: "KPIs, storytelling, gráficos claros e leitura executiva de resultados.",
    projectsTitle: "Projetos com cara de repositório técnico.",
    project0Title: "NeuroAI: classificador de patologias em MRI cerebral",
    project0Text: "Sistema de Deep Learning com EfficientNetV2B0, Streamlit e Grad-CAM para apoiar análise explicável de imagens de ressonância cerebral.",
    kindHealthAi: "saúde-ai",
    kindMl: "machine-learning",
    kindAnalytics: "analytics",
    kindForecast: "forecasting",
    kindHealthData: "saúde-dados",
    project1Title: "IBM Telco Churn: retenção baseada em risco",
    project1Text: "Modelo de classificação para prever churn, priorizar clientes de maior risco e orientar campanhas de retenção.",
    project2Title: "Olist E-commerce Analytics: receita e logística",
    project2Text: "Projeto de analytics engineering para mapear receita, atraso de entrega, qualidade de vendedores e oportunidades operacionais.",
    project3Title: "NYC Taxi Demand Intelligence: previsão de demanda",
    project3Text: "Análise de demanda por zona e hora para apoiar alocação de frota, reduzir espera e melhorar planejamento operacional.",
    project4Title: "US RSV Hospitalization Forecasting",
    project4Text: "Análise de internações por RSV nos EUA com limpeza de dados públicos, agregação trimestral, previsão e dashboard em Streamlit.",
    repoLabel: "Repositório",
    workflowTitle: "Fluxo de trabalho de ponta a ponta.",
    workflow1: "Entendimento do problema, fontes, granularidade e métrica de sucesso.",
    workflow2: "Limpeza, qualidade, features, EDA e documentação reprodutível.",
    workflow3: "Baselines, validação, comparação de modelos e interpretação.",
    workflow4: "Relatório, dashboard, repositório organizado e próximos passos.",
    credentialsTitle: "Formação, certificações e cursos.",
    postBadge: "Pós-graduação",
    portfolioBadge: "Portfólio",
    education1Date: "Graduação",
    education1Title: "Engenharia de Bioprocessos e Biotecnologia",
    education1Text: "Base em processos biológicos, biotecnologia, análise quantitativa e raciocínio aplicado a problemas de saúde, indústria e pesquisa.",
    education1Meta: "Formação em Engenharia",
    education2Date: "Pós-graduação · 2026-2027",
    education2Title: "IA e Data Science aplicada à saúde",
    education2Text: "Pós-graduação no Hospital Sírio-Libanês, conectando ciência de dados, IA, saúde digital e tomada de decisão clínica.",
    education2Meta: "Conclusão prevista para 2027",
    credential1Title: "Data Science Orientation",
    credential1Text: "Fundamentos de Data Science, IA e Machine Learning aplicados a negócios, pesquisa e tomada de decisão.",
    credential1Date: "Emitido em abr. de 2026 · expira em mai. de 2026",
    credentialLink: "Exibir credencial",
    credential2Title: "Trilha aplicada: IA e Data Science em saúde",
    credential2Text: "Projetos em saúde, previsão operacional, visão computacional médica e comunicação de impacto para decisão.",
    credential2Date: "Foco atual de portfólio",
    credential2Link: "Ver projetos",
    courseProvider: "Estudos aplicados",
    course1Title: "Python para análise de dados",
    course2Title: "SQL para analytics e negócio",
    course3Title: "Machine Learning aplicado",
    contactTitle: "Vamos conversar sobre dados, modelos e automação.",
    footerName: "Renan Data Science Portfolio",
    footerDeploy: "Deploy estático HTML/CSS/JS: Vercel + GitHub Pages",
  },
  en: {
    pageTitle: "Renan | Data Science Portfolio",
    metaDescription: "Data Science, Machine Learning, Python, and SQL portfolio with a terminal and code aesthetic.",
    brandAria: "Go to home",
    languageAria: "Select language",
    navAbout: "cat about.json",
    navSkills: "ls skills/",
    navProjects: "cd projects",
    navCredentials: "cat education.md",
    navContact: "ssh contact",
    heroPrompt: "Home",
    roleLine: "I am a",
    heroText: "turning data into models, automation, and decisions",
    statProjects: "5 projects",
    statStacks: "Python · SQL · ML · BI",
    statFocus: "Healthcare · Churn · E-commerce · Mobility",
    aboutTitle: "Technical profile with product and data storytelling.",
    aboutJson: `{
  "about": {
    "focus": "solving problems with data",
    "method": [
      "understand context",
      "explore data",
      "test hypotheses",
      "model",
      "communicate impact"
    ],
    "stack": "Python, SQL, ML, BI"
  }
}`,
    skillsTitle: "Tools organized as working modules.",
    skillPythonTitle: "Python for data",
    skillPythonText: "Pandas, NumPy, notebooks, scripts, automations, and simple APIs.",
    skillMlTitle: "Machine Learning",
    skillMlText: "Regression, classification, validation, metrics, tuning, and explainability.",
    skillSqlTitle: "SQL Analytics",
    skillSqlText: "Joins, CTEs, aggregations, cohorts, quality checks, and analytical modeling.",
    skillVizTitle: "Visualization",
    skillVizText: "KPIs, storytelling, clear charts, and executive-level result interpretation.",
    projectsTitle: "Projects with a technical repository structure.",
    project0Title: "NeuroAI: brain MRI pathology classifier",
    project0Text: "Deep Learning system with EfficientNetV2B0, Streamlit, and Grad-CAM to support explainable analysis of brain MRI images.",
    kindHealthAi: "health-ai",
    kindMl: "machine-learning",
    kindAnalytics: "analytics",
    kindForecast: "forecasting",
    kindHealthData: "health-data",
    project1Title: "IBM Telco Churn: risk-based retention",
    project1Text: "Classification model to predict churn, prioritize higher-risk customers, and guide retention campaigns.",
    project2Title: "Olist E-commerce Analytics: revenue and logistics",
    project2Text: "Analytics engineering project to map revenue, delivery delays, seller quality, and operational opportunities.",
    project3Title: "NYC Taxi Demand Intelligence: demand forecasting",
    project3Text: "Zone and hour demand analysis to support fleet allocation, reduce waiting time, and improve operational planning.",
    project4Title: "US RSV Hospitalization Forecasting",
    project4Text: "Analysis of RSV hospitalizations in the U.S. with public data cleaning, quarterly aggregation, forecasting, and a Streamlit dashboard.",
    repoLabel: "Repository",
    workflowTitle: "End-to-end workflow.",
    workflow1: "Problem understanding, sources, granularity, and success metric.",
    workflow2: "Cleaning, quality checks, features, EDA, and reproducible documentation.",
    workflow3: "Baselines, validation, model comparison, and interpretation.",
    workflow4: "Report, dashboard, organized repository, and next steps.",
    credentialsTitle: "Education, credentials, and courses.",
    postBadge: "Graduate program",
    portfolioBadge: "Portfolio",
    education1Date: "Undergraduate degree",
    education1Title: "Bioprocess and Biotechnology Engineering",
    education1Text: "Background in biological processes, biotechnology, quantitative analysis, and applied reasoning for healthcare, industry, and research problems.",
    education1Meta: "Engineering background",
    education2Date: "Graduate studies · 2026-2027",
    education2Title: "AI and Data Science applied to healthcare",
    education2Text: "Graduate program at Hospital Sírio-Libanês, connecting data science, AI, digital health, and clinical decision-making.",
    education2Meta: "Expected completion in 2027",
    credential1Title: "Data Science Orientation",
    credential1Text: "Foundations of Data Science, AI, and Machine Learning applied to business, research, and decision-making.",
    credential1Date: "Issued Apr 2026 · expires May 2026",
    credentialLink: "View credential",
    credential2Title: "Applied track: AI and Data Science in healthcare",
    credential2Text: "Projects across healthcare, operational forecasting, medical computer vision, and decision-oriented communication.",
    credential2Date: "Current portfolio focus",
    credential2Link: "View projects",
    courseProvider: "Applied studies",
    course1Title: "Python for data analysis",
    course2Title: "SQL for analytics and business",
    course3Title: "Applied Machine Learning",
    contactTitle: "Let's talk about data, models, and automation.",
    footerName: "Renan Data Science Portfolio",
    footerDeploy: "Static HTML/CSS/JS deploy: Vercel + GitHub Pages",
  },
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.pt;

  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.title = dictionary.pageTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", dictionary.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":").map((value) => value.trim());
      if (attribute && dictionary[key]) {
        element.setAttribute(attribute, dictionary[key]);
      }
    });
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  window.localStorage.setItem("portfolioLanguage", language);
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const savedLanguage = window.localStorage.getItem("portfolioLanguage");
setLanguage(savedLanguage === "en" ? "en" : "pt");

function showRevealItems() {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  showRevealItems();
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -80px 0px",
    },
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 45, 220)}ms`;
    observer.observe(item);
  });
}

const terminalTitle = document.querySelector(".terminal-bar strong");
const commands = ["skills.xml", "data_science.py", "machine_learning.ipynb", "queries.sql"];
let commandIndex = 0;

if (terminalTitle && !prefersReducedMotion) {
  window.setInterval(() => {
    commandIndex = (commandIndex + 1) % commands.length;
    terminalTitle.textContent = commands[commandIndex];
  }, 1800);
}

const canvas = document.getElementById("ai-memory");
const ctx = canvas ? canvas.getContext("2d") : null;
let width = 0;
let height = 0;
let nodes = [];

function resizeCanvas() {
  if (!canvas || !ctx) return;

  const ratio = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const count = Math.max(32, Math.min(86, Math.floor((width * height) / 19000)));
  nodes = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.32,
    vy: (Math.random() - 0.5) * 0.32,
    r: Math.random() * 1.6 + 1,
  }));
}

function drawMemory() {
  if (!ctx) return;

  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < nodes.length; i += 1) {
    const a = nodes[i];

    if (!prefersReducedMotion) {
      a.x += a.vx;
      a.y += a.vy;

      if (a.x < -20) a.x = width + 20;
      if (a.x > width + 20) a.x = -20;
      if (a.y < -20) a.y = height + 20;
      if (a.y > height + 20) a.y = -20;
    }

    for (let j = i + 1; j < nodes.length; j += 1) {
      const b = nodes[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 150;

      if (distance < maxDistance) {
        const opacity = (1 - distance / maxDistance) * 0.22;
        ctx.strokeStyle = `rgba(101, 240, 211, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    ctx.fillStyle = "rgba(143, 199, 255, 0.48)";
    ctx.beginPath();
    ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
    ctx.fill();
  }

  if (!prefersReducedMotion) {
    requestAnimationFrame(drawMemory);
  }
}

if (canvas && ctx) {
  window.addEventListener("resize", () => {
    resizeCanvas();
    if (prefersReducedMotion) {
      drawMemory();
    }
  });

  resizeCanvas();
  drawMemory();
}
