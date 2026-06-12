import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-border">
      <p className="section-label fade-in">// stack</p>
      <h2 className="section-title fade-in">Tecnologias</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="fade-in bg-surface border border-border rounded-lg px-6 py-5"
          >
            <p className="font-mono text-[11px] text-accent tracking-widest uppercase mb-3">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[12px] text-fg bg-surface2 border border-border2 rounded px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
