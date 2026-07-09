/* ============ DATA (edit these to update the site) ============ */

const SKILLS = [
  { en: "SQL", de: "SQL", level: 90 },
  { en: "Python", de: "Python", level: 85 },
  { en: "Power BI", de: "Power BI", level: 88 },
  { en: "Excel", de: "Excel", level: 92 },
  { en: "Tableau", de: "Tableau", level: 75 },
  { en: "Databricks", de: "Databricks", level: 68 },
  { en: "Data Warehousing", de: "Data Warehousing", level: 78 },
  { en: "ETL", de: "ETL", level: 80 },
  { en: "Analytical Thinking", de: "Analytisches Denken", level: 90 },
];

const EXPERIENCE = [
  {
    date: "2024 — Present",
    dateDe: "2024 — Heute",
    en: { title: "Data Analyst", org: "Tech Jobs Fair", desc: "Delivering data-driven insights and business intelligence solutions across finance and technology sectors, optimizing database structures and reporting workflows." },
    de: { title: "Datenanalyst", org: "Tech Jobs Fair", desc: "Lieferung datenbasierter Erkenntnisse und Business-Intelligence-Loesungen fuer Finanz- und Technologiebranchen, Optimierung von Datenbankstrukturen und Reporting-Workflows." },
  },
  {
    date: "2022 — 2024",
    dateDe: "2022 — 2024",
    en: { title: "MSc, Data Analytics", org: "Berlin School of Business and Innovation", desc: "Specialized coursework in SQL, Python, Power BI, Tableau, data warehousing and analytical methods." },
    de: { title: "MSc Data Analytics", org: "Berlin School of Business and Innovation", desc: "Vertiefte Kurse in SQL, Python, Power BI, Tableau, Data Warehousing und analytischen Methoden." },
  },
  {
    date: "Earlier",
    dateDe: "Zuvor",
    en: { title: "Financial Analysis Background", org: "Various", desc: "Built a foundation in financial analysis that now informs a numbers-first approach to data analytics and business intelligence." },
    de: { title: "Hintergrund in Finanzanalyse", org: "Verschiedene", desc: "Fundierte Basis in Finanzanalyse, die heute einen zahlenorientierten Ansatz in Datenanalyse und Business Intelligence praegt." },
  },
];

const I18N = {
  en: {
    "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
    "nav.experience": "Experience", "nav.video": "Video", "nav.contact": "Contact", "nav.resume": "Resume ↓",
    "hero.eyebrow": "Hello, I'm",
    "hero.role": 'Data Analyst <span class="dot">•</span> Data Engineer',
    "hero.desc": "I turn raw data into decisions — building dashboards, pipelines and reports with SQL, Python, Power BI and Excel.",
    "hero.ctaProjects": "View Projects", "hero.ctaContact": "Get In Touch",
    "hero.statProjects": "Projects", "hero.statTools": "Core Tools", "hero.statMsc": "MSc Data Analytics", "hero.statDriven": "% Data-Driven",
    "about.eyebrow": "About", "about.title": "Who I am",
    "about.p1": "Turning data into decisions — I'm a Data Analyst and BI Engineer with an MSc in Data Analytics from the University for the Creative Arts / Berlin School of Business and Innovation. I work with Power BI, SQL, Excel and Python, and I'm a Databricks Academy certified Azure Databricks Platform Architect.",
    "about.p2": "At Tech Jobs Fair I analyzed event data, built dashboards and improved reporting processes. I'm based in Berlin and open to new opportunities in Data Analytics, Business Intelligence and Data Engineering — always exploring how AI and tools like LangChain can make analytics workflows smarter.",
    "about.location": "Location", "about.locationVal": "Berlin, Germany",
    "about.education": "Education", "about.languages": "Languages", "about.languagesVal": "English (C1) · German (B2, telc certified)",
    "about.keySkills": "Key Skills", "about.dwh": "Data Warehousing", "about.analytical": "Analytical Thinking", "about.dataviz": "Data Visualization",
    "skills.eyebrow": "Toolbox", "skills.title": "Skills & Proficiency",
    "projects.eyebrow": "Work", "projects.title": "My Projects",
    "projects.sub": "A snapshot of recent work. Click any card for full details. New projects get added here as I ship them.",
    "projects.all": "All", "projects.viewDetails": "View details →", "projects.domainLabel": "Domain / Function:",
    "experience.eyebrow": "Journey", "experience.title": "Experience & Education",
    "video.eyebrow": "Welcome", "video.title": "Welcome Video", "video.sub": "A short personal introduction from me.",
    "contact.eyebrow": "Get in touch", "contact.title": "Let's work together",
    "contact.sub": "Open to Data Analyst / Data Engineer roles and freelance projects. Reach out through any channel below.",
    "contact.email": "Email", "contact.call": "Call",
    "footer.built": "Built &amp; hosted on GitHub Pages.", "footer.top": "Back to top ↑",
  },
  de: {
    "nav.home": "Start", "nav.about": "Ueber mich", "nav.skills": "Faehigkeiten", "nav.projects": "Projekte",
    "nav.experience": "Erfahrung", "nav.video": "Video", "nav.contact": "Kontakt", "nav.resume": "Lebenslauf ↓",
    "hero.eyebrow": "Hallo, ich bin",
    "hero.role": 'Datenanalyst <span class="dot">•</span> Data Engineer',
    "hero.desc": "Ich verwandle Rohdaten in Entscheidungen — mit Dashboards, Pipelines und Reports in SQL, Python, Power BI und Excel.",
    "hero.ctaProjects": "Projekte ansehen", "hero.ctaContact": "Kontakt aufnehmen",
    "hero.statProjects": "Projekte", "hero.statTools": "Kern-Tools", "hero.statMsc": "MSc Data Analytics", "hero.statDriven": "% Datengetrieben",
    "about.eyebrow": "Ueber mich", "about.title": "Wer ich bin",
    "about.p1": "Daten in Entscheidungen verwandeln — ich bin Datenanalyst und BI Engineer mit einem MSc in Data Analytics von der University for the Creative Arts / Berlin School of Business and Innovation. Ich arbeite mit Power BI, SQL, Excel und Python und bin Databricks Academy zertifizierter Azure Databricks Platform Architect.",
    "about.p2": "Bei Tech Jobs Fair habe ich Eventdaten analysiert, Dashboards gebaut und Reporting-Prozesse verbessert. Ich bin in Berlin ansaessig und offen fuer neue Moeglichkeiten in Datenanalyse, Business Intelligence und Data Engineering — und erkunde staendig, wie KI und Tools wie LangChain Analytics-Workflows smarter machen koennen.",
    "about.location": "Standort", "about.locationVal": "Berlin, Deutschland",
    "about.education": "Ausbildung", "about.languages": "Sprachen", "about.languagesVal": "Englisch (C1) · Deutsch (B2, telc-zertifiziert)",
    "about.keySkills": "Kernkompetenzen", "about.dwh": "Data Warehousing", "about.analytical": "Analytisches Denken", "about.dataviz": "Datenvisualisierung",
    "skills.eyebrow": "Werkzeugkasten", "skills.title": "Faehigkeiten & Kenntnisse",
    "projects.eyebrow": "Arbeit", "projects.title": "Meine Projekte",
    "projects.sub": "Ein Ueberblick ueber aktuelle Arbeiten. Klicke auf eine Karte fuer alle Details. Neue Projekte werden hier laufend ergaenzt.",
    "projects.all": "Alle", "projects.viewDetails": "Details ansehen →", "projects.domainLabel": "Bereich / Funktion:",
    "experience.eyebrow": "Werdegang", "experience.title": "Erfahrung & Ausbildung",
    "video.eyebrow": "Willkommen", "video.title": "Willkommensvideo", "video.sub": "Eine kurze persoenliche Vorstellung von mir.",
    "contact.eyebrow": "Kontakt", "contact.title": "Lassen Sie uns zusammenarbeiten",
    "contact.sub": "Offen fuer Positionen als Datenanalyst / Data Engineer sowie Freelance-Projekte. Erreichen Sie mich ueber einen der folgenden Kanaele.",
    "contact.email": "E-Mail", "contact.call": "Anrufen",
    "footer.built": "Erstellt &amp; gehostet auf GitHub Pages.", "footer.top": "Nach oben ↑",
  }
};

let currentLang = localStorage.getItem("portfolioLang") || "de";

/* ============================================================= */

document.getElementById("year").textContent = new Date().getFullYear();

/* Scroll progress bar */
const progressBar = document.getElementById("scrollProgress");
function updateProgress() {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progressBar.style.width = scrolled + "%";
}
document.addEventListener("scroll", updateProgress);

/* Nav mobile toggle */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

/* Animated stat counters */
function animateCounters() {
  document.querySelectorAll(".stat-num").forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const timer = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(timer); }
      el.textContent = cur;
    }, 30);
  });
}

/* i18n apply */
function applyI18n() {
  document.documentElement.lang = currentLang;
  const dict = I18N[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-lang-opt]").forEach(el => {
    el.classList.toggle("active", el.dataset.langOpt === currentLang);
  });
  renderSkills();
  renderExperience();
  renderFilters();
  renderProjects(currentFilter);
}

const langToggle = document.getElementById("langToggle");
langToggle.addEventListener("click", () => {
  currentLang = currentLang === "de" ? "en" : "de";
  localStorage.setItem("portfolioLang", currentLang);
  applyI18n();
});

/* Skills render */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map(s => `
    <div class="skill-card">
      <div class="skill-head"><strong>${s[currentLang]}</strong><span>${s.level}%</span></div>
      <div class="skill-bar"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
    </div>
  `).join("");
  document.querySelectorAll(".skill-bar-fill").forEach(f => { f.style.width = f.dataset.level + "%"; });
}

/* Experience render */
function renderExperience() {
  const tl = document.getElementById("timeline");
  tl.innerHTML = EXPERIENCE.map(e => `
    <div class="timeline-item">
      <div class="t-date">${currentLang === "de" ? e.dateDe : e.date}</div>
      <h3>${e[currentLang].title}</h3>
      <div class="t-org">${e[currentLang].org}</div>
      <p>${e[currentLang].desc}</p>
    </div>
  `).join("");
}

/* Projects: fetch + render + filter + modal */
let PROJECTS = [];
let currentFilter = "all";

async function loadProjects() {
  try {
    const res = await fetch("assets/projects.json");
    PROJECTS = await res.json();
  } catch (e) {
    console.error("Could not load projects.json", e);
    PROJECTS = [];
  }
  renderFilters();
  renderProjects("all");
}

function renderFilters() {
  const tools = [...new Set(PROJECTS.map(p => p.tool))];
  const bar = document.getElementById("filterBar");
  bar.innerHTML = `<button class="filter-btn${currentFilter === "all" ? " active" : ""}" data-filter="all">${I18N[currentLang]["projects.all"]}</button>` +
    tools.map(t => `<button class="filter-btn${currentFilter === t ? " active" : ""}" data-filter="${t}">${t}</button>`).join("");
  bar.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.filter;
      bar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(currentFilter);
    });
  });
}

function renderProjects(filter) {
  currentFilter = filter;
  const grid = document.getElementById("projectsGrid");
  const list = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.tool === filter);
  grid.innerHTML = list.map(p => {
    const thumb = (p.images && p.images.length)
      ? `<img src="${p.images[0].src}" alt="${p[currentLang].title}" loading="lazy">`
      : (p.icon || "📁");
    return `
    <article class="project-card" data-id="${p.id}">
      <div class="project-thumb${p.images && p.images.length ? " has-photo" : ""}">${thumb}</div>
      <div class="project-body">
        <span class="project-tag">${p.tool}</span>
        <h3>${p[currentLang].title}</h3>
        <span class="project-domain">${p[currentLang].domain}</span>
        <p>${p[currentLang].summary}</p>
        <span class="project-cta">${I18N[currentLang]["projects.viewDetails"]}</span>
      </div>
    </article>
  `;
  }).join("");
  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });
}

/* Modal */
const overlay = document.getElementById("modalOverlay");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  const c = p[currentLang];
  const gallery = (p.images && p.images.length) ? `
    <div class="modal-gallery">
      ${p.images.map(img => `
        <figure class="modal-gallery-item">
          <img src="${img.src}" alt="${img[currentLang] || c.title}" loading="lazy">
          ${img[currentLang] ? `<figcaption>${img[currentLang]}</figcaption>` : ""}
        </figure>
      `).join("")}
    </div>
  ` : "";
  modalBody.innerHTML = `
    <span class="project-tag">${p.tool}</span>
    <h2 id="modalTitle">${c.title}</h2>
    <div class="m-domain">${I18N[currentLang]["projects.domainLabel"]} ${c.domain}</div>
    ${gallery}
    <p>${c.summary}</p>
    <ul>${c.details.map(d => `<li>${d}</li>`).join("")}</ul>
    <div class="modal-links">
      ${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("")}
    </div>
  `;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}
modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* Scroll-triggered animations (skill bars, counters) */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    if (entry.target.id === "skills") {
      document.querySelectorAll(".skill-bar-fill").forEach(f => { f.style.width = f.dataset.level + "%"; });
    }
    if (entry.target.id === "home") {
      animateCounters();
    }
  });
}, { threshold: 0.3 });

/* Init */
applyI18n();
loadProjects().then(() => { renderFilters(); renderProjects("all"); });
observer.observe(document.getElementById("skills"));
observer.observe(document.getElementById("home"));
