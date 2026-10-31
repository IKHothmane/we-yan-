export const NAV_ITEMS = [
  { path: '/', label: 'Accueil' },
  { path: '/services', label: 'Services' },
  {
    path: '/projets',
    label: 'Réalisations',
    summary: 'Les projets de We Yan Digital seront publiés sur cette page.',
  },
  { path: '/a-propos', label: 'À propos' },
  { path: '/contact', label: 'Contact' },
] as const

export const CONTACT_PATH = '/contact'

export type SectionNavItem = (typeof NAV_ITEMS)[number] & { summary: string }

export const PROJECTS_PATH = '/projets'
export const SERVICES_PATH = '/services'
export const ABOUT_PATH = '/a-propos'

export const SECTION_PAGES: SectionNavItem[] = NAV_ITEMS.filter(
  (item): item is SectionNavItem =>
    'summary' in item &&
    item.path !== PROJECTS_PATH &&
    item.path !== SERVICES_PATH &&
    item.path !== ABOUT_PATH &&
    item.path !== CONTACT_PATH,
)
