"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const events = [
  {
    title: "Reggaeton Party",
    date: "Vie 21 Mar",
    time: "22:00",
    genre: "Reggaeton · Trap",
    dj: "DJ Pipe",
    desc: "La fiesta más caliente del fin de semana. Reggaeton viejo y nuevo, trap urbano, y la energía que solo ROLABAR tiene.",
    color: "#39FF14",
    tag: "Esta semana",
  },
  {
    title: "Electro Night",
    date: "Sáb 22 Mar",
    time: "22:00",
    genre: "Electronic · House",
    dj: "DJ Kass",
    desc: "Una noche de música electrónica sin filtros. Beats que hacen vibrar las paredes y luces que no paran.",
    color: "#bf00ff",
    tag: "Próximo",
  },
  {
    title: "Hip Hop Sessions",
    date: "Jue 27 Mar",
    time: "21:30",
    genre: "Hip Hop · R&B",
    dj: "DJ Loco",
    desc: "Cultura hip hop en su máxima expresión. Freestyle, beats clásicos y los más nuevos hits del rap.",
    color: "#ff6b00",
    tag: "Próximo",
  },
  {
    title: "Noche Urbana",
    date: "Vie 28 Mar",
    time: "22:00",
    genre: "Urban · Afrobeats",
    dj: "DJ Rola",
    desc: "Lo mejor del sonido urbano internacional. Afrobeats, dancehall y todo el sabor que necesitas.",
    color: "#39FF14",
    tag: "Próximo",
  },
];

export default function Events() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="events"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#0a0a0a", paddingTop: "8rem", paddingBottom: "8rem" }}
    >
      {/* BG deco */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(57,255,20,0.04) 0%, transparent 60%)",
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
            <span className="tag-badge">Cartelera</span>
            <div className="neon-divider w-16" />
          </div>
          <h2
            className="leading-none mb-8 text-center"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "#fff",
              letterSpacing: "0.05em",
            }}
          >
            Próximos{" "}
            <span
              style={{
                color: "#39FF14",
                textShadow: "0 0 20px #39FF14, 0 0 40px rgba(57,255,20,0.5)",
              }}
            >
              Eventos
            </span>
          </h2>
          <a
            href="https://instagram.com/rolabar.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn px-6 py-3 text-sm font-bold tracking-widest uppercase rounded-sm inline-block"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Ver todos en Instagram →
          </a>
        </motion.div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="event-card glow-sweep flex h-full flex-col gap-4 rounded-[24px] p-8 md:p-10"
            >
              {/* Card header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="tag-badge text-xs">{event.tag}</span>
                  <h3
                    className="mt-2 text-2xl font-black leading-tight"
                    style={{
                      fontFamily: "var(--font-bebas)",
                      color: event.color,
                      textShadow: `0 0 15px ${event.color}`,
                      letterSpacing: "0.05em",
                      fontSize: "1.8rem",
                    }}
                  >
                    {event.title}
                  </h3>
                </div>
                <div className="text-right shrink-0">
                  <div
                    className="text-sm font-bold"
                    style={{ fontFamily: "var(--font-barlow)", color: event.color }}
                  >
                    {event.date}
                  </div>
                  <div
                    className="text-xs text-gray-500"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {event.time} hrs
                  </div>
                </div>
              </div>

              {/* Genre + DJ */}
              <div className="flex items-center gap-3">
                <span className="text-lg" aria-hidden="true">🎧</span>
                <div>
                  <span
                    className="text-sm font-semibold text-gray-300"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {event.genre}
                  </span>
                  <span className="text-gray-600 mx-2">·</span>
                  <span
                    className="text-sm text-gray-400"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {event.dj}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-sm text-gray-400 leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {event.desc}
              </p>

              {/* Divider */}
              <div
                className="h-px w-full"
                style={{
                  background: `linear-gradient(90deg, ${event.color}44, transparent)`,
                }}
              />

              {/* CTA */}
              <div className="flex items-center justify-between">
                <span
                  className="text-xs text-gray-600 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Entrada libre
                </span>
                <a
                  href="#reservar"
                  className="px-5 py-2 text-xs font-bold tracking-widest uppercase rounded-sm transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-barlow)",
                    background: `${event.color}22`,
                    border: `1px solid ${event.color}66`,
                    color: event.color,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = event.color;
                    el.style.color = "#000";
                    el.style.boxShadow = `0 0 20px ${event.color}`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = `${event.color}22`;
                    el.style.color = event.color;
                    el.style.boxShadow = "none";
                  }}
                >
                  Reservar →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
