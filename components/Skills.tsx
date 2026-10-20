"use client";

import { useMemo, useState } from "react";

type Skill = { name: string; projects?: string[] };
type Category = { title: string; skills: Skill[] };

const categories: Category[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", 
            projects: [
                        "Computer Vision Object Recognition", 
                        "Geospatial Dashboard Chatbot", 
                        "Audio Enhancement API", 
                        "P2P Network Simulation"
            ] 
    },
      { name: "Java", 
            projects: [
                        "OmniArchive", 
                        "Reading Huddle", 
                        "Geospatial Dashboard Chatbot"
            ] 
    },
      { name: "JavaScript", 
            projects: [
                        "OmniArchive", 
                        "Reading Huddle",
                        "Geospatial Dashboard Chatbot",
        
            ] 
    },
      { name: "TypeScript", 
            projects: [
                "OmniArchive", 
                "Reading Huddle",
                "Geospatial Dashboard Chatbot",
            ] 
    },
      { name: "Go" },
      { name: "SQL" },
      { name: "C++", 
            projects: [
                "Simple Animal Guessing Game",
                "Animal Registry System",
            ]
      },
      { name: "Bash" },
      { name: "Rust" },
    ],
  },
  {
    title: "Back Systems",
    skills: [
      { name: "REST APIs",
            projects: [
                "Audio Enhancement API",
            ]
       },
      { name: "Distributed Systems",
            projects: [
                "P2P Network Simulation",
            ]
       },
      { name: "TCP/IP Networking",
            projects: [
            "P2P Network Simulation",
            ]
       },
      { name: "Linux/UNIX" },
      { name: "Peer-to-Peer Networking",
            projects: [
                "P2P Network Simulation",
            ]
       },
      { name: "Embedded Linux",
            projects: [
                "Computer Vision Object Recognition",
            ]
       },
    ],
  },
  {
    title: "Cloud/Infrastructure",
    skills: [
      { name: "AWS", projects: ["Geospatial Dashboard Chatbot"] },
      { name: "Docker", projects: ["OmniArchive"] },
      { name: "CI/CD" },
      { name: "Jenkins" },
      { name: "IAM" },
      { name: "PostgreSQL", projects: ["Reading Huddle"] },
      { name: "Jira" },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      { name: "AWS Bedrock", projects: ["Geospatial Dashboard Chatbot"] },
      { name: "AWS SageMaker", projects: ["Geospatial Dashboard Chatbot"] },
      { name: "Vision-Language Models (VLMs)", projects: ["Geospatial Dashboard Chatbot"] },
      { name: "Convolutional Neural Networks (CNNs)", projects: ["Convolutional Neural Networks"] },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Debugging" },
      { name: "Performance Profiling" },
      { name: "JUnit" },
      { name: "Structured Logging" },
      { name: "Incident Response" },
    ],
  },
];

export default function Skills() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const q = query.trim().toLowerCase();

  const visible = useMemo(() => {
    return categories
      .map((cat) => {
        // Matching the category name shows the whole category
        if (!q || cat.title.toLowerCase().includes(q)) return cat;
        return {
          ...cat,
          skills: cat.skills.filter(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              (s.projects ?? []).some((p) => p.toLowerCase().includes(q))
          ),
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [q]);

  const total = visible.reduce((n, c) => n + c.skills.length, 0);

  return (
    <section
      id="skills"
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "6rem 2rem",
        scrollMarginTop: "4.5rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.85rem",
          color: "var(--accent-primary)",
          letterSpacing: "0.1em",
          marginBottom: "0.75rem",
        }}
      >
        {"Skills and Tools"}
      </p>

      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          letterSpacing: "-0.02em",
          marginBottom: "2rem",
        }}
      >
        Skills &amp; Tools
      </h2>

      {/* Search */}
      <div style={{ marginBottom: "0.75rem", maxWidth: "520px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search skills, categories, or projects..."
          aria-label="Search skills"
          style={{
            width: "100%",
            boxSizing: "border-box",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            padding: "0.75rem 1rem",
            background: "transparent",
            color: "inherit",
            border: `1px solid ${focused ? "var(--accent-primary)" : "var(--border)"}`,
            borderRadius: "4px",
            outline: "none",
            transition: "border-color 0.2s",
          }}
        />
      </div>

      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "var(--text-muted)",
          marginBottom: "2rem",
        }}
      >
        {total} {total === 1 ? "skill" : "skills"} shown
      </p>

      {/* Category cards */}
      {visible.length === 0 ? (
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.9rem",
            color: "var(--text-muted)",
          }}
        >
          {`No skills match "${query}".`}
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {visible.map((cat) => (
            <div
              key={cat.title}
              style={{
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "1.5rem",
                background: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--accent-primary)",
                  marginBottom: "1.25rem",
                }}
              >
                {cat.title}
              </h3>

              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                }}
              >
                {cat.skills.map((skill) => (
                  <li key={skill.name}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.85rem",
                      }}
                    >
                      {skill.name}
                    </span>

                    {skill.projects && skill.projects.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.4rem",
                          marginTop: "0.4rem",
                        }}
                      >
                        {skill.projects.map((p) => (
                          <a
                            key={p}
                            href="#projects"
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.7rem",
                              color: "var(--text-muted)",
                              textDecoration: "none",
                              border: "1px solid var(--border)",
                              borderRadius: "4px",
                              padding: "2px 8px",
                              transition: "color 0.2s, background 0.2s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "var(--accent-primary)";
                              e.currentTarget.style.background = "var(--accent-glow)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "var(--text-muted)";
                              e.currentTarget.style.background = "transparent";
                            }}
                          >
                            {p}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}