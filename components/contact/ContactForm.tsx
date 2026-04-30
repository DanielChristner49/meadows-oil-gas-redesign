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

export default function ContactForm({ formEndpoint }: { formEndpoint: string }) {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    const res = await fetch(formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className="text-center py-12 rounded-lg border"
        style={{ backgroundColor: '#f0fdf4', borderColor: 'var(--color-brand-green)' }}
      >
        <p className="font-semibold text-lg" style={{ color: 'var(--color-brand-green)' }}>
          Thank you!
        </p>
        <p className="text-gray-600 mt-2 text-sm">We&apos;ll be in touch within one business day.</p>
      </div>
    )
  }

  const inputClass =
    'w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: 'var(--color-brand-charcoal)' }}>
          Name *
        </label>
        <input id="name" {...register('name')} className={inputClass} />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: 'var(--color-brand-charcoal)' }}>
          Email *
        </label>
        <input id="email" type="email" {...register('email')} className={inputClass} />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1" style={{ color: 'var(--color-brand-charcoal)' }}>
          Phone
        </label>
        <input id="phone" type="tel" {...register('phone')} className={inputClass} />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1" style={{ color: 'var(--color-brand-charcoal)' }}>
          Service Interest
        </label>
        <select id="service" {...register('service')} className={inputClass}>
          <option value="">Select a service...</option>
          <option>Leasehold Acquisitions</option>
          <option>Mineral Research</option>
          <option>Title Opinions</option>
          <option>Right-of-Ways</option>
          <option>Wind Leasing</option>
          <option>Mapping Services</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: 'var(--color-brand-charcoal)' }}>
          Message *
        </label>
        <textarea id="message" rows={5} {...register('message')} className={inputClass} />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-60"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
