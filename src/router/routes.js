import { prefersReducedMotion } from '../utils/viewTransition'

/*
 * Routage par ancre (#/…) : fonctionne sur GitHub Pages sans configuration serveur.
 *   #/                  accueil
 *   #/projets           accueil, section Projets (idem #/profil, #/contact)
 *   #/projets/<slug>    page d'un projet
 */
export const SECTIONS = ['projets', 'profil', 'contact']

export const projectPath = (slug) => `/projets/${slug}`

export function parseHash(hash) {
  const path = decodeURIComponent(hash.replace(/^#/, '')) || '/'
  const project = path.match(/^\/projets\/([\w-]+)\/?$/)
  if (project) return { name: 'project', slug: project[1], section: null }
  const section = path.match(/^\/([\w-]+)\/?$/)
  if (section && SECTIONS.includes(section[1])) return { name: 'home', slug: null, section: section[1] }
  return { name: 'home', slug: null, section: null }
}

const behavior = (smooth) => (smooth && !prefersReducedMotion() ? 'smooth' : 'auto')

export function scrollToSection(id, { smooth = true } = {}) {
  const target = id ? document.getElementById(id) : null
  if (target) {
    target.scrollIntoView({ behavior: behavior(smooth), block: 'start' })
    target.focus({ preventScroll: true })
  } else {
    window.scrollTo({ top: 0, behavior: behavior(smooth) })
  }
}

/* Au retour d'une page projet : recentre la ligne du projet consulté et la signale. */
export function returnToProjectRow(slug) {
  const row = document.querySelector(`[data-project-row="${slug}"]`)
  if (!row) return false
  row.scrollIntoView({ block: 'center' })
  row.querySelector('a')?.focus({ preventScroll: true })
  row.classList.remove('is-returning')
  void row.offsetWidth // relance l'animation si elle vient déjà d'être jouée
  row.classList.add('is-returning')
  return true
}
