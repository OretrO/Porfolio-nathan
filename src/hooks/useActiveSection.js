import { useEffect, useState } from 'react'

/* Renvoie l'id de la section qui traverse le milieu de l'écran (pour la navigation). */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(null)
  const key = ids.join(',')

  useEffect(() => {
    setActive(null)
    if (!key) return
    const elements = key.split(',').map((id) => document.getElementById(id)).filter(Boolean)
    const visible = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        })
        setActive(elements.find((el) => visible.has(el.id))?.id ?? null)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return active
}
