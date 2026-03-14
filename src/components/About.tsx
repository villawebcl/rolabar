"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#0d0d0d", paddingTop: "8rem", paddingBottom: "8rem" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 50%, rgba(57,255,20,0.04) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(191,0,255,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header mb-20 md:mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="neon-divider w-16" />
            <span className="tag-badge">Nosotros</span>
            <div className="neon-divider w-16" />
          </div>
          <h2
            className="leading-none text-center"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "#fff",
              letterSpacing: "0.05em",
            }}
          >
            El{" "}
            <span
              style={{
                color: "#39FF14",
                textShadow: "0 0 20px #39FF14, 0 0 40px rgba(57,255,20,0.5)",
              }}
            >
              espacio
            </span>{" "}
            donde todo
            <br />
            cobra vida
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p
              className="section-copy mb-6 text-lg"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 400 }}
            >
              <span style={{ color: "#39FF14", fontWeight: 700 }}>ROLABAR</span> es
              un bar discoteca inspirado en la cultura urbana y el street art. Un
              espacio donde la música, el arte y la energía de la noche se mezclan
              para crear una experiencia única.
            </p>
            <p
              className="section-copy mb-10 text-base"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Nuestras paredes son lienzos vivos — murales de graffiti, luces de neón
              y una atmósfera que te transporta directo al corazón de la cultura
              urbana. Cada noche es distinta. Cada visita es una nueva historia.
            </p>

            {/* Stats */}
            <div className="glass-panel grid grid-cols-3 gap-4 rounded-[24px] p-8 sm:gap-6">
              {[
                { num: "500+", label: "Capacidad" },
                { num: "7", label: "DJs residentes" },
                { num: "∞", label: "Buenas noches" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-3xl font-black mb-1"
                    style={{
                      fontFamily: "var(--font-bebas)",
                      color: "#39FF14",
                      textShadow: "0 0 15px #39FF14",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    className="text-xs text-gray-500 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Venue photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div
              className="relative rounded-sm overflow-hidden"
              style={{
                border: "1px solid rgba(57,255,20,0.3)",
                boxShadow:
                  "0 0 30px rgba(57,255,20,0.15), 0 0 60px rgba(57,255,20,0.05)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/venue.jpeg"
                alt="Interior de ROLABAR"
                className="h-[420px] w-full object-cover md:h-[500px]"
                style={{ filter: "brightness(0.85) saturate(1.2)" }}
              />
              {/* Green overlay on hover */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(57,255,20,0.08) 0%, transparent 50%, rgba(191,0,255,0.08) 100%)",
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 left-6 rounded-sm px-6 py-4"
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(57,255,20,0.4)",
                boxShadow: "0 0 20px rgba(57,255,20,0.2)",
              }}
            >
              <div
                className="text-2xl font-black"
                style={{
                  fontFamily: "var(--font-bebas)",
                  color: "#39FF14",
                  letterSpacing: "0.05em",
                }}
              >
                Street Art
              </div>
              <div
                className="text-xs text-gray-400 uppercase tracking-widest"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Murales originales
              </div>
            </div>

            {/* Corner accent */}
            <div
              className="absolute -top-2 -right-2 w-16 h-16 pointer-events-none"
              style={{
                borderTop: "2px solid #39FF14",
                borderRight: "2px solid #39FF14",
                boxShadow: "3px -3px 15px rgba(57,255,20,0.4)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
