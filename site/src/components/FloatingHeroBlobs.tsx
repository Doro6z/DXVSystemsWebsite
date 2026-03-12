import React from "react";

export default function FloatingHeroBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 
        Blog/Video 1 - Gauche
        Remplacez la div interne par une balise <video src="..." autoPlay loop muted playsInline /> pour la version finale
      */}
      <div 
        className="absolute top-[10%] left-[5%] w-[400px] h-[500px] md:w-[500px] md:h-[600px] animate-blob-drift-1"
        style={{
          // Masque radial pour estomper les bords de la vidéo dans le background noir
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          opacity: 0.15 // Opacité faible pour rester en 'fond'
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-[#00EFFF] to-[#0A2540] rounded-[100px]" />
      </div>

      {/* 
        Blob/Video 2 - Droite
      */}
      <div 
        className="absolute bottom-[5%] right-[5%] w-[400px] h-[500px] md:w-[600px] md:h-[500px] animate-blob-drift-2"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          opacity: 0.12
        }}
      >
        <div className="w-full h-full bg-gradient-to-tl from-[#FF8C00] to-[#0A2540] rounded-[100px]" />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob-drift-1 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blob-drift-2 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-40px, 40px) scale(1.1); }
          66% { transform: translate(20px, -30px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob-drift-1 {
          animation: blob-drift-1 20s infinite ease-in-out;
        }
        .animate-blob-drift-2 {
          animation: blob-drift-2 25s infinite ease-in-out reverse;
        }
      `}} />
    </div>
  );
}
