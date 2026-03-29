import social from '../data/social'
import Typewriter from '../components/Typewriter'

const icons = {
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-14 overflow-hidden"
    >
      {/* Glow de fundo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(74,222,128,0.05) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 w-full max-w-2xl flex flex-col gap-5">

        {/* Prompt de comando */}
        <p className="text-xs text-terminal-muted">
          <span className="text-accent-light">visitor@portfolio</span>
          <span className="text-terminal-muted">:~$</span>
          <Typewriter text=" whoami" speed={60} delay={200} className="text-terminal-text/60" />
        </p>

        {/* Nome com cursor */}
        <h1 className="text-5xl md:text-7xl font-bold text-accent-bright glow leading-none tracking-tight">
          Arthur Zica<span className="cursor-blink" aria-hidden="true" />
        </h1>

        {/* Output do terminal */}
        <div className="flex flex-col gap-1.5 text-sm border-l-2 border-accent/20 pl-4">
          <p>
            <span className="text-terminal-muted">&gt;</span>
            <span className="text-accent/50"> role:</span>
            <span className="text-accent-light"> Full Stack Developer</span>
          </p>
          <p>
            <span className="text-terminal-muted">&gt;</span>
            <span className="text-accent/50"> location:</span>
            <span className="text-terminal-text/70"> Brasil</span>
          </p>
          <p>
            <span className="text-terminal-muted">&gt;</span>
            <span className="text-accent/50"> status:</span>
            <span className="text-accent-bright"> available_for_hire</span>
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-xs text-terminal-muted">
            <span className="text-accent-light">visitor@portfolio</span>
            <span className="text-terminal-muted">:~$</span>
            <span className="text-terminal-text/60"> ./ver-projetos.sh</span>
          </p>
          <a
            href="#projetos"
            className="self-start px-6 py-2.5 border border-accent text-accent-light text-sm font-bold
              transition-all duration-200 hover:bg-accent hover:text-bg-primary"
          >
            [[ VER PROJETOS ]]
          </a>
        </div>

        {/* Links sociais */}
        <div className="flex flex-wrap gap-3 mt-1">
          {social.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center gap-2 px-4 py-2 border border-accent/25
                text-xs text-terminal-muted hover:border-accent hover:text-accent-light
                transition-all duration-200"
            >
              {icons[icon]}
              [ {label} ]
            </a>
          ))}
        </div>

      </div>

      {/* Seta scroll */}
      <a
        href="#sobre"
        aria-label="Ir para a seção Sobre"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent/20
          hover:text-accent/60 transition-colors duration-300 animate-bounce text-xs"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  )
}

export default Hero
