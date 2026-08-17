import { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import ScrollToTop from './components/ScrollToTop'
import ChunkErrorBoundary from './components/ChunkErrorBoundary'
import { lazyWithRetry } from './lib/lazyWithRetry'
import { validateInternalLinks } from './lib/internalLinking'
import HomePage from './pages/HomePage'
import './styles.css'

if (import.meta.env.DEV) {
  validateInternalLinks()
}

// Page home (synchrone pour LCP le + rapide possible, pas lazy)
const ServicesPage = lazyWithRetry(() => import('./pages/ServicesPage'))
const StrategieMarketingPage = lazyWithRetry(() => import('./pages/StrategieMarketingPage'))
const ContentCreationPage = lazyWithRetry(() => import('./pages/ContentCreationPage'))
const AdvertisingPage = lazyWithRetry(() => import('./pages/AdvertisingPage'))
const InfluenceMarketingPage = lazyWithRetry(() => import('./pages/InfluenceMarketingPage'))
const SeoPage = lazyWithRetry(() => import('./pages/SeoPage'))
const OfflineMediaPage = lazyWithRetry(() => import('./pages/OfflineMediaPage'))
const ProjectsPage = lazyWithRetry(() => import('./pages/ProjectsPage'))
const AgencyPage = lazyWithRetry(() => import('./pages/AgencyPage'))
const ContactPage = lazyWithRetry(() => import('./pages/ContactPage'))

// Pages SEO dédiées long tail (Casablanca)
const AgenceSeoCasablancaPage = lazyWithRetry(() => import('./pages/AgenceSeoCasablancaPage'))
const CommunityManagementCasablancaPage = lazyWithRetry(() => import('./pages/CommunityManagementCasablancaPage'))

// Articles Blog
const BlogPrixSiteWebMarocPage = lazyWithRetry(() => import('./pages/BlogPrixSiteWebMarocPage'))
const BlogPrixSeoCasablancaPage = lazyWithRetry(() => import('./pages/BlogPrixSeoCasablancaPage'))
const BlogSeoVsSeaPage = lazyWithRetry(() => import('./pages/BlogSeoVsSeaPage'))
const BlogBrandingMarocPage = lazyWithRetry(() => import('./pages/BlogBrandingMarocPage'))
const BlogMarketingDigitalMarocPage = lazyWithRetry(() => import('./pages/BlogMarketingDigitalMarocPage'))

// Pages légales
const ConditionsGeneralesPage = lazyWithRetry(() => import('./pages/ConditionsGeneralesPage'))
const PolitiqueConfidentialitePage = lazyWithRetry(() => import('./pages/PolitiqueConfidentialitePage'))
const MentionsLegalesPage = lazyWithRetry(() => import('./pages/MentionsLegalesPage'))
const DemandesPage = lazyWithRetry(() => import('./pages/DemandesPage'))
const MerciPage = lazyWithRetry(() => import('./pages/MerciPage'))

const APP_PAGE_ROUTES = [
  { path: '/', element: <HomePage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/services/strategie-marketing-rebranding', element: <StrategieMarketingPage /> },
  { path: '/services/creation-contenu-community-management', element: <ContentCreationPage /> },
  { path: '/services/publicite-digitale', element: <AdvertisingPage /> },
  { path: '/services/marketing-influence', element: <InfluenceMarketingPage /> },
  { path: '/services/seo', element: <SeoPage /> },
  { path: '/services/media-publicite-offline', element: <OfflineMediaPage /> },
  { path: '/projets', element: <ProjectsPage /> },
  { path: '/agence', element: <AgencyPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/agence-seo-casablanca', element: <AgenceSeoCasablancaPage /> },
  { path: '/community-management-casablanca', element: <CommunityManagementCasablancaPage /> },
  { path: '/blog/prix-site-web-maroc-2026', element: <BlogPrixSiteWebMarocPage /> },
  { path: '/blog/prix-seo-casablanca-2026', element: <BlogPrixSeoCasablancaPage /> },
  { path: '/blog/seo-vs-sea-maroc', element: <BlogSeoVsSeaPage /> },
  { path: '/blog/branding-creation-marque-maroc', element: <BlogBrandingMarocPage /> },
  { path: '/blog/marketing-digital-tendances-maroc-2026', element: <BlogMarketingDigitalMarocPage /> },
  { path: '/conditions-generales', element: <ConditionsGeneralesPage /> },
  { path: '/politique-de-confidentialite', element: <PolitiqueConfidentialitePage /> },
  { path: '/mentions-legales', element: <MentionsLegalesPage /> },
  { path: '/demandes', element: <DemandesPage /> },
  { path: '/merci', element: <MerciPage /> },
]

const AppSuspenseFallback = () => (
  <div aria-hidden="true" className="min-h-[100svh] w-full bg-slate-50 animate-pulse">
    {/* Top bar skeleton Navbar */}
    <div className="sticky top-0 z-[70] bg-white/80 backdrop-blur-lg border-b border-slate-100">
      <div className="mx-auto w-full max-w-[1200px] px-[clamp(1rem,4vw,2rem)] h-[76px] flex items-center justify-between">
        <div className="h-10 w-[clamp(8rem,20vw,12rem)] rounded-2xl bg-slate-200/80" />
        <div className="hidden md:flex items-center gap-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-3.5 w-20 rounded-full bg-slate-200/80" />
          ))}
        </div>
        <div className="h-10 w-32 rounded-full bg-indigo-100/80" />
      </div>
    </div>
    {/* Hero skeleton */}
    <div className="w-full max-w-[1200px] mx-auto px-[clamp(1rem,4vw,2rem)] pt-[clamp(3rem,8vw,6rem)] pb-[clamp(4rem,10vw,8rem)] space-y-7">
      <div className="h-3.5 w-48 rounded-full bg-indigo-100" />
      <div className="h-[clamp(2.5rem,7vw,4.5rem)] w-11/12 max-w-3xl rounded-2xl bg-slate-200/80" />
      <div className="h-5 w-10/12 max-w-2xl rounded-full bg-slate-200/70" />
      <div className="h-5 w-8/12 max-w-xl rounded-full bg-slate-200/70" />
      <div className="flex flex-wrap gap-4 pt-3">
        <div className="h-14 w-56 rounded-full bg-indigo-100" />
        <div className="h-14 w-44 rounded-full bg-slate-200/70" />
      </div>
    </div>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChunkErrorBoundary>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<AppSuspenseFallback />}>
        <Routes>
          {APP_PAGE_ROUTES.flatMap(({ path, element }) =>
            path === '/'
              ? [<Route key={path} path={path} element={element} />]
              : [
                  <Route key={path} path={path} element={element} />,
                  <Route key={`${path}/`} path={`${path}/`} element={element} />,
                ],
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </ChunkErrorBoundary>,
)
