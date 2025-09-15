import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import ServiceAreas from "@/components/ServiceAreas";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesOverview />
      <ServiceAreas />
    </div>
  );
};

export default Index;
