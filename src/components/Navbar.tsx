const NAV_LINKS = [
  { label: 'sobre',      href: '#about'      },
  { label: 'stack',      href: '#skills'     },
  { label: 'projetos',   href: '#projects'   },
  { label: 'experiência',href: '#experience' },
  { label: 'contato',    href: '#contact'    },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-[60px] bg-bg/85 backdrop-blur-md border-b border-border">
      <span className="font-mono text-[13px] text-accent tracking-wide">
        alan@portfolio:~$
      </span>

      <ul className="flex gap-8">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="font-mono text-[12px] text-muted uppercase tracking-widest hover:text-fg transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
