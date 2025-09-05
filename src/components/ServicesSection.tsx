
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Zap, Shirt, LampDesk, Hammer, BrushCleaning, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Shirt,
      title: "Ironing",
      description: "We work on a Collect and Return basis. We use professional equipment, which gently irons all types of fabric, we also have special sprays that help iron problematic fabrics.",
      features: ["Collect & Return", "Professional Equipment", "All Fabric Types", "24-48h Turnaround"],
      price: "From £30 per 40l",
      color: "text-green-600"
    },
    {
      icon: Sparkles,
      title: "Regular Cleaning",
      description: "We recommend this done once or twice a month. We dust all surfaces, remove cobwebs, wipe all the mirrors, vacuum floors and carpets, mop hard floors and laminate.",
      features: ["Dusting & Vacuuming", "Mirror Wiping", "Floor Mopping", "Bin Emptying", "Bedding Optional"],
      price: "From £25/hour",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Deep Cleaning",
      description: "Our deep cleaning service goes far beyond the basics. We provide a thorough clean of the kitchen, including the inside of appliances like the fridge, oven, and microwave.",
      features: ["Inside Appliances", "Behind & Under Furniture", "Grout Scrubbing", "High-Touch Points", "Fresh & Sanitised"],
      price: "From £35/hour",
      color: "text-purple-600"
    },
    {
      icon: LampDesk,
      title: "Office Cleaning",
      description: "We understand the importance of a clean, tidy workspace. Our office cleaning service covers everything from daily upkeep to detailed cleans.",
      features: ["Desk & Communal Areas", "Sanitised High-Touch Points", "Carpet & Hard Floors", "Tailored to Schedule"],
      price: "From £35/hour",
      color: "text-orange-600"
    },
    {
      icon: Sparkles,
      title: "End of Tenancy Cleaning",
      description: "Our End of Tenancy cleaning service is designed to help tenants and landlords ensure the property is spotless and ready for the next chapter.",
      features: ["Comprehensive Deep Clean", "Inside Appliances & Cupboards", "Behind & Under Furniture", "Deposit Back Guarantee"],
      price: "From £35/hour",
      color: "text-cyan-600"
    },
    {
      icon: Zap,
      title: "Post-Party Cleaning",
      description: "Our Post Party cleaning service is here to take the stress out of tidying up after your celebrations.",
      features: ["Complete Venue Clean-up", "Rubbish & Spill Removal", "Kitchen & Bathroom Sanitising", "Quick & Efficient"],
      price: "From £35/hour",
      color: "text-pink-600"
    },
    {
      icon: Hammer,
      title: "Furniture Assembly",
      description: "We assemble flat-pack and modular furniture quickly and safely. We bring professional tools, follow instructions, and tidy up packaging after the job.",
      features: [
        "IKEA/Argos/Wayfair flat-packs",
        "Beds, wardrobes, desks, shelves",
        "Own pro tools & fixings",
        "Disassembly & re-assembly on request",
        "Packaging clean-up"
      ],
      price: "From £30/hour",
      color: "text-teal-600"
    },
    {
      icon: BrushCleaning,
      title: "Carpet Cleaning",
      description:
        "Professional carpet and carpet-tile shampoo. Price depends on the level of soiling. Child- and pet-safe detergents.",
      features: [
        "Hot Water Extraction",
        "Stain & Odour Treatment",
        "Edge & High-Traffic Areas",
        "Fast Drying",
        "Minimum Order £75"
      ],
      price: "From £5/m² (min £75)",
      color: "text-emerald-600"
    },
    {
      icon: Leaf,
      title: "Garden Help",
      description:
        "Handy help for your garden and outdoor areas. We handle waste, refresh hard surfaces and fencing, and assemble outdoor furniture.",
      features: [
        "Rubbish Removal & Disposal",
        "Patio/Tile Cleaning",
        "Fence Painting",
        "Garden Furniture Assembly"
      ],
      price: "From £30/hour (min £150)",
      color: "text-lime-600"
    }
  ];

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Premium Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are happy to help you with any type of cleaning because we know how much time it can take. We know that each home is individual and the needs are unique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => {
            const serviceId = service.title.toLowerCase().replace(/\s+/g, '-');
            return (
              <Card key={index} id={serviceId} className="service-card-hover border-0 shadow-lg bg-card h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  {/* верх карточки */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-mist flex items-center justify-center border-2 border-primary">
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center justify-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* низ карточки — всегда прижат вниз */}
                <div className="mt-auto w-full">
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                  <Button
                    onClick={scrollToBooking}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
