"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    label: "// diagnostic",
    title: "Audit Initial",
    desc: "Analyse du projet existant : profiling, review de l'architecture, identification des points de friction. Appel technique de cadrage.",
    icon: "🔍",
  },
  {
    label: "// architecture",
    title: "Proposition Technique",
    desc: "Document structuré avec schémas, plan d'action chiffré, et estimations de livraison. Vous validez avant le moindre commit.",
    icon: "📐",
  },
  {
    label: "// implementation",
    title: "Développement Itératif",
    desc: "Sprints courts. Commits réguliers, builds testables à chaque étape. Communication asynchrone via Discord ou Slack.",
    icon: "⚙️",
  },
  {
    label: "// validation",
    title: "Tests & Profiling Final",
    desc: "Vérification fonctionnelle, tests de régression, profiling de performance. Rapport de livraison complet.",
    icon: "✅",
  },
  {
    label: "// handoff",
    title: "Transfert & Documentation",
    desc: "Code review avec votre équipe, documentation technique, transfert de connaissance. Votre équipe est autonome.",
    icon: "📦",
  },
];

export default function WorkflowTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-step-idx"));
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => new Set(prev).add(idx));
          }
        });
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.3 }
    );

    const els = containerRef.current?.querySelectorAll("[data-step-idx]");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="mt-16 max-w-4xl mx-auto relative">
      {/* Ligne verticale centrale */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--cyan-glow)] via-[var(--border-subtle)] to-[var(--border-subtle)]" />

      {steps.map((step, i) => {
        const isVisible = visibleSteps.has(i);
        const isLeft = i % 2 === 0;

        return (
          <div
            key={i}
            data-step-idx={i}
            className={`relative flex items-start mb-12 md:mb-16 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Noeud central sur la ligne */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
              <div
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg transition-all duration-500 ${
                  isVisible
                    ? "border-[var(--cyan-glow)] bg-[var(--bg-void)] shadow-[0_0_15px_rgba(0,239,255,0.3)] scale-100"
                    : "border-[var(--border-subtle)] bg-[var(--bg-void)] scale-75"
                }`}
              >
                {step.icon}
              </div>
            </div>

            {/* Contenu */}
            <div
              className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
                isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
              }`}
            >
              <span className="text-[var(--cyan-glow)] font-mono text-xs tracking-widest">
                {step.label}
              </span>
              <h3 className="text-white font-bold text-lg mt-1 mb-2">
                {step.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
