import about from '../data/about'
import TerminalWindow from '../components/TerminalWindow'

function About() {
  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-4xl">

        {/* Cabeçalho */}
        <div className="mb-6">
          <p className="text-xs text-terminal-muted">
            <span className="text-accent-light">visitor@portfolio</span>
            <span className="text-terminal-muted">:~$</span>
            <span className="text-terminal-text/60"> cat about.txt</span>
          </p>
        </div>

        <TerminalWindow title="about.txt">
          <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12">

            {/* Avatar */}
            <div className="shrink-0 self-start">
              {about.photo ? (
                <img
                  src={about.photo}
                  alt={about.photoAlt}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover border border-accent/30"
                />
              ) : (
                <div
                  className="w-32 h-32 md:w-40 md:h-40 border border-accent/30 bg-accent/5
                    flex items-center justify-center text-5xl font-bold text-accent/40 select-none"
                  aria-label={about.photoAlt}
                >
                  {about.name.charAt(0)}
                </div>
              )}
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col gap-5">
              {/* Metadados */}
              <div className="flex flex-col gap-1.5 text-sm border-l-2 border-accent/20 pl-4">
                <p>
                  <span className="text-terminal-muted">&gt;</span>
                  <span className="text-accent/50"> name:</span>
                  <span className="text-accent-light"> {about.name}</span>
                </p>
                <p>
                  <span className="text-terminal-muted">&gt;</span>
                  <span className="text-accent/50"> role:</span>
                  <span className="text-terminal-text/80"> {about.role}</span>
                </p>
              </div>

              {/* Separador */}
              <p className="text-terminal-muted text-xs">{'/* bio */'}</p>

              {/* Parágrafos */}
              <div className="flex flex-col gap-3">
                {about.paragraphs.map((text, i) => (
                  <p key={i} className="text-sm text-terminal-text/70 leading-relaxed">
                    <span className="text-terminal-muted mr-2">{String(i + 1).padStart(2, '0')}.</span>
                    {text}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </TerminalWindow>

      </div>
    </section>
  )
}

export default About
