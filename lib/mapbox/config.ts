export const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? ''

export const OFFICE_LOCATIONS = [
  {
    id: 'okc',
    name: 'Oklahoma City',
    state: 'OK',
    description: 'Primary operations hub serving Mid-Continent basin projects.',
    coordinates: [-97.5164, 35.4676] as [number, number],
  },
  {
    id: 'bakersfield',
    name: 'Bakersfield',
    state: 'CA',
    description: 'West Coast office serving San Joaquin Valley operators.',
    coordinates: [-119.0187, 35.3733] as [number, number],
  },
]

export const DEFAULT_VIEWPORT = {
  longitude: -108,
  latitude: 37,
  zoom: 4,
}
