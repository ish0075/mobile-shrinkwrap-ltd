import { Button } from "@/components/ui/button";
import { Shield, Phone, MapPin, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-machinery-shrinkwrap.jpg";
import heroImageWebP from "@/assets/hero-machinery-shrinkwrap.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet={heroImageWebP} type="image/webp" />
          <img
            src={heroImage}
            alt="Professional machinery and industrial equipment shrink wrapping services in Ontario"
            className="w-full h-full object-cover"
            fetchPriority="high"
            sizes="100vw"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Top Right Text */}
      <div className="absolute top-4 right-4 z-20">
        <span className="text-white text-sm font-medium bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
          Protection Services
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-8 h-8 text-secondary" />
              <span className="text-secondary font-semibold text-lg">Professional Protection Since 2005</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Ontario's <span className="text-white">Mobile</span> Shrink Wrap Experts
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Protecting boats, machinery, and cargo across Ontario with professional mobile shrink wrapping services. We come to you!
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 mb-10">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-white/90">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-white/90">20+ Ontario Cities</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-white/90">Same-Day Service</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="xl" className="text-lg font-bold text-white" asChild>
              <a href="tel:9053274381">
                <Phone className="w-5 h-5 mr-2" />
                Get Free Quote Today
              </a>
            </Button>
              <Button 
                variant="cta-outline" 
                size="xl" 
                className="text-lg border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href="/service-areas">
                  <MapPin className="w-5 h-5 mr-2" />
                  View Service Areas
                </a>
              </Button>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <p className="text-white font-bold text-sm mb-2">Emergency or Rush Service?</p>
              <a href="tel:9053274381" className="text-white font-bold text-xl hover:text-secondary-light transition-colors">
                (905) 327-4381
              </a>
              <p className="text-white font-bold text-sm mt-1">Available 7 days a week</p>
            </div>
          </div>

          {/* Stats/Features Panel */}
          <div className="lg:pl-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-strong">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Mobile Shrink Wrap?</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24hr</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Cities Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Heavy-Duty Protection</h4>
                    <p className="text-sm text-muted-foreground">Military-grade shrink wrap withstands harsh Ontario weather</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Mobile Service</h4>
                    <p className="text-sm text-muted-foreground">We come to your location - no transport needed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Expert Installation</h4>
                    <p className="text-sm text-muted-foreground">Professional technicians ensure perfect fit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;