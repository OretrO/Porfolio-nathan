import { useEffect, useState } from 'react'

const DISPLAY_FONT = '800 100px "Archivo Variable"'

/*
 * Passe à true quand la police de titrage est chargée (ou après un délai
 * de secours), pour ne lancer l'animation d'entrée qu'une fois le texte à sa taille finale.
 */
export default function useFontsReady(timeoutMs = 1500) {
  const [ready, setReady] = useState(() => document.fonts?.check?.(DISPLAY_FONT) ?? true)

  useEffect(() => {
    if (ready) return
    let cancelled = false
    const done = () => {
      if (!cancelled) setReady(true)
    }
    const timer = setTimeout(done, timeoutMs)
    document.fonts.load(DISPLAY_FONT).then(done, done)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [ready, timeoutMs])

  return ready
}
