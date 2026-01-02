import gestionStock from "../../assets/projects/gestion-stock.png"
import bomberman from "../../assets/projects/bomberman.png"
import siteHTML from "../../assets/projects/SiteHTML.png"
import cinehub from "../../assets/projects/cinehub.png"
import marathonWeb from "../../assets/projects/marathonWeb.png"
import lenSynphonie from "../../assets/projects/lenSynphonie.png"


export default function Projects({ onSelectProject }) {
    const projects = [
        {
            id: 1,
            title: "Création d'une application de gestion de stock",
            description: "Application en Java pour la gestion d'un stock en équipe.",
            longDescription: "Application de bureau réalisée en Java pendant un projet d'équipe. Gestion des utilisateurs. J'ai travaillé principalement sur l'interface des commandes.",
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
            title: "Création d'un Bomberman en Java",
            description: "Petit jeu de type Bomberman en Java.",
            longDescription:  "Jeu Bomberman en Java. Déplacement basique des ennemis et système d'animations. Projet pour apprendre les boucles de jeu et la conception d'une interface en JavaFX.",
            skillsWorked: [
              { name: 'Java'},
              { name: 'JavaFX'},
              { name: 'Git' },
              { name: 'GitLab' },
            ],
            link: "https://github.com/OretrO/Bomberman",
            image: bomberman
        },
        {
            id: 3,
            title: "Création de mon portfolio en React",
            description: "Création de mon portfolio en React dans le cadre de l'apprentissage du framework.",
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
            title: "Création d'un site en HTML/CSS",
            description: "Site vitrine statique conçu et intégré en HTML/CSS.",
            longDescription: "Conception et intégration d'un site statique responsive en HTML et CSS. Sur le thème d'un site événementiel.",
            skillsWorked: [
              { name: 'HTML' },
              { name: 'CSS' },
              { name: 'Responsive' },
              { name: 'Accessibilité' },
            ],
            link: "https://github.com/OretrO/Site-HTML-CSS",
            image: siteHTML
        },
        {
            id: 5,
            title: "Synthétiseur sonore en Java",
            description: "Synthétiseur développé en Java pour reproduire des sons.",
            longDescription: "Développement d'un synthétiseur en Java (bibliothèques audio) : oscillateurs, filtres, enveloppes ADSR.",
            skillsWorked: [
              { name: 'Java' },
              { name: 'Design patterns' },
              { name: 'Git' },
            ],
            link: "https://github.com/OretrO/Synthe",
            image: null
        },
        {
            id: 6,
            title: "CineHub - Hub de Films",
            description: "Création d'un hub avec des films où les gens peuvent commenter et liker des films.",
            longDescription: "Application web permettant aux utilisateurs de découvrir des films, de les commenter et de les liker. Système d'authentification, gestion des commentaires et interactions sociales autour du cinéma.",
            skillsWorked: [
              { name: 'Laravel' },
              { name: 'PHP' },
              { name: 'Blade' },
              { name: 'SQLite' },
              { name: 'Git' },
              { name: 'GitHub' },
            ],
            link: "https://github.com/OretrO/CineHub",
            image: cinehub
        },
        {
            id: 7,
            title: "Marathon du Web",
            description: "Projet réalisé en 24h sur le thème de la musique avec un groupe de moins de 6 personnes.",
            longDescription: "Site web complet développé lors d'un marathon de 24h en équipe (moins de 6 personnes). Projet intensif sur le thème de la musique avec gestion du temps, collaboration et créativité sous pression.",
            skillsWorked: [
              { name: 'Laravel' },
              { name: 'JavaScript' },
              { name: 'Tailwind CSS' },
                { name: 'PHP' },
              { name: 'Blade' },
              { name: 'SQLite' },
                { name: 'Mysql' },
              { name: 'Travail d\'équipe' },
              { name: 'Git' },
              { name: 'GitHub' },
            ],
            link: "https://github.com/OretrO/marathon-web",
            image: marathonWeb
        },
        {
            id: 8,
            title: "Len-Synphonie - Synthétiseur Vocal",
            description: "Site où les personnes peuvent écouter et créer des sons grâce à un synthétiseur vocal.",
            longDescription: "Application web interactive permettant aux utilisateurs de créer et d'écouter des sons grâce à un synthétiseur vocal. Interface intuitive pour la manipulation de sons et la création musicale en ligne.",
            skillsWorked: [
              { name: 'Laravel' },
              { name: 'PHP' },
              { name: 'Blade' },
              { name: 'SQLite' },
              { name: 'Git' },
              { name: 'GitHub' },
            ],
            link: "https://github.com/OretrO/Len-Synphonie",
            image: lenSynphonie
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
