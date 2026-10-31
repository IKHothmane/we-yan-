import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import ScrollToTop from './components/ScrollToTop'
import { ABOUT_PATH, CONTACT_PATH, PROJECTS_PATH, SECTION_PAGES, SERVICES_PATH } from './constants/navigation'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import RealisationsPage from './pages/RealisationsPage'
import ServicesPage from './pages/ServicesPage'
import SectionPage from './pages/SectionPage'
import './styles.css'

function withOptionalSlash(path: string) {
  return path === '/' ? [path] : [path, `${path}/`]
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      {SECTION_PAGES.flatMap((page) =>
        withOptionalSlash(page.path).map((path) => (
          <Route
            key={path}
            path={path}
            element={<SectionPage title={page.label} summary={page.summary} />}
          />
        )),
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
  </BrowserRouter>,
)
