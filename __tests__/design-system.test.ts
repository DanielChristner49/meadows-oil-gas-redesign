import { readFileSync } from 'fs'
import { join } from 'path'

const globalsCss = readFileSync(join(process.cwd(), 'app/globals.css'), 'utf-8')

describe('Brand design system CSS', () => {
  it('defines brand-navy color', () => {
    expect(globalsCss).toContain('--color-brand-navy: #050505')
  })

  it('defines brand-gold color', () => {
    expect(globalsCss).toContain('--color-brand-gold: #c8921a')
  })

  it('defines brand-green color', () => {
    expect(globalsCss).toContain('--color-brand-green: #2d7d3a')
  })

  it('defines section-padding utility', () => {
    expect(globalsCss).toContain('.section-padding')
  })

  it('defines container-max utility', () => {
    expect(globalsCss).toContain('.container-max')
  })
})
