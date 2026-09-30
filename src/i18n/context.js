import { createContext, useContext } from 'react'

export const LanguageContext = createContext(null)

/** { lang, setLang, t, pick, locale } — `pick` choisit la bonne langue d'un champ { fr, en }. */
export function useI18n() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useI18n doit être utilisé dans <LanguageProvider>')
  return context
}
