import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-border">
      <div className="fade-in bg-surface border border-border rounded-xl px-12 py-14 text-center">
        <h2 className="font-mono text-[32px] font-bold mb-3">
          Vamos conversar?
        </h2>
        <p className="text-muted max-w-md mx-auto leading-relaxed mb-8">
          Estou aberto a oportunidades de trabalho, colaborações em projetos ou
          simplesmente uma boa troca de ideias sobre tecnologia.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <a href="mailto:alandeogoncalves@gmail.com" className="btn-primary">
            <Mail size={16} />
            Enviar e-mail
          </a>
          <a
            href="https://github.com/Alan-oliveir"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
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
        </div>
      </div>
    </section>
  );
}
