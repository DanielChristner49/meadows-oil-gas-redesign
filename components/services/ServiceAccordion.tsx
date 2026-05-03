'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface Service {
  title: string
  content: string
}

export default function ServiceAccordion({ services }: { services: Service[] }) {
  return (
    <Accordion className="w-full">
      {services.map(({ title, content }, i) => (
        <AccordionItem key={title} value={`item-${i}`}>
          <AccordionTrigger
            className="text-left hover:no-underline py-5"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'var(--color-brand-navy)',
            }}
          >
            <span className="flex items-center gap-4">
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  color: 'var(--color-brand-gold)',
                  opacity: 0.7,
                  minWidth: '1.5rem',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              {title}
            </span>
          </AccordionTrigger>
          <AccordionContent
            className="leading-relaxed pl-10 pb-5"
            style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)' }}
          >
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
