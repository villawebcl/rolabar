"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/venue.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        {/* Dark overlay with gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.7) 80%, rgba(10,10,10,1) 100%)",
          }}
        />
        {/* Green color tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(57,255,20,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Neon corner accents */}
      <div
        className="absolute top-0 left-0 hidden h-36 w-36 pointer-events-none z-10 lg:block"
        style={{
          borderTop: "2px solid rgba(57,255,20,0.4)",
          borderLeft: "2px solid rgba(57,255,20,0.4)",
          boxShadow: "-3px -3px 15px rgba(57,255,20,0.2), inset -3px -3px 15px rgba(57,255,20,0.05)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 hidden h-36 w-36 pointer-events-none z-10 lg:block"
        style={{
          borderBottom: "2px solid rgba(57,255,20,0.4)",
          borderRight: "2px solid rgba(57,255,20,0.4)",
          boxShadow: "3px 3px 15px rgba(57,255,20,0.2), inset 3px 3px 15px rgba(57,255,20,0.05)",
        }}
      />

      {/* Main content */}
      <div className="section-container relative z-20">
        <div className="glass-panel mx-auto max-w-5xl rounded-[28px] px-6 py-12 text-center sm:px-8 md:px-12 md:py-16">
        {/* Pre-tag */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="neon-divider w-12" />
          <span className="tag-badge tracking-[0.3em]">Santo Domingo · Chile</span>
          <div className="neon-divider w-12" />
        </div>

        {/* Logo image */}
        <div className="flex justify-center mb-6">
          <div
            className="float-anim"
            style={{
              filter: "drop-shadow(0 0 20px rgba(57,255,20,0.5)) drop-shadow(0 0 60px rgba(57,255,20,0.2))",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.jpeg"
              alt="ROLABAR Logo"
              className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-2xl"
              style={{
                mixBlendMode: "screen",
                filter: "contrast(1.1) brightness(1.1)",
              }}
            />
          </div>
        </div>

        {/* Main title */}
        <h1
          className="neon-flicker leading-none tracking-wider mb-4"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(4rem, 15vw, 10rem)",
            color: "#39FF14",
            textShadow:
              "0 0 20px #39FF14, 0 0 40px #39FF14, 0 0 80px #00ff00, 0 0 120px #00ff00",
          }}
        >
          ROLABAR
        </h1>

        {/* Tagline */}
        <p
          className="mx-auto mb-3 max-w-2xl text-white/90 tracking-[0.3em] uppercase"
          style={{
            fontFamily: "var(--font-barlow)",
            fontSize: "clamp(0.9rem, 2.5vw, 1.3rem)",
            fontWeight: 600,
          }}
        >
          Donde la noche cobra vida
        </p>

        {/* Subtitle bar */}
        <div className="mx-auto mb-10 flex max-w-3xl items-center justify-center gap-4 opacity-70">
          <div className="neon-divider flex-1 max-w-[80px]" />
          <span
            className="text-xs tracking-[0.4em] uppercase"
            style={{ color: "#39FF14", fontFamily: "var(--font-barlow)" }}
          >
            Bar · DJ · Street Art · Noche
          </span>
          <div className="neon-divider flex-1 max-w-[80px]" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#events"
            className="neon-btn-solid px-10 py-4 text-base font-black tracking-[0.2em] uppercase rounded-sm w-full sm:w-auto text-center"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Ver Eventos
          </a>
          <a
            href="#reservar"
            className="neon-btn px-10 py-4 text-base font-black tracking-[0.2em] uppercase rounded-sm w-full sm:w-auto text-center"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Reservar Mesa
          </a>
        </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-xs tracking-[0.3em] uppercase text-gray-500" style={{ fontFamily: "var(--font-barlow)" }}>
          Scroll
        </span>
        <div
          className="w-0.5 h-8 rounded-full"
          style={{
            background: "linear-gradient(to bottom, #39FF14, transparent)",
            animation: "float 1.5s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
