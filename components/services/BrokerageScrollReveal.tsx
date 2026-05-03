import PinnedReveal, { type RevealItem } from '@/components/scroll/PinnedReveal'

const services: RevealItem[] = [
  {
    id: 'leasehold',
    number: '01',
    title: 'Leasehold Acquisitions',
    body: 'Securing oil and gas leases across Oklahoma mineral estates. We handle negotiation, drafting, and execution for operators and working interest owners.',
    detail: ['Bonus negotiations', 'Paid-up lease drafting', 'Lease ratifications', 'Pooling agreements'],
  },
  {
    id: 'mineral',
    number: '02',
    title: 'Mineral & Leasehold Ownership',
    body: 'Comprehensive ownership reports tracing mineral and leasehold interests through chain of title for division order and revenue distribution purposes.',
    detail: ['Run sheet preparation', 'Division order title opinions', 'Ownership schedules', 'Title curative'],
  },
  {
    id: 'title',
    number: '03',
    title: 'Title Services',
    body: 'Drilling title opinions and curative work built on exhaustive courthouse research. We examine abstracts, identify title defects, and draft curative instruments.',
    detail: ['Drilling title opinions', 'Curative drafting', 'Title examination', 'Affidavits of heirship'],
  },
  {
    id: 'row',
    number: '04',
    title: 'Right-of-Ways',
    body: 'Pipeline, road, and utility right-of-way acquisition across Oklahoma surface estates. We negotiate easements and settle surface damage claims.',
    detail: ['Easement negotiation', 'Surface damage settlements', 'ROW agent services', 'Permit acquisition'],
  },
  {
    id: 'wind',
    number: '05',
    title: 'Wind Leasing',
    body: 'Wind and renewable energy lease acquisition for wind project development across the Oklahoma panhandle and western Oklahoma.',
    detail: ['Wind lease negotiation', 'Landowner outreach', 'Project area consolidation', 'Option agreements'],
    accent: '#4a7c59',
  },
]

export default function BrokerageScrollReveal() {
  return <PinnedReveal items={services} label="Brokerage & Land" className="bg-[#050505]" />
}
