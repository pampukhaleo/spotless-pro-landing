
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Clock, Shield } from "lucide-react";

const HeroSection = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 fade-in-up">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-primary-foreground text-sm font-medium">Trusted by 2,000+ UK Families</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight fade-in-up stagger-1">
              Professional Cleaning & Ironing Services in 
              <span className="block text-yellow-400">England</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed fade-in-up stagger-2">
              Transform your home with our premium cleaning, ironing, and furniture assembly services. 
              Trusted, insured, and rated 5-stars across London and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 fade-in-up stagger-3">
              <Button 
                size="lg" 
                onClick={scrollToBooking}
                className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-8 py-4 text-lg"
              >
                Book Your Service Today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg"
              >
                Get Free Quote
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 fade-in-up stagger-4">
              {[
                { icon: CheckCircle, text: "Fully Insured" },
                { icon: Clock, text: "Same Day Service" },
                { icon: Shield, text: "100% Guarantee" },
                { icon: Star, text: "5-Star Rated" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-primary-foreground/90">
                  <item.icon className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative fade-in-up stagger-2">
            <div className="bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/10">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional cleaning service"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              
              <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground px-6 py-3 rounded-xl shadow-lg">
                <div className="font-bold text-lg">£25</div>
                <div className="text-sm">Starting from</div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-background text-foreground px-4 py-2 rounded-xl shadow-lg">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-sm text-muted-foreground">(2,340 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
