/**
 * Sanity content seed script.
 * Usage: SANITY_API_TOKEN=<write-token> node scripts/seed-sanity.mjs
 *
 * Get a write token at: https://manage.sanity.io → project p90jqv5f → API → Tokens
 */
import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('❌  Missing SANITY_API_TOKEN. Export it first:')
  console.error('   SANITY_API_TOKEN=your-token node scripts/seed-sanity.mjs')
  process.exit(1)
}

const client = createClient({
  projectId: 'p90jqv5f',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

// ─── Hero ────────────────────────────────────────────────────────────────────

const hero = {
  _id: 'hero-main',
  _type: 'hero',
  headline: 'Trusted Land & Title Services',
  subheadline: 'Precision land work for operators across the Mid-Continent',
  tagline: 'Serving Operators Since 2009',
  bodyCopy:
    'Meadows Oil & Gas delivers professional landman services, title opinions, and leasehold acquisitions to operators throughout Oklahoma, Kansas, Texas, and beyond. From courthouse to closing, we handle the work operators depend on.',
  primaryCtaText: 'Our Services',
  secondaryCtaText: 'Contact Us',
}

// ─── Testimonials ────────────────────────────────────────────────────────────

const testimonials = [
  {
    _id: 'testimonial-1',
    _type: 'testimonial',
    displayOrder: 1,
    quote:
      'Meadows ran a complex ownership run across four counties in 90 days — courthouse-to-close with zero title defects on closing. That kind of execution is rare in this business.',
    author: 'J. Harmon',
    role: 'Senior Land Manager',
    company: 'Mid-Continent E&P',
  },
  {
    _id: 'testimonial-2',
    _type: 'testimonial',
    displayOrder: 2,
    quote:
      'When we needed curative work on a 640-acre block with overlapping mineral interests, the Meadows team resolved every defect in time for our drilling schedule. They know Oklahoma title inside and out.',
    author: 'R. Sutton',
    role: 'VP Land',
    company: 'Panhandle Exploration',
  },
  {
    _id: 'testimonial-3',
    _type: 'testimonial',
    displayOrder: 3,
    quote:
      'We brought Meadows in for a SCOOP leasehold acquisition campaign. Their knowledge of the courthouse system and landowner relationships made a real difference in our sign-up rate.',
    author: 'T. Caldwell',
    role: 'Land Director',
    company: 'Sooner Basin Energy',
  },
]

// ─── Job Postings ─────────────────────────────────────────────────────────────

const jobs = [
  {
    _id: 'job-landman',
    _type: 'jobPosting',
    title: 'Contract Landman',
    employmentType: 'CONTRACT',
    active: true,
    description:
      'Meadows Oil & Gas is seeking experienced contract landmen for active projects across Oklahoma, Kansas, and Texas. Work includes courthouse title research, ownership runs, leasehold acquisitions, and ROW negotiations.',
    requirements: [
      '10+ years of landman experience in oil and gas',
      'AAPL membership or active pursuit of RPL designation preferred',
      'Proficiency in courthouse research across Oklahoma, Kansas, or Texas counties',
      'Experience writing or reviewing preliminary and division order title opinions',
      'Self-directed; able to deliver on operator timelines with minimal oversight',
    ],
  },
  {
    _id: 'job-gis',
    _type: 'jobPosting',
    title: 'GIS / Mapping Specialist',
    employmentType: 'CONTRACT',
    active: true,
    description:
      'We are looking for a GIS mapping specialist to support seismic mapping, digital imagery interpretation, and ownership boundary mapping for active projects. Remote-friendly position with periodic collaboration with our Oklahoma team.',
    requirements: [
      '5+ years of GIS experience in oil and gas or natural resources',
      'Proficiency in ArcGIS, QGIS, or comparable platforms',
      'Experience with seismic data visualization and digital imagery analysis',
      'Ability to deliver clear, presentation-ready maps for operator review',
      'Familiarity with PLSS survey systems and Oklahoma/Kansas land grid',
    ],
  },
]

// ─── FAQ Items ────────────────────────────────────────────────────────────────

const faqs = [
  // scope
  {
    _id: 'faq-scope-1',
    _type: 'faqItem',
    category: 'scope',
    displayOrder: 1,
    question: 'What states does Meadows Oil & Gas operate in?',
    answer:
      'Our primary coverage areas are Oklahoma, Kansas, and Texas, with additional work in Colorado, New Mexico, Montana, and North Dakota. We follow our clients wherever the projects are.',
  },
  {
    _id: 'faq-scope-2',
    _type: 'faqItem',
    category: 'scope',
    displayOrder: 2,
    question: 'Is there a minimum project size to work with Meadows?',
    answer:
      'We do not have a hard minimum. However, our team is best suited for projects of meaningful scale — ownership runs of 25+ tracts, leasehold campaigns of 5+ sections, or title assignments requiring 40+ hours of courthouse work. Smaller one-off requests may be accommodated depending on current capacity.',
  },
  {
    _id: 'faq-scope-3',
    _type: 'faqItem',
    category: 'scope',
    displayOrder: 3,
    question: 'Do you work on wind and solar projects as well as oil and gas?',
    answer:
      'Yes. Meadows provides wind leasing and right-of-way services for renewable energy developers operating across the southern and central plains. Our land expertise translates directly to wind lease negotiations, surface agreements, and easement curative work.',
  },
  {
    _id: 'faq-scope-4',
    _type: 'faqItem',
    category: 'scope',
    displayOrder: 4,
    question: 'Can you take on a project on short notice?',
    answer:
      'We maintain capacity for time-sensitive projects and understand that drilling schedules do not always allow for long lead times. Contact us with your timeline and we will be direct about what we can commit to.',
  },
  // title
  {
    _id: 'faq-title-1',
    _type: 'faqItem',
    category: 'title',
    displayOrder: 10,
    question: 'What does a title opinion cover?',
    answer:
      'A title opinion examines the chain of title for a tract of land and opines on ownership of the mineral, royalty, and working interests. It identifies defects, outstanding interests, and curative requirements so that an operator can make a drilling or leasing decision with confidence.',
  },
  {
    _id: 'faq-title-2',
    _type: 'faqItem',
    category: 'title',
    displayOrder: 11,
    question: 'What is curative work and when is it needed?',
    answer:
      'Curative work resolves title defects identified in a title opinion — such as missing heirs, improperly executed instruments, gaps in the chain of title, or probate issues. It is typically required before an operator can drill or a lender can finance a project. We handle curative from courthouse filings through affidavit drafting and recording.',
  },
  {
    _id: 'faq-title-3',
    _type: 'faqItem',
    category: 'title',
    displayOrder: 12,
    question: 'How long does a title run typically take?',
    answer:
      'Turnaround depends on the depth of the run, the number of tracts, and county courthouse access. A standard 40-year ownership run on a single section in a well-indexed county can take 2–5 business days. Complex multi-county runs with fragmented ownership may take several weeks.',
  },
  {
    _id: 'faq-title-4',
    _type: 'faqItem',
    category: 'title',
    displayOrder: 13,
    question: 'Do you work directly with attorneys for title opinions?',
    answer:
      'Yes. Meadows landmen can work as a bridge between the operator and the title attorney — gathering and organizing courthouse records, flagging defects, and preparing the title run packet that the attorney reviews to issue an opinion. We can also coordinate directly with your counsel if preferred.',
  },
  // leasing
  {
    _id: 'faq-leasing-1',
    _type: 'faqItem',
    category: 'leasing',
    displayOrder: 20,
    question: 'What is included in a leasehold acquisition campaign?',
    answer:
      'A leasehold campaign typically includes identifying mineral interest ownership, locating and contacting landowners, negotiating lease terms (bonus, royalty, primary term), preparing and executing the lease instruments, and recording in the county courthouse. We can manage the full process or take on specific components.',
  },
  {
    _id: 'faq-leasing-2',
    _type: 'faqItem',
    category: 'leasing',
    displayOrder: 21,
    question: 'How do you handle landowners who are difficult to locate?',
    answer:
      'We use a combination of courthouse records, state vital records, online databases, and direct outreach to locate mineral interest owners — including heirs who may not know they hold an interest. Locating absent interest owners is a standard part of our title and leasing work.',
  },
  {
    _id: 'faq-leasing-3',
    _type: 'faqItem',
    category: 'leasing',
    displayOrder: 22,
    question: 'Can you negotiate right-of-way and surface use agreements?',
    answer:
      'Yes. We negotiate surface use agreements, pipeline easements, road access agreements, and salt water disposal easements as part of our land services. We are experienced working with both mineral and surface owners across Oklahoma and Kansas.',
  },
  {
    _id: 'faq-leasing-4',
    _type: 'faqItem',
    category: 'leasing',
    displayOrder: 23,
    question: 'What royalty rates are typical in Oklahoma today?',
    answer:
      'Market royalty rates vary by basin, play, and the competitive environment at the time of leasing. In active plays like SCOOP and STACK, rates commonly range from 3/16 to 1/4. We stay current on market rates in our coverage areas and can advise operators on competitive structures for a specific AMI.',
  },
  // wind
  {
    _id: 'faq-wind-1',
    _type: 'faqItem',
    category: 'wind',
    displayOrder: 30,
    question: 'How does wind leasing differ from oil and gas leasing?',
    answer:
      'Wind leasing involves securing surface rights for turbine placement, access roads, and transmission easements — rather than mineral rights. Wind leases are typically longer in term (20–40 years with extension options), structured around annual per-turbine or per-acre payments, and require careful negotiation of decommissioning provisions and landowner protections.',
  },
  {
    _id: 'faq-wind-2',
    _type: 'faqItem',
    category: 'wind',
    displayOrder: 31,
    question: 'Does Meadows handle both the landowner negotiation and the recording work for wind leases?',
    answer:
      'Yes. We manage the full wind leasing process from initial landowner contact through lease execution and courthouse recording. We are also experienced identifying and clearing title issues on surface tracts that may affect wind project financing or interconnect approvals.',
  },
  {
    _id: 'faq-wind-3',
    _type: 'faqItem',
    category: 'wind',
    displayOrder: 32,
    question: 'Can you work alongside a wind developer\'s in-house land team?',
    answer:
      'Absolutely. We frequently work as an extension of a developer\'s existing land team — taking on specific counties, difficult landowners, or curative backlogs while the client\'s staff focuses on project management and financing. We adapt to your preferred process and reporting format.',
  },
  {
    _id: 'faq-wind-4',
    _type: 'faqItem',
    category: 'wind',
    displayOrder: 33,
    question: 'What title issues commonly arise on wind projects?',
    answer:
      'Common title issues on wind projects include severed surface estates (where the mineral owner controls subsurface access that may conflict with turbine foundations), easements that predate wind development, and agricultural leases with holdover provisions. We identify these issues early so they can be addressed before construction begins.',
  },
  // logistics
  {
    _id: 'faq-logistics-1',
    _type: 'faqItem',
    category: 'logistics',
    displayOrder: 40,
    question: 'How do you typically structure your fees?',
    answer:
      'We work on a daily rate for field and courthouse work, or project-based fixed fees for defined deliverables such as an ownership run or a leasehold campaign covering a specific AMI. We are happy to discuss both structures and recommend the one that fits your project and budget.',
  },
  {
    _id: 'faq-logistics-2',
    _type: 'faqItem',
    category: 'logistics',
    displayOrder: 41,
    question: 'Do you provide regular status updates during a project?',
    answer:
      'Yes. Operators receive regular progress reports — typically weekly for active campaigns, or at defined milestones for title work. We adapt reporting format to your preference: email summary, spreadsheet tracker, or direct coordination with your land management software.',
  },
  {
    _id: 'faq-logistics-3',
    _type: 'faqItem',
    category: 'logistics',
    displayOrder: 42,
    question: 'Are your landmen AAPL-affiliated?',
    answer:
      'Yes. Our team maintains active AAPL membership and adheres to the AAPL Standards of Practice. Professional ethics and accuracy are non-negotiable in our work — errors in land records have real financial consequences for operators and we take that responsibility seriously.',
  },
  {
    _id: 'faq-logistics-4',
    _type: 'faqItem',
    category: 'logistics',
    displayOrder: 43,
    question: 'What happens if title defects are discovered mid-project?',
    answer:
      'We flag defects as they are discovered and brief the operator before proceeding. Depending on the nature and severity of the defect, we will outline curative options, estimated cost to resolve, and the impact on project timeline. You make the call on how to proceed — we do not continue drilling-critical work past a known title problem without your direction.',
  },
]

// ─── Glossary Terms ──────────────────────────────────────────────────────────

const glossaryTerms = [
  // title
  {
    _id: 'gloss-title-opinion',
    _type: 'glossaryTerm',
    category: 'title',
    term: 'Title Opinion',
    definition:
      'A written opinion issued by a licensed attorney (or prepared by a landman for attorney review) that examines the chain of title to a tract of land and opines on current ownership of the mineral, royalty, and working interests. Identifies defects and curative requirements.',
  },
  {
    _id: 'gloss-chain-of-title',
    _type: 'glossaryTerm',
    category: 'title',
    term: 'Chain of Title',
    definition:
      'The chronological sequence of recorded instruments — deeds, assignments, probate orders, conveyances — that establishes ownership history for a tract of land. A clear, unbroken chain is required before most operators will drill or lenders will finance a project.',
  },
  {
    _id: 'gloss-curative',
    _type: 'glossaryTerm',
    category: 'title',
    term: 'Curative Work',
    definition:
      'The process of resolving title defects identified in a title opinion. May include obtaining missing heirs\' affidavits, corrective deeds, probate orders, or other recorded instruments that cure breaks in the chain of title or clear outstanding interests.',
  },
  {
    _id: 'gloss-npri',
    _type: 'glossaryTerm',
    category: 'title',
    term: 'NPRI (Non-Participating Royalty Interest)',
    definition:
      'A fractional interest in gross oil and gas production that does not share in the costs of development or operations. An NPRI owner receives a royalty on production but has no right to participate in leasing decisions and does not execute oil and gas leases.',
  },
  {
    _id: 'gloss-mineral-interest',
    _type: 'glossaryTerm',
    category: 'title',
    term: 'Mineral Interest',
    definition:
      'The ownership interest in the oil, gas, and other minerals underlying a tract of land. The mineral estate can be severed from the surface estate and conveyed separately. Mineral interest owners have the right to lease the minerals and receive bonus and royalty payments.',
  },
  {
    _id: 'gloss-division-order',
    _type: 'glossaryTerm',
    category: 'title',
    term: 'Division Order',
    definition:
      'A document executed by interest owners that directs the operator or purchaser on how to distribute production proceeds. It sets out each owner\'s decimal interest and is required before revenue checks can be issued. Errors in division orders can result in incorrect payments.',
  },
  // leasing
  {
    _id: 'gloss-row',
    _type: 'glossaryTerm',
    category: 'leasing',
    term: 'Right-of-Way (ROW)',
    definition:
      'An easement granting the right to use a strip of land for a specific purpose — typically pipeline, road, or utility infrastructure. ROW agreements specify the width, term, permitted uses, compensation, and restoration obligations.',
  },
  {
    _id: 'gloss-leasehold',
    _type: 'glossaryTerm',
    category: 'leasing',
    term: 'Leasehold Interest',
    definition:
      'The working interest created by an oil and gas lease, giving the lessee (typically the operator) the right to explore for, develop, and produce minerals for the duration of the lease term. The leasehold interest can be assigned or sold to other parties.',
  },
  {
    _id: 'gloss-oil-gas-lease',
    _type: 'glossaryTerm',
    category: 'leasing',
    term: 'Oil and Gas Lease',
    definition:
      'A legal agreement between a mineral interest owner (lessor) and an operator (lessee) granting the right to explore for and produce oil and gas in exchange for a bonus payment and royalty on production. Oklahoma leases typically use the Producer\'s 88 form as a starting point.',
  },
  {
    _id: 'gloss-primary-term',
    _type: 'glossaryTerm',
    category: 'leasing',
    term: 'Primary Term',
    definition:
      'The fixed period — typically 3 to 5 years — during which the lessee must begin production or the lease expires. If production is established by the end of the primary term, the lease continues for as long as production is maintained in paying quantities.',
  },
  {
    _id: 'gloss-royalty',
    _type: 'glossaryTerm',
    category: 'leasing',
    term: 'Royalty',
    definition:
      'The share of production (or its value) paid to the mineral interest owner free of production costs. Expressed as a fraction (e.g., 1/8, 3/16, 1/4). Active plays in Oklahoma currently see market royalties in the 3/16 to 1/4 range.',
  },
  // operations
  {
    _id: 'gloss-amr',
    _type: 'glossaryTerm',
    category: 'operations',
    term: 'AMI (Area of Mutual Interest)',
    definition:
      'A defined geographic area within which parties to a joint operating agreement agree to share participation rights in any additional acreage acquired. AMI provisions prevent one partner from acquiring nearby acreage without offering the others the right to participate.',
  },
  {
    _id: 'gloss-joa',
    _type: 'glossaryTerm',
    category: 'operations',
    term: 'JOA (Joint Operating Agreement)',
    definition:
      'The contract between working interest owners that governs the development and operation of an oil and gas property. Sets out the rights and obligations of the operator and non-operators, cost-sharing arrangements, and consequences for non-consent elections.',
  },
  {
    _id: 'gloss-working-interest',
    _type: 'glossaryTerm',
    category: 'operations',
    term: 'Working Interest (WI)',
    definition:
      'The interest in an oil and gas lease that bears the cost of development and operations. Working interest owners share in production revenue proportional to their interest, net of royalties. The operator is typically the party that manages day-to-day drilling and production.',
  },
  {
    _id: 'gloss-pooling',
    _type: 'glossaryTerm',
    category: 'operations',
    term: 'Pooling / Unitization',
    definition:
      'The combining of separately owned tracts or mineral interests to form a drilling unit. Spacing rules in Oklahoma set minimum acreage requirements per well. Operators may pool acreage voluntarily or, when landowners refuse, apply to the Oklahoma Corporation Commission for forced pooling.',
  },
  {
    _id: 'gloss-scoop-stack',
    _type: 'glossaryTerm',
    category: 'operations',
    term: 'SCOOP / STACK',
    definition:
      'Two of the most active oil and gas plays in Oklahoma. SCOOP (South Central Oklahoma Oil Province) targets the Woodford and Springer formations in Grady, Stephens, and Garvin counties. STACK (Sooner Trend Anadarko Basin Canadian and Kingfisher) targets the Meramec and Osage in the Anadarko Basin.',
  },
  // wind
  {
    _id: 'gloss-wind-lease',
    _type: 'glossaryTerm',
    category: 'wind',
    term: 'Wind Lease',
    definition:
      'A long-term surface agreement granting a wind developer the right to install, operate, and maintain wind turbines and associated infrastructure on a landowner\'s property. Typically structured with an option period, a construction term, and an operational term of 20–40 years. Compensation is structured as annual per-turbine or per-acre payments.',
  },
  {
    _id: 'gloss-interconnect',
    _type: 'glossaryTerm',
    category: 'wind',
    term: 'Interconnect Agreement',
    definition:
      'The contract between a wind project developer and the regional transmission organization (RTO) or utility that governs the connection of the wind facility to the power grid. Clear title on all surface easements within the project boundary is typically required for interconnect approval.',
  },
  {
    _id: 'gloss-surface-use',
    _type: 'glossaryTerm',
    category: 'wind',
    term: 'Surface Use Agreement',
    definition:
      'A contract between an operator (oil and gas or wind) and the surface owner governing the use of the land surface during exploration and development. In Oklahoma, surface rights are often severed from mineral rights, making surface use agreements a separate negotiation from the mineral lease.',
  },
  {
    _id: 'gloss-decommissioning',
    _type: 'glossaryTerm',
    category: 'wind',
    term: 'Decommissioning Provision',
    definition:
      'A clause in a wind lease requiring the developer to remove turbines, foundations, and associated infrastructure at the end of the project\'s useful life and restore the surface to its pre-construction condition. Landowners increasingly negotiate for decommissioning bonds or financial assurance to back these obligations.',
  },
  {
    _id: 'gloss-easement',
    _type: 'glossaryTerm',
    category: 'wind',
    term: 'Easement',
    definition:
      'A non-possessory right to use another party\'s land for a specific purpose. In wind and oil and gas development, easements are used for transmission lines, pipeline corridors, access roads, and drainage. Easements run with the land and must be recorded in the county where the property is located.',
  },
]

// ─── Main ─────────────────────────────────────────────────────────────────────

async function seed() {
  console.log('🌱 Seeding Meadows Oil & Gas Sanity dataset (production)...\n')

  const docs = [hero, ...testimonials, ...jobs, ...faqs, ...glossaryTerms]

  let created = 0
  let skipped = 0

  for (const doc of docs) {
    try {
      await client.createOrReplace(doc)
      console.log(`  ✅ ${doc._type} — ${doc._id}`)
      created++
    } catch (err) {
      console.error(`  ❌ ${doc._type} — ${doc._id}: ${err.message}`)
      skipped++
    }
  }

  console.log(`\n✅ Done — ${created} created/replaced, ${skipped} failed`)
  console.log(`   Hero: 1 | Testimonials: ${testimonials.length} | Jobs: ${jobs.length}`)
  console.log(`   FAQs: ${faqs.length} | Glossary: ${glossaryTerms.length}`)
}

seed().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
