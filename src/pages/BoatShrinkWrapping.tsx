import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Ship, 
  Shield, 
  Wind, 
  Sun, 
  Snowflake,
  CheckCircle,
  Phone,
  Calendar,
  MapPin,
  Star
} from "lucide-react";

// Import boat shrink wrap images
import boatHeroShrinkwrap from "@/assets/boat-hero-shrinkwrap.jpg";
import boatInstallationProcess from "@/assets/boat-installation-process.jpg";
import boatVentilationSystem from "@/assets/boat-ventilation-system.jpg";
import boatCustomFit from "@/assets/boat-custom-fit.jpg";
import boatWinterStorage from "@/assets/boat-winter-storage.jpg";
import boatBeforeAfter from "@/assets/boat-before-after.jpg";

const BoatShrinkWrapping = () => {
  const services = [
    {
      icon: <Snowflake className="h-8 w-8" />,
      title: "Winter Storage Protection",
      description: "Complete protection against snow, ice, and harsh winter conditions",
      features: ["Snow load resistance", "Ice damage prevention", "Moisture barrier", "Temperature regulation"],
      image: boatWinterStorage,
      alt: "Multiple boats in winter storage covered with UV-resistant shrink wrap material"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Custom Fit Installation",
      description: "Precise measurements and professional installation for perfect fit",
      features: ["Exact measurements", "Professional installation", "Secure fastening", "Perfect coverage"],
      image: boatCustomFit,
      alt: "Custom fit boat shrink wrap showing perfectly fitted protective wrap on luxury yacht"
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Ventilation Systems",
      description: "Proper airflow to prevent moisture buildup and mold growth",
      features: ["Air circulation", "Moisture control", "Mold prevention", "Condensation reduction"],
      image: boatVentilationSystem,
      alt: "Boat shrink wrap with professional ventilation system and moisture control"
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "UV-Resistant Materials",
      description: "High-quality materials that withstand UV rays and weather exposure",
      features: ["UV protection", "Weather resistant", "Long-lasting", "Premium materials"],
      image: boatInstallationProcess,
      alt: "Professional boat shrink wrap installation showing UV-resistant materials"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Complete Weather Protection",
      description: "Shields your boat from snow, ice, rain, and UV damage throughout the winter season"
    },
    {
      icon: <Wind className="h-6 w-6" />,
      title: "Proper Ventilation",
      description: "Prevents moisture buildup, mold, and mildew with our professional ventilation systems"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Custom Installation",
      description: "Each wrap is custom-fitted to your specific boat for maximum protection and aesthetics"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Seasonal Service",
      description: "Fall installation and spring removal services available across Ontario"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Boat Shrink Wrapping Ontario | Professional Marine Winterization Services</title>
        <meta 
          name="description" 
          content="Professional boat shrink wrapping services in Ontario. Protect your boat, yacht, or marine equipment from winter damage with custom fit installation, ventilation systems, and UV-resistant materials. Call (905) 328-1271" 
        />
        <meta 
          name="keywords" 
          content="boat shrink wrapping, marine winterization, boat winter storage, yacht shrink wrap, boat protection Ontario, marine shrink wrap services, boat winterization Toronto, yacht winter storage" 
        />
        <link rel="canonical" href="/boat-shrink-wrapping" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Boat Shrink Wrapping Ontario | Professional Marine Winterization Services" />
        <meta property="og:description" content="Professional boat shrink wrapping services in Ontario. Custom fit installation, ventilation systems, and UV-resistant materials for complete winter protection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/boat-shrink-wrapping" />
        <meta property="og:image" content={boatHeroShrinkwrap} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boat Shrink Wrapping Ontario | Professional Marine Winterization Services" />
        <meta name="twitter:description" content="Professional boat shrink wrapping services in Ontario. Custom fit installation, ventilation systems, and UV-resistant materials." />
        <meta name="twitter:image" content={boatHeroShrinkwrap} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Boat Shrink Wrapping Services",
            "description": "Professional winterization for boats, yachts, and marine equipment. Protect against snow, ice, and moisture damage with custom fit installation and ventilation systems.",
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
            "serviceType": "Marine Winterization",
            "offers": {
              "@type": "Offer",
              "description": "Professional boat shrink wrapping with custom fit installation, ventilation systems, and UV-resistant materials"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={boatHeroShrinkwrap}
              alt="Professional boat shrink wrapping service showing yacht covered in protective wrap at marina"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Professional Marine Winterization
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Boat Shrink Wrapping Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Professional winterization for boats, yachts, and marine equipment. 
                Protect against snow, ice, and moisture damage with our expert installation services.
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
                Complete Boat Protection Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive boat shrink wrapping services ensure your vessel stays protected 
                throughout Ontario's harsh winter months.
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

        {/* Before/After Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Results You Can See
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our expert installation ensures your boat is completely protected with a professional finish.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={boatBeforeAfter} 
                    alt="Before and after boat shrink wrapping showing complete transformation and protection"
                    className="w-full h-64 md:h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-bold text-2xl mb-2">
                      Professional Installation Process
                    </h3>
                    <p className="text-white/90">
                      From initial assessment to final installation, we ensure every detail is perfect.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our Boat Shrink Wrapping?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional installation with premium materials and expert service across Ontario.
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
              Protect Your Boat This Winter
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Don't let winter weather damage your valuable marine investment. 
              Get professional boat shrink wrapping services today.
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
                Boat Shrink Wrapping FAQs
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">When should I shrink wrap my boat?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The best time to shrink wrap your boat is in late fall before the first freeze. 
                    We typically recommend scheduling between October and November in Ontario for optimal protection.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does the shrink wrap installation take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most boat shrink wrapping installations take 2-4 hours depending on the size and complexity 
                    of your vessel. We work efficiently while ensuring perfect coverage and ventilation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide ventilation systems?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, proper ventilation is crucial for preventing moisture buildup and mold. We install 
                    professional ventilation systems with every shrink wrap installation to ensure your boat stays dry.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can you shrink wrap boats at marinas?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! We provide mobile services and can shrink wrap your boat at any marina, 
                    boat yard, or private location across Ontario. No need to transport your vessel.
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

export default BoatShrinkWrapping;