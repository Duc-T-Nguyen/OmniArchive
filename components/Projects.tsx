"use client";
import { useState, useMemo } from "react";

const projects = [
  {
    id: 1,
    name: "Computer Vision Object Recognition Project",
    description:
      "A project focused on implementing object recognition algorithms in computer vision applications.",
    tags: ["Python", "Yolov8", "Jetson", "Computer Vision"],
    github: "https://github.com/Duc-T-Nguyen/Computer-Vision-Object-Recognition/tree/one_pass_model",
    live: null,
    featured: true,
  },
  {
    id: 2,
    name: "P2P Network Simulation",
    description:
      "This P2P project implements a simple BitTorrent like peer-to-peer file sharing client. The project is designed to allow distributed file sharing, including a tracker server, torrent file creation method, and peer clients that are able to both seed and download files.",
    tags: ["Python", "BitTorrent Protocol", "Networking"],
    github: "https://github.com/Duc-T-Nguyen/P2P-Network-Project",
    live: null,
    featured: false,
  },
  {
    id: 3,
    name: "Geospatial Dashboard Chatbot",
    description:
      "A chatbot integrated into a geospatial dashboard for analyzing and visualizing environmental data.",
    tags: ["TypeScript", "JavaScript", "CSS", "Python", "Claude Haiku", "Qwen3-VL"],
    github: "https://github.com/kevalshah2005/Aerial-Damage-Analysis-VLM",
    live: null,
    featured: false,
  },
  {
    id: 4,
    name: "Simple Animal Guessing Game",
    description:
      "A simple game where players guess the type of animal based on a series of clues.",
    tags: ["C++", "Game", "Tree"],
    github: "https://github.com/Duc-T-Nguyen/Animal-Guessing-Game",
    live: null,
    featured: false,
  },
  {
    id: 5, 
    name: "Animal Registry System",
    description:
      "A command-line application for managing a registry of cats and dogs, allowing users to add, view, and search for animals in the system.",
    tags: ["C++", "Database", "CLI"],
    github: "https://github.com/Duc-T-Nguyen/Animal-Registry-for-Cats-and-Dogs",
    live: null,
    featured: false,
  },
  {
    id: 6, 
    name: "Reading Huddle",
    description:
      "A web application that allows users to create and join virtual reading groups, share book recommendations, and discuss literature in real-time.",
    tags: ["TypeScript", "Next.js", "Web Development", "Tailwind CSS", "Prisma", "PostgreSQL"],
    github: "https://github.com/UTDallasEPICS/Reading-MLK-Project",
    live: null,
    featured: false,
  },

  {
    id: 7,
    name: "Audio Enhancement API",
    description: "A lightweight speech enhancement toolkit with a FastAPI endpoint that can denoise audio using either a classical Wiener filter or a learned MetricGAN model.",
    tags: ["Python", " Wiener filter", "Metricgan+", "Audio Enhancement"],
    github: "https://github.com/Duc-T-Nguyen/speech-enhancement",
    live: null,
    featured: false,
  }
];

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort(); // Get unique tags for filtering 

function ProjectCard({ project, activeTags, onTagClick }: { project: (typeof projects)[0]; activeTags: Set<string>; onTagClick: (tag:string) => void }) {
  return (
    <div
      style={{
        background: "var(--bg-surface)",
        border: project.featured
          ? "1px solid var(--border)"
          : "1px solid rgba(110, 231, 183, 0.08)",
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
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.borderColor = project.featured
          ? "var(--border)"
          : "rgba(110, 231, 183, 0.08)";
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
            background: "var(--accent-glow)",
            padding: "2px 10px",
            borderRadius: "100px",
            border: "1px solid var(--border)",
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
          paddingRight: project.featured ? "5rem" : "0",
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
            onClick={()=> onTagClick(tag)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              padding: "2px 10px",
              border: activeTags.has(tag) ? "1px solid var(--accent-primary)" : "1px solid rgba(124, 58, 237, 0.3)",
              borderRadius: "100px",
              color: activeTags.has(tag) ? "var(--accent-primary)" : "#a78bfa",
              background: activeTags.has(tag) ? "var(--accent-glow)" : "rgba(124, 58, 237, 0.08)",
              letterSpacing: "0.04em",
              cursor: "pointer", 
              transition: "all 0.15s",
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
            Live
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);
 
  function toggleTag(tag: string) {
    setActiveTags((prev) => {
      const next = new Set(prev);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });
  }
 
  function reset() {
    setQuery("");
    setActiveTags(new Set());
  }
 
  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      const matchesTags =
        activeTags.size === 0 || [...activeTags].every((t) => p.tags.includes(t));
      return matchesQuery && matchesTags;
    });
  }, [query, activeTags]);
 
  const hasFilters = query !== "" || activeTags.size > 0;
 
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
          marginBottom: "2rem",
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
 
      {/* ── Search bar ── */}
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          marginBottom: "1rem",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            padding: "0.6rem 1rem",
          }}
        >
          <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>⌕</span>
          <input
            type="text"
            placeholder="Search projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "var(--text-primary)",
            }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{
                background: "none",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
                fontSize: "1rem",
                lineHeight: 1,
                padding: 0,
              }}
            >
              ×
            </button>
          )}
        </div>
 
        {/* Toggle filters button */}
        <button
          onClick={() => setShowFilters((v) => !v)}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            padding: "0.6rem 1.1rem",
            borderRadius: "6px",
            border: showFilters ? "1px solid var(--accent-primary)" : "1px solid var(--border)",
            background: showFilters ? "var(--accent-glow)" : "var(--bg-surface)",
            color: showFilters ? "var(--accent-primary)" : "var(--text-muted)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            transition: "all 0.15s",
            whiteSpace: "nowrap",
          }}
        >
          {showFilters ? "∧" : "∨"} {showFilters ? "Hide filters" : "Show filters"}
          {activeTags.size > 0 && (
            <span
              style={{
                background: "var(--accent-primary)",
                color: "var(--bg-deep)",
                borderRadius: "100px",
                fontSize: "0.6rem",
                padding: "1px 6px",
                fontWeight: 700,
              }}
            >
              {activeTags.size}
            </span>
          )}
        </button>
      </div>
 
      {/* ── Tag filter panel ── */}
      {showFilters && (
        <div
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "1rem 1.25rem",
            marginBottom: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
              letterSpacing: "0.12em",
              margin: 0,
            }}
          >
            FILTER BY TAG
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  padding: "4px 12px",
                  borderRadius: "100px",
                  border: activeTags.has(tag)
                    ? "1px solid var(--accent-primary)"
                    : "1px solid var(--border)",
                  background: activeTags.has(tag) ? "var(--accent-glow)" : "transparent",
                  color: activeTags.has(tag) ? "var(--accent-primary)" : "var(--text-muted)",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  letterSpacing: "0.03em",
                }}
              >
                {tag}
              </button>
            ))}
          </div>
 
          {hasFilters && (
            <button
              onClick={reset}
              style={{
                alignSelf: "flex-end",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--accent-secondary, #a78bfa)",
                background: "none",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.04em",
                opacity: 0.8,
              }}
            >
              Reset filters
            </button>
          )}
        </div>
      )}
 
      {/* ── Results count ── */}
      {hasFilters && (
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            marginBottom: "1.25rem",
            letterSpacing: "0.04em",
          }}
        >
          {filtered.length === 0
            ? "No projects match."
            : `${filtered.length} project${filtered.length !== 1 ? "s" : ""} found`}
        </p>
      )}
 
      {/* ── Project grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filtered.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            activeTags={activeTags}
            onTagClick={toggleTag}
          />
        ))}
      </div>
    </section>
  );
}