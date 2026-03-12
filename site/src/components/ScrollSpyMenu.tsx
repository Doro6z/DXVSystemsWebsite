"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "DXV :: Systems" },
  { id: "services", label: "Prestations" },
  { id: "expertise", label: "Expertise" },
  { id: "workflow", label: "Process" },
  { id: "about", label: "A propos" },
  { id: "contact", label: "Contact" }
];

export default function ScrollSpyMenu() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col items-center gap-12">
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Scroll to ${label}`}
            className="group relative transition-all duration-500 ease-out"
            style={{ 
              writingMode: "vertical-rl", 
              transform: isActive ? "rotate(180deg) scale(1.1)" : "rotate(180deg) scale(1)",
            }}
          >
            <span 
              className={`font-mono text-lg tracking-widest whitespace-nowrap transition-all duration-500
                ${isActive 
                  ? 'text-white opacity-100 font-bold drop-shadow-[0_0_8px_rgba(0,239,255,0.8)]' 
                  : 'text-[var(--text-muted)] opacity-30 group-hover:opacity-70 group-hover:text-[var(--cyan-glow)]'
                }`}
            >
              {label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
