export interface CityData {
  city: string;
  citySlug: string;
  region: string;
  population: string;
  neighborhoods: string[];
  summary: string;
  usps: string[];
  industries: string[];
  process: string[];
  faqs: { q: string; a: string }[];
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  openHours: string;
  gmbUrl: string;
  mapEmbedUrl: string;
  localLinks: { label: string; url: string }[];
}

export const allCities = [
  { name: "Toronto", slug: "toronto" },
  { name: "Ottawa", slug: "ottawa" },
  { name: "Mississauga", slug: "mississauga" },
  { name: "Hamilton", slug: "hamilton" },
  { name: "London", slug: "london" },
  { name: "Windsor", slug: "windsor" },
  { name: "Oakville", slug: "oakville" },
  { name: "Burlington", slug: "burlington" },
  { name: "Niagara Falls", slug: "niagara" },
  { name: "Sudbury", slug: "sudbury" },
  { name: "Kingston", slug: "kingston" },
  { name: "Kitchener", slug: "kitchener" }
];

export const cityDataMap: Record<string, CityData> = {
  toronto: {
    city: "Toronto",
    citySlug: "toronto",
    region: "Greater Toronto Area",
    population: "2.9M",
    neighborhoods: ["Downtown", "North York", "Scarborough", "Etobicoke"],
    summary: "Serving all of Toronto including downtown, North York, Scarborough, and Etobicoke with professional mobile shrink wrap services.",
    usps: [
      "Mobile service—marinas, yards, worksites",
      "Marine, industrial & construction shrink wrap",
      "Winterization vents and UV‑stable film",
      "Same‑week scheduling in peak season"
    ],
    industries: [
      "Marine & marinas along Lake Ontario",
      "Automotive & logistics",
      "Construction & scaffolding containment",
      "Manufacturing & equipment mothballing"
    ],
    process: [
      "Site prep & frame support",
      "Precision draping & heat‑shrink",
      "Seam sealing, vents & access doors",
      "Strapping & inspection"
    ],
    faqs: [
      { 
        q: "How well does shrink wrap handle Toronto winters?", 
        a: "We use heavy‑duty film with UV inhibitors and tensioned strapping tested for high winds and freeze‑thaw cycles common across the GTA." 
      },
      { 
        q: "Do you come to my marina or jobsite?", 
        a: "Yes. Our mobile crews service marinas, yards, driveways, and construction sites across Toronto." 
      },
      { 
        q: "What sizes can you wrap?", 
        a: "From small watercraft to oversized machinery and scaffolds. We custom‑fit on site." 
      }
    ],
    phone: "+1-647-XXX-XXXX",
    phoneDisplay: "(647) XXX‑XXXX",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Toronto, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "City of Toronto", url: "https://www.toronto.ca/" },
      { label: "Toronto Board of Trade", url: "https://bot.com/" },
      { label: "Port of Toronto", url: "https://www.portstoronto.com/" }
    ]
  },
  ottawa: {
    city: "Ottawa",
    citySlug: "ottawa",
    region: "National Capital Region",
    population: "1.0M",
    neighborhoods: ["Downtown", "Nepean", "Kanata", "Orleans"],
    summary: "Professional shrink wrap services throughout Ottawa and the National Capital Region.",
    usps: [
      "Mobile service throughout NCR",
      "Government & military facility experience",
      "Bilingual service available",
      "Winter protection specialists"
    ],
    industries: [
      "Government & military installations",
      "Technology sector equipment",
      "Construction & infrastructure",
      "Marine facilities along Ottawa River"
    ],
    process: [
      "Site assessment & security clearance",
      "Professional draping & sealing",
      "Climate-appropriate ventilation",
      "Quality inspection & documentation"
    ],
    faqs: [
      { 
        q: "Do you work with government facilities?", 
        a: "Yes, we have experience with government and military installations, following all security protocols." 
      },
      { 
        q: "Is bilingual service available?", 
        a: "Oui! We provide full service in both English and French throughout the NCR." 
      },
      { 
        q: "How do you handle Ottawa's harsh winters?", 
        a: "Our heavy-duty materials are tested for extreme cold and wind conditions common in the capital region." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Ottawa, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "City of Ottawa", url: "https://ottawa.ca/" },
      { label: "Ottawa Chamber of Commerce", url: "https://ottawachamber.ca/" },
      { label: "National Capital Commission", url: "https://ncc-ccn.gc.ca/" }
    ]
  },
  mississauga: {
    city: "Mississauga",
    citySlug: "mississauga",
    region: "Greater Toronto Area",
    population: "750K",
    neighborhoods: ["Port Credit", "Meadowvale", "Erin Mills", "Clarkson"],
    summary: "Expert shrink wrap services throughout Mississauga, serving the GTA's major industrial and marine facilities.",
    usps: [
      "Major marina and port coverage",
      "Industrial facility specialists",
      "Pearson Airport area service",
      "Large-scale project capability"
    ],
    industries: [
      "Port Credit marina district",
      "Manufacturing & logistics hubs",
      "Airport cargo facilities",
      "Corporate fleet protection"
    ],
    process: [
      "Industrial site preparation",
      "Heavy-duty material application",
      "Multi-point securing system",
      "Final inspection & certification"
    ],
    faqs: [
      { 
        q: "Do you service the Port Credit area?", 
        a: "Yes, we regularly service marinas and waterfront facilities throughout the Port Credit district." 
      },
      { 
        q: "Can you handle large industrial equipment?", 
        a: "Absolutely. We specialize in oversized machinery and multi-unit installations." 
      },
      { 
        q: "What about airport area projects?", 
        a: "We work with cargo facilities and equipment near Pearson, following all airport security protocols." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Mississauga, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "City of Mississauga", url: "https://www.mississauga.ca/" },
      { label: "Mississauga Board of Trade", url: "https://mbot.com/" },
      { label: "Port Credit BIA", url: "https://portcredit.ca/" }
    ]
  },
  hamilton: {
    city: "Hamilton",
    citySlug: "hamilton",
    region: "Golden Horseshoe",
    population: "580K",
    neighborhoods: ["Downtown", "Ancaster", "Dundas", "Stoney Creek"],
    summary: "Professional shrink wrap services throughout Hamilton and the Golden Horseshoe region, serving the steel city's industrial needs.",
    usps: [
      "Heavy industrial experience",
      "Port of Hamilton coverage",
      "Steel industry equipment specialists",
      "Quick emergency response"
    ],
    industries: [
      "Steel manufacturing & processing",
      "Port & shipping facilities",
      "Heavy machinery & equipment",
      "Construction & infrastructure"
    ],
    process: [
      "Industrial site assessment",
      "Heavy-duty material selection",
      "Multi-layer protection system",
      "Safety inspection & sign-off"
    ],
    faqs: [
      { 
        q: "Do you work with steel industry equipment?", 
        a: "Yes, we specialize in protecting heavy industrial equipment including steel processing machinery and port equipment." 
      },
      { 
        q: "Can you handle large-scale industrial projects?", 
        a: "Absolutely. We have experience with major industrial installations throughout the Hamilton area." 
      },
      { 
        q: "What about port facilities?", 
        a: "We regularly service marine and port facilities, following all safety protocols for working near water." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Hamilton, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "City of Hamilton", url: "https://www.hamilton.ca/" },
      { label: "Hamilton Chamber of Commerce", url: "https://hamiltonchamber.ca/" },
      { label: "Port of Hamilton", url: "https://hamiltonport.ca/" }
    ]
  },
  london: {
    city: "London",
    citySlug: "london",
    region: "Southwestern Ontario",
    population: "430K",
    neighborhoods: ["Downtown", "Byron", "Oakridge", "Westmount"],
    summary: "Expert shrink wrap services throughout London and Southwestern Ontario, supporting the Forest City's diverse industries.",
    usps: [
      "Agricultural equipment specialists",
      "University & research facility experience",
      "Regional coverage across SW Ontario",
      "Weather-resistant solutions"
    ],
    industries: [
      "Agricultural & farming equipment",
      "Manufacturing & automotive",
      "University research facilities",
      "Construction & development"
    ],
    process: [
      "Equipment assessment & prep",
      "Agricultural-grade protection",
      "Seasonal storage optimization",
      "Quality assurance check"
    ],
    faqs: [
      { 
        q: "Do you specialize in agricultural equipment?", 
        a: "Yes, we have extensive experience protecting tractors, combines, and other farming equipment." 
      },
      { 
        q: "Can you service rural areas around London?", 
        a: "Absolutely. We provide mobile service throughout Southwestern Ontario's rural communities." 
      },
      { 
        q: "What about seasonal equipment storage?", 
        a: "We specialize in seasonal protection for equipment that needs long-term outdoor storage." 
      }
    ],
    phone: "+1-519-XXX-XXXX",
    phoneDisplay: "(519) XXX‑XXXX",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "London, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "City of London", url: "https://london.ca/" },
      { label: "London Chamber of Commerce", url: "https://londonchamber.com/" },
      { label: "Western Fair District", url: "https://westernfairdistrict.com/" }
    ]
  },
  windsor: {
    city: "Windsor",
    citySlug: "windsor",
    region: "Essex County",
    population: "350K",
    neighborhoods: ["Downtown", "Walkerville", "Riverside", "South Walkerville"],
    summary: "Professional shrink wrap services in Windsor and Essex County, specializing in automotive and cross-border logistics protection.",
    usps: [
      "Automotive industry expertise",
      "Cross-border logistics experience",
      "Great Lakes marine coverage",
      "Bilingual service available"
    ],
    industries: [
      "Automotive manufacturing",
      "Cross-border shipping & logistics",
      "Great Lakes marine facilities",
      "Agricultural processing"
    ],
    process: [
      "Automotive-grade assessment",
      "Precision protection application",
      "Logistics-ready securing",
      "Cross-border documentation"
    ],
    faqs: [
      { 
        q: "Do you work with automotive facilities?", 
        a: "Yes, we have extensive experience with automotive plants and equipment throughout the Windsor-Essex region." 
      },
      { 
        q: "Can you handle cross-border shipments?", 
        a: "We provide protection services for equipment and cargo moving between Canada and the US." 
      },
      { 
        q: "What about Great Lakes marine equipment?", 
        a: "We service boats and marine equipment along the Detroit River and Great Lakes system." 
      }
    ],
    phone: "+1-519-XXX-XXXX",
    phoneDisplay: "(519) XXX‑XXXX",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Windsor, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "City of Windsor", url: "https://www.citywindsor.ca/" },
      { label: "WindsorEssex Chamber", url: "https://www.windsoreessexchamber.org/" },
      { label: "Port of Windsor", url: "https://www.citywindsor.ca/residents/portsanddocks/" }
    ]
  }
};

export const getCityData = (slug: string): CityData | null => {
  return cityDataMap[slug] || null;
};