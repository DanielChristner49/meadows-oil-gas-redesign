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
    body: "Bartlesville's Nellie Johnstone No. 1 becomes Oklahoma Territory's first commercial oil producer — drilled to 1,320 feet and producing 50 barrels a day. It ignites a century-long industry that reshapes the nation's energy landscape and transforms a territory of grasslands into a global oil capital.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Nellie_Johnstone_No._1.JPG',
    imageAlt: 'Replica of the Nellie Johnstone No. 1 well, Bartlesville, Oklahoma — Oklahoma Territory\'s first commercial oil producer, 1897',
  },
  {
    year: '1905',
    title: 'Glenn Pool Discovery',
    body: "The Glenn Pool field near Tulsa triggers Oklahoma's first major oil boom — briefly making the state the world's largest oil-producing region. Oil gushers like this one erupt across the Territory as major companies race to drill, and Tulsa begins its transformation into the \"Oil Capital of the World.\"",
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Lucas_gusher.jpg',
    imageAlt: 'Oil gusher erupting at Spindletop, 1901 — the era\'s iconic image of early American oil strikes that paralleled Oklahoma\'s Glenn Pool boom',
  },
  {
    year: '1907',
    title: 'Oklahoma Statehood',
    body: "Oklahoma enters the Union with oil already embedded in its identity — the industry funds early state government, infrastructure, and public schools through mineral royalties. The Oklahoma State Capitol itself would eventually have a producing oil well on its grounds, a symbol of just how inseparable statehood and petroleum had become.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Oklahoma_State_Capitol_April_3%2C_2007.jpg',
    imageAlt: 'Oklahoma State Capitol with the Petunia No. 1 oil well on its grounds — oil and statehood intertwined from the very beginning',
  },
  {
    year: '1912',
    title: 'Cushing-Drumright Field',
    body: "Discovery of the Cushing-Drumright field — one of the largest in the world at the time — cements Oklahoma's role as the center of American oil production. Hundreds of wooden derricks crowd the skyline, lease competition becomes fierce, and the demand for land professionals who can navigate title and mineral rights becomes urgent.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LosAngelesCityOilField.jpg',
    imageAlt: 'A dense forest of oil derricks typical of the great mid-continent oil fields of 1910–1915, mirroring Oklahoma\'s Cushing-Drumright boom',
  },
  {
    year: '1920s',
    title: 'The Seminole Boom',
    body: "The Seminole field and Greater Seminole area explode through the decade, driving one of the most intense land acquisition races in Oklahoma history. Independent operators and majors alike scramble to secure leases across central Oklahoma as the boom reshapes entire counties and transforms the land professional's role from courthouse clerk to strategic business partner.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/HD.11.037_%2810995585154%29.jpg',
    imageAlt: 'Oklahoma oil field in full production during the 1920s boom era — derricks and production equipment stretching across the prairie',
  },
  {
    year: '1930s',
    title: 'Depression & Proration',
    body: "The Great Depression collapses oil prices while drought and dust storms scour the Oklahoma plains. State regulators introduce proration to stabilize runaway production — establishing the regulatory framework that governs well operations to this day. Land professionals who survive the bust emerge with hard-won expertise in distressed title, probate, and mineral curative work.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Dust_Bowl_-_Dallas%2C_South_Dakota_1936.jpg',
    imageAlt: 'Buried machinery in a barn lot during the Dust Bowl, 1936 — the twin crises of Depression and drought define Oklahoma\'s 1930s',
  },
  {
    year: '1940s',
    title: 'Fueling the War Effort',
    body: "Oklahoma oil fields run around the clock to supply Allied forces in World War II. Refineries operate at peak capacity and land professionals scramble to keep pace with emergency production orders. The war cements the petroleum industry's strategic importance to national security — a status Oklahoma producers and land professionals carry with pride to this day.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Oil_refinery_in_Martinez%2C_California.JPG',
    imageAlt: 'Oil refinery in continuous operation since 1915 — representing the wartime industrial scale that Oklahoma\'s petroleum sector sustained throughout World War II',
  },
  {
    year: '1970s',
    title: 'Energy Crisis & Oklahoma Boom',
    body: "The OPEC oil embargo sends prices skyward and triggers the greatest Oklahoma drilling boom since the 1920s. Rigs run day and night across the mid-continent. Courthouse offices stay open late as operators race to lease every available acre. Land professionals become some of the busiest — and best-compensated — professionals in the state.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Gas_Stealers_Beware_1974.jpg',
    imageAlt: 'Father and son holding a sign warning against gas theft, 1974 — emblematic of the shortage and price shock that triggered Oklahoma\'s 1970s drilling boom',
  },
  {
    year: '1980s',
    title: 'The Bust',
    body: "Collapsed oil prices devastate Oklahoma's economy almost overnight. Thousands of wells shut in, banks fail, and entire field offices close. The land professionals who remain learn to navigate distressed title, mineral estates in probate, years of missing filings, and complex curative work — skills that define the profession's toughest and most essential discipline.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/West_Texas_Pumpjack.JPG',
    imageAlt: 'A solitary pumpjack working a stripper well on the bare plains — the quiet symbol of an industry surviving through the 1980s oil bust',
  },
  {
    year: '1990s',
    title: 'Recovery & Modernization',
    body: "Oklahoma's oil sector stabilizes under independent operators who quietly rebuild the industry through disciplined land and title work. The profession matures — courthouse research, title opinion writing, ownership runs, and curative become increasingly specialized disciplines. The groundwork for the shale revolution is laid in courthouses across 77 counties.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/06/H104.jpg',
    imageAlt: 'Modern rotary drilling rig in operation — the new generation of equipment that revived domestic production through the 1990s recovery',
  },
  {
    year: '2000s',
    title: 'Gas Boom & Horizontal Drilling',
    body: "The natural gas boom and the emergence of horizontal drilling begin reshaping Oklahoma's entire play landscape. Lease terms, ROW agreements, pooling clauses, and title work grow dramatically more complex as operators push into new formations. The role of the land professional evolves to match — requiring expertise in both traditional courthouse work and the new mechanics of shale development.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/BarnettShaleDrilling-9323.jpg',
    imageAlt: 'Shale gas drilling rig operating near Alvarado, Texas in the Barnett Shale — the template for Oklahoma\'s horizontal revolution in the 2000s',
  },
  {
    year: '2009',
    title: 'Meadows Oil & Gas Founded',
    body: "Zach Meadows establishes Meadows Oil & Gas Corporation in Edmond, Oklahoma — focused on leasehold acquisition and professional title services for mid-continent operators. The company launches at the leading edge of Oklahoma's shale transformation, building a reputation for precise courthouse work, reliable title opinions, and service across the full spectrum of land professional disciplines.",
    isMeadows: true,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Frac_job_in_process.JPG',
    imageAlt: 'Hydraulic fracturing operation in the Bakken Formation — the shale-era technology that was reshaping Oklahoma\'s play landscape when Meadows Oil & Gas was founded in 2009',
  },
  {
    year: '2011',
    title: 'SCOOP & STACK Plays Emerge',
    body: "Oklahoma's South Central Oklahoma Oil Province (SCOOP) and Sooner Trend Anadarko Basin (STACK) become world-class shale targets overnight. Drilling activity explodes. Lease bonuses and royalty rates spike. Title chains that were quiet for decades become intensely contested. Meadows expands its courthouse presence to match the mid-continent's most significant resurgence since the 1970s.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Halliburton_Frack_Job_in_the_Bakken.JPG',
    imageAlt: 'Halliburton hydraulic fracturing operation in the Bakken — the large-scale multi-well pad development that defined SCOOP and STACK activity in Oklahoma from 2011 onward',
  },
  {
    year: '2017',
    title: 'Wind Leasing Practice Launched',
    body: "Meadows Oil & Gas expands into renewable energy land services — adding wind lease negotiations, acreage aggregation, easement work, and surface use agreements for Oklahoma and Kansas landowners and operators. The expansion reflects the land professional's evolving role at the intersection of traditional mineral rights and the growing wind energy economy of the southern plains.",
    isMeadows: true,
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Blue_Canyon_Wind_Farm_from_Mount_Scott.jpg',
    imageAlt: 'Blue Canyon Wind Farm viewed from Mount Scott, Comanche County, Oklahoma — the kind of project Meadows began serving when it launched its wind leasing practice in 2017',
  },
  {
    year: '2019',
    title: 'Ten Years & Three States',
    body: "A decade of continuous service — now covering Oklahoma, Kansas, and Texas with courthouse research, title opinions, right-of-way negotiation, and GIS mapping capabilities for operators across the central plains. The company's footprint reflects the geographic reality of mid-continent energy: mineral ownership, ROW corridors, and shale plays don't respect state lines.",
    isMeadows: true,
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Water_tanks_preparing_for_a_frac_job.JPG',
    imageAlt: 'Water tanks staged for a hydraulic fracturing operation — the scale of multi-well pad development across Oklahoma, Kansas, and Texas that Meadows Oil & Gas served through 2019',
  },
  {
    year: '2020s',
    title: 'The Energy Transition',
    body: "Oklahoma balances its century-long oil and gas legacy with rapidly growing wind and solar development. Land professionals adapt as multi-energy projects become the new normal — wind leases alongside mineral rights, ROW corridors serving both pipelines and transmission lines, surface use agreements that must account for both conventional and renewable tenants on the same acreage.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Weatherford_Oklahoma_wind_turbine_blade_2642750096_0df17a75ff_o.jpg',
    imageAlt: 'Wind turbine blade on display in Weatherford, Oklahoma — a symbol of the energy transition reshaping how Oklahoma land professionals serve both conventional and renewable operators',
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
