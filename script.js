/* ============ EDIT THIS SECTION ============ */
const GITHUB = "https://github.com/muskanadnan07-svg";

const STATS = [
  { label: "Projects Built", value: 10, icon: "layers" },
  { label: "Tools & Libraries", value: 20, suffix: "+", icon: "cpu" },
  { label: "Max Client Sales Lift", value: 25, suffix: "%", icon: "trophy" },
  { label: "Certs & Awards", value: 4, icon: "award" }
];

const TYPING = [
  "Data-Driven Solutions",
  "Interactive Power BI Dashboards",
  "Automated Python Pipelines",
  "Scalable Web Scrapers"
];

const PROJECTS = [
  {
    cat: "DATA ANALYSIS",
    title: "Netflix Dataset Analysis",
    desc: "Exploratory data analysis uncovering global content trends, genre distribution, and release velocity across 8,800+ titles.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
    img: "assets/projects/netflix-analysis.png",
    repo: GITHUB + "/Netflix-Dataset-Analysis-Visualization"
  },
  {
    cat: "BUSINESS INTELLIGENCE",
    title: "Starbucks Analytics",
    desc: "Interactive Power BI executive dashboard evaluating store revenue, product mix profitability, and regional customer trends.",
    tags: ["Power BI", "DAX", "Power Query"],
    img: "assets/projects/starbucks-dashboard.png",
    repo: GITHUB + "/Starbucks-PowerBI-Analytics"
  },
  {
    cat: "BUSINESS INTELLIGENCE",
    title: "BlinkIT Analytics",
    desc: "End-to-end retail BI dashboard tracking sales KPIs, outlet performance tiers, and inventory metrics.",
    tags: ["Power BI", "DAX", "Excel"],
    img: "assets/projects/blinkit-dashboard.png",
    repo: GITHUB + "/BlinkIT-PowerBI-Analytics"
  },
  {
    cat: "DATA VISUALIZATION",
    title: "IPL Data Analysis",
    desc: "Multi-season cricket analytics dashboard exploring match outcomes, venue impact, and player rankings (2008–2023).",
    tags: ["Power BI", "DAX", "Data Visualization"],
    img: "assets/projects/ipl-overview.png",
    repo: GITHUB + "/IPL-Data-Analysis"
  },
  {
    cat: "DATA ANALYSIS",
    title: "Returns & Refunds Analysis",
    desc: "E-commerce diagnostic dashboard identifying high-return product categories, refund patterns, and revenue leakage.",
    tags: ["Power BI", "Excel", "Data Cleaning"],
    img: "assets/projects/ecommerce-dashboard.png",
    repo: GITHUB + "/Refund-Return-Intelligence-Dashboard"
  },
  {
    cat: "AUTOMATION",
    title: "Smart Resume Collector",
    desc: "Automated n8n pipeline that parses incoming candidate resumes, logs structured data in Google Sheets, and triggers Gmail confirmations.",
    tags: ["n8n", "Google Sheets", "Gmail"],
    img: "assets/projects/smart-resume-collector.png",
    repo: GITHUB + "/Smart-Resume-Collector"
  },
  {
    show: false,
    cat: "DATA VISUALIZATION",
    title: "Techma Zone Dashboard",
    desc: "Interactive reporting dashboard showcasing KPI tracking and visual storytelling.",
    tags: ["Power BI", "Data Visualization"],
    img: "assets/projects/techma-zone-dashboard.png",
    repo: GITHUB + "/Techma-Zone-Analysis"
  },
  {
    show: false,
    cat: "PYTHON PROJECT",
    title: "SIP Calculator",
    desc: "Desktop financial utility built in Python & Tkinter to project compound returns on monthly SIP investments.",
    tags: ["Python", "Tkinter"],
    img: "assets/projects/sip-calculator.png",
    repo: GITHUB + "/SIP-Calculator"
  },
  {
    show: false,
    cat: "DATA SCIENCE PROJECT",
    title: "Movie Recommendation System",
    desc: "Content-based recommendation engine utilizing TF-IDF vectorization and cosine similarity to suggest relevant titles.",
    tags: ["Data Science", "Python", "Scikit-Learn"],
    img: "assets/projects/movie-recommendation-system.png",
    repo: GITHUB + "/Movie-Recommendation-System"
  }
];

const DETAILS = {
  "Netflix Dataset Analysis": [
    "Problem: High volume of unstructured catalog metadata across global regions.",
    "Approach: Cleaned missing director/country fields and analyzed release trends using Pandas, Seaborn, and Plotly.",
    "Outcome: Identified dominant regional genres and multi-year shift toward international TV series."
  ],
  "Starbucks Analytics": [
    "Problem: Scattered transactional records made regional product performance hard to track.",
    "Approach: Modeled ETL pipelines in Power Query and built custom DAX time-intelligence measures.",
    "Outcome: Delivered an interactive executive dashboard highlighting top-margin product categories."
  ],
  "BlinkIT Analytics": [
    "Problem: Needed visibility into sales variations across different outlet sizes and location tiers.",
    "Approach: Normalized retail data in Excel and built dynamic drill-down KPIs in Power BI.",
    "Outcome: Enabled instant comparison of Tier 1–3 outlet revenue and customer rating drivers."
  ],
  "IPL Data Analysis": [
    "Problem: 15+ seasons of granular ball-by-ball and match statistics required unified reporting.",
    "Approach: Built relational data models and DAX ranking measures covering 2008–2023.",
    "Outcome: Visualized toss impact, venue win rates, and top batting/bowling performers."
  ],
  "Returns & Refunds Analysis": [
    "Problem: Rising e-commerce refund rates were eroding net category margins.",
    "Approach: Audited order logs and return reason codes using Excel and Power BI.",
    "Outcome: Pinpointed top return-prone SKUs to guide operational quality improvements."
  ],
  "Smart Resume Collector": [
    "Problem: Manual resume screening and candidate acknowledgment slowed down hiring workflows.",
    "Approach: Built an event-driven n8n automation linking web forms, Google Sheets, and Gmail.",
    "Outcome: Eliminated 100% of manual data entry with instant candidate confirmation emails."
  ]
};

const SKILLS = [
  { cat: "CORE", title: "Programming & Analysis", accentWord: "Analysis", desc: "Clean, reproducible scripts for data wrangling and statistical exploration.", tools: ["Python", "C", "Pandas", "NumPy"] },
  { cat: "ANALYTICS", title: "Visualization & BI", accentWord: "BI", desc: "Executive dashboards and charts that turn raw metrics into clear decisions.", tools: ["Power BI", "DAX", "Power Query", "Matplotlib", "Seaborn", "Plotly"] },
  { cat: "DATA", title: "Databases & Scraping", accentWord: "Scraping", desc: "Extracting, querying, and structuring data from web and relational sources.", tools: ["SQL", "SQLite", "Selenium", "Beautiful Soup"] },
  { cat: "WORKFLOW", title: "Automation & Dev Tools", accentWord: "Automation", desc: "Repeatable pipelines, version control, and modern web fundamentals.", tools: ["n8n", "Git", "GitHub", "GitHub Desktop", "Jupyter", "VS Code", "HTML", "CSS", "JavaScript"] },
  { cat: "PRODUCTIVITY", title: "Microsoft Office", accentWord: "Office", desc: "Financial spreadsheets, structured reports, and stakeholder presentations.", tools: ["Excel", "Word", "PowerPoint"] },
  { cat: "CREATIVE", title: "Design & Motion", accentWord: "Motion", desc: "Visual hierarchy, layout polish, and motion graphics with attention to detail.", tools: ["Illustrator", "Photoshop", "After Effects"] }
];

const EDUCATION = [
  { t: "BS in Computer Science", d: "Usman Institute of Technology", date: "Sep 2026 – Present" },
  { t: "HSC in Computer Science", d: "Sir Adamjee Intermediate College", date: "Aug 2024 – May 2026" },
  { t: "SSC in Computer Science", d: "Metropolitan Academy", date: "Aug 2020 – Apr 2024" },
  { t: "Data Science with AI & Machine Learning", d: "Techma Zone", date: "2025 – Present" },
  { t: "Power BI", d: "Techma Zone", date: "Expected Nov 2026" },
  { t: "Applied Data Science and AI", d: "Techma Zone", date: "Expected 2027" }
];

const CERTS = [
  { t: "Vibe Wars – Semifinalist", d: "TechFest'26, NED University", date: "Nov 2026", link: GITHUB + "/Certificates/blob/main/Vibe_Coding_certificate.jpeg", img: "assets/Vibe_Coding_certificate.jpeg" },
  { t: "Data Science with AI & Machine Learning", d: "Techma Zone", date: "2025", link: GITHUB + "/Certificates/blob/main/techma_cer.jpeg", img: "assets/techma_cer.jpeg" },
  { t: "Power BI", d: "Techma Zone", date: "Expected Nov 2026", link: "", img: "assets/certs/power-bi-expected.svg" },
  { t: "Applied Data Science and AI", d: "Techma Zone", date: "Expected 2027", link: "", img: "assets/certs/applied-ds-ai-expected.svg" }
];
/* ============================================ */

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const highlightSerif = (text, word) => {
  const safeText = esc(text);
  if (!word) return safeText;
  const safeWord = esc(word);
  return safeText.replace(safeWord, `<span class="serif-accent">${safeWord}</span>`);
};

// Mobile menu
const menuToggle = $("#menu-toggle");
const navLinks = $("#nav-links");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll(".nav-links a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    })
  );
}

// One-click copy email
const copyBtn = $("#copy-email");
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    navigator.clipboard?.writeText(copyBtn.dataset.email).then(() => {
      const label = $("#copy-label");
      const orig = label.textContent;
      label.textContent = "Copied to clipboard!";
      setTimeout(() => (label.textContent = orig), 1800);
    });
  });
}

// Footer year
if ($("#year")) $("#year").textContent = new Date().getFullYear();

// Typing effect
const typingEl = $(".typing-text");
if (typingEl && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let w = 0, c = 0, deleting = false;
  const type = () => {
    const word = TYPING[w];
    c += deleting ? -1 : 1;
    typingEl.textContent = word.slice(0, c);
    let delay = deleting ? 35 : 75;
    if (!deleting && c === word.length) { deleting = true; delay = 1500; }
    else if (deleting && c === 0) { deleting = false; w = (w + 1) % TYPING.length; delay = 300; }
    setTimeout(type, delay);
  };
  type();
}

// Stats
const STAT_ICONS = {
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  cpu: '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4z"/><path d="M17 5h3v2a3 3 0 01-3 3M7 5H4v2a3 3 0 003 3"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>'
};
if ($("#stats")) {
  $("#stats").innerHTML = STATS.map((s) =>
    `<div class="stat"><div class="stat-ico"><svg viewBox="0 0 24 24" aria-hidden="true">${STAT_ICONS[s.icon] || ""}</svg></div>` +
    `<b data-v="${s.value}" data-s="${esc(s.suffix || "")}">00${esc(s.suffix || "")}</b><span>${esc(s.label)}</span></div>`
  ).join("");
}

const countRaf = new WeakMap();
function countUp(el) {
  const v = +el.dataset.v, suf = el.dataset.s || "";
  cancelAnimationFrame(countRaf.get(el));
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = String(v).padStart(2, "0") + suf; return; }
  const dur = 1600, t0 = performance.now();
  const tick = (now) => {
    const p = Math.min(1, (now - t0) / dur);
    const n = Math.round(v * (1 - Math.pow(1 - p, 3)));
    el.textContent = String(n).padStart(2, "0") + suf;
    if (p < 1) countRaf.set(el, requestAnimationFrame(tick));
  };
  countRaf.set(el, requestAnimationFrame(tick));
}
function resetCount(el) {
  cancelAnimationFrame(countRaf.get(el));
  el.textContent = "00" + (el.dataset.s || "");
}

// Skills
if ($("#skills-grid")) {
  $("#skills-grid").innerHTML = SKILLS.map((s) =>
    `<div class="skill-card"><div class="skill-bar"></div>` +
    `<p class="project-category">${esc(s.cat)}</p><h3>${highlightSerif(s.title, s.accentWord)}</h3><p class="skill-desc">${esc(s.desc)}</p>` +
    `<div class="tags">${s.tools.map((t) => `<span>${esc(t)}</span>`).join("")}</div></div>`
  ).join("");
}

// Lightbox Modal for Dashboard Screenshots
(function setupLightbox() {
  const modal = document.createElement("div");
  modal.id = "lightbox-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.style.cssText = "position:fixed;inset:0;z-index:2000;display:none;place-items:center;padding:1.5rem;background:rgba(7,11,20,0.88);backdrop-filter:blur(10px);";
  modal.innerHTML = `
    <div style="position:relative;max-width:920px;width:100%;background:#131C31;border:1px solid rgba(45,212,191,0.35);border-radius:16px;overflow:hidden;box-shadow:0 25px 60px rgba(0,0,0,0.75);">
      <button id="lb-close" aria-label="Close preview" style="position:absolute;top:12px;right:12px;width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,0.2);background:rgba(11,17,32,0.85);color:#fff;font-size:16px;cursor:pointer;">✕</button>
      <img id="lb-img" src="" alt="Dashboard Preview" style="width:100%;max-height:74vh;object-fit:contain;display:block;background:#0B1120;">
      <div style="padding:1rem 1.4rem;display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap;">
        <strong id="lb-title" style="color:#F8FAFC;font-size:1rem;"></strong>
        <a id="lb-link" href="#" target="_blank" rel="noopener noreferrer" class="project-link">View Code &amp; Dashboard on GitHub ↗</a>
      </div>
    </div>`;
  document.body.appendChild(modal);

  const close = () => { modal.style.display = "none"; modal.setAttribute("aria-hidden", "true"); };
  modal.addEventListener("click", (e) => { if (e.target === modal || e.target.id === "lb-close") close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.style.display === "grid") close(); });

  window.openProjectPreview = (src, title, repo) => {
    $("#lb-img").src = src;
    $("#lb-title").textContent = title;
    $("#lb-link").href = repo;
    modal.style.display = "grid";
    modal.setAttribute("aria-hidden", "false");
  };
})();

// Projects
let active = "All";
const FILTERS = [
  { name: "All", test: () => true },
  { name: "Analytics", test: (p) => ["DATA ANALYSIS", "DATA VISUALIZATION", "DATA SCIENCE PROJECT"].includes(p.cat) },
  { name: "Business Intelligence", test: (p) => p.cat === "BUSINESS INTELLIGENCE" },
  { name: "Automation", test: (p) => p.cat === "AUTOMATION" }
];

function renderProjects() {
  const list = PROJECTS.filter((p) => p.show !== false);
  const f = FILTERS.find((x) => x.name === active) || FILTERS[0];
  const shown = list.filter(f.test);
  $("#filters").innerHTML = FILTERS.map((x) =>
    `<button class="filter-btn${x.name === active ? " active" : ""}" data-t="${esc(x.name)}" aria-pressed="${x.name === active}">${esc(x.name)} <span class="count">${list.filter(x.test).length}</span></button>`
  ).join("") + `<span class="filter-total">${shown.length} of ${list.length} case studies</span>`;

  $("#projects-grid").innerHTML = shown.map((p) => {
    const repo = p.repo || GITHUB;
    const points = DETAILS[p.title] || [p.desc];
    const lastWord = p.title.split(" ").pop();
    return `<article class="project-row">
      <div class="pr-main">
        <div class="pr-thumb" title="Click to zoom screenshot" data-src="${esc(p.img)}" data-title="${esc(p.title)}" data-repo="${esc(repo)}">
          <img src="${esc(p.img)}" alt="${esc(p.title)} screenshot" loading="lazy" onerror="this.style.display='none'">
        </div>
        <div class="pr-body">
          <p class="project-category">${esc(p.cat)}</p>
          <h3>${highlightSerif(p.title, lastWord)}</h3>
          <p class="pr-desc">${esc(p.desc)}</p>
          <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        </div>
        <div class="pr-toggle"><span>Case Study</span><button class="switch" role="switch" aria-checked="false" aria-label="Show case study for ${esc(p.title)}"><i></i></button></div>
      </div>
      <div class="pr-details"><div class="pr-details-in"><div class="pr-details-pad">
        <ul>${points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        <a href="${esc(repo)}" target="_blank" rel="noopener noreferrer" class="project-link">View Repository on GitHub ↗</a>
      </div></div></div>
    </article>`;
  }).join("");

  document.querySelectorAll(".filter-btn").forEach((b) => b.addEventListener("click", () => { active = b.dataset.t; renderProjects(); }));
  document.querySelectorAll(".switch").forEach((b) => b.addEventListener("click", () => {
    const on = b.getAttribute("aria-checked") !== "true";
    b.setAttribute("aria-checked", on);
    b.closest(".project-row").classList.toggle("open", on);
  }));
  document.querySelectorAll(".pr-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const img = thumb.querySelector("img");
      if (img && img.style.display !== "none") {
        window.openProjectPreview(thumb.dataset.src, thumb.dataset.title, thumb.dataset.repo);
      }
    });
  });
}
renderProjects();

// Certificate image fallback
function certImg(c) {
  const name = c.img.split("/").pop();
  const base = name.replace(/\.[^.]+$/, "");
  const exts = [name.split(".").pop(), "jpeg", "jpg", "png", "webp"];
  const list = [c.img];
  ["assets/certs/", "assets/"].forEach((d) => exts.forEach((e) => list.push(d + base + "." + e)));
  const uniq = [...new Set(list)].map((p) => encodeURI(p));
  return `<img src="${esc(uniq[0])}" data-alts="${esc(uniq.slice(1).join("|"))}" alt="${esc(c.t)} certificate" loading="lazy" onerror="imgFallback(this)">`;
}
window.imgFallback = function (el) {
  const alts = (el.dataset.alts || "").split("|").filter(Boolean);
  if (alts.length) { el.dataset.alts = alts.slice(1).join("|"); el.src = alts[0]; }
  else el.parentNode.style.display = "none";
};

// Education & Certificates
const EDU_ICONS = {
  academic: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  techma: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
};
function eduStatus(date) {
  if (/expected/i.test(date)) return ["soon", "Upcoming"];
  if (/present/i.test(date)) return ["now", "In progress"];
  return ["done", "Completed"];
}
function eduCol(key, tag, title, items) {
  const cards = items.map((e) => {
    const [cls, label] = eduStatus(e.date);
    return `<div class="edu-item ${cls}"><span class="edu-dot"></span><div class="info-card">` +
      `<div class="edu-top"><span class="pill ${cls}">${label}</span><span class="edu-date">${esc(e.date)}</span></div>` +
      `<h3>${esc(e.t)}</h3><p>${esc(e.d)}</p></div></div>`;
  }).join("");
  const lastWord = title.split(" ").pop();
  return `<div class="edu-col"><div class="edu-col-head"><div class="edu-col-ico"><svg viewBox="0 0 24 24" aria-hidden="true">${EDU_ICONS[key]}</svg></div>` +
    `<div><p class="project-category">${tag}</p><h3>${highlightSerif(title, lastWord)}</h3></div></div><div class="edu-line">${cards}</div></div>`;
}
if ($("#edu-grid")) {
  $("#edu-grid").innerHTML =
    eduCol("academic", "ACADEMIC", "Academic Path", EDUCATION.filter((e) => e.d !== "Techma Zone")) +
    eduCol("techma", "TECHMA ZONE", "Beyond Academics", EDUCATION.filter((e) => e.d === "Techma Zone"));
}
if ($("#cert-grid")) {
  $("#cert-grid").innerHTML = CERTS.map((c) => {
    const lastWord = c.t.split(" ").pop();
    return `<div class="info-card${c.img ? " has-img" : ""}">${c.img ? `<div class="cert-img">${certImg(c)}</div>` : ""}<p class="project-category">${esc(c.date || "Completed")}</p><h3>${highlightSerif(c.t, lastWord)}</h3><p>${esc(c.d)}</p>${c.link ? `<a href="${esc(c.link)}" target="_blank" rel="noopener noreferrer" class="project-link">View Certificate ↗</a>` : ""}</div>`;
  }).join("");
}

// Scroll reveal + active nav
const sections = document.querySelectorAll(".section");
if ("IntersectionObserver" in window) {
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); reveal.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  sections.forEach((s) => reveal.observe(s));

  const statObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const nums = e.target.querySelectorAll("b");
      if (e.isIntersecting) { e.target.classList.add("in"); nums.forEach(countUp); }
      else { e.target.classList.remove("in"); nums.forEach(resetCount); }
    });
  }, { threshold: 0.35 });
  if ($("#stats")) statObs.observe($("#stats"));

  const navObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        document.querySelectorAll(".nav-links a").forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => navObs.observe(s));
}

// Subtle tilt hover (excluding borderless profile frame)
(function () {
  if (matchMedia("(hover: none)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const SEL = ".project-row, .skill-card, .info-card, .timeline-card, .about-card, .stats-row .stat";
  let current = null;
  const reset = (el) => { el.style.transform = ""; el.classList.remove("tilt-live"); };

  document.addEventListener("pointermove", (e) => {
    const card = e.target.closest ? e.target.closest(SEL) : null;
    if (current && current !== card) reset(current);
    if (!card) { current = null; return; }
    current = card;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const max = card.classList.contains("about-card") || card.classList.contains("project-row") ? 1.5 : 4.5;
    card.classList.add("tilt", "tilt-live");
    card.style.setProperty("--mx", x * 100 + "%");
    card.style.setProperty("--my", y * 100 + "%");
    card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * max * 2}deg) rotateY(${(x - 0.5) * max * 2}deg) translateY(-4px)`;
  });
  document.addEventListener("mouseleave", () => { if (current) { reset(current); current = null; } });
})();

// Header scroll progress
(function () {
  const header = document.querySelector("header");
  if (!header) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    header.style.setProperty("--p", (max > 0 ? (scrollY / max) * 100 : 0) + "%");
    header.classList.toggle("scrolled", scrollY > 20);
  };
  addEventListener("scroll", update, { passive: true });
  update();
})();

// Single-theme 3D animated background
(function () {
  const cv = document.createElement("canvas");
  cv.id = "bg3d";
  cv.setAttribute("aria-hidden", "true");
  document.body.prepend(cv);
  const ctx = cv.getContext("2d");
  if (!ctx) return;

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const PAL = [[45, 212, 191], [20, 184, 166], [94, 234, 212]];
  const mix = (t) => {
    t = (((t % 1) + 1) % 1) * 3;
    const i = Math.floor(t) % 3, f = t - Math.floor(t);
    const a = PAL[i], b = PAL[(i + 1) % 3];
    return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
  };
  const rgba = (c, a) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;
  const rnd = (a, b) => a + Math.random() * (b - a);

  let W = 0, H = 0, pts = [], mx = 0, my = 0, tmx = 0, tmy = 0, prog = 0, last = 0, raf = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = W < 700 ? 34 : 64;
    pts = Array.from({ length: n }, () => ({
      x: rnd(-1.4, 1.4), y: rnd(-1.4, 1.4), z: rnd(-1.4, 1.4),
      vx: rnd(-0.025, 0.025), vy: rnd(-0.025, 0.025), vz: rnd(-0.025, 0.025), s: Math.random()
    }));
  }

  function rot(x, y, z, ay, ax) {
    let c = Math.cos(ay), s = Math.sin(ay);
    const x1 = x * c + z * s, z1 = -x * s + z * c;
    c = Math.cos(ax); s = Math.sin(ax);
    return [x1, y * c - z1 * s, y * s + z1 * c];
  }

  function frame(t) {
    const dt = reduce ? 0 : Math.min(0.05, (t - last) / 1000 || 0.016);
    last = t;
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const target = Math.min(1, Math.max(0, scrollY / max));
    prog = reduce ? target : prog + (target - prog) * 0.06;
    mx += (tmx - mx) * 0.05; my += (tmy - my) * 0.05;

    const time = reduce ? 0 : t / 1000;
    const ay = prog * Math.PI * 0.8 + time * 0.025 + mx * 0.18;
    const ax = Math.sin(prog * 3.5) * 0.3 + my * 0.18 + 0.15;
    const D = 3.7 - Math.sin(prog * Math.PI) * 0.35;
    const F = Math.max(W, H) * 0.6;
    const hue = prog * 0.6;

    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";

    const P = pts.map((p) => {
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      if (Math.abs(p.x) > 1.5) p.vx *= -1;
      if (Math.abs(p.y) > 1.5) p.vy *= -1;
      if (Math.abs(p.z) > 1.5) p.vz *= -1;
      const r = rot(p.x, p.y, p.z, ay, ax);
      const d = D + r[2];
      const f = F / Math.max(0.4, d);
      return { x: W / 2 + r[0] * f, y: H / 2 + r[1] * f, d, s: p.s, wx: p.x, wy: p.y, wz: p.z };
    });

    ctx.lineWidth = 1;
    for (let i = 0; i < P.length; i++) {
      for (let j = i + 1; j < P.length; j++) {
        const a = P[i], b = P[j];
        const dx = a.wx - b.wx, dy = a.wy - b.wy, dz = a.wz - b.wz;
        const q = dx * dx + dy * dy + dz * dz;
        if (q < 0.42) {
          const al = (1 - q / 0.42) * 0.13 * Math.min(1, 2.2 / ((a.d + b.d) / 2));
          ctx.strokeStyle = rgba(mix(hue + (a.s + b.s) * 0.2), al);
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }

    for (const p of P) {
      const k = Math.min(1.5, 3.2 / p.d);
      const c = mix(hue + p.s * 0.4);
      ctx.fillStyle = rgba(c, 0.06);
      ctx.beginPath(); ctx.arc(p.x, p.y, (3 + p.s * 3.2) * k, 0, 6.2832); ctx.fill();
      ctx.fillStyle = rgba(c, 0.36);
      ctx.beginPath(); ctx.arc(p.x, p.y, (1 + p.s * 1.4) * k, 0, 6.2832); ctx.fill();
    }
  }

  function loop(t) { frame(t); raf = requestAnimationFrame(loop); }
  resize();
  let rt;
  addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { resize(); if (reduce) frame(0); }, 150); });
  addEventListener("pointermove", (e) => { tmx = e.clientX / W - 0.5; tmy = e.clientY / H - 0.5; }, { passive: true });
  raf = requestAnimationFrame(loop);
})();