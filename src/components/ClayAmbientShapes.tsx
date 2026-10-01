"use client";

export default function ClayAmbientShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden clay-grain">
      {/* 3D Clay Terracotta Sphere - Top Right */}
      <div 
        className="absolute -top-12 -right-12 sm:top-12 sm:right-12 w-48 h-48 sm:w-80 sm:h-80 rounded-full animate-clay-1 opacity-75 sm:opacity-85"
        style={{
          background: "radial-gradient(circle at 35% 35%, #ff9580, #eb4a2d 65%, #a82610 100%)",
          boxShadow: "22px 30px 56px rgba(235, 74, 45, 0.28), inset 8px 8px 16px rgba(255, 255, 255, 0.75), inset -10px -10px 24px rgba(0, 0, 0, 0.25)",
        }}
      />

      {/* 3D Clay Mint Donut / Torus - Top Left */}
      <div 
        className="absolute top-1/4 -left-12 sm:left-12 w-40 h-40 sm:w-72 sm:h-72 rounded-full animate-clay-2 opacity-70 sm:opacity-85"
        style={{
          background: "radial-gradient(circle at 30% 30%, #5eead4, #0d9488 70%, #044e46 100%)",
          boxShadow: "20px 26px 48px rgba(13, 148, 136, 0.25), inset 6px 6px 14px rgba(255, 255, 255, 0.7), inset -8px -8px 20px rgba(0, 0, 0, 0.25)",
        }}
      />

      {/* 3D Clay Violet Capsule / Pill - Mid Right */}
      <div 
        className="absolute top-1/2 -right-10 sm:right-20 w-36 h-56 sm:w-60 sm:h-88 rounded-[4.5rem] rotate-12 animate-clay-3 opacity-65 sm:opacity-80"
        style={{
          background: "radial-gradient(circle at 30% 30%, #c4b5fd, #7c3aed 70%, #4c1d95 100%)",
          boxShadow: "24px 30px 54px rgba(124, 58, 237, 0.25), inset 8px 8px 16px rgba(255, 255, 255, 0.7), inset -10px -10px 22px rgba(0, 0, 0, 0.25)",
        }}
      />

      {/* 3D Clay Warm Buttercup Sphere - Mid-Bottom Left */}
      <div 
        className="absolute top-2/3 -left-10 sm:left-24 w-44 h-44 sm:w-64 sm:h-64 rounded-full animate-clay-4 opacity-65 sm:opacity-80"
        style={{
          background: "radial-gradient(circle at 35% 35%, #fde68a, #f59e0b 65%, #b45309 100%)",
          boxShadow: "20px 28px 48px rgba(245, 158, 11, 0.22), inset 6px 6px 14px rgba(255, 255, 255, 0.75), inset -8px -8px 20px rgba(0, 0, 0, 0.2)",
        }}
      />

      {/* 3D Clay Azure Disc - Bottom Right */}
      <div 
        className="absolute -bottom-16 right-1/4 w-40 h-40 sm:w-64 sm:h-64 rounded-full animate-clay-1 opacity-60 sm:opacity-75"
        style={{
          background: "radial-gradient(circle at 30% 30%, #93c5fd, #2563eb 70%, #1e3a8a 100%)",
          boxShadow: "22px 28px 50px rgba(37, 99, 235, 0.22), inset 8px 8px 16px rgba(255, 255, 255, 0.7), inset -10px -10px 22px rgba(0, 0, 0, 0.2)",
          animationDelay: "2s",
        }}
      />

      {/* Floating Micro-Clay Particle Beads */}
      <div 
        className="absolute top-[15%] left-[28%] w-7 h-7 rounded-full animate-clay-2 opacity-60"
        style={{
          background: "radial-gradient(circle at 30% 30%, #ffaa99, #eb4a2d)",
          boxShadow: "4px 6px 12px rgba(235, 74, 45, 0.3), inset 2px 2px 4px rgba(255,255,255,0.8)",
        }}
      />
      <div 
        className="absolute top-[38%] left-[75%] w-9 h-9 rounded-full animate-clay-3 opacity-60"
        style={{
          background: "radial-gradient(circle at 30% 30%, #c4b5fd, #7c3aed)",
          boxShadow: "4px 6px 12px rgba(124, 58, 237, 0.3), inset 2px 2px 4px rgba(255,255,255,0.8)",
          animationDelay: "1.5s",
        }}
      />
      <div 
        className="absolute top-[62%] left-[45%] w-8 h-8 rounded-full animate-clay-1 opacity-55"
        style={{
          background: "radial-gradient(circle at 30% 30%, #6ee7b7, #059669)",
          boxShadow: "4px 6px 12px rgba(5, 150, 105, 0.3), inset 2px 2px 4px rgba(255,255,255,0.8)",
          animationDelay: "3s",
        }}
      />
      <div 
        className="absolute top-[82%] left-[15%] w-6 h-6 rounded-full animate-clay-4 opacity-50"
        style={{
          background: "radial-gradient(circle at 30% 30%, #fde68a, #d97706)",
          boxShadow: "4px 6px 12px rgba(217, 119, 6, 0.3), inset 2px 2px 4px rgba(255,255,255,0.8)",
        }}
      />
    </div>
  );
}
