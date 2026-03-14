"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Eventos", href: "#events" },
  { label: "Galería", href: "#gallery" },
  { label: "Servicios", href: "#services" },
  { label: "Ubicación", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10, 10, 10, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(57,255,20,0.15)" : "none",
        boxShadow: scrolled ? "0 0 30px rgba(57,255,20,0.05)" : "none",
      }}
    >
      <div className="section-container flex items-center justify-between gap-6 py-5 lg:py-6">
        {/* Logo */}
        <a
          href="#hero"
          className="font-bebas text-3xl tracking-widest neon-text-sm select-none"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          ROLA<span style={{ color: "#fff", textShadow: "none" }}>BAR</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-[#39FF14] transition-colors duration-300"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reservar"
            className="neon-btn px-5 py-2 text-sm font-bold tracking-widest uppercase rounded-sm"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Reservar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className="w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#39FF14",
              transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            className="w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#39FF14",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#39FF14",
              transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden transition-all duration-500 overflow-hidden"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          background: "rgba(10, 10, 10, 0.98)",
          borderTop: menuOpen ? "1px solid rgba(57,255,20,0.2)" : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-semibold tracking-widest uppercase text-gray-300 hover:text-[#39FF14] transition-colors"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reservar"
            onClick={() => setMenuOpen(false)}
            className="neon-btn px-5 py-3 text-sm font-bold tracking-widest uppercase rounded-sm text-center mt-2"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Reservar Mesa
          </a>
        </div>
      </div>
    </nav>
  );
}
