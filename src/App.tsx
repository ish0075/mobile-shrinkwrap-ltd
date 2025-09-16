import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import ServiceAreas from "./pages/ServiceAreas";
import Services from "./pages/Services";
import BoatShrinkWrapping from "./pages/BoatShrinkWrapping";
import MachineryShrinkWrapping from "./pages/MachineryShrinkWrapping";
import TransportCargo from "./pages/TransportCargo";
import ConstructionWrapping from "./pages/ConstructionWrapping";
import CommercialIndustrial from "./pages/CommercialIndustrial";
import ResidentialServices from "./pages/ResidentialServices";
import Gallery from "./pages/Gallery";
import MachineryProtection from "./pages/MachineryProtection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toronto from "./pages/cities/Toronto";
import Ottawa from "./pages/cities/Ottawa";
import Mississauga from "./pages/cities/Mississauga";
import Hamilton from "./pages/cities/Hamilton";
import London from "./pages/cities/London";
import Windsor from "./pages/cities/Windsor";
import StCatharines from "./pages/cities/StCatharines";
import Thorold from "./pages/cities/Thorold";
import NiagaraOnTheLake from "./pages/cities/NiagaraOnTheLake";
import Welland from "./pages/cities/Welland";
import FortErie from "./pages/cities/FortErie";
import PortColborne from "./pages/cities/PortColborne";
import Fonthill from "./pages/cities/Fonthill";
import Wainfleet from "./pages/cities/Wainfleet";
import StoneyCreek from "./pages/cities/StoneyCreek";
import Grimsby from "./pages/cities/Grimsby";
import Lincoln from "./pages/cities/Lincoln";
import Burlington from "./pages/cities/Burlington";
import Scarborough from "./pages/cities/Scarborough";
import Brampton from "./pages/cities/Brampton";
import Milton from "./pages/cities/Milton";
import Muskoka from "./pages/cities/Muskoka";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Header />
            <main>
              <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/boat-shrink-wrapping" element={<BoatShrinkWrapping />} />
              <Route path="/machinery-shrink-wrapping" element={<MachineryShrinkWrapping />} />
              <Route path="/transport-cargo-shrink-wrapping" element={<TransportCargo />} />
              <Route path="/construction-wrapping" element={<ConstructionWrapping />} />
              <Route path="/commercial-industrial-shrink-wrapping" element={<CommercialIndustrial />} />
              <Route path="/residential-shrink-wrapping" element={<ResidentialServices />} />
              <Route path="/service-areas" element={<ServiceAreas />} />
              <Route path="/gallery" element={<Gallery />} />
              
              {/* City Pages */}
              <Route path="/shrink-wrapping-toronto-on" element={<Toronto />} />
              <Route path="/shrink-wrapping-ottawa-on" element={<Ottawa />} />
              <Route path="/shrink-wrapping-mississauga-on" element={<Mississauga />} />
              <Route path="/shrink-wrapping-hamilton-on" element={<Hamilton />} />
              <Route path="/shrink-wrapping-london-on" element={<London />} />
              <Route path="/shrink-wrapping-windsor-on" element={<Windsor />} />
              <Route path="/shrink-wrapping-st-catharines-on" element={<StCatharines />} />
              <Route path="/shrink-wrapping-thorold-on" element={<Thorold />} />
              <Route path="/shrink-wrapping-niagara-on-the-lake-on" element={<NiagaraOnTheLake />} />
              <Route path="/shrink-wrapping-welland-on" element={<Welland />} />
              <Route path="/shrink-wrapping-fort-erie-on" element={<FortErie />} />
              <Route path="/shrink-wrapping-port-colborne-on" element={<PortColborne />} />
              <Route path="/shrink-wrapping-fonthill-on" element={<Fonthill />} />
              <Route path="/shrink-wrapping-wainfleet-on" element={<Wainfleet />} />
              <Route path="/shrink-wrapping-stoney-creek-on" element={<StoneyCreek />} />
              <Route path="/shrink-wrapping-grimsby-on" element={<Grimsby />} />
              <Route path="/shrink-wrapping-lincoln-on" element={<Lincoln />} />
              <Route path="/shrink-wrapping-burlington-on" element={<Burlington />} />
              <Route path="/shrink-wrapping-scarborough-on" element={<Scarborough />} />
              <Route path="/shrink-wrapping-brampton-on" element={<Brampton />} />
              <Route path="/shrink-wrapping-milton-on" element={<Milton />} />
              <Route path="/shrink-wrapping-muskoka-on" element={<Muskoka />} />
              <Route path="/machinery-protection" element={<MachineryProtection />} />
              
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
