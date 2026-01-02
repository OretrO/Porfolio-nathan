import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = (key) => getTranslation(language, key)

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Nathan — {t('footer.allRightsReserved')}</p>
        <nav className="social">
          <a href="https://github.com/OretrO" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/nathan-plouvin-7aaab1386/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </div>
    </footer>
  )
}
