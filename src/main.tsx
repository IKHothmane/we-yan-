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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
