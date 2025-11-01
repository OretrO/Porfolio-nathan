# Portfolio Nathan Plouvin

Petit portfolio personnel réalisé avec React + Vite pour présenter des projets et compétences.

## Fonctionnalités
- Thème sombre / clair avec sauvegarde dans localStorage
- Sections : Accueil, Projets, À propos, Contact
- Barres de compétences animées dans la section « À propos »
- Page de détail pour chaque projet (description longue, compétences utilisées)

## Pré-requis
- Node.js (version LTS recommandée)
- npm

## Installation et lancement
1. Installer les dépendances :

   npm install

2. Lancer le serveur de développement :

   npm run dev

3. Construire pour la production :

   npm run build

4. Déployer (gh-pages) :

   npm run deploy

> Le script `deploy` utilise `gh-pages` et le champ `homepage` dans package.json.

## Modifier les projets / compétences
- Liste des projets : `src/components/Projects.jsx` (ajouter/éditer les objets projets)
- Section compétences : `src/components/About.jsx`
- Page de détail : `src/components/ProjectDetail.jsx`

## Structure importante
- src/
  - components/ (composants React)
  - assets/ (images)
  - App.jsx, App.css (configuration globale)

## Contact
nathanplouvin482@gmail.com

