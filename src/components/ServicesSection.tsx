
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Zap, Shirt, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Regular Cleaning",
      description: "Weekly, bi-weekly, or monthly cleaning to keep your home spotless year-round.",
      features: ["Dusting & Vacuuming", "Kitchen & Bathroom Deep Clean", "Floor Mopping", "Bin Emptying"],
      price: "From £25/hour",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Deep Cleaning",
      description: "Comprehensive one-time or seasonal deep cleaning for a fresh start.",
      features: ["Inside Appliances", "Window Cleaning", "Carpet Deep Clean", "Detailed Scrubbing"],
      price: "From £150/session",
      color: "text-purple-600"
    },
    {
      icon: Shirt,
      title: "Ironing Service",
      description: "Professional ironing and garment care to keep your clothes looking perfect.",
      features: ["Pickup & Delivery", "Delicate Fabric Care", "Shirt Pressing", "Same Day Service"],
      price: "From £2/item",
      color: "text-green-600"
    },
    {
      icon: Wrench,
      title: "Furniture Assembly",
      description: "Expert furniture assembly service for all your IKEA and flat-pack needs.",
      features: ["All Brands Supported", "Tool Provision", "Cleanup Included", "Assembly Guarantee"],
      price: "From £40/hour",
      color: "text-orange-600"
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
            From regular maintenance to deep cleaning and specialized services, we've got your home covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card-hover border-0 shadow-lg bg-card">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-mist flex items-center justify-center border-2 border-primary ${service.color}`}>
                  <service.icon className="w-8 h-8" />
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
                
                <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                <Button 
                  onClick={scrollToBooking}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
