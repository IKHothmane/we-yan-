/**
 * Identifiants légaux We Yan Digital (Maroc).
 * Remplir UNIQUEMENT avec les valeurs officielles du RC / certificat.
 * Ne jamais inventer d’IF, RC ou ICE.
 */
export const legalIdentity = {
  raisonSociale: 'We Yan Digital',
  formeJuridique: 'Société à Responsabilité Limitée (S.A.R.L. — Maroc)',
  siege: {
    quartier: 'Quartier Maarif',
    ville: 'Casablanca',
    pays: 'Royaume du Maroc',
  },
  telephone: '+212 6 91 56 72 46',
  telephoneHref: 'tel:+212691567246',
  email: 'contact@weyandigital.ma',
  /** Laisser vide jusqu’à réception des documents officiels */
  identifiantFiscal: '',
  registreCommerce: '',
  ice: '',
} as const

export function hasOfficialCompanyIds() {
  return Boolean(
    legalIdentity.identifiantFiscal.trim() &&
      legalIdentity.registreCommerce.trim() &&
      legalIdentity.ice.trim(),
  )
}
