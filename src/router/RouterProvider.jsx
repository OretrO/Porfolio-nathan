import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { RouterContext } from './context'
import { parseHash, projectPath, returnToProjectRow, scrollToSection } from './routes'
import { prefersReducedMotion } from '../utils/viewTransition'

// Place la page au bon endroit après un changement de route.
function placeScroll(prev, next, lastProject) {
  const fromProject = prev.name === 'project'

  if (next.name === 'project') {
    window.scrollTo(0, 0)
    document.querySelector('.project-title')?.focus({ preventScroll: true })
    return
  }
  if (fromProject && next.section === 'projets' && lastProject && returnToProjectRow(lastProject)) return
  if (next.section) {
    scrollToSection(next.section, { smooth: !fromProject })
    return
  }
  if (fromProject) window.scrollTo(0, 0)
  else scrollToSection(null)
}

export default function RouterProvider({ children }) {
  const [route, setRoute] = useState(() => parseHash(window.location.hash))
  const routeRef = useRef(route)
  const lastProjectRef = useRef(route.slug)

  const commit = useCallback((next) => {
    const prev = routeRef.current
    routeRef.current = next
    const pageChanged = prev.name !== next.name || prev.slug !== next.slug

    const update = () => {
      flushSync(() => setRoute(next))
      placeScroll(prev, next, lastProjectRef.current)
      if (next.name === 'project') lastProjectRef.current = next.slug
    }

    if (pageChanged && document.startViewTransition && !prefersReducedMotion()) {
      document.startViewTransition(update)
    } else {
      update()
    }
  }, [])

  useEffect(() => {
    // Le défilement est géré ici, pas par le navigateur.
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    const onHashChange = () => commit(parseHash(window.location.hash))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [commit])

  // Arrivée directe sur #/contact, #/profil… : on descend à la section.
  useLayoutEffect(() => {
    const initial = routeRef.current
    if (initial.name !== 'home' || !initial.section) return
    scrollToSection(initial.section, { smooth: false })
    // Le chargement des polices peut décaler la page : on recale si personne n'a bougé.
    const y = window.scrollY
    document.fonts?.ready.then(() => {
      if (Math.abs(window.scrollY - y) < 2) scrollToSection(initial.section, { smooth: false })
    })
  }, [])

  const navigate = useCallback((path) => {
    const hash = `#${path}`
    const current = window.location.hash || '#/'
    if (current === hash) {
      // Même adresse : pas d'évènement hashchange, on rejoue seulement le défilement.
      placeScroll(routeRef.current, parseHash(hash), lastProjectRef.current)
      return
    }
    window.location.hash = path
  }, [])

  // Depuis l'index, l'entrée d'historique courante devient #/projets :
  // le bouton « retour » ramène ainsi à la liste, sur la bonne ligne.
  const openProject = useCallback((slug) => {
    if (routeRef.current.name === 'home') window.history.replaceState(null, '', '#/projets')
    window.location.hash = projectPath(slug)
  }, [])

  const value = useMemo(() => ({ route, navigate, openProject }), [route, navigate, openProject])
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}
