import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '@/components/contact/ContactForm'

describe('ContactForm', () => {
  it('renders all required fields', () => {
    render(<ContactForm formEndpoint="https://formspree.io/f/test" />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('shows validation error when name is empty on submit', async () => {
    render(<ContactForm formEndpoint="https://formspree.io/f/test" />)
    await userEvent.click(screen.getByRole('button', { name: /send/i }))
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument()
  })

  it('shows validation error for invalid email', async () => {
    render(<ContactForm formEndpoint="https://formspree.io/f/test" />)
    await userEvent.type(screen.getByLabelText(/name/i), 'John')
    await userEvent.type(screen.getByLabelText(/email/i), 'not-an-email')
    await userEvent.click(screen.getByRole('button', { name: /send/i }))
    expect(await screen.findByText(/valid email/i)).toBeInTheDocument()
  })
})
