import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ServiceAccordion from '@/components/services/ServiceAccordion'

const services = [
  { title: 'Leasehold Acquisitions', content: 'We negotiate and acquire oil and gas leases on behalf of operators.' },
  { title: 'Title Opinions', content: 'Certified landmen review title chains to render formal legal opinions.' },
]

describe('ServiceAccordion', () => {
  it('renders all service titles', () => {
    render(<ServiceAccordion services={services} />)
    expect(screen.getByText('Leasehold Acquisitions')).toBeInTheDocument()
    expect(screen.getByText('Title Opinions')).toBeInTheDocument()
  })

  it('expands content when title is clicked', async () => {
    render(<ServiceAccordion services={services} />)
    const trigger = screen.getByText('Leasehold Acquisitions')
    await userEvent.click(trigger)
    expect(screen.getByText(/negotiate and acquire/i)).toBeInTheDocument()
  })
})
