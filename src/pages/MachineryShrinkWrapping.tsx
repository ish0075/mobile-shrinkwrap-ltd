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
  Clock
} from "lucide-react";

// Import machinery shrink wrap images
import machineryHeroShrinkwrap from "@/assets/machinery-hero-shrinkwrap.jpg";
import machineryCorrosionProtection from "@/assets/machinery-corrosion-protection.jpg";
import machineryDustProtection from "@/assets/machinery-dust-protection.jpg";
import machineryLongTermStorage from "@/assets/machinery-long-term-storage.jpg";
import machineryTransportProtection from "@/assets/machinery-transport-protection.jpg";
import machineryInstallationProcess from "@/assets/machinery-installation-process.jpg";

const MachineryShrinkWrapping = () => {
  const services = [
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Heavy Machinery Protection",
      description: "Complete protection for construction equipment, industrial machinery, and heavy tools",
      features: ["Weather resistance", "Impact protection", "Component security", "Professional installation"],
      image: machineryHeroShrinkwrap,
      alt: "Heavy construction equipment and industrial machinery covered in protective shrink wrap"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Corrosion Prevention",
      description: "Prevent rust, oxidation, and chemical damage to metal components and surfaces",
      features: ["Rust prevention", "Chemical resistance", "Moisture barrier", "Anti-corrosion coating"],
      image: machineryCorrosionProtection,
      alt: "Industrial equipment wrapped for corrosion prevention and rust protection"
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Dust and Debris Shield",
      description: "Keep machinery clean and operational by blocking dust, dirt, and environmental contaminants",
      features: ["Dust prevention", "Debris protection", "Clean storage", "Contamination barrier"],
      image: machineryDustProtection,
      alt: "Construction machinery protected from dust and debris with clear shrink wrap"
    },
    {
      icon: <Warehouse className="h-8 w-8" />,
      title: "Long-Term Storage",
      description: "Secure storage solutions for extended periods with complete environmental protection",
      features: ["Extended protection", "Storage solutions", "Climate control", "Asset preservation"],
      image: machineryLongTermStorage,
      alt: "Multiple pieces of industrial equipment in long-term storage covered with shrink wrap"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Complete Protection",
      description: "Shields machinery from weather, corrosion, dust, and physical damage during storage or transport"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Transport Safety",
      description: "Secure wrapping ensures machinery stays protected during transportation and relocation"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Cost Savings",
      description: "Prevent costly repairs and replacements by protecting your valuable industrial equipment"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "On-Site Service",
      description: "Mobile installation services available at your facility, construction site, or storage location"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Machinery Shrink Wrapping Ontario | Industrial Equipment Protection Services</title>
        <meta 
          name="description" 
          content="Professional machinery shrink wrapping services in Ontario. Protect industrial equipment from corrosion, dust, and weather damage. Heavy machinery protection, long-term storage solutions. Call (905) 328-1271" 
        />
        <meta 
          name="keywords" 
          content="machinery shrink wrapping, industrial equipment protection, heavy machinery storage, corrosion prevention, dust protection, equipment transport protection, Ontario machinery wrapping, industrial shrink wrap services" 
        />
        <link rel="canonical" href="/machinery-shrink-wrapping" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Machinery Shrink Wrapping Ontario | Industrial Equipment Protection Services" />
        <meta property="og:description" content="Professional machinery shrink wrapping services in Ontario. Protect industrial equipment from corrosion, dust, and weather damage during storage or transport." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/machinery-shrink-wrapping" />
        <meta property="og:image" content={machineryHeroShrinkwrap} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Machinery Shrink Wrapping Ontario | Industrial Equipment Protection Services" />
        <meta name="twitter:description" content="Professional machinery shrink wrapping services in Ontario. Protect industrial equipment from corrosion, dust, and weather damage." />
        <meta name="twitter:image" content={machineryHeroShrinkwrap} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Machinery Shrink Wrapping Services",
            "description": "Industrial equipment protection during storage, transport, or outdoor use. Keep machinery safe from elements with heavy machinery protection, corrosion prevention, dust shields, and long-term storage solutions.",
            "provider": {
              "@type": "Organization",
              "name": "Mobile Shrink Wrap",
              "telephone": "(905) 328-1271",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Ontario",
                "addressCountry": "Canada"
              }
            },
            "areaServed": "Ontario, Canada",
            "serviceType": "Industrial Equipment Protection",
            "offers": {
              "@type": "Offer",
              "description": "Professional machinery shrink wrapping with corrosion prevention, dust protection, and long-term storage solutions"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={machineryHeroShrinkwrap}
              alt="Professional machinery shrink wrapping service showing industrial equipment covered in protective wrap"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Industrial Equipment Protection
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Machinery Shrink Wrapping Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Industrial equipment protection during storage, transport, or outdoor use. 
                Keep machinery safe from elements with our professional shrink wrapping solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (905) 328-1271
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
                Complete Industrial Equipment Protection
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive machinery shrink wrapping services protect your valuable 
                industrial equipment from environmental damage and operational hazards.
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

        {/* Process Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Installation Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our expert technicians ensure proper installation for maximum protection and durability.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={machineryInstallationProcess} 
                    alt="Professional machinery shrink wrap installation process showing technicians wrapping industrial equipment"
                    className="w-full h-64 md:h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-bold text-2xl mb-2">
                      Expert Installation & Quality Assurance
                    </h3>
                    <p className="text-white/90">
                      From assessment to final inspection, we ensure every piece of equipment receives optimal protection.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Transport Protection Highlight */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Transport Protection Services</h3>
                <p className="text-muted-foreground mb-6">
                  Secure your machinery during transportation with our specialized transport wrapping services. 
                  Protect against road debris, weather exposure, and shifting during transit.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Secure fastening systems</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Weather protection during transit</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Debris and impact protection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Easy removal at destination</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src={machineryTransportProtection} 
                  alt="Heavy equipment and industrial machinery wrapped for safe transport protection"
                  className="w-full h-64 object-cover rounded-lg"
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
                Why Choose Our Machinery Shrink Wrapping?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional protection services with premium materials and expert installation across Ontario.
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-variant text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Protect Your Industrial Equipment Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Don't let weather, corrosion, or contamination damage your valuable machinery. 
              Get professional shrink wrapping protection services now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="w-full sm:w-auto text-lg px-8 py-4"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (905) 328-1271
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10"
              >
                Schedule Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Machinery Shrink Wrapping FAQs
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What types of machinery can you shrink wrap?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We can shrink wrap virtually any industrial equipment including construction machinery, 
                    manufacturing equipment, agricultural tools, generators, compressors, and specialized industrial apparatus.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does machinery shrink wrap last?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our high-quality shrink wrap materials are designed for long-term protection, typically lasting 
                    6-18 months depending on environmental conditions and specific application requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can you wrap machinery for outdoor storage?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, our shrink wrap materials are specifically designed for outdoor use and provide excellent 
                    protection against weather, UV rays, dust, and environmental contaminants during outdoor storage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide on-site installation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! We provide mobile services and can install shrink wrap protection at your facility, 
                    construction site, storage yard, or any location across Ontario where your equipment is located.
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

export default MachineryShrinkWrapping;