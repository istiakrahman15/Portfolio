// Builds src/map-data.json: SVG paths for Bangladesh and its neighbours, from Natural Earth
// country borders (the `world-atlas` package). Country level only: there is deliberately no city
// or street-level marker.
// Usage: npm i --no-save world-atlas topojson-client && node scripts/build-map.mjs
import { readFile, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { geoMercator, geoPath } from 'd3-geo'

const require = createRequire(import.meta.url)
const { feature } = require('topojson-client')
const topo = JSON.parse(await readFile(require.resolve('world-atlas/countries-10m.json'), 'utf8'))
const all = feature(topo, topo.objects.countries).features

const W = 800
const H = 900
const keep = ['Bangladesh', 'India', 'Myanmar', 'Bhutan', 'Nepal', 'China']
const feats = all.filter((f) => keep.includes(f.properties.name))
const bd = feats.find((f) => f.properties.name === 'Bangladesh')

const projection = geoMercator().fitExtent(
  [
    [110, 250],
    [W - 110, H - 260],
  ],
  bd,
)
projection.clipExtent([
  [-10, -10],
  [W + 10, H + 10],
])
const path = geoPath(projection).digits(1)
const sea = projection([89.6, 20.6])
// label spots chosen by hand (lon, lat): a country's centroid can sit far off screen or inside Bangladesh
const spots = { India: [87.2, 24.3], Myanmar: [93.7, 21.8] }
const out = {
  width: W,
  height: H,
  pin: path.centroid(bd).map(Math.round),
  sea: sea.map(Math.round),
  countries: feats.map((f) => ({
    name: f.properties.name,
    bd: f === bd,
    c: (spots[f.properties.name] ? projection(spots[f.properties.name]) : path.centroid(f)).map(Math.round),
    d: path(f) ?? '',
  })),
}
await writeFile(new URL('../src/map-data.json', import.meta.url), JSON.stringify(out))
console.log('pin', out.pin, out.countries.map((c) => `${c.name}:${c.d.length}`).join(' '))
