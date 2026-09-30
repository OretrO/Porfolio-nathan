import { useI18n } from '../../i18n/context'
import { countProjectsUsing } from '../../data/projects'
import { facts, skillGroups } from '../../data/profile'
import SectionHead from '../ui/SectionHead'
import './About.css'

export default function About({ onPickTech }) {
  const { t, pick } = useI18n()

  return (
    <section id="profil" className="section about" aria-labelledby="profil-title" tabIndex={-1}>
      <SectionHead number="02" title={t('about.title')} titleId="profil-title" />

      <div className="about-grid">
        <p className="about-lead">{t('about.lead')}</p>

        <div className="about-block">
          <h3 className="subhead">{t('about.factsTitle')}</h3>
          <dl className="ledger">
            {facts.map((fact) => (
              <div className="ledger-row" key={fact.label.fr}>
                <dt>{pick(fact.label)}</dt>
                <dd>{pick(fact.value)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="about-block">
          <h3 className="subhead">{t('about.skillsTitle')}</h3>
          <dl className="ledger">
            {skillGroups.map((group) => (
              <div className="ledger-row" key={group.label.fr}>
                <dt>{pick(group.label)}</dt>
                <dd>
                  <ul className="skills">
                    {group.items.map((tech) => {
                      const count = countProjectsUsing(tech)
                      return (
                        <li key={tech}>
                          {count > 0 ? (
                            <button
                              type="button"
                              className="skill skill--used"
                              aria-label={t('about.usedIn', { tech, n: count })}
                              onClick={() => onPickTech(tech)}
                            >
                              {tech}
                              <sup aria-hidden="true">{count}</sup>
                            </button>
                          ) : (
                            <span className="skill">{tech}</span>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
          <p className="skills-note mono">{t('about.skillsNote')}</p>
        </div>
      </div>
    </section>
  )
}
