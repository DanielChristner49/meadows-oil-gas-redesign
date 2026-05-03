import type { Metadata } from 'next'
import Link from 'next/link'
import HistoryTimeline, { type TimelineEra } from '@/components/about/HistoryTimeline'
import { breadcrumbSchema } from '@/lib/seo'

const breadcrumb = breadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Oklahoma Oil & Gas History' },
])

export const metadata: Metadata = {
  title: 'Oklahoma Oil & Gas History',
  description:
    'A century of Oklahoma oil and gas history — from the 1897 Nellie Johnstone well to the SCOOP/STACK shale plays. Meadows Oil & Gas has operated through it all since 2009.',
  alternates: { canonical: '/about/history' },
  openGraph: {
    title: 'Oklahoma Oil & Gas History | Meadows Oil and Gas',
    description: 'A century of Oklahoma oil and gas history — from the 1897 Nellie Johnstone well to the SCOOP/STACK shale plays. Meadows Oil & Gas has operated through it all since 2009.',
  },
}

const eras: TimelineEra[] = [
  {
    year: '1897',
    title: "Oklahoma's First Commercial Well",
    body: "Bartlesville's Nellie Johnstone No. 1 becomes Oklahoma Territory's first commercial oil producer, marking the start of a century-long industry that would reshape the nation's energy landscape.",
  },
  {
    year: '1905',
    title: 'Glenn Pool Discovery',
    body: 'The Glenn Pool field near Tulsa triggers Oklahoma\'s first major oil boom, briefly making Oklahoma the world\'s largest oil-producing region and transforming Tulsa into the "Oil Capital of the World."',
  },
  {
    year: '1907',
    title: 'Oklahoma Statehood',
    body: 'Oklahoma enters the Union with oil already shaping its economy — the industry funds early state government and infrastructure, and land title work becomes a critical profession.',
  },
  {
    year: '1912',
    title: 'Cushing-Drumright Field',
    body: "Discovery of the Cushing-Drumright field — one of the largest in the world at the time — cements Oklahoma's role as the center of American oil production and drives intense leasehold competition.",
  },
  {
    year: '1920s',
    title: 'The Seminole Boom',
    body: 'The Seminole field and Greater Seminole area boom through the decade, driving rapid growth and intense land acquisition activity across central Oklahoma as major and independent operators compete for acreage.',
  },
  {
    year: '1930s',
    title: 'Depression & Proration',
    body: 'The Great Depression collapses oil prices. Oklahoma regulators introduce proration to stabilize production — establishing the regulatory framework that governs well operations to this day.',
  },
  {
    year: '1940s',
    title: 'Fueling the War Effort',
    body: "Oklahoma oil fields run around the clock to supply Allied forces in World War II, cementing the industry's strategic importance and the critical role of land professionals in maintaining production.",
  },
  {
    year: '1970s',
    title: 'Energy Crisis & Oklahoma Boom',
    body: "The OPEC oil embargo triggers skyrocketing prices and an Oklahoma drilling boom — rigs run day and night across the mid-continent, and courthouse research becomes frenetic as operators race to lease.",
  },
  {
    year: '1980s',
    title: 'The Bust',
    body: "Collapsed oil prices devastate Oklahoma's economy. Thousands of wells shut in. Land professionals learn to navigate distressed title, mineral estates in probate, and complex curative work — skills that define the profession.",
  },
  {
    year: '1990s',
    title: 'Recovery & Modernization',
    body: "Oklahoma's oil sector stabilizes through independent operators. Land practice matures — courthouse research, title opinion writing, and ownership runs become increasingly specialized.",
  },
  {
    year: '2000s',
    title: 'Gas Boom & Horizontal Drilling',
    body: "The natural gas boom and emergence of horizontal drilling begin reshaping Oklahoma's play landscape. Lease terms, ROW agreements, and title work grow more complex as operators push into new formations.",
  },
  {
    year: '2009',
    title: 'Meadows Oil & Gas Founded',
    body: "Zach Meadows establishes Meadows Oil & Gas Corporation in Edmond, Oklahoma — focused on leasehold acquisition and title services for Oklahoma operators at the start of a transformative decade for the state's energy industry.",
    isMeadows: true,
  },
  {
    year: '2011',
    title: 'SCOOP & STACK Plays Emerge',
    body: "Oklahoma's South Central Oklahoma Oil Province (SCOOP) and Sooner Trend Anadarko Basin (STACK) plays become world-class shale targets, driving intense acquisition activity and cementing the mid-continent's resurgence.",
  },
  {
    year: '2017',
    title: 'Wind Leasing Practice Launched',
    body: "Meadows expands into renewable energy land services — wind leasing for Oklahoma and Kansas landowners and operators — reflecting the industry's broadening energy mix and the evolving role of the land professional.",
    isMeadows: true,
  },
  {
    year: '2019',
    title: 'Ten Years & Three States',
    body: 'A decade of service, now covering Oklahoma, Kansas, and Texas with full courthouse research, title opinions, right-of-way, and GIS mapping capabilities for operators across the central plains.',
    isMeadows: true,
  },
  {
    year: '2020s',
    title: 'The Energy Transition',
    body: "Oklahoma balances its oil and gas legacy with growing wind and solar development. Land professionals adapt as multi-energy projects — wind leases alongside mineral rights, ROW corridors for both pipelines and transmission lines — become the new normal.",
  },
]

export default function OilHistoryPage() {
  return (
    <div>
      <script type="application/ld+json">{JSON.stringify(breadcrumb).replace(/&/g, "\\u0026")}</script>
      {/* Header */}
      <div
        className="section-padding"
        style={{
          background: 'linear-gradient(to bottom, #000 0%, #0a0a0a 100%)',
          paddingBottom: '3rem',
        }}
      >
        <div className="container-max px-6 sm:px-8">
          <Link
            href="/about"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginBottom: '1.5rem',
            }}
          >
            ← About
          </Link>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-brand-gold)',
              marginBottom: '0.75rem',
            }}
          >
            Oklahoma Oil &amp; Gas
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 800,
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              marginBottom: '1.5rem',
            }}
          >
            A Century of Energy
          </h1>
          <p
            className="max-w-2xl leading-relaxed"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              color: 'rgba(156,163,175,1)',
            }}
          >
            Oklahoma's oil and gas industry is one of the defining stories of American energy. From
            the 1897 Nellie Johnstone well to the SCOOP and STACK shale plays, the state has been
            at the center of every major cycle — boom, bust, and recovery. Meadows Oil &amp; Gas has
            operated in this industry since 2009.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <HistoryTimeline eras={eras} />

      {/* Legend */}
      <div style={{ backgroundColor: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-max px-6 sm:px-8 py-8">
          <div className="flex flex-wrap gap-6 items-center">
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.55rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
              }}
            >
              Legend:
            </p>
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: '0.75rem',
                  height: '0.75rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(200,146,26,0.4)',
                  border: '1px solid rgba(200,146,26,0.4)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.7rem',
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                Industry Event
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: '0.75rem',
                  height: '0.75rem',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-brand-gold)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.7rem',
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                Meadows Milestone
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="section-padding"
        style={{ backgroundColor: 'var(--color-brand-navy)' }}
      >
        <div className="container-max px-6 sm:px-8">
          <div className="max-w-2xl">
            <span className="section-label">Meadows Oil &amp; Gas</span>
            <h2
              className="leading-none mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              Part of the Story Since 2009
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{
                color: 'rgba(156,163,175,1)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              We&apos;ve built our practice on the same land and title work that has driven Oklahoma&apos;s
              oil and gas industry for over a century. Learn more about our team and what we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-full"
                style={{
                  backgroundColor: 'var(--color-brand-gold)',
                  color: '#000',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  padding: '1rem 1.75rem',
                  textDecoration: 'none',
                }}
              >
                About Meadows →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  padding: '1rem 0',
                }}
              >
                Our Services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
