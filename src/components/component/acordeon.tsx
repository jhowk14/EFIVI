import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"

type AccordionData = {
  value: string;
  question: string;
  answer: string;
}

export function Acordeon({ items }: { items: AccordionData[] }) {
  return (
    <Accordion collapsible className="max-w-7xl w-full text-center" type="single">
      {items.map((item, index) => (
        <AccordionItem key={index} value={item.value}>
          <AccordionTrigger className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-3 lg:text-lg font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
            <span>{item.question}</span>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 rounded-b-md bg-yellowAcordeon-100 p-4 dark:bg-gray-800">
            <p>{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
