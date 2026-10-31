import SiteLayout from '../components/layout/SiteLayout'

type SectionPageProps = {
  title: string
  summary: string
}

export default function SectionPage({ title, summary }: SectionPageProps) {
  return (
    <SiteLayout>
      <section className="section-page">
        <h1>{title}</h1>
        <p>{summary}</p>
      </section>
    </SiteLayout>
  )
}
