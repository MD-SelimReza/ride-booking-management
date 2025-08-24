import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const Faq = ({
  heading = 'Frequently Asked Questions',
  items = [
    {
      id: 'faq-1',
      question: 'How do I book a ride?',
      answer:
        'Simply enter your pickup and drop-off locations in the app, choose your preferred ride option, and confirm your booking. A nearby driver will be assigned instantly.',
    },
    {
      id: 'faq-2',
      question: 'Can I schedule a ride in advance?',
      answer:
        'Yes, you can schedule rides up to 7 days in advance. Just select the "Schedule Ride" option, pick your time and date, and your driver will be ready on time.',
    },
    {
      id: 'faq-3',
      question: 'What payment methods are supported?',
      answer:
        'We support multiple payment methods including credit/debit cards, mobile wallets, and cash (depending on your region). You can manage payment options in your profile settings.',
    },
    {
      id: 'faq-4',
      question: 'How do I contact my driver?',
      answer:
        'Once a driver is assigned, you can call or message them directly from within the app using the built-in communication feature.',
    },
    {
      id: 'faq-5',
      question: 'What if I leave something in the car?',
      answer:
        'You can report a lost item from the ride history section in the app. The system will connect you with your driver to help retrieve your belongings.',
    },
    {
      id: 'faq-6',
      question: 'Is my ride insured and safe?',
      answer:
        'Yes, all rides are insured and every driver undergoes a strict background check. In-app safety features like ride tracking and emergency assistance are also available.',
    },
    {
      id: 'faq-7',
      question: 'How can I become a driver?',
      answer:
        'To join as a driver, visit our Driver Registration page, upload the required documents, and complete the verification process. Once approved, you can start accepting rides.',
    },
  ],
}: Faq1Props) => {
  return (
    <section className="py-20 container w-full mx-auto px-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-10 text-3xl font-semibold text-center">{heading}</h1>
        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-muted rounded-2xl px-4 shadow-sm border"
            >
              <AccordionTrigger className="font-medium py-4 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
