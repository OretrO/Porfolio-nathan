import { useEffect, useState } from 'react'
import { useI18n } from '../../i18n/context'
import { cvs, person } from '../../data/profile'
import FitText from '../ui/FitText'
import SectionHead from '../ui/SectionHead'
import Arrow from '../ui/Arrow'
import './Contact.css'

export default function Contact() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => setCopied(false), 2400)
    return () => clearTimeout(id)
  }, [copied])

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(person.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${person.email}`
    }
  }

  const cvRows = [
    { key: 'fr', label: t('contact.cvFr'), ...cvs.fr },
    { key: 'en', label: t('contact.cvEn'), ...cvs.en },
  ]

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title" tabIndex={-1}>
      <SectionHead number="03" title={t('contact.title')} titleId="contact-title" />

      <p className="contact-lead">{t('contact.lead')}</p>

      <a className="contact-address" href={`mailto:${person.email}`} aria-label={t('contact.write', { email: person.email })}>
        <FitText>{person.email}</FitText>
      </a>

      <div className="contact-actions">
        <button type="button" className="button" onClick={copyAddress}>
          {copied ? t('contact.copied') : t('contact.copy')}
        </button>
        <span className="visually-hidden" aria-live="polite">
          {copied ? t('contact.copied') : ''}
        </span>
      </div>

      <div className="contact-grid">
        <div className="contact-block">
          <h3 className="subhead">{t('contact.cvTitle')}</h3>
          <ul className="contact-list">
            {cvRows.map((cv) => (
              <li key={cv.key}>
                <span className="contact-item-label">{cv.label}</span>
                <span className="contact-item-links mono">
                  <a href={cv.href} target="_blank" rel="noopener">
                    {t('contact.open')} <Arrow dir="out" />
                    <span className="visually-hidden"> {t('contact.newTab')}</span>
                  </a>
                  <a href={cv.href} download={cv.fileName}>
                    {t('contact.download')} <Arrow dir="download" />
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-block">
          <h3 className="subhead">{t('contact.elsewhere')}</h3>
          <ul className="contact-list">
            {person.links.map((link) => (
              <li key={link.href}>
                <a className="contact-item-label" href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label} <Arrow dir="out" />
                  <span className="visually-hidden"> {t('contact.newTab')}</span>
                </a>
                <span className="contact-item-links mono">{link.href.replace(/^https:\/\/(www\.)?/, '')}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
