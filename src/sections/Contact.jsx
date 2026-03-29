import { useState } from 'react'
import social from '../data/social'
import TerminalWindow from '../components/TerminalWindow'

const EMAIL = 'arthuraugustozica@gmail.com'

const linkedin = social.find((s) => s.icon === 'linkedin')

const contactLinks = [
  {
    label: 'E-mail',
    href: `mailto:${EMAIL}`,
    display: EMAIL,
    prompt: 'mailto',
  },
  {
    label: 'LinkedIn',
    href: linkedin.href,
    display: linkedin.display,
    prompt: 'open',
  },
]

const initialFields = { name: '', email: '', message: '' }

function validate({ name, email, message }) {
  const errors = {}
  if (!name.trim())
    errors.name = 'campo obrigatório.'
  if (!email.trim())
    errors.email = 'campo obrigatório.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = 'e-mail inválido.'
  if (!message.trim())
    errors.message = 'campo obrigatório.'
  else if (message.trim().length < 10)
    errors.message = 'mínimo 10 caracteres.'
  return errors
}

const inputBase = `w-full bg-bg-primary border text-sm text-terminal-text placeholder-terminal-muted/50
  outline-none transition-colors duration-200 px-3 py-2 font-mono
  focus:border-accent/60`

function Field({ id, label, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline gap-2">
        <span className="text-terminal-muted text-xs shrink-0">&gt;</span>
        <label htmlFor={id} className="text-xs text-accent/60 shrink-0 w-16">
          {label}:
        </label>
        {children}
      </div>
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-xs text-red-500/80 pl-[72px]"
        >
          [ERR] {error}
        </p>
      )}
    </div>
  )
}

function Contact() {
  const [fields, setFields]       = useState(initialFields)
  const [errors, setErrors]       = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange({ target: { name, value } }) {
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const found = validate(fields)
    if (Object.keys(found).length) { setErrors(found); return }
    setSubmitted(true)
  }

  function handleReset() {
    setFields(initialFields)
    setErrors({})
    setSubmitted(false)
  }

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
          <div className="p-6">
            {submitted ? (
              /* ── Sucesso ── */
              <div className="flex flex-col gap-4 py-4">
                <p className="text-xs text-terminal-muted">
                  <span className="text-accent-light">visitor@portfolio</span>
                  <span className="text-terminal-muted">:~$</span>
                  <span className="text-terminal-text/60"> ./send.sh</span>
                </p>
                <p className="text-accent-bright text-sm font-bold glow-sm">
                  [OK] Mensagem enviada com sucesso!
                </p>
                <p className="text-xs text-terminal-muted">
                  &gt; Obrigado pelo contato. Retorno em breve.
                </p>
                <button
                  onClick={handleReset}
                  className="self-start mt-2 px-4 py-2 border border-accent/25 text-xs
                    text-terminal-muted hover:border-accent/60 hover:text-accent-light
                    transition-colors duration-200"
                >
                  $ nova mensagem
                </button>
              </div>
            ) : (
              /* ── Formulário ── */
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

                <Field id="name" label="name" error={errors.name}>
                  <input
                    id="name" name="name" type="text" autoComplete="name"
                    placeholder="seu nome"
                    value={fields.name} onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`${inputBase} ${errors.name ? 'border-red-500/50' : 'border-accent/20'}`}
                  />
                </Field>

                <Field id="email" label="email" error={errors.email}>
                  <input
                    id="email" name="email" type="email" autoComplete="email"
                    placeholder="seu@email.com"
                    value={fields.email} onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`${inputBase} ${errors.email ? 'border-red-500/50' : 'border-accent/20'}`}
                  />
                </Field>

                <Field id="message" label="msg" error={errors.message}>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="olá, gostaria de conversar sobre..."
                    value={fields.message} onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`${inputBase} resize-none ${errors.message ? 'border-red-500/50' : 'border-accent/20'}`}
                  />
                </Field>

                <div className="pt-2 border-t border-accent/10">
                  <p className="text-xs text-terminal-muted mb-2">
                    <span className="text-accent-light">visitor@portfolio</span>
                    <span className="text-terminal-muted">:~$</span>
                    <span className="text-terminal-text/60"> ./send.sh</span>
                  </p>
                  <button
                    type="submit"
                    className="w-full py-2.5 border border-accent text-accent-light text-sm font-bold
                      transition-all duration-200 hover:bg-accent hover:text-bg-primary"
                  >
                    [[ ENVIAR MENSAGEM ]]
                  </button>
                </div>

              </form>
            )}
          </div>
        </TerminalWindow>

        {/* Links diretos */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          {contactLinks.map(({ label, href, display, prompt }) => (
            <a
              key={label}
              href={href}
              target={label !== 'E-mail' ? '_blank' : undefined}
              rel={label !== 'E-mail' ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 flex-1 px-4 py-3 border border-accent/15 bg-bg-secondary
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

      </div>
    </section>
  )
}

export default Contact
