"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(110, 231, 183, 0.08)",
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1100px",
        margin: "0 auto",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.78rem",
          color: "var(--text-muted)",
        }}
      >
        {`* by `}
        <a
          href="https://github.com/Duc-T-Nguyen"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--accent-primary)", textDecoration: "none" }}
        >
          Duc Nguyen
        </a>
        {` — ${new Date().getFullYear()}`}
      </p>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        {[
          { label: "GitHub",   href: "https://github.com/Duc-T-Nguyen" },
          { label: "LinkedIn", href: "https://linkedin.com" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",}}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--accent-primary)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--text-muted)")
            }
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}