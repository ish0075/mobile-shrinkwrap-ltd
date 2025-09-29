import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Boat Shrink Wrapping", href: "/services/boat-shrink-wrapping" },
    { name: "Machinery Protection", href: "/services/machinery-shrink-wrapping" },
    { name: "Transport & Cargo", href: "/services/transport-cargo-shrink-wrapping" },
    { name: "Construction Wrapping", href: "/services/construction-shrink-wrapping" },
    { name: "Commercial & Industrial", href: "/services/commercial-industrial-shrink-wrapping" },
  ];

  const cities = [
    { name: "Toronto", href: "/shrink-wrapping-toronto-on" },
    { name: "Mississauga", href: "/shrink-wrapping-mississauga-on" },
    { name: "Hamilton", href: "/shrink-wrapping-hamilton-on" },
    { name: "Ottawa", href: "/shrink-wrapping-ottawa-on" },
    { name: "London", href: "/shrink-wrapping-london-on" },
    { name: "Windsor", href: "/shrink-wrapping-windsor-on" },
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">MSW</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Mobile Shrink Wrap Ltd</h3>
                <p className="text-sm text-muted-foreground">Professional Protection Services</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Ontario's trusted mobile shrink wrapping service. Protecting your valuable assets with professional on-site solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/mobileshrinkwrapservices/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Service Areas</h4>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city.name}>
                  <Link
                    to={city.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/service-areas"
              className="text-primary hover:text-primary-light transition-colors text-sm font-medium mt-2 inline-block"
            >
              View All Areas →
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">(905) 327-4381</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">(905) 327-4381</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">mobileshrinkwrapltd@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">Serving Ontario, Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Mobile Shrink Wrap Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;