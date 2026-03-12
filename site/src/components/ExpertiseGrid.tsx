"use client";

const domains = [
  {
    icon: "⚔️",
    title: "Architecture Gameplay",
    line: "Systèmes modulaires & scalables",
    tags: ["GAS", "Subsystems", "GameFeatures", "GameModes"],
    detail: "Fondations C++ solides pour supporter des dizaines de systèmes interconnectés sans dette technique.",
    media: null,
  },
  {
    icon: "🌐",
    title: "Netcode Authoritatif",
    line: "Multijoueur sans compromis",
    tags: ["Replication", "RPC", "Client Prediction", "Rollback"],
    detail: "Architecture anti-triche avec prédiction client et réconciliation serveur pour masquer la latence.",
    media: null,
  },
  {
    icon: "⚡",
    title: "Optimisation CPU",
    line: "Maintenir 60+ FPS sous charge",
    tags: ["Profiling", "Object Pooling", "Task Graph", "Tick Budget"],
    detail: "Audit et élimination des goulots d'étranglement pour garantir des performances stables en production.",
    media: null,
  },
  {
    icon: "🧬",
    title: "Migration C++",
    line: "Du Blueprint au natif",
    tags: ["Nativization", "UPROPERTY", "UFUNCTION", "Hot Reload"],
    detail: "Traduction chirurgicale des 10% de Blueprints responsables de 90% des ralentissements.",
    media: null,
  },
  {
    icon: "🧩",
    title: "Plugins UE5",
    line: "Mécaniques encapsulées & réutilisables",
    tags: ["Modules", "Slate", "Editor Extensions", "Fab Marketplace"],
    detail: "Développement de plugins autonomes et testables, transférables entre projets.",
    media: null,
  },
  {
    icon: "📡",
    title: "Réplication Massive",
    line: "100+ joueurs, 0 desync",
    tags: ["Iris", "Net Cull Distance", "Bandwidth Tuning", "Relevancy"],
    detail: "Optimisation agressive du trafic réseau pour supporter des sessions massives sans rubberbanding.",
    media: null,
  },
  {
    icon: "🗡️",
    title: "Systèmes de Combat",
    line: "Hit detection, combos, dégâts",
    tags: ["GAS", "Combo System", "Hitbox/Hurtbox", "Damage Pipeline"],
    detail: "Pipelines de combat complets, du input buffering aux dégâts réseau-synchronisés.",
    media: null,
  },
  {
    icon: "🏃",
    title: "Animation Avancée",
    line: "Locomotion fluide & procédurale",
    tags: ["Motion Matching", "IK", "AnimGraph", "Root Motion"],
    detail: "Systèmes de locomotion adaptatifs avec blending procédural et Turn In Place.",
    media: null,
  },
  {
    icon: "🤖",
    title: "IA & Behavior Trees",
    line: "Ennemis intelligents & scalables",
    tags: ["EQS", "Blackboard", "StateTree", "Mass AI"],
    detail: "Arbres de comportement modulaires avec perception environnementale et décision tactique.",
    media: null,
  },
  {
    icon: "💾",
    title: "Backend & APIs",
    line: "Connecter Unreal au cloud",
    tags: ["HTTP Async", "WebSocket", "SaveGame", "PlayFab / AWS"],
    detail: "Subsystems C++ dédiés pour la persistance, le matchmaking et les transactions sécurisées.",
    media: null,
  },
  {
    icon: "🔧",
    title: "DevOps & CI/CD",
    line: "Automatiser builds & déploiements",
    tags: ["Build Pipeline", "Automation", "Perforce", "Git LFS"],
    detail: "Pipelines de build automatisés avec tests de régression et déploiement continu.",
    media: null,
  },
  {
    icon: "🖥️",
    title: "UI/UX Technique",
    line: "Interfaces performantes & responsives",
    tags: ["CommonUI", "Slate", "Widget Components", "Data Binding"],
    detail: "Systèmes UI data-driven avec support multi-plateforme (clavier, manette, tactile).",
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
              <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-3">
                {d.detail}
              </p>

              {/* Slot Média (placeholder ou image/vidéo réelle) */}
              {d.media ? (
                <div className="w-full h-24 rounded-md overflow-hidden">
                  <img src={d.media} alt={d.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-full h-20 rounded-md border border-dashed border-[var(--border-subtle)] bg-[rgba(0,0,0,0.3)] flex items-center justify-center gap-2">
                  <span className="text-[var(--text-muted)] text-[10px] font-mono uppercase tracking-widest opacity-40">
                    ▶ MEDIA
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
