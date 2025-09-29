import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cog, 
  Shield, 
  Truck, 
  Warehouse,
  AlertTriangle,
  CheckCircle,
  Phone,
  Calendar,
  MapPin,
  Star,
  Clock,
  Wrench,
  Factory,
  Snowflake,
  Sun
} from "lucide-react";

// Import machinery protection images with white shrinkwrap focus
import tractorWhiteShrinkwrap from "@/assets/gallery/tractor-white-shrinkwrap.jpg";
import storageContainerShrinkwrap from "@/assets/gallery/storage-container-shrinkwrap.jpg";
import fullyWrappedContainer from "@/assets/gallery/fully-wrapped-container.jpg";
import machineryWrapping from "@/assets/gallery/machinery-wrapping.jpg";
import machineryStorage from "@/assets/gallery/machinery-storage.jpg";
import industrialEquipment from "@/assets/gallery/industrial-equipment.jpg";
import excavatorShrinkwrap from "@/assets/gallery/excavator-shrinkwrap.jpg";
import generatorShrinkwrap from "@/assets/gallery/generator-shrinkwrap.jpg";

const MachineryProtection = () => {
  const protectionServices = [
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Heavy Equipment Protection",
      description: "Complete white shrinkwrap protection for construction equipment, industrial machinery, and specialized tools",
      features: ["Weather resistance", "Corrosion prevention", "UV protection", "Custom fit installation"],
      image: excavatorShrinkwrap,
      alt: "Heavy construction excavator equipment protected with professional white shrinkwrap covering"
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Industrial Machinery Wrapping",
      description: "Professional white shrinkwrap solutions for manufacturing equipment and industrial machinery storage",
      features: ["Dust barrier protection", "Moisture prevention", "Chemical resistance", "Long-term durability"],
      image: industrialEquipment,
      alt: "Industrial manufacturing machinery covered in protective white shrinkwrap for storage protection"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Agricultural Equipment Storage",
      description: "Premium white shrinkwrap protection for tractors, combines, and farm machinery during off-season storage",
      features: ["Seasonal protection", "Rodent prevention", "Paint preservation", "Easy access panels"],
      image: tractorWhiteShrinkwrap,
      alt: "Agricultural tractor covered in premium white shrinkwrap material for winter protection and storage"
    },
    {
      icon: <Warehouse className="h-8 w-8" />,
      title: "Container & Storage Protection",
      description: "Complete white shrinkwrap coverage for storage containers, modular units, and temporary structures",
      features: ["Full enclosure wrapping", "Weatherproof sealing", "Ventilation systems", "Access door installation"],
      image: fullyWrappedContainer,
      alt: "Storage container completely wrapped in white shrinkwrap material showing full coverage protection"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Superior Weather Protection",
      description: "White shrinkwrap provides excellent protection against rain, snow, UV rays, and extreme weather conditions"
    },
    {
      icon: <Snowflake className="h-6 w-6" />,  
      title: "Corrosion Prevention",
      description: "Prevents rust, oxidation, and corrosion damage to metal components and painted surfaces"
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: "UV Resistant Material",
      description: "Professional-grade white shrinkwrap with UV inhibitors prevents material degradation and fading"
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Custom Installation",  
      description: "Expert installation tailored to your machinery's specific dimensions and protection requirements"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Cost-Effective Solution",
      description: "Prevent expensive repairs and replacements with affordable preventive protection services"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Mobile Service Available",
      description: "On-site installation at your facility, construction site, farm, or storage location across Ontario"
    }
  ];

  const machineryTypes = [
    "Construction Equipment (Excavators, Bulldozers, Cranes)",
    "Agricultural Machinery (Tractors, Combines, Harvesters)", 
    "Industrial Manufacturing Equipment",
    "Generators and Power Equipment",
    "Material Handling Equipment",
    "Mining and Heavy Machinery",
    "Transportation Vehicles and Trailers",
    "Storage Containers and Modular Units"
  ];

  return (
    <>
      <Helmet>
        <title>Machinery Protection Ontario | White Shrinkwrap Equipment Protection Services</title>
        <meta 
          name="description" 
          content="Professional machinery protection services in Ontario using premium white shrinkwrap. Protect heavy equipment, industrial machinery, tractors & containers from weather damage. Expert installation. Call (905) 327-4381" 
        />
        <meta 
          name="keywords" 
          content="machinery protection Ontario, white shrinkwrap equipment, heavy equipment protection, industrial machinery wrapping, tractor protection, container wrapping, construction equipment storage, agricultural machinery protection, machinery weatherproofing" 
        />
        <link rel="canonical" href="/machinery-protection" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Machinery Protection Ontario | White Shrinkwrap Equipment Protection Services" />
        <meta property="og:description" content="Professional machinery protection using premium white shrinkwrap. Protect heavy equipment, industrial machinery, and containers across Ontario." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/machinery-protection" />
        <meta property="og:image" content={tractorWhiteShrinkwrap} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Machinery Protection Ontario | White Shrinkwrap Equipment Protection" />
        <meta name="twitter:description" content="Professional white shrinkwrap machinery protection services. Protect equipment from weather, corrosion & damage across Ontario." />
        <meta name="twitter:image" content={tractorWhiteShrinkwrap} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Machinery Protection Services",
            "description": "Professional white shrinkwrap machinery protection services for heavy equipment, industrial machinery, agricultural equipment, and storage containers across Ontario.",
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
            "serviceType": "Equipment Protection Services",
            "offers": {
              "@type": "Offer",
              "description": "White shrinkwrap machinery protection with weather resistance, corrosion prevention, and custom installation"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={tractorWhiteShrinkwrap}
              alt="Professional white shrinkwrap machinery protection showing agricultural tractor covered in premium protective material"
              className="w-full h-full object-cover opacity-30"
              fetchPriority="high"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Premium White Shrinkwrap Protection
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Machinery Protection Services Ontario
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Professional white shrinkwrap machinery protection for heavy equipment, industrial machinery, 
                agricultural equipment, and storage containers. Superior weather protection across Ontario.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (905) 327-4381
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get Free Protection Quote
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
                Complete Machinery Protection Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our professional white shrinkwrap protection services safeguard your valuable equipment 
                from weather damage, corrosion, and environmental hazards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {protectionServices.map((service, index) => (
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

        {/* Machinery Types Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Equipment We Protect
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional white shrinkwrap protection for all types of heavy equipment and industrial machinery.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Machinery Protection Specialists</h3>
                <div className="space-y-3">
                  {machineryTypes.map((type, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{type}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button size="lg" className="mr-4">
                    Schedule Assessment
                  </Button>
                  <Button variant="outline" size="lg">
                    View Gallery
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img 
                  src={machineryStorage} 
                  alt="Heavy industrial machinery stored with white shrinkwrap protection"
                  className="w-full h-48 object-cover rounded-lg"
                  loading="lazy"
                />
                <img 
                  src={generatorShrinkwrap} 
                  alt="Industrial generator wrapped in white shrinkwrap for weather protection"
                  className="w-full h-48 object-cover rounded-lg"
                  loading="lazy"
                />
                <img 
                  src={storageContainerShrinkwrap} 
                  alt="Storage container protected with professional white shrinkwrap covering"
                  className="w-full h-48 object-cover rounded-lg"
                  loading="lazy"
                />
                <img 
                  src={machineryWrapping} 
                  alt="Professional machinery wrapping process showing white shrinkwrap installation"
                  className="w-full h-48 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose White Shrinkwrap Protection?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Premium white shrinkwrap material provides superior protection and professional appearance for your valuable equipment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Installation Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our expert technicians ensure proper white shrinkwrap installation for maximum protection and durability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Site Assessment</h3>
                <p className="text-muted-foreground">Evaluate equipment dimensions and protection requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Preparation</h3>
                <p className="text-muted-foreground">Clean and prepare machinery for wrapping installation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Installation</h3>
                <p className="text-muted-foreground">Apply premium white shrinkwrap with heat sealing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Check</h3>
                <p className="text-muted-foreground">Final inspection and ventilation installation if needed</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-variant text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Protect Your Valuable Equipment Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Don't let weather, corrosion, or environmental damage destroy your investment. 
              Get professional white shrinkwrap machinery protection services across Ontario.
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
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Machinery Protection FAQs
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What makes white shrinkwrap better for machinery protection?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    White shrinkwrap reflects heat and UV rays better than dark colors, preventing overheating and material degradation. 
                    It also provides a professional appearance while offering superior weather and corrosion protection.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does machinery protection shrinkwrap last?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our premium white shrinkwrap material typically lasts 6-12 months in Ontario's climate, providing excellent 
                    protection through winter storage and harsh weather conditions. UV-resistant additives prevent material breakdown.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can you wrap machinery of any size?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we can protect equipment of virtually any size, from small agricultural machinery to large industrial equipment, 
                    construction vehicles, and storage containers. Each installation is custom-fitted to your specific equipment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide machinery protection removal services?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer professional removal services when you're ready to use your equipment again. 
                    We carefully remove the shrinkwrap and can arrange for proper recycling of the material.
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

export default MachineryProtection;