"use client";

import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

export default function InteractiveBackground() {
  const [init, setInit] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Parallax Scroll Effect
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking && wrapperRef.current) {
        window.requestAnimationFrame(() => {
          if (wrapperRef.current) {
            const offsetY = window.scrollY * 0.15; // Ralenti pour ne pas remonter la limite du bas trop vite
            wrapperRef.current.style.transform = `translateY(-${offsetY}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {};

  if (!init) return null;

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "fixed",
        top: "-25vh",
        left: "-10vw",
        width: "120vw",
        height: "350vh", // Massive height to prevent cutoff barrier
        zIndex: -1,
        willChange: "transform",
      }}
    >
      <Particles
        id="unified-particles"
        particlesLoaded={particlesLoaded}
        style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "window", 
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "grab" },
            },
            modes: {
              push: { quantity: 2 },
              grab: { distance: 220, links: { opacity: 0.8 } },
            },
          },
          particles: {
            // Mix of Cyan and ProtoReady Orange
            color: { value: ["#00EFFF", "#FF8C00"] }, 
            links: { 
              color: "random", 
              distance: 140, 
              enable: true, 
              opacity: 0.25, 
              width: 1,
              triangles: {
                enable: true,
                opacity: 0.03,
                color: "#111821" 
              }
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 0.45,
              straight: false,
            },
            number: { density: { enable: true, width: 800, height: 800 }, value: 75 },
            opacity: { 
              value: { min: 0.2, max: 0.6 },
              animation: { enable: true, speed: 1, sync: false }
            },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2.5 } },
          },
          detectRetina: true,
          fullScreen: { enable: false, zIndex: -1 },
        }}
      />
    </div>
  );
}
