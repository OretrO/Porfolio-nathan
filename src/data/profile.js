import cvFr from '../assets/perso/cv-nathan-plouvin-fr.pdf'
import cvEn from '../assets/perso/cv-nathan-plouvin-en.pdf'

export const person = {
  name: 'Nathan Plouvin',
  email: 'nathanplouvin482@gmail.com',
  city: 'Hénin-Beaumont',
  timeZone: 'Europe/Paris',
  links: [
    { label: 'GitHub', href: 'https://github.com/OretrO' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nathan-plouvin-7aaab1386/' },
  ],
}

export const cvs = {
  fr: { href: cvFr, fileName: 'CV_Nathan_Plouvin_FR.pdf' },
  en: { href: cvEn, fileName: 'CV_Nathan_Plouvin_EN.pdf' },
}

/* Fiche d'identité de la section « Profil ». */
export const facts = [
  {
    label: { fr: 'Formation', en: 'Studies' },
    value: {
      fr: 'BUT Informatique à l’IUT de Lens, Université d’Artois, depuis 2024',
      en: 'Bachelor in Computer Science (BUT) at IUT de Lens, Université d’Artois, since 2024',
    },
  },
  {
    label: { fr: 'Avant', en: 'Before' },
    value: {
      fr: 'Bac spécialités mathématiques et NSI, 2024',
      en: 'French baccalauréat, maths and computer science majors, 2024',
    },
  },
  {
    label: { fr: 'Basé à', en: 'Based in' },
    value: {
      fr: 'Hénin-Beaumont, Pas-de-Calais. Permis B, véhiculé',
      en: 'Hénin-Beaumont, northern France. Driving licence, own car',
    },
  },
  {
    label: { fr: 'Langues', en: 'Languages' },
    value: {
      fr: 'Français (langue maternelle), anglais intermédiaire et anglais technique',
      en: 'French (native), intermediate English, comfortable with technical English',
    },
  },
  {
    label: { fr: 'Hors écran', en: 'Off screen' },
    value: {
      fr: 'Assistant coach de handball bénévole au club de Billy-Montigny, avec une équipe de dix enfants de moins de 11 ans. Méditation, veille techno.',
      en: 'Volunteer assistant handball coach at the Billy-Montigny club, with a team of ten under-11s. Meditation, keeping up with tech.',
    },
  },
]

/*
 * Outils et langages. Le nombre de projets qui utilisent chaque entrée
 * est calculé à partir de src/data/projects.js.
 */
export const skillGroups = [
  { label: { fr: 'Web', en: 'Web' }, items: ['React', 'JavaScript', 'PHP', 'Laravel', 'Blade', 'HTML', 'CSS', 'Tailwind CSS'] },
  { label: { fr: 'Logiciel', en: 'Software' }, items: ['Java', 'JavaFX', 'JUnit', 'Python'] },
  { label: { fr: 'Données', en: 'Data' }, items: ['SQLite', 'SQL', 'PostgreSQL', 'MySQL', 'MusicXML'] },
  { label: { fr: 'Outils', en: 'Tools' }, items: ['Git', 'GitLab', 'GitHub', 'Gradle', 'Vite'] },
  { label: { fr: 'Systèmes', en: 'Systems' }, items: ['Linux', 'Windows'] },
]

/* Filtres rapides affichés au-dessus de l'index des projets. */
export const quickFilters = ['Java', 'JavaFX', 'Laravel', 'PHP', 'JavaScript', 'React', 'CSS']
