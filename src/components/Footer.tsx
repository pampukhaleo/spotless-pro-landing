import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const WhatsAppIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
  );

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src={ `${ import.meta.env.BASE_URL }/logo2.png` } className="h-[60px]" alt="logo"/>
              <div>
                <h3 className="font-bold text-xl">SpotlessPro</h3>
                <p className="text-sm opacity-90">Cleaning & Ironing Service LTD</p>
              </div>
            </div>
            <p className="opacity-90 leading-relaxed mb-4">
              England's most trusted cleaning service, serving families across the UK with premium 
              cleaning, ironing, and household services since 2018.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1B5LKWgESe/?mibextid=wwXIfr">
                <Facebook className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Regular Cleaning</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Deep Cleaning</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Ironing Service</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Furniture Assembly</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">End of Tenancy</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Office Cleaning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">

              <a 
                href="https://wa.me/447368647001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:opacity-80 transition-opacity"
              >
                <WhatsAppIcon />
                <div>
                  <p className="font-medium">+447368647001</p>
                  <p className="text-sm opacity-90">WhatsApp available</p>
                </div>
              </a>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5" />
                <div>
                  <p className="font-medium">Yevaluky0723@gmail.com</p>
                  <p className="text-sm opacity-90">Quick response guaranteed</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <p className="font-medium">Basingstoke RG21 5NQ</p>
                  <p className="text-sm opacity-90">Hampshire</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Business Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-sm opacity-90">8:00 AM - 8:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <div>
                  <p className="font-medium">Saturday - Sunday</p>
                  <p className="text-sm opacity-90">9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg">
              <p className="text-sm font-medium mb-2">Emergency Service Available</p>
              <p className="text-xs opacity-90">Same-day and next-day appointments for urgent cleaning needs</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="opacity-90">
            © 2022 SpotlessPro Cleaning Ironing Service LTD. All rights reserved.
            <span className="mx-2">|</span>
            Registered in England & Wales
            <span className="mx-2">|</span>
            Fully Insured & Bonded
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
