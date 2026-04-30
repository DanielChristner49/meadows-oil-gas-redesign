'use client'
import { useEffect, useRef } from 'react'
import { MAPBOX_TOKEN, OFFICE_LOCATIONS, DEFAULT_VIEWPORT } from '@/lib/mapbox/config'

export default function LocationMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<unknown>(null)

  useEffect(() => {
    if (map.current || !mapContainer.current || !MAPBOX_TOKEN) return

    let mapInstance: {
      remove: () => void
    } | null = null

    import('mapbox-gl').then(({ default: mapboxgl }) => {
      if (!mapContainer.current) return

      mapboxgl.accessToken = MAPBOX_TOKEN

      const m = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [DEFAULT_VIEWPORT.longitude, DEFAULT_VIEWPORT.latitude],
        zoom: DEFAULT_VIEWPORT.zoom,
      })

      mapInstance = m
      map.current = m

      OFFICE_LOCATIONS.forEach(({ name, state, description, coordinates }) => {
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div style="padding:8px">
            <strong>${name}, ${state}</strong>
            <p style="font-size:12px;margin-top:4px;color:#6b7280">${description}</p>
          </div>`
        )

        new mapboxgl.Marker({ color: '#d4971a' })
          .setLngLat(coordinates)
          .setPopup(popup)
          .addTo(m)
      })
    })

    return () => {
      mapInstance?.remove()
      map.current = null
    }
  }, [])

  return (
    <div
      ref={mapContainer}
      className="w-full rounded-lg overflow-hidden shadow-md"
      style={{ height: '450px' }}
      aria-label="Map showing Meadows Oil and Gas office locations"
    />
  )
}
