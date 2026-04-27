"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeSwitcher from "./Themeswitcher";

const links = [
  { label: "* About",    href: "#about" },
  { label: "* Projects", href: "#projects" },
  { label: "* Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.3s, border-bottom 0.3s",
        background: scrolled ? "rgba(10, 10, 15, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(110, 231, 183, 0.1)" : "none",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "1.2rem",
          color: "var(--accent-primary)",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        OmniArchive<span style={{ color: "var(--accent-secondary)" }}>.</span>
      </Link>

      {/* Desktop links */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          letterSpacing: "0.05em",
        }}
        className="desktop-nav"
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
              border: "1px solid var(--border)",
              padding: "4px 14px",
              borderRadius: "4px",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--accent-primary)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--text-muted)")
            }
          >
            {`${l.label}`}
          </a>
        ))}

        <a
        href="https://github.com/Duc-T-Nguyen"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "var(--accent-primary)",
          textDecoration: "none",
          border: "1px solid var(--border)",
          padding: "4px 14px",
          borderRadius: "4px",
          transition: "background 0.2s, box-shadow 0.2s",
          display: "inline-block",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "var(--accent-glow)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px var(--accent-glow)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "transparent";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
        >
          Go to GitHub
        </a>
        
      </div>
    </nav>
  );
}