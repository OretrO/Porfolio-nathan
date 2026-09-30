import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { ThemeContext } from './context'
import { withViewTransition } from '../utils/viewTransition'

// Même clé que le petit script de index.html, qui pose le thème avant le premier rendu.
const STORAGE_KEY = 'np-theme'
const darkQuery = () => window.matchMedia('(prefers-color-scheme: dark)')

function readSavedTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'light' || saved === 'dark' ? saved : null
  } catch {
    return null
  }
}

function initialTheme() {
  const current = document.documentElement.dataset.theme
  if (current === 'light' || current === 'dark') return current
  return readSavedTheme() ?? (darkQuery().matches ? 'dark' : 'light')
}

function applyTheme(theme) {
  const root = document.documentElement
  root.dataset.theme = theme
  const paper = getComputedStyle(root).getPropertyValue('--paper').trim()
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', paper)
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme)

  useLayoutEffect(() => applyTheme(theme), [theme])

  // Tant que l'utilisateur n'a rien choisi, on suit le réglage de l'appareil.
  useEffect(() => {
    const query = darkQuery()
    const onChange = (event) => {
      if (!readSavedTheme()) setTheme(event.matches ? 'dark' : 'light')
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    withViewTransition(() => {
      applyTheme(next)
      setTheme(next)
    })
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // choix non retenu, sans conséquence
    }
  }, [theme])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
