
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Nathan — Tous droits réservés.</p>
        <nav className="social">
          <a href="https://github.com/OretrO" target = "_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/nathan-plouvin-7aaab1386/" target = "_blank">LinkedIn</a>
        </nav>
      </div>
    </footer>
  )
}

