import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useI18n } from '../../i18n/context'
import { useRouter } from '../../router/context'
import { SECTIONS } from '../../router/routes'
import { person } from '../../data/profile'
import useActiveSection from '../../hooks/useActiveSection'
import useHideOnScroll from '../../hooks/useHideOnScroll'
import Link from '../ui/Link'
import LangSwitch from '../ui/LangSwitch'
import ThemeToggle from '../ui/ThemeToggle'
import './Header.css'

const NAV_KEYS = { projets: 'nav.projects', profil: 'nav.about', contact: 'nav.contact' }

function MobileMenu({ onClose }) {
  const { t } = useI18n()
  const panelRef = useRef(null)

  useEffect(() => {
    const panel = panelRef.current
    const opener = document.activeElement
    panel.querySelector('a, button')?.focus()
    document.documentElement.classList.add('is-locked')

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return
      // garde le focus dans le menu
      const focusable = [...panel.querySelectorAll('a, button')]
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.documentElement.classList.remove('is-locked')
      opener?.focus?.({ preventScroll: true })
    }
  }, [onClose])

  return createPortal(
    <div className="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label={t('nav.menu')} ref={panelRef}>
      <div className="mobile-menu-top">
        <span className="brand">{person.name}</span>
        <button type="button" className="menu-button" onClick={onClose}>
          {t('nav.close')}
        </button>
      </div>
      <nav aria-label={t('nav.label')}>
        <ol className="mobile-menu-links">
          {SECTIONS.map((id, i) => (
            <li key={id}>
              <Link to={`/${id}`} onClick={onClose}>
                <span className="nav-num">0{i + 1}</span>
                {t(NAV_KEYS[id])}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <div className="mobile-menu-foot mono">
        <a href={`mailto:${person.email}`}>{person.email}</a>
        <div className="mobile-menu-tools">
          <LangSwitch />
          <ThemeToggle withLabel />
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default function Header() {
  const { t } = useI18n()
  const { route } = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const onHome = route.name === 'home'
  const active = useActiveSection(onHome ? SECTIONS : [])
  const hidden = useHideOnScroll({ enabled: !menuOpen, resetKey: `${route.name}:${route.slug}` })
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <header className="site-header" data-hidden={hidden}>
      <Link to="/" className="brand">
        {person.name}
      </Link>

      <nav className="site-nav" aria-label={t('nav.label')}>
        <ol>
          {SECTIONS.map((id, i) => (
            <li key={id}>
              <Link to={`/${id}`} aria-current={active === id ? 'location' : undefined}>
                <span className="nav-num">0{i + 1}</span>
                {t(NAV_KEYS[id])}
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      <div className="header-tools">
        <LangSwitch />
        <ThemeToggle />
        <button
          type="button"
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
        >
          {t('nav.menu')}
        </button>
      </div>

      {menuOpen && <MobileMenu onClose={closeMenu} />}
    </header>
  )
}
