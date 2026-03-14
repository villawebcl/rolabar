"use client";

import { useState, useEffect } from "react";

function isOpenNow() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  const hour = now.getHours();

  // Open Thu-Sat: 21:00 - 04:00, Sun: 21:00 - 03:00
  if (day === 4 || day === 5) {
    // Thu, Fri: 21–04
    return hour >= 21 || hour < 4;
  }
  if (day === 6) {
    // Sat: 21–04
    return hour >= 21 || hour < 4;
  }
  if (day === 0) {
    // Sun: 21–03
    return hour >= 21 || hour < 3;
  }
  return false;
}

export default function StatusBar() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setOpen(isOpenNow());
      const now = new Date();
      setTime(now.toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit" }));
    };
    tick();
    const interval = setInterval(tick, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative z-30 py-3 px-4"
      style={{
        marginTop: "80px",
        background: "rgba(10,10,10,0.95)",
        borderTop: "1px solid rgba(57,255,20,0.15)",
        borderBottom: "1px solid rgba(57,255,20,0.15)",
      }}
    >
      <div className="section-container flex flex-wrap items-center justify-center gap-4 text-center md:gap-8 lg:gap-12">

        {/* Open/Closed status */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-2.5 h-2.5 rounded-full neon-pulse"
            style={{
              background: open ? "#39FF14" : "#ff3333",
              boxShadow: open
                ? "0 0 8px #39FF14, 0 0 16px #39FF14"
                : "0 0 8px #ff3333, 0 0 16px #ff3333",
            }}
          />
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-barlow)",
              color: open ? "#39FF14" : "#ff5555",
              textShadow: open
                ? "0 0 8px #39FF14"
                : "0 0 8px #ff3333",
            }}
          >
            {open ? "Abierto ahora" : "Cerrado"}
          </span>
          {time && (
            <span className="text-xs text-gray-500" style={{ fontFamily: "var(--font-barlow)" }}>
              · {time}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-4" style={{ background: "rgba(57,255,20,0.2)" }} />

        {/* Hours */}
        <div className="flex items-center gap-2">
          <span className="text-base">🕒</span>
          <span
            className="text-sm text-gray-300 tracking-wide"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            <span className="text-white font-semibold">Jue–Dom</span> · 21:00 – 04:00
          </span>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-4" style={{ background: "rgba(57,255,20,0.2)" }} />

        {/* Location */}
        <div className="flex items-center gap-2">
          <span className="text-base">📍</span>
          <span
            className="text-sm text-gray-300 tracking-wide"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            <span className="text-white font-semibold">Santo Domingo</span>, Chile
          </span>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-4" style={{ background: "rgba(57,255,20,0.2)" }} />

        {/* Music */}
        <div className="flex items-center gap-2">
          <span className="text-base">🎧</span>
          <span
            className="text-sm tracking-wide"
            style={{
              fontFamily: "var(--font-barlow)",
              color: "#39FF14",
              textShadow: "0 0 8px #39FF14",
            }}
          >
            DJ Sets · Música en vivo
          </span>
        </div>

      </div>
    </div>
  );
}
