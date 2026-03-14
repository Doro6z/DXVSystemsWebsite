"use client";

const domains = [
  {
    icon: "⚔️",
    title: "Architecture Gameplay",
    line: "Systèmes modulaires et scalables",
    tags: ["C++", "Subsystems", "GameFeatures", "Data-Driven"],
    detail: "Fondations C++ solides pour supporter des dizaines de systèmes interconnectés sans dette technique.",
    prestations: ["Audit d'architecture", "Patterns de conception", "Migration Blueprint vers C++", "Systèmes de données"],
    media: null,
  },
  {
    icon: "🌐",
    title: "Netcode Authoritatif",
    line: "Multijoueur sans compromis",
    tags: ["Replication", "RPC", "Client Prediction", "Iris"],
    detail: "Architecture anti-triche avec prédiction client et réconciliation serveur pour masquer la latence.",
    prestations: ["Optimisation réseau", "Replication Graph", "Systèmes de tir prédictifs", "Profilage bande passante"],
    media: null,
  },
  {
    icon: "⚡",
    title: "Optimisation Performance",
    line: "Maintenir 60+ FPS sous charge",
    tags: ["Profiling", "Insights", "Task Graph", "Tick Budget"],
    detail: "Audit et élimination des goulots d'étranglement pour garantir des performances stables en production.",
    prestations: ["Profiling CPU/GPU", "Optimisation de Tick", "Object Pooling", "Réduction mémoire"],
    media: null,
  },
  {
    icon: "🏃",
    title: "Animation Technique",
    line: "Locomotion fluide et réactive",
    tags: ["AnimBP", "Control Rig", "Linked Layers", "IK"],
    detail: "Systèmes de locomotion adaptatifs avec rigging procédural et architecture d'animation propre.",
    prestations: ["Configuration de Rigging", "Setups AnimBP complexes", "Audit et correction d'Animation", "Intégration de Combat"],
    media: null,
  },
  {
    icon: "🧩",
    title: "Développement de Plugins",
    line: "Mécaniques encapsulées et réutilisables",
    tags: ["Modules", "Editor Extensions", "Slate", "API"],
    detail: "Développement de plugins autonomes et testables, transférables entre projets.",
    prestations: ["Outils pour l'éditeur", "Intégration d'API tierces", "Modules C++ isolés", "Support Marketplace"],
    media: null,
  },
  {
    icon: "🤖",
    title: "Intelligence Artificielle",
    line: "Comportements complexes et scalables",
    tags: ["EQS", "StateTree", "Behavior Trees", "Mass AI"],
    detail: "Arbres de comportement modulaires avec perception environnementale et décision tactique.",
    prestations: ["Logique de combat IA", "Systèmes de navigation", "Optimisation Mass AI", "FSM avancées"],
    media: null,
  },
  {
    icon: "📐",
    title: "Mathématiques de Jeu",
    line: "Calculs vectoriels et fonctions physiques",
    tags: ["Vectors", "Quaternions", "Physics", "Curves"],
    detail: "Implémentations complexes de trajectoires, calculs spatiaux et systèmes mécaniques avancés.",
    prestations: ["Mouvement procédural", "Trajectoires de projectiles", "Systèmes de visée", "Simulations physiques"],
    media: null,
  },
  {
    icon: "💾",
    title: "Infrastructure Backend",
    line: "Persistance et services cloud",
    tags: ["HTTP", "WebSocket", "AWS", "PlayFab"],
    detail: "Subsystems C++ dédiés pour la persistance, le matchmaking et les transactions sécurisées.",
    prestations: ["Sauvegarde cloud", "Systèmes de matchmaking", "Intégration de services", "API REST pour Unreal"],
    media: null,
  },
];

export default function ExpertiseGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {domains.map((d, i) => (
        <div
          key={i}
          className="group relative border border-[var(--border-subtle)] bg-[rgba(7,10,15,0.5)] backdrop-blur-sm rounded-lg cursor-default transition-all duration-400 ease-out hover:border-[var(--cyan-glow)] hover:bg-[rgba(0,239,255,0.03)] hover:shadow-[0_0_25px_rgba(0,239,255,0.1)] hover:z-20"
        >
          {/* Ligne indicatrice cyan au hover */}
          <div className="absolute top-0 left-4 right-4 h-[2px] bg-[var(--cyan-glow)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

          {/* Contenu principal (toujours visible) */}
          <div className="p-5">
            <span className="text-2xl block mb-3">{d.icon}</span>
            <h3 className="text-white font-bold text-sm font-mono tracking-tight mb-1">
              {d.title}
            </h3>
            <p className="text-[var(--text-muted)] text-xs leading-snug">
              {d.line}
            </p>
          </div>

          {/* Zone dépliable (révélée au hover via max-height) */}
          <div 
            className="overflow-hidden transition-all duration-500 ease-out max-h-0 group-hover:max-h-[400px] opacity-0 group-hover:opacity-100"
          >
            <div className="px-5 pb-5 pt-2 border-t border-[var(--border-subtle)]">
              {/* Tags techniques */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {d.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-[var(--cyan-glow)] text-[var(--cyan-glow)] bg-[rgba(0,239,255,0.05)] whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description client-oriented */}
              <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-4 italic">
                {d.detail}
              </p>

              {/* Liste des Prestations */}
              <div className="mb-4">
                <h4 className="text-[var(--cyan-glow)] text-[10px] font-mono uppercase tracking-widest mb-2 opacity-80">
                  // Prestations
                </h4>
                <ul className="space-y-1">
                  {d.prestations.map((p, j) => (
                    <li key={j} className="flex items-center gap-2 text-white text-[11px] font-mono">
                      <span className="w-1.5 h-1.5 bg-[var(--cyan-glow)] rounded-full shadow-[0_0_5px_var(--cyan-glow)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Slot Média (placeholder ou image/vidéo réelle) */}
              {d.media ? (
                <div className="w-full h-24 rounded-md overflow-hidden border border-[var(--border-subtle)]">
                  <img src={d.media} alt={d.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-full h-16 rounded-md border border-dashed border-[var(--border-subtle)] bg-[rgba(0,0,0,0.3)] flex items-center justify-center gap-2">
                  <span className="text-[var(--text-muted)] text-[9px] font-mono uppercase tracking-widest opacity-30">
                    ▶ MEDIA PLACEHOLDER
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
