import adhesivesImg from "@/assets/products/adhesives.jpg";
import laminatesImg from "@/assets/products/laminates.jpg";
import edgeBandingImg from "@/assets/products/edge-banding.jpg";
import wheelbarrowImg from "@/assets/products/wheelbarrow.jpg";
import trolleyImg from "@/assets/products/trolley.jpg";
import nailsImg from "@/assets/products/nails.jpg";
import shadeNetsImg from "@/assets/products/shade-nets.jpg";
import jubilantImg from "@/assets/products/jubilant.jpg";

export interface Product {
  name: string;
  brand: string;
  desc: string;
  features?: string[];
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  products: Product[];
  icon: string;
  color: string;
  image: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: "vamicol-adhesives",
    title: "VAMICOL Premium Adhesives",
    description: "Industry-leading bonding solutions for professional applications",
    longDescription: "VAMICOL Premium Adhesives are engineered for superior bonding performance across various applications. Our adhesive range is trusted by professionals in the furniture, construction, and manufacturing industries for their exceptional strength, durability, and ease of application.",
    products: [
      { name: "VAMICOL All Rounder", brand: "VAMICOL", desc: "Multi-purpose adhesive for long-lasting bonds", features: ["Multi-surface bonding", "Quick drying", "Strong adhesion"] },
      { name: "VAMICOL Aquabond", brand: "VAMICOL", desc: "Heatproof & waterproof adhesive", features: ["Heat resistant", "Waterproof", "Industrial strength"] },
      { name: "VAMICOL Watershield", brand: "VAMICOL", desc: "Waterproof with excellent spreadability", features: ["100% waterproof", "Easy spread", "Long open time"] },
      { name: "VAMICOL Lamino", brand: "VAMICOL", desc: "Anti-bubble, water resistant laminate adhesive", features: ["Bubble-free finish", "Water resistant", "Smooth application"] },
      { name: "VAMICOL Supremo", brand: "VAMICOL", desc: "D3 Certified, superfast drying", features: ["D3 Certified", "Fast cure", "High strength"] },
      { name: "VAMICOL LaminoNXT", brand: "VAMICOL", desc: "Next gen rubber adhesive technology", features: ["Advanced formula", "Superior flexibility", "Professional grade"] },
    ],
    icon: "🧪",
    color: "bg-primary/10 text-primary",
    image: adhesivesImg,
  },
  {
    id: "laminates-hpl",
    title: "Laminates (HPL)",
    description: "High Pressure Laminates for superior surface finishing",
    longDescription: "Our High Pressure Laminates (HPL) collection offers premium surface finishing solutions for furniture, interiors, and architectural applications. Available in a wide range of colors, patterns, and textures to match any design requirement.",
    products: [
      { name: "Decorative Laminates", brand: "Various", desc: "Premium surface finishing solutions", features: ["Wide color range", "Scratch resistant", "Easy maintenance"] },
      { name: "Compact Laminates", brand: "Various", desc: "High density decorative panels", features: ["High impact resistance", "Self-supporting", "Moisture resistant"] },
      { name: "Post-forming Laminates", brand: "Various", desc: "Flexible decorative surfaces", features: ["Bendable design", "Seamless edges", "Versatile application"] },
      { name: "Industrial Laminates", brand: "Various", desc: "Heavy-duty surface applications", features: ["Industrial grade", "Chemical resistant", "High durability"] },
      { name: "Fire Retardant Laminates", brand: "Various", desc: "Safety-compliant decorative panels", features: ["Fire rated", "Safety compliant", "Smoke suppression"] },
      { name: "Anti-bacterial Laminates", brand: "Various", desc: "Hygienic surface solutions", features: ["Antibacterial coating", "Healthcare grade", "Easy sanitization"] },
    ],
    icon: "🎨",
    color: "bg-purple-500/10 text-purple-600",
    image: laminatesImg,
  },
  {
    id: "pvc-edge-banding",
    title: "PVC Edge Banding",
    description: "Quality edge finishing solutions for furniture and cabinetry",
    longDescription: "Our PVC Edge Banding collection provides the perfect finishing touch for furniture and cabinetry. Available in solid colors, woodgrain patterns, and various finishes to complement any laminate or panel design.",
    products: [
      { name: "Solid Color Edge Bands", brand: "Various", desc: "Wide range of solid colors", features: ["Color matched", "Consistent quality", "Multiple widths"] },
      { name: "Woodgrain Edge Bands", brand: "Various", desc: "Natural wood appearance", features: ["Realistic texture", "Pattern matching", "UV stable"] },
      { name: "High Gloss Edge Bands", brand: "Various", desc: "Premium glossy finish", features: ["Mirror finish", "Acrylic coating", "Premium look"] },
      { name: "Matt Finish Edge Bands", brand: "Various", desc: "Elegant matte texture", features: ["Fingerprint resistant", "Soft touch", "Modern aesthetic"] },
      { name: "Metallic Edge Bands", brand: "Various", desc: "Modern metallic finishes", features: ["Brushed metal look", "Contemporary design", "Durable finish"] },
      { name: "Textured Edge Bands", brand: "Various", desc: "3D surface textures", features: ["Embossed patterns", "Tactile surface", "Unique designs"] },
    ],
    icon: "📐",
    color: "bg-amber-500/10 text-amber-600",
    image: edgeBandingImg,
  },
  {
    id: "prestar-wheelbarrows",
    title: "Prestar Metal Wheelbarrows",
    description: "Professional-grade wheelbarrows and construction equipment",
    longDescription: "Prestar Metal Wheelbarrows are built for professional construction and landscaping use. Featuring robust metal construction, ergonomic design, and high-quality wheels for easy maneuvering on any terrain.",
    products: [
      { name: "Prestar 3 Cu.Ft Wheelbarrow", brand: "Prestar", desc: "Standard capacity construction wheelbarrow", features: ["3 cubic feet capacity", "Heavy gauge steel", "Pneumatic wheel"] },
      { name: "Heavy Duty Wheelbarrow", brand: "Prestar", desc: "Reinforced for demanding jobs", features: ["Extra reinforcement", "Large capacity", "Industrial use"] },
      { name: "Pneumatic Spare Wheels", brand: "Prestar", desc: "Replacement pneumatic wheels", features: ["Easy installation", "All-terrain", "Cushioned ride"] },
      { name: "Solid Spare Wheels", brand: "Prestar", desc: "Puncture-proof solid wheels", features: ["No punctures", "Zero maintenance", "Heavy load capacity"] },
      { name: "Wheelbarrow Trays", brand: "Prestar", desc: "Replacement metal trays", features: ["Galvanized steel", "Rust resistant", "Perfect fit"] },
      { name: "Wheelbarrow Handles", brand: "Prestar", desc: "Quality hardwood handles", features: ["Ergonomic grip", "Durable hardwood", "Weather treated"] },
    ],
    icon: "🛠️",
    color: "bg-blue-500/10 text-blue-600",
    image: wheelbarrowImg,
  },
  {
    id: "platform-trolleys",
    title: "Foldable Metal Platform Trolleys",
    description: "Efficient logistics and material handling solutions",
    longDescription: "Mystar Foldable Platform Trolleys offer efficient solutions for logistics and material handling. Designed for warehouses, factories, and retail environments with space-saving foldable designs and various load capacities.",
    products: [
      { name: "Mystar Platform Trolley 150kg", brand: "Mystar", desc: "Light duty platform trolley", features: ["150kg capacity", "Foldable design", "Easy storage"] },
      { name: "Mystar Platform Trolley 300kg", brand: "Mystar", desc: "Medium duty platform trolley", features: ["300kg capacity", "Reinforced platform", "Smooth wheels"] },
      { name: "Mystar Platform Trolley 500kg", brand: "Mystar", desc: "Heavy duty platform trolley", features: ["500kg capacity", "Industrial grade", "Dual handles"] },
      { name: "Multi-Deck Trolley", brand: "Mystar", desc: "3-tier platform trolley", features: ["3 tier design", "Space efficient", "Versatile use"] },
      { name: "Netting Trolley", brand: "Mystar", desc: "Four-side netting design", features: ["Secure containment", "All-round visibility", "Easy loading"] },
      { name: "Foldable Hand Trolley", brand: "Mystar", desc: "Compact foldable design", features: ["Ultra compact", "Lightweight", "Portable"] },
    ],
    icon: "🛒",
    color: "bg-rose-500/10 text-rose-600",
    image: trolleyImg,
  },
  {
    id: "oman-nails",
    title: "Oman Nails & Hardware",
    description: "Quality nails and fixing solutions",
    longDescription: "Oman Nails offers a comprehensive range of high-quality steel nails and hardware for construction, woodworking, and general fixing applications. Known for consistent quality and competitive pricing.",
    products: [
      { name: "Oman Wire Nails", brand: "Oman Nails", desc: "High quality steel wire nails", features: ["Bright steel", "Various sizes", "Bulk packaging"] },
      { name: "Lost Head Nails", brand: "Oman Nails", desc: "Various sizes available", features: ["Concealed head", "Clean finish", "Furniture grade"] },
      { name: "Concrete Nails", brand: "Oman Nails", desc: "Hardened steel for masonry", features: ["Hardened steel", "Masonry application", "High penetration"] },
      { name: "Roofing Nails", brand: "Oman Nails", desc: "Galvanized roofing fasteners", features: ["Galvanized coating", "Large head", "Weather resistant"] },
      { name: "G.I. Binding Wire", brand: "Various", desc: "For construction tying applications", features: ["Flexible", "Rust resistant", "Easy handling"] },
      { name: "Hose Clamps", brand: "Jolly", desc: "Secure hose connections", features: ["Adjustable", "Stainless steel", "Secure grip"] },
    ],
    icon: "🔩",
    color: "bg-slate-500/10 text-slate-600",
    image: nailsImg,
  },
  {
    id: "shade-nets",
    title: "Shade Nets & Tarpaulins",
    description: "Weather protection and coverage solutions",
    longDescription: "Our range of shade nets and tarpaulins provides effective protection against sun, rain, and weather elements. Ideal for agricultural, construction, and residential applications with various shade percentages available.",
    products: [
      { name: "Shade Nets 35%", brand: "Various", desc: "Light shade coverage", features: ["35% shade factor", "Light filtering", "Plant growth"] },
      { name: "Shade Nets 50%", brand: "Various", desc: "Medium shade coverage", features: ["50% shade factor", "Balanced light", "Versatile use"] },
      { name: "Shade Nets 75%", brand: "Various", desc: "Heavy shade coverage", features: ["75% shade factor", "UV protection", "Cooling effect"] },
      { name: "Shade Nets 90%", brand: "Various", desc: "Maximum shade coverage", features: ["90% shade factor", "Maximum protection", "Privacy screen"] },
      { name: "Silpaulin Tarpaulins", brand: "Silpaulin", desc: "100% waterproof, UV resistant", features: ["100% waterproof", "UV stabilized", "Tear resistant"] },
      { name: "Hessian Cloth", brand: "Various", desc: "For curing & garden use", features: ["Natural fiber", "Biodegradable", "Moisture retention"] },
    ],
    icon: "🏗️",
    color: "bg-green-500/10 text-green-600",
    image: shadeNetsImg,
  },
  {
    id: "jubilant-products",
    title: "Jubilant Agri & Consumer Products",
    description: "Quality products from Jubilant Industries",
    longDescription: "Jubilant Agri & Consumer Products division offers a wide range of specialty chemicals, adhesives, and wood finishes. Our products are designed for both industrial and consumer applications with consistent quality and performance.",
    products: [
      { name: "VAMICOL Foambond", brand: "VAMICOL", desc: "Foam special adhesive", features: ["Foam compatible", "Flexible bond", "Clean application"] },
      { name: "VAMICOL PVCXTRA", brand: "VAMICOL", desc: "PVC & Acrylic specialist", features: ["PVC bonding", "Acrylic compatible", "Clear finish"] },
      { name: "Jubiseal Epoxy", brand: "Jubilant", desc: "General purpose epoxy", features: ["2-part formula", "High strength", "Gap filling"] },
      { name: "Termilak Anti-Termite", brand: "VAMICOL", desc: "Wood protection coating", features: ["Termite protection", "Long lasting", "Easy application"] },
    ],
    icon: "🏭",
    color: "bg-cyan-500/10 text-cyan-600",
    image: jubilantImg,
  },
];

export const getProductCategoryById = (id: string): ProductCategory | undefined => {
  return productCategories.find(category => category.id === id);
};
