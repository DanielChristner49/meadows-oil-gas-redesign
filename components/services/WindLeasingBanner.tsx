import { Wind } from 'lucide-react'

export default function WindLeasingBanner() {
  return (
    <div id="wind-leasing" className="wind-accent rounded-r-lg p-6 my-8">
      <div className="flex items-start gap-4">
        <Wind
          className="mt-1 shrink-0"
          size={28}
          style={{ color: 'var(--color-brand-green)' }}
        />
        <div>
          <h3
            className="text-lg font-semibold mb-2"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-green)', textTransform: 'uppercase', letterSpacing: '0.04em' }}
          >
            Renewable Energy — Wind Leasing
          </h3>
          <p className="text-sm leading-relaxed text-gray-700">
            As the energy landscape evolves, Meadows Oil and Gas has expanded into wind energy
            land services. We bring the same rigorous land expertise to wind lease acquisitions,
            helping landowners and developers navigate leasehold agreements for clean energy
            projects across the Great Plains and beyond.
          </p>
        </div>
      </div>
    </div>
  )
}
