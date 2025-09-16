import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Anchor, Cog, Truck, Building, Factory, Home, ArrowRight } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Anchor,
      title: "Boat Shrink Wrapping",
      description: "Professional winterization for boats, yachts, and marine equipment. Protect against snow, ice, and moisture damage.",
      features: ["Winter storage protection", "Custom fit installation", "Ventilation systems", "UV-resistant materials"],
      href: "/services/boat-shrink-wrapping",
    },
    {
      icon: Cog,
      title: "Machinery Shrink Wrapping",
      description: "Industrial equipment protection during storage, transport, or outdoor use. Keep machinery safe from elements.",
      features: ["Heavy machinery protection", "Corrosion prevention", "Dust and debris shield", "Long-term storage"],
      href: "/services/machinery-shrink-wrapping",
    },
    {
      icon: Truck,
      title: "Transport & Cargo",
      description: "Secure cargo and freight during transport. Weather-resistant wrapping for shipments and logistics.",
      features: ["Cargo stabilization", "Weather protection", "Tamper-evident sealing", "Load securing"],
      href: "/services/transport-cargo-shrink-wrapping",
    },
    {
      icon: Building,
      title: "Construction Wrapping",
      description: "Temporary weather protection for construction sites, scaffolding, and building materials.",
      features: ["Scaffold enclosure", "Material protection", "Weather barriers", "Site security"],
      href: "/services/construction-shrink-wrapping",
    },
    {
      icon: Factory,
      title: "Commercial & Industrial",
      description: "Large-scale shrink wrapping for commercial facilities, equipment, and industrial applications.",
      features: ["Large structure wrapping", "Equipment mothballing", "Facility protection", "Custom solutions"],
      href: "/services/commercial-industrial-shrink-wrapping",
    },
    {
      icon: Home,
      title: "Residential Services",
      description: "Home and property protection including pools, outdoor furniture, and seasonal equipment.",
      features: ["Pool winterization", "Furniture protection", "Equipment storage", "Seasonal wrapping"],
      href: "/services/residential-shrink-wrapping",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional <span className="gradient-text">Shrink Wrapping</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From boats to buildings, we protect what matters most with mobile shrink wrapping services across Ontario.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="group hover:shadow-strong transition-all duration-300 border-0 shadow-medium bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="ghost" 
                    className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={service.href}>
                      Learn More About {service.title}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-strong">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every project is unique. Our experts will assess your specific needs and provide a tailored shrink wrapping solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Request Custom Quote
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+1-905-328-1271">Call (905) 328-1271</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;