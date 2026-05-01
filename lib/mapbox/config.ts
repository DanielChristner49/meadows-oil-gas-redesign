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

export const PROJECT_LOCATIONS: {
  id: string
  county: string
  state: string
  coordinates: [number, number]
}[] = [
  // Oklahoma
  { id: 'ok-stephens',  county: 'Stephens Co',  state: 'OK', coordinates: [-97.849,  34.486] },
  { id: 'ok-garvin',    county: 'Garvin Co',    state: 'OK', coordinates: [-97.341,  34.670] },
  { id: 'ok-grady',     county: 'Grady Co',     state: 'OK', coordinates: [-97.920,  34.998] },
  { id: 'ok-caddo',     county: 'Caddo Co',     state: 'OK', coordinates: [-98.386,  35.158] },
  { id: 'ok-hughes',    county: 'Hughes Co',    state: 'OK', coordinates: [-96.255,  34.923] },
  { id: 'ok-blaine',    county: 'Blaine Co',    state: 'OK', coordinates: [-98.425,  35.874] },
  { id: 'ok-canadian',  county: 'Canadian Co',  state: 'OK', coordinates: [-97.980,  35.532] },
  { id: 'ok-custer',    county: 'Custer Co',    state: 'OK', coordinates: [-98.997,  35.656] },
  { id: 'ok-logan',     county: 'Logan Co',     state: 'OK', coordinates: [-97.434,  35.927] },
  { id: 'ok-pittsburg', county: 'Pittsburg Co', state: 'OK', coordinates: [-95.784,  34.930] },
  // California
  { id: 'ca-fresno',    county: 'Fresno Co',        state: 'CA', coordinates: [-119.272, 36.917] },
  { id: 'ca-ventura',   county: 'Ventura Co',       state: 'CA', coordinates: [-119.125, 34.372] },
  { id: 'ca-kern',      county: 'Kern Co',          state: 'CA', coordinates: [-118.731, 35.344] },
  { id: 'ca-la',        county: 'Los Angeles Co',   state: 'CA', coordinates: [-118.244, 34.320] },
  { id: 'ca-sb',        county: 'Santa Barbara Co', state: 'CA', coordinates: [-120.064, 34.742] },
  { id: 'ca-slo',       county: 'San Luis Obispo Co', state: 'CA', coordinates: [-120.436, 35.390] },
  { id: 'ca-tulare',    county: 'Tulare Co',        state: 'CA', coordinates: [-118.799, 36.215] },
  // Other states
  { id: 'co-weld',      county: 'Weld Co',      state: 'CO', coordinates: [-104.370, 40.554] },
  { id: 'nd-dunn',      county: 'Dunn Co',      state: 'ND', coordinates: [-102.621, 47.359] },
  { id: 'oh-athens',    county: 'Athens Co',    state: 'OH', coordinates: [-82.116,  39.328] },
  { id: 'oh-washington',county: 'Washington Co',state: 'OH', coordinates: [-81.609,  39.454] },
  { id: 'nm-quay',      county: 'Quay Co',      state: 'NM', coordinates: [-103.565, 35.091] },
]

export const DEFAULT_VIEWPORT = {
  longitude: -105,
  latitude: 38,
  zoom: 3.8,
}
