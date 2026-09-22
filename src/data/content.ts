import { SortingItem, QuoteItem, SourceItem } from '../types';

export const NATIONAL_DATA = {
  totalKTPA: 7073,
  totalMillionTonnes: 7.073,
  year: 2026,
  sourceLabel: "Ministry of Textiles, Government of India (2026)",
  
  preConsumer: {
    ktpa: 2973,
    percent: 42,
    millionTonnes: 2.973,
    upcyclingPct: 58,
    downcyclingPct: 39,
    reusePct: 1,
    landfillIncinerationPct: 2,
    description: "Production-floor scraps, selvedge cuttings, yarn waste, and unsold factory deadstock. Typically mono-material, unsoiled, and concentrated in industrial hubs."
  },
  
  postConsumer: {
    ktpa: 4100,
    percent: 58,
    millionTonnes: 4.10,
    collection: {
      ulbKTPA: 2725,
      ulbPercent: 66,
      ulbLabel: "Urban Local Bodies (Municipal Solid Waste)",
      informalKTPA: 1375,
      informalPercent: 34,
      informalLabel: "NGOs, Door-to-Door Informal Waste Collectors & Chindi Traders"
    },
    outcomes: {
      recoveryKTPA: 2255,
      recoveryPercent: 55,
      recoveryLabel: "Reuse, Mechanical Recycling & Downcycling",
      disposalKTPA: 1845,
      disposalPercent: 45,
      disposalLabel: "Incineration & Municipal Landfills"
    },
    description: "Garments discarded from households after purchase and wear. Soiled, blended, dispersed across millions of homes, and missing standardized collection channels."
  }
};

export const REASON_OPTIONS = [
  {
    id: 'fit' as const,
    title: "It doesn't fit",
    subtitle: "Shrunk in wash, altered body shape, or inconsistent sizing.",
    labelCode: "CARE-01 // FIT & MEASUREMENT",
    contextStat: "Sizing variance is among the top drivers of garment abandonment in consumer return logs."
  },
  {
    id: 'damaged' as const,
    title: "It's damaged",
    subtitle: "Torn seams, stubborn food or sweat stains, worn collar, hole in fabric.",
    labelCode: "CARE-02 // TEXTILE INTEGRITY",
    contextStat: "Physical wear frequently triggers disposal when repair services are unavailable or deemed too costly."
  },
  {
    id: 'bored' as const,
    title: "I'm bored of it",
    subtitle: "Worn multiple times on social feeds, impulse purchase wear-off, wardrobe clutter.",
    labelCode: "CARE-03 // PSYCHOLOGICAL OBSOLESCENCE",
    contextStat: "Micro-trend cycles shorten the emotional lifespan of garments to fewer than 7-10 wears on average."
  },
  {
    id: 'style' as const,
    title: "No longer my style",
    subtitle: "Aesthetic preferences changed, moved past an era or subculture.",
    labelCode: "CARE-04 // AESTHETIC EVOLUTION",
    contextStat: "Changing personal taste leaves 30–40% of typical wardrobes unworn for over 12 consecutive months."
  }
];

export const DISPOSAL_OPTIONS = [
  {
    id: 'donate' as const,
    title: "Donate",
    tagline: "Give to domestic help, temple trusts, charity drives, or clothes drop-boxes.",
    symbol: "HAND-TO-HAND",
    pathwayHint: "Often enters informal reuse circuits or municipal sorting.",
    editorialCaution: "Most donors assume clothes are immediately worn by someone in need. In reality, large shares are downcycled or discarded if soiled or out of context."
  },
  {
    id: 'give_sell' as const,
    title: "Sell or give away",
    tagline: "Pass down to a younger cousin, swap with a friend, or list on a thrift platform.",
    symbol: "CIRCULAR SWAP",
    pathwayHint: "Extends first-tier clothing life directly without industrial processing.",
    editorialCaution: "Peer-to-peer re-wear is the highest-value environmental pathway, delaying downcycling by months or years."
  },
  {
    id: 'repurpose' as const,
    title: "Repurpose (Pocha / Duster)",
    tagline: "Tear into household cleaning rags, kitchen wipes, or garage grease cloths.",
    symbol: "DOMESTIC DOWNCYCLE",
    pathwayHint: "Keeps cotton in use around the house for 6–18 months.",
    editorialCaution: "A beloved cultural tradition across Indian households that delays landfill, though it still ends up in the bin eventually."
  },
  {
    id: 'discard' as const,
    title: "Throw away",
    tagline: "Drop directly into the mixed household garbage bin.",
    symbol: "MUNICIPAL WASTE",
    pathwayHint: "Picked up by Urban Local Bodies (ULBs) or informal ragpickers.",
    editorialCaution: "In mixed waste, wet organic rubbish contaminates textiles, ruining their recovery value and sending ~45% to dumping yards."
  }
];

export const SORTING_ITEMS: SortingItem[] = [
  {
    id: 'item-1',
    name: "Plain White Crew-Neck T-Shirt",
    material: "100% Combed Cotton Single Jersey",
    blend: "Mono-material (Pure Cotton)",
    condition: "Good structural condition, light underarm discoloration, intact seams.",
    details: "Size M. Easy to strip and mechanical tear or clean for secondary wearing.",
    correctPath: 'reuse',
    explanation: "Because the garment is intact and made of 100% cotton, it can be re-worn directly in domestic thrift or secondhand markets, or used as high-grade wipe material.",
    realWorldFriction: "However, minor cosmetic stains frequently lead commercial sorters to downgrade garments to downcycling rags."
  },
  {
    id: 'item-2',
    name: "Winter Oversized Graphic Hoodie",
    material: "65% Cotton, 35% Polyester with Plastic Rubberized Chest Print",
    blend: "Polycotton Intimate Blend + Plastisol Ink",
    condition: "Frayed cuffs, broken metal zipper slider, print cracking.",
    details: "Thick fleece knit. Zippers and prints make fibre extraction difficult.",
    correctPath: 'downcycle',
    explanation: "Polyester-cotton blends cannot easily be chemically recycled into pure yarn today without dissolving one component. They are commonly shredded for automotive sound insulation, mattress padding, or industrial felting.",
    realWorldFriction: "Zippers and plastic logos must be cut out manually with razors, adding substantial labor cost."
  },
  {
    id: 'item-3',
    name: "Chunky Cable-Knit Acrylic Sweater",
    material: "100% Virgin Acrylic",
    blend: "Synthetic Mono-fibre",
    condition: "Moth damage, unravelling hem, pilling across chest.",
    details: "Unwearable as clothing, but high fibre length suitable for shoddy spinning.",
    correctPath: 'recycle',
    explanation: "Acrylic and wool knits are the lifeblood of Panipat's shoddy mills. Workers shear away linings, and rag-pulling cylinders grind the knit back into staple fibre for relief blankets.",
    realWorldFriction: "Mechanical shredding shortens fibre length by 30–50%, so it must be blended with virgin acrylic or polyester to spin fresh yarn."
  },
  {
    id: 'item-4',
    name: "Evening Sequin Party Camisole",
    material: "100% Polyester Mesh with Glued PVC Sequins & Metallic Thread",
    blend: "Multi-material Composite (Plastics + Metal + Glue)",
    condition: "Missing sequins, stretched elastic straps, pungent synthetic smell.",
    details: "Non-repairable trim. Cannot be fed into textile shredding blades.",
    correctPath: 'disposal',
    explanation: "Blended synthetic textiles with metallic threads, glue adhesives, and glued PVC sequins break mechanical recycling blades and foul chemical melt filters. They almost invariably end up in incinerators or landfills.",
    realWorldFriction: "Fast-fashion partywear represents the fastest-growing unrecyclable textile stream in municipal solid waste."
  }
];

export const PANIPAT_STEPS = [
  {
    step: "01",
    title: "Sort & Deconstruct",
    subtitle: "Manual sorting by color, fiber & trimming",
    description: "Women sorters sit on burlap mats, inspecting bundles from worldwide and domestic sources. Zippers, buttons, rivets, and labels are removed in seconds using sharp curved blades. Garments are segregated into over 20 distinct color families to eliminate the need for water-intensive chemical re-dyeing.",
    stat: "Zero dye added — colors are created purely by blending pre-sorted rags.",
    tag: "MANUAL LABOR"
  },
  {
    step: "02",
    title: "Rag Pulling & Shredding",
    subtitle: "Breaking fabric structure into loose fiber",
    description: "Sorted cloth passes through high-speed rag-pulling machines ('garnetts' or shredders) equipped with thousands of hardened steel teeth. The woven or knitted grid is aggressively shredded into a fluffy cloud of recycled staple fiber.",
    stat: "Fibre length drops by 30–45% during high-torque mechanical tearing.",
    tag: "MECHANICAL"
  },
  {
    step: "03",
    title: "Carding & Web Formation",
    subtitle: "Combing tangled fibers into parallel slivers",
    description: "The tangled fibrous mass is treated with mineral oils to reduce static and passed across large rotating carding drums. Wire-covered rollers straighten and align the fragile fibers into a continuous, delicate translucent web.",
    stat: "Often blended with 10–20% virgin polyester for tensile strength.",
    tag: "ALIGNMENT"
  },
  {
    step: "04",
    title: "Open-End Rotor Spinning",
    subtitle: "Twisting short recycled fibers into durable yarn",
    description: "Because post-consumer recycled fibers are short, standard ring-spinning frames would snap. Instead, high-speed open-end rotor spinners twist the fibers into coarse, fuzzy 'shoddy' yarns ranging from 4s to 10s count.",
    stat: "Panipat produces hundreds of tonnes of shoddy yarn every single working day.",
    tag: "SPINNING"
  },
  {
    step: "05",
    title: "Weaving Relief Blankets & Felts",
    subtitle: "A second life in utilitarian goods",
    description: "The recycled yarn is woven on power looms into heavy, warm disaster-relief blankets (supplied to UN, Red Cross, armed forces, and winter night shelters), prayer mats, durries, geo-textiles, and automotive acoustic felts.",
    stat: "Over 80% of global humanitarian disaster blankets historically trace to Panipat.",
    tag: "FINAL PRODUCT"
  }
];

export const DEFINITION_CARDS = [
  {
    id: 'reuse',
    term: "Reuse",
    subtitle: "Garment remains clothing",
    color: "#65785F",
    icon: "RefreshCw",
    whatItIs: "Passing a functional garment to another human being without altering its material structure. Includes domestic gifting, thrifting, hand-me-downs, and vintage resale.",
    energyImpact: "Lowest energy footprint. Conserves 100% of the embodied water, agricultural land, and chemical dye from original manufacturing.",
    limits: "Dependent on condition, cultural stigmas around second-hand clothing, sizing, and seasonal relevance."
  },
  {
    id: 'recycle',
    term: "Recycle",
    subtitle: "Fibre recovered for another cycle",
    color: "#637A83",
    icon: "Repeat",
    whatItIs: "Deconstructing fabric back into raw fibers or chemical polymers to spin fresh yarn or produce new textile materials.",
    energyImpact: "Requires mechanical electricity or chemical solvents. Saves raw cotton farming and petroleum cracking, but shortens fiber lengths.",
    limits: "Most garments today are synthetic-cotton blends with elastane (spandex) that resist commercial fiber-to-fiber separation."
  },
  {
    id: 'downcycle',
    term: "Downcycle",
    subtitle: "Converted to lower-value non-apparel product",
    color: "#9A7A52",
    icon: "TrendingDown",
    whatItIs: "Converting textiles into utilitarian goods of reduced economic or aesthetic value: cleaning mops, soundproofing felt, carpet underlays, insulation.",
    energyImpact: "Prolongs resource utility before disposal, but is generally a one-way street: once converted to mop or felt, it cannot be recycled again.",
    limits: "Often invisible to consumers who believe their donated clothing became fashionable outfits for others."
  },
  {
    id: 'disposal',
    term: "Disposal",
    subtitle: "Incineration or municipal dumping",
    color: "#A64B32",
    icon: "Flame",
    whatItIs: "Open dumping, sanitary landfill burial, or incineration in cement kilns / waste-to-energy plants.",
    energyImpact: "Complete loss of embodied resource value. Synthetic polymers leach microplastics and persistent toxic additives into groundwater for centuries.",
    limits: "45% of India's post-consumer textile waste (~1.845M tonnes annually) meets this fate due to collection contamination."
  }
];

export const QUALITATIVE_QUOTES: QuoteItem[] = [
  {
    id: 'q-1',
    quote: "I put all my old College fests T-shirts in a cloth bag and handed them to our society's watchman. I felt proud for giving, but honestly, they were too small for him. I didn't think where they went after that day.",
    speaker: "Rohan M., 24",
    location: "Bengaluru",
    category: "Donation",
    insight: "The 'donation halo' gives psychological relief regardless of garment fit or usability for recipient."
  },
  {
    id: 'q-2',
    quote: "Every cotton T-shirt in our home gets demoted: First it's for college, then home loungewear, then nightwear, then painting clothes, and finally my mom cuts it into kitchen pocha. That T-shirt doesn't leave until it is literally shredded.",
    speaker: "Ananya S., 22",
    location: "Pune",
    category: "Attachment",
    insight: "The traditional Indian domestic downcycling cascade extends cotton utility far beyond Western averages."
  },
  {
    id: 'q-3',
    quote: "I bought five tops for a Goa weekend because they were ₹399 each on sale. Two tore at the seam on day one. It wasn't worth the tailor's ₹100 charge to fix a ₹300 top, so I tossed them in the Airbnb bin.",
    speaker: "Kavya D., 26",
    location: "Delhi NCR",
    category: "Convenience",
    insight: "Ultra-cheap fast fashion makes repair economically irrational for urban youth."
  },
  {
    id: 'q-4',
    quote: "I have clothes sitting in my suitcase for two years with tags on because I bought them during Diwali sales. I can't donate them because 'they are brand new', but I can't wear them because they don't fit.",
    speaker: "Arjun V., 28",
    location: "Mumbai",
    category: "Uncertainty",
    insight: "Sunk-cost fallacy paralyzes consumers from releasing garments into circulation while still viable."
  },
  {
    id: 'q-5',
    quote: "When I put clothes into the mall recycling bin, I assumed they were converted into fresh clothes. Discovering that 45% still ends up incinerated or in landfill in India was genuinely unsettling.",
    speaker: "Meera K., 21",
    location: "Hyderabad",
    category: "Uncertainty",
    insight: "Vague corporate take-back language leads consumers to overestimate industrial recycling capabilities."
  },
  {
    id: 'q-6',
    quote: "Our maid stopped accepting clothes from us. She said: 'Didi, polyester kurtis make us sweat when doing dishes, and western crop tops don't work for my neighborhood.' That made me realize donation is not a dumping ground.",
    speaker: "Pooja N., 27",
    location: "Ahmedabad",
    category: "Donation",
    insight: "A mismatch between urban fast fashion styles and informal community needs causes rejection at the doorstep."
  }
];

export const SOURCES_LIST: SourceItem[] = [
  {
    id: 'mot-2026',
    title: "Mapping of Textile Waste Value Chain in India",
    institution: "Ministry of Textiles, Government of India",
    year: 2026,
    url: "https://www.texmin.gov.in/static/uploads/2026/03/407c2f186a2044a4497c9c9803d16a2c.pdf",
    role: "Core National Data Backbone",
    excerpt: "Provides baseline empirical accounting: 7,073 KTPA total annual waste; 58% post-consumer (4,100 KTPA) vs 42% pre-consumer (2,973 KTPA); 66% ULB collection vs 34% informal collectors; 55% recovery pathways vs 45% incineration/landfill."
  },
  {
    id: 'unep-2024',
    title: "Sustainable Fashion & Textiles — International Day of Zero Waste",
    institution: "United Nations Environment Programme (UNEP)",
    year: 2024,
    url: "https://www.unep.org/ietc/news/statement/press-release-unsustainable-fashion-and-textiles-focus-international-day-zero-waste",
    role: "Global Context & Resource Consumption",
    excerpt: "Global benchmarks on synthetic fiber consumption, microfiber release, and the planetary boundary impacts of post-consumer fashion waste."
  },
  {
    id: 'ffg-2022',
    title: "Wealth in Waste: India's Potential to Bring Textile Waste Back into the Supply Chain",
    institution: "Fashion for Good & Circular Apparel Innovation Factory",
    year: 2022,
    url: "https://www.fashionforgood.com/report/wealth-in-waste/",
    role: "Supporting Industry Research",
    excerpt: "Comprehensive mapping of pre-consumer and post-consumer textile waste streams in key industrial clusters including Tirupur, Surat, Bengaluru, and Panipat."
  },
  {
    id: 'fmc-2026',
    title: "Panipat Textile Recycling — Sustainability Readiness Report",
    institution: "Foundation for MSME Clusters (FMC)",
    year: 2026,
    url: "https://fmc.org.in/panipat-textile-recycling-sustainability-readiness-report/",
    role: "Panipat Case Study & Cluster Dynamics",
    excerpt: "Details the mechanical shredding, carding, and shoddy spinning operations across thousands of micro and small enterprises in Haryana's recycling heartland."
  },
  {
    id: 'kaggle-reviews',
    title: "Women's E-Commerce Clothing Reviews Dataset (CC0)",
    institution: "Commercial Retail Archive / Kaggle Research",
    year: 2018,
    url: "https://www.kaggle.com/datasets/nicapotato/womens-ecommerce-clothing-reviews",
    role: "Supporting Research Context Only",
    excerpt: "23,486 anonymized online consumer reviews. Used strictly to observe consumer sentiment regarding fit, material texture, and sizing inconsistencies. Not equated to national waste totals."
  },
  {
    id: 'methodology-note',
    title: "Ethical Data & Methodology Standard",
    institution: "Project Specification Protocol",
    year: 2026,
    url: "#",
    role: "Research Safety Directive",
    excerpt: "All primary survey figures are intentionally kept in a transparent 'Pending Field Survey' state until empirical questionnaire results are integrated. Data layers are strictly separated."
  }
];
