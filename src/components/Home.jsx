import avatar from '../assets/nathan.png'

export default function Home({ onNavigate }) {
    return (
        <section className="home reveal">
            <div className="hero">
                {/* Avatar au-dessus */}
                <img src={avatar} alt="Avatar de Nathan" className="avatar" />

                {/* Titre principal */}
                <h1> Porfolio Nathan Plouvin</h1>

                {/* Texte de présentation */}
                <h2>Bonjour, je m'appelle Nathan, je suis  apprenti développeur en 2ème année de BUT informatique.</h2>

                <div className="hero-actions">
                    <button onClick={() => onNavigate('projects')}>Voir mes projets</button>
                    <button onClick={() => onNavigate('about')} className="muted">En savoir plus</button>
                </div>
            </div>
        </section>
    )
}
