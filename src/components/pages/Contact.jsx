import cvPdf from '../../assets/perso/Cv Nathan Plouvin..pdf'

export default function Contact() {
  return (
    <section className="contact reveal">
      <h2>Contact</h2>
      <p>Vous pouvez me joindre par email : <a href="mailto:nathanplouvin482@gmail.com">nathanplouvin482@gmail.com</a></p>

      {/* Section CV */}
      <div className="cv-section">
        <h3>Mon CV</h3>
        <p>Consultez ou téléchargez cv pour en savoir plus sur mon parcours.</p>

        <div className="cv-container">
          {/* Visualiseur PDF avec iframe */}
          <div className="cv-viewer">
            <iframe
              src={cvPdf}
              title="CV Nathan Plouvin"
              width="100%"
              height="600px"
              style={{ border: 'none', borderRadius: '8px' }}
            />
          </div>

          {/* Bouton de téléchargement */}
          <div className="cv-actions">
            <a
              href={cvPdf}
              download="CV_Nathan_Plouvin.pdf"
              className="btn-download"
            >
              📥 Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
