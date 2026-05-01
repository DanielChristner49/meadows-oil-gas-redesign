'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const fieldStyle = {
  width: '100%',
  backgroundColor: 'rgba(26,39,68,0.03)',
  border: '1px solid rgba(26,39,68,0.12)',
  borderRadius: '0.5rem',
  padding: '0.75rem 1rem',
  fontSize: '0.875rem',
  color: 'var(--color-brand-navy)',
  transition: 'box-shadow 0.25s cubic-bezier(0.32,0.72,0,1), border-color 0.25s cubic-bezier(0.32,0.72,0,1)',
}

function Field({ children, error, errorId }: { children: React.ReactNode; error?: string; errorId?: string }) {
  return (
    <div>
      {children}
      {error && (
        <p id={errorId} className="text-red-500 text-xs mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-xs tracking-widest uppercase mb-2"
      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-navy)', opacity: 0.7 }}
    >
      {children}
    </label>
  )
}

function addFocusGold(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
  const el = e.currentTarget as HTMLElement
  el.style.boxShadow = '0 0 0 2.5px rgba(212,151,26,0.4)'
  el.style.borderColor = 'rgba(212,151,26,0.6)'
}
function removeFocus(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
  const el = e.currentTarget as HTMLElement
  el.style.boxShadow = 'none'
  el.style.borderColor = 'rgba(26,39,68,0.12)'
}

export default function ContactForm({ formEndpoint }: { formEndpoint: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    setSubmitError(false)
    try {
      const res = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) setSubmitted(true)
      else setSubmitError(true)
    } catch {
      setSubmitError(true)
    }
  }

  if (submitted) {
    return (
      <div
        className="text-center py-12 rounded-xl"
        style={{ backgroundColor: 'rgba(212,151,26,0.06)', border: '1px solid rgba(212,151,26,0.25)' }}
      >
        <p
          className="font-semibold text-lg"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-navy)' }}
        >
          Message Sent
        </p>
        <p className="text-sm mt-2" style={{ color: 'var(--color-brand-gray)' }}>
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <Field error={errors.name?.message} errorId="name-error">
        <Label htmlFor="name">Name *</Label>
        <input
          id="name"
          autoComplete="name"
          required
          aria-required="true"
          aria-describedby={errors.name ? 'name-error' : undefined}
          {...register('name')}
          style={{ ...fieldStyle, borderColor: errors.name ? 'rgba(220,38,38,0.6)' : 'rgba(26,39,68,0.12)' }}
          onFocus={addFocusGold}
          onBlur={removeFocus}
        />
      </Field>

      <Field error={errors.email?.message} errorId="email-error">
        <Label htmlFor="email">Email *</Label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          aria-required="true"
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email')}
          style={{ ...fieldStyle, borderColor: errors.email ? 'rgba(220,38,38,0.6)' : 'rgba(26,39,68,0.12)' }}
          onFocus={addFocusGold}
          onBlur={removeFocus}
        />
      </Field>

      <Field>
        <Label htmlFor="phone">Phone</Label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          {...register('phone')}
          style={fieldStyle}
          onFocus={addFocusGold}
          onBlur={removeFocus}
        />
      </Field>

      <Field>
        <Label htmlFor="service">Service Interest</Label>
        <select
          id="service"
          {...register('service')}
          style={{ ...fieldStyle, cursor: 'pointer' }}
          onFocus={addFocusGold}
          onBlur={removeFocus}
        >
          <option value="">Select a service...</option>
          <option>Leasehold Acquisitions</option>
          <option>Mineral Research</option>
          <option>Title Opinions</option>
          <option>Right-of-Ways</option>
          <option>Wind Leasing</option>
          <option>Mapping Services</option>
          <option>Other</option>
        </select>
      </Field>

      <Field error={errors.message?.message} errorId="message-error">
        <Label htmlFor="message">Message *</Label>
        <textarea
          id="message"
          rows={5}
          required
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
          style={{ ...(fieldStyle as React.CSSProperties), borderColor: errors.message ? 'rgba(220,38,38,0.6)' : 'rgba(26,39,68,0.12)' }}
          onFocus={addFocusGold as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
          onBlur={removeFocus as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
        />
      </Field>

      {submitError && (
        <p
          role="alert"
          className="text-sm px-4 py-3 rounded-lg"
          style={{
            backgroundColor: 'rgba(220,38,38,0.06)',
            border: '1px solid rgba(220,38,38,0.2)',
            color: 'rgba(185,28,28,1)',
          }}
        >
          Message could not be sent. Email us directly at{' '}
          <a
            href="mailto:info@meadowsoilandgas.com"
            style={{ color: 'rgba(185,28,28,1)', textDecoration: 'underline' }}
          >
            info@meadowsoilandgas.com
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full disabled:opacity-60"
        style={{
          backgroundColor: 'var(--color-brand-gold)',
          color: 'white',
          fontFamily: 'var(--font-display)',
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontWeight: 600,
          padding: '1rem',
          borderRadius: '0.5rem',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s cubic-bezier(0.32,0.72,0,1), transform 0.3s cubic-bezier(0.32,0.72,0,1)',
        }}
        onMouseEnter={(e) => {
          if (!isSubmitting) {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-brand-gold-light)'
            ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
          }
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-brand-gold)'
          ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
        }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
