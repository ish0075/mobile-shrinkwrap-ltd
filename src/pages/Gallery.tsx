import { Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import transportCargo from "@/assets/gallery/transport-cargo.jpg";
import boatWrapping from "@/assets/gallery/boat-wrapping.jpg";
import machineryWrapping from "@/assets/gallery/machinery-wrapping.jpg";
import machineryStorage from "@/assets/gallery/machinery-storage.jpg";
import industrialEquipment from "@/assets/gallery/industrial-equipment.jpg";
import boatsAutomotive from "@/assets/gallery/boats-automotive.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      src: transportCargo,
      alt: "Professional shrink wrapping for transport cargo in Toronto - Mobile Shrink Wrap services",
      title: "Transport Cargo Protection"
    },
    {
      src: boatWrapping, 
      alt: "Boat shrink wrapping services in Niagara region - Winter protection for marine vessels",
      title: "Boat Winterization"
    },
    {
      src: machineryWrapping,
      alt: "Industrial machinery shrink wrap protection - Outdoor storage solutions Ontario",
      title: "Machinery Protection"
    },
    {
      src: machineryStorage,
      alt: "Heavy equipment shrink wrapping for outdoor storage - Professional industrial wrapping",
      title: "Equipment Storage"
    },
    {
      src: industrialEquipment,
      alt: "Industrial equipment shrink wrap services - Weather protection for machinery",
      title: "Industrial Wrapping"
    },
    {
      src: boatsAutomotive,
      alt: "Boat and automotive shrink wrapping in Niagara - Marine and vehicle protection services",
      title: "Marine & Automotive"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-marine text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Work Gallery
            </h1>
            <p className="text-xl mb-8 text-marine-light">
              See our professional shrink wrapping services in action across Ontario
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Request Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-marine"
                onClick={() => window.open('https://m.facebook.com/mobileshrinkwrapservices/', '_blank')}
              >
                <Facebook className="w-5 h-5 mr-2" />
                Visit Our Facebook
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-strong transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marine/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-marine">
            Ready to Protect Your Assets?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact Mobile Shrink Wrap today for professional, mobile shrink wrapping services across Ontario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg">
              Call (905) 327-4381
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;