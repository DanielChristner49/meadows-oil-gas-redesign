import type { Metadata } from 'next'
import ServiceAccordion from '@/components/services/ServiceAccordion'
import WindLeasingBanner from '@/components/services/WindLeasingBanner'
import { getServicesByCategory } from '@/lib/sanity/queries'

export const metadata: Metadata = { title: 'Brokerage & Land Services' }

export const revalidate = 3600

const staticServices = [
  {
    title: 'Leasehold Acquisitions',
    content: 'We negotiate and acquire oil and gas leases on behalf of operators, handling all aspects of landowner contact, lease terms negotiation, and execution. Our landmen understand local mineral ownership patterns and lease market conditions across Oklahoma and California.',
  },
  {
    title: 'Mineral & Leasehold Ownership Research',
    content: 'Comprehensive research into mineral ownership records, chain of title, and leasehold interests. We trace ownership through county records, probate documents, and historical conveyances to provide operators with a complete ownership picture.',
  },
  {
    title: 'Title Opinions & Curative Work',
    content: 'Our certified professional landmen work alongside oil and gas attorneys to render formal title opinions based on thorough title examination. When defects are identified, we perform curative work including obtaining ratifications, corrections, and missing conveyances.',
  },
  {
    title: 'Right-of-Ways',
    content: 'Negotiation and acquisition of right-of-way agreements for pipelines, roads, and surface facilities. We handle landowner negotiations, ROW agreement drafting coordination, and all required documentation.',
  },
]

export default async function BrokeragePage() {
  let services = staticServices

  try {
    const sanityServices = await getServicesByCategory('brokerage')
    if (sanityServices.length > 0) {
      services = sanityServices.map(({ title, content }) => ({ title, content }))
    }
  } catch {
    // Sanity not configured yet — fall back to static content
  }

  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Brokerage & Land Services</h1>
      <p className="section-subtitle mb-10">
        Comprehensive land services backed by decades of experience in the Mid-Continent and California basins.
      </p>
      <ServiceAccordion services={services} />
      <WindLeasingBanner />
    </div>
  )
}
