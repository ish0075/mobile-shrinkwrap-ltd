import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { RegionData } from '@/data/regionData';

interface RegionPageProps {
  regionData: RegionData;
}

const RegionPage: React.FC<RegionPageProps> = ({ regionData }) => {
  const {
    region,
    regionSlug,
    tagline,
    summary,
    regionCities,
    usps,
    sectors,
    process,
    hubs,
    faqs,
    phone,
    phoneDisplay,
    email,
    address,
    openHours,
    regionalLinks
  } = regionData;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mobile Shrink Wrap LTD",
    "image": `https://www.mobileshrinkwrapltd.com/assets/og/regions/${regionSlug}.jpg`,
    "telephone": phone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressLocality": "Toronto", 
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": region
    },
    "url": `https://www.mobileshrinkwrapltd.com/regions/${regionSlug}/`,
    "openingHours": openHours
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Shrink Wrap Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mobile Shrink Wrap LTD"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": region
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Shrink Wrap Applications",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Boat & Marine Shrink Wrap"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Construction Containment"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Industrial Equipment Wrapping"}}
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Shrink Wrap Services — {region} | Mobile Shrink Wrap LTD</title>
        <meta name="description" content={`Mobile shrink wrap for marine, construction, and industrial protection across ${region}. On‑site wrapping with UV‑stable film and venting. Free quotes.`} />
        <link rel="canonical" href={`https://www.mobileshrinkwrapltd.com/regions/${regionSlug}/`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Shrink Wrap Services — ${region} | Mobile Shrink Wrap LTD`} />
        <meta property="og:description" content={`On‑site boat, vehicle, and equipment shrink wrap across ${region}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.mobileshrinkwrapltd.com/regions/${regionSlug}/`} />
        <meta property="og:image" content={`https://www.mobileshrinkwrapltd.com/assets/og/regions/${regionSlug}.jpg`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
          <div className="text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Home</a> › 
            <a href="/service-areas" className="hover:text-primary ml-1">Service Areas</a> › 
            <span className="ml-1">{region}</span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8">
          <Card className="p-8 bg-card shadow-lg">
            <Badge className="mb-4" variant="secondary">{tagline}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Shrink Wrap Services — {region}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {summary}
            </p>
            
            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-background border rounded-lg p-4">
                <div className="font-semibold">Mobile Crews</div>
                <div className="text-sm text-muted-foreground">We come to you</div>
              </div>
              <div className="bg-background border rounded-lg p-4">
                <div className="font-semibold">All‑Season</div>
                <div className="text-sm text-muted-foreground">Wind & UV resistant</div>
              </div>
              <div className="bg-background border rounded-lg p-4">
                <div className="font-semibold">Fast Quotes</div>
                <div className="text-sm text-muted-foreground">Same‑day response</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <a href={`tel:${phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call {phoneDisplay}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`mailto:${email}?subject=Quote%20Request%20-%20${encodeURIComponent(region)}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email Photos for Pricing
                </a>
              </Button>
            </div>
          </Card>
        </section>

        {/* Main Content Grid */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Why Choose Us */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Why Choose Mobile Shrink Wrap LTD in {region}
              </h2>
              <ul className="space-y-2">
                {usps.map((usp, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {usp}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Industries We Serve */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Industries & Applications We Serve</h2>
              <ul className="space-y-2">
                {sectors.map((sector, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {sector}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Cities We Serve */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Cities We Serve in {region}
              </h2>
              <div className="flex flex-wrap gap-2">
                {regionCities.map((city, index) => (
                  <a 
                    key={index} 
                    href={`/${city.slug}/`} 
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                  >
                    {city.name}
                  </a>
                ))}
              </div>
            </Card>

            {/* Regional Hubs */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Regional Hubs</h2>
              <div className="flex flex-wrap gap-2">
                {hubs.map((hub, index) => (
                  <Badge key={index} variant="secondary">
                    {hub}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Our Process */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Our Shrink Wrap Process</h2>
              <ol className="space-y-2">
                {process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </Card>

            {/* Regional Resources */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Regional Resources</h2>
              <ul className="space-y-2">
                {regionalLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-primary hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <section className="container mx-auto px-4 py-8">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">
              FAQs — Working Across {region}
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-8">
          <Card className="p-8 text-center bg-primary text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Get a Free Quote</h2>
            <p className="mb-6">
              For fastest pricing, call or email photos with approximate dimensions. 
              We'll quote the same day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href={`tel:${phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call {phoneDisplay}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`mailto:${email}?subject=Photos%20for%20Quote%20-%20${encodeURIComponent(region)}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email Photos
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/contact/">Contact Form</a>
              </Button>
            </div>
          </Card>
        </section>

        {/* Contact Info */}
        <section className="container mx-auto px-4 py-8">
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-4">Mobile Shrink Wrap LTD</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {address}
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href={`tel:${phone}`} className="hover:text-primary">{phoneDisplay}</a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href={`mailto:${email}`} className="hover:text-primary">{email}</a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {openHours}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Services</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Boat & Marine Shrink Wrap</li>
                  <li>Vehicle & Fleet Protection</li>
                  <li>Construction Containment</li>
                  <li>Industrial Equipment Wrapping</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </>
  );
};

export default RegionPage;