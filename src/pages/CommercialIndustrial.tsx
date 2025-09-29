import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Factory, 
  Shield, 
  Wrench, 
  CheckCircle, 
  Phone, 
  Mail,
  Clock,
  Users,
  Settings,
  Zap,
  TreePine
} from 'lucide-react';
import { Link } from 'react-router-dom';
import machineryHero from '@/assets/machinery-hero-shrinkwrap.jpg';
import constructionHero from '@/assets/construction-hero-shrinkwrap.jpg';
import cargoStabilization from '@/assets/cargo-stabilization.jpg';
import machineryCorrosion from '@/assets/machinery-corrosion-protection.jpg';

const CommercialIndustrial = () => {
  const services = [
    {
      title: "Large Structure Wrapping",
      description: "Complete enclosure solutions for buildings, scaffolding, and massive industrial structures.",
      features: [
        "Multi-story building containment",
        "Scaffolding and construction enclosures", 
        "Temporary weather barriers",
        "Dust and debris containment"
      ],
      icon: Building2
    },
    {
      title: "Equipment Mothballing",
      description: "Long-term protection for idle machinery and industrial equipment during shutdowns.",
      features: [
        "Corrosion prevention systems",
        "Moisture control solutions",
        "UV protection for outdoor storage",
        "Custom ventilation systems"
      ],
      icon: Settings
    },
    {
      title: "Facility Protection",
      description: "Comprehensive protection for manufacturing plants, warehouses, and industrial facilities.",
      features: [
        "Emergency weather protection",
        "Temporary roof systems",
        "Wall and opening protection",
        "Environmental containment"
      ],
      icon: Factory
    },
    {
      title: "Custom Solutions",
      description: "Tailored shrink wrapping solutions for unique commercial and industrial challenges.",
      features: [
        "Engineering consultation",
        "Site-specific designs",
        "Specialized materials",
        "Project management"
      ],
      icon: Wrench
    }
  ];

  const industries = [
    "Manufacturing Plants",
    "Power Generation Facilities", 
    "Oil & Gas Installations",
    "Mining Operations",
    "Chemical Processing",
    "Food Processing Plants",
    "Pharmaceutical Facilities",
    "Automotive Manufacturing",
    "Steel Mills & Foundries",
    "Pulp & Paper Mills"
  ];

  const benefits = [
    {
      title: "Cost-Effective Protection",
      description: "Significantly lower cost than permanent structures or heated storage.",
      icon: Zap
    },
    {
      title: "Rapid Deployment",
      description: "Quick installation minimizes downtime and production delays.",
      icon: Clock
    },
    {
      title: "Weather Resistant",
      description: "Withstands extreme weather conditions including high winds and heavy snow.",
      icon: Shield
    },
    {
      title: "Environmental Protection",
      description: "Prevents contamination and meets environmental compliance requirements.",
      icon: TreePine
    }
  ];

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial & Industrial Shrink Wrapping Services",
    "description": "Large-scale shrink wrapping for commercial facilities, equipment, and industrial applications across Ontario.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mobile Shrink Wrap LTD",
      "telephone": "+1-905-327-4381",
      "email": "mobileshrinkwrapltd@gmail.com",
      "areaServed": "Ontario, Canada"
    },
    "serviceType": "Industrial Protection Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial & Industrial Services",
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
        "name": "What size structures can you wrap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can wrap structures of any size, from small equipment to multi-story buildings and entire industrial facilities. Our team has experience with projects ranging from single machines to complete manufacturing plants."
        }
      },
      {
        "@type": "Question", 
        "name": "How long does commercial shrink wrapping last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our commercial-grade shrink wrap materials are designed for long-term protection, typically lasting 2-5 years depending on environmental conditions and UV exposure. We use heavy-duty films with UV inhibitors for extended outdoor use."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide emergency industrial wrapping services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer 24/7 emergency response for critical industrial protection needs. Whether it's weather damage, equipment failure, or urgent facility protection, our mobile crews can respond quickly across Ontario."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Commercial & Industrial Shrink Wrapping Services Ontario | Mobile Shrink Wrap</title>
        <meta 
          name="description" 
          content="Large-scale shrink wrapping for commercial facilities, equipment, and industrial applications. Structure wrapping, equipment mothballing, and custom protection solutions across Ontario." 
        />
        <meta name="keywords" content="commercial shrink wrapping, industrial equipment protection, facility wrapping, structure enclosure, equipment mothballing, Ontario" />
        <link rel="canonical" href="https://www.mobileshrinkwrapltd.com/commercial-industrial-shrink-wrapping/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Commercial & Industrial Shrink Wrapping Services Ontario" />
        <meta property="og:description" content="Large-scale shrink wrapping for commercial facilities, equipment, and industrial applications across Ontario." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mobileshrinkwrapltd.com/commercial-industrial-shrink-wrapping/" />
        <meta property="og:image" content="https://www.mobileshrinkwrapltd.com/assets/og/commercial-industrial.jpg" />
        
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
              <span className="text-foreground">Commercial & Industrial</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-subtle border-b border-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <Factory className="w-4 h-4 mr-2" />
                  Industrial Solutions
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Commercial & Industrial Shrink Wrapping Services
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8">
                  Large-scale shrink wrapping for commercial facilities, equipment, and industrial applications. 
                  Professional protection solutions for Ontario's industrial sector.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" variant="cta" asChild>
                    <a href="tel:+1-905-327-4381">
                      <Phone className="w-5 h-5 mr-2" />
                      Get Industrial Quote
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">
                      <Mail className="w-5 h-5 mr-2" />
                      Project Consultation
                    </Link>
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Emergency Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Industrial Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">Any Size</div>
                    <div className="text-sm text-muted-foreground">Structure Coverage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">Ontario</div>
                    <div className="text-sm text-muted-foreground">Wide Coverage</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={machineryHero}
                  alt="Commercial and industrial shrink wrapping of heavy machinery and equipment in Ontario"
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
                Comprehensive Industrial Protection Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From equipment mothballing to complete facility enclosure, we provide industrial-grade 
                protection solutions tailored to your specific needs.
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

        {/* Industries Served */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Industries We Serve
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our commercial and industrial shrink wrapping services protect critical assets 
                  across Ontario's diverse industrial landscape.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={constructionHero}
                  alt="Industrial facility shrink wrapping and construction site containment services"
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
                Why Choose Our Industrial Shrink Wrapping?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional-grade protection designed for the demanding requirements of commercial and industrial applications.
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

        {/* Process & Gallery */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Process */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-primary" />
                    <span>Our Industrial Process</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Site Assessment & Planning</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive evaluation of your facility and equipment protection needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Custom Solution Design</h4>
                      <p className="text-sm text-muted-foreground">Engineering tailored protection systems for your specific industrial requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Professional Installation</h4>
                      <p className="text-sm text-muted-foreground">Expert team deployment with industrial-grade materials and equipment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Quality Assurance & Monitoring</h4>
                      <p className="text-sm text-muted-foreground">Thorough inspection and ongoing support for long-term protection.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Recent Industrial Projects</h3>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={cargoStabilization}
                    alt="Large-scale cargo and equipment stabilization with shrink wrap protection"
                    className="rounded-lg shadow-medium h-32 w-full object-cover"
                  />
                  <img
                    src={machineryCorrosion}
                    alt="Industrial machinery corrosion protection using professional shrink wrapping"
                    className="rounded-lg shadow-medium h-32 w-full object-cover"
                  />
                  <div className="col-span-2">
                    <img
                      src={constructionHero}
                      alt="Complete industrial facility enclosure and weather protection services"
                      className="rounded-lg shadow-medium h-32 w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our commercial and industrial shrink wrapping services.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  What size structures can you wrap?
                </h3>
                <p className="text-muted-foreground">
                  We can wrap structures of any size, from small equipment to multi-story buildings and entire 
                  industrial facilities. Our team has experience with projects ranging from single machines to 
                  complete manufacturing plants.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  How long does commercial shrink wrapping last?
                </h3>
                <p className="text-muted-foreground">
                  Our commercial-grade shrink wrap materials are designed for long-term protection, typically 
                  lasting 2-5 years depending on environmental conditions and UV exposure. We use heavy-duty 
                  films with UV inhibitors for extended outdoor use.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Do you provide emergency industrial wrapping services?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we offer 24/7 emergency response for critical industrial protection needs. Whether it&apos;s 
                  weather damage, equipment failure, or urgent facility protection, our mobile crews can respond 
                  quickly across Ontario.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  What industries do you serve?
                </h3>
                <p className="text-muted-foreground">
                  We serve a wide range of industries including manufacturing, power generation, oil & gas, 
                  mining, chemical processing, automotive, steel mills, and more. Our solutions are customized 
                  for each industry&apos;s specific requirements and safety standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Protect Your Industrial Assets?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a custom quote for your commercial or industrial shrink wrapping project. 
              Our experts are ready to provide professional consultation and rapid deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" asChild>
                <a href="tel:+1-905-327-4381">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (905) 327-4381
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:mobileshrinkwrapltd@gmail.com?subject=Commercial%20Industrial%20Quote%20Request">
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

export default CommercialIndustrial;