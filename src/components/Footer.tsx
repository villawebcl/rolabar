const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Eventos", href: "#events" },
  { label: "Galería", href: "#gallery" },
  { label: "Servicios", href: "#services" },
  { label: "Ubicación", href: "#location" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(57,255,20,0.12)",
      }}
    >
      {/* Top neon line */}
      <div className="neon-divider w-full" />

      <div className="section-container" style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>

        {/* Brand centrado */}
        <div className="flex flex-col items-center gap-4 text-center mb-14">
          <a
            href="#hero"
            className="text-6xl tracking-widest select-none"
            style={{
              fontFamily: "var(--font-bebas)",
              color: "#39FF14",
              textShadow: "0 0 15px #39FF14, 0 0 30px rgba(57,255,20,0.4)",
            }}
          >
            ROLA<span style={{ color: "#fff", textShadow: "none" }}>BAR</span>
          </a>
          <p
            className="max-w-sm text-base leading-relaxed text-gray-400"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Bar discoteca con identidad urbana, noches temáticas, DJs en vivo y un ambiente pensado para grupos, eventos y reservas.
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full neon-pulse"
              style={{ background: "#39FF14", boxShadow: "0 0 6px #39FF14" }}
            />
            <span
              className="text-xs text-gray-500 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Jue – Dom · 21:00 – 04:00
            </span>
          </div>
          <p
            className="text-sm text-gray-500"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Santo Domingo, Región de Valparaíso, Chile
          </p>
        </div>

        {/* 3 columnas centradas */}
        <div className="mb-14 grid grid-cols-1 gap-10 border border-white/5 bg-white/[0.02] px-8 py-10 md:grid-cols-3 md:gap-8 rounded-[28px]">

          {/* Navegación */}
          <div className="flex flex-col items-center gap-3 text-center">
            <h4
              className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-2"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Navegación
            </h4>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold tracking-widest uppercase text-gray-500 hover:text-[#39FF14] transition-colors duration-300"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Contacto */}
          <div className="flex flex-col items-center gap-3 text-center">
            <h4
              className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-2"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Contacto
            </h4>
            <p
              className="text-sm text-gray-400"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              +56 9 XXXX XXXX
            </p>
            <a
              href="https://instagram.com/rolabar.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-[#39FF14] transition-colors"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@rolabar.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-[#39FF14] transition-colors"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              TikTok
            </a>
            <a
              href="https://wa.me/56900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-[#39FF14] transition-colors"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              WhatsApp
            </a>
          </div>

          {/* Reservar */}
          <div className="flex flex-col items-center gap-3 text-center">
            <h4
              className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-2"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Reservas
            </h4>
            <p
              className="text-sm text-gray-400 max-w-[200px] leading-relaxed"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Asegura tu mesa para la próxima noche.
            </p>
            <a
              href="#reservar"
              className="neon-btn-solid mt-2 w-full max-w-[200px] px-6 py-3 text-center text-sm font-black tracking-widest uppercase rounded-sm"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Reservar Mesa
            </a>
          </div>
        </div>

        {/* Bottom divider */}
        <div
          className="h-px w-full mb-8"
          style={{ background: "rgba(57,255,20,0.08)" }}
        />

        {/* Copyright */}
        <p
          className="text-xs text-gray-700 text-center tracking-widest uppercase"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          © {year} ROLABAR · Santo Domingo, Región de Valparaíso, Chile · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
