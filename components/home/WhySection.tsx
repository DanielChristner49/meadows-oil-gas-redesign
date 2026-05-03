import PinnedReveal, { type RevealItem } from '@/components/scroll/PinnedReveal'

const items: RevealItem[] = [
  {
    id: 'experience',
    number: '01',
    title: 'Experience',
    body: 'Over 17 years navigating Oklahoma mineral rights, title chains, and leasehold acquisitions. We have worked every major Oklahoma basin.',
    detail: ['Panhandle Eastern & Western', 'Anadarko Basin', 'Arkoma Basin', 'South Central Oklahoma'],
  },
  {
    id: 'precision',
    number: '02',
    title: 'Precision',
    body: "Title opinions and curative work built on exhaustive courthouse research. We don't cut corners on chain-of-title.",
    detail: ['County deed and mortgage records', 'Probate and estate research', 'Curative drafting', 'Run sheet preparation'],
  },
  {
    id: 'reach',
    number: '03',
    title: 'Reach',
    body: 'Based in Oklahoma City with the capability to handle domestic projects across the midcontinent and foreign projects on request.',
    detail: ['Oklahoma City headquarters', 'Domestic project coverage', 'International capability'],
  },
  {
    id: 'trust',
    number: '04',
    title: 'Trust',
    body: 'AAPL and OCAPL members. Every engagement built on transparency, clear deliverables, and direct communication.',
    detail: ['AAPL member', 'OCAPL member', 'Fixed-scope project agreements', 'Direct principal contact'],
  },
]

export default function WhySection() {
  return (
    <PinnedReveal
      items={items}
      label="Why Meadows"
      className="bg-[#050505]"
    />
  )
}
