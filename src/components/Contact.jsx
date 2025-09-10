// filepath: c:\Users\natha\OneDrive\Documents\PorfolioReact\src\components\Contact.jsx
export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>Vous pouvez me joindre par email : <a href="mailto:contact@example.com">contact@example.com</a></p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Nom
          <input type="text" name="name" />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  )
}

