import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Construction, 
  Shield, 
  Building, 
  Lock,
  Cloud,
  CheckCircle,
  Phone,
  Calendar,
  MapPin,
  Star,
  HardHat,
  Wind
} from "lucide-react";

// Import construction shrink wrap images
import constructionHeroShrinkwrap from "@/assets/construction-hero-shrinkwrap.jpg";
import scaffoldEnclosure from "@/assets/scaffold-enclosure.jpg";
import materialProtection from "@/assets/material-protection.jpg";
import weatherBarriers from "@/assets/weather-barriers.jpg";
import siteSecurity from "@/assets/site-security.jpg";
import constructionInstallation from "@/assets/construction-installation.jpg";

const ConstructionWrapping = () => {
  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Scaffold Enclosure",
      description: "Complete scaffolding enclosure systems for weather protection and containment",
      features: ["Weather enclosure", "Dust containment", "Work area protection", "Professional installation"],
      image: scaffoldEnclosure,
      alt: "Construction scaffolding completely enclosed with protective shrink wrap for weather barrier"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Material Protection",
      description: "Protect building materials, equipment, and supplies from weather damage",
      features: ["Material coverage", "Equipment protection", "Supply securing", "Moisture prevention"],
      image: materialProtection,
      alt: "Building materials, lumber, and construction supplies covered with protective shrink wrap"
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Weather Barriers",
      description: "Temporary weather barriers to maintain productivity during adverse conditions",
      features: ["Wind protection", "Rain barriers", "Temperature control", "Work continuity"],
      image: weatherBarriers,
      alt: "Construction site with temporary weather barriers made of shrink wrap protecting work areas"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Site Security",
      description: "Enhanced site security and access control with protective barriers",
      features: ["Access control", "Security barriers", "Site perimeter", "Theft prevention"],
      image: siteSecurity,
      alt: "Construction site with security fencing and shrink wrap barriers for site security"
    }
  ];

  const benefits = [
    {
      icon: <HardHat className="h-6 w-6" />,
      title: "Worker Safety",
      description: "Enhanced safety conditions with protection from weather and debris for construction workers"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Project Continuity",
      description: "Maintain construction schedules by creating protected work environments during adverse weather"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Asset Protection",
      description: "Protect valuable materials, equipment, and completed work from weather damage and theft"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Custom Solutions",
      description: "Tailored wrapping solutions designed for your specific construction site needs and challenges"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Construction Wrapping Ontario | Temporary Weather Protection for Building Sites</title>
        <meta 
          name="description" 
          content="Professional construction wrapping services in Ontario. Temporary weather protection for construction sites, scaffolding, and building materials. Scaffold enclosure, material protection, weather barriers, site security. Call (905) 327-4381" 
        />
        <meta 
          name="keywords" 
          content="construction wrapping, scaffold enclosure, building site protection, construction weather barriers, material protection, site security, temporary construction barriers, construction shrink wrap Ontario, building site wrapping" 
        />
        <link rel="canonical" href="/construction-wrapping" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Construction Wrapping Ontario | Temporary Weather Protection for Building Sites" />
        <meta property="og:description" content="Professional construction wrapping services in Ontario. Temporary weather protection for construction sites with scaffold enclosure, material protection, and weather barriers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/construction-wrapping" />
        <meta property="og:image" content={constructionHeroShrinkwrap} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Construction Wrapping Ontario | Temporary Weather Protection for Building Sites" />
        <meta name="twitter:description" content="Professional construction wrapping services in Ontario. Weather protection for construction sites and building materials." />
        <meta name="twitter:image" content={constructionHeroShrinkwrap} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Construction Wrapping Services",
            "description": "Temporary weather protection for construction sites, scaffolding, and building materials with scaffold enclosure, material protection, weather barriers, and site security solutions.",
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
            "serviceType": "Construction Site Protection",
            "offers": {
              "@type": "Offer",
              "description": "Professional construction wrapping with scaffold enclosure, material protection, weather barriers, and site security"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={constructionHeroShrinkwrap}
              alt="Professional construction site shrink wrapping service showing building site covered in protective wrap"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Construction Site Protection
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Construction Wrapping Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Temporary weather protection for construction sites, scaffolding, and building materials. 
                Keep your project on schedule with professional protection solutions.
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
                Complete Construction Site Protection
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive construction wrapping services keep your site productive 
                and protected regardless of Ontario's challenging weather conditions.
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
                Professional Installation & Site Assessment
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our experienced team works with construction schedules to provide efficient installation with minimal disruption.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={constructionInstallation} 
                    alt="Professional construction wrapping installation showing workers installing shrink wrap on construction site"
                    className="w-full h-64 md:h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-bold text-2xl mb-2">
                      Expert Installation & Project Coordination
                    </h3>
                    <p className="text-white/90">
                      Working closely with project managers to ensure seamless integration with construction timelines.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Process Steps */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Site Assessment</h3>
                <p className="text-muted-foreground">
                  Comprehensive evaluation of your construction site to determine optimal protection strategy and materials needed.
                </p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Installation</h3>
                <p className="text-muted-foreground">
                  Professional installation tailored to your specific site requirements, working around construction activities.
                </p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Regular maintenance and modifications as your construction project progresses through different phases.
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
                Why Choose Our Construction Wrapping?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional construction protection services designed to keep projects on schedule and within budget.
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

        {/* Industry Applications */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Construction Industry Applications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <Construction className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Residential Construction</h3>
                <p className="text-muted-foreground">
                  Home building projects, renovations, and residential developments requiring weather protection.
                </p>
              </Card>

              <Card className="p-6">
                <Building className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Commercial Projects</h3>
                <p className="text-muted-foreground">
                  Office buildings, retail spaces, and commercial developments needing comprehensive site protection.
                </p>
              </Card>

              <Card className="p-6">
                <HardHat className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Industrial Construction</h3>
                <p className="text-muted-foreground">
                  Manufacturing facilities, warehouses, and industrial complexes requiring specialized protection solutions.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-variant text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Protect Your Construction Project Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Don't let weather delays and damage impact your construction schedule. 
              Get professional temporary protection solutions now.
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
                Site Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Construction Wrapping FAQs
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How quickly can you install construction wrapping?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Installation time varies by project size, but most standard construction site wrapping can be completed 
                    within 1-2 days. We work efficiently to minimize disruption to your construction schedule.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can the wrapping be modified as construction progresses?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! Our construction wrapping solutions are designed to be flexible. We can modify, expand, 
                    or relocate the wrapping as your project phases change and construction areas shift.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What weather conditions can construction wrapping withstand?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our heavy-duty materials are designed for Ontario's harsh weather conditions including high winds, 
                    heavy snow loads, rain, and temperature extremes. We engineer solutions for your specific climate challenges.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you work with construction project managers?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! We coordinate closely with project managers, general contractors, and site supervisors 
                    to ensure our installation aligns with construction timelines and safety protocols.
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

export default ConstructionWrapping;