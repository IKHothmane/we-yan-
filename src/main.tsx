import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import './styles.css'

const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const StrategieMarketingPage = lazy(() => import('./pages/StrategieMarketingPage'))
const ContentCreationPage = lazy(() => import('./pages/ContentCreationPage'))
const AdvertisingPage = lazy(() => import('./pages/AdvertisingPage'))
const InfluenceMarketingPage = lazy(() => import('./pages/InfluenceMarketingPage'))
const SeoPage = lazy(() => import('./pages/SeoPage'))
const OfflineMediaPage = lazy(() => import('./pages/OfflineMediaPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const AgencyPage = lazy(() => import('./pages/AgencyPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

// Pages SEO dédiées long tail : Agence Casablanca (indexation 30+ pages)
const AgenceSeoCasablancaPage = lazy(() => import('./pages/AgenceSeoCasablancaPage'))
const CommunityManagementCasablancaPage = lazy(() => import('./pages/CommunityManagementCasablancaPage'))

// Articles Blog We Yan Digital (indexation SEO + contenu unique)
const BlogPrixSiteWebMarocPage = lazy(() => import('./pages/BlogPrixSiteWebMarocPage'))
const BlogSeoVsSeaPage = lazy(() => import('./pages/BlogSeoVsSeaPage'))
const BlogBrandingMarocPage = lazy(() => import('./pages/BlogBrandingMarocPage'))
const BlogMarketingDigitalMarocPage = lazy(() => import('./pages/BlogMarketingDigitalMarocPage'))

// Pages légales obligatoires footer — confiance utilisateur & Search Console
const ConditionsGeneralesPage = lazy(() => import('./pages/ConditionsGeneralesPage'))
const PolitiqueConfidentialitePage = lazy(() => import('./pages/PolitiqueConfidentialitePage'))
const MentionsLegalesPage = lazy(() => import('./pages/MentionsLegalesPage'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/strategie-marketing-rebranding" element={<StrategieMarketingPage />} />
          <Route path="/services/creation-contenu-community-management" element={<ContentCreationPage />} />
          <Route path="/services/publicite-digitale" element={<AdvertisingPage />} />
          <Route path="/services/marketing-influence" element={<InfluenceMarketingPage />} />
          <Route path="/services/seo" element={<SeoPage />} />
          <Route path="/services/media-publicite-offline" element={<OfflineMediaPage />} />
          <Route path="/projets" element={<ProjectsPage />} />
          <Route path="/agence" element={<AgencyPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Pages dédiées SEO long tail (Casablanca) — top requêtes Search Console */}
          <Route path="/agence-seo-casablanca" element={<AgenceSeoCasablancaPage />} />
          <Route path="/community-management-casablanca" element={<CommunityManagementCasablancaPage />} />

          {/* Articles Blog (SEO longue traîne + contenu 600+ mots uniques) */}
          <Route path="/blog/prix-site-web-maroc-2026" element={<BlogPrixSiteWebMarocPage />} />
          <Route path="/blog/seo-vs-sea-maroc" element={<BlogSeoVsSeaPage />} />
          <Route path="/blog/branding-creation-marque-maroc" element={<BlogBrandingMarocPage />} />
          <Route path="/blog/marketing-digital-tendances-maroc-2026" element={<BlogMarketingDigitalMarocPage />} />

          {/* Pages légales obligatoires footer */}
          <Route path="/conditions-generales" element={<ConditionsGeneralesPage />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialitePage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
