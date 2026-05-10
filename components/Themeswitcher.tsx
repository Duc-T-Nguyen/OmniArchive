"use client";

import { useState, useEffect } from "react";
const themes = [
  {
    id: "cyber",
    label: "Cyber",
    fonts: "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap",
    vars: {
      "--bg-deep":           "#0a0a0f",
      "--bg-surface":        "#12121a",
      "--bg-raised":         "#1a1a28",
      "--accent-primary":    "#6ee7b7",
      "--accent-secondary":  "#7c3aed",
      "--accent-glow":       "rgba(110, 231, 183, 0.15)",
      "--text-primary":      "#f0f0ff",
      "--text-muted":        "#8888aa",
      "--border":            "rgba(110, 231, 183, 0.2)",
      "--font-display":      "'Orbitron', sans-serif",
      "--font-mono":         "'Space Mono', monospace",
    },
  },
  {
    id: "midnight",
    label: "Midnight",
    fonts: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;600;700;800&display=swap",
    vars: {
      "--bg-deep":           "#060612",
      "--bg-surface":        "#0d0d22",
      "--bg-raised":         "#16163a",
      "--accent-primary":    "#60a5fa",
      "--accent-secondary":  "#f472b6",
      "--accent-glow":       "rgba(96, 165, 250, 0.15)",
      "--text-primary":      "#e2e8f0",
      "--text-muted":        "#64748b",
      "--border":            "rgba(96, 165, 250, 0.2)",
      "--font-display":      "'Inter', sans-serif",
      "--font-mono":         "'JetBrains Mono', monospace",
    },
  },
  {
    id: "forest",
    label: "Forest",
    fonts: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&family=DM+Serif+Display&display=swap",
    vars: {
      "--bg-deep":           "#0a110a",
      "--bg-surface":        "#101a10",
      "--bg-raised":         "#182518",
      "--accent-primary":    "#86efac",
      "--accent-secondary":  "#fbbf24",
      "--accent-glow":       "rgba(134, 239, 172, 0.15)",
      "--text-primary":      "#f0fdf4",
      "--text-muted":        "#6b7280",
      "--border":            "rgba(134, 239, 172, 0.2)",
      "--font-display":      "'Playfair Display', serif",
      "--font-mono":         "'Fira Code', monospace",
    },
  },
  {
    id: "ember",
    label: "Passion",
    fonts: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&family=Outfit:wght@400;600;700;800&display=swap",
    vars: {
      "--bg-deep":           "#0f0800",
      "--bg-surface":        "#1a1000",
      "--bg-raised":         "#271a00",
      "--accent-primary":    "#fb923c",
      "--accent-secondary":  "#ef4444",
      "--accent-glow":       "rgba(251, 146, 60, 0.15)",
      "--text-primary":      "#fef3c7",
      "--text-muted":        "#92400e",
      "--border":            "rgba(251, 146, 60, 0.2)",
      "--font-display":      "'Outfit', sans-serif",
      "--font-mono":         "'IBM Plex Mono', monospace",
    },
  },
  {
    id: "light",
    label: "Sunlight",
    fonts: "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap",
    vars: {
      "--bg-deep":           "#f8fafc",
      "--bg-surface":        "#f1f5f9",
      "--bg-raised":         "#e2e8f0",
      "--accent-primary":    "#0891b2",
      "--accent-secondary":  "#7c3aed",
      "--accent-glow":       "rgba(8, 145, 178, 0.1)",
      "--text-primary":      "#0f172a",
      "--text-muted":        "#64748b",
      "--border":            "rgba(8, 145, 178, 0.25)",
      "--font-display":      "'IBM Plex Sans', sans-serif",
      "--font-mono":         "'IBM Plex Mono', monospace",
    },
  },
] as const;

type ThemeId = (typeof themes)[number]["id"];

const STORAGE_KEY = "omniarchive-theme";

export default function ThemeSwitcher() {
  const [activeId, setActiveId] = useState<ThemeId>("cyber");
  const [open, setOpen] = useState(false);

  // Apply theme to :root CSS variables
  function applyTheme(id: ThemeId) {
    const theme = themes.find((t) => t.id === id);
    if (!theme) return;

    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Swap Google Fonts link
    let link = document.getElementById("theme-font") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.id = "theme-font";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    link.href = theme.fonts;

    localStorage.setItem(STORAGE_KEY, id);
    setActiveId(id);
  }

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    if (saved && themes.find((t) => t.id === saved)) {
      applyTheme(saved);
    }
  }, []);

  const activeTheme = themes.find((t) => t.id === activeId)!;

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 198,
          }}
        />
      )}

      {/* Floating button + panel */}
      <div
        style={{
          position: "fixed",
          bottom: "1.75rem",
          right: "1.75rem",
          zIndex: 199,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "0.75rem",
        }}
      >
        {/* Theme panel */}
        {open && (
          <div
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              minWidth: "160px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              animation: "fadeUp 0.15s ease both",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--text-muted)",
                letterSpacing: "0.12em",
                marginBottom: "0.25rem",
                paddingLeft: "0.25rem",
              }}
            >
              SELECT YOUR STYLE
            </p>

            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => applyTheme(theme.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.03em",
                  transition: "background 0.15s",
                  background:
                    activeId === theme.id
                      ? "var(--accent-glow)"
                      : "transparent",
                  color:
                    activeId === theme.id
                      ? "var(--accent-primary)"
                      : "var(--text-muted)",
                  width: "100%",
                  textAlign: "left",
                  outline:
                    activeId === theme.id
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                ==
                {theme.label}
                {activeId === theme.id && (
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: "0.6rem",
                      color: "var(--accent-primary)",
                    }}
                  >
                  
                  </span>
                )}
                ==
              </button>
            ))}
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={() => setOpen((o) => !o)}
          title="Switch theme"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "1px solid var(--border)",
            background: "var(--bg-surface)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.3rem",
            boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
            transition: "transform 0.2s, border-color 0.2s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "var(--accent-primary)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          }}
        >
        </button>
      </div>
    </>
  );
}