import { useI18n } from '../../i18n/context'

const LANGUAGES = ['fr', 'en']

export default function LangSwitch({ className = '' }) {
  const { lang, setLang, t } = useI18n()

  return (
    <div className={`lang-switch ${className}`} role="group" aria-label={t('lang.label')}>
      {LANGUAGES.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          title={t(`lang.${code}`)}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
