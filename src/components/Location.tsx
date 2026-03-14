"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Location() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="location"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#0d0d0d", paddingTop: "8rem", paddingBottom: "8rem" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(57,255,20,0.04) 0%, transparent 60%)",
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
            <span className="tag-badge">Ubicación</span>
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
            Encuéntranos en{" "}
            <span
              style={{
                color: "#39FF14",
                textShadow: "0 0 20px #39FF14, 0 0 40px rgba(57,255,20,0.5)",
              }}
            >
              Santo Domingo
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel flex flex-col gap-8 rounded-[28px] p-6 md:p-8"
          >
            {[
              {
                icon: "📍",
                label: "Dirección",
                value: "Av. Principal s/n, Santo Domingo",
                sub: "Región de Valparaíso, Chile",
              },
              {
                icon: "🕒",
                label: "Horario",
                value: "Jueves a Domingo",
                sub: "21:00 – 04:00 hrs",
              },
              {
                icon: "📞",
                label: "Contacto",
                value: "+56 9 XXXX XXXX",
                sub: "WhatsApp disponible",
              },
              {
                icon: "📱",
                label: "Redes",
                value: "@rolabar.cl",
                sub: "Instagram · TikTok",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex gap-5 items-start"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-sm shrink-0 text-xl"
                  style={{
                    background: "rgba(57,255,20,0.08)",
                    border: "1px solid rgba(57,255,20,0.3)",
                    boxShadow: "0 0 10px rgba(57,255,20,0.1)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-widest text-gray-500 mb-1"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-base font-semibold text-white"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {item.value}
                  </div>
                  <div
                    className="text-sm text-gray-500"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {item.sub}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://instagram.com/rolabar.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-btn px-5 py-2.5 text-sm font-bold tracking-widest uppercase rounded-sm"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Instagram
              </a>
              <a
                href="https://wa.me/56900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm font-bold tracking-widest uppercase rounded-sm transition-all duration-300"
                style={{
                  fontFamily: "var(--font-barlow)",
                  background: "rgba(57,255,20,0.1)",
                  border: "1px solid rgba(57,255,20,0.3)",
                  color: "#39FF14",
                }}
              >
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="relative flex h-[400px] items-center justify-center overflow-hidden rounded-[28px] md:h-[460px]"
              style={{
                border: "1px solid rgba(57,255,20,0.3)",
                boxShadow: "0 0 30px rgba(57,255,20,0.1)",
                background: "#111",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13270.6!2d-71.6!3d-33.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSanto%20Domingo%2C%20Chile!5e0!3m2!1ses!2scl!4v1680000000000!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(155deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Corner accent */}
              <div
                className="absolute top-0 left-0 w-10 h-10 pointer-events-none z-10"
                style={{
                  borderTop: "2px solid #39FF14",
                  borderLeft: "2px solid #39FF14",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none z-10"
                style={{
                  borderBottom: "2px solid #39FF14",
                  borderRight: "2px solid #39FF14",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
