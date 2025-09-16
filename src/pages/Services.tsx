import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Ship, 
  Truck, 
  Building, 
  Plane, 
  Home, 
  Construction, 
  Train,
  Phone,
  CheckCircle,
  Shield,
  Clock,
  MapPin,
  Star
} from "lucide-react";

// Import service images
import boatShrinkwrap from "@/assets/services/boat-shrinkwrap.jpg";
import machineryShrinkwrap from "@/assets/services/machinery-shrinkwrap.jpg";
import freightShrinkwrap from "@/assets/services/freight-shrinkwrap.jpg";
import constructionShrinkwrap from "@/assets/services/construction-shrinkwrap.jpg";
import transportShrinkwrap from "@/assets/services/transport-shrinkwrap.jpg";
import homesShrinkwrap from "@/assets/services/homes-shrinkwrap.jpg";

const Services = () => {
  const services = [
    {
      icon: <Ship className="h-8 w-8" />,
      title: "Marine Vessels & Boats",
      description: "Professional shrink wrapping for boats, yachts, and marine vessels of all sizes",
      features: ["Winter protection", "UV resistance", "Moisture barrier", "Custom fitting"],
      image: boatShrinkwrap,
      alt: "Professional boat shrink wrapping service showing yacht covered in protective wrap at marina"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Commercial Equipment",
      description: "Industrial machinery and commercial equipment protection services",
      features: ["Heavy machinery", "Construction equipment", "Agricultural tools", "Storage protection"],
      image: machineryShrinkwrap,
      alt: "Heavy commercial machinery and industrial equipment covered in protective shrink wrap"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Freight & Cargo",
      description: "Secure shrink wrapping for freight, cargo, and shipping containers",
      features: ["Weather protection", "Secure packaging", "Transit safety", "Damage prevention"],
      image: freightShrinkwrap,
      alt: "Freight cargo and shipping containers wrapped in protective shrink wrap material"
    },
    {
      icon: <Construction className="h-8 w-8" />,
      title: "Construction Sites",
      description: "Site protection and material covering for construction projects",
      features: ["Material protection", "Weather barriers", "Site security", "Temporary covering"],
      image: constructionShrinkwrap,
      alt: "Construction site equipment and materials covered with protective shrink wrap"
    },
    {
      icon: <Train className="h-8 w-8" />,
      title: "Transportation",
      description: "Trains, helicopters, and specialized transportation equipment",
      features: ["Aircraft protection", "Rail equipment", "Specialty vehicles", "Long-term storage"],
      image: transportShrinkwrap,
      alt: "Transportation equipment including train cars and helicopter covered in protective shrink wrap"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Modular & Mini Homes",
      description: "Residential structure protection during transport and storage",
      features: ["Home protection", "Transit wrapping", "Weather shielding", "Secure covering"],
      image: homesShrinkwrap,
      alt: "Modular homes and mini houses covered in protective shrink wrap during transport"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Superior Protection",
      description: "High-quality materials that protect against weather, UV rays, and environmental damage"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Quick Service",
      description: "Fast, efficient installation with minimal disruption to your operations"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Mobile Service",
      description: "We come to your location across Ontario for convenient on-site service"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Professional Quality",
      description: "Expert installation using industry-leading techniques and materials"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mobile Shrink Wrap Services Ontario | Professional Equipment Protection</title>
        <meta 
          name="description" 
          content="Professional mobile shrink wrapping services in Ontario. Protect boats, machinery, construction sites, trains, modular homes & more. Free consultation. Call (905) 328-1271" 
        />
        <meta 
          name="keywords" 
          content="shrink wrap services, mobile shrink wrapping, boat shrink wrap, industrial equipment protection, construction site covering, Ontario shrink wrap, marine shrink wrap, equipment protection" 
        />
        <link rel="canonical" href="/services" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Mobile Shrink Wrap Services Ontario | Professional Equipment Protection" />
        <meta property="og:description" content="Professional mobile shrink wrapping services in Ontario. Protect boats, machinery, construction sites, trains, modular homes & more. Free consultation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/services" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile Shrink Wrap Services Ontario | Professional Equipment Protection" />
        <meta name="twitter:description" content="Professional mobile shrink wrapping services in Ontario. Protect boats, machinery, construction sites, trains, modular homes & more." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile Shrink Wrap Services",
            "description": "Professional mobile shrink wrapping services for boats, machinery, construction sites, and more across Ontario",
            "provider": {
              "@type": "Organization",
              "name": "Mobile Shrink Wrap",
              "telephone": "(905) 328-1271"
            },
            "areaServed": "Ontario, Canada",
            "serviceType": "Shrink Wrapping Services"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Professional Shrink Wrap Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Protect Your Investment With Our High Quality Shrink Wrapping Products
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Shrinkwrapping Machinery Commercial Industrial Equipment, Freight, Construction Sites, 
                Trains, Modular Homes, Mini Homes, Boats, Vessels, Helicopters and much much more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Today (905) 328-1271
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Free Consultation
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
                Comprehensive Shrink Wrap Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                For the best shrink wrap services near me, discover our complete range of 
                professional protection solutions across Ontario.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Benefits Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our Shrink Wrap Services?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional installation, premium materials, and mobile service across Ontario.
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
              Find Out Today - Free Consultation
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get a detailed quote for your shrinkwrap services cost. Professional assessment 
              and competitive pricing for all your protection needs.
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
                Request Free Quote
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What types of equipment can you shrink wrap?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide shrink wrapping services for boats, vessels, helicopters, trains, 
                    modular homes, mini homes, commercial machinery, industrial equipment, freight, 
                    construction sites, and much more. No project is too large or small.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide mobile services?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! We bring our professional shrink wrapping services directly to your location 
                    across Ontario. This ensures convenience and reduces the need to transport your 
                    equipment or vessels.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does the shrink wrap last?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our high-quality shrink wrap materials are designed to provide long-term protection, 
                    typically lasting 6-12 months depending on environmental conditions and the specific 
                    application.
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

export default Services;