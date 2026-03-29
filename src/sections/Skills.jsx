import skills from '../data/skills'

function SkillGroup({ category, items }) {
  return (
    <div className="flex flex-col gap-4 border border-accent/20 bg-bg-secondary p-5">
      {/* Header */}
      <p className="text-xs text-terminal-muted">
        <span className="text-accent/50">{'// '}</span>
        <span className="text-accent-light">{category.toLowerCase()}</span>
      </p>

      {/* Badges */}
      <ul className="flex flex-wrap gap-2">
        {items.map(({ name }) => (
          <li key={name}>
            <span
              className="inline-block px-2.5 py-1 text-xs border border-accent/50 text-accent-light
                transition-colors duration-200 hover:border-accent hover:text-accent-light"
            >
              [{name}]
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-5xl">

        {/* Cabeçalho */}
        <div className="mb-6">
          <p className="text-xs text-terminal-muted">
            <span className="text-accent-light">visitor@portfolio</span>
            <span className="text-terminal-muted">:~$</span>
            <span className="text-terminal-text/60"> cat skills.json</span>
          </p>
        </div>

        {/* Container JSON-like */}
        <div className="border border-accent/20 bg-bg-secondary">
          {/* Barra de título */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-accent/15 bg-bg-primary">
            <span className="w-2.5 h-2.5 rounded-full bg-accent/50" aria-hidden="true" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/30" aria-hidden="true" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/15" aria-hidden="true" />
            <span className="ml-3 text-xs text-accent/40 tracking-wide">~/portfolio/skills.json</span>
          </div>

          <div className="p-6">
            {/* Chave abertura */}
            <p className="text-xs text-terminal-text/40 mb-4">{'{'}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-4">
              {skills.map((group) => (
                <SkillGroup key={group.category} {...group} />
              ))}
            </div>

            {/* Chave fechamento */}
            <p className="text-xs text-terminal-text/40 mt-4">{'}'}</p>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Skills
