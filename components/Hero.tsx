"use client";

import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "Next.js Engineer",
  "LeetCode Enthusiast",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Background grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Glow blob */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          animation: "float 6s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          className="fade-up"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            color: "var(--accent-primary)",
            marginBottom: "1.5rem",
            letterSpacing: "0.1em",
            animationDelay: "0.1s",
          }}
        >
          {">> hello, world —"}
        </p>

        <h1
          className="fade-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
            animationDelay: "0.2s",
          }}
        >
          Hi, I&apos;m{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6ee7b7 0%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Duc Nguyen
          </span>
        </h1>

        <h2
          className="fade-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(1.2rem, 3vw, 2.2rem)",
            color: "var(--text-muted)",
            marginBottom: "2rem",
            minHeight: "2.5rem",
            animationDelay: "0.3s",}}
        >
          {displayed}
          <span
            style={{
              display: "inline-block",
              width: "3px",
              height: "1em",
              background: "var(--accent-primary)",
              marginLeft: "4px",
              verticalAlign: "middle",
              animation: "blink 1s step-end infinite",
            }}
          />
        </h2>

        <p
          className="fade-up"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.9rem",
            color: "var(--text-muted)",
            maxWidth: "540px",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
            animationDelay: "0.4s",
          }}
        >
         I am a Dallas County-based software engineer with skills in full-stack web development, Machine-Learning models, Artificial Intelligence, and cloud management. I am passionate about building impactful projects and contributing to the open-source community.
        </p>

        <div
          className="fade-up"
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            animationDelay: "0.5s",
          }}
        >
          <a
            href="#projects"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              padding: "0.75rem 1.75rem",
              background: "var(--accent-primary)",
              color: "#0a0a0f",
              textDecoration: "none",
              borderRadius: "4px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.85";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            View My Projects
          </a>

          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              padding: "0.75rem 1.75rem",
              border: "1px solid var(--border)",
              color: "var(--accent-primary)",
              textDecoration: "none",
              borderRadius: "4px",
              letterSpacing: "0.05em",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent-glow)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}