interface ExperienceItem {
  period: string;
  role: string;
  org: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "2025 – Presente",
    role: "Instrutor de Arduino e Programação",
    org: "Coletivo Força Motriz - UFRJ",
    description:
      "Professor no curso de Arduino e Programação do projeto de extensão universitária Amanaci.",
  },
  {
    period: "2024 – Presente",
    role: "Tutor Voluntário",
    org: "Projeto Salvaguarda",
    description:
      "Mentorias individuais e em grupo para estudantes em situação de vulnerabilidade social, incluindo planejamento de estudos, acompanhamento de desempenho e elaboração de relatórios.",
  },
  {
    period: "06/2025-12/2025",
    role: "Iniciação Científica",
    org: "Laboratório de Instrumentação Oceanográfica – Coppe | UFRJ",
    description:
      "Atuei no projeto do circuito eletrônico, design da placa de circuito impresso (PCB) e programação com CircuitPython de um dispositivo embarcado para captação e processamento de áudio de embarcações e animais marinhos.",
  },
  {
    period: "2023-2024",
    role: "Iniciação Científica",
    org: "Laboratório de Ondas e Correntes – Coppe | UFRJ",
    description:
      "Participei do desenvolvimento de um dispositivo estabilizador microcontrolado voltado para aplicações em manifolds submarinos e estacas torpedos, com microcontrolador ESP32.",
  },
  {
    period: "2021-2022",
    role: "Equipe de Competição Universitária",
    org: "Ícarus UFRJ de Fórmula SAE",
    description:
      "Contribuí para o desenvolvimento do sistema elétrico do carro de competição, incluindo montagem e testes do protótipo. Participei do projeto do sistema de aquisição de dados e modelei os componentes elétricos usando o SolidWorks.",
  },
  {
    period: "2013-2014",
    role: "Estágio Técnico em Eletrônica",
    org: "Laboratório de Ciências Radiológicas –  UERJ",
    description:
      "Realização de manutenção preventiva e corretiva em equipamentos eletrônicos, computadores e impressoras, incluindo diagnóstico de falhas, testes e suporte técnico.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-border">
      <p className="section-label fade-in">// experiência</p>
      <h2 className="section-title fade-in">Trajetória</h2>

      <div className="flex flex-col">
        {experiences.map((item) => (
          <div
            key={item.role + item.org}
            className="fade-in grid grid-cols-[180px_1fr] gap-x-8"
          >
            {/* Left: period */}
            <div className="py-7 text-right">
              <p className="font-mono text-[12px] text-muted leading-snug whitespace-pre-line">
                {item.period}
              </p>
            </div>

            {/* Right: content */}
            <div className="relative py-7 pl-8 border-l border-border">
              {/* Timeline dot */}
              <span className="absolute left-[-5px] top-9 w-[9px] h-[9px] rounded-full bg-accent border-2 border-bg" />

              <p className="font-mono text-base font-semibold text-fg mb-0.5">
                {item.role}
              </p>
              <p className="text-[13px] text-accent mb-2.5">{item.org}</p>
              <p className="text-[14px] text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
