export type NavItem = {
  path: string
  label: string
  /** Présent uniquement pour les pages « section » génériques (sans page dédiée). */
  summary?: string
}

export const HOME_PATH = '/'
export const SERVICES_PATH = '/services'
export const PROJECTS_PATH = '/projets'
export const ABOUT_PATH = '/a-propos'
export const CONTACT_PATH = '/contact'

export const NAV_ITEMS: readonly NavItem[] = [
  { path: HOME_PATH, label: 'Accueil' },
  { path: SERVICES_PATH, label: 'Services' },
  { path: PROJECTS_PATH, label: 'Réalisations' },
  { path: ABOUT_PATH, label: 'À propos' },
  { path: CONTACT_PATH, label: 'Contact' },
]

/** Pages génériques rendues par SectionPage (aucune pour l'instant : toutes ont une page dédiée). */
export const SECTION_PAGES: readonly (NavItem & { summary: string })[] = []
