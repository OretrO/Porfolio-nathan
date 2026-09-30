# Portfolio Nathan Plouvin

Portfolio personnel réalisé avec React et Vite, publié sur GitHub Pages :
<https://oretro.github.io/Porfolio-nathan/>

## Fonctionnalités

- Une seule page d'accueil (projets, profil, contact) et une page par projet
- Adresses partageables (`#/projets/cinehub`, `#/contact`…), bouton « retour » du navigateur fonctionnel
- Index des projets filtrable par techno, avec aperçu au survol
- Français / anglais (langue du navigateur par défaut)
- Thème clair / sombre (celui de l'appareil par défaut)
- Navigation au clavier : ← → entre les projets, Échap pour revenir à la liste
- Polices auto-hébergées (Archivo, IBM Plex Mono) : aucun appel à un service externe

## Pré-requis

- Node.js (version LTS recommandée)
- npm

## Installation et lancement

```sh
npm install      # installer les dépendances
npm run dev      # serveur de développement
npm run build    # version de production (dossier dist/)
npm run deploy   # publier sur GitHub Pages
```

> Le script `deploy` utilise `gh-pages` et le champ `homepage` de package.json.

## Modifier le contenu

| Quoi | Où |
| --- | --- |
| Projets (textes FR/EN, technos, liens, captures) | `src/data/projects.js` |
| Profil, compétences, liens, CV | `src/data/profile.js` |
| Textes de l'interface | `src/i18n/translations.js` |
| Couleurs, polices, espacements | variables en haut de `src/index.css` |
| Captures d'écran des projets | `src/assets/projects/` |
| CV (PDF) | `src/assets/perso/` |

Pour ajouter un projet : importer sa capture en haut de `src/data/projects.js`, puis ajouter
un objet à la liste (même forme que les autres). Son numéro, sa page et les compteurs de la
section « Outils et langages » se mettent à jour tout seuls.

## Structure

```text
src/
├── data/          contenu (projets, profil)
├── i18n/          langue et textes de l'interface
├── theme/         thème clair / sombre
├── router/        routage par ancre (#/…)
├── hooks/         petits hooks réutilisables
├── components/
│   ├── layout/    en-tête, pied de page
│   ├── pages/     accueil, page projet
│   ├── sections/  hero, projets, profil, contact
│   ├── projects/  visuels des projets
│   └── ui/        boutons, liens, flèches…
├── App.jsx
└── index.css      variables et styles de base
```

## Contact

<nathanplouvin482@gmail.com>
