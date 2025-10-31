import { useState, useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [route, setRoute] = useState('home')
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'dark'
    } catch (e) {
      return 'dark'
    }
  })

  useEffect(() => {
    // persist theme
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {}
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

    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div id="app-root" data-theme={theme}>
      <Navbar current={route} onNavigate={setRoute} theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
      <main className="container">
        {route === 'home' && <Home onNavigate={setRoute} />}
        {route === 'projects' && <Projects />}
        {route === 'about' && <About />}
        {route === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
}

export default App
