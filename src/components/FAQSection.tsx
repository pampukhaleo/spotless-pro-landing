
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What services do you provide?",
      answer: "House cleaning, flat cleaning, office cleaning, deep cleaning, end of Tenancy cleaning, special cleaning, one off/Spring Cleaning, Ironing. We also assemble and disassemble any type of furniture. We charge a simple hourly rate for all our services. View our regular domestic cleaning tasks for a list of the jobs you can leave to us!"
    },
    {
      question: "Am I bound by any contract for any of your cleaning services?",
      answer: "You can cancel your cleaning at any time. We only ask that you give us 12 hours' notice."
    },
    {
      question: "Do I need to book a minimum number of hours?",
      answer: "Yes, the minimum time is 2 hours."
    },
    {
      question: "Are your cleaners insured?",
      answer: "Yes, our cleaners are fully insured."
    },
    {
      question: "Will the same cleaner visit each time?",
      answer: "We'll always try to send the same cleaner, but this isn't always possible."
    },
    {
      question: "Do I have to be at home during my cleaning appointment?",
      answer: "No. We provide safe storage of your keys if you give it to us. We will give the key to your cleaner or cleaners on the day of cleaning. The cleaner will return the key at the end of the day. Or what is very popular, you give us the code to the key box and we will return it after cleaning."
    },
    {
      question: "Do you working on Bank Holidays?",
      answer: "Yes. The cost of services will be slightly higher."
    },
    {
      question: "Can I book a specific time slot for my cleaning?",
      answer: "Yes."
    },
    {
      question: "Do I have to provide any cleaning products or equipment?",
      answer: "We'll provide all of the cleaning chemicals unless you have any special requirements. We mainly use our own cleaning products and tools. Since we use eco-sprays that do not harm you and our employees. Having an electric mop and using a new mop attachment each time and washing the floor with steam, we thus remove dirt and germs as much as possible."
    },
    {
      question: "Do I need to bring my ironing or do you pick it up yourself?",
      answer: "No, we will come ourselves and take everything, and the next day we will return your ironed things."
    },
    {
      question: "Does our employee have his own tools, or do I need to provide them to assemble or disassemble the furniture?",
      answer: "Our employee has all the necessary professional tools."
    },
    {
      question: "How should I pay for your services?",
      answer: "We accept payment for services both in cash and to a bank business account. Payment is made on the same day the service was provided."
    },
    {
      question: "Do you give receipts?",
      answer: "Yes, we issue an electronic check to your email."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Want to know more about our cleaning service? Here are the answers to our frequently asked questions:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-card-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
