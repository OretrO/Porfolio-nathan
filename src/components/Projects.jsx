import gestionStock from "../assets/gestion-stock.png"
import bomberman from "../assets/bomberman.png"


export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Création d'une application de gestion de stock",
            description: "Application en Java pour la gestion d'un stock en équipe.",
            link: "https://github.com/OretrO/O-de-France",
            image: gestionStock
        },
        {
            id: 2,
            title: "Création d'un bomber-man en Java",
            description: "Petit jeu de type bomberman en Java.",
            link: "https://github.com/toncompte/bomberman",
            image: bomberman
        },
        {
            id: 3,
            title: "Création de mon portfolio en React",
            description: "Création de mon portfolio en React en apprenant le framework",
            link: "https://github.com/OretrO/Porfolio-nathan",
            image: null
        },
        {
            id: 4,
            title : "Site evenementiel en HTML/CSS",
            description: "Création d'un site en équipe sur le sujet de l'evenementiel fait uniquement en HTML/CSS",
            link : "",
            image : null

        }
    ]

    return (
        <section className="projects reveal">
            <h2>Mes projets personnels et d'étude</h2>
            <div className="projects-grid">
                {projects.map((p) => (
                    <article key={p.id} className="project-card">
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <div className="project-actions">
                            {/* Lien GitHub unique */}
                            <a href={p.link} target="_blank" rel="noopener noreferrer">Voir le code</a>
                            {/* Bouton qui ouvre l'image si elle existe */}
                            {p.image ? (
                                <button
                                    className="muted"
                                    onClick={() => window.open(p.image, "_blank")}
                                >
                                    Image
                                </button>
                            ) : null}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
