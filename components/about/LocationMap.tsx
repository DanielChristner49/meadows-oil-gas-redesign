'use client'
import { useEffect, useRef } from 'react'
import { MAPBOX_TOKEN, OFFICE_LOCATIONS, PROJECT_LOCATIONS, DEFAULT_VIEWPORT } from '@/lib/mapbox/config'

function MapFallback() {
  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg"
      style={{ border: '1px solid rgba(26,39,68,0.15)' }}
    >
      <div
        className="flex flex-col items-center justify-center gap-4"
        style={{ height: '480px', backgroundColor: 'var(--color-brand-navy)', color: 'rgba(156,163,175,0.6)' }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Map — Oklahoma City · Bakersfield · 22 project counties
        </p>
      </div>
    </div>
  )
}

export default function LocationMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<unknown>(null)

  useEffect(() => {
    if (map.current || !mapContainer.current || !MAPBOX_TOKEN) return

    let mapInstance: { remove: () => void } | null = null

    Promise.all([import('mapbox-gl'), import('mapbox-gl/dist/mapbox-gl.css')]).then(([{ default: mapboxgl }]) => {
      if (!mapContainer.current) return

      mapboxgl.accessToken = MAPBOX_TOKEN

      const m = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [DEFAULT_VIEWPORT.longitude, DEFAULT_VIEWPORT.latitude],
        zoom: DEFAULT_VIEWPORT.zoom,
        attributionControl: false,
        interactive: false,
      })

      m.addControl(new mapboxgl.AttributionControl({ compact: true }))

      mapInstance = m
      map.current = m

      m.on('load', () => {
        // Office markers — large gold
        OFFICE_LOCATIONS.forEach(({ name, state, description, coordinates }) => {
          const popup = new mapboxgl.Popup({ offset: 28, closeButton: false })
            .setHTML(
              `<div style="padding:10px 12px;font-family:'DM Sans',sans-serif">
                <p style="font-weight:700;font-size:13px;color:#1a2744;margin:0 0 3px">${name}, ${state}</p>
                <p style="font-size:11px;color:#6b7280;margin:0">${description}</p>
              </div>`
            )

          new mapboxgl.Marker({ color: '#d4971a', scale: 1.1 })
            .setLngLat(coordinates)
            .setPopup(popup)
            .addTo(m)
        })

        // Project markers — smaller, distinct style
        PROJECT_LOCATIONS.forEach(({ county, state, coordinates }) => {
          const el = document.createElement('div')
          el.style.cssText = `
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #e8b84b;
            border: 2px solid rgba(13,21,33,0.8);
            cursor: pointer;
          `

          const popup = new mapboxgl.Popup({ offset: 14, closeButton: false })
            .setHTML(
              `<div style="padding:8px 10px;font-family:'DM Sans',sans-serif">
                <p style="font-weight:600;font-size:12px;color:#1a2744;margin:0 0 2px">${county}</p>
                <p style="font-size:11px;color:#6b7280;margin:0">${state} — Active Project</p>
              </div>`
            )

          new mapboxgl.Marker({ element: el })
            .setLngLat(coordinates)
            .setPopup(popup)
            .addTo(m)
        })
      })
    })

    return () => {
      mapInstance?.remove()
      map.current = null
    }
  }, [])

  if (!MAPBOX_TOKEN) return <MapFallback />

  return (
    <div className="rounded-lg overflow-hidden shadow-lg" style={{ border: '1px solid rgba(26,39,68,0.15)' }}>
      <div
        ref={mapContainer}
        role="img"
        style={{ height: '480px', width: '100%' }}
        aria-label="Map showing Meadows Oil and Gas office locations and active project counties"
      />
      <div
        className="flex items-center gap-6 px-4 py-3"
        style={{ backgroundColor: 'var(--color-brand-surface)', borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="flex items-center gap-2">
          <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#d4971a' }} />
          <span className="text-xs" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)' }}>
            Office Location
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#e8b84b', border: '2px solid rgba(13,21,33,0.8)' }} />
          <span className="text-xs" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)' }}>
            Active Project County
          </span>
        </div>
        <span className="text-xs ml-auto" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)' }}>
          {PROJECT_LOCATIONS.length} active project locations
        </span>
      </div>
    </div>
  )
}
