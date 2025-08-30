
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Why choose us?",
      answer: "We are a family-run team committed to friendly, reliable service and customer satisfaction. With over three years of industry experience, we take pride in delivering high-quality work with meticulous attention to detail."
    },
    {
      question: "What services do you offer?",
      answer: "We provide house cleaning, flat cleaning, office cleaning, deep cleaning, end of tenancy cleaning, special cleaning, one-off/spring cleaning, and ironing. We also assemble and disassemble all types of furniture. Our pricing is straightforward, charged at a simple hourly rate. For a list of tasks we cover, please see our regular domestic cleaning page."
    },
    {
      question: "Am I tied into a contract?",
      answer: "No, you can cancel your cleaning service at any time with just 12 hours' notice."
    },
    {
      question: "Is there a minimum booking time?",
      answer: "Yes, the minimum booking is 2 hours per cleaner."
    },
    {
      question: "Are your cleaners insured?",
      answer: "Yes, all our cleaners are fully insured for your peace of mind."
    },
    {
      question: "Will I have the same cleaner each time?",
      answer: "We aim to send the same cleaner whenever possible, but this cannot always be guaranteed."
    },
    {
      question: "Do I need to be at home during the cleaning?",
      answer: "No, you don't have to be present. If you wish, you can provide us with your keys or a key safe code, which we handle securely. Your cleaner will return the keys once the job is complete."
    },
    {
      question: "Do you work on Bank Holidays?",
      answer: "Yes, we operate on Bank Holidays. Please note that rates may be slightly higher on these days."
    },
    {
      question: "Can I book a specific time for my cleaning?",
      answer: "Yes, you can choose a time slot that suits you."
    },
    {
      question: "Do I need to supply cleaning products and equipment?",
      answer: "No, we provide all necessary cleaning products and equipment. We primarily use eco-friendly sprays that are safe for you and our team, along with professional tools like electric mops and steam cleaners to ensure a thorough clean."
    },
    {
      question: "Do you collect and return ironing?",
      answer: "Yes, we will collect your laundry and return it freshly ironed, usually the next day."
    },
    {
      question: "Do your staff bring their own tools for furniture assembly?",
      answer: "Yes, our team carries all the professional tools required for assembling or disassembling furniture."
    },
    {
      question: "How do I pay for your services?",
      answer: "Payments can be made in cash or by bank transfer on the day the service is completed."
    },
    {
      question: "Do you provide receipts?",
      answer: "Yes, we issue electronic receipts via email after each service."
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
            Want to know more about our cleaning services? Here are the answers to some common questions:
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
