import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import GoogleReviews from "@/components/GoogleReviews";
import ServiceAreas from "@/components/ServiceAreas";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesOverview />
      <GoogleReviews />
      <ServiceAreas />
    </div>
  );
};

export default Index;
