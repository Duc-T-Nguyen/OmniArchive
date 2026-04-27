"use client";

const projects = [
  {
    id: 1,
    name: "OmniArchive",
    description:
      "A personal portfolio and project archive built with Next.js, TypeScript, and Prisma. Showcases all my work in one place.",
    tags: ["Next.js", "TypeScript", "Prisma", "Docker"],
    github: "https://github.com/Duc-T-Nguyen/OmniArchive",
    live: null,
    featured: true,
  },
  {
    id: 2,
    name: "P2P Network Simulation",
    description:
      "This P2P project implements a simple BitTorrent like peer-to-peer file sharing client. The project is designed to allow distributed file sharing, including a tracker server, torrent file creation method, and peer clients that are able to both seed and download files.",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/Duc-T-Nguyen/P2P-Network-Project",
    live: null,
    featured: false,
  },
  {
    id: 3,
    name: "Project Three",
    description:
      "Describe your third project here. Keep it punchy — one or two sentences that explain the what and the why.",
    tags: ["TypeScript", "REST API", "Docker"],
    github: "https://github.com/Duc-T-Nguyen",
    live: null,
    featured: false,
  },
];
// ─────────────────────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      style={{
        background: "var(--bg-surface)",
        border: project.featured
          ? "1px solid rgba(110, 231, 183, 0.35)"
          : "1px solid rgba(110, 231, 183, 0.1)",
        borderRadius: "10px",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "transform 0.25s, border-color 0.25s",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(110, 231, 183, 0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.borderColor = project.featured
          ? "rgba(110, 231, 183, 0.35)"
          : "rgba(110, 231, 183, 0.1)";
      }}
    >
      {/* Featured badge */}
      {project.featured && (
        <span
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--accent-primary)",
            background: "rgba(110, 231, 183, 0.12)",
            padding: "2px 10px",
            borderRadius: "100px",
            border: "1px solid rgba(110, 231, 183, 0.3)",
            letterSpacing: "0.08em",
          }}
        >
          ★ featured
        </span>
      )}

      {/* Folder icon */}
      <div style={{ fontSize: "1.5rem" }}>📁</div>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1.15rem",
          color: "var(--text-primary)",
        }}
      >
        {project.name}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.82rem",
          color: "var(--text-muted)",
          lineHeight: 1.8,
          flex: 1,
        }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              padding: "2px 10px",
              border: "1px solid rgba(124, 58, 237, 0.3)",
              borderRadius: "100px",
              color: "#a78bfa",
              background: "rgba(124, 58, 237, 0.08)",
              letterSpacing: "0.04em",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--accent-primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
            }
          >
            {"<>"} Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--accent-primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
            }
          >
            ↗ Live
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "var(--accent-primary)",
          letterSpacing: "0.15em",
          marginBottom: "1rem",
        }}
      >
        {"Projects"}
      </p>

      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          letterSpacing: "-0.03em",
          marginBottom: "0.75rem",
          lineHeight: 1.1,
        }}
      >
        Things I&apos;ve{" "}
        <span style={{ color: "var(--accent-primary)" }}>built</span>
      </h2>

      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.88rem",
          color: "var(--text-muted)",
          marginBottom: "3rem",
          maxWidth: "480px",
        }}
      >
        A selection of projects I&apos;ve worked on. More lives on{" "}
        <a
          href="https://github.com/Duc-T-Nguyen"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--accent-primary)", textDecoration: "none" }}
        >
          GitHub ↗
        </a>
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}