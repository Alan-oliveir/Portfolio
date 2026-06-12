export interface Project {
  title: string;
  summary: string;
  problem: string;
  techs: string[];

  github?: string;
  demo?: string;
  docs?: string;
  release?: string;
}

export const projects: Project[] = [
  {
    title: "Playlite",

    summary: "Aplicação desktop para gerenciamento de bibliotecas de jogos.",

    problem:
      "Centralizar informações de jogos, assinaturas e metadados vindos de múltiplas fontes em uma única interface.",

    techs: ["Rust", "Tauri", "React", "TypeScript", "SQLite", "GitHub Actions"],

    github: "https://github.com/playlite-app/playlite",
    release: "https://github.com/playlite-app/playlite/releases",
    docs: "https://playlite.vercel.app/en/",
  },
  {
    title: "FinBoostPlus",

    summary:
      "Aplicação full-stack para planejamento e controle financeiro de grupos e divisão de despesas.",

    problem:
      "Auxiliar usuários no acompanhamento de despesas, metas e organização financeira de cada membro do grupo.",

    techs: ["React", "Spring Boot", "Docker", "Oracle Cloud"],

    github: "https://github.com/Finboostplus/finboostplus-app",
    demo: "https://finboostplus-6iccj8d8b-alan-oliveirs-projects.vercel.app",
    docs: "https://finboostplus.github.io/finboostplus-app/",
  },
  {
    title: "PhotoSpice",

    summary:
      "Conversão automática de imagens de circuitos eletrônicos em netlists SPICE, simulação e apresentação de resultados.",

    problem:
      "Reduzir o trabalho manual de modelagem e simulação de circuitos eletrônicos.",

    techs: ["Python", "PyTorch", "OpenCV", "Computer Vision"],

    github: "https://github.com/Alan-oliveir/PhotoSpice",
    demo: "https://www.youtube.com/watch?v=VwTYSiOtutM",
  },
  {
    title: "Sentiment Radar",

    summary:
      "Aplicação web interativa para análise de sentimentos em dados de redes sociais.",

    problem:
      "Fornecer insights visuais e interativos sobre o sentimento do público em relação a produtos, serviços ou marcas nas redes sociais.",

    techs: ["Python", "NLP", "Streamlit", "Pandas"],

    github: "https://github.com/Alan-oliveir/Sentiment_Radar_APP",
    demo: "https://sentimentradarapp-6rusrx3rigukjgvsygesud.streamlit.app/",
    docs: "https://alan-oliveir.github.io/Sentiment_Radar_APP/",
  },
  {
    title: "Playnite Enhanced Grid View Extend Theme",

    summary:
      "Tema customizado para o Playnite que aprimora a visualização em grade, adicionando mais dados e informações de outras extensões para os jogos.",

    problem:
      "Melhorar a experiência de navegação e descoberta de jogos na interface do Playnite, fornecendo mais informações e contexto sobre cada título diretamente na visualização em grade.",

    techs: ["C#", "XAML", "Playnite SDK"],

    github: "https://github.com/Alan-oliveir/Playnite_E_Grid_View_Extend_Theme",
    release:
      "https://github.com/Alan-oliveir/Playnite_E_Grid_View_Extend_Theme/releases",
  },
];
