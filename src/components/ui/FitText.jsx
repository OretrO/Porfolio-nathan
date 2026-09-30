import { useLayoutEffect, useRef } from 'react'

/*
 * Texte sur une ligne, dont la taille s'ajuste pour occuper exactement
 * la largeur de son parent (effet « affiche »). Recalculé au redimensionnement
 * et quand les polices finissent de charger.
 */
export default function FitText({ className = '', max = Infinity, children, ...rest }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const element = ref.current
    const parent = element?.parentElement
    if (!element || !parent) return

    let lastWidth = -1
    let frame = 0

    const fit = (force = false) => {
      const style = getComputedStyle(parent)
      const available = parent.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight)
      if (!force && available === lastWidth) return
      lastWidth = available
      element.style.fontSize = '100px'
      const natural = element.getBoundingClientRect().width
      if (natural > 0) {
        const size = Math.min(max, (available / natural) * 100 * 0.995)
        element.style.fontSize = `${Math.floor(size * 100) / 100}px`
      }
    }

    fit(true)
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => fit())
    })
    observer.observe(parent)

    const refit = () => fit(true)
    document.fonts?.addEventListener('loadingdone', refit)
    document.fonts?.ready.then(refit)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      document.fonts?.removeEventListener('loadingdone', refit)
    }
  }, [children, max])

  return (
    <span ref={ref} className={`fit-text ${className}`} {...rest}>
      {children}
    </span>
  )
}
