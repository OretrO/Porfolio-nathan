import { flushSync } from 'react-dom'

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/*
 * Applique une mise à jour React dans une View Transition (fondu entre l'ancien
 * et le nouvel état) quand le navigateur le permet. Sinon, mise à jour directe.
 */
export function withViewTransition(update) {
  if (!document.startViewTransition || prefersReducedMotion()) {
    update()
    return
  }
  document.startViewTransition(() => flushSync(update))
}
