import { useState, useEffect } from 'react'

function Typewriter({ text, speed = 45, delay = 0, started = true, className = '' }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    if (!started) return
    setDisplayed('')
    let i = 0
    let intervalId
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) clearInterval(intervalId)
      }, speed)
    }, delay)
    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [started, text, speed, delay])

  return <span className={className}>{displayed}</span>
}

export default Typewriter
