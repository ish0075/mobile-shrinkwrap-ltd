import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Waves, 
  Armchair, 
  Package, 
  CheckCircle, 
  Phone, 
  Mail,
  Clock,
  Users,
  Shield,
  Snowflake,
  Sun,
  TreePine
} from 'lucide-react';
import { Link } from 'react-router-dom';
import boatWinterStorage from '@/assets/boat-winter-storage.jpg';
import boatHero from '@/assets/boat-hero-shrinkwrap.jpg';
import boatVentilation from '@/assets/boat-ventilation-system.jpg';
import boatCustomFit from '@/assets/boat-custom-fit.jpg';

const ResidentialServices = () => {
  const services = [
    {
      title: "Pool Winterization",
      description: "Complete pool protection systems for harsh Ontario winters, preventing damage and reducing spring startup costs.",
      features: [
        "Above-ground pool covers",
        "In-ground pool protection",
        "Equipment and pump housing",
        "Custom-fit installation"
      ],
      icon: Waves
    },
    {
      title: "Furniture Protection",
      description: "Premium outdoor furniture wrapping to protect against weather, UV damage, and seasonal storage needs.",
      features: [
        "Patio furniture sets",
        "BBQ and outdoor kitchens",
        "Garden equipment",
        "Decorative elements"
      ],
      icon: Armchair
    },
    {
      title: "Equipment Storage",
      description: "Professional wrapping for lawn equipment, vehicles, and recreational gear during off-seasons.",
      features: [
        "Lawn mowers and tractors",
        "ATVs and motorcycles",
        "Recreational vehicles",
        "Garden tools and equipment"
      ],
      icon: Package
    },
    {
      title: "Seasonal Wrapping",
      description: "Comprehensive seasonal protection for all your outdoor assets, from spring through winter.",
      features: [
        "Dock and marine equipment",
        "Playground equipment",
        "Outdoor sculptures",
        "HVAC units and generators"
      ],
      icon: Snowflake
    }
  ];

  const applications = [
    "Swimming Pools & Hot Tubs",
    "Patio & Outdoor Furniture", 
    "Lawn & Garden Equipment",
    "Recreational Vehicles",
    "Boat Docks & Marine Equipment",
    "Playground & Play Sets",
    "Outdoor Kitchens & BBQs",
    "HVAC Equipment",
    "Decorative Garden Features",
    "Seasonal Decorations"
  ];

  const benefits = [
    {
      title: "Weather Protection",
      description: "Shield your investments from rain, snow, UV rays, and harsh Ontario weather conditions.",
      icon: Shield
    },
    {
      title: "Cost Savings",
      description: "Extend the life of your outdoor equipment and furniture, reducing replacement costs.",
      icon: Clock
    },
    {
      title: "Convenience",
      description: "Professional mobile service comes to your home - no transport or storage hassles.",
      icon: Home
    },
    {
      title: "Year-Round Peace of Mind",
      description: "Enjoy knowing your valuable outdoor assets are properly protected during off-seasons.",
      icon: TreePine
    }
  ];

  const seasonalTips = [
    {
      season: "Spring",
      icon: Sun,
      tasks: [
        "Remove winter wrapping carefully",
        "Inspect equipment for winter damage",
        "Clean and service before use",
        "Plan summer protection needs"
      ]
    },
    {
      season: "Fall/Winter",
      icon: Snowflake,
      tasks: [
        "Drain and winterize pools",
        "Clean equipment before wrapping",
        "Apply professional shrink wrap",
        "Ensure proper ventilation"
      ]
    }
  ];

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Shrink Wrapping Services",
    "description": "Home and property protection including pools, outdoor furniture, and seasonal equipment across Ontario.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mobile Shrink Wrap LTD",
      "telephone": "+1-905-327-4381",
      "email": "mobileshrinkwrapltd@gmail.com",
      "areaServed": "Ontario, Canada"
    },
    "serviceType": "Residential Protection Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Residential Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "position": index + 1
      }))
    }
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does residential shrink wrapping cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Residential shrink wrapping costs vary based on the size and complexity of items being wrapped. Pool winterization typically ranges from $200-600, while furniture protection starts around $100. We provide free on-site quotes for accurate pricing."
        }
      },
      {
        "@type": "Question", 
        "name": "When should I winterize my pool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pool winterization should typically be done when water temperatures consistently drop below 18°C (65°F), usually in late September to October in Ontario. Early winterization prevents algae growth and equipment damage."
        }
      },
      {
        "@type": "Question",
        "name": "Can shrink wrap damage my furniture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When professionally installed, shrink wrap provides excellent protection without damage. Our materials are designed for outdoor use with proper ventilation to prevent moisture buildup and mold growth."
        }
      },
      {
        "@type": "Question",
        "name": "Do you service residential properties year-round?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide residential services throughout the year. Fall and early winter are our busiest seasons for winterization, while spring and summer focus on furniture protection and equipment storage preparation."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Residential Shrink Wrapping Services Ontario | Pool & Furniture Protection</title>
        <meta 
          name="description" 
          content="Home and property protection including pools, outdoor furniture, and seasonal equipment. Pool winterization, furniture protection, and equipment storage across Ontario." 
        />
        <meta name="keywords" content="residential shrink wrap, pool winterization, furniture protection, outdoor equipment storage, home protection Ontario" />
        <link rel="canonical" href="https://www.mobileshrinkwrapltd.com/residential-shrink-wrapping/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Residential Shrink Wrapping Services Ontario | Pool & Furniture Protection" />
        <meta property="og:description" content="Home and property protection including pools, outdoor furniture, and seasonal equipment across Ontario." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mobileshrinkwrapltd.com/residential-shrink-wrapping/" />
        <meta property="og:image" content="https://www.mobileshrinkwrapltd.com/assets/og/residential-services.jpg" />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdService)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(jsonLdFaq)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <nav className="bg-muted/50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              {' › '}
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              {' › '}
              <span className="text-foreground">Residential Services</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-subtle border-b border-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <Home className="w-4 h-4 mr-2" />
                  Residential Protection
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Residential Shrink Wrapping Services
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8">
                  Home and property protection including pools, outdoor furniture, and seasonal equipment. 
                  Professional mobile service protecting Ontario homes year-round.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" variant="cta" asChild>
                    <a href="tel:+1-905-327-4381">
                      <Phone className="w-5 h-5 mr-2" />
                      Get Free Home Quote
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">
                      <Mail className="w-5 h-5 mr-2" />
                      Schedule Service
                    </Link>
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">Mobile</div>
                    <div className="text-sm text-muted-foreground">Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Homes Protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">All Seasons</div>
                    <div className="text-sm text-muted-foreground">Protection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">Ontario</div>
                    <div className="text-sm text-muted-foreground">Wide Service</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={boatWinterStorage}
                  alt="Residential pool winterization and outdoor furniture protection services in Ontario"
                  className="rounded-lg shadow-strong w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Complete Residential Protection Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From pool winterization to outdoor furniture protection, we provide comprehensive solutions 
                to protect your home&apos;s valuable outdoor assets through every season.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="hover:shadow-medium transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What We Protect at Your Home
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our residential shrink wrapping services cover all your outdoor investments, 
                  ensuring they&apos;re protected from Ontario&apos;s challenging weather conditions.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={boatHero}
                  alt="Professional residential shrink wrapping for outdoor furniture and equipment protection"
                  className="rounded-lg shadow-strong w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Professional Residential Wrapping?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Protect your investments and enjoy peace of mind with our professional residential shrink wrapping services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Seasonal Guide */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Seasonal Protection Guide
              </h2>
              <p className="text-xl text-muted-foreground">
                Know when and how to protect your outdoor assets throughout Ontario&apos;s changing seasons.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seasonalTips.map((season, index) => {
                const IconComponent = season.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <IconComponent className="w-6 h-6 text-primary" />
                        <span>{season.season} Preparation</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {season.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process & Gallery */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Process */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-primary" />
                    <span>Our Residential Service Process</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Free Home Assessment</h4>
                      <p className="text-sm text-muted-foreground">We visit your property to assess protection needs and provide accurate quotes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Preparation & Cleaning</h4>
                      <p className="text-sm text-muted-foreground">Proper preparation ensures optimal protection and prevents damage during wrapping.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Professional Installation</h4>
                      <p className="text-sm text-muted-foreground">Expert application of high-quality materials with proper ventilation systems.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Seasonal Maintenance</h4>
                      <p className="text-sm text-muted-foreground">Follow-up inspections and seasonal removal when you&apos;re ready to use your items again.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Recent Residential Projects</h3>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={boatVentilation}
                    alt="Professional pool winterization with proper ventilation systems"
                    className="rounded-lg shadow-medium h-32 w-full object-cover"
                  />
                  <img
                    src={boatCustomFit}
                    alt="Custom-fit outdoor furniture protection and seasonal wrapping"
                    className="rounded-lg shadow-medium h-32 w-full object-cover"
                  />
                  <div className="col-span-2">
                    <img
                      src={boatWinterStorage}
                      alt="Complete residential equipment storage and winterization services"
                      className="rounded-lg shadow-medium h-32 w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our residential shrink wrapping services.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  How much does residential shrink wrapping cost?
                </h3>
                <p className="text-muted-foreground">
                  Residential shrink wrapping costs vary based on the size and complexity of items being wrapped. 
                  Pool winterization typically ranges from $200-600, while furniture protection starts around $100. 
                  We provide free on-site quotes for accurate pricing.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  When should I winterize my pool?
                </h3>
                <p className="text-muted-foreground">
                  Pool winterization should typically be done when water temperatures consistently drop below 18°C (65°F), 
                  usually in late September to October in Ontario. Early winterization prevents algae growth and equipment damage.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Can shrink wrap damage my furniture?
                </h3>
                <p className="text-muted-foreground">
                  When professionally installed, shrink wrap provides excellent protection without damage. Our materials 
                  are designed for outdoor use with proper ventilation to prevent moisture buildup and mold growth.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Do you service residential properties year-round?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we provide residential services throughout the year. Fall and early winter are our busiest seasons 
                  for winterization, while spring and summer focus on furniture protection and equipment storage preparation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Protect Your Home?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free quote for your residential shrink wrapping needs. From pool winterization 
              to furniture protection, we&apos;ve got your home covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" asChild>
                <a href="tel:+1-905-327-4381">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (905) 327-4381
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:mobileshrinkwrapltd@gmail.com?subject=Residential%20Service%20Quote%20Request">
                  <Mail className="w-5 h-5 mr-2" />
                  Email for Quote
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResidentialServices;