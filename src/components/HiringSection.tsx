import { CheckCircle2, Mail, Sparkles } from "lucide-react";

const HiringSection = () => {
  const lookingFor = [
    "Reliable, responsible and punctual individuals",
    "A professional and respectful attitude towards clients and their homes",
    "Good attention to detail and high standards of cleaning",
    "Ability to work independently and as part of a team",
    "Cleaning experience is an advantage, but we are happy to consider candidates without previous professional experience",
    "Having your own car and a valid driving licence is an advantage",
    "A genuine willingness to work, learn and develop",
  ];

  const weOffer = [
    "Flexible working schedule",
    "Regular work with established clients",
    "A professional and supportive working environment",
    "Opportunities to increase your working hours as the company grows",
    "Opportunities for further responsibility and career progression within the company",
    "The chance to become part of a growing business and develop alongside us",
  ];

  return (
    <section id="careers" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">We're Hiring</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Spotless Pro Cleaning-Ironing Services LTD is growing, and we're looking for reliable
            and motivated Cleaners to join our team.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We are a growing professional cleaning company providing high-quality cleaning services
            to our clients. As our client base continues to expand, we are looking for responsible
            people who take pride in their work and would like the opportunity to grow with the company.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-card-foreground mb-6">
              What we're looking for
            </h3>
            <ul className="space-y-4">
              {lookingFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-card-foreground mb-6">
              What we offer
            </h3>
            <ul className="space-y-4">
              {weOffer.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed mb-8">
            We welcome applications from candidates who are serious about their work and are looking
            for more than just occasional cleaning jobs. We value reliability, quality,
            professionalism and people who want to build a stable working relationship with the company.
          </p>

          <div className="bg-card border border-border rounded-xl p-8 shadow-sm mb-8">
            <h3 className="text-xl font-bold text-card-foreground mb-3">
              Interested in joining our team?
            </h3>
            <p className="text-muted-foreground mb-6">
              Send us a brief introduction about yourself, your availability, previous experience
              (if applicable), and whether you have your own transport.
            </p>
            <a
              href="mailto:recruitment@spotlessprohome.co.uk?subject=Cleaner%20Application%20%E2%80%93%20Spotless%20Pro"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              recruitment@spotlessprohome.co.uk
            </a>
          </div>

          <p className="text-lg font-semibold text-foreground">
            Spotless Pro Cleaning-Ironing Services LTD
          </p>
          <p className="text-muted-foreground italic">
            Professional standards. Reliable people. Growing together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
