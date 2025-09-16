import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ServiceAreasMap from "@/components/ServiceAreasMap";

const ServiceAreas = () => {
  const cities = [
    {
      name: "Toronto",
      slug: "toronto",
      region: "Greater Toronto Area",
      population: "2.9M",
      description: "Serving all of Toronto including downtown, North York, Scarborough, and Etobicoke."
    },
    {
      name: "Ottawa",
      slug: "ottawa",
      region: "National Capital Region",
      population: "1.0M",
      description: "Canada's capital and surrounding areas including Gatineau region."
    },
    {
      name: "Mississauga",
      slug: "mississauga",
      region: "Greater Toronto Area",
      population: "750K",
      description: "Major GTA city with extensive marina and industrial facilities."
    },
    {
      name: "Hamilton",
      slug: "hamilton",
      region: "Golden Horseshoe",
      population: "580K",
      description: "Steel city with major port and industrial shrink wrapping needs."
    },
    {
      name: "London",
      slug: "london",
      region: "Southwestern Ontario",
      population: "430K",
      description: "Forest City serving southwestern Ontario's agricultural and industrial sectors."
    },
    {
      name: "Windsor",
      slug: "windsor",
      region: "Essex County",
      population: "350K",
      description: "Border city with automotive industry and Great Lakes marine access."
    },
    {
      name: "Oakville",
      slug: "oakville",
      region: "Greater Toronto Area",
      population: "210K",
      description: "Affluent GTA community with extensive waterfront and marina facilities."
    },
    {
      name: "Burlington",
      slug: "burlington",
      region: "Greater Toronto Area",
      population: "185K",
      description: "Beautiful lakeside city between Toronto and Hamilton."
    },
    {
      name: "Niagara Falls",
      slug: "niagara",
      region: "Niagara Region",
      population: "90K",
      description: "Tourist destination with extensive marine and commercial wrapping needs."
    },
    {
      name: "Sudbury",
      slug: "sudbury",
      region: "Northern Ontario",
      population: "165K",
      description: "Mining city serving Northern Ontario's industrial protection needs."
    },
    {
      name: "Kingston",
      slug: "kingston",
      region: "Eastern Ontario",
      population: "135K",
      description: "Historic city with major marina facilities and military base."
    },
    {
      name: "Kitchener",
      slug: "kitchener",
      region: "Waterloo Region",
      population: "260K",
      description: "Technology hub with growing industrial and commercial sectors."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-subtle border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Ontario Service Areas
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mobile Shrink Wrap provides professional on-site services throughout Ontario. 
              We come directly to your location with our mobile equipment and expert team.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Comprehensive Coverage Across Ontario
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            From the bustling Greater Toronto Area to Northern Ontario's industrial regions, 
            we bring professional shrink wrapping services directly to you. Our mobile service 
            eliminates the need to transport your valuable assets.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cities.map((city) => (
            <Card key={city.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{city.name}</span>
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {city.region} • Population: {city.population}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {city.description}
                </p>
                <Link to={`/shrink-wrapping-${city.slug}-on`}>
                  <Button variant="outline" className="w-full">
                    View Shrinkwrap Services Near {city.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Service Area Map */}
        <ServiceAreasMap cities={cities} />

        {/* Service Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Mobile Service</h3>
            <p className="text-muted-foreground">
              We come to you with all necessary equipment and materials. No need to transport your assets.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Local Expertise</h3>
            <p className="text-muted-foreground">
              We understand Ontario's climate challenges and provide solutions tailored to local conditions.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary rounded text-primary-foreground flex items-center justify-center text-sm font-bold">
                24h
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Quick Response</h3>
            <p className="text-muted-foreground">
              Fast quotes and scheduling. Emergency services available for urgent weather protection needs.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-subtle rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Don't See Your City Listed?
          </h2>
          <p className="text-muted-foreground mb-6">
            We regularly expand our service areas throughout Ontario. Contact us to discuss your location and project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Request Service Quote
            </Button>
            <Button variant="outline" size="lg">
              Call (XXX) XXX-XXXX
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;