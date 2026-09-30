import { useRouter } from '../../router/context'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Contact from '../sections/Contact'

export default function Home({ filter, onFilterChange }) {
  const { navigate } = useRouter()

  // Depuis « Outils et langages » : filtre l'index et remonte jusqu'à lui.
  const showProjectsUsing = (tech) => {
    onFilterChange(tech)
    navigate('/projets')
  }

  return (
    <>
      <Hero />
      <Projects filter={filter} onFilterChange={onFilterChange} />
      <About onPickTech={showProjectsUsing} />
      <Contact />
    </>
  )
}
