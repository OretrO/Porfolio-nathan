import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../translations'

export default function Navbar({ current = 'home', onNavigate, theme = 'dark', onToggleTheme }) {
  const { language, toggleLanguage } = useLanguage()
  const t = (key) => getTranslation(language, key)

  return (
    <header className="navbar">
      <div className="brand" onClick={() => onNavigate('home')}>
        Mon portfolio
      </div>
      <nav>
        <ul className="nav-list">
          <li className={current === 'home' ? 'nav-item active' : 'nav-item'} onClick={() => onNavigate('home')}>
            {t('nav.home')}
          </li>
          <li className={current === 'projects' ? 'nav-item active' : 'nav-item'} onClick={() => onNavigate('projects')}>
            {t('nav.projects')}
          </li>
          <li className={current === 'about' ? 'nav-item active' : 'nav-item'} onClick={() => onNavigate('about')}>
            {t('nav.about')}
          </li>
          <li className={current === 'contact' ? 'nav-item active' : 'nav-item'} onClick={() => onNavigate('contact')}>
            {t('nav.contact')}
          </li>
        </ul>
      </nav>

      <div className="nav-actions">
        <button className="language-toggle" onClick={toggleLanguage} aria-label="Changer la langue">
          {language === 'fr' ? 'EN' : 'FR'}
        </button>
        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Basculer le thème">
          {theme === 'dark' ? 'L' : 'N'}
        </button>
      </div>
    </header>
  )
}
