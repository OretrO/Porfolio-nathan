export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Création d'une application de gestion de stock",
            description: "Application en Java pour la gestion d'un stock en équipe.",
            link: "https://github.com/OretrO/O-de-France",
            image: "/images/gestion-stock.png"
        },
        {
            id: 2,
            title: "Création d'un bomber-man en Java",
            description: "Petit jeu type bomberman en Java.",
            link: "https://github.com/toncompte/bomberman",
            image: "/images/bomberman.png"
        },
        {
            id: 3,
            title: "Creation de mon porfolio en React",
            description: "Création de mon porfolio en React en appprenent le framework",
            link: "https://github.com/toncompte/projet-c",
            image: "/images/projet-c.png"
        },
    ]

    return (
        <section className="projects">
            <h2>Mes projets personnels et d'étude</h2>
            <div className="projects-grid">
                {projects.map((p) => (
                    <article key={p.id} className="project-card">
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <div className="project-actions">
                            {/* Lien GitHub unique */}
                            <a href={p.link} target="_blank" rel="noopener noreferrer">Voir le code</a>

                            {/* Bouton qui ouvre l'image */}
                            <button
                                className="muted"
                                onClick={() => window.open(p.image, "_blank")}
                            >
                                Image
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
