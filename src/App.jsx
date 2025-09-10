import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [route, setRoute] = useState('home')

  return (
    <div id="app-root">
      <Navbar current={route} onNavigate={setRoute} />
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
