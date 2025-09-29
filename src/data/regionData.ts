export interface RegionData {
  region: string;
  regionSlug: string;
  tagline: string;
  summary: string;
  regionCities: Array<{ name: string; slug: string }>;
  usps: string[];
  sectors: string[];
  process: string[];
  hubs: string[];
  faqs: Array<{ q: string; a: string }>;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  openHours: string;
  gmbUrl: string;
  mapEmbedUrl?: string;
  regionalLinks: Array<{ label: string; url: string }>;
}

const regionData: Record<string, RegionData> = {
  'gta': {
    region: "Greater Toronto Area (GTA)",
    regionSlug: "gta",
    tagline: "Mobile shrink wrap across every GTA municipality — marinas, yards, jobsites.",
    summary: "Serving the entire GTA with on‑site boat, vehicle, and industrial shrink wrap protection services.",
    regionCities: [
      { name: "Toronto", slug: "toronto" },
      { name: "Mississauga", slug: "mississauga" },
      { name: "Brampton", slug: "brampton" },
      { name: "Scarborough", slug: "scarborough" }
    ],
    usps: [
      "Mobile crews — same‑week scheduling in peak season",
      "Marine, construction containment, and industrial equipment",
      "UV‑stabilized film with vents & access doors",
      "Service area dispatch covering the full region"
    ],
    sectors: [
      "Marine & waterfront marinas",
      "Construction & scaffolding containment", 
      "Manufacturing & logistics",
      "Automotive & powertrain"
    ],
    process: [
      "Site prep & frame support",
      "Precision draping & heat‑shrink",
      "Seam sealing, vents & access doors",
      "Strapping & inspection"
    ],
    hubs: ["Key ports & marinas", "Industrial parks", "Logistics corridors"],
    faqs: [
      { 
        q: "Do you cover every city in the GTA?", 
        a: "Yes — our mobile teams dispatch across all GTA cities and surrounding townships. If you're nearby but not listed, call and we'll confirm coverage." 
      },
      { 
        q: "What's the turnaround for large industrial wraps?", 
        a: "For multi‑unit or oversized projects, we build a schedule with staging, crew sizing, and safety plan. Most industrial projects are completed within agreed windows based on size and weather." 
      },
      { 
        q: "Can you wrap on active construction sites?", 
        a: "Yes. We coordinate with site supervisors for access and safety. We provide containment, zipper doors, and venting as required." 
      }
    ],
    phone: "+1-905-327-4381",
    phoneDisplay: "(905) 327-4381",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "123 Example Rd, Toronto, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "https://g.page/your-google-business-profile",
    regionalLinks: [
      { label: "City of Toronto", url: "https://www.toronto.ca" },
      { label: "Greater Toronto Area Chamber", url: "#" },
      { label: "Port of Toronto", url: "#" }
    ]
  },
  'golden-horseshoe': {
    region: "Golden Horseshoe",
    regionSlug: "golden-horseshoe",
    tagline: "Comprehensive shrink wrap coverage across Ontario's most populated region.",
    summary: "Professional mobile shrink wrapping services throughout the Golden Horseshoe region, from Hamilton to Oshawa.",
    regionCities: [
      { name: "Hamilton", slug: "hamilton" },
      { name: "Burlington", slug: "burlington" },
      { name: "Oakville", slug: "oakville" },
      { name: "Milton", slug: "milton" }
    ],
    usps: [
      "Complete Golden Horseshoe coverage",
      "Industrial and marine specialization",
      "Same-day quotes and rapid deployment",
      "Weather-resistant protection year-round"
    ],
    sectors: [
      "Steel and manufacturing",
      "Port and shipping facilities",
      "Agricultural equipment",
      "Transportation hubs"
    ],
    process: [
      "Site assessment and planning",
      "Professional installation with proper ventilation",
      "Quality inspection and weatherproofing",
      "Ongoing support and maintenance"
    ],
    hubs: ["Hamilton Harbour", "Manufacturing corridor", "Agricultural zones"],
    faqs: [
      { 
        q: "Do you service industrial facilities in Hamilton?", 
        a: "Yes, we specialize in large-scale industrial wrapping including steel mills, manufacturing plants, and port facilities throughout the Golden Horseshoe." 
      },
      { 
        q: "What's your coverage area within the Golden Horseshoe?", 
        a: "We service from Hamilton in the west to Oshawa in the east, including all municipalities within the greater horseshoe region." 
      }
    ],
    phone: "+1-905-327-4381",
    phoneDisplay: "(905) 327-4381",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "123 Example Rd, Hamilton, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "https://g.page/your-google-business-profile",
    regionalLinks: [
      { label: "City of Hamilton", url: "https://www.hamilton.ca" },
      { label: "Golden Horseshoe Biosphere", url: "#" },
      { label: "Hamilton Port Authority", url: "#" }
    ]
  },
  'muskoka': {
    region: "Muskoka Region",
    regionSlug: "muskoka",
    tagline: "Cottage country shrink wrap — boats, docks, and seasonal equipment protection.",
    summary: "Specialized marine and seasonal equipment wrapping services throughout Muskoka's lake country.",
    regionCities: [
      { name: "Muskoka", slug: "muskoka" },
      { name: "Bracebridge", slug: "bracebridge" },
      { name: "Huntsville", slug: "huntsville" },
      { name: "Gravenhurst", slug: "gravenhurst" }
    ],
    usps: [
      "Marine winterization specialists",
      "Dock and waterfront equipment protection",
      "Cottage seasonal wrap services",
      "Remote location accessibility"
    ],
    sectors: [
      "Marine and boating industry",
      "Cottage and resort properties",
      "Outdoor recreation equipment",
      "Seasonal construction projects"
    ],
    process: [
      "Lake access and site preparation",
      "Marine-grade shrink wrap installation",
      "Proper ventilation for marine environments",
      "Spring removal and material recycling"
    ],
    hubs: ["Lake Muskoka", "Lake Rosseau", "Lake Joseph"],
    faqs: [
      { 
        q: "Do you service remote cottage properties?", 
        a: "Yes, we have the equipment and experience to reach remote waterfront properties throughout Muskoka, including island locations accessible by boat." 
      },
      { 
        q: "When should I book winterization services?", 
        a: "Book early fall (September-October) to ensure availability before winter weather. We service the region until freeze-up allows safe lake access." 
      }
    ],
    phone: "+1-905-327-4381",
    phoneDisplay: "(905) 327-4381",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "123 Example Rd, Muskoka, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "https://g.page/your-google-business-profile",
    regionalLinks: [
      { label: "District Municipality of Muskoka", url: "https://www.muskoka.on.ca" },
      { label: "Muskoka Tourism", url: "#" },
      { label: "Muskoka Lakes Association", url: "#" }
    ]
  },
  'niagara': {
    region: "Niagara Region",
    regionSlug: "niagara",
    tagline: "From the Falls to the Lake — comprehensive shrink wrap protection services.",
    summary: "Mobile shrink wrapping for marine, agricultural, and industrial applications across the Niagara Peninsula.",
    regionCities: [
      { name: "St. Catharines", slug: "st-catharines" },
      { name: "Niagara-on-the-Lake", slug: "niagara-on-the-lake" },
      { name: "Welland", slug: "welland" },
      { name: "Fort Erie", slug: "fort-erie" }
    ],
    usps: [
      "Wine country and agricultural equipment protection",
      "Port Colborne and Welland Canal marine services",
      "Cross-border logistics and transport wrapping",
      "Tourism and hospitality equipment winterization"
    ],
    sectors: [
      "Wine and agriculture industry",
      "Marine and shipping (Welland Canal)",
      "Tourism and hospitality",
      "Cross-border transportation"
    ],
    process: [
      "Agricultural equipment assessment",
      "Weather-resistant wrapping installation",
      "Ventilation systems for stored equipment",
      "Seasonal maintenance and support"
    ],
    hubs: ["Welland Canal", "Wine Country", "Lake Ontario Shoreline"],
    faqs: [
      { 
        q: "Do you wrap vineyard and winery equipment?", 
        a: "Yes, we specialize in protecting agricultural and wine-making equipment, including seasonal vineyard machinery and outdoor processing equipment." 
      },
      { 
        q: "Can you service boats along the Welland Canal?", 
        a: "Absolutely. We provide marine shrink wrapping services at marinas and facilities along the entire Welland Canal system and Lake Ontario shoreline." 
      }
    ],
    phone: "+1-905-327-4381",
    phoneDisplay: "(905) 327-4381",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "123 Example Rd, St. Catharines, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "https://g.page/your-google-business-profile",
    regionalLinks: [
      { label: "Regional Municipality of Niagara", url: "https://www.niagararegion.ca" },
      { label: "Wine Country Ontario", url: "#" },
      { label: "St. Lawrence Seaway", url: "#" }
    ]
  },
  'southwest-ontario': {
    region: "Southwest Ontario",
    regionSlug: "southwest-ontario",
    tagline: "Industrial heartland shrink wrap — from Windsor to London and beyond.",
    summary: "Comprehensive industrial and agricultural shrink wrapping services across Southwest Ontario's manufacturing corridor.",
    regionCities: [
      { name: "Windsor", slug: "windsor" },
      { name: "London", slug: "london" },
      { name: "Sarnia", slug: "sarnia" },
      { name: "Chatham", slug: "chatham" }
    ],
    usps: [
      "Automotive industry specialization",
      "Petrochemical and industrial facility wrapping",
      "Agricultural equipment and grain storage protection",
      "Border crossing and logistics support"
    ],
    sectors: [
      "Automotive manufacturing",
      "Petrochemical and refining",
      "Agriculture and food processing",
      "Cross-border logistics"
    ],
    process: [
      "Industrial facility assessment",
      "Heavy-duty shrink wrap installation",
      "Chemical-resistant materials when required",
      "Compliance with industrial safety standards"
    ],
    hubs: ["Windsor-Detroit Corridor", "Chemical Valley", "Agricultural Belt"],
    faqs: [
      { 
        q: "Do you work with automotive manufacturers?", 
        a: "Yes, we have extensive experience wrapping automotive equipment, parts shipments, and providing weather protection for outdoor manufacturing processes." 
      },
      { 
        q: "Can you handle petrochemical facility requirements?", 
        a: "We work with petrochemical facilities and can provide appropriate materials and safety protocols for industrial environments." 
      }
    ],
    phone: "+1-905-327-4381",
    phoneDisplay: "(905) 327-4381",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "123 Example Rd, Windsor, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "https://g.page/your-google-business-profile",
    regionalLinks: [
      { label: "WindsorEssex Economic Development", url: "#" },
      { label: "London Economic Development", url: "#" },
      { label: "Sarnia-Lambton Economic Partnership", url: "#" }
    ]
  },
  'eastern-ontario': {
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    tagline: "Capital region and beyond — government, marine, and industrial wrapping services.",
    summary: "Professional shrink wrapping services for government, marine, and industrial applications throughout Eastern Ontario.",
    regionCities: [
      { name: "Ottawa", slug: "ottawa" },
      { name: "Kingston", slug: "kingston" },
      { name: "Cornwall", slug: "cornwall" },
      { name: "Pembroke", slug: "pembroke" }
    ],
    usps: [
      "Government and institutional facility services",
      "St. Lawrence River and Rideau Canal marine wrapping",
      "Military and defense contractor support",
      "Remote location accessibility"
    ],
    sectors: [
      "Government and institutional",
      "Marine (St. Lawrence Seaway)",
      "Defense and military",
      "Tourism and recreation"
    ],
    process: [
      "Security clearance and government protocols",
      "Marine-grade installation for waterway equipment",
      "Remote site logistics and planning",
      "Compliance with federal regulations"
    ],
    hubs: ["Ottawa River", "St. Lawrence Seaway", "Rideau Canal"],
    faqs: [
      { 
        q: "Do you work with government facilities?", 
        a: "Yes, we have experience working with government and institutional clients, following appropriate security and procurement protocols." 
      },
      { 
        q: "Can you service remote locations in Eastern Ontario?", 
        a: "We service remote locations throughout Eastern Ontario, including cottage country and industrial sites accessible by seasonal roads." 
      }
    ],
    phone: "+1-905-327-4381",
    phoneDisplay: "(905) 327-4381",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "123 Example Rd, Ottawa, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "https://g.page/your-google-business-profile",
    regionalLinks: [
      { label: "City of Ottawa", url: "https://ottawa.ca" },
      { label: "Eastern Ontario Wardens' Caucus", url: "#" },
      { label: "St. Lawrence Seaway", url: "#" }
    ]
  }
};

export const getAllRegions = (): string[] => {
  return Object.keys(regionData);
};

export const getRegionData = (slug: string): RegionData | null => {
  return regionData[slug] || null;
};

export const getAllRegionData = (): RegionData[] => {
  return Object.values(regionData);
};