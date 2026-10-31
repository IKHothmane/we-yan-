import { Link } from 'react-router-dom'
import SiteLayout from '../components/layout/SiteLayout'

export default function NotFoundPage() {
  return (
    <SiteLayout>
      <section className="section-page">
        <h1>Page introuvable</h1>
        <p>Cette adresse ne correspond à aucune page du site.</p>
        <Link to="/" className="hero-button">
          Retour à l’accueil
        </Link>
      </section>
    </SiteLayout>
  )
}
