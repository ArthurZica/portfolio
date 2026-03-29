import { useMemo } from 'react'

const COLS = 22
const ROWS = 14
const WAVE_PERIOD = 5    // segundos por ciclo completo
const WAVE_SPEED  = 0.1  // segundos de delay por unidade de distância

function PhosphorGrid() {
  const dots = useMemo(() => {
    const cx = (COLS - 1) / 2
    const cy = (ROWS - 1) / 2
    const result = []
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const dist = Math.sqrt((c - cx) ** 2 + (r - cy) ** 2)
        result.push({ key: `${r}-${c}`, delay: dist * WAVE_SPEED })
      }
    }
    return result
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]"
      aria-hidden="true"
    >
      <div
        className="w-full h-full grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
      >
        {dots.map(({ key, delay }) => (
          <span
            key={key}
            className="phosphor-dot flex items-center justify-center text-accent text-base select-none"
            style={{ animationDelay: `${delay}s`, animationDuration: `${WAVE_PERIOD}s` }}
          >
            ·
          </span>
        ))}
      </div>
    </div>
  )
}

export default PhosphorGrid
