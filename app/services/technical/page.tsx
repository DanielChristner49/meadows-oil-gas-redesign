import type { Metadata } from 'next'
import ServiceAccordion from '@/components/services/ServiceAccordion'

export const metadata: Metadata = { title: 'Technical & Mapping Services' }

const services = [
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

export default function TechnicalPage() {
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
