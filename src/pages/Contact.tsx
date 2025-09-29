import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission with Supabase
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-subtle border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Contact Mobile Shrink Wrap Ltd
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to protect your valuable assets? Get in touch for a free quote and expert advice.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're here to help protect your assets with professional mobile shrink wrapping services throughout Ontario.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Mobile Shrinkwrap LTD</h3>
                  <p className="text-muted-foreground">(905) 327-4381</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Mobile Shrink Wrap Services</h3>
                  <p className="text-muted-foreground">(905) 327-4381</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">mobileshrinkwrapltd@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Service Area</h3>
                  <p className="text-muted-foreground">Ontario, Canada</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground">24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Emergency Services</h3>
              <p className="text-muted-foreground mb-4">
                Need urgent protection due to weather damage or unexpected circumstances? 
                We offer priority emergency services throughout Ontario. Call us for immediate assistance.
              </p>
              <div className="flex items-center space-x-2 text-lg font-semibold text-primary">
                <Phone className="w-5 h-5" />
                <span>(905) 327-4381</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(905) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={(e) => handleInputChange(e as any)}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:ring-2 focus:ring-ring focus:border-ring"
                      >
                        <option value="">Select a service</option>
                        <option value="boat">Boat Shrink Wrapping</option>
                        <option value="machinery">Machinery Protection</option>
                        <option value="transport">Transport & Cargo</option>
                        <option value="construction">Construction Wrapping</option>
                        <option value="commercial">Commercial & Industrial</option>
                        <option value="residential">Residential Services</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                        Location *
                      </label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Toronto, ON"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project: dimensions, timeline, specific requirements..."
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Project Showcase */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Recent Project Showcase</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the quality and professionalism that sets Mobile Shrink Wrap Ltd apart.
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src="/src/assets/machinery-hero-shrinkwrap.jpg"
                  alt="Professional industrial machinery shrink wrapping project in Ontario"
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-primary">Featured Project</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground">
                    Industrial Equipment Protection - Hamilton
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Complete weatherproofing of critical manufacturing equipment during a facility shutdown. 
                    Our team provided custom-fit shrink wrapping with specialized ventilation systems to 
                    prevent corrosion and moisture damage during the 6-month storage period.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">48hrs</div>
                      <div className="text-sm text-muted-foreground">Project Duration</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Machines Protected</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Industrial Equipment
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Corrosion Prevention
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Custom Ventilation
                    </span>
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="outline" asChild>
                      <a href="/gallery">View More Projects</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;