
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Clock, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "2,000+", label: "Happy Families" },
    { icon: Clock, number: "15,000+", label: "Hours Cleaned" },
    { icon: Award, number: "4.9/5", label: "Average Rating" },
    { icon: Shield, number: "100%", label: "Insured & Bonded" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-trust text-trust-foreground">About SpotlessPro</Badge>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              England's Most Trusted Cleaning Service Since 2018
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              SpotlessPro Cleaning Ironing Service LTD has been transforming homes across England with our 
              premium cleaning and household services. We combine traditional British attention to detail 
              with modern efficiency to deliver exceptional results every time.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our fully trained, insured, and background-checked team takes pride in treating your home 
              with the same care we'd show our own. From busy professionals to growing families, 
              we help you reclaim your time while maintaining a spotless home.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-secondary/50">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professional cleaning team"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1558618666-2c8c443c572a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Clean modern kitchen"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
