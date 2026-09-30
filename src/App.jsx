import { useEffect, useState } from 'react'
import { Header, Footer, Home, ProjectPage } from './components'
import LanguageProvider from './i18n/LanguageProvider'
import ThemeProvider from './theme/ThemeProvider'
import RouterProvider from './router/RouterProvider'
import { useI18n } from './i18n/context'
import { useRouter } from './router/context'
import { findProject } from './data/projects'

function SkipLink() {
  const { t } = useI18n()
  const skip = (event) => {
    // pas de changement d'ancre : l'adresse sert au routage
    event.preventDefault()
    const main = document.getElementById('main')
    main?.focus({ preventScroll: true })
    main?.scrollIntoView()
  }
  return (
    <a className="skip-link" href="#main" onClick={skip}>
      {t('skip')}
    </a>
  )
}

function Shell() {
  const { route } = useRouter()
  const { t, pick } = useI18n()
  // Le filtre vit ici pour survivre à un aller-retour vers une page projet.
  const [filter, setFilter] = useState(null)
  const project = route.name === 'project' ? findProject(route.slug) : null

  useEffect(() => {
    document.title = project ? t('meta.projectTitle', { title: pick(project.title) }) : t('meta.title')
  }, [project, t, pick])

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1}>
        {route.name === 'project' ? (
          <ProjectPage slug={route.slug} />
        ) : (
          <Home filter={filter} onFilterChange={setFilter} />
        )}
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <RouterProvider>
          <Shell />
        </RouterProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}
