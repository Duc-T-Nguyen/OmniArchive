"use client";

const skills = [
  { category: "Frontend",  items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend",   items: ["Node.js", "Prisma", "PostgreSQL", "REST APIs"] },
  { category: "DevOps",    items: ["Docker", "GitHub Actions", "Vercel", "Linux"] },
  { category: "Tools",     items: ["Git", "VS Code", "Figma", "Postman"] },
];

export default function About() {
  return (
    <section id="about">
      {/* Section label */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "var(--accent-primary)",
          letterSpacing: "0.15em",
          marginBottom: "1rem",
        }}
      >
        {"About"}
      </p>

      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          letterSpacing: "-0.03em",
          marginBottom: "2.5rem",
          lineHeight: 1.1,
        }}
      >
        A bit{" "}
        <span style={{ 
          color: "var(--accent-primary)" }}>
            about me
            </span>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Bio text */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              lineHeight: 1.9,
              marginBottom: "1.25rem",
            }}
          >
            I&apos;m a developer who loves building polished full-stack
            applications. OmniArchive is my personal space to document and
            showcase work — a living archive of everything I&apos;ve created.
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              lineHeight: 1.9,
              marginBottom: "2rem",
            }}
          >
            I work primarily with the Next.js ecosystem, enjoy setting up clean
            database schemas with Prisma, and care a lot about developer
            experience and deployment reliability.
          </p>

          <a
            href="https://github.com/Duc-T-Nguyen"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--accent-primary)",
              textDecoration: "none",
              borderBottom: "1px solid var(--border)",
              paddingBottom: "2px",
              transition: "color 0.2s, border-color 0.2s",
            }}
          >
            View GitHub profile
          </a>
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.25rem",
          }}
        >
          {skills.map((group) => (
            <div
              key={group.category}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid rgba(110, 231, 183, 0.1)",
                borderRadius: "8px",
                padding: "1.25rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--accent-primary)",
                  letterSpacing: "0.1em",
                  marginBottom: "0.75rem",
                }}
              >
                {group.category.toUpperCase()}
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                      lineHeight: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span style={{ color: "var(--accent-secondary)", fontSize: "0.6rem" }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}