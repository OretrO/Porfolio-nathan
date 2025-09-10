// filepath: c:\Users\natha\OneDrive\Documents\PorfolioReact\src\components\Footer.jsx
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Nathan — Tous droits réservés.</p>
        <nav className="social">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </nav>
      </div>
    </footer>
  )
}

