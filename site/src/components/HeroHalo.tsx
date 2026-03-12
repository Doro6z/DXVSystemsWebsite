"use client";

import { useEffect, useState } from "react";

export default function HeroHalo() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!hasMoved) setHasMoved(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hasMoved]);

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        // Moins puissant (opacity 0.08 au lieu de 0.15) et plus vaste (60vw au lieu de 40vw)
        background: "radial-gradient(circle at 50% 50%, rgba(0, 239, 255, 0.08) 0%, transparent 60vw)",
        // Trou plus grand et plus doux (gradient de transparent à black sur 400px)
        WebkitMaskImage: hasMoved
          ? `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)`
          : "none",
        maskImage: hasMoved
          ? `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)`
          : "none",
      }}
    />
  );
}
