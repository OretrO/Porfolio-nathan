import { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { LanguageContext } from './context'
import { translations } from './translations'
import { withViewTransition } from '../utils/viewTransition'

const STORAGE_KEY = 'np-lang'
const LANGUAGES = ['fr', 'en']

// Choix enregistré, sinon français dès que le navigateur le parle, sinon anglais.
function detectLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (LANGUAGES.includes(saved)) return saved
  } catch {
    // stockage indisponible (navigation privée, etc.)
  }
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language]
  return preferred.some((l) => l?.toLowerCase().startsWith('fr')) ? 'fr' : 'en'
}

const lookup = (dictionary, key) =>
  key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), dictionary)

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage)

  const setLang = useCallback((next) => {
    if (!LANGUAGES.includes(next)) return
    withViewTransition(() => setLangState(next))
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // pas grave : le choix ne sera simplement pas retenu
    }
  }, [])

  useLayoutEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => {
    const t = (key, vars) => {
      let text = lookup(translations[lang], key) ?? lookup(translations.fr, key) ?? key
      if (vars && typeof text === 'string') {
        text = text.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? vars[name] : match))
      }
      return text
    }
    const pick = (field) => (field == null ? field : (field[lang] ?? field.fr))
    return { lang, setLang, t, pick, locale: lang === 'fr' ? 'fr-FR' : 'en-GB' }
  }, [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
