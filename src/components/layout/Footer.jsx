import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../../i18n/context'
import { person } from '../../data/profile'
import { prefersReducedMotion } from '../../utils/viewTransition'
import Arrow from '../ui/Arrow'
import './Footer.css'

/* Les terrils jumeaux du 11/19 et un chevalement, en trait. Les bases reposent sur la ligne d'horizon. */
function Horizon({ drawn }) {
  return (
    <svg className="horizon-drawing" data-drawn={drawn} viewBox="0 0 480 104" aria-hidden="true" focusable="false">
      <path pathLength="1" d="M40 104 L143 25.4 Q150 17 157 25.4 L260 104" />
      <path pathLength="1" d="M204.6 61.7 L259 19.4 Q266 11 273 19.4 L382 104" />
      <path pathLength="1" className="horizon-gully" d="M149 32 L118 104 M152 36 L178 104 M268 27 L300 104 M271 34 L336 104" />
      <path pathLength="1" d="M418 104 L426 52 M442 104 L434 52 M422 52 H438 M420.5 88 L436.8 70 M439.5 88 L423.2 70 M434 57 L466 104" />
      <circle pathLength="1" cx="430" cy="44" r="7.5" />
    </svg>
  )
}

export default function Footer() {
  const { t, locale } = useI18n()
  const horizonRef = useRef(null)
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    const element = horizonRef.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true)
          observer.disconnect()
        }
      },
      { threshold: 0.6 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const updated = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(
    new Date(__BUILD_DATE__),
  )

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    document.querySelector('.brand')?.focus({ preventScroll: true })
  }

  return (
    <footer className="site-footer">
      <figure className="horizon" ref={horizonRef}>
        <Horizon drawn={drawn} />
        <figcaption className="mono">{t('footer.horizon')}</figcaption>
      </figure>

      <div className="footer-bar mono">
        <p>
          © {new Date().getFullYear()} {person.name}
        </p>
        <p className="footer-colophon">
          {t('footer.colophon')} {t('footer.updated', { date: updated })}
        </p>
        <button type="button" className="footer-top" onClick={backToTop}>
          {t('footer.top')} <Arrow dir="up" />
        </button>
      </div>
    </footer>
  )
}
