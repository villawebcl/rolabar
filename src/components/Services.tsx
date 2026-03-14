"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: "🎧",
    title: "DJ Sets",
    desc: "DJs residentes y invitados cada noche. Reggaeton, electrónica, hip hop y urbano.",
    color: "#39FF14",
  },
  {
    icon: "🍹",
    title: "Barra Completa",
    desc: "Tragos artesanales, cervezas nacionales e importadas y bebidas premium.",
    color: "#bf00ff",
  },
  {
    icon: "🎨",
    title: "Street Art",
    desc: "Murales originales que convierten cada pared en una obra de arte urbano vivo.",
    color: "#39FF14",
  },
  {
    icon: "🪑",
    title: "Reserva de Mesas",
    desc: "Asegura tu espacio VIP con servicio de botillería y atención exclusiva.",
    color: "#ff6b00",
  },
  {
    icon: "📸",
    title: "Photobooth",
    desc: "Zona de fotos con iluminación neon y fondos de street art para recordar la noche.",
    color: "#39FF14",
  },
  {
    icon: "🎉",
    title: "Eventos Privados",
    desc: "Celebraciones, cumpleaños y eventos corporativos con producción completa.",
    color: "#bf00ff",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#0a0a0a", paddingTop: "8rem", paddingBottom: "8rem" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(57,255,20,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header mb-20 md:mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="neon-divider w-16" />
            <span className="tag-badge">Servicios</span>
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
            Todo lo que{" "}
            <span
              style={{
                color: "#39FF14",
                textShadow: "0 0 20px #39FF14, 0 0 40px rgba(57,255,20,0.5)",
              }}
            >
              necesitas
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="event-card group flex h-full flex-col gap-4 rounded-[24px] p-8 md:p-10"
            >
              <div
                className="text-3xl w-12 h-12 flex items-center justify-center rounded-sm"
                style={{
                  background: `${s.color}15`,
                  border: `1px solid ${s.color}44`,
                }}
              >
                {s.icon}
              </div>
              <h3
                className="text-xl font-black tracking-wide"
                style={{
                  fontFamily: "var(--font-bebas)",
                  color: s.color,
                  textShadow: `0 0 10px ${s.color}88`,
                  letterSpacing: "0.05em",
                  fontSize: "1.5rem",
                }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm text-gray-400 leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
