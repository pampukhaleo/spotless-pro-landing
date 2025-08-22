
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-foreground text-primary rounded-lg flex items-center justify-center">
                <span className="font-bold">SP</span>
              </div>
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
              <Facebook className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
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
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5" />
                <div>
                  <p className="font-medium">020 7123 4567</p>
                  <p className="text-sm opacity-90">Available 7 days a week</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5" />
                <div>
                  <p className="font-medium">hello@spotlesspro.co.uk</p>
                  <p className="text-sm opacity-90">Quick response guaranteed</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <p className="font-medium">London & Surrounding Areas</p>
                  <p className="text-sm opacity-90">Covering all major UK cities</p>
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
            © 2024 SpotlessPro Cleaning Ironing Service LTD. All rights reserved. 
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
