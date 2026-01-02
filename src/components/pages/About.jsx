import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../translations'

export default function About() {
  const { language } = useLanguage()
  const t = (key) => getTranslation(language, key)

  const categories = [
    {
      name: language === 'fr' ? "Développement web" : "Web Development",
      pct: 75,
      skills: [
        { name: 'React', pct: 70},
        { name: 'JavaScript', pct: 75 },
        { name: 'HTML/CSS', pct: 80 },
        { name: 'PHP / Laravel', pct: 80 }
      ],
    },
    {
      name: language === 'fr' ? "Développement d'applications" : "Application Development",
      pct: 75,
      skills: [
        { name: 'Java', pct: 70 },
        { name: 'Python', pct: 80 },
      ],
    },
    {
      name: language === 'fr' ? "Bases de données" : "Databases",
      pct: 70,
      skills: [
        { name: 'SQL / PostgreSQL', pct: 70 },
      ],
    },
    {
      name: language === 'fr' ? "Outils" : "Tools",
      pct: 80,
      skills: [
        { name: 'Git', pct: 85 },
        { name: 'GitLab / GitHub', pct: 75 },
      ],
    },
    {
      name: language === 'fr' ? "Systèmes d'exploitation" : "Operating Systems",
      pct: 70,
      skills: [
        { name: 'Linux', pct: 75 },
        { name: 'Windows', pct: 60 },
      ],
    }
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
      <h2>{t('about.title')}</h2>
      <p>{t('about.intro')}</p>

      <h3>{t('about.skillsTitle')}</h3>
      <div className="category-bars">
        {categories.map(renderCategory)}
      </div>

      {/* Si tu veux garder une section détaillée séparée, elle peut rester ici */}
    </section>
  )
}
