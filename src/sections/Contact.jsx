import contactLinks from '../data/contact'
import TerminalWindow from '../components/TerminalWindow'

function Contact() {
  return (
    <section
      id="contato"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-xl">

        {/* Cabeçalho */}
        <div className="mb-6">
          <p className="text-xs text-terminal-muted">
            <span className="text-accent-light">visitor@portfolio</span>
            <span className="text-terminal-muted">:~$</span>
            <span className="text-terminal-text/60"> ./contact.sh</span>
          </p>
          <p className="text-xs text-terminal-muted mt-1">
            <span className="text-accent/40">// aberto a oportunidades, freelas e parcerias</span>
          </p>
        </div>

        <TerminalWindow title="contact.sh">
          <div className="p-6 flex flex-col gap-3">
            {contactLinks.map(({ label, href, display, prompt }) => (
              <a
                key={label}
                href={href}
                target={label !== 'E-mail' ? '_blank' : undefined}
                rel={label !== 'E-mail' ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 px-4 py-3 border border-accent/15 bg-bg-primary
                  text-terminal-muted hover:border-accent/40 hover:text-accent-light
                  transition-all duration-200"
              >
                <span className="text-accent/40 text-xs shrink-0">$ {prompt}</span>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs text-terminal-muted/60">{label}</span>
                  <span className="text-xs text-accent/60 truncate">{display}</span>
                </div>
              </a>
            ))}
          </div>
        </TerminalWindow>

      </div>
    </section>
  )
}

export default Contact
