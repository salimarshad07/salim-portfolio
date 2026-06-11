import { useState, useEffect } from "react";

const ME = {
  name: "Salim Arshad",
  tagline: "Data Analyst · Data Journalist · Civic Technologist",
  bio: "I work at the intersection of data, public policy, and storytelling. Currently an AWS Cloud Billing & O2C Associate — building toward a career in data journalism and civic analytics. I fi[...]
  location: "West Bengal, India",
  github: "https://github.com/salimarshad07",
  linkedin: "https://www.linkedin.com/in/salim-arshad",
  email: "salim.arshad1515@gmail.com",
};

const PROJECTS = [
  {
    id: "proj_001", num: "001", badge: "FEATURED", category: "Data Journalism",
    title: "India's Employment Crisis — A Data Story",
    subtitle: "30 years of data. One viral moment. The numbers nobody wanted to talk about.",
    desc: "A judge called India's unemployed youth \"cockroaches.\" 22 million people responded in 7 days. I went to the data. Built a full multi-panel Tableau dashboard using World Bank, PLFS/MoS[...]
    insights: ["44.5% of Indian graduates aged 20–24 are unemployed","Youth make up 83% of India's total unemployed","India's GDP grew 7× since 2000 — but youth jobs never caught up","The rup[...]
    tools: ["Tableau Public", "Microsoft Excel"],
    dataSources: [{ name: "World Bank", url: "https://data.worldbank.org" },{ name: "PLFS / MoSPI", url: "https://mospi.gov.in" },{ name: "ILO", url: "https://ilostat.ilo.org" },{ name: "CMIE", ur[...]
    links: { tableau: "https://lnkd.in/gdymgRB8", github: "https://lnkd.in/gSmiMisQ", linkedin: "https://www.linkedin.com/in/salim-arshad" },
    status: "live",
  },
  {
    id: "proj_002", num: "002", badge: null, category: "FinOps",
    title: "AWS Cloud Cost Anomaly Detector",
    subtitle: "Excel-based z-score model that caught $47K in missed billing anomalies.",
    desc: "Built an Excel-based anomaly detection model using z-score thresholds on AWS Cost & Usage Reports (CUR). Reduced manual review time by ~40% for a Fortune 500 Oil & Gas client by automat[...]
    insights: ["Flagged 3 billing anomalies worth ~$47K in a single quarter","Reduced manual review time by ~40%","Automated spike flagging across 12 AWS service dimensions","Deployed for a Fortun[...]
    tools: ["Excel / Power Query", "Z-Score Modelling", "AWS CUR"],
    dataSources: [{ name: "AWS Cost & Usage Reports", url: "https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/" }],
    links: { github: "https://github.com/salimarshad07", linkedin: "https://www.linkedin.com/in/salim-arshad" },
    status: "live",
  },
  {
    id: "proj_003", num: "003", badge: "COMPLETED", category: "Civic Data",
    title: "West Bengal 2026 — Electoral Data Analysis",
    subtitle: "293 constituencies. 92.93% turnout. What the numbers say about a historic mandate.",
    desc: "Constituency-level analysis of the 2026 West Bengal Legislative Assembly elections. 293 constituencies, 6.3 crore votes cast, 92.93% voter turnout — the highest in state history. Mapp[...]
    insights: ["BJP won 214 seats with 45.84% vote share","AITC won 79 seats with 40.80% vote share","A 5.04 point vote share gap produced a 135-seat difference","75 out of 100 seats won by 20,000[...]
    tools: ["Python", "Pandas", "Data Visualization"],
    dataSources: [{ name: "Election Commission of India", url: "https://eci.gov.in" },{ name: "ECI Results", url: "https://results.eci.gov.in" }],
    links: { github: "https://github.com/salimarshad07/west_bengal_election_2026_analysis", linkedin: "https://www.linkedin.com/in/salim-arshad" },
    status: "live",
  },
  {
    id: "proj_004", num: "004", badge: "IN PROGRESS", category: "Media Analytics",
    title: "Netflix Content Analysis Dashboard",
    subtitle: "3 interactive Tableau pages. 8,807 titles. Where content actually comes from.",
    desc: "3 interactive Tableau pages analyzing 8,807 Netflix titles. Overview of 6,131 movies vs 2,676 shows, peak growth in 2019, genre and rating breakdown, and an interactive world map showin[...]
    insights: ["8,807 Netflix titles analyzed across 3 dashboard pages","6,131 Movies vs 2,676 TV Shows","Content growth peaked in 2019","Netflix added more content in 2015–2019 than all prior y[...]
    tools: ["Tableau Public", "Excel", "Data Cleaning"],
    dataSources: [{ name: "Kaggle Netflix Dataset", url: "https://www.kaggle.com/datasets/shivamb/netflix-shows" }],
    links: { tableau: "#", github: "https://github.com/salimarshad07/netflix_content_analysis_dashboard", linkedin: "https://www.linkedin.com/in/salim-arshad" },
    status: "wip",
  },
  {
    id: "proj_005", num: "005", badge: "COMPLETED", category: "E-Commerce Analytics",
    title: "Blinkit Quick Commerce Analytics",
    subtitle: "2,500 customers. 1,061 orders. Tier-2/3 cities drive real growth.",
    desc: "Full-stack analytics project analyzing Blinkit's e-commerce operations across 2,500 customers and 1,061 orders. Built interactive Tableau dashboard with 4 key visualizations: delivery performance (69.84% on-time rate), revenue by customer segment (Regular > Premium), category margin analysis (Instant & Frozen Food 40% highest), and geographic insights revealing Tier-2/3 cities as growth engines. SQL queries analyzed customer segments, delivery efficiency, and profitability across 268 product categories.",
    insights: ["Regular customers generate MORE revenue than Premium segment — counterintuitive finding","30% of orders face delays — critical ops issue for speed-first brand","Instant & Frozen Food has 40% margin vs Grocery 15% — margin inversion","Tier-2/3 cities (Saharsa, Orai) outperform metros — true growth opportunity","Average order value ₹2,227 with right skew from high-value orders"],
    tools: ["Tableau Public", "Python", "MySQL", "Pandas", "Excel"],
    dataSources: [{ name: "Blinkit E-Commerce Dataset", url: "https://github.com/salimarshad07/blinkit-analytics" },{ name: "Custom MySQL Database", url: "#" }],
    links: { tableau: "https://public.tableau.com/views/BlinkITEcomAnalyticsFindings2023-24/BlinkitAnalyticsDashboard?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link", github: "https://github.com/salimarshad07/blinkit-analytics", linkedin: "https://www.linkedin.com/in/salim-arshad" },
    status: "live",
  },
];

const WRITINGS = [
  { id: "w_001", platform: "LinkedIn", category: "Data Journalism · Viral Post", title: "A Judge Called India's Unemployed Youth \"Cockroaches.\" Here's What the Data Says.", desc: "When a judge'[...]
  { id: "w_002", platform: "LinkedIn", category: "Electoral Analysis", title: "West Bengal Legislative Assembly Election 2026 — A Data Analysis", desc: "293 constituencies. 6.3 crore votes. 92.9[...]
  { id: "w_003", platform: "LinkedIn", category: "Media Analytics", title: "Just Published: Netflix Content Analysis Dashboard on Tableau Public", desc: "3 interactive pages analyzing 8,807 Netfli[...]
];

function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", type: "feedback", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async () => {
    if (!form.message.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xdajvvan", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, type: form.type, message: form.message }),
      });
      if (res.ok) { setSubmitted(true); }
      else { alert("Something went wrong. Please email me directly at salim.arshad01@outlook.com"); }
    } catch {
      alert("Something went wrong. Please email me directly at salim.arshad01@outlook.com");
    }
    setLoading(false);
  };
  if (submitted) return (
    <div className="form-success">
      <div className="form-success-icon">✓</div>
      <h3>Thanks for the message!</h3>
      <p>I will get back to you soon.</p>
    </div>
  );
  return (
    <div className="feedback-form">
      <div className="form-row">
        <div className="form-group"><label>Name</label><input name="name" value={form.name} onChange={handle} placeholder="Your name" /></div>
        <div className="form-group"><label>Email</label><input name="email" value={form.email} onChange={handle} placeholder="your@email.com" type="email" /></div>
      </div>
      <div className="form-group">
        <label>Type</label>
        <div className="type-pills">
          {["feedback", "collaboration", "question", "hire me"].map(t => (
            <button key={t} className={"type-pill" + (form.type === t ? " type-pill--active" : "")} onClick={() => setForm({ ...form, type: t })}>{t}</button>
          ))}
        </div>
      </div>
      <div className="form-group"><label>Message *</label><textarea name="message" value={form.message} onChange={handle} placeholder="Your thoughts, feedback, collaboration idea..." rows={4} /><[...]
      <button className="form-submit" onClick={submit} disabled={loading || !form.message.trim()}>{loading ? "Sending..." : "Send Message \u2192"}</button>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handler); };
  }, [onClose]);
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>x</button>
        <div className="modal-header">
          <div className="modal-meta">
            <span className="modal-num">_{project.num}</span>
            {project.badge && <span className={"modal-badge " + (project.status === "wip" ? "badge--wip" : project.badge === "FEATURED" ? "badge--featured" : "badge--done")}>{project.badge}</span[...]
            <span className="modal-cat">{project.category}</span>
          </div>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-subtitle">{project.subtitle}</p>
        </div>
        <div className="modal-body">
          <p className="modal-desc">{project.desc}</p>
          <div className="modal-section">
            <h4 className="modal-section-title">KEY INSIGHTS</h4>
            <ul className="insights-list">
              {project.insights.map((insight, i) => (
                <li key={i} className="insight-item"><span className="insight-dot" />{insight}</li>
              ))}
            </ul>
          </div>
          <div className="modal-section">
            <h4 className="modal-section-title">TOOLS USED</h4>
            <div className="modal-tags">{project.tools.map(t => <span key={t} className="modal-tag modal-tag--tool">{t}</span>)}</div>
          </div>
          <div className="modal-section">
            <h4 className="modal-section-title">DATA SOURCES</h4>
            <div className="modal-tags">
              {project.dataSources.map(s => <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="modal-tag modal-tag--source">{s.name} &uarr;</a>)}
            </div>
          </div>
          <div className="modal-section">
            <h4 className="modal-section-title">LINKS</h4>
            <div className="modal-links">
              {project.links.tableau && <a href={project.links.tableau} target="_blank" rel="noreferrer" className="modal-link-btn modal-link-btn--tableau">Tableau Dashboard</a>}
              {project.links.github && <a href={project.links.github} target="_blank" rel="noreferrer" className="modal-link-btn modal-link-btn--github">GitHub Repo</a>}
              {project.links.linkedin && <a href={project.links.linkedin} target="_blank" rel="noreferrer" className="modal-link-btn modal-link-btn--linkedin">LinkedIn Post</a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NAV_ITEMS = ["WORK", "WRITING", "ABOUT", "CONTACT"];
function useScrollSpy() {
  const [active, setActive] = useState("WORK");
  useEffect(() => {
    const handler = () => {
      for (const id of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}
function scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }

export default function App() {
  const active = useScrollSpy();
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="root">
      <style>{CSS}</style>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      <nav className="nav">
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>SA</button>
        <div className="nav-links">
          {NAV_ITEMS.map(item => <button key={item} className={"nav-link" + (active === item ? " nav-link--active" : "")} onClick={() => scrollTo(item)}>{item}</button>)}
          <a href={ME.github} target="_blank" rel="noreferrer" className="nav-cta">GITHUB</a>
        </div>
      </nav>
      <header className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-label">PORTFOLIO {new Date().getFullYear()}</div>
          <h1 className="hero-name">{ME.name}</h1>
          <p className="hero-tagline">{ME.tagline}</p>
          <p className="hero-bio">{ME.bio}</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo("WORK")}>VIEW WORK</button>
            <button className="btn-secondary" onClick={() => scrollTo("CONTACT")}>GET IN TOUCH</button>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-num">5</span><span className="stat-label">Projects</span></div>
            <div className="stat-div" />
            <div className="stat"><span className="stat-num">22M+</span><span className="stat-label">Viral Reach</span></div>
            <div className="stat-div" />
            <div className="stat"><span className="stat-num">30yr</span><span className="stat-label">Data Span</span></div>
            <div className="stat-div" />
            <div className="stat"><span className="stat-num">293</span><span className="stat-label">Constituencies</span></div>
          </div>
        </div>
      </header>
      <main>
        <section id="WORK" className="section">
          <div className="section-header">
            <span className="section-label">SELECTED WORK</span>
            <h2 className="section-title">Projects</h2>
            <p className="section-hint">Click any project card to see full details, data sources, and all links</p>
          </div>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <article key={p.id} className={"project-card" + (p.status === "wip" ? " project-card--wip" : "")} style={{ animationDelay: i * 80 + "ms" }} onClick={() => setSelectedProject(p)}>
                <div className="project-card-top">
                  <div className="project-card-meta">
                    <span className="project-num">_{p.num}</span>
                    {p.badge && <span className={"project-badge " + (p.status === "wip" ? "badge--wip" : p.badge === "FEATURED" ? "badge--featured" : "badge--done")}>{p.badge}</span>}
                  </div>
                  <span className="project-cat-chip">{p.category}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-subtitle">{p.subtitle}</p>
                <div className="project-tools">{p.tools.map(t => <span key={t} className="tool-chip">{t}</span>)}</div>
                <div className="project-card-footer">
                  <div className="project-quick-links">
                    {p.links.tableau && <span className="quick-link">Tableau</span>}
                    {p.links.github && <span className="quick-link">GitHub</span>}
                    {p.links.linkedin && <span className="quick-link">LinkedIn</span>}
                  </div>
                  <span className="project-cta">View Details</span>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="WRITING" className="section section--alt">
          <div className="section-header">
            <span className="section-label">PUBLIC WRITING</span>
            <h2 className="section-title">Writing</h2>
          </div>
          <div className="writings-list">
            {WRITINGS.map((w, i) => (
              <article key={w.id} className="writing-card" style={{ animationDelay: i * 80 + "ms" }}>
                <div className="writing-meta"><span className="writing-platform">{w.platform}</span><span className="writing-cat">{w.category}</span></div>
                <h3 className="writing-title">{w.title}</h3>
                <p className="writing-desc">{w.desc}</p>
                <div className="writing-footer">
                  <span className="writing-stats">{w.stats}</span>
                  <a href={w.url} target="_blank" rel="noreferrer" className="writing-link">READ POST</a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="ABOUT" className="section">
          <div className="section-header">
            <span className="section-label">WHO I AM</span>
            <h2 className="section-title">About</h2>
          </div>
          <div className="about-grid">
            <div className="about-left">
              <p className="about-text">I am <strong>Salim Arshad</strong> — currently an AWS Cloud Billing and O2C Associate, building toward a career in data journalism and civic analytics.<[...]
              <p className="about-text">My work sits at the intersection of public data, policy, and storytelling. I do not just make dashboards — I ask what the numbers mean for real people, a[...]
              <p className="about-text">When a judge called India unemployed youth cockroaches, I built a 30-year data model. When West Bengal held its highest-ever-turnout election, I mapped eve[...]
              <div className="about-links">
                <a href={ME.github} target="_blank" rel="noreferrer" className="about-link">GitHub</a>
                <a href={ME.linkedin} target="_blank" rel="noreferrer" className="about-link">LinkedIn</a>
                <a href={"mailto:" + ME.email} className="about-link">Email</a>
              </div>
            </div>
            <div className="about-right">
              <div className="skills-block">
                {[
                  { label: "TOOLS", chips: ["Tableau Public", "Excel / Power Query", "Python", "Pandas", "SQL"], cls: "" },
                  { label: "DOMAINS", chips: ["Data Journalism", "Civic Analytics", "Electoral Data", "FinOps", "Cloud Billing"], cls: "skill-chip--gold" },
                  { label: "DATA SOURCES", chips: ["World Bank", "PLFS / MoSPI", "ILO", "CMIE", "ECI", "AWS CUR"], cls: "skill-chip--muted" },
                ].map(g => (
                  <div key={g.label} className="skill-group">
                    <span className="skill-group-label">{g.label}</span>
                    {g.chips.map(s => <span key={s} className={"skill-chip " + g.cls}>{s}</span>)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="CONTACT" className="section section--alt">
          <div className="section-header">
            <span className="section-label">GET IN TOUCH</span>
            <h2 className="section-title">Contact</h2>
            <p className="section-hint">Have feedback on my work? A collaboration idea? Or just want to say hi?</p>
          </div>
          <div className="contact-grid">
            <div className="contact-left">
              {[
                { label: "EMAIL", value: ME.email, href: "mailto:" + ME.email },
                { label: "LINKEDIN", value: "linkedin.com/in/salim-arshad", href: ME.linkedin },
                { label: "GITHUB", value: "github.com/salimarshad07", href: ME.github },
                { label: "LOCATION", value: ME.location, href: null },
              ].map(c => (
                <div key={c.label} className="contact-item">
                  <span className="contact-label">{c.label}</span>
                  {c.href ? <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-value">{c.value}</a> : <span className="contact-value-pl[...]
                </div>
              ))}
            </div>
            <div className="contact-right"><FeedbackForm /></div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-name">{ME.name}</span>
          <span className="footer-loc">{ME.location}</span>
          <span className="footer-copy">Built with React {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  :root{--bg:#0a0a0a;--bg-alt:#0d0d0d;--surface:#141414;--surface-2:#1c1c1c;--border:rgba(255,255,255,0.07);--text:#e8e8e4;--text-muted:#666;--text-dim:#3a3a3a;--accent:#c8f135;--accent-dim:rgba([...]
  html{scroll-behavior:smooth}
  body{background:var(--bg);color:var(--text);font-family:var(--font-body);line-height:1.6;-webkit-font-smoothing:antialiased}
  .root{min-height:100vh}
  .nav{position:fixed;top:0;left:0;right:0;z-index:100;height:var(--nav-h);display:flex;align-items:center;justify-content:space-between;padding:0 clamp(1rem,5vw,3rem);background:rgba(10,10,10,0.[...]
  .nav-logo{font-family:var(--font-display);font-weight:800;font-size:1.1rem;color:var(--accent);background:none;border:none;cursor:pointer}
  .nav-links{display:flex;align-items:center;gap:.25rem}
  .nav-link{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.1em;color:var(--text-muted);background:none;border:none;cursor:pointer;padding:.5rem .75rem;border-radius:4px;transition:[...]
  .nav-link:hover{color:var(--text)}
  .nav-link--active{color:var(--accent)!important;background:var(--accent-dim)}
  .nav-cta{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.1em;color:var(--bg);background:var(--accent);padding:.4rem .9rem;border-radius:4px;text-decoration:none;margin-left:.5rem;[...]
  .nav-cta:hover{opacity:.85}
  .hero{position:relative;overflow:hidden;min-height:100vh;padding-top:var(--nav-h);display:flex;align-items:center}
  .hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(200,241,53,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(200,241,53,.03) 1px,transparent 1px);background-size:6[...]
  .hero-inner{position:relative;z-index:1;max-width:var(--max-w);margin:0 auto;padding:clamp(3rem,8vh,6rem) clamp(1rem,5vw,3rem)}
  .hero-label{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.2em;color:var(--accent);margin-bottom:1.5rem}
  .hero-name{font-family:var(--font-display);font-size:clamp(2.8rem,8vw,5.5rem);font-weight:800;line-height:.95;letter-spacing:-.02em;margin-bottom:1rem}
  .hero-tagline{font-family:var(--font-mono);font-size:.85rem;color:var(--accent);letter-spacing:.05em;margin-bottom:1.5rem}
  .hero-bio{font-size:1.05rem;color:#aaa;max-width:600px;line-height:1.7;margin-bottom:2.5rem}
  .hero-actions{display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:3rem}
  .btn-primary{font-family:var(--font-mono);font-size:.75rem;letter-spacing:.12em;color:var(--bg);background:var(--accent);border:none;padding:.75rem 1.5rem;cursor:pointer;border-radius:4px;trans[...]
  .btn-primary:hover{opacity:.85}
  .btn-secondary{font-family:var(--font-mono);font-size:.75rem;letter-spacing:.12em;color:var(--text);background:none;border:1px solid var(--border);padding:.75rem 1.5rem;border-radius:4px;cursor[...]
  .btn-secondary:hover{border-color:var(--accent);color:var(--accent)}
  .hero-stats{display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap}
  .stat{display:flex;flex-direction:column}
  .stat-num{font-family:var(--font-display);font-weight:800;font-size:1.6rem;color:var(--accent);line-height:1}
  .stat-label{font-family:var(--font-mono);font-size:.62rem;color:var(--text-muted);letter-spacing:.1em;margin-top:.2rem}
  .stat-div{width:1px;height:2.5rem;background:var(--border)}
  .section{max-width:var(--max-w);margin:0 auto;padding:clamp(4rem,8vw,7rem) clamp(1rem,5vw,3rem)}
  .section--alt{background:none}
  .section-header{margin-bottom:2.5rem}
  .section-label{font-family:var(--font-mono);font-size:.65rem;letter-spacing:.25em;color:var(--accent);display:block;margin-bottom:.5rem}
  .section-title{font-family:var(--font-display);font-size:clamp(2rem,5vw,3rem);font-weight:800;letter-spacing:-.02em;margin-bottom:.5rem}
  .section-hint{font-family:var(--font-mono);font-size:.7rem;color:var(--text-muted);letter-spacing:.05em}
  .projects-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:8px;overflow:hidden}
  @media(max-width:640px){.projects-grid{grid-template-columns:1fr}}
  .project-card{background:var(--surface);padding:1.75rem;cursor:pointer;transition:background .2s;animation:fadeUp .5s ease both;display:flex;flex-direction:column;gap:.75rem}
  .project-card:hover{background:var(--surface-2)}
  .project-card--wip{opacity:.8}
  .project-card--wip:hover{opacity:1}
  @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
  .project-card-top{display:flex;align-items:center;justify-content:space-between}
  .project-card-meta{display:flex;align-items:center;gap:.5rem}
  .project-num{font-family:var(--font-mono);font-size:.62rem;color:var(--text-dim)}
  .project-badge{font-family:var(--font-mono);font-size:.58rem;letter-spacing:.1em;padding:.18rem .45rem;border-radius:3px}
  .badge--featured{background:var(--accent-dim);color:var(--accent);border:1px solid var(--accent-border)}
  .badge--wip{background:rgba(255,160,0,.1);color:#ffa000;border:1px solid rgba(255,160,0,.25)}
  .badge--done{background:rgba(100,220,130,.1);color:#64dc82;border:1px solid rgba(100,220,130,.25)}
  .project-cat-chip{font-family:var(--font-mono);font-size:.58rem;color:var(--gold);background:var(--gold-dim);padding:.18rem .45rem;border-radius:3px}
  .project-title{font-family:var(--font-display);font-size:clamp(1rem,2vw,1.2rem);font-weight:700;line-height:1.2;letter-spacing:-.01em}
  .project-subtitle{font-size:.82rem;color:#888;line-height:1.5;flex:1}
  .project-tools{display:flex;flex-wrap:wrap;gap:.35rem}
  .tool-chip{font-family:var(--font-mono);font-size:.6rem;padding:.2rem .5rem;background:var(--surface-2);color:var(--text-muted);border:1px solid var(--border);border-radius:3px}
  .project-card-footer{display:flex;align-items:center;justify-content:space-between;margin-top:auto;padding-top:.75rem;border-top:1px solid var(--border)}
  .project-quick-links{display:flex;gap:.5rem}
  .quick-link{font-family:var(--font-mono);font-size:.6rem;color:var(--text-muted)}
  .project-cta{font-family:var(--font-mono);font-size:.65rem;color:var(--accent);letter-spacing:.05em}
  .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:200;display:flex;align-items:center;justify-content:center;padding:1rem;backdrop-filter:blur(4px);animation:fadeIn .2s e[...]
  @keyframes fadeIn{from{opacity:0}to{opacity:1}}
  .modal{background:#111;border:1px solid rgba(200,241,53,.2);border-radius:12px;width:100%;max-width:680px;max-height:90vh;overflow-y:auto;position:relative;animation:slideUp .25s ease}
  @keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
  .modal-close{position:sticky;top:1rem;float:right;margin:.75rem .75rem 0 0;background:var(--surface-2);border:1px solid var(--border);color:var(--text-muted);width:32px;height:32px;border-radiu[...]
  .modal-close:hover{background:var(--accent);color:var(--bg);border-color:var(--accent)}
  .modal-header{padding:1.5rem 1.75rem 1rem;border-bottom:1px solid var(--border)}
  .modal-meta{display:flex;align-items:center;gap:.5rem;margin-bottom:.75rem;flex-wrap:wrap}
  .modal-num{font-family:var(--font-mono);font-size:.62rem;color:var(--text-dim)}
  .modal-cat{font-family:var(--font-mono);font-size:.62rem;color:var(--gold);background:var(--gold-dim);padding:.18rem .45rem;border-radius:3px}
  .modal-badge{font-family:var(--font-mono);font-size:.58rem;letter-spacing:.1em;padding:.18rem .45rem;border-radius:3px}
  .modal-title{font-family:var(--font-display);font-size:clamp(1.2rem,3vw,1.6rem);font-weight:800;line-height:1.2;letter-spacing:-.01em;margin-bottom:.5rem}
  .modal-subtitle{font-size:.88rem;color:#888;font-style:italic}
  .modal-body{padding:1.5rem 1.75rem;display:flex;flex-direction:column;gap:1.5rem}
  .modal-desc{font-size:.92rem;color:#aaa;line-height:1.75}
  .modal-section{display:flex;flex-direction:column;gap:.6rem}
  .modal-section-title{font-family:var(--font-mono);font-size:.65rem;letter-spacing:.18em;color:var(--text-muted)}
  .insights-list{list-style:none;display:flex;flex-direction:column;gap:.5rem}
  .insight-item{display:flex;align-items:flex-start;gap:.6rem;font-size:.88rem;color:#ccc;line-height:1.5}
  .insight-dot{width:6px;height:6px;border-radius:50%;background:var(--accent);flex-shrink:0;margin-top:.4rem}
  .modal-tags{display:flex;flex-wrap:wrap;gap:.4rem}
  .modal-tag{font-family:var(--font-mono);font-size:.65rem;padding:.3rem .7rem;border-radius:4px;letter-spacing:.03em}
  .modal-tag--tool{background:var(--surface-2);color:var(--accent);border:1px solid var(--accent-border)}
  .modal-tag--source{background:var(--gold-dim);color:var(--gold);border:1px solid rgba(245,200,66,.2);text-decoration:none;transition:opacity .2s}
  .modal-tag--source:hover{opacity:.7}
  .modal-links{display:flex;flex-wrap:wrap;gap:.6rem}
  .modal-link-btn{display:flex;align-items:center;gap:.4rem;font-family:var(--font-mono);font-size:.7rem;letter-spacing:.08em;padding:.6rem 1rem;border-radius:6px;text-decoration:none;transition:[...]
  .modal-link-btn--tableau{color:#4e9fd1;border-color:rgba(78,159,209,.3);background:rgba(78,159,209,.08)}
  .modal-link-btn--tableau:hover{background:rgba(78,159,209,.2)}
  .modal-link-btn--github{color:#e8e8e4;border-color:var(--border);background:var(--surface-2)}
  .modal-link-btn--github:hover{border-color:#888}
  .modal-link-btn--linkedin{color:#4a90d9;border-color:rgba(74,144,217,.3);background:rgba(74,144,217,.08)}
  .modal-link-btn--linkedin:hover{background:rgba(74,144,217,.2)}
  .writings-list{display:flex;flex-direction:column;gap:1px;border:1px solid var(--border);border-radius:8px;overflow:hidden}
  .writing-card{background:var(--surface);padding:1.5rem 1.75rem;border-bottom:1px solid var(--border);animation:fadeUp .5s ease both;transition:background .2s}
  .writing-card:last-child{border-bottom:none}
  .writing-card:hover{background:var(--surface-2)}
  .writing-meta{display:flex;align-items:center;gap:.6rem;margin-bottom:.6rem;flex-wrap:wrap}
  .writing-platform{font-family:var(--font-mono);font-size:.62rem;color:var(--accent);background:var(--accent-dim);border:1px solid var(--accent-border);padding:.18rem .45rem;border-radius:3px}
  .writing-cat{font-family:var(--font-mono);font-size:.62rem;color:var(--text-muted)}
  .writing-title{font-family:var(--font-display);font-size:clamp(1rem,2vw,1.15rem);font-weight:700;line-height:1.3;margin-bottom:.5rem}
  .writing-desc{font-size:.86rem;color:#888;line-height:1.6;margin-bottom:.75rem}
  .writing-footer{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem}
  .writing-stats{font-family:var(--font-mono);font-size:.62rem;color:var(--text-dim)}
  .writing-link{font-family:var(--font-mono);font-size:.65rem;color:var(--accent);text-decoration:none;transition:opacity .2s}
  .writing-link:hover{opacity:.7}
  .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start}
  @media(max-width:700px){.about-grid{grid-template-columns:1fr;gap:2.5rem}}
  .about-text{font-size:.95rem;color:#999;line-height:1.75;margin-bottom:1rem}
  .about-text strong{color:var(--text)}
  .about-links{display:flex;gap:1rem;flex-wrap:wrap;margin-top:1.5rem}
  .about-link{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.1em;color:var(--accent);text-decoration:none;border-bottom:1px solid var(--accent-border);padding-bottom:.1rem;transitio[...]
  .about-link:hover{opacity:.7}
  .skills-block{display:flex;flex-direction:column;gap:1.5rem}
  .skill-group{display:flex;flex-wrap:wrap;gap:.5rem}
  .skill-group-label{font-family:var(--font-mono);font-size:.6rem;letter-spacing:.2em;color:var(--text-dim);width:100%;margin-bottom:.1rem}
  .skill-chip{font-family:var(--font-mono);font-size:.65rem;padding:.3rem .7rem;border-radius:4px;background:var(--surface-2);color:var(--text-muted);border:1px solid var(--border)}
  .skill-chip--gold{background:var(--gold-dim);color:var(--gold);border-color:rgba(245,200,66,.2)}
  .skill-chip--muted{background:var(--surface);color:var(--text-dim);border-color:var(--border)}
  .contact-grid{display:grid;grid-template-columns:1fr 1.5fr;gap:4rem;align-items:start}
  @media(max-width:700px){.contact-grid{grid-template-columns:1fr;gap:2.5rem}}
  .contact-item{margin-bottom:1.5rem}
  .contact-label{font-family:var(--font-mono);font-size:.6rem;letter-spacing:.2em;color:var(--text-dim);display:block;margin-bottom:.25rem}
  .contact-value{font-size:.9rem;color:var(--accent);text-decoration:none;transition:opacity .2s;display:block}
  .contact-value:hover{opacity:.7}
  .contact-value-plain{font-size:.9rem;color:var(--text-muted)}
  .feedback-form{display:flex;flex-direction:column;gap:1rem}
  .form-row{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}
  @media(max-width:500px){.form-row{grid-template-columns:1fr}}
  .form-group{display:flex;flex-direction:column;gap:.4rem}
  .form-group label{font-family:var(--font-mono);font-size:.62rem;letter-spacing:.12em;color:var(--text-muted)}
  .form-group input,.form-group textarea{background:var(--surface);border:1px solid var(--border);border-radius:6px;padding:.65rem .85rem;color:var(--text);font-family:var(--font-body);font-size:[...]
  .form-group input:focus,.form-group textarea:focus{outline:none;border-color:var(--accent-border)}
  .form-group input::placeholder,.form-group textarea::placeholder{color:var(--text-dim)}
  .type-pills{display:flex;flex-wrap:wrap;gap:.4rem}
  .type-pill{font-family:var(--font-mono);font-size:.62rem;letter-spacing:.08em;padding:.3rem .7rem;border-radius:20px;border:1px solid var(--border);background:none;color:var(--text-muted);curso[...]
  .type-pill:hover{border-color:var(--accent-border);color:var(--accent)}
  .type-pill--active{background:var(--accent-dim);color:var(--accent);border-color:var(--accent-border)}
  .form-submit{font-family:var(--font-mono);font-size:.75rem;letter-spacing:.1em;color:var(--bg);background:var(--accent);border:none;padding:.8rem 1.5rem;border-radius:6px;cursor:pointer;transit[...]
  .form-submit:hover:not(:disabled){opacity:.85}
  .form-submit:disabled{opacity:.4;cursor:not-allowed}
  .form-success{text-align:center;padding:2rem}
  .form-success-icon{font-size:2rem;color:var(--accent);margin-bottom:.75rem}
  .form-success h3{font-family:var(--font-display);font-size:1.2rem;margin-bottom:.4rem}
  .form-success p{font-size:.88rem;color:#888}
  .footer{border-top:1px solid var(--border);padding:1.5rem clamp(1rem,5vw,3rem)}
  .footer-inner{max-width:var(--max-w);margin:0 auto;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap}
  .footer-name{font-family:var(--font-display);font-weight:700;font-size:.9rem}
  .footer-loc{font-family:var(--font-mono);font-size:.7rem;color:var(--text-muted)}
  .footer-copy{font-family:var(--font-mono);font-size:.65rem;color:var(--text-dim);margin-left:auto}
  @media(max-width:600px){.hero-stats{gap:1rem}.stat-num{font-size:1.3rem}.project-card{padding:1.25rem}.nav-cta{display:none}.modal{max-height:95vh}.modal-body{padding:1.25rem}.modal-header{padd[...]
`;
