import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import PageSeo from './PageSeo'
import PageBreadcrumb from './PageBreadcrumb'
import SiteFooter from './SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import type { PageSeoConfig } from '../lib/pageSeo'
import { withTrailingSlash } from '../lib/internalLinking'
import Icon from './Icon'
import OptimizedImage from './OptimizedImage'

export type BlogArticleProps = {
  seoConfig: PageSeoConfig
  heroImage: string
  heroAlt: string
  badgeCategory: string
  badgeColor: { bg: string; text: string; border: string }
  title: ReactNode
  intro: ReactNode
  publishDate: string
  readTime: string
  authorName: string
  authorRole: string
  sections: Array<{
    heading: string
    headingAccent?: string
    paragraphs: ReactNode[]
  }>
  faq?: Array<{ q: string; r: string }>
  ctaTitle?: string
  ctaSubtitle?: string
  relatedLinks?: Array<{ label: string; to: string }>
}

export default function BlogArticleLayout(props: BlogArticleProps) {
  useScrollReveal()

  const accent = '#6483F0'

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white font-body text-slate-800">
      <PageSeo {...props.seoConfig} />
      <Navbar serviceTitle="Blog · We Yan Digital · Casablanca" />

      <main>
        {/* Breadcrumb & Badge */}
        <section className="px-[clamp(1rem,4vw,2rem)] pt-28 pb-10 sm:px-8">
          <div className="mx-auto max-w-[860px]" data-reveal>
            <PageBreadcrumb className="mb-7 uppercase tracking-[0.16em] font-semibold" />
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.2em]"
                style={{
                  backgroundColor: props.badgeColor.bg,
                  color: props.badgeColor.text,
                  borderColor: props.badgeColor.border,
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: props.badgeColor.text }}
                />
                {props.badgeCategory}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1.5 text-[0.75rem] font-semibold text-slate-600">
                <Icon name="calendar_today" className="h-3.5 w-3.5" />
                {props.publishDate}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1.5 text-[0.75rem] font-semibold text-slate-600">
                <Icon name="menu_book" className="h-3.5 w-3.5" />
                {props.readTime} de lecture
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1.5 text-[0.75rem] font-semibold text-slate-600">
                <Icon name="person" className="h-3.5 w-3.5" />
                Par {props.authorName} · {props.authorRole}
              </span>
            </div>
          </div>
        </section>

        {/* Héro titre + featured image */}
        <section className="px-[clamp(1rem,4vw,2rem)] pb-16 sm:px-8 lg:pb-24">
          <div className="mx-auto max-w-[860px]">
            <h1
              className="font-black uppercase tracking-[-0.02em] leading-[1] text-[clamp(1.9rem,6vw,4.25rem)] text-slate-900 mb-8"
              data-reveal
            >
              {props.title}
            </h1>
            <div
              className="text-[clamp(1rem,2.1vw,1.18rem)] leading-8 text-slate-600 space-y-4 max-w-[720px] mb-10"
              data-reveal
              data-reveal-delay="80"
            >
              {props.intro}
            </div>

            <figure
              className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-[0_30px_70px_-24px_rgba(15,23,42,0.45)] mb-14"
              data-reveal
              data-reveal-delay="140"
            >
              <OptimizedImage
                src={props.heroImage}
                alt={props.heroAlt}
                width={1200}
                height={800}
                className="w-full h-auto block object-cover"
                priority
              />
            </figure>
          </div>
        </section>

        {/* Contenu article */}
        <section className="px-[clamp(1rem,4vw,2rem)] pb-16 sm:px-8 lg:pb-24">
          <article className="mx-auto max-w-[740px]">
            <div className="space-y-14">
              {props.sections.map((sec, idx) => (
                <section key={sec.heading} data-reveal data-reveal-delay={String(60 + idx * 60)}>
                  <h2 className="font-black tracking-tight text-[clamp(1.55rem,4vw,2.2rem)] text-slate-900 mb-5 pb-3 border-b border-slate-200">
                    <span style={{ color: sec.headingAccent ?? accent }}>{String(idx + 1).padStart(2, '0')}.</span>{' '}
                    {sec.heading}
                  </h2>
                  <div className="space-y-5 text-[clamp(0.98rem,2vw,1.1rem)] leading-8 text-slate-700">
                    {sec.paragraphs.map((p, pi) => (
                      <div key={pi}>{p}</div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </section>

        {/* FAQ */}
        {props.faq && props.faq.length > 0 && (
          <section className="bg-[#EFF6FF] border-y border-[#BFDBFE] px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl">
              <div className="text-center mb-12" data-reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white text-[#1D4ED8] border border-[#BFDBFE] px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-5">
                  FAQ · Questions fréquentes lecteurs
                </span>
                <h2 className="font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.6rem)] text-slate-900">
                  FAQ — {props.badgeCategory}
                </h2>
              </div>
              <div className="space-y-4">
                {props.faq.map((f, i) => (
                  <details
                    key={f.q}
                    open={i === 0}
                    className="group rounded-2xl bg-white border border-slate-200 p-6 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.35)] open:shadow-[0_18px_40px_-20px_rgba(100,131,240,0.5)] open:border-[#6483F0]"
                    data-reveal
                    data-reveal-delay={String(i * 70)}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 marker:content-none">
                      <h3 className="font-bold text-[1rem] text-slate-900 leading-snug marker:content-none">{f.q}</h3>
                      <span
                        className="h-8 w-8 flex-shrink-0 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-transform group-open:rotate-45 group-open:text-white group-open:border-[#6483F0] group-open:bg-[#6483F0]"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-5 text-slate-600 leading-8 text-[0.98rem]">{f.r}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div
            className="mx-auto max-w-4xl rounded-[2.25rem] p-[clamp(2rem,6vw,4rem)] text-center text-white shadow-[0_30px_80px_-24px_rgba(15,23,42,0.7)]"
            style={{ backgroundColor: '#1F2937' }}
            data-reveal
          >
            <h2 className="font-black tracking-tight text-[clamp(1.7rem,5vw,2.75rem)] leading-[1.05] mb-4">
              {props.ctaTitle ?? 'Vous souhaitez être accompagné sur votre projet digital ?'}
            </h2>
            <p className="text-white/80 text-[clamp(0.98rem,2vw,1.1rem)] max-w-2xl mx-auto mb-8 leading-8">
              {props.ctaSubtitle ??
                'Chez We Yan Digital agence à Casablanca Maarif, nous aidons les marques marocaines à construire une présence digitale forte, avec du contenu unique, du SEO et des campagnes Ads mesurables. Devis gratuit en moins de 24h.'}
            </p>
            <div className="flex flex-col gap-5 sm:flex-row justify-center">
              <Link
                to="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5 hover:brightness-110"
                style={{ backgroundColor: '#FC9700', color: '#0F172A', boxShadow: '0 22px 50px -18px rgba(252,151,0,0.6)' }}
              >
                Demander un devis gratuit
                <Icon name="arrow_forward" className="h-4 w-4" />
              </Link>
              {(props.relatedLinks ?? []).length > 0 && (
                <Link
                  to={withTrailingSlash(props.relatedLinks[0].to)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.18em] text-white transition-all hover:bg-white/10"
                >
                  {props.relatedLinks[0].label}
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
