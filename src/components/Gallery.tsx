"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#0d0d0d", paddingTop: "8rem", paddingBottom: "8rem" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(191,0,255,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header mb-20 md:mb-24"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="neon-divider w-16" />
            <span className="tag-badge">Galería</span>
            <div className="neon-divider w-16" />
          </div>
          <h2
            className="leading-none"
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
              ambiente
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden h-[540px] grid-cols-[1.3fr_0.7fr] grid-rows-2 gap-4 md:grid"
        >
          <div
            className="gallery-item relative row-span-2 overflow-hidden rounded-[24px]"
            style={{ border: "1px solid rgba(57,255,20,0.2)" }}
          >
            <video
              src="/venue.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }}
            />
            <div className="absolute bottom-4 left-4">
              <span className="tag-badge">Ambiente · ROLABAR</span>
            </div>
          </div>

          <div
            className="gallery-item overflow-hidden rounded-[24px]"
            style={{ border: "1px solid rgba(57,255,20,0.2)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/venue.jpeg"
              alt="Interior ROLABAR"
              className="h-full w-full object-cover"
              style={{ filter: "brightness(0.85) saturate(1.2)" }}
            />
          </div>

          <div
            className="glass-panel flex items-center justify-center overflow-hidden rounded-[24px] p-6"
            style={{ background: "#111" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.jpeg"
              alt="ROLABAR Logo"
              className="h-full w-full object-contain"
              style={{ mixBlendMode: "screen", filter: "brightness(1.1)" }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-4 md:hidden"
        >
          <div
            className="gallery-item relative h-[260px] overflow-hidden rounded-[24px]"
            style={{ border: "1px solid rgba(57,255,20,0.2)" }}
          >
            <video
              src="/venue.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }}
            />
            <div className="absolute bottom-4 left-4">
              <span className="tag-badge">Ambiente · ROLABAR</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div
              className="gallery-item h-[160px] overflow-hidden rounded-[24px]"
              style={{ border: "1px solid rgba(57,255,20,0.2)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/venue.jpeg"
                alt="Interior ROLABAR"
                className="h-full w-full object-cover"
                style={{ filter: "brightness(0.85) saturate(1.2)" }}
              />
            </div>

            <div
              className="glass-panel h-[160px] overflow-hidden rounded-[24px] p-4"
              style={{ background: "#111" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.jpeg"
                alt="ROLABAR Logo"
                className="h-full w-full object-contain"
                style={{ mixBlendMode: "screen", filter: "brightness(1.1)" }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="https://instagram.com/rolabar.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn rounded-sm px-8 py-3 text-sm font-bold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Más en Instagram →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
