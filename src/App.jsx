import { useState, useEffect, useRef } from "react";

// ═══════════════════════════════════════════════════════════════════
//  ✏️  EDIT YOUR PORTFOLIO HERE — change anything below this line
// ═══════════════════════════════════════════════════════════════════

const ME = {
  name: "Salim Arshad",
  tagline: "Data Analyst · Data Journalist · Civic Technologist",
  bio: "I work at the intersection of data, public policy, and storytelling. Currently an AWS Cloud Billing & O2C Associate — building toward a career in data journalism and civic analytics. I find the signal in noise that others skip past.",
  location: "West Bengal, India",
  github: "https://github.com/salimarshad07",
  linkedin: "https://www.linkedin.com/in/salim-arshad",
  email: "salim.arshad07@gmail.com",
};

const PROJECTS = [
  {
    id: "proj_001",
    num: "001",
    badge: "FEATURED",
    title: "India's Employment Crisis — A Data Story",
    desc: "A judge called India's unemployed youth \"cockroaches.\" 22 million people responded in 7 days. I went to the data. Built a full multi-panel Tableau dashboard using World Bank, PLFS/MoSPI, ILO, and CMIE data — covering 30 years of youth unemployment, GDP vs jobs divergence, state-by-state breakdown, rupee depreciation, and inflation timelines.",
    insight: "44.5% of Indian graduates aged 20–24 are unemployed. Youth make up 83% of India's total unemployed. India's GDP grew 7× since 2000 — but youth jobs never caught up.",
    tags: ["Tableau Public", "Excel", "World Bank", "PLFS / MoSPI", "ILO", "CMIE"],
    highlightTags: ["Tableau Public", "Excel"],
    categoryTag: "Data Journalism",
    link1: { label: "LIVE DASHBOARD", url: "https://lnkd.in/gdymgRB8" },
    link2: { label: "GITHUB REPO", url: "https://lnkd.in/gSmiMisQ" },
    status: "live",
  },
  {
    id: "proj_002",
    num: "002",
    badge: null,
    title: "AWS Cloud Cost Anomaly Detector",
    desc: "Built an Excel-based anomaly detection model using z-score thresholds on AWS Cost & Usage Reports (CUR). Reduced manual review time by ~40% for a Fortune 500 Oil & Gas client by automating spike flagging across 12 service dimensions.",
    insight: "Flagged 3 billing anomalies worth ~$47K in a single quarter that had been missed in manual review cycles.",
    tags: ["Excel / Power Query", "AWS CUR", "Z-Score Model"],
    highlightTags: ["Excel / Power Query"],
    categoryTag: "FinOps",
    link1: { label: "CASE STUDY", url: "#" },
    link2: { label: "METHODOLOGY", url: "#" },
    status: "live",
  },
  {
    id: "proj_003",
    num: "003",
    badge: "COMPLETED",
    title: "West Bengal 2026 — Electoral Data Analysis",
    desc: "Constituency-level analysis of the 2026 West Bengal Legislative Assembly elections. 293 constituencies, 6.3 crore votes cast, 92.93% voter turnout — the highest in state history. Mapped vote-share distribution, margin categories, and what a 5-point lead in vote share actually means under first-past-the-post.",
    insight: "BJP 214 seats (45.84% vote share) vs AITC 79 seats (40.80%). A 5.04 percentage point difference produced a 135-seat gap — illustrating how FPTP amplifies mandates. 75 out of 100 seats won by 20,000+ vote margins.",
    tags: ["Python", "Pandas", "ECI Data", "Electoral Analysis"],
    highlightTags: ["Python", "Pandas"],
    categoryTag: "Civic Data",
    link1: { label: "VIEW ANALYSIS", url: "#" },
    link2: null,
    status: "live",
  },
  {
    id: "proj_004",
    num: "004",
    badge: "IN PROGRESS",
    title: "Netflix Content Analysis Dashboard",
    desc: "3 interactive Tableau pages analyzing 8,807 Netflix titles. Page 1: Overview (6,131 movies vs 2,676 shows, peak growth 2019). Page 2: Genre & rating breakdown. Page 3: Interactive world map — USA leads with 2,032 titles, India is #2 and growing fast.",
    insight: "Netflix added more content in 2015–2019 than in all previous years combined. Content additions dropped post-2019 — suggesting a strategic shift in focus.",
    tags: ["Tableau Public", "Data Cleaning", "Excel"],
    highlightTags: ["Tableau Public"],
    categoryTag: "Media Analytics",
    link1: { label: "TABLEAU PUBLIC", url: "#" },
    link2: null,
    status: "wip",
  },
];

// ✏️ Add your writings/posts here
const WRITINGS = [
  {
    id: "w_001",
    platform: "LinkedIn",
    category: "Data Journalism · Viral Post",
    title: "A Judge Called India's Unemployed Youth \"Cockroaches.\" Here's What the Data Says.",
    desc: "When a judge's remark sparked national outrage, I built the data case. This post reached 22M+ people in 7 days — not because it was controversial, but because the numbers were undeniable.",
    url: "https://www.linkedin.com/posts/salim-arshad",
    reactions: "22M+ reach · 43 reposts · 209 comments",
  },
  {
    id: "w_002",
    platform: "LinkedIn",
    category: "Electoral Analysis · Data Post",
    title: "West Bengal Legislative Assembly Election 2026 — A Data Analysis",
    desc: "293 constituencies. 6.3 crore votes. 92.93% turnout — the highest in state history. I broke down what the numbers actually tell us about mandate, margin, and the mathematics of FPTP.",
    url: "#",
    reactions: "216 comments",
  },
  {
    id: "w_003",
    platform: "LinkedIn",
    category: "Media Analytics · Dashboard Launch",
    title: "Just Published: Netflix Content Analysis Dashboard on Tableau Public",
    desc: "3 interactive pages analyzing 8,807 Netflix titles — genre distribution, content growth timeline, and an interactive world map showing where content actually comes from.",
    url: "#",
    reactions: "Published 1 week ago",
  },
];

// ═══════════════════════════════════════════════════════════════════
//  STOP EDITING — the component code starts here
// ═══════════════════════════════════════════════════════════════════

const NAV_ITEMS = ["WORK", "WRITING", "ABOUT"];

function useScrollSpy() {
  const [active, setActive] = useState("WORK");
  useEffect(() => {
    const handler = () => {
      const sections = ["WORK", "WRITING", "ABOUT"];
      for (const id of sections.slice().reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const active = useScrollSpy();
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <div className="root">
      <style>{CSS}</style>

      {/* ── NAV ── */}
      <nav className="nav">
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          SA
        </button>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className={`nav-link ${active === item ? "nav-link--active" : ""}`}
              onClick={() => scrollTo(item)}
            >
              {item}
            </button>
          ))}
          <a href={ME.github} target="_blank" rel="noreferrer" className="nav-cta">
            GITHUB ↗
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header className="hero">
        <div className="hero-grid-bg" aria-hidden />
        <div className="hero-inner">
          <div className="hero-label">PORTFOLIO · {new Date().getFullYear()}</div>
          <h1 className="hero-name">{ME.name}</h1>
          <p className="hero-tagline">{ME.tagline}</p>
          <p className="hero-bio">{ME.bio}</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo("WORK")}>
              VIEW WORK ↓
            </button>
            <a href={`mailto:${ME.email}`} className="btn-secondary">
              GET IN TOUCH
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-num">3+</span><span className="stat-label">Projects Live</span></div>
            <div className="stat-div" />
            <div className="stat"><span className="stat-num">22M+</span><span className="stat-label">Viral Reach</span></div>
            <div className="stat-div" />
            <div className="stat"><span className="stat-num">30yr</span><span className="stat-label">Data Analysed</span></div>
          </div>
        </div>
      </header>

      <main>
        {/* ── PROJECTS ── */}
        <section id="WORK" className="section">
          <div className="section-header">
            <span className="section-label">SELECTED WORK</span>
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="projects-list">
            {PROJECTS.map((p, i) => (
              <article
                key={p.id}
                className={`project-card ${p.status === "wip" ? "project-card--wip" : ""} ${expandedProject === p.id ? "project-card--open" : ""}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="project-top">
                  <div className="project-meta">
                    <span className="project-num">_{p.num}</span>
                    {p.badge && (
                      <span className={`project-badge ${p.status === "wip" ? "badge--wip" : p.badge === "COMPLETED" ? "badge--done" : "badge--featured"}`}>
                        {p.badge}
                      </span>
                    )}
                    <span className="project-cat">{p.categoryTag}</span>
                  </div>
                  <button
                    className="project-expand"
                    onClick={() => setExpandedProject(expandedProject === p.id ? null : p.id)}
                    aria-label="expand"
                  >
                    {expandedProject === p.id ? "−" : "+"}
                  </button>
                </div>

                <h3 className="project-title">{p.title}</h3>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className={`tag ${p.highlightTags.includes(t) ? "tag--accent" : ""}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {expandedProject === p.id && (
                  <div className="project-expanded">
                    <p className="project-desc">{p.desc}</p>
                    <div className="project-insight">
                      <span className="insight-label">KEY INSIGHT</span>
                      <p>{p.insight}</p>
                    </div>
                  </div>
                )}

                <div className="project-links">
                  {p.link1 && (
                    <a href={p.link1.url} target="_blank" rel="noreferrer" className={`link-btn ${p.link1.url === "#" ? "link-btn--disabled" : "link-btn--primary"}`}>
                      {p.link1.label} ↗
                    </a>
                  )}
                  {p.link2 && (
                    <a href={p.link2.url} target="_blank" rel="noreferrer" className="link-btn link-btn--ghost">
                      {p.link2.label} ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── WRITING ── */}
        <section id="WRITING" className="section section--alt">
          <div className="section-header">
            <span className="section-label">PUBLIC WRITING</span>
            <h2 className="section-title">Writing</h2>
          </div>
          <div className="writings-list">
            {WRITINGS.map((w, i) => (
              <article key={w.id} className="writing-card" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="writing-meta">
                  <span className="writing-platform">{w.platform}</span>
                  <span className="writing-cat">{w.category}</span>
                </div>
                <h3 className="writing-title">{w.title}</h3>
                <p className="writing-desc">{w.desc}</p>
                <div className="writing-footer">
                  <span className="writing-reactions">{w.reactions}</span>
                  <a href={w.url} target="_blank" rel="noreferrer" className="writing-link">
                    READ POST ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="ABOUT" className="section">
          <div className="section-header">
            <span className="section-label">WHO I AM</span>
            <h2 className="section-title">About</h2>
          </div>
          <div className="about-grid">
            <div className="about-left">
              <p className="about-text">
                I'm <strong>Salim Arshad</strong> — currently working as an AWS Cloud Billing &amp; O2C Associate, building toward a career in data journalism and civic analytics.
              </p>
              <p className="about-text">
                My work sits at the intersection of public data, policy, and storytelling. I don't just make dashboards — I ask what the numbers mean for real people, and then I find out.
              </p>
              <p className="about-text">
                When a judge called India's unemployed youth "cockroaches," I didn't argue — I built a 30-year data model. When West Bengal held its highest-ever-turnout election, I mapped every constituency margin. That's how I work.
              </p>
              <div className="about-links">
                <a href={ME.github} target="_blank" rel="noreferrer" className="about-link">GitHub ↗</a>
                <a href={ME.linkedin} target="_blank" rel="noreferrer" className="about-link">LinkedIn ↗</a>
                <a href={`mailto:${ME.email}`} className="about-link">Email ↗</a>
              </div>
            </div>
            <div className="about-right">
              <div className="skills-block">
                <div className="skill-group">
                  <span className="skill-group-label">TOOLS</span>
                  {["Tableau Public", "Excel / Power Query", "Python", "Pandas", "SQL"].map(s => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
                <div className="skill-group">
                  <span className="skill-group-label">DOMAINS</span>
                  {["Data Journalism", "Civic Analytics", "Electoral Data", "FinOps", "Cloud Billing"].map(s => (
                    <span key={s} className="skill-chip skill-chip--gold">{s}</span>
                  ))}
                </div>
                <div className="skill-group">
                  <span className="skill-group-label">DATA SOURCES</span>
                  {["World Bank", "PLFS / MoSPI", "ILO", "CMIE", "ECI", "AWS CUR"].map(s => (
                    <span key={s} className="skill-chip skill-chip--muted">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-name">{ME.name}</span>
          <span className="footer-loc">📍 {ME.location}</span>
          <span className="footer-copy">Built with React · {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}

// ── STYLES ──────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0a0a0a;
    --bg-alt: #0f0f0f;
    --surface: #141414;
    --surface-2: #1c1c1c;
    --border: rgba(255,255,255,0.07);
    --text: #e8e8e4;
    --text-muted: #666;
    --text-dim: #444;
    --accent: #c8f135;
    --accent-dim: rgba(200,241,53,0.12);
    --accent-border: rgba(200,241,53,0.3);
    --gold: #f5c842;
    --gold-dim: rgba(245,200,66,0.12);
    --red: #ff4444;
    --font-display: 'Syne', sans-serif;
    --font-mono: 'DM Mono', monospace;
    --font-body: 'DM Sans', sans-serif;
    --max-w: 900px;
    --nav-h: 60px;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  .root { min-height: 100vh; }

  /* ── NAV ── */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    height: var(--nav-h);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 clamp(1rem, 5vw, 3rem);
    background: rgba(10,10,10,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }
  .nav-logo {
    font-family: var(--font-display);
    font-weight: 800; font-size: 1.1rem;
    color: var(--accent); background: none; border: none;
    cursor: pointer; letter-spacing: 0.05em;
  }
  .nav-links { display: flex; align-items: center; gap: 0.25rem; }
  .nav-link {
    font-family: var(--font-mono); font-size: 0.7rem;
    letter-spacing: 0.1em; color: var(--text-muted);
    background: none; border: none; cursor: pointer;
    padding: 0.5rem 0.75rem; border-radius: 4px;
    transition: color 0.2s, background 0.2s;
  }
  .nav-link:hover { color: var(--text); }
  .nav-link--active { color: var(--accent) !important; background: var(--accent-dim); }
  .nav-cta {
    font-family: var(--font-mono); font-size: 0.7rem;
    letter-spacing: 0.1em; color: var(--bg);
    background: var(--accent); border: none;
    padding: 0.4rem 0.9rem; border-radius: 4px;
    text-decoration: none; margin-left: 0.5rem;
    transition: opacity 0.2s;
  }
  .nav-cta:hover { opacity: 0.85; }

  /* ── HERO ── */
  .hero {
    position: relative; overflow: hidden;
    min-height: 100vh; padding-top: var(--nav-h);
    display: flex; align-items: center;
  }
  .hero-grid-bg {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(200,241,53,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(200,241,53,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
  }
  .hero-inner {
    position: relative; z-index: 1;
    max-width: var(--max-w);
    margin: 0 auto;
    padding: clamp(3rem,8vh,6rem) clamp(1rem,5vw,3rem);
  }
  .hero-label {
    font-family: var(--font-mono); font-size: 0.7rem;
    letter-spacing: 0.2em; color: var(--accent);
    margin-bottom: 1.5rem;
  }
  .hero-name {
    font-family: var(--font-display);
    font-size: clamp(2.8rem, 8vw, 5.5rem);
    font-weight: 800; line-height: 0.95;
    letter-spacing: -0.02em;
    margin-bottom: 1rem;
  }
  .hero-tagline {
    font-family: var(--font-mono); font-size: 0.85rem;
    color: var(--accent); letter-spacing: 0.05em;
    margin-bottom: 1.5rem;
  }
  .hero-bio {
    font-size: 1.05rem; color: #aaa;
    max-width: 600px; line-height: 1.7;
    margin-bottom: 2.5rem;
  }
  .hero-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 3rem; }
  .btn-primary {
    font-family: var(--font-mono); font-size: 0.75rem;
    letter-spacing: 0.12em; color: var(--bg);
    background: var(--accent); border: none;
    padding: 0.75rem 1.5rem; cursor: pointer;
    border-radius: 4px; transition: opacity 0.2s;
  }
  .btn-primary:hover { opacity: 0.85; }
  .btn-secondary {
    font-family: var(--font-mono); font-size: 0.75rem;
    letter-spacing: 0.12em; color: var(--text);
    background: none;
    border: 1px solid var(--border);
    padding: 0.75rem 1.5rem;
    border-radius: 4px; text-decoration: none;
    transition: border-color 0.2s, color 0.2s;
  }
  .btn-secondary:hover { border-color: var(--accent); color: var(--accent); }
  .hero-stats { display: flex; align-items: center; gap: 1.5rem; }
  .stat { display: flex; flex-direction: column; }
  .stat-num {
    font-family: var(--font-display); font-weight: 800;
    font-size: 1.6rem; color: var(--accent); line-height: 1;
  }
  .stat-label {
    font-family: var(--font-mono); font-size: 0.62rem;
    color: var(--text-muted); letter-spacing: 0.1em;
    margin-top: 0.2rem;
  }
  .stat-div { width: 1px; height: 2.5rem; background: var(--border); }

  /* ── SECTION ── */
  .section {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: clamp(4rem,8vw,7rem) clamp(1rem,5vw,3rem);
  }
  .section--alt { background: none; }
  .section-header { margin-bottom: 3rem; }
  .section-label {
    font-family: var(--font-mono); font-size: 0.65rem;
    letter-spacing: 0.25em; color: var(--accent);
    display: block; margin-bottom: 0.5rem;
  }
  .section-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800; letter-spacing: -0.02em;
  }

  /* ── PROJECT CARDS ── */
  .projects-list { display: flex; flex-direction: column; gap: 1px; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }

  .project-card {
    background: var(--surface);
    padding: 1.75rem 2rem;
    border-bottom: 1px solid var(--border);
    transition: background 0.2s;
    animation: fadeUp 0.5s ease both;
  }
  .project-card:last-child { border-bottom: none; }
  .project-card:hover { background: var(--surface-2); }
  .project-card--wip { opacity: 0.75; }
  .project-card--wip:hover { opacity: 1; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .project-top {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 0.75rem;
  }
  .project-meta { display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap; }
  .project-num {
    font-family: var(--font-mono); font-size: 0.65rem;
    color: var(--text-dim); letter-spacing: 0.1em;
  }
  .project-badge {
    font-family: var(--font-mono); font-size: 0.6rem;
    letter-spacing: 0.12em; padding: 0.2rem 0.5rem;
    border-radius: 3px; font-weight: 500;
  }
  .badge--featured { background: var(--accent-dim); color: var(--accent); border: 1px solid var(--accent-border); }
  .badge--wip { background: rgba(255,160,0,0.12); color: #ffa000; border: 1px solid rgba(255,160,0,0.3); }
  .badge--done { background: rgba(100,220,130,0.12); color: #64dc82; border: 1px solid rgba(100,220,130,0.3); }
  .project-cat {
    font-family: var(--font-mono); font-size: 0.6rem;
    letter-spacing: 0.08em; color: var(--gold);
    background: var(--gold-dim);
    padding: 0.2rem 0.5rem; border-radius: 3px;
  }
  .project-expand {
    font-size: 1.3rem; line-height: 1;
    color: var(--text-muted); background: none; border: none;
    cursor: pointer; padding: 0.25rem 0.5rem;
    border-radius: 4px; transition: color 0.2s, background 0.2s;
  }
  .project-expand:hover { color: var(--accent); background: var(--accent-dim); }

  .project-title {
    font-family: var(--font-display);
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-weight: 700; line-height: 1.2;
    margin-bottom: 1rem;
    letter-spacing: -0.01em;
  }

  .project-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.25rem; }
  .tag {
    font-family: var(--font-mono); font-size: 0.62rem;
    letter-spacing: 0.05em; padding: 0.25rem 0.6rem;
    background: var(--surface-2); color: var(--text-muted);
    border: 1px solid var(--border); border-radius: 3px;
  }
  .tag--accent { background: var(--accent-dim); color: var(--accent); border-color: var(--accent-border); }

  .project-expanded {
    border-top: 1px solid var(--border);
    padding-top: 1.25rem;
    margin-bottom: 1.25rem;
    animation: fadeUp 0.25s ease both;
  }
  .project-desc { font-size: 0.92rem; color: #999; line-height: 1.7; margin-bottom: 1rem; }
  .project-insight {
    background: var(--accent-dim);
    border-left: 3px solid var(--accent);
    padding: 0.9rem 1rem;
    border-radius: 0 4px 4px 0;
  }
  .insight-label {
    font-family: var(--font-mono); font-size: 0.6rem;
    letter-spacing: 0.15em; color: var(--accent);
    display: block; margin-bottom: 0.35rem;
  }
  .project-insight p { font-size: 0.88rem; color: #ccc; line-height: 1.6; }

  .project-links { display: flex; gap: 0.5rem; flex-wrap: wrap; }
  .link-btn {
    font-family: var(--font-mono); font-size: 0.65rem;
    letter-spacing: 0.1em; padding: 0.45rem 0.9rem;
    border-radius: 4px; text-decoration: none; border: 1px solid;
    transition: all 0.2s;
  }
  .link-btn--primary { color: var(--accent); border-color: var(--accent-border); background: var(--accent-dim); }
  .link-btn--primary:hover { background: var(--accent); color: var(--bg); }
  .link-btn--ghost { color: var(--text-muted); border-color: var(--border); background: none; }
  .link-btn--ghost:hover { color: var(--text); border-color: #555; }
  .link-btn--disabled { color: var(--text-dim); border-color: var(--border); background: none; pointer-events: none; }

  /* ── WRITING CARDS ── */
  .writings-list { display: flex; flex-direction: column; gap: 1.25rem; }
  .writing-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px; padding: 1.5rem 1.75rem;
    animation: fadeUp 0.5s ease both;
    transition: border-color 0.2s;
  }
  .writing-card:hover { border-color: rgba(200,241,53,0.25); }
  .writing-meta { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.7rem; flex-wrap: wrap; }
  .writing-platform {
    font-family: var(--font-mono); font-size: 0.62rem;
    letter-spacing: 0.12em; color: var(--accent);
    background: var(--accent-dim); border: 1px solid var(--accent-border);
    padding: 0.2rem 0.5rem; border-radius: 3px;
  }
  .writing-cat {
    font-family: var(--font-mono); font-size: 0.62rem;
    color: var(--text-muted); letter-spacing: 0.05em;
  }
  .writing-title {
    font-family: var(--font-display);
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: 700; line-height: 1.3;
    margin-bottom: 0.6rem;
    letter-spacing: -0.01em;
  }
  .writing-desc { font-size: 0.88rem; color: #888; line-height: 1.65; margin-bottom: 1rem; }
  .writing-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; }
  .writing-reactions { font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-dim); letter-spacing: 0.05em; }
  .writing-link {
    font-family: var(--font-mono); font-size: 0.65rem;
    letter-spacing: 0.1em; color: var(--accent);
    text-decoration: none; transition: opacity 0.2s;
  }
  .writing-link:hover { opacity: 0.7; }

  /* ── ABOUT ── */
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
  @media (max-width: 700px) { .about-grid { grid-template-columns: 1fr; gap: 2.5rem; } }
  .about-text { font-size: 0.95rem; color: #999; line-height: 1.75; margin-bottom: 1rem; }
  .about-text strong { color: var(--text); }
  .about-links { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem; }
  .about-link {
    font-family: var(--font-mono); font-size: 0.7rem;
    letter-spacing: 0.1em; color: var(--accent);
    text-decoration: none; transition: opacity 0.2s;
    border-bottom: 1px solid var(--accent-border);
    padding-bottom: 0.1rem;
  }
  .about-link:hover { opacity: 0.7; }

  .skills-block { display: flex; flex-direction: column; gap: 1.5rem; }
  .skill-group { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
  .skill-group-label {
    font-family: var(--font-mono); font-size: 0.6rem;
    letter-spacing: 0.2em; color: var(--text-dim);
    width: 100%; margin-bottom: 0.1rem;
  }
  .skill-chip {
    font-family: var(--font-mono); font-size: 0.65rem;
    padding: 0.3rem 0.7rem; border-radius: 4px;
    background: var(--surface-2); color: var(--text-muted);
    border: 1px solid var(--border); letter-spacing: 0.03em;
  }
  .skill-chip--gold { background: var(--gold-dim); color: var(--gold); border-color: rgba(245,200,66,0.25); }
  .skill-chip--muted { background: var(--surface); color: var(--text-dim); border-color: var(--border); }

  /* ── FOOTER ── */
  .footer {
    border-top: 1px solid var(--border);
    padding: 1.5rem clamp(1rem, 5vw, 3rem);
  }
  .footer-inner {
    max-width: var(--max-w); margin: 0 auto;
    display: flex; align-items: center; gap: 1.5rem;
    flex-wrap: wrap;
  }
  .footer-name { font-family: var(--font-display); font-weight: 700; font-size: 0.9rem; }
  .footer-loc { font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); }
  .footer-copy { font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-dim); margin-left: auto; }

  /* ── RESPONSIVE ── */
  @media (max-width: 600px) {
    .hero-stats { gap: 1rem; }
    .stat-num { font-size: 1.3rem; }
    .project-card { padding: 1.25rem; }
    .nav-cta { display: none; }
  }
`;
