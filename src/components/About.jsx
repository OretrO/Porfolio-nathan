// filepath: c:\Users\natha\OneDrive\Documents\PorfolioReact\src\components\About.jsx
export default function About() {
  const categories = [
    {
      name: "Développement web",
      pct: 75,
      skills: [
        { name: 'React', pct: 70},
        { name: 'JavaScript', pct: 75 },
        { name: 'HTML/CSS', pct: 80 },
      ],
    },
    {
      name: "Développement d'applications",
      pct: 75,
      skills: [
        { name: 'Java', pct: 70 },
        { name: 'Python', pct: 80 },
      ],
    },
    {
      name: "Bases de données",
      pct: 70,
      skills: [
        { name: 'SQL / PostgreSQL', pct: 70 },
      ],
    },
    {
      name: "Outils",
      pct: 80,
      skills: [
        { name: 'Git', pct: 85 },
        { name: 'Gitlab / Github', pct: 75 },
      ],
    },
  ]

  const renderCategory = (c) => (
    <div key={c.name} className="category-block reveal">
      <div className="category" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={c.pct}>
        <div className="category-meta">
          <span className="category-name">{c.name}</span>
          <span className="category-pct">{c.pct}%</span>
        </div>
        <div className="category-track" aria-hidden>
          <div className="category-fill" style={{ ['--pct']: `${c.pct}%` }} />
        </div>
      </div>

      <div className="category-skills">
        {c.skills.map((s) => (
          <div key={s.name} className="skill-mini">
            <div className="skill-mini-meta">
              <span className="skill-name">{s.name}</span>
              <span className="skill-pct">{s.pct}%</span>
            </div>
             <div className="skill-mini-track" aria-hidden>
               <div className="skill-mini-fill" style={{ ['--pct']: `${s.pct}%` }} />
             </div>
           </div>
         ))}
       </div>
     </div>
   )

  return (
    <section className="about reveal">
      <h2>À propos de moi</h2>
      <p>Je m'appelle Nathan, je suis étudiant en BUT Informatique à l'IUT de Lens.</p>

      <h3>Compétences globales</h3>
      <div className="category-bars">
        {categories.map(renderCategory)}
      </div>

      {/* Si tu veux garder une section détaillée séparée, elle peut rester ici */}
    </section>
  )
}
