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
    <Accordion type="single" collapsible className="w-full">
      {services.map(({ title, content }, i) => (
        <AccordionItem key={title} value={`item-${i}`}>
          <AccordionTrigger
            className="text-left font-semibold hover:no-underline"
            style={{ color: 'var(--color-brand-navy)' }}
          >
            {title}
          </AccordionTrigger>
          <AccordionContent
            className="leading-relaxed"
            style={{ color: 'var(--color-brand-gray)' }}
          >
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
