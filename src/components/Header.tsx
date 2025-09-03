
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const WhatsAppIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
  );

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={ `${ import.meta.env.BASE_URL }/logo.png` } className="h-[80px]" alt="logo"/>
          {/*<div>*/}
          {/*  <h1 className="font-bold text-lg text-foreground">SpotlessPro</h1>*/}
          {/*  <p className="text-xs text-primary/70">Cleaning & Ironing LTD</p>*/}
          {/*</div>*/}
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('reviews')}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <a 
              href="https://wa.me/447368647001" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors"
            >
              <WhatsAppIcon />
              <span>+447368647001</span>
            </a>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4 text-primary" />
              <span>spotlessprohome@gmail.com</span>
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
