import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CityData, allCities } from '@/data/cityData';

interface CityPageProps {
  cityData: CityData;
}

const CityPage: React.FC<CityPageProps> = ({ cityData }) => {
  const {
    city,
    citySlug,
    region,
    population,
    neighborhoods,
    summary,
    usps,
    industries,
    process,
    faqs,
    phone,
    phoneDisplay,
    email,
    address,
    openHours,
    localLinks
  } = cityData;

  const otherCities = allCities.filter(c => c.slug !== citySlug);

  const jsonLdLocal = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mobile Shrink Wrap LTD",
    "image": `https://www.mobileshrinkwrapltd.com/assets/og/${citySlug}.jpg`,
    "telephone": phone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressLocality": city,
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "areaServed": { "@type": "City", "name": city },
    "url": `https://www.mobileshrinkwrapltd.com/shrink-wrapping-${citySlug}-on/`,
    "openingHours": openHours
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Shrink Wrap Services",
    "provider": { "@type": "LocalBusiness", "name": "Mobile Shrink Wrap LTD" },
    "areaServed": { "@type": "City", "name": city },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Shrink Wrap Applications",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boat & Marine Shrink Wrap" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction Containment" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Equipment Wrapping" } }
      ]
    }
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{`Shrink Wrap Services in ${city} | Mobile Shrink Wrap LTD`}</title>
        <meta 
          name="description" 
          content={`Professional shrink wrap services in ${city}. We protect boats, vehicles, and equipment with durable, weather‑resistant wrapping. Call for a free quote.`} 
        />
        <link rel="canonical" href={`https://www.mobileshrinkwrapltd.com/shrink-wrapping-${citySlug}-on/`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Shrink Wrap Services in ${city} | Mobile Shrink Wrap LTD`} />
        <meta property="og:description" content={`Professional shrink wrap services in ${city}. Durable protection for boats, vehicles, and equipment.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.mobileshrinkwrapltd.com/shrink-wrapping-${citySlug}-on/`} />
        <meta property="og:image" content={`https://www.mobileshrinkwrapltd.com/assets/og/${citySlug}.jpg`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdLocal)}
        </script>
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
              <Link to="/service-areas" className="hover:text-primary transition-colors">Service Areas</Link>
              {' › '}
              <span className="text-foreground">{city}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-subtle border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                {region} • Population: {population}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Shrink Wrap Services in {city}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                {summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4">
                  <div className="font-semibold text-foreground">Mobile Crews</div>
                  <div className="text-sm text-muted-foreground">We come to you</div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4">
                  <div className="font-semibold text-foreground">All‑Season</div>
                  <div className="text-sm text-muted-foreground">Wind & UV resistant</div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4">
                  <div className="font-semibold text-foreground">Fast Quotes</div>
                  <div className="text-sm text-muted-foreground">Same‑day response</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="cta" asChild>
                  <a href={`tel:${phone}`}>Call {phoneDisplay}</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`mailto:${email}?subject=Quote%20Request%20-%20${encodeURIComponent(city)}`}>
                    Email Photos for Pricing
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Why Choose Us */}
            <Card>
              <CardHeader>
                <CardTitle>Why {city} Chooses Mobile Shrink Wrap LTD</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {usps.map((usp, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{usp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Industries We Serve */}
            <Card>
              <CardHeader>
                <CardTitle>Industries & Applications We Serve</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {industries.map((industry, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{industry}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Neighborhoods */}
            <Card>
              <CardHeader>
                <CardTitle>Neighborhoods We Serve in {city}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {neighborhoods.join(", ")}
                </p>
              </CardContent>
            </Card>

            {/* Process */}
            <Card>
              <CardHeader>
                <CardTitle>Our Shrink Wrap Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {process.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Get a Free Quote</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  For fastest pricing, call or email photos with approximate dimensions. We'll quote the same day.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href={`tel:${phone}`} className="text-primary hover:underline">
                      {phoneDisplay}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href={`mailto:${email}`} className="text-primary hover:underline">
                      {email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{openHours}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button variant="cta" asChild className="flex-1">
                    <a href={`tel:${phone}`}>Call Now</a>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link to="/contact">Contact Form</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Local Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Local Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {localLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* FAQs */}
          <section className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle>FAQs — Shrink Wrap in {city}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-b-0">
                    <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          {/* Other Service Areas */}
          <section className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle>More Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {otherCities.map((otherCity) => (
                    <Link
                      key={otherCity.slug}
                      to={`/shrink-wrapping-${otherCity.slug}-on`}
                      className="inline-flex items-center px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
                    >
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {otherCity.name}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </>
  );
};

export default CityPage;
