export const SERVICES = [
  {
    id: 'strategie',
    label: 'Stratégie marketing & rebranding',
    short: 'Stratégie & rebranding',
    hint: 'Positionnement, audit et identité de marque',
  },
  {
    id: 'community',
    label: 'Création de contenu & Community Management',
    short: 'Contenu & community',
    hint: 'Posts, reels, animation des réseaux',
  },
  {
    id: 'publicite',
    label: 'Publicité digitale (Meta Ads & Google Ads)',
    short: 'Publicité digitale',
    hint: 'Meta Ads, Google Ads et optimisation',
  },
  {
    id: 'seo',
    label: 'Référencement naturel (SEO)',
    short: 'Référencement SEO',
    hint: 'Visibilité Google et trafic qualifié',
  },
  {
    id: 'influence',
    label: 'Marketing d’influence',
    short: 'Marketing d’influence',
    hint: 'Créateurs, collabs et amplification',
  },
  {
    id: 'offline',
    label: 'Média & publicité offline',
    short: 'Média offline',
    hint: 'Affichage, print et événementiel',
  },
  {
    id: 'site-web',
    label: 'Création de site web',
    short: 'Site web',
    hint: 'Vitrine, e-commerce ou sur-mesure',
  },
  {
    id: 'autre',
    label: 'Autre demande',
    short: 'Autre demande',
    hint: 'Parlez-nous librement de votre besoin',
  },
] as const

export type Service = (typeof SERVICES)[number]

/** Retrouve le libellé d'un service à partir de son id ou de son libellé (paramètre d'URL). */
export function serviceFromParam(value: string | null): string {
  if (!value) return ''
  return SERVICES.find((item) => item.id === value || item.label === value)?.label ?? ''
}
