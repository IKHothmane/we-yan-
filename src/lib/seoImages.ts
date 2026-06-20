type SeoImageSize = 'landscape_16_9' | 'landscape_4_3'

const BASE_URL = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image'

function buildSeoImage(prompt: string, imageSize: SeoImageSize) {
  return `${BASE_URL}?prompt=${encodeURIComponent(prompt)}&image_size=${imageSize}`
}

export const seoImages = {
  home: {
    og: buildSeoImage(
      'premium Moroccan digital agency website cover, orange and periwinkle brand palette, elegant editorial layout, creative workspace, luxury branding mood, cinematic lighting, realistic, clean marketing hero',
      'landscape_16_9',
    ),
    twitter: buildSeoImage(
      'creative digital agency social preview, premium Moroccan branding studio, orange and periwinkle palette, bold typography, laptop mockup, refined marketing visuals, realistic, polished composition',
      'landscape_4_3',
    ),
    alt: 'Apercu premium de We Yan Digital, agence digitale marocaine specialisee en branding et communication.',
  },
  services: {
    og: buildSeoImage(
      'digital agency services cover, branding strategy dashboard, web design wireframes, content marketing visuals, orange and periwinkle brand palette, premium business presentation, realistic',
      'landscape_16_9',
    ),
    twitter: buildSeoImage(
      'social media preview for agency services, modern strategy board, web development and ads visuals, premium Moroccan creative agency style, orange and periwinkle accents, realistic',
      'landscape_4_3',
    ),
    alt: 'Apercu des services We Yan Digital avec branding, strategie digitale, publicite et developpement web.',
  },
  strategyMarketing: {
    og: buildSeoImage(
      'marketing strategy and rebranding service page cover, premium agency workshop, strategic brand board, elegant business presentation, periwinkle primary color and orange accent, realistic, high-end',
      'landscape_16_9',
    ),
    twitter: buildSeoImage(
      'social preview for marketing strategy and rebranding service, premium creative agency planning board, refined business aesthetic, periwinkle and orange palette, realistic',
      'landscape_4_3',
    ),
    alt: 'Apercu du service Strategie Marketing et Rebranding de We Yan Digital.',
  },
  contentCreation: {
    og: buildSeoImage(
      'content creation and community management service page cover, premium studio setup, camera, creative social media planning, periwinkle primary color and orange accent, realistic, high-end',
      'landscape_16_9',
    ),
    twitter: buildSeoImage(
      'social preview for content creation and community management service, premium agency studio, reels production and social planning, refined periwinkle and orange palette, realistic',
      'landscape_4_3',
    ),
    alt: 'Apercu du service Creation de Contenu et Community Management de We Yan Digital.',
  },
  advertising: {
    og: buildSeoImage(
      'digital advertising service page cover, meta ads and google ads dashboard, luxury performance marketing agency, periwinkle and orange palette, realistic, premium',
      'landscape_16_9',
    ),
    twitter: buildSeoImage(
      'social preview for digital advertising service, premium meta ads and google ads strategy, performance dashboard, refined periwinkle and orange brand palette, realistic',
      'landscape_4_3',
    ),
    alt: 'Apercu du service Publicite Digitale Meta Ads et Google Ads de We Yan Digital.',
  },
  influenceMarketing: {
    og: buildSeoImage(
      'influence marketing service page cover, premium Moroccan creators, social storytelling campaign, elegant brand collaboration aesthetic, periwinkle and orange palette, realistic',
      'landscape_16_9',
    ),
    twitter: buildSeoImage(
      'social preview for influence marketing service, creators collaboration, premium campaign storytelling, Moroccan digital agency style, periwinkle and orange palette, realistic',
      'landscape_4_3',
    ),
    alt: 'Apercu du service Marketing d Influence de We Yan Digital.',
  },
  seo: {
    og: buildSeoImage(
      'seo service page cover, organic growth dashboard, search ranking analytics, premium digital agency presentation, periwinkle and orange palette, realistic, high-end',
      'landscape_16_9',
    ),
    twitter: buildSeoImage(
      'social preview for SEO service, organic traffic analytics and search ranking performance, premium Moroccan digital agency aesthetic, periwinkle and orange palette, realistic',
      'landscape_4_3',
    ),
    alt: 'Apercu du service Referencement Naturel SEO de We Yan Digital.',
  },
  offlineMedia: {
    og: buildSeoImage(
      'offline advertising service page cover, premium billboard campaign, urban out of home media, print and radio branding, Moroccan city atmosphere, periwinkle and orange palette, realistic, high-end',
      'landscape_16_9',
    ),
    twitter: buildSeoImage(
      'social preview for offline media advertising service, premium billboard, print campaign and radio branding concept, elegant Moroccan agency style, periwinkle and orange palette, realistic',
      'landscape_4_3',
    ),
    alt: 'Apercu du service Media Publicite Offline de We Yan Digital.',
  },
  projects: {
    og: buildSeoImage(
      'creative portfolio showcase cover, premium brand case studies, laptop and mobile mockups, campaign visuals, orange and periwinkle design system, editorial grid, realistic, high-end',
      'landscape_16_9',
    ),
    twitter: buildSeoImage(
      'portfolio social preview for digital agency projects, elegant mockups, branding case study highlights, premium Moroccan creative style, realistic, orange and periwinkle palette',
      'landscape_4_3',
    ),
    alt: 'Apercu portfolio de We Yan Digital presentant des projets creatifs, branding et campagnes digitales.',
  },
  agency: {
    og: buildSeoImage(
      'about agency cover, premium creative team meeting in modern Casablanca office, elegant branding studio atmosphere, orange and periwinkle palette, realistic, high-end corporate storytelling',
      'landscape_16_9',
    ),
    twitter: buildSeoImage(
      'agency team social preview, modern Moroccan creative office, founders discussion, premium branding studio aesthetic, realistic lighting, orange and periwinkle palette',
      'landscape_4_3',
    ),
    alt: 'Apercu de l agence We Yan Digital avec son equipe, sa vision et son studio creatif.',
  },
  contact: {
    og: buildSeoImage(
      'contact page cover for premium digital agency, modern Casablanca office desk, laptop, smartphone, city map details, elegant business atmosphere, orange and periwinkle palette, realistic',
      'landscape_16_9',
    ),
    twitter: buildSeoImage(
      'contact social preview, premium digital agency office, meeting desk with map and notebook, modern Moroccan business style, realistic, orange and periwinkle accents',
      'landscape_4_3',
    ),
    alt: 'Apercu de la page contact We Yan Digital pour echanger sur votre projet digital a Casablanca.',
  },
} as const
