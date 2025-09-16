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
  { name: "Kitchener", slug: "kitchener" },
  { name: "St. Catharines", slug: "st-catharines" },
  { name: "Thorold", slug: "thorold" },
  { name: "Niagara On The Lake", slug: "niagara-on-the-lake" },
  { name: "Welland", slug: "welland" },
  { name: "Fort Erie", slug: "fort-erie" },
  { name: "Port Colborne", slug: "port-colborne" },
  { name: "Fonthill", slug: "fonthill" },
  { name: "Wainfleet", slug: "wainfleet" },
  { name: "Stoney Creek", slug: "stoney-creek" },
  { name: "Grimsby", slug: "grimsby" },
  { name: "Lincoln", slug: "lincoln" },
  { name: "Scarborough", slug: "scarborough" },
  { name: "Brampton", slug: "brampton" },
  { name: "Milton", slug: "milton" },
  { name: "Muskoka", slug: "muskoka" }
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
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
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
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
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
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
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
  },
  "st-catharines": {
    city: "St. Catharines",
    citySlug: "st-catharines",
    region: "Niagara Region",
    population: "140K",
    neighborhoods: ["Downtown", "Port Dalhousie", "Merritton", "Grantham"],
    summary: "Professional shrink wrap services throughout St. Catharines and the Niagara Region, serving the Garden City's marine and industrial needs.",
    usps: [
      "Welland Canal area expertise",
      "Marine facility specialists",
      "Wine industry equipment protection",
      "Port Dalhousie marina coverage"
    ],
    industries: [
      "Marine & canal operations",
      "Wine production & agriculture",
      "Manufacturing & logistics",
      "Tourism & hospitality equipment"
    ],
    process: [
      "Marina & canal site prep",
      "Weather-resistant application",
      "Multi-season protection",
      "Quality inspection & sign-off"
    ],
    faqs: [
      { 
        q: "Do you service the Welland Canal area?", 
        a: "Yes, we regularly service marine facilities and equipment along the Welland Canal system." 
      },
      { 
        q: "Can you protect wine industry equipment?", 
        a: "Absolutely. We specialize in protecting vineyard and winery equipment throughout the Niagara region." 
      },
      { 
        q: "What about Port Dalhousie marina?", 
        a: "We provide comprehensive marina services at Port Dalhousie and throughout the Lake Ontario shoreline." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "St. Catharines, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "City of St. Catharines", url: "https://www.stcatharines.ca/" },
      { label: "Greater Niagara Chamber", url: "https://www.gncc.ca/" },
      { label: "Port Dalhousie", url: "https://www.stcatharines.ca/en/experiencein/PortDalhousie.aspx" }
    ]
  },
  thorold: {
    city: "Thorold",
    citySlug: "thorold",
    region: "Niagara Region",
    population: "20K",
    neighborhoods: ["Downtown Thorold", "Allanburg", "Port Robinson", "Thorold South"],
    summary: "Expert shrink wrap services in Thorold and surrounding Niagara Region communities, specializing in canal and industrial protection.",
    usps: [
      "Welland Canal lock expertise",
      "Industrial facility experience",
      "Small-town personal service",
      "Quick response times"
    ],
    industries: [
      "Canal operations & marine",
      "Manufacturing & processing",
      "Agricultural equipment",
      "Municipal infrastructure"
    ],
    process: [
      "Site assessment & planning",
      "Canal-appropriate materials",
      "Secure installation process",
      "Final inspection & handover"
    ],
    faqs: [
      { 
        q: "Do you work near the Welland Canal locks?", 
        a: "Yes, we have experience working around canal infrastructure and marine operations." 
      },
      { 
        q: "Can you service smaller industrial facilities?", 
        a: "Absolutely. We provide personalized service to businesses of all sizes in Thorold." 
      },
      { 
        q: "What about agricultural equipment protection?", 
        a: "We specialize in protecting farm equipment and agricultural machinery throughout the region." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Thorold, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "City of Thorold", url: "https://www.thorold.com/" },
      { label: "Thorold Community", url: "https://www.thoroldcommunity.com/" },
      { label: "Welland Canal", url: "https://www.pc.gc.ca/en/lhn-nhs/on/welland" }
    ]
  },
  "niagara-on-the-lake": {
    city: "Niagara On The Lake",
    citySlug: "niagara-on-the-lake",
    region: "Niagara Region",
    population: "18K",
    neighborhoods: ["Old Town", "Virgil", "St. Davids", "Queenston"],
    summary: "Premium shrink wrap services in Niagara-on-the-Lake, protecting heritage properties, wineries, and luxury marine equipment.",
    usps: [
      "Heritage property experience",
      "Premium wine industry service",
      "Luxury marina specialists",
      "Tourism season coordination"
    ],
    industries: [
      "Wine production & hospitality",
      "Heritage & tourism facilities",
      "Luxury marine & yachting",
      "Agricultural & vineyard equipment"
    ],
    process: [
      "Heritage-sensitive assessment",
      "Premium material selection",
      "Aesthetic installation approach",
      "Seasonal timing coordination"
    ],
    faqs: [
      { 
        q: "Do you work with heritage properties?", 
        a: "Yes, we have experience protecting equipment and structures at heritage sites with appropriate care." 
      },
      { 
        q: "Can you service wineries during harvest season?", 
        a: "We coordinate our services around harvest and tourism schedules to minimize disruption." 
      },
      { 
        q: "What about luxury yacht protection?", 
        a: "We provide premium marine protection services for high-end vessels throughout the region." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Niagara-on-the-Lake, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "Town of NOTL", url: "https://www.notl.com/" },
      { label: "Niagara Vintage Wine Tours", url: "https://www.niagaravintagewine.com/" },
      { label: "NOTL Chamber", url: "https://www.notl.com/business-directory" }
    ]
  },
  welland: {
    city: "Welland",
    citySlug: "welland",
    region: "Niagara Region",
    population: "53K",
    neighborhoods: ["Downtown", "Cooks Mills", "Crowland", "Dain City"],
    summary: "Professional shrink wrap services throughout Welland, specializing in canal operations and industrial equipment protection.",
    usps: [
      "Welland Canal headquarters expertise",
      "Heavy industrial experience",
      "Marine operations specialists",
      "Multi-season protection"
    ],
    industries: [
      "Canal operations & shipping",
      "Steel & manufacturing",
      "Marine services & repair",
      "Agricultural processing"
    ],
    process: [
      "Industrial site evaluation",
      "Heavy-duty material application",
      "Multi-point securing system",
      "Operational safety compliance"
    ],
    faqs: [
      { 
        q: "Do you work with canal shipping operations?", 
        a: "Yes, we have extensive experience with marine and shipping equipment along the Welland Canal." 
      },
      { 
        q: "Can you handle large industrial machinery?", 
        a: "Absolutely. We regularly protect heavy industrial equipment and manufacturing machinery." 
      },
      { 
        q: "What about marine repair facilities?", 
        a: "We service marine repair yards and boat building facilities throughout the Welland area." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Welland, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "City of Welland", url: "https://www.welland.ca/" },
      { label: "Welland Chamber", url: "https://www.wellandchamber.ca/" },
      { label: "Welland Canal", url: "https://www.greatlakes-seaway.com/" }
    ]
  },
  "fort-erie": {
    city: "Fort Erie",
    citySlug: "fort-erie",
    region: "Niagara Region",
    population: "32K",
    neighborhoods: ["Ridgeway", "Stevensville", "Crystal Beach", "Bridgeburg"],
    summary: "Expert shrink wrap services in Fort Erie, protecting equipment from Lake Erie to the Peace Bridge border crossing.",
    usps: [
      "Cross-border logistics experience",
      "Lake Erie marine specialists",
      "Peace Bridge area coverage",
      "Tourism equipment protection"
    ],
    industries: [
      "Cross-border shipping & logistics",
      "Lake Erie marine operations",
      "Tourism & recreation facilities",
      "Agricultural & greenhouse operations"
    ],
    process: [
      "Cross-border compliant prep",
      "Weather-resistant installation",
      "Secure transport preparation",
      "Border documentation support"
    ],
    faqs: [
      { 
        q: "Do you service the Peace Bridge area?", 
        a: "Yes, we provide protection services for equipment and cargo in the border crossing area." 
      },
      { 
        q: "Can you handle Lake Erie marine equipment?", 
        a: "Absolutely. We specialize in protecting boats and marine equipment along the Lake Erie shoreline." 
      },
      { 
        q: "What about greenhouse operations?", 
        a: "We protect agricultural and greenhouse equipment throughout the Fort Erie growing region." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Fort Erie, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "Town of Fort Erie", url: "https://www.forterie.ca/" },
      { label: "Fort Erie Chamber", url: "https://www.forteriechamber.com/" },
      { label: "Crystal Beach", url: "https://www.forterie.ca/en/discover-fort-erie/crystal-beach.aspx" }
    ]
  },
  "port-colborne": {
    city: "Port Colborne",
    citySlug: "port-colborne",
    region: "Niagara Region",
    population: "20K",
    neighborhoods: ["Downtown", "Humberstone", "Sherkston", "Wainfleet"],
    summary: "Professional shrink wrap services in Port Colborne, specializing in canal terminus and Lake Erie marine protection.",
    usps: [
      "Canal terminus expertise",
      "Lake Erie marine specialists",
      "Industrial port operations",
      "Agricultural equipment protection"
    ],
    industries: [
      "Port & shipping operations",
      "Lake Erie marine services",
      "Agricultural & grain handling",
      "Manufacturing & processing"
    ],
    process: [
      "Port facility assessment",
      "Marine-grade protection",
      "Grain handling equipment prep",
      "Seasonal weather optimization"
    ],
    faqs: [
      { 
        q: "Do you service the Welland Canal terminus?", 
        a: "Yes, we have experience with port operations and equipment at the canal's Lake Erie terminus." 
      },
      { 
        q: "Can you protect grain handling equipment?", 
        a: "Absolutely. We specialize in protecting agricultural and grain processing equipment." 
      },
      { 
        q: "What about Lake Erie fishing operations?", 
        a: "We provide marine protection services for commercial and recreational fishing equipment." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Port Colborne, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "City of Port Colborne", url: "https://www.portcolborne.ca/" },
      { label: "Port Colborne Chamber", url: "https://www.portcolborne.ca/en/business/chamber-of-commerce.aspx" },
      { label: "Sugarloaf Marina", url: "https://www.sugarloafmarina.com/" }
    ]
  },
  fonthill: {
    city: "Fonthill",
    citySlug: "fonthill",
    region: "Niagara Region",
    population: "10K",
    neighborhoods: ["Fonthill", "Pelham", "Ridgeville", "Fenwick"],
    summary: "Expert shrink wrap services in Fonthill and Pelham area, protecting agricultural and residential equipment.",
    usps: [
      "Rural agricultural expertise",
      "Residential equipment specialists",
      "Personal service approach",
      "Flexible scheduling"
    ],
    industries: [
      "Agricultural & farming operations",
      "Residential property equipment",
      "Small business & retail",
      "Recreational vehicle protection"
    ],
    process: [
      "Rural property assessment",
      "Agricultural-grade materials",
      "Residential-friendly installation",
      "Seasonal maintenance check"
    ],
    faqs: [
      { 
        q: "Do you service rural properties?", 
        a: "Yes, we specialize in providing mobile service to rural and agricultural properties." 
      },
      { 
        q: "Can you protect recreational vehicles?", 
        a: "Absolutely. We provide comprehensive RV and recreational equipment protection." 
      },
      { 
        q: "What about farm equipment storage?", 
        a: "We specialize in seasonal protection for tractors, combines, and other farm machinery." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Fonthill, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "Town of Pelham", url: "https://www.pelham.ca/" },
      { label: "Pelham Chamber", url: "https://www.pelhamchamber.ca/" },
      { label: "Fonthill Community", url: "https://www.pelham.ca/en/discover-pelham/fonthill.aspx" }
    ]
  },
  wainfleet: {
    city: "Wainfleet",
    citySlug: "wainfleet",
    region: "Niagara Region",
    population: "7K",
    neighborhoods: ["Wainfleet", "Long Beach", "Fishers Glen", "Stromness"],
    summary: "Professional shrink wrap services in Wainfleet, specializing in rural and agricultural equipment protection.",
    usps: [
      "Rural community specialists",
      "Agricultural equipment experts",
      "Long Beach area coverage",
      "Personalized service"
    ],
    industries: [
      "Agricultural & livestock operations",
      "Rural residential properties",
      "Recreational & cottage equipment",
      "Small business operations"
    ],
    process: [
      "Rural site evaluation",
      "Agricultural material selection",
      "Weather-appropriate installation",
      "Seasonal follow-up service"
    ],
    faqs: [
      { 
        q: "Do you service remote rural properties?", 
        a: "Yes, we provide mobile service to rural properties throughout the Wainfleet area." 
      },
      { 
        q: "Can you protect livestock equipment?", 
        a: "Absolutely. We specialize in protecting agricultural and livestock handling equipment." 
      },
      { 
        q: "What about cottage equipment?", 
        a: "We provide seasonal protection for cottage and recreational property equipment." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Wainfleet, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "Township of Wainfleet", url: "https://www.wainfleet.ca/" },
      { label: "Long Beach Conservation", url: "https://www.npca.ca/conservation-areas/long-beach" },
      { label: "Wainfleet Wetlands", url: "https://www.npca.ca/conservation-areas/wainfleet-wetlands" }
    ]
  },
  "stoney-creek": {
    city: "Stoney Creek",
    citySlug: "stoney-creek",
    region: "Hamilton",
    population: "65K",
    neighborhoods: ["Battlefield", "Centennial", "Lakeland", "Winona"],
    summary: "Expert shrink wrap services in Stoney Creek, serving Hamilton's eastern communities with specialized marine and industrial protection.",
    usps: [
      "Lake Ontario shoreline expertise",
      "Hamilton industrial experience",
      "QEW corridor coverage",
      "Residential & commercial service"
    ],
    industries: [
      "Lake Ontario marine facilities",
      "Manufacturing & logistics",
      "Residential property equipment",
      "Commercial & retail operations"
    ],
    process: [
      "Lakefront property assessment",
      "Industrial-grade installation",
      "Residential-friendly approach",
      "Quality assurance inspection"
    ],
    faqs: [
      { 
        q: "Do you service Lake Ontario properties?", 
        a: "Yes, we specialize in protecting equipment and boats along the Lake Ontario shoreline." 
      },
      { 
        q: "Can you handle both residential and commercial?", 
        a: "Absolutely. We provide services to both residential properties and commercial facilities." 
      },
      { 
        q: "What about Battlefield area coverage?", 
        a: "We provide comprehensive service throughout all Stoney Creek neighborhoods." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Stoney Creek, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "City of Hamilton", url: "https://www.hamilton.ca/" },
      { label: "Stoney Creek Chamber", url: "https://hamiltonchamber.ca/" },
      { label: "Fifty Point Marina", url: "https://www.hamilton.ca/parks-recreation/parks-trails-beaches/fifty-point-conservation-area" }
    ]
  },
  grimsby: {
    city: "Grimsby",
    citySlug: "grimsby",
    region: "Niagara Region",
    population: "28K",
    neighborhoods: ["Downtown", "Casablanca", "Beamsville", "Grassie"],
    summary: "Professional shrink wrap services in Grimsby, specializing in wine country and Lake Ontario marine protection.",
    usps: [
      "Wine country equipment specialists",
      "Lake Ontario marine expertise",
      "Escarpment area coverage",
      "Tourism industry experience"
    ],
    industries: [
      "Wine production & vineyards",
      "Lake Ontario marine operations",
      "Tourism & hospitality",
      "Agricultural processing"
    ],
    process: [
      "Vineyard equipment assessment",
      "Marine-grade protection",
      "Tourism-sensitive scheduling",
      "Seasonal optimization planning"
    ],
    faqs: [
      { 
        q: "Do you service vineyard equipment?", 
        a: "Yes, we specialize in protecting wine production equipment and vineyard machinery." 
      },
      { 
        q: "Can you handle marina operations?", 
        a: "Absolutely. We provide comprehensive marine protection services along Lake Ontario." 
      },
      { 
        q: "What about tourism facility equipment?", 
        a: "We coordinate our services to minimize impact on tourism operations and facilities." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Grimsby, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "Town of Grimsby", url: "https://www.grimsby.ca/" },
      { label: "Grimsby Chamber", url: "https://www.grimsbychamber.com/" },
      { label: "Fifty Point Marina", url: "https://www.conservation-hamilton.ca/parks-recreation/fifty-point/" }
    ]
  },
  lincoln: {
    city: "Lincoln",
    citySlug: "lincoln",
    region: "Niagara Region",
    population: "25K",
    neighborhoods: ["Beamsville", "Vineland", "Jordan", "Campden"],
    summary: "Expert shrink wrap services in Lincoln, protecting wine country operations and agricultural equipment throughout the region.",
    usps: [
      "Premier wine region specialists",
      "Agricultural equipment experts",
      "Escarpment area coverage",
      "Fruit belt expertise"
    ],
    industries: [
      "Wine production & viticulture",
      "Fruit growing & processing",
      "Agricultural equipment",
      "Tourism & hospitality"
    ],
    process: [
      "Viticulture equipment assessment",
      "Agricultural-grade protection",
      "Seasonal harvest coordination",
      "Premium service delivery"
    ],
    faqs: [
      { 
        q: "Do you specialize in wine country equipment?", 
        a: "Yes, we have extensive experience protecting vineyard and winery equipment throughout Lincoln." 
      },
      { 
        q: "Can you coordinate around harvest seasons?", 
        a: "Absolutely. We schedule our services to work around critical harvest and production periods." 
      },
      { 
        q: "What about fruit processing equipment?", 
        a: "We specialize in protecting fruit processing and agricultural equipment throughout the fruit belt." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Lincoln, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "Town of Lincoln", url: "https://www.lincoln.ca/" },
      { label: "Twenty Valley Tourism", url: "https://www.twentyvalley.ca/" },
      { label: "VQA Ontario", url: "https://www.vqaontario.ca/" }
    ]
  },
  burlington: {
    city: "Burlington",
    citySlug: "burlington",
    region: "Halton Region",
    population: "185K",
    neighborhoods: ["Downtown", "Aldershot", "Millcroft", "Mount Nemo"],
    summary: "Professional shrink wrap services throughout Burlington, serving Lake Ontario marine facilities and corporate equipment needs.",
    usps: [
      "Spencer Smith Park marina expertise",
      "Corporate facility specialists",
      "Lake Ontario marine coverage",
      "QEW corridor accessibility"
    ],
    industries: [
      "Lake Ontario marine operations",
      "Corporate & office equipment",
      "Manufacturing & distribution",
      "Residential marina services"
    ],
    process: [
      "Corporate facility assessment",
      "Marine-grade installation",
      "Professional project management",
      "Quality compliance certification"
    ],
    faqs: [
      { 
        q: "Do you service Burlington marinas?", 
        a: "Yes, we provide comprehensive marina services throughout Burlington's Lake Ontario waterfront." 
      },
      { 
        q: "Can you handle corporate facility equipment?", 
        a: "Absolutely. We specialize in protecting corporate and commercial equipment installations." 
      },
      { 
        q: "What about residential marina services?", 
        a: "We provide premium protection services for residential boat owners and marina facilities." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Burlington, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "City of Burlington", url: "https://www.burlington.ca/" },
      { label: "Burlington Chamber", url: "https://www.burlingtonchamber.com/" },
      { label: "Spencer Smith Park", url: "https://www.burlington.ca/en/recreation-and-parks/spencer-smith-park.aspx" }
    ]
  },
  scarborough: {
    city: "Scarborough",
    citySlug: "scarborough",
    region: "Greater Toronto Area",
    population: "630K",
    neighborhoods: ["Agincourt", "Malvern", "Rouge", "Wexford"],
    summary: "Expert shrink wrap services throughout Scarborough, serving Toronto's eastern communities with comprehensive equipment protection.",
    usps: [
      "Eastern GTA coverage",
      "Diverse community specialists",
      "Industrial corridor expertise",
      "Multi-cultural service approach"
    ],
    industries: [
      "Manufacturing & distribution",
      "Automotive & logistics",
      "Technology & electronics",
      "Residential property equipment"
    ],
    process: [
      "Urban facility assessment",
      "High-density area installation",
      "Noise-conscious operation",
      "City compliance certification"
    ],
    faqs: [
      { 
        q: "Do you service industrial areas in Scarborough?", 
        a: "Yes, we have extensive experience with manufacturing and distribution facilities throughout Scarborough." 
      },
      { 
        q: "Can you work in high-density residential areas?", 
        a: "Absolutely. We're experienced in working respectfully in residential neighborhoods." 
      },
      { 
        q: "What about automotive facility equipment?", 
        a: "We specialize in protecting automotive and logistics equipment throughout the eastern GTA." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Scarborough, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "City of Toronto", url: "https://www.toronto.ca/" },
      { label: "Scarborough Community", url: "https://www.toronto.ca/community-people/get-involved/community/scarborough/" },
      { label: "Toronto Board of Trade", url: "https://bot.com/" }
    ]
  },
  brampton: {
    city: "Brampton",
    citySlug: "brampton",
    region: "Greater Toronto Area",
    population: "650K",
    neighborhoods: ["Downtown", "Bramalea", "Heart Lake", "Springdale"],
    summary: "Professional shrink wrap services throughout Brampton, serving the Flower City's diverse industrial and residential needs.",
    usps: [
      "Major industrial hub coverage",
      "Airport corridor expertise",
      "Multi-cultural community service",
      "Large-scale project capability"
    ],
    industries: [
      "Manufacturing & automotive",
      "Logistics & distribution",
      "Technology & telecommunications",
      "Food processing & agriculture"
    ],
    process: [
      "Industrial facility planning",
      "Large-scale project management",
      "Multi-phase installation",
      "Corporate compliance reporting"
    ],
    faqs: [
      { 
        q: "Do you service Brampton's industrial areas?", 
        a: "Yes, we have extensive experience with manufacturing and logistics facilities throughout Brampton." 
      },
      { 
        q: "Can you handle large corporate projects?", 
        a: "Absolutely. We specialize in large-scale industrial and corporate equipment protection." 
      },
      { 
        q: "What about food processing facilities?", 
        a: "We provide specialized protection for food processing and agricultural equipment." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Brampton, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "City of Brampton", url: "https://www.brampton.ca/" },
      { label: "Brampton Board of Trade", url: "https://www.bramptonbot.com/" },
      { label: "Brampton Economic Development", url: "https://www.brampton.ca/en/business/economic-development/" }
    ]
  },
  milton: {
    city: "Milton",
    citySlug: "milton",
    region: "Halton Region",
    population: "132K",
    neighborhoods: ["Downtown", "Beaty", "Hawthorne Village", "Scott"],
    summary: "Expert shrink wrap services in Milton, protecting equipment in one of Canada's fastest-growing communities.",
    usps: [
      "Rapid growth community specialists",
      "New construction expertise",
      "Residential development coverage",
      "Flexible service scheduling"
    ],
    industries: [
      "Construction & development",
      "Residential property equipment",
      "Small business & retail",
      "Agricultural equipment"
    ],
    process: [
      "New development assessment",
      "Construction-friendly installation",
      "Residential-appropriate materials",
      "Growth-adaptive service planning"
    ],
    faqs: [
      { 
        q: "Do you service new developments in Milton?", 
        a: "Yes, we specialize in providing services to rapidly growing communities and new developments." 
      },
      { 
        q: "Can you work around construction schedules?", 
        a: "Absolutely. We coordinate with construction timelines and development schedules." 
      },
      { 
        q: "What about residential equipment protection?", 
        a: "We provide comprehensive residential equipment protection services throughout Milton." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Milton, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "Town of Milton", url: "https://www.milton.ca/" },
      { label: "Milton Chamber", url: "https://www.miltonchamber.ca/" },
      { label: "Milton Economic Development", url: "https://www.investinmilton.ca/" }
    ]
  },
  muskoka: {
    city: "Muskoka",
    citySlug: "muskoka",
    region: "Muskoka Region",
    population: "65K",
    neighborhoods: ["Gravenhurst", "Bracebridge", "Huntsville", "Lake of Bays"],
    summary: "Premium shrink wrap services throughout Muskoka, protecting cottage country's boats, docks, and recreational equipment.",
    usps: [
      "Cottage country specialists",
      "Lake and marina expertise",
      "Seasonal property coverage",
      "Remote location accessibility"
    ],
    industries: [
      "Marine & recreational boating",
      "Tourism & hospitality",
      "Cottage & seasonal properties",
      "Resort & marina operations"
    ],
    process: [
      "Waterfront property assessment",
      "Marine-specific installation",
      "Seasonal timing optimization",
      "Remote location logistics"
    ],
    faqs: [
      { 
        q: "Do you service remote cottage properties?", 
        a: "Yes, we provide mobile service to remote locations throughout the Muskoka region." 
      },
      { 
        q: "Can you protect boats and docks?", 
        a: "Absolutely. We specialize in marine protection services for boats, docks, and waterfront equipment." 
      },
      { 
        q: "What about seasonal scheduling?", 
        a: "We coordinate our services around cottage seasons and winter storage requirements." 
      }
    ],
    phone: "+1-905-328-1271",
    phoneDisplay: "(905) 328-1271",
    email: "mobileshrinkwrapltd@gmail.com",
    address: "Muskoka, ON",
    openHours: "Mon–Sat 7:00–18:00",
    gmbUrl: "#",
    mapEmbedUrl: "",
    localLinks: [
      { label: "District of Muskoka", url: "https://www.muskoka.on.ca/" },
      { label: "Muskoka Tourism", url: "https://www.discovermuskoka.ca/" },
      { label: "Muskoka Boat & Cottage Show", url: "https://www.cottagecountryboatshow.com/" }
    ]
  }
};

export const getCityData = (slug: string): CityData | null => {
  return cityDataMap[slug] || null;
};