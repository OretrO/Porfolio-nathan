// filepath: c:\Users\natha\OneDrive\Documents\PorfolioReact\src\components\Projects.jsx
export default function Projects() {
  const projects = [
    { id: 1, title: 'Projet A', description: 'creation d une application en java pour la gestion d un stock en équipe.' },
    { id: 2, title: 'Projet B', description: 'Une courte description du projet B.' },
    { id: 3, title: 'Projet C', description: 'Une courte description du projet C.' },
  ]

  return (
    <section className="projects">
      <h2>Mes projets personnelles et d'etude </h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.id} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-actions">
              <a>Voir</a>
              <button className="muted">Code</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

