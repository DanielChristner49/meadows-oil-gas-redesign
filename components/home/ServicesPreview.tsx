import HorizontalPanel, { type PanelItem } from '@/components/scroll/HorizontalPanel'

const items: PanelItem[] = [
  {
    id: 'leasehold',
    title: 'Leasehold Acquisitions',
    description: 'Securing oil and gas leases across Oklahoma mineral estates. We handle negotiation, drafting, and execution.',
    detail: 'Bonus negotiations · Paid-up leases · Ratifications',
  },
  {
    id: 'mineral',
    title: 'Mineral & Leasehold Ownership',
    description: 'Comprehensive ownership reports tracing mineral and leasehold interests through chain of title.',
    detail: 'Run sheets · Division order title opinions · Ownership schedules',
  },
  {
    id: 'title',
    title: 'Title Services',
    description: 'Title opinions and curative work founded on rigorous courthouse research and abstract review.',
    detail: 'Drilling title opinions · Curative drafting · Title examination',
  },
  {
    id: 'row',
    title: 'Right-of-Ways',
    description: 'Pipeline, road, and utility right-of-way acquisition across Oklahoma surface estates.',
    detail: 'Easement negotiation · Damage settlements · ROW agent services',
  },
  {
    id: 'wind',
    title: 'Wind Leasing',
    description: 'Wind and renewable energy lease acquisition and landowner negotiation for wind project development.',
    detail: 'Wind lease negotiation · Landowner outreach · Project area consolidation',
    accent: '#4a7c59',
  },
]

export default function ServicesPreview() {
  return (
    <HorizontalPanel
      items={items}
      label="Our Services"
      className="bg-[#050505]"
    />
  )
}
