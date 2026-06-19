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
