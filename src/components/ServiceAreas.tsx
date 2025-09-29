import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const ServiceAreas = () => {
  const majorCities = [
    { name: "Toronto", href: "/shrink-wrapping-toronto-on" },
    { name: "Mississauga", href: "/shrink-wrapping-mississauga-on" },
    { name: "Hamilton", href: "/shrink-wrapping-hamilton-on" },
    { name: "Ottawa", href: "/shrink-wrapping-ottawa-on" },
    { name: "London", href: "/shrink-wrapping-london-on" },
    { name: "Windsor", href: "/shrink-wrapping-windsor-on" },
    { name: "Oakville", href: "/shrink-wrapping-oakville-on" },
    { name: "Burlington", href: "/shrink-wrapping-burlington-on" },
    { name: "Niagara Falls", href: "/shrink-wrapping-niagara-on" },
    { name: "Sudbury", href: "/shrink-wrapping-sudbury-on" },
    { name: "Kingston", href: "/shrink-wrapping-kingston-on" },
    { name: "Barrie", href: "/shrink-wrapping-barrie-on" },
    { name: "St. Catharines", href: "/shrink-wrapping-st-catharines-on" },
    { name: "Brampton", href: "/shrink-wrapping-brampton-on" },
    { name: "Scarborough", href: "/shrink-wrapping-scarborough-on" },
    { name: "Milton", href: "/shrink-wrapping-milton-on" },
    { name: "Grimsby", href: "/shrink-wrapping-grimsby-on" },
    { name: "Welland", href: "/shrink-wrapping-welland-on" },
    { name: "Thorold", href: "/shrink-wrapping-thorold-on" },
    { name: "Niagara On The Lake", href: "/shrink-wrapping-niagara-on-the-lake-on" },
    { name: "Fort Erie", href: "/shrink-wrapping-fort-erie-on" },
    { name: "Port Colborne", href: "/shrink-wrapping-port-colborne-on" },
    { name: "Fonthill", href: "/shrink-wrapping-fonthill-on" },
    { name: "Wainfleet", href: "/shrink-wrapping-wainfleet-on" },
    { name: "Stoney Creek", href: "/shrink-wrapping-stoney-creek-on" },
    { name: "Lincoln", href: "/shrink-wrapping-lincoln-on" },
    { name: "Muskoka", href: "/shrink-wrapping-muskoka-on" },
  ];

  const regions = [
    { name: "Greater Toronto Area (GTA)", href: "/regions/gta" },
    { name: "Golden Horseshoe", href: "/regions/golden-horseshoe" },
    { name: "Muskoka Region", href: "/regions/muskoka" }, 
    { name: "Kawarthas", href: "#" },
    { name: "Niagara Region", href: "/regions/niagara" },
    { name: "Southwest Ontario", href: "/regions/southwest-ontario" },
    { name: "Eastern Ontario", href: "/regions/eastern-ontario" },
    { name: "Central Ontario", href: "#" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Serving <span className="gradient-text">All of Ontario</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mobile shrink wrapping services delivered directly to your location across Ontario. No job too big or too small.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Major Cities */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <MapPin className="w-6 h-6 text-secondary mr-2" />
              Major Service Cities
            </h3>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {majorCities.map((city) => (
                <a
                  key={city.name}
                  href={city.href}
                  className="group p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-medium transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full group-hover:bg-primary transition-colors"></div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {city.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Regions */}
            <h4 className="text-lg font-semibold text-foreground mb-4">Service Regions</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {regions.map((region) => (
                <a
                  key={region.name}
                  href={region.href}
                  className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors p-2 rounded hover:bg-muted/50"
                >
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full group-hover:bg-primary transition-colors"></div>
                  <span className="text-sm">{region.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-subtle rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Don't see your city?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                We serve the entire province of Ontario. If your location isn't listed, we likely still service your area.
              </p>
              <Button variant="outline" size="sm">
                Check Service Availability
              </Button>
            </div>
          </div>

          {/* Service Info Panel */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-4">Mobile Service Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Response Time</h4>
                    <p className="text-sm text-muted-foreground">24-48 hours for quotes, same-day emergency service available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Travel Radius</h4>
                    <p className="text-sm text-muted-foreground">Up to 200km from major centers, special arrangements for remote areas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Direct Contact</h4>
                    <p className="text-sm text-muted-foreground">Speak directly with technicians familiar with your area</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <Button variant="cta" className="w-full">
                  Get Area-Specific Quote
                </Button>
              </div>
            </div>

            {/* Emergency Service */}
            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-primary mb-2">Emergency Service</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Storm damage? Equipment exposure? We provide 24/7 emergency shrink wrapping across Ontario.
              </p>
              <Button variant="destructive" className="w-full">
                Emergency Hotline: (905) 327-4381
              </Button>
            </div>

            {/* Testimonial */}
            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <blockquote className="text-sm text-muted-foreground italic mb-3">
                "They drove 2 hours to reach our remote marina in Muskoka. Professional service and fair pricing despite the distance."
              </blockquote>
              <footer className="text-xs text-muted-foreground">
                — Marina Owner, Gravenhurst ON
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;