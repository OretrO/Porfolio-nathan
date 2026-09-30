import { useEffect, useState } from 'react'

/* Masque l'en-tête quand on descend, le réaffiche dès qu'on remonte. */
export default function useHideOnScroll({ enabled = true, offset = 160, resetKey } = {}) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    setHidden(false)
    if (!enabled) return
    let lastY = window.scrollY
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const y = window.scrollY
        if (Math.abs(y - lastY) < 8) return
        setHidden(y > lastY && y > offset)
        lastY = y
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [enabled, offset, resetKey])

  return hidden
}
