import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Essayer de récupérer la langue depuis localStorage
    try {
      return localStorage.getItem('language') || 'fr'
    } catch {
      return 'fr'
    }
  })

  useEffect(() => {
    // Sauvegarder la langue dans localStorage
    try {
      localStorage.setItem('language', language)
    } catch (err) {
      console.warn('Could not persist language to localStorage:', err)
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

