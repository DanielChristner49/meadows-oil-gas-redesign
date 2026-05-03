'use client'
import { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

const PRIMARY = new Set(['40', '20', '48']) // OK, KS, TX
const EXTENDED = new Set(['35', '08', '05', '29', '31', '22', '56', '38', '46', '30']) // NM, CO, AR, MO, NE, LA, WY, ND, SD, MT

function tierFill(id: string, hovered: boolean) {
  if (PRIMARY.has(id)) return hovered ? '#e0a520' : '#c8921a'
  if (EXTENDED.has(id)) return hovered ? 'rgba(200,146,26,0.5)' : 'rgba(200,146,26,0.28)'
  return hovered ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)'
}

function tierLabel(id: string) {
  if (PRIMARY.has(id)) return 'Primary Service State'
  if (EXTENDED.has(id)) return 'Extended Service Area'
  return null
}

export default function ServiceAreaMap() {
  const [tooltip, setTooltip] = useState<{ name: string; tier: string | null; x: number; y: number } | null>(null)

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <ComposableMap
        projection="geoAlbersUsa"
        style={{ width: '100%', height: 'auto' }}
        projectionConfig={{ scale: 900 }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const id = geo.id as string
              const isHovered = tooltip?.name === geo.properties.name
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(e) => {
                    setTooltip({
                      name: geo.properties.name,
                      tier: tierLabel(id),
                      x: e.clientX,
                      y: e.clientY,
                    })
                  }}
                  onMouseMove={(e) => {
                    setTooltip((prev) =>
                      prev ? { ...prev, x: e.clientX, y: e.clientY } : prev,
                    )
                  }}
                  onMouseLeave={() => setTooltip(null)}
                  style={{
                    default: {
                      fill: tierFill(id, false),
                      stroke: 'rgba(255,255,255,0.08)',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    hover: {
                      fill: tierFill(id, true),
                      stroke: PRIMARY.has(id) ? 'rgba(200,146,26,0.6)' : 'rgba(255,255,255,0.15)',
                      strokeWidth: PRIMARY.has(id) ? 1.5 : 0.5,
                      outline: 'none',
                      cursor: 'default',
                    },
                    pressed: {
                      fill: tierFill(id, true),
                      outline: 'none',
                    },
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Floating tooltip */}
      {tooltip && (
        <div
          style={{
            position: 'fixed',
            left: Math.min(tooltip.x + 12, (typeof window !== 'undefined' ? window.innerWidth : 9999) - 220),
            top: tooltip.y - 8,
            backgroundColor: 'rgba(0,0,0,0.92)',
            border: '1px solid rgba(200,146,26,0.3)',
            borderRadius: '0.375rem',
            padding: '0.5rem 0.875rem',
            pointerEvents: 'none',
            zIndex: 50,
            whiteSpace: 'nowrap',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              color: 'white',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {tooltip.name}
          </p>
          {tooltip.tier && (
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.625rem',
                color: 'var(--color-brand-gold)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginTop: '0.125rem',
              }}
            >
              {tooltip.tier}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
