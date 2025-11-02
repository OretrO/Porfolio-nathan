import avatar from '../assets/nathan.png'

export default function Home({ onNavigate }) {
    return (
        <section className="home reveal">
            <div className="hero">
                <img src={avatar} alt="Avatar de Nathan" className="avatar" />

                <h1>Portfolio de Nathan Plouvin</h1>

                <h2>Bonjour, je m'appelle Nathan — apprenti développeur en 2ᵉ année de BUT Informatique.</h2>

                <div className="hero-actions">
                    <button onClick={() => onNavigate('projects')}>Voir mes projets</button>
                    <button onClick={() => onNavigate('about')} className="muted">En savoir plus</button>
                </div>
            </div>
        </section>
    )
}
