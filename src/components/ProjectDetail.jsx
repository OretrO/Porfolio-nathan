export default function ProjectDetail({ project, onBack }) {
  return (
    <section className="project-detail reveal">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <h2>{project.title}</h2>
        <div>
          <button className="muted" onClick={onBack}>← Retour</button>
          <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '0.5rem' }} className="muted">Voir le code</a>
        </div>
      </div>

      {project.image ? (
        <div className="project-image" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <img src={project.image} alt={project.title} style={{ maxWidth: '720px', width: '100%', borderRadius: '8px' }} />
        </div>
      ) : null}

      <div className="project-long">
        <p>{project.longDescription}</p>
      </div>

      {project.skillsWorked && project.skillsWorked.length > 0 ? (
        <div className="project-skills">
          <h3>Compétences travaillées</h3>
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
