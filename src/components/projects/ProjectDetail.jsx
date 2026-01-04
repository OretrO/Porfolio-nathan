import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../translations'

export default function ProjectDetail({ project, onBack }) {
  const { language } = useLanguage()
  const t = (key) => getTranslation(language, key)

  return (
    <section className="project-detail reveal">
      <div className="project-header">
        <h2>{project.title}</h2>
        <div className="project-header-actions">
          <button className="muted" onClick={onBack}>{t('projects.backToProjects')}</button>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="muted">{t('projects.viewCode')}</a>
        </div>
      </div>

      {project.image ? (
        <div className="project-image" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ maxWidth: '720px', width: '100%', borderRadius: '8px' }}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}

      <div className="project-long">
        <p>{project.longDescription}</p>
      </div>

      {project.skillsDescription ? (
        <div className="project-skills-description" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <h3>{language === 'fr' ? 'Ce que j\'ai appris' : 'What I learned'}</h3>
          <p>{project.skillsDescription}</p>
        </div>
      ) : null}

      {project.skillsWorked && project.skillsWorked.length > 0 ? (
        <div className="project-skills">
          <h3>{t('projects.technologies')}</h3>
          <div className="skill-badges">
            {project.skillsWorked.map((s) => (
              <span key={s.name} className="skill-badge">{s.name}</span>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}
