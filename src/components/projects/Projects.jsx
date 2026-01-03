import gestionStock from "../../assets/projects/gestion-stock.png"
import bomberman from "../../assets/projects/bomberman.png"
import siteHTML from "../../assets/projects/SiteHTML.png"
import cineHubImg from "../../assets/projects/cinehub.png"
import marathonWeb from "../../assets/projects/marathonWeb.png"
import lenSynphonie from "../../assets/projects/lenSynphonie.png"
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../translations'


export default function Projects({ onSelectProject }) {
    const { language } = useLanguage()
    const t = (key) => getTranslation(language, key)
    const projects = [
        {
            id: 1,
            key: 'gestionStock',
            title: language === 'fr' ? "Création d'une application de gestion de stock" : "Stock Management Application",
            description: t('projectDescriptions.gestionStock.short'),
            longDescription: t('projectDescriptions.gestionStock.long'),
            skillsDescription: t('projectDescriptions.gestionStock.skills'),
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
            key: 'bomberman',
            title: language === 'fr' ? "Création d'un Bomberman en Java" : "Bomberman Game in Java",
            description: t('projectDescriptions.bomberman.short'),
            longDescription:  t('projectDescriptions.bomberman.long'),
            skillsDescription: t('projectDescriptions.bomberman.skills'),
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
            key: 'portfolio',
            title: language === 'fr' ? "Création de mon portfolio en React" : "My React Portfolio",
            description: language === 'fr' ? "Création de mon portfolio en React dans le cadre de l'apprentissage du framework." : "Creating my portfolio in React as part of learning the framework.",
            longDescription: language === 'fr' ? "Développement de mon portfolio personnel pour présenter mes projets et compétences. Utilisant React et Vite, le site est conçu comme une Single Page Application (SPA) performante. J'ai mis en place un système de routage fluide, des animations d'apparition et un mode sombre/clair." : "Development of my personal portfolio to showcase my projects and skills. Using React and Vite, the site is designed as a high-performance Single Page Application (SPA). I implemented a smooth routing system, reveal animations, and a dark/light mode.",
            skillsDescription: language === 'fr' ? "J'ai appris à utiliser React et son écosystème (Hooks, Props, State). J'ai également amélioré mes compétences en CSS moderne (Flexbox, Grid, Variables CSS) et en déploiement continu via GitHub Pages." : "I learned to use React and its ecosystem (Hooks, Props, State). I also improved my skills in modern CSS (Flexbox, Grid, CSS Variables) and continuous deployment via GitHub Pages.",
            skillsWorked: [
              { name: 'React',},
              { name: 'CSS', },
                { name: 'HTML' },
                { name: 'Git' },
                { name: 'GitLab' },
                { name: 'JavaScript' },
            ],
            link: "https://github.com/OretrO/Porfolio-nathan",
            image: null
        },
        {
            id: 4,
            key: 'siteHTML',
            title: language === 'fr' ? "Création d'un site en HTML/CSS" : "HTML/CSS Website",
            description: t('projectDescriptions.siteHTML.short'),
            longDescription: t('projectDescriptions.siteHTML.long'),
            skillsDescription: t('projectDescriptions.siteHTML.skills'),
            skillsWorked: [
              { name: 'HTML' },
              { name: 'CSS' },
              { name: 'Responsive' },
              { name: language === 'fr' ? 'Accessibilité' : 'Accessibility' },
            ],
            link: "https://github.com/OretrO/Site-HTML-CSS",
            image: siteHTML
        },
        {
            id: 5,
            key: 'synthe',
            title: language === 'fr' ? "Synthétiseur sonore en Java" : "Sound Synthesizer in Java",
            description: language === 'fr' ? "Synthétiseur développé en Java pour reproduire des sons." : "Synthesizer developed in Java to reproduce sounds.",
            longDescription: language === 'fr' ? "Développement d'un synthétiseur logiciel en Java capable de générer et modifier des ondes sonores en temps réel. Le projet inclut la création d'oscillateurs (sinus, carré, triangle), de filtres et d'enveloppes ADSR pour sculpter le son." : "Development of a software synthesizer in Java capable of generating and modifying sound waves in real-time. The project includes creating oscillators (sine, square, triangle), filters, and ADSR envelopes to shape the sound.",
            skillsDescription: language === 'fr' ? "Ce projet technique m'a fait explorer le traitement du signal audio et l'utilisation de bibliothèques spécialisées. J'ai dû appliquer des design patterns complexes pour gérer l'architecture modulaire du synthétiseur." : "This technical project led me to explore audio signal processing and the use of specialized libraries. I had to apply complex design patterns to manage the modular architecture of the synthesizer.",
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
            key: 'cinehub',
            title: "CineHub - Hub de Films",
            description: t('projectDescriptions.cinehub.short'),
            longDescription: t('projectDescriptions.cinehub.long'),
            skillsDescription: t('projectDescriptions.cinehub.skills'),
            skillsWorked: [
              { name: 'Laravel' },
              { name: 'PHP' },
              { name: 'Blade' },
              { name: 'SQLite' },
              { name: 'Git' },
              { name: 'GitHub' },
            ],
            link: "https://github.com/OretrO/CineHub",
            image: cineHubImg
        },
        {
            id: 7,
            key: 'marathonWeb',
            title: language === 'fr' ? "Marathon du Web" : "Web Marathon",
            description: t('projectDescriptions.marathonWeb.short'),
            longDescription: t('projectDescriptions.marathonWeb.long'),
            skillsDescription: t('projectDescriptions.marathonWeb.skills'),
            skillsWorked: [
              { name: 'Laravel' },
              { name: 'JavaScript' },
              { name: 'Tailwind CSS' },
                { name: 'PHP' },
              { name: 'Blade' },
              { name: 'SQLite' },
              { name: language === 'fr' ? 'Travail d\'équipe' : 'Teamwork' },
              { name: 'Git' },
              { name: 'GitHub' },
            ],
            link: "https://github.com/OretrO/marathon-web",
            image: marathonWeb
        },
        {
            id: 8,
            key: 'lenSynphonie',
            title: language === 'fr' ? "Len-Synphonie - Synthétiseur Vocal" : "Len-Synphonie - Vocal Synthesizer",
            description: t('projectDescriptions.lenSynphonie.short'),
            longDescription: t('projectDescriptions.lenSynphonie.long'),
            skillsDescription: t('projectDescriptions.lenSynphonie.skills'),
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
            <h2>{t('projects.title')}</h2>
            <div className="projects-grid">
                {projects.map((p) => (
                    <article key={p.id} className="project-card">
                        {p.image && (
                            <div className="project-image">
                                <img src={p.image} alt={p.title} />
                            </div>
                        )}
                        <div className="project-card-content">
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <div className="project-actions">
                                <a href={p.link} target="_blank" rel="noopener noreferrer">{t('projects.viewCode')}</a>
                                <button
                                    className="muted"
                                    onClick={() => onSelectProject ? onSelectProject(p) : null}
                                >
                                    {t('projects.viewDetails')}
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
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
