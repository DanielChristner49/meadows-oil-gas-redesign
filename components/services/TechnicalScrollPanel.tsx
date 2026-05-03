import HorizontalPanel, { type PanelItem } from '@/components/scroll/HorizontalPanel'

const services: PanelItem[] = [
  {
    id: 'mapping',
    title: 'Mapping',
    description: 'County plat maps, section maps, and lease block maps for Oklahoma oil and gas operations.',
    detail: 'County plat · Section maps · Lease block maps',
  },
  {
    id: 'seismic',
    title: 'Seismic Mapping',
    description: 'Integration of seismic survey data with land ownership maps for prospect evaluation and lease targeting.',
    detail: 'Seismic data integration · Prospect mapping · Survey correlation',
  },
  {
    id: 'imagery',
    title: 'Digital Imagery',
    description: 'High-resolution aerial and satellite imagery for field operations documentation and project reporting.',
    detail: 'Aerial imagery · Satellite data · Operations documentation',
  },
]

export default function TechnicalScrollPanel() {
  return <HorizontalPanel items={services} label="Technical & Mapping" className="bg-[#050505]" />
}
