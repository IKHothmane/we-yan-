import Hero from '../components/home/Hero'
import PortfolioCTA from '../components/home/PortfolioCTA'
import Services from '../components/home/Services'
import SiteLayout from '../components/layout/SiteLayout'

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <PortfolioCTA />
    </SiteLayout>
  )
}
