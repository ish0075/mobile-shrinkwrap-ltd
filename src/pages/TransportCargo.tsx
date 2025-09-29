import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  Shield, 
  Package, 
  Lock,
  Cloud,
  CheckCircle,
  Phone,
  Calendar,
  MapPin,
  Star,
  Anchor
} from "lucide-react";

// Import transport & cargo shrink wrap images
import transportHeroShrinkwrap from "@/assets/transport-hero-shrinkwrap.jpg";
import cargoStabilization from "@/assets/cargo-stabilization.jpg";
import cargoWeatherProtection from "@/assets/cargo-weather-protection.jpg";
import tamperEvidentSealing from "@/assets/tamper-evident-sealing.jpg";
import loadSecuring from "@/assets/load-securing.jpg";
import cargoInstallationProcess from "@/assets/cargo-installation-process.jpg";

const TransportCargo = () => {
  const services = [
    {
      icon: <Anchor className="h-8 w-8" />,
      title: "Cargo Stabilization",
      description: "Secure and stabilize freight loads to prevent shifting during transport",
      features: ["Load stabilization", "Pallet securing", "Freight bundling", "Movement prevention"],
      image: cargoStabilization,
      alt: "Freight pallets and shipping boxes secured with shrink wrap for transport stability"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Weather Protection",
      description: "Weather-resistant wrapping shields cargo from rain, snow, and environmental damage",
      features: ["Waterproof barrier", "UV protection", "Moisture prevention", "Climate resistance"],
      image: cargoWeatherProtection,
      alt: "Shipping containers and freight covered in weather-resistant shrink wrap material"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Tamper-Evident Sealing",
      description: "Security features that provide visible evidence of tampering or unauthorized access",
      features: ["Security sealing", "Tamper detection", "Chain of custody", "Access control"],
      image: tamperEvidentSealing,
      alt: "Cargo and freight packages with tamper-evident shrink wrap sealing showing security features"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Load Securing",
      description: "Professional load securing techniques ensure safe transport and delivery",
      features: ["Secure fastening", "Load distribution", "Transport safety", "Delivery protection"],
      image: loadSecuring,
      alt: "Truck trailer with cargo and freight securely wrapped and fastened for transport"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Complete Cargo Protection",
      description: "Comprehensive protection against weather, contamination, and physical damage during transport"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Enhanced Security",
      description: "Tamper-evident features provide security and peace of mind for valuable shipments"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Transport Optimization",
      description: "Proper wrapping reduces damage claims and ensures efficient logistics operations"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Logistics Support",
      description: "Mobile services available at warehouses, shipping docks, and distribution centers"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Transport & Cargo Shrink Wrapping Ontario | Freight Protection Services</title>
        <meta 
          name="description" 
          content="Professional transport and cargo shrink wrapping services in Ontario. Secure freight during transport with weather protection, cargo stabilization, tamper-evident sealing, and load securing. Call (905) 327-4381" 
        />
        <meta 
          name="keywords" 
          content="transport shrink wrapping, cargo protection, freight wrapping, logistics shrink wrap, cargo stabilization, weather protection shipping, tamper evident sealing, load securing Ontario, freight protection services" 
        />
        <link rel="canonical" href="/transport-cargo-shrink-wrapping" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Transport & Cargo Shrink Wrapping Ontario | Freight Protection Services" />
        <meta property="og:description" content="Professional transport and cargo shrink wrapping services in Ontario. Secure freight with weather protection, cargo stabilization, and tamper-evident sealing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/transport-cargo-shrink-wrapping" />
        <meta property="og:image" content={transportHeroShrinkwrap} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Transport & Cargo Shrink Wrapping Ontario | Freight Protection Services" />
        <meta name="twitter:description" content="Professional transport and cargo shrink wrapping services in Ontario. Secure freight with weather protection and cargo stabilization." />
        <meta name="twitter:image" content={transportHeroShrinkwrap} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Transport & Cargo Shrink Wrapping Services",
            "description": "Secure cargo and freight during transport. Weather-resistant wrapping for shipments and logistics with cargo stabilization, weather protection, tamper-evident sealing, and load securing.",
            "provider": {
              "@type": "Organization",
              "name": "Mobile Shrink Wrap",
              "telephone": "(905) 327-4381",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Ontario",
                "addressCountry": "Canada"
              }
            },
            "areaServed": "Ontario, Canada",
            "serviceType": "Freight and Cargo Protection",
            "offers": {
              "@type": "Offer",
              "description": "Professional transport shrink wrapping with cargo stabilization, weather protection, tamper-evident sealing, and load securing"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={transportHeroShrinkwrap}
              alt="Professional transport cargo shrink wrapping service showing freight containers covered in protective wrap"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Freight & Logistics Protection
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Transport & Cargo Shrink Wrapping
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Secure cargo and freight during transport. Weather-resistant wrapping for shipments 
                and logistics with professional stabilization and security features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (905) 327-4381
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Freight Protection Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive transport shrink wrapping services ensure your cargo arrives 
                safely and securely at its destination across Ontario and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-primary/90 rounded-lg flex items-center justify-center">
                        <div className="text-primary-foreground">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Installation & Quality Control
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our certified technicians ensure proper installation for maximum protection and security.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={cargoInstallationProcess} 
                    alt="Professional cargo wrapping installation showing technicians applying shrink wrap to freight containers"
                    className="w-full h-64 md:h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-bold text-2xl mb-2">
                      Expert Installation & Security Verification
                    </h3>
                    <p className="text-white/90">
                      From initial assessment to final security check, we ensure every shipment receives optimal protection.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Features Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Weather Resistant</h3>
                <p className="text-muted-foreground">
                  Advanced materials provide complete protection against rain, snow, UV rays, and extreme temperatures.
                </p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Security Features</h3>
                <p className="text-muted-foreground">
                  Tamper-evident sealing provides immediate visual confirmation of cargo integrity and unauthorized access.
                </p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Transport Optimized</h3>
                <p className="text-muted-foreground">
                  Specialized techniques ensure cargo remains stable and secure throughout the entire transportation process.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our Transport Shrink Wrapping?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional freight protection services with industry-leading materials and expert installation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Leading Logistics Companies
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Cargo Loads Protected</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground">Damage Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Emergency Service</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Logistics Partners</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-variant text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Secure Your Cargo Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Don't risk damage, theft, or weather exposure. Get professional transport 
              shrink wrapping services for your valuable freight and cargo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="w-full sm:w-auto text-lg px-8 py-4"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (905) 327-4381
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10"
              >
                Schedule Service
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transport & Cargo Wrapping FAQs
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What types of cargo can you shrink wrap?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We can wrap virtually any type of freight including palletized goods, machinery, 
                    containers, bulk materials, and specialized cargo. Our solutions are customized for your specific shipment needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How does tamper-evident sealing work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our tamper-evident materials show clear visual signs if someone attempts to access the cargo. 
                    This includes color-changing indicators, tear patterns, and other security features that maintain chain of custody.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can you provide on-site wrapping at logistics facilities?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! We provide mobile services at warehouses, distribution centers, shipping docks, 
                    and transport hubs across Ontario. We work around your logistics schedule for minimal disruption.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does cargo wrapping typically take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Wrapping time depends on cargo size and complexity, but most standard loads can be completed 
                    in 30-90 minutes. We work efficiently to minimize delays in your shipping schedule.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TransportCargo;