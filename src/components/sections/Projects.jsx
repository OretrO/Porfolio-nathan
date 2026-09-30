import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../../i18n/context'
import { useRouter } from '../../router/context'
import { projectPath } from '../../router/routes'
import { countProjectsUsing, projectNumber, projects, projectUses } from '../../data/projects'
import { quickFilters } from '../../data/profile'
import useMediaQuery from '../../hooks/useMediaQuery'
import ProjectVisual from '../projects/ProjectVisual'
import SectionHead from '../ui/SectionHead'
import Arrow from '../ui/Arrow'
import './Projects.css'

const isPlainClick = (event) =>
  event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey

/*
 * Aperçu qui suit le curseur au survol des lignes (écrans avec souris uniquement).
 * La position est animée hors de React, directement sur l'élément.
 */
function HoverPreview({ project, active }) {
  const ref = useRef(null)
  const activeRef = useRef(active)

  useEffect(() => {
    activeRef.current = active
  }, [active])

  useEffect(() => {
    const element = ref.current
    const state = { x: 0, y: 0, tx: 0, ty: 0, side: 32, placed: false, frame: 0 }

    const tick = () => {
      const { innerWidth, innerHeight } = window
      const width = element.offsetWidth
      const height = element.offsetHeight
      state.x += (state.tx - state.x) * 0.18
      state.y += (state.ty - state.y) * 0.18
      const sideTarget = state.tx + 32 + width > innerWidth - 16 ? -(32 + width) : 32
      state.side += (sideTarget - state.side) * 0.18
      const left = state.x + state.side
      const top = Math.min(Math.max(state.y - height / 2, 72), innerHeight - height - 16)
      const tilt = Math.max(-5, Math.min(5, (state.tx - state.x) * 0.04))
      element.style.transform = `translate3d(${left}px, ${top}px, 0) rotate(${tilt}deg)`
      const moving = Math.abs(state.tx - state.x) + Math.abs(state.ty - state.y) + Math.abs(sideTarget - state.side) > 0.4
      state.frame = moving ? requestAnimationFrame(tick) : 0
    }

    const onPointerMove = (event) => {
      state.tx = event.clientX
      state.ty = event.clientY
      if (!state.placed || !activeRef.current) {
        // première apparition : pas d'animation depuis l'ancienne position
        state.x = state.tx
        state.y = state.ty
        state.placed = true
      }
      if (!state.frame) state.frame = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      cancelAnimationFrame(state.frame)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="preview"
      data-active={active && Boolean(project)}
      style={active ? { viewTransitionName: 'project-media' } : undefined}
      aria-hidden="true"
    >
      {project && <ProjectVisual project={project} className="preview-visual" loading="eager" />}
    </div>
  )
}

export default function Projects({ filter, onFilterChange }) {
  const { t, pick } = useI18n()
  const { openProject } = useRouter()
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)')
  const [hovered, setHovered] = useState(null)
  const [previewActive, setPreviewActive] = useState(false)

  const visible = filter ? projects.filter((p) => projectUses(p, filter)) : projects
  const chips = filter && !quickFilters.includes(filter) ? [...quickFilters, filter] : quickFilters

  // Précharge les captures pour que l'aperçu s'affiche sans attendre.
  useEffect(() => {
    if (!canHover) return
    const id = setTimeout(() => {
      projects.forEach((p) => {
        if (p.image) new Image().src = p.image
      })
    }, 1200)
    return () => clearTimeout(id)
  }, [canHover])

  const onRowClick = (event, slug) => {
    if (!isPlainClick(event)) return
    event.preventDefault()
    openProject(slug)
  }

  return (
    <section id="projets" className="section projects" aria-labelledby="projets-title" tabIndex={-1}>
      <SectionHead
        number="01"
        title={t('projects.title')}
        titleId="projets-title"
        aside={t('projects.summary', { n: projects.length })}
      />

      <div className="filters">
        <p className="filters-label mono" id="filters-label">
          {t('projects.filterLabel')}
        </p>
        <div className="filters-list" role="group" aria-labelledby="filters-label">
          <button type="button" className="chip" aria-pressed={!filter} onClick={() => onFilterChange(null)}>
            {t('projects.all')}
            <sup>{projects.length}</sup>
          </button>
          {chips.map((tech) => (
            <button
              type="button"
              key={tech}
              className="chip"
              aria-pressed={filter === tech}
              onClick={() => onFilterChange(filter === tech ? null : tech)}
            >
              {tech}
              <sup>{countProjectsUsing(tech)}</sup>
            </button>
          ))}
        </div>
        <p className="filters-result mono" aria-live="polite">
          {filter
            ? t('projects.result', { n: visible.length, tech: filter })
            : t('projects.resultAll', { n: visible.length })}
        </p>
      </div>

      <ol
        className="index"
        // activé au premier vrai mouvement : sans position connue, l'aperçu surgirait dans un coin
        onPointerMove={(event) => event.pointerType === 'mouse' && setPreviewActive(true)}
        onPointerLeave={() => setPreviewActive(false)}
      >
        {visible.map((project) => {
          const number = projectNumber(project)
          const title = pick(project.title)
          return (
            <li key={project.slug} className="index-row" value={Number(number)} data-project-row={project.slug}>
              <a
                className="index-link"
                href={`#${projectPath(project.slug)}`}
                onClick={(event) => onRowClick(event, project.slug)}
                onPointerEnter={() => setHovered(project)}
              >
                <span className="index-num mono">{number}</span>
                <span className="index-title" style={{ viewTransitionName: `title-${project.slug}` }}>
                  {title}
                </span>
                <span className="index-meta">
                  <span className="index-kind mono">{pick(project.kind)}</span>
                  <span className="index-stack mono">{project.stack.join(', ')}</span>
                  <span className="index-year mono">{project.year}</span>
                </span>
                <span className="index-thumb" aria-hidden="true">
                  <ProjectVisual project={project} className="index-thumb-visual" />
                </span>
                <Arrow className="index-arrow" />
              </a>
            </li>
          )
        })}
      </ol>

      {canHover && <HoverPreview project={hovered} active={previewActive} />}
    </section>
  )
}
