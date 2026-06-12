import { Github, Globe, BookOpen, Download } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-border">
      <p className="section-label fade-in">// projetos</p>
      <h2 className="section-title fade-in">Projetos em Destaque</h2>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className="fade-in group relative bg-surface border border-border rounded-xl p-7 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:border-border2"
          >
            {/* Accent bar */}
            <span className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

            {/* Title */}
            <h3 className="font-mono text-lg font-semibold text-fg mb-5">
              {project.title}
            </h3>

            {/* WHAT IS */}
            <div className="mb-4">
              <p className="font-mono text-[11px] tracking-wider text-accent uppercase mb-1">
                O que é
              </p>
              <p className="text-[14px] text-muted leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* PROBLEM */}
            <div className="mb-4">
              <p className="font-mono text-[11px] tracking-wider text-accent uppercase mb-1">
                Problema Resolvido
              </p>
              <p className="text-[14px] text-muted leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* STACK */}
            <div className="mb-5">
              <p className="font-mono text-[11px] tracking-wider text-accent uppercase mb-2">
                Stack
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] text-accent bg-accent-glow border border-accent/20 rounded px-2 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* LINKS */}
            <div>
              <p className="font-mono text-[11px] tracking-wider text-accent uppercase mb-2">
                Links
              </p>

              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                  >
                    <Globe size={14} />
                    Demo
                  </a>
                )}

                {project.docs && (
                  <a
                    href={project.docs}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                  >
                    <BookOpen size={14} />
                    Docs
                  </a>
                )}

                {project.release && (
                  <a
                    href={project.release}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                  >
                    <Download size={14} />
                    Release
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
