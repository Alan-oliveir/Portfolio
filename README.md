# Portfolio — Alan Gonçalves

Site de portfólio pessoal desenvolvido com React, TypeScript, Vite e Tailwind CSS.

🔗 **[Portfólio - Alan Gonçalves](https://portfolio-alan-oliveirs-projects.vercel.app/)**

---

## Tecnologias

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)

## Estrutura do projeto

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   ├── projects.ts
│   └── skills.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/Alan-oliveir/Portfolio.git
cd Portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## Como atualizar o conteúdo

A maior parte do conteúdo está isolada nos arquivos de dados — sem precisar mexer nos componentes:

- **Projetos** → edite `src/data/projects.ts`
- **Tecnologias** → edite `src/data/skills.ts`
- **Experiência** → edite o array `experiences` em `src/components/Experience.tsx`

## Build para produção

```bash
npm run build
```

Os arquivos gerados ficam em `dist/` e podem ser publicados em qualquer serviço de hospedagem estática (Vercel, Netlify, GitHub Pages).

## Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como referência e adaptá-lo ao seu próprio portfólio.
