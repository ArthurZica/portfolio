function TerminalWindow({ title, children, className = '' }) {
  return (
    <div className={`border border-accent/25 bg-bg-secondary ${className}`}>
      {/* Barra de título */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-accent/15 bg-black/30">
        <span className="w-2.5 h-2.5 rounded-full bg-accent/50"   aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent/30"   aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent/15"   aria-hidden="true" />
        <span className="ml-3 text-xs text-accent/40 tracking-wide">
          ~/portfolio/{title}
        </span>
      </div>
      {children}
    </div>
  )
}

export default TerminalWindow
