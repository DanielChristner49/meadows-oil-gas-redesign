import type { Metadata } from 'next'
import ServiceAccordion from '@/components/services/ServiceAccordion'
import { getServicesByCategory } from '@/lib/sanity/queries'

export const metadata: Metadata = { title: 'Technical & Mapping Services' }

export const revalidate = 3600

const staticServices = [
  {
    title: 'Land & Lease Mapping',
    content: 'GIS-based mapping of leasehold positions, unit boundaries, and land grids. We produce high-quality maps suitable for landowner presentations, regulatory filings, and operations planning.',
  },
  {
    title: 'Seismic Mapping Support',
    content: 'Integration of seismic survey data with land and lease mapping to support exploration decisions. Our team coordinates shot-hole permit acquisition, surface waiver negotiations, and post-survey documentation.',
  },
  {
    title: 'Digital Imagery',
    content: 'High-resolution digital imagery acquisition and processing for surface reconnaissance, pipeline planning, and environmental baseline documentation. We utilize the latest satellite and aerial imagery sources.',
  },
]

export default async function TechnicalPage() {
  let services = staticServices

  try {
    const sanityServices = await getServicesByCategory('technical')
    if (sanityServices.length > 0) {
      services = sanityServices.map(({ title, content }) => ({ title, content }))
    }
  } catch {
    // Sanity not configured yet — fall back to static content
  }

  return (
    <div className="section-padding container-max">
      <h1 className="section-title">Technical & Mapping Services</h1>
      <p className="section-subtitle mb-10">
        Advanced mapping and imagery capabilities to support every phase of exploration and production.
      </p>
      <ServiceAccordion services={services} />
    </div>
  )
}
