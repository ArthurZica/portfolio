import TerminalWindow from './TerminalWindow'

function ProjectCard({ title, description, techs, github, demo, image }) {
  const slug = title.toLowerCase().replace(/\s+/g, '-')

  return (
    <article className="group transition-all duration-300 hover:-translate-y-0.5">
      <TerminalWindow title={`${slug}/`}>

        {/* Imagem / placeholder */}
        <div className="relative h-36 overflow-hidden bg-bg-primary border-b border-accent/15">
          {image ? (
            <img
              src={image}
              alt={`Screenshot do projeto ${title}`}
              className="w-full h-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center
                text-5xl font-bold text-accent/10 select-none tracking-tighter"
              aria-hidden="true"
            >
              {title.charAt(0)}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute bottom-2 left-3 text-xs text-accent/40">{slug}/</span>
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col flex-1 gap-4 p-5">
          <h3 data-text={title} className="glitch-title text-sm font-bold text-accent-light glow-sm">{title}</h3>

          <p className="text-xs text-terminal-text/60 leading-relaxed flex-1">
            <span className="text-terminal-muted">&gt; </span>
            {description}
          </p>

          {/* Techs */}
          <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologias utilizadas">
            {techs.map((tech) => (
              <li
                key={tech}
                className="px-2 py-1 text-xs text-accent/70 border border-accent/20
                  hover:border-accent/50 hover:text-accent-light transition-colors duration-200"
              >
                [{tech}]
              </li>
            ))}
          </ul>

          {/* Links */}
          <div className="flex items-center gap-4 pt-3 border-t border-accent/10 text-xs">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-terminal-muted hover:text-accent-light transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              $ git clone
            </a>

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-terminal-muted hover:text-accent-light transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                $ open demo
              </a>
            )}
          </div>
        </div>

      </TerminalWindow>
    </article>
  )
}

export default ProjectCard
