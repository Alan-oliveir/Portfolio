import { Github, Linkedin, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center max-w-5xl mx-auto px-8"
    >
      <div className="w-full">
        {/* Status badge */}
        <p className="flex items-center gap-2 font-mono text-[12px] text-green tracking-wide mb-5">
          <span className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_#10B981] animate-pulse2" />
          Disponível para oportunidades
        </p>

        {/* Name with blinking cursor */}
        <h1 className="font-mono text-[clamp(36px,6vw,64px)] font-bold leading-none mb-2">
          Alan Gonçalves
          <span className="inline-block w-[3px] h-[0.85em] bg-accent ml-1 align-middle animate-blink" />
        </h1>

        <p className="font-mono text-base text-accent mb-7">
          Electronic & Computer Engineering Student &amp; Full Stack Developer
        </p>

        <p className="text-[17px] text-muted max-w-[560px] leading-relaxed mb-10">
          Estudante de Engenharia Eletrônica e de Computação com foco em
          desenvolvimento de software. Desenvolvo aplicações web, desktop e
          projetos envolvendo inteligência artificial, utilizando tecnologias
          como Python, Java, React, Rust e ferramentas modernas de cloud e
          automação. Minha experiência inclui projetos acadêmicos, pesquisa,
          iniciativas voluntárias e aplicações desenvolvidas em equipe e de
          forma independente.
        </p>

        {/* CTA links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/Alan-oliveir"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alan-ogoncalves"
            className="btn-ghost"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="/curriculo.pdf"
            download="Alan_Goncalves_Curriculo.pdf"
            className="btn-ghost"
          >
            <FileText size={16} />
            Currículo
          </a>
        </div>
      </div>
    </section>
  );
}
