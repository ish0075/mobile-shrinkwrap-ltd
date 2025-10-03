import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
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
  Anchor,
  Container,
  Building2
} from "lucide-react";

// Import transport & cargo shrink wrap images
import transportHeroShrinkwrap from "@/assets/transport-hero-shrinkwrap.jpg";
import cargoStabilization from "@/assets/cargo-stabilization.jpg";
import cargoWeatherProtection from "@/assets/cargo-weather-protection.jpg";
import tamperEvidentSealing from "@/assets/tamper-evident-sealing.jpg";
import loadSecuring from "@/assets/load-securing.jpg";
import cargoInstallationProcess from "@/assets/cargo-installation-process.jpg";
import transportLogisticsShrinkwrap from "@/assets/transport-logistics-shrinkwrap.jpg";
import freightWarehouseWrapping from "@/assets/freight-warehouse-wrapping.jpg";
import cargoSecurityWrap from "@/assets/cargo-security-wrap.jpg";
import transportPalletShrinkwrap from "@/assets/transport-pallet-shrinkwrap.jpg";
import transportTruckCargoWrap from "@/assets/transport-truck-cargo-wrap.jpg";
import transportContainerWrapping from "@/assets/transport-container-wrapping.jpg";

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

  const serviceAreas = [
    { name: "Toronto", slug: "toronto" },
    { name: "Mississauga", slug: "mississauga" },
    { name: "Hamilton", slug: "hamilton" },
    { name: "Ottawa", slug: "ottawa" },
    { name: "London", slug: "london" },
    { name: "Windsor", slug: "windsor" }
  ];

  const industries = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Long-Haul Trucking",
      description: "Cross-country freight protection for extended transport duration"
    },
    {
      icon: <Container className="h-6 w-6" />,
      title: "Container Shipping",
      description: "International and domestic container cargo security and weather protection"
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Warehouse Distribution",
      description: "On-site wrapping services at distribution centers and fulfillment facilities"
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "E-commerce Logistics",
      description: "High-volume pallet protection for retail and e-commerce shipments"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Transport & Cargo Shrink Wrapping Ontario | Mobile Freight Protection Services Toronto, Mississauga, Hamilton</title>
        <meta 
          name="description" 
          content="Professional mobile transport and cargo shrink wrapping services across Ontario. Expert freight protection with weather-resistant wrapping, pallet securing, tamper-evident sealing, and load stabilization. Serving Toronto, Mississauga, Hamilton, Ottawa, London, Windsor & GTA. Licensed & insured. Call (905) 327-4381 for same-day service and free quote." 
        />
        <meta 
          name="keywords" 
          content="transport shrink wrapping Ontario, cargo protection services, freight wrapping Toronto, logistics shrink wrap, cargo stabilization, pallet wrapping, tamper evident sealing, load securing Ontario, freight protection services, warehouse wrapping, container wrapping, shipping cargo protection, mobile freight wrapping" 
        />
        <link rel="canonical" href="https://www.mobileshrinkwrapltd.com/services/transport-cargo-shrink-wrapping" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Transport & Cargo Shrink Wrapping Ontario | Professional Freight Protection" />
        <meta property="og:description" content="Professional transport and cargo shrink wrapping services across Ontario. Secure freight with weather protection, cargo stabilization, and tamper-evident sealing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mobileshrinkwrapltd.com/services/transport-cargo-shrink-wrapping" />
        <meta property="og:image" content={transportLogisticsShrinkwrap} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Transport & Cargo Shrink Wrapping Ontario | Professional Freight Protection" />
        <meta name="twitter:description" content="Professional transport and cargo shrink wrapping services across Ontario. Secure freight with weather protection and cargo stabilization." />
        <meta name="twitter:image" content={transportLogisticsShrinkwrap} />
        
        {/* Structured Data - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Transport & Cargo Shrink Wrapping Services",
            "description": "Professional freight and cargo protection services across Ontario. Weather-resistant wrapping for shipments and logistics with cargo stabilization, weather protection, tamper-evident sealing, and load securing.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Mobile Shrink Wrap Ltd",
              "telephone": "(905) 327-4381",
              "email": "mobileshrinkwrapltd@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Ontario",
                "addressCountry": "CA"
              },
              "url": "https://www.mobileshrinkwrapltd.com",
              "priceRange": "$$",
              "areaServed": [
                {"@type": "City", "name": "Toronto", "containedIn": "Ontario, Canada"},
                {"@type": "City", "name": "Mississauga", "containedIn": "Ontario, Canada"},
                {"@type": "City", "name": "Hamilton", "containedIn": "Ontario, Canada"},
                {"@type": "City", "name": "Ottawa", "containedIn": "Ontario, Canada"},
                {"@type": "City", "name": "London", "containedIn": "Ontario, Canada"},
                {"@type": "City", "name": "Windsor", "containedIn": "Ontario, Canada"}
              ]
            },
            "serviceType": "Freight and Cargo Protection",
            "offers": {
              "@type": "Offer",
              "description": "Professional transport shrink wrapping with cargo stabilization, weather protection, tamper-evident sealing, and load securing",
              "availability": "https://schema.org/InStock"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Transport & Cargo Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Cargo Stabilization"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Weather Protection"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Tamper-Evident Sealing"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Load Securing"}}
              ]
            }
          })}
        </script>

        {/* Structured Data - FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of cargo can you shrink wrap?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We can wrap virtually any type of freight including palletized goods, machinery, containers, bulk materials, and specialized cargo. Our solutions are customized for your specific shipment needs across Ontario."
                }
              },
              {
                "@type": "Question",
                "name": "How does tamper-evident sealing work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our tamper-evident materials show clear visual signs if someone attempts to access the cargo. This includes color-changing indicators, tear patterns, and other security features that maintain chain of custody throughout transport."
                }
              },
              {
                "@type": "Question",
                "name": "Can you provide on-site wrapping at logistics facilities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We provide mobile services at warehouses, distribution centers, shipping docks, and transport hubs across Ontario including Toronto, Mississauga, Hamilton, and Ottawa. We work around your logistics schedule for minimal disruption."
                }
              },
              {
                "@type": "Question",
                "name": "What areas in Ontario do you serve for cargo wrapping?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide mobile transport and cargo shrink wrapping services throughout Ontario including Toronto, Mississauga, Hamilton, Ottawa, London, Windsor, and all surrounding areas. Our mobile crews can service warehouses, distribution centers, and logistics facilities across the province."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={transportHeroShrinkwrap}
              alt="Mobile cargo shrink wrapping service in Ontario showing freight containers and pallets protected with industrial shrink wrap at Toronto distribution center"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Freight & Logistics Protection
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Transport & Cargo Shrink Wrapping Services Across Ontario
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Professional mobile freight protection for Ontario businesses. Weather-resistant cargo shrink wrapping with tamper-evident security, pallet stabilization, and load securing for safe transport across Toronto, GTA, Hamilton, Ottawa, and beyond.
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

        {/* Security & Protection Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={cargoSecurityWrap}
                  alt="Close-up of tamper-evident security shrink wrap on freight cargo showing protection features"
                  className="rounded-lg shadow-xl w-full"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2">
                <Badge variant="secondary" className="mb-4">
                  Advanced Security
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Tamper-Evident Protection for High-Value Freight
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Protect your valuable cargo with advanced tamper-evident shrink wrap technology. 
                  Our security features provide immediate visual confirmation of cargo integrity 
                  throughout the entire supply chain.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Chain of Custody</h3>
                      <p className="text-muted-foreground">
                        Maintain verifiable cargo security from warehouse to final destination
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Theft Deterrent</h3>
                      <p className="text-muted-foreground">
                        Visible security features discourage unauthorized access and tampering
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Insurance Compliance</h3>
                      <p className="text-muted-foreground">
                        Meet insurance requirements for high-value cargo shipments
                      </p>
                    </div>
                  </div>
                </div>
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-5 w-5" />
                  Discuss Security Needs
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
                Trusted by Leading Logistics Companies Across Ontario
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Proven track record in freight protection and cargo security
              </p>
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

        {/* Industries Served Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Specialized freight protection solutions for diverse logistics operations across Ontario
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">
                      {industry.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transport & Cargo Shrink Wrapping Service Areas
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Mobile freight protection services at warehouses, distribution centers, and logistics facilities throughout Ontario
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/shrink-wrapping-${area.slug}-on`}
                  className="group"
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-all hover:border-primary">
                    <div className="flex items-center justify-center mb-3">
                      <MapPin className="h-6 w-6 text-primary mr-2" />
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {area.name}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Cargo wrapping services available
                    </p>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                We also serve: St. Catharines, Burlington, Brampton, Niagara Region, Golden Horseshoe, and all surrounding Ontario communities
              </p>
              <Link to="/service-areas">
                <Button variant="outline" size="lg">
                  <MapPin className="mr-2 h-5 w-5" />
                  View All Service Areas
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* New Image Section - Warehouse Operations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  On-Site Service
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Mobile Cargo Wrapping at Your Facility
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our mobile teams bring professional freight protection directly to your warehouse, 
                  distribution center, or logistics facility. We work efficiently around your shipping 
                  schedules to minimize operational disruption.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Same-day and emergency service available across Ontario</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>High-volume capacity for busy logistics operations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Professional crews trained in logistics facility protocols</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Flexible scheduling including after-hours service</span>
                  </li>
                </ul>
                <Button size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Facility Service
                </Button>
              </div>
              <div className="relative">
                <img
                  src={freightWarehouseWrapping}
                  alt="Mobile cargo shrink wrapping service at warehouse facility with freight protection"
                  className="rounded-lg shadow-xl w-full"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden lg:block">
                  <div className="text-3xl font-bold mb-1">Ontario-Wide</div>
                  <div className="text-sm opacity-90">Mobile Service</div>
                </div>
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
                asChild
              >
                <a href="tel:+1-905-327-4381">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (905) 327-4381
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">
                  Schedule Service
                </Link>
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
                    containers, bulk materials, and specialized cargo. Our solutions are customized for your specific shipment needs across Ontario.
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
                    This includes color-changing indicators, tear patterns, and other security features that maintain chain of custody throughout transport.
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
                    and transport hubs across Ontario including Toronto, Mississauga, Hamilton, Ottawa, and surrounding areas. We work around your logistics schedule for minimal disruption.
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

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What areas in Ontario do you serve for cargo wrapping?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide mobile transport and cargo shrink wrapping services throughout Ontario including Toronto, Mississauga, 
                    Hamilton, Ottawa, London, Windsor, and all surrounding areas. Our mobile crews can service warehouses, distribution centers, 
                    and logistics facilities across the province.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ontario Cargo Protection Showcase */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Cargo Protection Throughout Ontario
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive freight shrink wrapping solutions for businesses across Toronto, GTA, Hamilton, and Southern Ontario
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={transportPalletShrinkwrap} 
                    alt="Pallet shrink wrapping service in Ontario warehouse for cargo stabilization and freight protection in Toronto distribution center"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Pallet Shrink Wrapping</CardTitle>
                  <CardDescription>
                    Secure pallet protection for warehouse and distribution operations across Ontario, including Toronto, Mississauga, and Hamilton facilities.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={transportTruckCargoWrap} 
                    alt="Truck cargo shrink wrapping at Ontario loading dock for freight transport protection serving GTA and Southern Ontario"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Truck Cargo Protection</CardTitle>
                  <CardDescription>
                    Complete freight protection for long-haul transport across Ontario, ensuring cargo arrives safely from Windsor to Ottawa.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={transportContainerWrapping} 
                    alt="Shipping container shrink wrapping service at Ontario port for international freight protection and cargo security"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Container Wrapping</CardTitle>
                  <CardDescription>
                    Industrial shrink wrapping for shipping containers at Ontario ports, logistics hubs, and international freight terminals.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Serving Major Ontario Logistics Hubs: Toronto Pearson Cargo, Hamilton Port, Windsor Border, Ottawa Distribution Centers, London Warehouses, and all GTA facilities
              </p>
              <Button size="lg" variant="cta" asChild>
                <a href="tel:9053274381" className="font-bold text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  (905) 327-4381
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TransportCargo;