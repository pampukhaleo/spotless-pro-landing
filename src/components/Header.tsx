
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">SP</span>
          </div>
          <div>
            <h1 className="font-bold text-lg text-foreground">SpotlessPro</h1>
            <p className="text-xs text-muted-foreground">Cleaning & Ironing</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('reviews')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4 text-primary" />
              <span>020 7123 4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4 text-primary" />
              <span>hello@spotlesspro.co.uk</span>
            </div>
          </div>
          <Button 
            onClick={() => scrollToSection('booking')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
