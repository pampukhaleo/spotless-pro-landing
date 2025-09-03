
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Clock, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "200+", label: "Happy Families" },
    { icon: Clock, number: "1500+", label: "Hours Cleaned" },
    { icon: Award, number: "4.9/5", label: "Average Rating" },
    { icon: Shield, number: "100%", label: "Insured & Bonded" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-trust text-trust-foreground">About Us</Badge>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              SpotlessPro Cleaning-Ironing Services LTD
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              SpotlessPro Cleaning-Ironing Services LTD was founded by Yevheniia Lukianenko in 2025 officially. In 2022, I decided to do cleaning in England. Yevheniia believes that cleanliness in the house is the main aspect of life for every person, especially when there are children in the family.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              By contacting us with a request for help with cleaning or other services, you will receive a detailed description of all the services that we provide. Yevheniia will also select an ideal convenient time for you.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our fully insured, friendly team will come to your home and perform at the highest level all your tasks that you told us about. Thanks to accreditation and commitments in the field of labor protection and safety, we offer both one-time and regular services, adapted to your needs.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              SpotlessPro Cleaning-Ironing Services LTD strives to provide exceptional home services that meet your needs. Our excellent reviews indicate that our customers are satisfied with our service. Our specialists do their job perfectly. We know the value of cleanliness and order in the house. And our team is ready to make it a reality. SpotlessPro Cleaning-Ironing Services LTD is your reliable partner in all matters of order in the house.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg border-2 border-secondary/50">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <img 
              src={`anton-SnKfmC1I9fU-unsplash.jpg`}
              alt="Professional cleaning team"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <img 
              src={`anton-SnKfmC1I9fU-unsplash.jpg`}
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
