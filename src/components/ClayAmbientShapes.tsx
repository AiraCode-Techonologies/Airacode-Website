"use client";

export default function ClayAmbientShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden clay-grain">
      {/* 3D Clay Terracotta Sphere - Top Right */}
      <div 
        className="absolute -top-12 -right-12 sm:top-16 sm:right-12 w-44 h-44 sm:w-72 sm:h-72 rounded-full animate-clay-1 opacity-70 sm:opacity-85"
        style={{
          background: "radial-gradient(circle at 35% 35%, #ff9580, #eb4a2d 65%, #a82610 100%)",
          boxShadow: "20px 28px 50px rgba(235, 74, 45, 0.25), inset 8px 8px 16px rgba(255, 255, 255, 0.7), inset -10px -10px 24px rgba(0, 0, 0, 0.25)",
        }}
      />

      {/* 3D Clay Mint Donut / Torus - Top Left */}
      <div 
        className="absolute top-1/4 -left-12 sm:left-10 w-36 h-36 sm:w-64 sm:h-64 rounded-full animate-clay-2 opacity-65 sm:opacity-80"
        style={{
          background: "radial-gradient(circle at 30% 30%, #5eead4, #0d9488 70%, #044e46 100%)",
          boxShadow: "18px 24px 44px rgba(13, 148, 136, 0.22), inset 6px 6px 14px rgba(255, 255, 255, 0.65), inset -8px -8px 20px rgba(0, 0, 0, 0.25)",
        }}
      />

      {/* 3D Clay Violet Capsule / Pill - Mid Right */}
      <div 
        className="absolute top-2/3 -right-8 sm:right-24 w-32 h-48 sm:w-56 sm:h-80 rounded-[4rem] rotate-12 animate-clay-3 opacity-60 sm:opacity-75"
        style={{
          background: "radial-gradient(circle at 30% 30%, #c4b5fd, #7c3aed 70%, #4c1d95 100%)",
          boxShadow: "22px 28px 50px rgba(124, 58, 237, 0.2), inset 8px 8px 16px rgba(255, 255, 255, 0.65), inset -10px -10px 22px rgba(0, 0, 0, 0.25)",
        }}
      />

      {/* 3D Clay Warm Buttercup Sphere - Bottom Left */}
      <div 
        className="absolute -bottom-16 left-1/4 w-40 h-40 sm:w-64 sm:h-64 rounded-full animate-clay-1 opacity-60 sm:opacity-75"
        style={{
          background: "radial-gradient(circle at 35% 35%, #fde68a, #f59e0b 65%, #b45309 100%)",
          boxShadow: "20px 26px 46px rgba(245, 158, 11, 0.2), inset 6px 6px 14px rgba(255, 255, 255, 0.7), inset -8px -8px 20px rgba(0, 0, 0, 0.2)",
          animationDelay: "3s",
        }}
      />
    </div>
  );
}
