import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import ServicesPage from './ServicesPage.tsx'
import ProjectsPage from './ProjectsPage.tsx'
import AgencyPage from './AgencyPage.tsx'
import ContactPage from './ContactPage.tsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projets" element={<ProjectsPage />} />
        <Route path="/agence" element={<AgencyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
