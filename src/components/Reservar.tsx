"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Reservar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="reservar"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#0a0a0a", paddingTop: "8rem", paddingBottom: "8rem" }}
    >
      {/* Glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(57,255,20,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="section-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
          style={{ marginBottom: "4rem", textAlign: "center", width: "100%" }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="neon-divider w-16" />
            <span className="tag-badge">Reservas</span>
            <div className="neon-divider w-16" />
          </div>
          <h2
            className="leading-none mb-4 text-center"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "#fff",
              letterSpacing: "0.05em",
            }}
          >
            Reserva tu{" "}
            <span
              style={{
                color: "#39FF14",
                textShadow: "0 0 20px #39FF14, 0 0 40px rgba(57,255,20,0.5)",
              }}
            >
              Mesa
            </span>
          </h2>
          <p
            className="text-gray-400 text-base text-center"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Asegura tu lugar para la próxima noche. Te contactamos en menos de 24 hrs.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ width: "100%", maxWidth: "760px", margin: "0 auto" }}
        >
          {sent ? (
            <div
              className="glass-panel rounded-[28px] px-8 py-16 text-center"
              style={{
                border: "1px solid rgba(57,255,20,0.4)",
                background: "rgba(57,255,20,0.05)",
                boxShadow: "0 0 40px rgba(57,255,20,0.1)",
              }}
            >
              <div className="text-5xl mb-4">🎉</div>
              <h3
                className="text-3xl mb-2"
                style={{
                  fontFamily: "var(--font-bebas)",
                  color: "#39FF14",
                  textShadow: "0 0 20px #39FF14",
                  letterSpacing: "0.05em",
                }}
              >
                ¡Reserva enviada!
              </h3>
              <p
                className="text-gray-400"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Nos pondremos en contacto contigo pronto. ¡Nos vemos en ROLABAR!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass-panel flex flex-col gap-5 rounded-[28px]"
              style={{ padding: "3rem 3.5rem", border: "1px solid rgba(57,255,20,0.2)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Nombre" name="nombre" type="text" placeholder="Tu nombre" required />
                <Field label="Teléfono / WhatsApp" name="telefono" type="tel" placeholder="+56 9 XXXX XXXX" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Fecha" name="fecha" type="date" placeholder="" required />
                <Field label="N° de personas" name="personas" type="number" placeholder="Ej: 4" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs uppercase tracking-widest text-gray-400"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Mensaje (opcional)
                </label>
                <textarea
                  name="mensaje"
                  placeholder="Alguna indicación especial, cumpleaños, etc."
                  rows={3}
                  className="w-full rounded-sm px-4 py-3 text-sm text-gray-300 resize-none outline-none focus:ring-0 transition-all duration-300"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    border: "1px solid rgba(57,255,20,0.2)",
                    fontFamily: "var(--font-barlow)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(57,255,20,0.6)";
                    e.currentTarget.style.boxShadow = "0 0 10px rgba(57,255,20,0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(57,255,20,0.2)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <button
                type="submit"
                className="neon-btn-solid py-4 text-base font-black tracking-[0.2em] uppercase rounded-sm mt-2"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Solicitar Reserva →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-widest text-gray-400"
        style={{ fontFamily: "var(--font-barlow)" }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-sm px-4 py-3 text-sm text-gray-300 outline-none focus:ring-0 transition-all duration-300"
        style={{
          background: "rgba(0,0,0,0.5)",
          border: "1px solid rgba(57,255,20,0.2)",
          fontFamily: "var(--font-barlow)",
          colorScheme: "dark",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "rgba(57,255,20,0.6)";
          e.currentTarget.style.boxShadow = "0 0 10px rgba(57,255,20,0.1)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "rgba(57,255,20,0.2)";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
    </div>
  );
}
