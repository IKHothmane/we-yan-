import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import ScrollToTop from './components/ScrollToTop'
import {
  ABOUT_PATH,
  CONTACT_PATH,
  PROJECTS_PATH,
  SECTION_PAGES,
  SERVICES_PATH,
} from './constants/navigation'
import HomePage from './pages/HomePage'
import './styles.css'

// Seule la page d'accueil est dans le bundle initial ; les autres pages sont chargées à la demande.
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const RealisationsPage = lazy(() => import('./pages/RealisationsPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const SectionPage = lazy(() => import('./pages/SectionPage'))

function withOptionalSlash(path: string) {
  return path === '/' ? [path] : [path, `${path}/`]
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {SECTION_PAGES.flatMap((page) =>
          withOptionalSlash(page.path).map((path) => (
            <Route
              key={path}
              path={path}
              element={<SectionPage title={page.label} summary={page.summary} />}
            />
          ))
        )}
        {withOptionalSlash(SERVICES_PATH).map((path) => (
          <Route key={path} path={path} element={<ServicesPage />} />
        ))}
        {withOptionalSlash(ABOUT_PATH).map((path) => (
          <Route key={path} path={path} element={<AboutPage />} />
        ))}
        {withOptionalSlash('/agence').map((path) => (
          <Route key={path} path={path} element={<AboutPage />} />
        ))}
        {withOptionalSlash(PROJECTS_PATH).map((path) => (
          <Route key={path} path={path} element={<RealisationsPage />} />
        ))}
        {withOptionalSlash(CONTACT_PATH).map((path) => (
          <Route key={path} path={path} element={<ContactPage />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)
