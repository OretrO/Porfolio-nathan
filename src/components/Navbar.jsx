// filepath: c:\Users\natha\OneDrive\Documents\PorfolioReact\src\components\Navbar.jsx
export default function Navbar({ current = 'home', onNavigate }) {
  return (
    <header className="navbar">
      <div className="brand" onClick={() => onNavigate('home')}>
        MonPortfolio
      </div>
      <nav>
        <ul className="nav-list">
          <li className={current === 'home' ? 'nav-item active' : 'nav-item'} onClick={() => onNavigate('home')}>Accueil</li>
          <li className={current === 'projects' ? 'nav-item active' : 'nav-item'} onClick={() => onNavigate('projects')}>Projets</li>
          <li className={current === 'about' ? 'nav-item active' : 'nav-item'} onClick={() => onNavigate('about')}>À propos</li>
          <li className={current === 'contact' ? 'nav-item active' : 'nav-item'} onClick={() => onNavigate('contact')}>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

