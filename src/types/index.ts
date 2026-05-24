export interface Service {
  icon: string
  title: string
  description: string
  tone?: 'brand' | 'social' | 'web' | 'content'
}

export interface PortfolioItem {
  id: string
  title: string
  category: string
  year: string
  image: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  image: string
}

export interface AgencyStat {
  value: string
  label: string
}

export interface TeamMember {
  name: string
  role: string
}

export interface PricingPlan {
  title: string
  description: string
  price: string
  features: string[]
  highlighted?: boolean
}
