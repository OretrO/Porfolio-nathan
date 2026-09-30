import lenSymphonyImg from '../assets/projects/lenSynphonie.png'
import cineHubImg from '../assets/projects/cinehub.png'
import marathonImg from '../assets/projects/marathonWeb.png'
import pacmanImg from '../assets/projects/Pacman.png'
import bombermanImg from '../assets/projects/bomberman.png'
import stockImg from '../assets/projects/gestion-stock.png'
import siteImg from '../assets/projects/SiteHTML.png'

/*
 * Tous les projets du portfolio, dans l'ordre d'affichage.
 *
 * - Les textes sont au format { fr, en }.
 * - `stack` alimente les filtres et le compteur de la section « Outils ».
 * - Sans capture (`image: null`), `cover` choisit une couverture dessinée :
 *   'waves' (formes d'onde) ou 'here' (« vous êtes ici »).
 * - `related` pointe vers le slug d'un projet lié (facultatif).
 */
export const projects = [
  {
    slug: 'lensymphony',
    title: { fr: 'LenSymphony', en: 'LenSymphony' },
    kind: { fr: 'Plateforme web', en: 'Web platform' },
    context: { fr: 'SAÉ, BUT 2', en: 'Team project, year 2' },
    year: '2025–26',
    team: { fr: '4 personnes, 4 sprints', en: '4 people, 4 sprints' },
    stack: ['Laravel', 'PHP', 'Blade', 'SQLite'],
    tools: ['Git', 'GitHub'],
    repo: 'https://github.com/OretrO/Len-Synphonie',
    image: lenSymphonyImg,
    related: 'synthetiseur',
    tagline: {
      fr: 'Une plateforme pour publier des partitions et leurs arrangements.',
      en: 'A platform to publish sheet music and its arrangements.',
    },
    summary: {
      fr: 'Application web réalisée à quatre autour de la musique écrite : une bibliothèque de partitions, les arrangements qui en découlent, les musiciens et leurs instruments. Le travail était découpé en quatre sprints, avec une répartition des tâches suivie membre par membre.',
      en: 'A web application built by a team of four around written music: a library of scores, the arrangements based on them, musicians and their instruments. The work was split into four sprints, with tasks assigned and tracked for each member.',
    },
    features: {
      fr: ['Bibliothèque de partitions et d’arrangements', 'Fiches musiciens et instruments', 'Inscription et connexion', 'Tableau de bord avec compteurs'],
      en: ['Library of scores and arrangements', 'Musician and instrument pages', 'Sign-up and log-in', 'Dashboard with counters'],
    },
    learned: {
      fr: 'Travailler en sprints à plusieurs sur la même base Laravel : découper le travail en tâches, relire le code des autres avant de l’intégrer, et garder un modèle de données cohérent grâce à un dictionnaire de données partagé.',
      en: 'Working in sprints with others on the same Laravel codebase: breaking the work into tasks, reviewing each other’s code before merging it, and keeping the data model consistent with a shared data dictionary.',
    },
  },
  {
    slug: 'synthetiseur',
    title: { fr: 'Synthétiseur MusicXML', en: 'MusicXML Synthesizer' },
    kind: { fr: 'Bibliothèque Java', en: 'Java library' },
    context: { fr: 'BUT 2', en: 'Year 2' },
    year: '2025–26',
    team: null,
    stack: ['Java', 'MusicXML'],
    tools: ['Git'],
    repo: 'https://github.com/OretrO/Synthe',
    image: null,
    cover: 'waves',
    related: 'lensymphony',
    tagline: {
      fr: 'Une bibliothèque Java qui lit des partitions et les fait sonner.',
      en: 'A Java library that reads sheet music and makes it sound.',
    },
    summary: {
      fr: 'Une bibliothèque Java, baptisée LenSymphony, qui lit une partition au format MusicXML, la convertit en notes, puis la joue avec des instruments virtuels. Elle s’utilise en ligne de commande.',
      en: 'A Java library, named LenSymphony, that parses a MusicXML score, turns it into notes, then plays it with virtual instruments. It runs from the command line.',
    },
    features: {
      fr: ['Lecture de fichiers MusicXML (parseur SAX)', 'Ondes carrées, triangulaires, en dents de scie', 'Enveloppe ADSR, vibrato, bruit, harmoniques', 'Trompette, xylophone, timbales, batterie'],
      en: ['MusicXML parsing (SAX parser)', 'Square, triangle and sawtooth waves', 'ADSR envelope, vibrato, noise, harmonics', 'Trumpet, xylophone, timpani, drums'],
    },
    learned: {
      fr: 'Les patrons de conception, appliqués pour de vrai : chaque effet (ADSR, vibrato, bruit) est un décorateur qu’on empile sur un son, les notes liées forment un composite, et une fabrique abstraite crée les notes. Plus un peu de traitement du signal pour que tout ça sonne juste.',
      en: 'Design patterns, applied for real: each effect (ADSR, vibrato, noise) is a decorator stacked on top of a sound, tied notes form a composite, and an abstract factory creates the notes. Plus some signal processing to make it all sound right.',
    },
  },
  {
    slug: 'cinehub',
    title: { fr: 'CineHub', en: 'CineHub' },
    kind: { fr: 'Application web', en: 'Web app' },
    context: { fr: 'BUT 2', en: 'Year 2' },
    year: '2025–26',
    team: null,
    stack: ['Laravel', 'PHP', 'Blade', 'SQLite'],
    tools: ['Git', 'GitHub'],
    repo: 'https://github.com/OretrO/CineHub',
    image: cineHubImg,
    tagline: {
      fr: 'Un catalogue de films, séries et animés, avec recherche et filtres.',
      en: 'A catalogue of films, series and anime, with search and filters.',
    },
    summary: {
      fr: 'Une application Laravel pour parcourir un catalogue de films, de séries et d’animés. On cherche par titre ou par réalisateur, on filtre par type, et chaque fiche affiche sa note. Une fois connecté, on peut commenter et aimer ses films préférés.',
      en: 'A Laravel application for browsing a catalogue of films, series and anime. You can search by title or director, filter by type, and every entry shows its rating. Once logged in, you can comment on and like your favourite films.',
    },
    features: {
      fr: ['Recherche par titre ou réalisateur', 'Filtres : films, séries, animés', 'Fiches avec note', 'Comptes, commentaires et likes'],
      en: ['Search by title or director', 'Filters: films, series, anime', 'Entries with ratings', 'Accounts, comments and likes'],
    },
    learned: {
      fr: 'Le socle de Laravel : routes, contrôleurs, vues Blade, base SQLite. Puis l’authentification, et la question qui va avec : qui a le droit de faire quoi.',
      en: 'The Laravel fundamentals: routes, controllers, Blade views, an SQLite database. Then authentication, and the question that comes with it: who is allowed to do what.',
    },
  },
  {
    slug: 'marathon-du-web',
    title: { fr: 'Marathon du Web', en: 'Web Marathon' },
    kind: { fr: 'Blog musical', en: 'Music blog' },
    context: { fr: 'Hackathon, 24 h', en: 'Hackathon, 24 h' },
    year: '2025–26',
    team: { fr: '6 personnes, 24 heures', en: '6 people, 24 hours' },
    stack: ['Laravel', 'PHP', 'Blade', 'JavaScript', 'Tailwind CSS', 'SQLite'],
    tools: ['Git', 'GitLab'],
    repo: 'https://github.com/OretrO/marathon-web',
    image: marathonImg,
    tagline: {
      fr: 'Un blog musical conçu, codé et mis en ligne en 24 heures, à six.',
      en: 'A music blog designed, built and shipped in 24 hours by six people.',
    },
    summary: {
      fr: 'Vingt-quatre heures, six personnes, un thème imposé : la musique. Nous avons livré un blog où chaque article embarque son extrait audio, avec des votes, un compteur de vues et un wiki. Chaque push sur la branche principale partait directement en production sur le serveur du marathon.',
      en: 'Twenty-four hours, six people, one imposed theme: music. We shipped a blog where every article comes with its own audio clip, plus votes, view counts and a wiki. Every push to the main branch went straight to production on the marathon server.',
    },
    features: {
      fr: ['Articles avec lecteur audio', 'Votes et compteur de vues', 'Wiki', 'Déploiement continu via GitLab'],
      en: ['Articles with an audio player', 'Votes and view counts', 'Wiki', 'Continuous deployment through GitLab'],
    },
    learned: {
      fr: 'Travailler en équipe sous pression, aller vite avec Tailwind CSS, partager un dépôt Git à six sans se marcher dessus, et surtout choisir ce qu’on ne fera pas.',
      en: 'Working as a team under pressure, moving fast with Tailwind CSS, sharing one Git repository between six people without stepping on each other’s toes, and above all choosing what not to build.',
    },
  },
  {
    slug: 'pac-man',
    title: { fr: 'Pac-Man', en: 'Pac-Man' },
    kind: { fr: 'Jeu d’arcade', en: 'Arcade game' },
    context: { fr: 'BUT 2, qualité de dév.', en: 'Year 2, software quality' },
    year: '2025–26',
    team: { fr: 'En groupe', en: 'Group project' },
    stack: ['Java', 'JavaFX'],
    tools: ['Git', 'GitLab'],
    repo: 'https://github.com/OretrO/PacMan',
    image: pacmanImg,
    tagline: {
      fr: 'Le classique de l’arcade, refait en JavaFX à coups de patrons de conception.',
      en: 'The arcade classic, rebuilt in JavaFX with design patterns.',
    },
    summary: {
      fr: 'Dans le module de qualité de développement, on partait d’une base de Pac-Man en JavaFX qu’il fallait faire évoluer au fil des TP. Fantômes, collisions, score, vies, super-gommes : le jeu tourne, mais l’enjeu était surtout d’avoir une architecture qui reste lisible quand on ajoute des règles.',
      en: 'In the software quality module, we started from a basic JavaFX Pac-Man and extended it lab after lab. Ghosts, collisions, score, lives, power pellets: the game works, but the real goal was an architecture that stays readable as new rules are added.',
    },
    features: {
      fr: ['Patrons État et Stratégie pour les personnages', 'Patron Fabrique pour générer les labyrinthes', 'Collisions, score, vies', 'Architecture MVC'],
      en: ['State and Strategy patterns for the characters', 'Factory pattern to generate the mazes', 'Collisions, score, lives', 'MVC architecture'],
    },
    learned: {
      fr: 'Appliquer des patrons de conception sur du vrai code plutôt que sur un exemple de cours, et sentir quand un État ou une Stratégie simplifie vraiment les choses. Et gérer les états d’un jeu qui tourne en temps réel avec JavaFX.',
      en: 'Applying design patterns to real code rather than textbook examples, and getting a feel for when a State or a Strategy genuinely simplifies things. Plus managing the state of a real-time game with JavaFX.',
    },
  },
  {
    slug: 'bomberman',
    title: { fr: 'Bomberman', en: 'Bomberman' },
    kind: { fr: 'Jeu', en: 'Game' },
    context: { fr: 'BUT 1, IHM', en: 'Year 1, HCI module' },
    year: '2024–25',
    team: null,
    stack: ['Java', 'JavaFX', 'FXML'],
    tools: ['Git', 'GitLab'],
    repo: 'https://github.com/OretrO/Bomberman',
    image: bombermanImg,
    tagline: {
      fr: 'Un Bomberman en JavaFX, avec un inventaire et quatre sortes de bombes.',
      en: 'A JavaFX Bomberman, with an inventory and four kinds of bombs.',
    },
    summary: {
      fr: 'Réalisé pour le module d’interfaces homme-machine : une grille avec des murs destructibles, des ennemis, des compteurs de vies et de bombes, et un inventaire, dans une fenêtre à part, pour choisir la bombe à poser.',
      en: 'Built for the human-computer interaction module: a grid with destructible walls, enemies, life and bomb counters, and an inventory in a separate window to pick which bomb to drop.',
    },
    features: {
      fr: ['Quatre bombes : normale, grosse, horizontale, verticale', 'Inventaire dans une fenêtre dédiée', 'Vues FXML et contrôleurs', 'Façade entre le modèle et l’interface'],
      en: ['Four bombs: normal, big, horizontal, vertical', 'Inventory in its own window', 'FXML views and controllers', 'Facade between model and UI'],
    },
    learned: {
      fr: 'La programmation orientée objet appliquée à un jeu : de l’héritage pour les bombes et les personnages, des événements clavier, et une séparation nette entre le modèle et l’interface.',
      en: 'Object-oriented programming applied to a game: inheritance for bombs and characters, keyboard events, and a clean separation between the model and the interface.',
    },
  },
  {
    slug: 'o-de-france',
    title: { fr: 'O de France', en: 'O de France' },
    kind: { fr: 'Logiciel de gestion', en: 'Management software' },
    context: { fr: 'SAÉ, BUT 1', en: 'Team project, year 1' },
    year: '2024–25',
    team: { fr: 'En équipe', en: 'Team project' },
    stack: ['Java', 'JavaFX', 'FXML', 'JUnit'],
    tools: ['Gradle', 'Git', 'GitLab'],
    repo: 'https://github.com/OretrO/O-de-France',
    image: stockImg,
    tagline: {
      fr: 'Stocks, clients et commandes d’un distributeur d’eau, en JavaFX.',
      en: 'Stock, customers and orders for a water distributor, in JavaFX.',
    },
    summary: {
      fr: 'Une application de bureau pour une entreprise fictive de distribution d’eau. Elle gère les clients (particuliers, entreprises, établissements publics), les stocks par catégorie et par entrepôt, et les commandes, avec calcul des remises et des points de fidélité.',
      en: 'A desktop application for a fictional water distribution company. It manages customers (individuals, businesses, public institutions), stock by category and warehouse, and orders, including discounts and loyalty points.',
    },
    features: {
      fr: ['Clients, stocks, commandes', 'Remises et points de fidélité', 'Architecture MVC, vues FXML', 'Tests unitaires JUnit 5 et AssertJ'],
      en: ['Customers, stock, orders', 'Discounts and loyalty points', 'MVC architecture, FXML views', 'Unit tests with JUnit 5 and AssertJ'],
    },
    learned: {
      fr: 'Concevoir une interface à plusieurs écrans, séparer proprement modèle, vue et contrôleur, et vérifier les règles métier (remises, fidélité) avec des tests unitaires.',
      en: 'Designing a multi-screen interface, cleanly separating model, view and controller, and covering business rules (discounts, loyalty) with unit tests.',
    },
  },
  {
    slug: 'site-evenementiel',
    title: { fr: 'Site évènementiel', en: 'Event website' },
    kind: { fr: 'Site vitrine', en: 'Showcase site' },
    context: { fr: 'BUT 1', en: 'Year 1' },
    year: '2024–25',
    team: null,
    stack: ['HTML', 'CSS'],
    tools: ['Git'],
    repo: 'https://github.com/OretrO/Site-HTML-CSS',
    image: siteImg,
    tagline: {
      fr: 'Un site vitrine en HTML et CSS pour une agence évènementielle au thème médiéval.',
      en: 'A showcase site in HTML and CSS for a medieval-themed events agency.',
    },
    summary: {
      fr: 'Le site d’une agence évènementielle fictive, spécialisée dans les fêtes médiévales : une page d’accueil avec les actualités et les lieux proposés, et des pages annexes. Tout est intégré à la main, sans framework.',
      en: 'The website of a fictional events agency specialising in medieval celebrations: a home page with news and available venues, plus secondary pages. Everything is hand-coded, no framework.',
    },
    features: {
      fr: ['Page d’accueil et pages annexes', 'Mises en page Flexbox et Grid', 'Responsive', 'Attention portée à l’accessibilité'],
      en: ['Home page and secondary pages', 'Flexbox and Grid layouts', 'Responsive', 'Attention to accessibility'],
    },
    learned: {
      fr: 'Des bases solides : HTML sémantique, CSS (Flexbox, Grid, animations), responsive design. C’est l’un de mes tout premiers projets web.',
      en: 'Solid foundations: semantic HTML, CSS (Flexbox, Grid, animations), responsive design. One of my very first web projects.',
    },
  },
  {
    slug: 'portfolio',
    title: { fr: 'Ce portfolio', en: 'This portfolio' },
    kind: { fr: 'Site personnel', en: 'Personal site' },
    context: { fr: 'Projet perso', en: 'Personal project' },
    year: '2025–26',
    team: null,
    stack: ['React', 'JavaScript', 'CSS', 'Vite'],
    tools: ['Git', 'GitHub'],
    repo: 'https://github.com/OretrO/Porfolio-nathan',
    image: null,
    cover: 'here',
    tagline: {
      fr: 'Mon premier projet React, appris en autodidacte.',
      en: 'My first React project, self-taught.',
    },
    summary: {
      fr: 'J’ai appris React en construisant ce site. Il est bilingue, suit le thème clair ou sombre de l’appareil, se parcourt au clavier et se déploie sur GitHub Pages. Pas de framework CSS : les styles sont écrits à la main.',
      en: 'I learned React by building this site. It is bilingual, follows the device’s light or dark theme, can be browsed with the keyboard and deploys to GitHub Pages. No CSS framework: every style is hand-written.',
    },
    features: {
      fr: ['Français et anglais', 'Thème clair et sombre', 'Navigation au clavier', 'Déployé sur GitHub Pages'],
      en: ['French and English', 'Light and dark themes', 'Keyboard navigation', 'Deployed on GitHub Pages'],
    },
    learned: {
      fr: 'Les bases de React : composants, props, état, hooks. Et du CSS moderne : Grid, variables, requêtes média.',
      en: 'React fundamentals: components, props, state, hooks. And modern CSS: Grid, custom properties, media queries.',
    },
  },
]

export const findProject = (slug) => projects.find((p) => p.slug === slug)

/** Numéro affiché (01, 02…) d'un projet selon sa position dans la liste. */
export const projectNumber = (project) => String(projects.indexOf(project) + 1).padStart(2, '0')

/** Nombre de projets qui utilisent une techno (stack ou outils). */
export const countProjectsUsing = (tech) =>
  projects.filter((p) => p.stack.includes(tech) || p.tools.includes(tech)).length

export const projectUses = (project, tech) => project.stack.includes(tech) || project.tools.includes(tech)
