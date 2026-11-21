export type ProductCategoryGroup = 'Plywood' | 'Paints' | 'Hardware';

export interface HomeCategoryItem {
  id: ProductCategoryGroup;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface ProductShowcaseItem {
  id: string;
  title: string;
  image: string;
  productSlug: string;
  category: ProductCategoryGroup;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  group: ProductCategoryGroup;
  shortDescription: string;
  fullDescription: string;
  image: string;
  featured: boolean;
  standardSizes: string;
  applications: string[];
  specs: ProductSpec[];
  brands: string[];
}

export type BrandCategoryGroup =
  | 'Plywoods & Laminates'
  | 'Paints & Adhesives'
  | 'Hardwares & Kitchen';

export interface BrandItem {
  id: string;
  name: string;
  category: BrandCategoryGroup;
  specialty: string;
  tagline: string;
}

export const SHOWROOM_IMAGES = {
  hero: '/src/assets/images/hero_plywood_showroom_1795077846876.jpg',
  aboutShowroom: '/src/assets/images/about_timber_showroom_1795077841275.jpg',
  aboutCraft: '/src/assets/images/about_hardware_craft_1795077843995.jpg',
};

export const STORE_INFO = {
  name: 'ஸ்ரீ கணேஷ் பிளைவுட்ஸ் & ஹார்ட்வேர்ஸ்',
  fullName: 'ஸ்ரீ கணேஷ் பிளைவுட்ஸ் & ஹார்ட்வேர்ஸ் (SGPH)',
  shortName: 'ஸ்ரீ கணேஷ் (SGPH)',
  nameLine1: 'ஸ்ரீ கணேஷ்',
  nameLine2: 'பிளைவுட்ஸ் & ஹார்ட்வேர்ஸ்',
  nameEn: 'Sri Ganesh Plywoods & Hardwares',
  nameTa: 'ஸ்ரீ கணேஷ் பிளைவுட்ஸ் & ஹார்ட்வேர்ஸ்',
  logo: '/assets/sgph-logo.png',
  established: '1998',
  contactPerson: 'K. Kalimuthu',
  contactPersonTa: 'கே. காளிமுத்து',
  contactPersonEn: 'K. Kalimuthu',
  phoneDisplay: '+91 75981 14626',
  phoneRaw: '75981 14626',
  phoneHref: 'tel:+917598114626',
  whatsappNumber: '917598114626',
  email: 'kalimuthuganesh2013@gmail.com',
  hoursWeekday: 'Mon – Sat: 9:00 AM – 8:30 PM',
  hoursWeekend: 'Sunday: 9:30 AM – 2:00 PM',
  headOffice: {
    label: 'Head Office',
    addressLines: [
      '73, Mohanur Main Road,',
      'Near Iyappan Kovil,',
      'Namakkal – 637001,',
      'Tamil Nadu, India.',
    ],
    shortAddress: '73, Mohanur Main Road, Near Iyappan Kovil, Namakkal – 637001',
    landmark: 'Near Iyappan Kovil, Mohanur Main Road',
    phoneDisplay: '+91 98426 84640',
    phoneRaw: '98426 84640',
    phoneHref: 'tel:+919842684640',
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=73+Mohanur+Main+Road+Near+Iyappan+Kovil+Namakkal+637001+Tamil+Nadu',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=73+Mohanur+Main+Road+Near+Iyappan+Kovil+Namakkal+637001+Tamil+Nadu',
    embedUrl:
      'https://maps.google.com/maps?q=73+Mohanur+Main+Road+Near+Iyappan+Kovil+Namakkal+637001&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  branchOffice: {
    label: 'Branch Office',
    addressLines: [
      '6/315, Vangili Complex,',
      'Near Andavar Petrol Bunk,',
      'Trichy Road,',
      'Namakkal – 637001,',
      'Tamil Nadu, India.',
    ],
    shortAddress: '6/315, Vangili Complex, Near Andavar Petrol Bunk, Trichy Road, Namakkal – 637001',
    landmark: 'Near Andavar Petrol Bunk, Trichy Road',
    phoneDisplay: '+91 93443 84640',
    phoneRaw: '93443 84640',
    phoneHref: 'tel:+919344384640',
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Vangili+Complex+Near+Andavar+Petrol+Bunk+Trichy+Road+Namakkal+637001+Tamil+Nadu',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Vangili+Complex+Near+Andavar+Petrol+Bunk+Trichy+Road+Namakkal+637001+Tamil+Nadu',
    embedUrl:
      'https://maps.google.com/maps?q=Vangili+Complex+Near+Andavar+Petrol+Bunk+Trichy+Road+Namakkal+637001&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
};

export const HOME_CATEGORIES: HomeCategoryItem[] = [
  {
    id: 'Plywood',
    title: 'Plywoods',
    subtitle: 'Panels, Laminates & Doors',
    description:
      'Calibrated BWP marine plywood, decorative laminates, MDF, block boards, flush doors, and natural veneers.',
    image: '/src/assets/images/showcase_plywood_blockboards_1795079457333.jpg',
  },
  {
    id: 'Paints',
    title: 'Paints',
    subtitle: 'Interior & Exterior Wall Finishes',
    description:
      'Matte interior and weatherproof exterior emulsions, waterproofing coatings, clear sealers, and architectural primers.',
    image: '/src/assets/images/showcase_paints_primers_1795079456121.jpg',
  },
  {
    id: 'Hardware',
    title: 'Hardwares',
    subtitle: 'Architectural Fittings & Locks',
    description:
      'Forged brass and matte charcoal door handles, security mortise locks, soft-close hinges, screws, and drawer slides.',
    image: '/src/assets/images/showcase_door_locks_fittings_1795079451898.jpg',
  },
];

export const PRODUCT_SHOWCASE_HIGHLIGHTS: ProductShowcaseItem[] = [
  {
    id: 'showcase-plywood',
    title: 'Plywoods & Block Boards',
    image: '/src/assets/images/showcase_plywood_blockboards_1795079457333.jpg',
    productSlug: 'plywood',
    category: 'Plywood',
  },
  {
    id: 'showcase-laminates',
    title: 'Laminates & Decorative Sheets',
    image: '/src/assets/images/showcase_laminates_sheets_1795079466673.jpg',
    productSlug: 'laminates',
    category: 'Plywood',
  },
  {
    id: 'showcase-paints',
    title: 'Paints & Primers',
    image: '/src/assets/images/showcase_paints_primers_1795079456121.jpg',
    productSlug: 'interior-exterior-paints',
    category: 'Paints',
  },
  {
    id: 'showcase-waterproofing',
    title: 'Waterproofing Paints',
    image: '/src/assets/images/prod_waterproofing_paint.jpg',
    productSlug: 'waterproofing-paints',
    category: 'Paints',
  },
  {
    id: 'showcase-locks',
    title: 'Door Locks & Fittings',
    image: '/src/assets/images/showcase_door_locks_fittings_1795079451898.jpg',
    productSlug: 'locks',
    category: 'Hardware',
  },
  {
    id: 'showcase-accessories',
    title: 'Hardwares & Accessories',
    image: '/src/assets/images/showcase_hardware_accessories_1795079455879.jpg',
    productSlug: 'hardware-accessories',
    category: 'Hardware',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'plywood',
    slug: 'plywood',
    name: 'Plywoods',
    group: 'Plywood',
    shortDescription: 'Marine BWP, BWR & MR grade hardwood sheets.',
    fullDescription:
      'Our curated plywood inventory spans IS:710 Boiling Water Proof marine grade, IS:303 moisture-resistant commercial ply, and calibrated Baltic birch panels. Every sheet undergoes strict core-gap inspection and borer-proof chemical treatment for dependable kitchens, wardrobes, and architectural cabinetry.',
    image: '/src/assets/images/showcase_plywood_blockboards_1795079457333.jpg',
    featured: true,
    standardSizes: '8×4 ft · 6 mm to 25 mm',
    applications: ['Modular Kitchens', 'Wardrobes & Cabinets', 'Structural Partitioning', 'Coastal Interiors'],
    specs: [
      { label: 'Grades Available', value: 'BWP Marine (IS:710), BWR, MR (IS:303)' },
      { label: 'Thicknesses', value: '6 mm, 9 mm, 12 mm, 16 mm, 19 mm, 25 mm' },
      { label: 'Core Timber', value: '100% Hardwood Eucalyptus & Gurjan' },
      { label: 'Protection', value: 'Termite & Borer Resistant, Zero Core Gap' },
    ],
    brands: ['CenturyPly', 'Greenply', 'FinePly NX'],
  },
  {
    id: 'laminates',
    slug: 'laminates',
    name: 'Laminates',
    group: 'Plywood',
    shortDescription: 'Matte, woodgrain & stone finish HPL sheets.',
    fullDescription:
      'Explore over 600 architectural high-pressure laminate surfaces spanning synchronized woodgrains, anti-fingerprint super-mattes, fluted textures, and metallic finishes. Built with melamine wear layers that resist heat, scuffs, and daily household abrasion.',
    image: '/src/assets/images/showcase_laminates_sheets_1795079466673.jpg',
    featured: true,
    standardSizes: '8×4 ft · 0.8 mm & 1.0 mm',
    applications: ['Cabinet Shutters', 'Office Workstations', 'Wall Cladding', 'Retail Counters'],
    specs: [
      { label: 'Thicknesses', value: '0.8 mm Liner, 1.0 mm & 1.25 mm Decorative' },
      { label: 'Finishes', value: 'Suede Matte, Sync Wood, High Gloss, Stone' },
      { label: 'Performance', value: 'Scratch, Heat & Stain Resistant (EN 438)' },
      { label: 'Edge Matching', value: 'Matching 2 mm PVC Edge Bands in Stock' },
    ],
    brands: ['Greenlam Laminates', 'Century Laminates'],
  },
  {
    id: 'mdf-boards',
    slug: 'mdf-boards',
    name: 'MDF Boards',
    group: 'Plywood',
    shortDescription: 'High-density HDHMR & plain CNC boards.',
    fullDescription:
      'Engineered from fine hardwood fibers bonded under uniform pressure, our Interior, Exterior, and High-Density Moisture Resistant (HDHMR) MDF panels deliver razor-sharp CNC machining edges and flawless PU or Duco paint adhesion without splintering.',
    image: '/src/assets/images/prod_mdf_boards_1795077840997.jpg',
    featured: false,
    standardSizes: '8×4 ft · 3 mm to 25 mm',
    applications: ['CNC Jali & Routing', 'PU Painted Shutters', 'Wall Moldings', 'Display Fixtures'],
    specs: [
      { label: 'Variants', value: 'Interior Plain, Exterior MR, HDHMR, Pre-Laminated' },
      { label: 'Density Range', value: '750 kg/m³ – 850 kg/m³ (High Density)' },
      { label: 'Thicknesses', value: '3 mm, 5.5 mm, 8 mm, 12 mm, 17 mm, 18 mm, 25 mm' },
      { label: 'Surface', value: 'Precision Sanded for Smooth Paint & Membrane' },
    ],
    brands: ['CenturyPly', 'Greenply'],
  },
  {
    id: 'block-boards',
    slug: 'block-boards',
    name: 'Block Boards',
    group: 'Plywood',
    shortDescription: 'Seasoned pinewood core warp-free boards.',
    fullDescription:
      'Constructed with seasoned imported pinewood battens closely fitted between hardwood cross-bands and face veneers, our block boards offer superior dimensional stability and lighter weight—making them the contractor’s preferred choice for tall shutters, long bookshelves, and benches.',
    image: '/src/assets/images/prod_block_boards_1795077844510.jpg',
    featured: false,
    standardSizes: '8×4 ft · 19 mm & 25 mm',
    applications: ['Tall Wardrobe Doors', 'Long Shelving Units', 'Sliding Partitions', 'Table Tops'],
    specs: [
      { label: 'Core Material', value: 'Seasoned Pinewood / Poplar Battens' },
      { label: 'Grades', value: 'BWP Exterior & MR Interior (IS:1659)' },
      { label: 'Thicknesses', value: '19 mm and 25 mm Standard' },
      { label: 'Advantage', value: 'High Screw Holding & Zero Sagging' },
    ],
    brands: ['CenturyPly', 'Greenply', 'FinePly NX'],
  },
  {
    id: 'flush-doors',
    slug: 'flush-doors',
    name: 'Flush Doors',
    group: 'Plywood',
    shortDescription: 'Solid timber-core BWP interior & main doors.',
    fullDescription:
      'Built to IS:2202 standards with high-density hardwood frames, tubular or solid pine block cores, and double lock rails for effortless hardware installation. Ready for natural teak veneers, laminates, or matte paint finishes.',
    image: '/src/assets/images/prod_flush_doors_1795077842894.jpg',
    featured: false,
    standardSizes: '7×3 ft · 30 mm to 38 mm',
    applications: ['Main Entrances', 'Bedroom Doors', 'Office Cabins', 'Acoustic Rooms'],
    specs: [
      { label: 'Standard Compliance', value: 'IS:2202 Part 1 (BWP Solid Core)' },
      { label: 'Thicknesses', value: '30 mm, 32 mm, 35 mm, 38 mm' },
      { label: 'Custom Heights', value: '7 ft, 7.5 ft, 8 ft (Custom Sizing Available)' },
      { label: 'Lock Rail', value: 'Dual Hardwood Lock Block for Mortise Locks' },
    ],
    brands: ['CenturyPly', 'Greenply', 'FinePly NX'],
  },
  {
    id: 'wooden-sheets',
    slug: 'wooden-sheets',
    name: 'Wooden Sheets',
    group: 'Plywood',
    shortDescription: 'Natural teak, walnut & oak veneer sheets.',
    fullDescription:
      'Hand-selected natural flitches and recon architectural wood sheets pressed on 4 mm BWR gurjan plywood backing. Each bundle is book-matched so wall paneling, main doors, and bespoke furniture display continuous organic wood grain.',
    image: '/src/assets/images/prod_wooden_sheets_1795077844370.jpg',
    featured: false,
    standardSizes: '8×4 ft · 4 mm Veneer Ply',
    applications: ['Feature Wall Paneling', 'Main Door Facing', 'Executive Desks', 'Bespoke Millwork'],
    specs: [
      { label: 'Timber Species', value: 'Burma Teak, American Walnut, White Oak, Smoked Ash' },
      { label: 'Backing Ply', value: '4 mm Marine / BWR Hardwood Base' },
      { label: 'Matching', value: 'Book-Matched & Sequence-Numbered Flitches' },
      { label: 'Finish Compatibility', value: 'PU Matte, Natural Oil, Melamine Polish' },
    ],
    brands: ['Greenlam Laminates', 'CenturyPly'],
  },
  {
    id: 'door-handles',
    slug: 'door-handles',
    name: 'Door Handles',
    group: 'Hardware',
    shortDescription: 'Brass, SS 304 & matte charcoal lever handles.',
    fullDescription:
      'Precision-weighted architectural door levers and main-door pull handles crafted for smooth spring return and tactile permanence. Available across brushed brass, antique bronze, satin steel, and matte black PVD coatings tested against coastal corrosion.',
    image: '/src/assets/images/prod_door_handles_1795077845867.jpg',
    featured: true,
    standardSizes: 'Rose & Plate · SS304 / Brass',
    applications: ['Main Entrance Pulls', 'Bedroom Mortise Doors', 'Commercial Offices', 'Glass & Timber Doors'],
    specs: [
      { label: 'Base Metals', value: 'Solid Forged Brass, SS 304, Heavy Zinc Alloy' },
      { label: 'Finishes', value: 'Brushed Brass, Matte Charcoal, Satin Nickel, Antique' },
      { label: 'Cycle Rating', value: '200,000+ Lever Action Cycles' },
      { label: 'Door Thickness', value: 'Fits 30 mm – 55 mm Doors' },
    ],
    brands: ['Häfele', 'Godrej', 'Ebco'],
  },
  {
    id: 'locks',
    slug: 'locks',
    name: 'Locks',
    group: 'Hardware',
    shortDescription: 'Mortise locks, deadbolts & digital door locks.',
    fullDescription:
      'Protect residential and commercial spaces with smooth-latching mortise lock bodies, anti-pick dimple-key brass cylinders, heavy-duty deadbolts, and biometric smart locks backed by official brand warranties.',
    image: '/src/assets/images/showcase_door_locks_fittings_1795079451898.jpg',
    featured: false,
    standardSizes: '45 mm – 85 mm Backset',
    applications: ['Main Security Doors', 'Internal Privacy Doors', 'Master-Key Offices', 'Cabinet Security'],
    specs: [
      { label: 'Lock Types', value: 'Mortise Locksets, Deadbolts, Rim Locks, Digital Locks' },
      { label: 'Cylinder Core', value: 'Solid Brass 6-Pin / 10-Pin Dimple Key' },
      { label: 'Forend Plate', value: '3 mm Brushed Stainless Steel SS 304' },
      { label: 'Warranty', value: '5 to 10 Year Mechanical Warranty' },
    ],
    brands: ['Godrej', 'Häfele', 'Ebco'],
  },
  {
    id: 'hinges',
    slug: 'hinges',
    name: 'Hinges',
    group: 'Hardware',
    shortDescription: 'Soft-close cabinet & SS 304 ball-bearing hinges.',
    fullDescription:
      'Engineered to carry solid timber doors and daily kitchen shutters effortlessly without sag. Stocked in full-overlay, half-overlay, inset 3D-adjustable clip-on concealed hinges alongside 3 mm thick ball-bearing butt hinges.',
    image: '/src/assets/images/prod_hinges_1795077839426.jpg',
    featured: true,
    standardSizes: '3" to 6" · 110° Soft-Close',
    applications: ['Kitchen Cabinets', 'Heavy Entrance Doors', 'Wardrobe Shutters', 'Corner Units'],
    specs: [
      { label: 'Cabinet Hinges', value: '3D Clip-On Hydraulic Soft-Close (0°, 8°, 15° Crank)' },
      { label: 'Door Hinges', value: 'SS 304 Ball-Bearing Butt & Concealed 3D Hinges' },
      { label: 'Testing', value: '80,000+ Open-Close Cycles · Salt-Spray Tested' },
      { label: 'Load Capacity', value: 'Up to 120 kg per 3-Hinge Door Set' },
    ],
    brands: ['Häfele', 'Ebco', 'Sleek'],
  },
  {
    id: 'screws',
    slug: 'screws',
    name: 'Screws',
    group: 'Hardware',
    shortDescription: 'SS 304, wood, chipboard & drywall fasteners.',
    fullDescription:
      'Every reliable joinery project depends on clean fasteners. We supply full box and contractor bulk packs of rust-resistant stainless steel wood screws, yellow-zinc chipboard screws, black phosphate drywall screws, and brass slotted hardware screws.',
    image: '/src/assets/images/prod_screws_1795077841830.jpg',
    featured: false,
    standardSizes: '13 mm to 100 mm · Bulk & Box',
    applications: ['Plywood Carcass Assembly', 'Hinge & Channel Mounting', 'Gypsum & Drywall', 'Exterior Decking'],
    specs: [
      { label: 'Materials', value: 'SS 304, Hardened Carbon Steel, Solid Brass' },
      { label: 'Coatings', value: 'Zinc Yellow, Black Phosphate, Antique Brass' },
      { label: 'Drive Types', value: 'Pozi (PZ2), Phillips (PH2), Torx, Slotted' },
      { label: 'Packaging', value: 'Retail Packs & 1,000-Piece Contractor Cartons' },
    ],
    brands: ['Ebco', 'Häfele'],
  },
  {
    id: 'hardware-accessories',
    slug: 'hardware-accessories',
    name: 'Hardwares & Accessories',
    group: 'Hardware',
    shortDescription: 'Drawer slides, kitchen fittings & tower bolts.',
    fullDescription:
      'Complete every room with coordinated architectural accessories—from heavy-duty 45 kg soft-close drawer channels and hydraulic door closers to solid brass tower bolts, magnetic floor stoppers, aluminum profile handles, and wood adhesives.',
    image: '/src/assets/images/showcase_hardware_accessories_1795079455879.jpg',
    featured: false,
    standardSizes: 'Full Modular & Door Range',
    applications: ['Kitchen Drawers', 'Wardrobe Organizers', 'Door Control & Safety', 'Final Interior Fit-Out'],
    specs: [
      { label: 'Drawer Systems', value: 'Telescopic & Tandem Soft-Close Channels (12"–24")' },
      { label: 'Door Fittings', value: 'Hydraulic Door Closers, Magnetic Stoppers, Tower Bolts' },
      { label: 'Cabinet Hardware', value: 'Gola Profiles, Brass Knobs, Wardrobe Lift Rods' },
      { label: 'Adhesives', value: 'D3 Waterproof Wood Glues & Contact Adhesives' },
    ],
    brands: ['Häfele', 'Ebco', 'Sleek', 'Godrej'],
  },
  {
    id: 'interior-exterior-paints',
    slug: 'interior-exterior-paints',
    name: 'Interior & Exterior Paints',
    group: 'Paints',
    shortDescription: 'Washable emulsions & weatherproof wall paints.',
    fullDescription:
      'Stocked with computerized tinting precision for smooth, low-VOC matte and sheen interior walls alongside algae-resistant exterior acrylic emulsions formulated to hold color in harsh sun and monsoon climates.',
    image: '/src/assets/images/showcase_paints_primers_1795079456121.jpg',
    featured: true,
    standardSizes: '1 L, 4 L, 10 L & 20 L',
    applications: ['Living & Bedroom Walls', 'Exterior Facades', 'Ceilings & Trims', 'Commercial Interiors'],
    specs: [
      { label: 'Finishes', value: 'Ultra Matte, Soft Sheen, Luxury Silk, Exterior Weatherproof' },
      { label: 'Tinting', value: '2,000+ Computerized Architectural Shades On-Site' },
      { label: 'Coverage', value: '120 – 140 sq. ft. per litre (2 coats)' },
      { label: 'Formulation', value: 'Low-VOC, Washable, Anti-Fungal Protection' },
    ],
    brands: ['Asian Paints', 'Birla Opus', 'Nippon Paint'],
  },
  {
    id: 'primers-wood-sealers',
    slug: 'primers-wood-sealers',
    name: 'Primers, Putty & Adhesives',
    group: 'Paints',
    shortDescription: 'Wall primers, wood sealers & tile adhesives.',
    fullDescription:
      'Ensure flawless paint adhesion, waterproofing, and moisture sealing on masonry, tile, MDF, and hardwood substrates with alkali-resistant primers, fine putty, grain-filling wood sealers, and MYK Laticrete installation solutions.',
    image: '/src/assets/images/prod_primers_putty_1795078367952.jpg',
    featured: false,
    standardSizes: '1 L to 20 L · 20 kg Bags',
    applications: ['Fresh Plaster Masonry', 'MDF & Plywood Base Coat', 'Tile & Stone Fixing', 'Waterproofing Prep'],
    specs: [
      { label: 'Primer Types', value: 'Interior/Exterior Acrylic Wall Primer, Wood & Metal Primer' },
      { label: 'Putty & Adhesives', value: 'Wall Putty, Tile Adhesives & Epoxy Grouts' },
      { label: 'Wood Prep', value: 'Clear Sanding Sealer, Grain Filler & NC Putty' },
      { label: 'Tools Stocked', value: 'SS Putty Knives, Rollers, Masking Tapes & Abrasives' },
    ],
    brands: ['Asian Paints', 'Birla Opus', 'Nippon Paint', 'MYK Laticrete'],
  },
  {
    id: 'waterproofing-paints',
    slug: 'waterproofing-paints',
    name: 'Waterproofing Paints',
    group: 'Paints',
    shortDescription: 'Damp-proof coatings, terrace sealers & crack-bridge paints.',
    fullDescription:
      'High-performance elastomeric waterproofing paints, crystalline damp-proof barrier coatings, and crack-bridging exterior emulsions formulated for terrace slabs, exterior vertical walls, parapets, and sunken bathrooms to permanently prevent moisture ingress, efflorescence, and damp patches.',
    image: '/src/assets/images/prod_waterproofing_paint.jpg',
    featured: true,
    standardSizes: '1 L, 4 L, 10 L & 20 L Buckets',
    applications: ['Roof Terraces & Parapet Walls', 'Exterior Rain-Facing Walls', 'Bathrooms & Sunken Slabs', 'Internal Wall Damp Patches'],
    specs: [
      { label: 'Membrane Type', value: 'High-Build Elastomeric Acrylic Waterproofing' },
      { label: 'Elongation & Flexibility', value: '200% – 300% Crack-Bridging Flexibility' },
      { label: 'Hydrostatic Resistance', value: 'Withstands up to 7 Bars of Positive Water Pressure' },
      { label: 'Protection', value: 'Anti-Efflorescence, UV Reflective & Algae-Proof Finish' },
    ],
    brands: ['Asian Paints SmartCare', 'Dr. Fixit', 'Birla Opus', 'MYK Laticrete'],
  },
];

export const BRANDS: BrandItem[] = [
  {
    id: 'fineply',
    name: 'FinePly NX',
    category: 'Plywoods & Laminates',
    specialty: 'Calibrated hardwood plywood, marine BWP boards, and durable interior panels',
    tagline: 'Forever & Ever NX',
  },
  {
    id: 'greenply',
    name: 'Greenply',
    category: 'Plywoods & Laminates',
    specialty: 'Zero-emission calibrated plywood, block boards, and solid flush doors',
    tagline: 'Industries Limited',
  },
  {
    id: 'centuryply',
    name: 'CenturyPly',
    category: 'Plywoods & Laminates',
    specialty: 'IS:710 BWP marine plywood, natural veneers, and architectural flush doors',
    tagline: 'Trusted Marine & BWR Ply',
  },
  {
    id: 'asianpaints',
    name: 'Asian Paints',
    category: 'Paints & Adhesives',
    specialty: 'Luxury interior & exterior emulsions, WoodTech PU polishes, and waterproofing',
    tagline: 'Decorative & Wood Finishes',
  },
  {
    id: 'birla-opus',
    name: 'Birla Opus',
    category: 'Paints & Adhesives',
    specialty: 'High-coverage architectural interior emulsions, enamels, primers, and wood coatings',
    tagline: 'Architectural Paints',
  },
  {
    id: 'nippon-paint',
    name: 'Nippon Paint',
    category: 'Paints & Adhesives',
    specialty: 'Low-VOC washable wall coatings, weather-shield exteriors, and timber finishes',
    tagline: 'Advanced Coatings',
  },
  {
    id: 'ebco',
    name: 'Ebco',
    category: 'Hardwares & Kitchen',
    specialty: 'Telescopic drawer slides, hydraulic hinges, wardrobe fittings, and office hardware',
    tagline: 'Furniture Fittings & Accessories',
  },
  {
    id: 'hafele',
    name: 'Häfele',
    category: 'Hardwares & Kitchen',
    specialty: 'Architectural door handles, mortise locks, sliding systems, and modular hardware',
    tagline: 'Architectural Hardware',
  },
  {
    id: 'sleek',
    name: 'Sleek',
    category: 'Hardwares & Kitchen',
    specialty: 'Modular kitchen baskets, corner solutions, tall units, and soft-close drawer hardware',
    tagline: 'The Kitchen Specialist',
  },
  {
    id: 'godrej',
    name: 'Godrej',
    category: 'Hardwares & Kitchen',
    specialty: 'High-security mortise locks, euro cylinders, digital door locks, and architectural levers',
    tagline: 'Locks & Architectural Fittings',
  },
  {
    id: 'greenlam',
    name: 'Greenlam Laminates',
    category: 'Plywoods & Laminates',
    specialty: 'High-pressure decorative laminates, synchronized woodgrains, and matte finishes',
    tagline: 'Decorative Laminates',
  },
  {
    id: 'century-laminates',
    name: 'Century Laminates',
    category: 'Plywoods & Laminates',
    specialty: 'Scratch-resistant HPL sheets, anti-fingerprint mattes, and interior surfacing',
    tagline: 'My Design. My Style.',
  },
  {
    id: 'myk-laticrete',
    name: 'MYK Laticrete',
    category: 'Paints & Adhesives',
    specialty: 'Polymer-modified tile & stone adhesives, epoxy grouts, and surface waterproofing',
    tagline: 'Adhesives & Grouting Systems',
  },
];

