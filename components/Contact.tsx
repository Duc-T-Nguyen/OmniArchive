"use client";

export default function Contact() {
  return (
    <section id="contact">
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "var(--accent-primary)",
          letterSpacing: "0.15em",
          marginBottom: "1rem",
        }}
      >
        {"My Contact Info and Social Media"}
      </p>

      <div
        style={{
          background: "var(--bg-surface)",
          border: "1px solid rgba(110, 231, 183, 0.15)",
          borderRadius: "12px",
          padding: "4rem 3rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "400px",
            height: "200px",
            background: "radial-gradient(ellipse, rgba(110, 231, 183, 0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
          }}
        >
          Let&apos;s{" "}
          <span style={{ color: "var(--accent-primary)" }}>connect</span>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.88rem",
            color: "var(--text-muted)",
            maxWidth: "440px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.9,
          }}
        >
          I&apos;m open to discussing new opportunities, projects, or questions about my work. Send me either a email, or reach out to me on Linkedin, or whatever platform listed here!
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="mailto:ductrungnguyen20034@gmail.com"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              padding: "0.75rem 2rem",
              background: "var(--accent-primary)",
              color: "#0a0a0f",
              textDecoration: "none",
              borderRadius: "4px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/duc-nguyen2003/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              padding: "0.75rem 2rem",
              border: "1px solid var(--border)",
              color: "var(--accent-primary)",
              textDecoration: "none",
              borderRadius: "4px",
              letterSpacing: "0.05em",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--accent-glow)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "transparent")
            }
          >
            My LinkedIn
          </a>

          <a
            href="https://github.com/Duc-T-Nguyen"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              padding: "0.75rem 2rem",
              border: "1px solid var(--border)",
              color: "var(--accent-primary)",
              textDecoration: "none",
              borderRadius: "4px",
              letterSpacing: "0.05em",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--accent-glow)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "transparent")
            }
          >
            My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}