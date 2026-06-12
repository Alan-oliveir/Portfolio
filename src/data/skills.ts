export interface SkillGroup {
  label: string;
  tags: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend",
    tags: ["Python", "Django", "Java", "Spring Boot", "Rust"],
  },
  {
    label: "Frontend",
    tags: ["React", "TypeScript", "Tailwind", "HTML/CSS"],
  },
  {
    label: "Desktop & Systems",
    tags: ["Tauri", "SQLite", "CustomTkinter", "REST APIs"],
  },
  {
    label: "DevOps & Cloud",
    tags: ["Docker", "GitHub Actions", "AWS", "Oracle Cloud"],
  },
  {
    label: "IA & Data",
    tags: ["PyTorch", "Computer Vision", "LLMs", "Machine Learning"],
  },
  {
    label: "Banco de Dados",
    tags: ["PostgreSQL", "SQLite", "Oracle DB"],
  },
  {
    label: "Engenharia & Hardware",
    tags: ["Arduino/Esp32", "C/C++", "Embedded Systems", "Automation", "IoT"],
  },
];
