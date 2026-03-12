import HeroHalo from "../components/HeroHalo";
import FloatingHeroBlobs from "../components/FloatingHeroBlobs";
import ScrollSpyMenu from "../components/ScrollSpyMenu";
import ExpertiseGrid from "../components/ExpertiseGrid";
import WorkflowTimeline from "../components/WorkflowTimeline";

export default function Home() {
  return (
    <>
      {/* Navigation latérale interactive */}
      <ScrollSpyMenu />

      {/* ── Navigation ── */}
      <nav className="nav" id="nav">
        <div className="container nav__inner">
          <a href="/" className="nav__logo">
            DXV <span>:: Systems</span>
          </a>
          <ul className="nav__links">
            <li><a href="#services">Prestations</a></li>
            <li><a href="#expertise">Deep Dives</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="hero section" id="hero">
        <FloatingHeroBlobs />
        <HeroHalo />
        <div className="container relative z-10">
          <p className="hero__prefix animate-in">DXV :: init_sequence</p>
          <h1 className="hero__title animate-in delay-1">
            Solid foundations.<br />
            <span className="accent">Fluid experiences.</span>
          </h1>
          <p className="hero__subtitle animate-in delay-2">
            Ingénierie Unreal Engine 5 — Plugins C++, optimisation réseau,
            architecture gameplay. Du prototype à la production, avec la
            rigueur d&apos;un système qui ne casse pas.
          </p>
          <div className="hero__actions animate-in delay-3">
            <a href="#contact" className="btn btn--primary">
              Démarrer un projet →
            </a>
            <a href="#services" className="btn btn--ghost">
              Explorer les prestations
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="stats" id="stats">
        <div className="container">
          <div className="stats__grid">
            <div>
              <div className="stat__value">5+</div>
              <div className="stat__label">Années d&apos;expérience UE</div>
            </div>
            <div>
              <div className="stat__value">C++</div>
              <div className="stat__label">Expertise bas-niveau</div>
            </div>
            <div>
              <div className="stat__value">100%</div>
              <div className="stat__label">Engineering-first</div>
            </div>
            <div>
              <div className="stat__value">24h</div>
              <div className="stat__label">Temps de réponse moyen</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services / Prestations Section ── */}
      <section className="section" id="services">
        <div className="container">
          <p className="section__label">// prestations</p>
          <h2 className="section__title">Prestations Techniques</h2>
          <p className="section__desc">
            Trois approches, un seul objectif : débloquer votre projet et le
            rendre production-ready.
          </p>

          <div className="services__grid">
            {/* Audit */}
            <div className="service-card">
              <span className="service-card__icon">🔍</span>
              <h3 className="service-card__title">Audit Technique</h3>
              <p className="service-card__desc">
                Bilan de santé complet de votre projet UE5 : performance,
                architecture C++/BP, réseau, mémoire. Rapport structuré +
                vidéo explicative. Prix fixe, livrable encadré.
              </p>
              <span className="service-card__tag">Deep Work · Asynchrone</span>
            </div>

            {/* Fixer */}
            <div className="service-card">
              <span className="service-card__icon">⚡</span>
              <h3 className="service-card__title">Mission Commando</h3>
              <p className="service-card__desc">
                Votre équipe est bloquée sur un problème critique ? Réseau
                complexe, replication cassée, migration C++ impossible. Je
                rentre, je fixe, je repars. 3 à 10 jours.
              </p>
              <span className="service-card__tag">Urgence · Résolution</span>
            </div>

            {/* Toolsmith */}
            <div className="service-card">
              <span className="service-card__icon">🔧</span>
              <h3 className="service-card__title">Création d&apos;Outils</h3>
              <p className="service-card__desc">
                Plugins Unreal custom, systèmes modulaires, outils pipeline.
                Développés sur contrat d&apos;objectifs, pas au taux horaire.
                Vous payez pour la valeur, pas le temps.
              </p>
              <span className="service-card__tag">Toolsmith · Sur mesure</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Domaines d'Expertise ── */}
      <section className="section" id="expertise">
        <div className="container">
          <p className="section__label">// stack_technique</p>
          <h2 className="section__title">Domaines d&apos;Expertise</h2>
          <p className="section__desc">
            Les technologies et méthodologies que je déploie en production.
          </p>

          <ExpertiseGrid />
        </div>
      </section>

      {/* ── Workflow de Mission ── */}
      <section className="section" id="workflow">
        <div className="container">
          <p className="section__label">// process</p>
          <h2 className="section__title">Workflow de Mission</h2>
          <p className="section__desc">
            Un process structuré de bout en bout. Vous savez exactement où en est votre projet à chaque instant.
          </p>

          <WorkflowTimeline />
        </div>
      </section>

      {/* ── About / Profil ── */}
      <section className="section" id="about">
        <div className="container">
          <p className="section__label">// à propos</p>
          <h2 className="section__title">L&apos;ingénieur derrière le système</h2>

          <div className="about__layout">
            <div className="about__text">
              <p>
                <span className="highlight">Développeur C++ / Unreal Engine</span>{" "}
                avec une approche engineering-first. Je conçois des systèmes
                robustes, modulaires et documentés — pas des prototypes jetables.
              </p>
              <p>
                Mon travail couvre l&apos;ensemble du pipeline technique :
                architecture gameplay, plugins editor, networking avancé,
                et optimisation de performance. Chaque ligne de code est pensée
                pour la production.
              </p>
              <p>
                <span className="highlight">DXV Systems</span> est ma
                structure indépendante. Je travaille en direct avec les studios
                et les indés qui ont besoin d&apos;un renfort technique chirurgical,
                sans la lourdeur d&apos;une agence.
              </p>
            </div>

            <div className="tech-stack">
              <div className="tech-item">
                <span className="tech-item__name">Unreal Engine 5</span>
                <span className="tech-item__detail">C++ · Blueprints</span>
              </div>
              <div className="tech-item">
                <span className="tech-item__name">Networking</span>
                <span className="tech-item__detail">Replication · RPC · NetCore</span>
              </div>
              <div className="tech-item">
                <span className="tech-item__name">Architecture</span>
                <span className="tech-item__detail">GAS · Subsystems · Modules</span>
              </div>
              <div className="tech-item">
                <span className="tech-item__name">DevOps</span>
                <span className="tech-item__detail">CI/CD · Automation · Perforce</span>
              </div>
              <div className="tech-item">
                <span className="tech-item__name">Web / Tooling</span>
                <span className="tech-item__detail">Next.js · Rust · Tauri · Electron</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / Contact ── */}
      <section className="cta section" id="contact">
        <div className="container">
          <p className="section__label" style={{ justifyContent: "center" }}>
            // contact
          </p>
          <h2 className="cta__title">
            Un projet à débloquer ?
          </h2>
          <p className="cta__desc">
            Décrivez votre besoin, je reviens avec une proposition technique
            sous 24h. Pas de commercial, pas de bullshit — direct à
            l&apos;ingénierie.
          </p>
          <div className="cta__actions">
            <a href="mailto:contact@dxv-systems.com" className="btn btn--primary">
              contact@dxv-systems.com
            </a>
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Discord
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container footer__inner">
          <span className="footer__copy">
            © {new Date().getFullYear()} DXV Systems — All rights reserved.
          </span>
          <ul className="footer__links">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Fab Marketplace</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
