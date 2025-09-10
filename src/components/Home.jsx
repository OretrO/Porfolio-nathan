import avatar from '../assets/nathan.png'

export default function Home({ onNavigate }) {
  return (
    <section className="home">
      <div className="hero">
        <img src={avatar} alt="Avatar de Nathan" className="avatar" />
        <h2>Bonjour,je suis Nathan</h2>
        <p className="lead">Développeur front-end spécialisé en React. Je crée des interfaces propres, rapides et accessibles.</p>
        <div className="hero-actions">
          <button onClick={() => onNavigate('projects')}>Voir mes projets</button>
          <button onClick={() => onNavigate('about')} className="muted">En savoir plus</button>
        </div>
      </div>
    </section>
  )
}
