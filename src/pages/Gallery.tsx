import { Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import transportCargo from "@/assets/gallery/transport-cargo.jpg";
import boatWrapping from "@/assets/gallery/boat-wrapping.jpg";
import machineryWrapping from "@/assets/gallery/machinery-wrapping.jpg";
import machineryStorage from "@/assets/gallery/machinery-storage.jpg";
import industrialEquipment from "@/assets/gallery/industrial-equipment.jpg";
import boatsAutomotive from "@/assets/gallery/boats-automotive.jpg";
import rvShrinkwrap from "@/assets/gallery/rv-shrinkwrap.jpg";
import excavatorShrinkwrap from "@/assets/gallery/excavator-shrinkwrap.jpg";
import helicopterShrinkwrap from "@/assets/gallery/helicopter-shrinkwrap.jpg";
import trainShrinkwrap from "@/assets/gallery/train-shrinkwrap.jpg";
import modularHomeShrinkwrap from "@/assets/gallery/modular-home-shrinkwrap.jpg";
import truckShrinkwrap from "@/assets/gallery/truck-shrinkwrap.jpg";
import tractorShrinkwrap from "@/assets/gallery/tractor-shrinkwrap.jpg";
import containersShrinkwrap from "@/assets/gallery/containers-shrinkwrap.jpg";
import scaffoldingShrinkwrap from "@/assets/gallery/scaffolding-shrinkwrap.jpg";
import generatorShrinkwrap from "@/assets/gallery/generator-shrinkwrap.jpg";
import foodEquipmentShrinkwrap from "@/assets/gallery/food-equipment-shrinkwrap.jpg";
import dockEquipmentShrinkwrap from "@/assets/gallery/dock-equipment-shrinkwrap.jpg";

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
    },
    {
      src: rvShrinkwrap,
      alt: "RV motorhome shrink wrapping for winter storage - Recreational vehicle protection Ontario",
      title: "RV & Motorhome Protection"
    },
    {
      src: excavatorShrinkwrap,
      alt: "Excavator and construction equipment shrink wrapping - Heavy machinery protection services",
      title: "Construction Equipment"
    },
    {
      src: helicopterShrinkwrap,
      alt: "Helicopter aircraft shrink wrapping services - Aviation protection and storage solutions",
      title: "Aircraft Protection"
    },
    {
      src: trainShrinkwrap,
      alt: "Train railway car shrink wrapping - Rail equipment protection services Ontario",
      title: "Railway Equipment"
    },
    {
      src: modularHomeShrinkwrap,
      alt: "Modular home shrink wrapping during transport - Residential structure protection services",
      title: "Modular Home Wrapping"
    },
    {
      src: truckShrinkwrap,
      alt: "Commercial truck and trailer shrink wrapping - Transportation vehicle protection Ontario",
      title: "Commercial Vehicles"
    },
    {
      src: tractorShrinkwrap,
      alt: "Agricultural tractor and farm equipment shrink wrapping - Farm machinery protection services",
      title: "Agricultural Equipment"
    },
    {
      src: containersShrinkwrap,
      alt: "Storage shipping container shrink wrapping - Cargo container protection services Ontario",
      title: "Storage Containers"
    },
    {
      src: scaffoldingShrinkwrap,
      alt: "Construction scaffolding shrink wrapping - Building site protection and weather barriers",
      title: "Scaffolding Protection"
    },
    {
      src: generatorShrinkwrap,
      alt: "Industrial generator and power equipment shrink wrapping - Electrical equipment protection",
      title: "Power Equipment"
    },
    {
      src: foodEquipmentShrinkwrap,
      alt: "Food processing equipment shrink wrapping - Commercial kitchen machinery protection Ontario",
      title: "Food Processing Equipment"
    },
    {
      src: dockEquipmentShrinkwrap,
      alt: "Marine dock equipment shrink wrapping - Waterfront equipment protection services Ontario",
      title: "Marine Dock Equipment"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-2 drop-shadow-lg">
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