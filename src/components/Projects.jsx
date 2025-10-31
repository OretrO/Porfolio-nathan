import gestionStock from "../assets/gestion-stock.png"
import bomberman from "../assets/bomberman.png"


export default function Projects({ onSelectProject }) {
    const projects = [
        {
            id: 1,
            title: "Création d'une application de gestion de stock",
            description: "Application en Java pour la gestion d'un stock en équipe.",
            longDescription: "Application desktop réalisée en Java pendant un projet d'équipe. Implémentation des opérations CRUD, gestion des utilisateurs, et génération de rapports. J'ai travaillé principalement sur la couche persistante et l'interface.",
            skillsWorked: [
              { name: 'Java'    },
              { name: 'JavaFX'},
                { name: 'Git' },
                { name: 'GitLab' },
            ],
            link: "https://github.com/OretrO/O-de-France",
            image: gestionStock
        },
        {
            id: 2,
            title: "Création d'un bomber-man en Java",
            description: "Petit jeu de type bomberman en Java.",
            longDescription: "Prototype d'un jeu bomberman en Java. Conception du moteur de collisions, IA basique des ennemis et système d'animations. Projet pour apprendre les boucles de jeu et la gestion des ressources graphiques.",
            skillsWorked: [
              { name: 'Java'},
              { name: 'JavaFX'},
              { name: 'Git' },
              { name: 'GitLab' },
            ],
            link: "https://github.com/toncompte/bomberman",
            image: bomberman
        },
        {
            id: 3,
            title: "Création de mon portfolio en React",
            description: "Création de mon portfolio en React en apprenant le framework",
            longDescription: "Développement du portfolio en React + Vite. Mise en place du routage interne, composants réutilisables, animations d'entrée, et déploiement sur GitHub Pages.",
            skillsWorked: [
              { name: 'React',},
              { name: 'CSS', },
                { name: 'HTML' },
                { name: 'Git' },
                { name: 'GitLab' },
            ],
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
                            <a href={p.link} target="_blank" rel="noopener noreferrer">Voir le code</a>
                            <button
                                className="muted"
                                onClick={() => onSelectProject ? onSelectProject(p) : null}
                            >
                                Détails
                            </button>
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
