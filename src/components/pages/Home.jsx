import avatar from '../../assets/logos/nathan.png'
import { useLanguage } from '../../contexts/LanguageContext'
import { getTranslation } from '../../translations'

export default function Home({ onNavigate }) {
    const { language } = useLanguage()
    const t = (key) => getTranslation(language, key)

    return (
        <section className="home reveal">
            <div className="hero">
                <img src={avatar} alt="Avatar de Nathan" className="avatar" />

                <h1>{t('home.title')}</h1>

                <h2>{t('home.subtitle')}</h2>

                <div className="hero-actions">
                    <button onClick={() => onNavigate('projects')}>{t('home.viewProjects')}</button>
                    <button onClick={() => onNavigate('about')} className="muted">{t('home.learnMore')}</button>
                </div>
            </div>
        </section>
    )
}
