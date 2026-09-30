import { useEffect } from 'react'
import { useI18n } from '../../i18n/context'
import { useRouter } from '../../router/context'
import { projectPath } from '../../router/routes'
import { findProject, projectNumber, projects } from '../../data/projects'
import ProjectVisual from '../projects/ProjectVisual'
import Link from '../ui/Link'
import Arrow from '../ui/Arrow'
import './ProjectPage.css'

const pad = (n) => String(n).padStart(2, '0')

function NotFound() {
  const { t } = useI18n()
  return (
    <div className="project-page project-missing">
      <p className="project-tagline">{t('project.notFound')}</p>
      <Link to="/projets" className="button">
        <Arrow dir="left" /> {t('project.back')}
      </Link>
    </div>
  )
}

export default function ProjectPage({ slug }) {
  const { t, pick } = useI18n()
  const { navigate } = useRouter()
  const project = findProject(slug)
  const index = projects.indexOf(project)
  const prev = project && projects[(index - 1 + projects.length) % projects.length]
  const next = project && projects[(index + 1) % projects.length]

  // ← → pour changer de projet, Échap pour revenir à la liste.
  useEffect(() => {
    if (!project) return
    const onKeyDown = (event) => {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
      if (event.target.closest?.('input, textarea, select, [contenteditable="true"]')) return
      if (document.documentElement.classList.contains('is-locked')) return
      if (event.key === 'ArrowLeft') navigate(projectPath(prev.slug))
      else if (event.key === 'ArrowRight') navigate(projectPath(next.slug))
      else if (event.key === 'Escape') navigate('/projets')
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [project, prev, next, navigate])

  if (!project) return <NotFound />

  const title = pick(project.title)
  const related = project.related && findProject(project.related)
  const cartel = [
    [t('project.year'), project.year],
    [t('project.context'), pick(project.context)],
    project.team && [t('project.team'), pick(project.team)],
    [t('project.stack'), project.stack.join(', ')],
    [t('project.tools'), project.tools.join(', ')],
  ].filter(Boolean)

  return (
    <article className="project-page">
      <nav className="project-bar mono" aria-label={t('project.back')}>
        <Link to="/projets" className="project-back">
          <Arrow dir="left" /> {t('project.back')}
        </Link>
        <span className="project-position">
          <span className="visually-hidden">{t('project.position', { n: index + 1, total: projects.length })}</span>
          <span aria-hidden="true">
            {projectNumber(project)} / {pad(projects.length)}
          </span>
        </span>
        <span className="project-steps">
          <Link to={projectPath(prev.slug)} aria-label={`${t('project.prev')} : ${pick(prev.title)}`} title={pick(prev.title)}>
            <Arrow dir="left" />
          </Link>
          <Link to={projectPath(next.slug)} aria-label={`${t('project.next')} : ${pick(next.title)}`} title={pick(next.title)}>
            <Arrow dir="right" />
          </Link>
        </span>
      </nav>

      <header className="project-head">
        <p className="project-kicker mono">
          {pick(project.kind)} <span aria-hidden="true">—</span> {pick(project.context)}{' '}
          <span aria-hidden="true">—</span> {project.year}
        </p>
        <h1 className="project-title" tabIndex={-1} style={{ viewTransitionName: `title-${project.slug}` }}>
          {title}
        </h1>
        <p className="project-tagline">{pick(project.tagline)}</p>
      </header>

      <figure className="project-media">
        {project.image ? (
          <a href={project.image} target="_blank" rel="noopener" className="project-shot" title={t('project.enlarge')}>
            <img
              src={project.image}
              alt={t('project.screenshot', { title })}
              decoding="async"
              style={{ viewTransitionName: 'project-media' }}
            />
          </a>
        ) : (
          <div className="project-shot project-shot--cover" style={{ viewTransitionName: 'project-media' }}>
            <ProjectVisual project={project} />
          </div>
        )}
        {project.image && (
          <figcaption className="mono">
            {t('project.screenshot', { title })}. <span className="project-enlarge">{t('project.enlarge')} <Arrow dir="out" /></span>
          </figcaption>
        )}
      </figure>

      <div className="project-body">
        <aside className="cartel" aria-labelledby="cartel-title">
          <p className="cartel-title" id="cartel-title">
            {title}
          </p>
          <dl>
            {cartel.map(([label, value]) => (
              <div className="cartel-row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <a className="button button--solid cartel-code" href={project.repo} target="_blank" rel="noopener noreferrer">
            {t('project.code')} <Arrow dir="out" />
          </a>
        </aside>

        <div className="project-text">
          <section>
            <h2 className="subhead">{t('project.about')}</h2>
            <p className="project-summary">{pick(project.summary)}</p>
          </section>
          <section>
            <h2 className="subhead">{t('project.features')}</h2>
            <ul className="feature-list">
              {pick(project.features).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="subhead">{t('project.learned')}</h2>
            <p className="project-learned">{pick(project.learned)}</p>
          </section>
          {related && (
            <p className="project-related">
              <span className="subhead">{t('project.related')}</span>{' '}
              <Link to={projectPath(related.slug)}>
                {pick(related.title)} <Arrow />
              </Link>
            </p>
          )}
          <p className="project-keys mono">{t('project.keys')}</p>
        </div>
      </div>

      <Link to={projectPath(next.slug)} className="next-project">
        <span className="next-label mono">
          {t('project.next')} <span aria-hidden="true">— {projectNumber(next)} / {pad(projects.length)}</span>
        </span>
        <span className="next-title">
          {pick(next.title)} <Arrow />
        </span>
      </Link>
    </article>
  )
}
