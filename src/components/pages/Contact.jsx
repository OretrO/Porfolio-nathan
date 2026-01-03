import { useState } from 'react'
import cvFrPdf from '../../assets/perso/Cv Nathan Plouvin..pdf'
import cvEnPdf from '../../assets/perso/cv anglais (1).pdf'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../translations'

export default function Contact() {
  const { language: appLanguage } = useLanguage()
  const t = (key) => getTranslation(appLanguage, key)

  const [cvLanguage, setCvLanguage] = useState('fr') // 'fr' ou 'en'

  const currentCV = cvLanguage === 'fr' ? cvFrPdf : cvEnPdf
  const downloadName = cvLanguage === 'fr' ? 'CV_Nathan_Plouvin_FR.pdf' : 'CV_Nathan_Plouvin_EN.pdf'

  return (
    <section className="contact reveal">
      <h2>{t('contact.title')}</h2>
      <p>{t('contact.intro')} <a href="mailto:nathanplouvin482@gmail.com">nathanplouvin482@gmail.com</a></p>

      {/* Section CV */}
      <div className="cv-section">
        <h3>{t('contact.cvTitle')}</h3>
        <p>{t('contact.cvDescription')}</p>

        {/* Sélecteur de langue */}
        <div className="cv-language-selector">
          <button
            className={`btn-lang ${cvLanguage === 'fr' ? 'active' : ''}`}
            onClick={() => setCvLanguage('fr')}
          >
            {t('contact.french')}
          </button>
          <button
            className={`btn-lang ${cvLanguage === 'en' ? 'active' : ''}`}
            onClick={() => setCvLanguage('en')}
          >
            {t('contact.english')}
          </button>
        </div>

        <div className="cv-container">
          {/* Visualiseur PDF avec iframe */}
          <div className="cv-viewer">
            <iframe
              key={cvLanguage}
              src={currentCV}
              title={`CV Nathan Plouvin ${cvLanguage === 'fr' ? '(Français)' : '(English)'}`}
              width="100%"
              height="600px"
              style={{ border: 'none', borderRadius: '8px' }}
            />
          </div>

          {/* Bouton de téléchargement */}
          <div className="cv-actions">
            <a
              href={currentCV}
              download={downloadName}
              className="btn-download"
            >
              📥 {t('contact.download')} {cvLanguage === 'fr' ? '(FR)' : '(EN)'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
