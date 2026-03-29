import { useState, useEffect } from 'react'

const links = [
  { label: 'inicio',   href: '#hero'     },
  { label: 'sobre',    href: '#sobre'    },
  { label: 'projetos', href: '#projetos' },
  { label: 'skills',   href: '#skills'   },
  { label: 'contato',  href: '#contato'  },
]

function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b font-mono
        ${scrolled
          ? 'bg-bg-primary/95 border-accent/30 shadow-lg shadow-black/60'
          : 'bg-bg-primary/70 border-accent/10'
        }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="text-sm font-bold text-accent-light hover:text-accent-bright
            transition-colors duration-200 glow-sm"
        >
          <span className="text-terminal-muted">[</span>
          ~/portfolio
          <span className="text-terminal-muted">]</span>
          <span className="text-accent/60">$</span>
        </a>

        {/* Links — desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="group flex items-center gap-1 text-xs text-terminal-muted
                  hover:text-accent-light transition-colors duration-200"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-accent">
                  &gt;
                </span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden text-accent/60 hover:text-accent-light transition-colors text-xs font-bold"
        >
          {menuOpen ? '[ X ]' : '[ ≡ ]'}
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? 'max-h-64 border-t border-accent/15' : 'max-h-0'}`}
      >
        <ul className="px-6 py-4 flex flex-col gap-3 bg-bg-primary/98">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                className="flex items-center gap-2 text-xs text-terminal-muted
                  hover:text-accent-light transition-colors duration-200"
              >
                <span className="text-accent/50">&gt;</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
