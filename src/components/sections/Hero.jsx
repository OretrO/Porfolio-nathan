import portrait from '../../assets/logos/nathan.jpg'
import { useI18n } from '../../i18n/context'
import { cvs, person } from '../../data/profile'
import useMediaQuery from '../../hooks/useMediaQuery'
import useNow from '../../hooks/useNow'
import useFontsReady from '../../hooks/useFontsReady'
import FitText from '../ui/FitText'
import Link from '../ui/Link'
import Arrow from '../ui/Arrow'
import './Hero.css'

function LocalClock() {
  const { t, locale } = useI18n()
  const now = useNow(10_000)
  const parts = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: person.timeZone,
  }).formatToParts(now)
  const hours = parts.find((p) => p.type === 'hour')?.value
  const minutes = parts.find((p) => p.type === 'minute')?.value

  return (
    <p className="hero-clock">
      <span className="visually-hidden">{t('hero.time', { time: `${hours}:${minutes}`, city: person.city })}</span>
      <span aria-hidden="true">
        {person.city} <span className="hero-clock-sep">·</span> {hours}
        <span className="hero-clock-colon">:</span>
        {minutes}
      </span>
    </p>
  )
}

export default function Hero() {
  const { t, lang } = useI18n()
  const oneLine = useMediaQuery('(min-width: 720px)')
  const ready = useFontsReady()
  const cv = cvs[lang]
  const lines = oneLine ? [person.name] : person.name.split(' ')

  return (
    <section className="hero" data-ready={ready} aria-labelledby="hero-title">
      <div className="hero-meta mono">
        <p>{t('hero.role')}</p>
        <LocalClock />
      </div>

      <h1 className="hero-name" id="hero-title">
        {lines.map((line, i) => (
          <span className="hero-line" key={line} style={{ '--i': i }}>
            <FitText>{line}</FitText>
            {i < lines.length - 1 && ' '}
          </span>
        ))}
      </h1>

      <div className="hero-body">
        <img
          className="hero-photo"
          src={portrait}
          alt={t('hero.photoAlt')}
          width="400"
          height="400"
          fetchPriority="high"
          decoding="async"
        />

        <div className="hero-text">
          <p className="hero-intro">{t('hero.intro')}</p>
          <div className="hero-actions">
            <Link to="/projets" className="button button--solid">
              {t('hero.seeProjects')} <Arrow dir="down" />
            </Link>
            <a className="button" href={cv.href} download={cv.fileName}>
              {t('hero.cv')} <Arrow dir="download" />
            </a>
          </div>
        </div>

        <ul className="hero-links mono">
          {person.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label} <Arrow dir="out" />
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${person.email}`}>E-mail</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
