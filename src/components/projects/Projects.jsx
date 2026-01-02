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
            longDescription: "Application de bureau complète réalisée en Java avec l'interface JavaFX. Ce projet d'équipe visait à simuler la gestion d'un stock d'entreprise, incluant la gestion des produits, des fournisseurs et des commandes. J'ai été responsable de la conception et du développement de l'interface de gestion des commandes, assurant une expérience utilisateur fluide et intuitive.",
            skillsDescription: "J'ai approfondi ma maîtrise de Java et découvert le framework JavaFX pour les interfaces graphiques. Le travail en équipe m'a permis d'améliorer ma gestion de versions avec Git et GitLab, ainsi que ma communication technique.",
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
            longDescription:  "Récréation du célèbre jeu Bomberman en Java. Le projet implémente les mécaniques de base : déplacement du joueur, pose de bombes, destruction de murs et intelligence artificielle simple pour les ennemis. L'accent a été mis sur la structure du code et la boucle de jeu.",
            skillsDescription: "Ce projet m'a permis de comprendre les concepts fondamentaux du développement de jeux vidéo (boucle de jeu, gestion des collisions). J'ai également renforcé mes compétences en programmation orientée objet et en gestion d'événements.",
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
            longDescription: "Développement de mon portfolio personnel pour présenter mes projets et compétences. Utilisant React et Vite, le site est conçu comme une Single Page Application (SPA) performante. J'ai mis en place un système de routage fluide, des animations d'apparition et un mode sombre/clair.",
            skillsDescription: "J'ai appris à utiliser React et son écosystème (Hooks, Props, State). J'ai également amélioré mes compétences en CSS moderne (Flexbox, Grid, Variables CSS) et en déploiement continu via GitHub Pages.",
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
            longDescription: "Conception et intégration d'un site web statique complet pour un événement fictif. Le site est entièrement responsive, s'adaptant à tous les types d'écrans (mobile, tablette, desktop). Une attention particulière a été portée à l'accessibilité et à la sémantique HTML.",
            skillsDescription: "J'ai consolidé mes bases en HTML5 et CSS3, notamment sur le responsive design avec les Media Queries. J'ai aussi appris les bonnes pratiques d'accessibilité web (WCAG) pour rendre le contenu accessible à tous.",
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
            longDescription: "Développement d'un synthétiseur logiciel en Java capable de générer et modifier des ondes sonores en temps réel. Le projet inclut la création d'oscillateurs (sinus, carré, triangle), de filtres et d'enveloppes ADSR pour sculpter le son.",
            skillsDescription: "Ce projet technique m'a fait explorer le traitement du signal audio et l'utilisation de bibliothèques spécialisées. J'ai dû appliquer des design patterns complexes pour gérer l'architecture modulaire du synthétiseur.",
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
            longDescription: "Plateforme web communautaire dédiée au cinéma, développée avec le framework Laravel. Les utilisateurs peuvent créer un compte, rechercher des films, laisser des critiques détaillées et noter les œuvres. Le site inclut un système de modération et de gestion de profil.",
            skillsDescription: "J'ai découvert le framework PHP Laravel et son architecture MVC. J'ai appris à gérer une base de données relationnelle avec SQLite et à sécuriser une application web (authentification, protection CSRF/XSS).",
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
            longDescription: "Défi intense de développement web : créer un site complet sur le thème de la musique en seulement 24 heures. Notre équipe a réalisé une plateforme de découverte musicale interactive. Le projet a nécessité une organisation rigoureuse et des choix techniques pragmatiques pour tenir les délais.",
            skillsDescription: "Cette expérience a testé ma capacité à coder rapidement et efficacement sous pression. J'ai amélioré mes compétences en travail d'équipe, en répartition des tâches et en intégration rapide de fonctionnalités avec Tailwind CSS.",
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
            longDescription: "Application web innovante permettant de composer de la musique via une interface web. Les utilisateurs peuvent assembler des boucles sonores, ajuster le tempo et exporter leurs créations. Le projet utilise l'API Web Audio pour la synthèse sonore directement dans le navigateur.",
            skillsDescription: "J'ai approfondi mes connaissances en JavaScript avancé et en manipulation du DOM. J'ai également appris à interagir avec des API web complexes pour le traitement audio et à gérer l'état d'une application riche côté client.",
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
