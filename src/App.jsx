import { useState, useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import ProjectDetail from './components/ProjectDetail.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [route, setRoute] = useState('home')
  const [selectedProject, setSelectedProject] = useState(null)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    // persist theme and set it on <body> so background covers full page
    try {
      localStorage.setItem('theme', theme)
    } catch (err) {
      console.warn('Could not persist theme to localStorage:', err)
    }
    try {
      document.body.dataset.theme = theme
    } catch (err) {
      console.warn('Could not set body data-theme:', err)
    }
  }, [theme])

  useEffect(() => {
    // reveal-on-scroll for elements with .reveal
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.12 }
    )

    const els = Array.from(document.querySelectorAll('.reveal'))
    // clear previous state so elements can animate / become visible again
    els.forEach((el) => el.classList.remove('in-view'))
    els.forEach((el) => obs.observe(el))

    return () => {
      els.forEach((el) => obs.unobserve(el))
      obs.disconnect()
    }
  }, [route])

  return (
    <div id="app-root" data-theme={theme}>
      <Navbar current={route} onNavigate={setRoute} theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
      <main className="container">
        {route === 'home' && <Home onNavigate={setRoute} />}
        {route === 'projects' && (
          <Projects onSelectProject={(p) => { setSelectedProject(p); setRoute('project') }} />
        )}
        {route === 'project' && selectedProject && (
          <ProjectDetail project={selectedProject} onBack={() => setRoute('projects')} />
        )}
        {route === 'about' && <About />}
        {route === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
}

export default App
