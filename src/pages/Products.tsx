import { ArrowRight, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  const productCategories = [
    {
      title: "VAMICOL Premium Adhesives",
      description: "Industry-leading bonding solutions for professional applications",
      products: [
        { name: "VAMICOL All Rounder", brand: "VAMICOL", desc: "Multi-purpose adhesive for long-lasting bonds" },
        { name: "VAMICOL Aquabond", brand: "VAMICOL", desc: "Heatproof & waterproof adhesive" },
        { name: "VAMICOL Watershield", brand: "VAMICOL", desc: "Waterproof with excellent spreadability" },
        { name: "VAMICOL Lamino", brand: "VAMICOL", desc: "Anti-bubble, water resistant laminate adhesive" },
        { name: "VAMICOL Supremo", brand: "VAMICOL", desc: "D3 Certified, superfast drying" },
        { name: "VAMICOL LaminoNXT", brand: "VAMICOL", desc: "Next gen rubber adhesive technology" },
      ],
      icon: "🧪",
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Laminates (HPL)",
      description: "High Pressure Laminates for superior surface finishing",
      products: [
        { name: "Decorative Laminates", brand: "Various", desc: "Premium surface finishing solutions" },
        { name: "Compact Laminates", brand: "Various", desc: "High density decorative panels" },
        { name: "Post-forming Laminates", brand: "Various", desc: "Flexible decorative surfaces" },
        { name: "Industrial Laminates", brand: "Various", desc: "Heavy-duty surface applications" },
        { name: "Fire Retardant Laminates", brand: "Various", desc: "Safety-compliant decorative panels" },
        { name: "Anti-bacterial Laminates", brand: "Various", desc: "Hygienic surface solutions" },
      ],
      icon: "🎨",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      title: "PVC Edge Banding",
      description: "Quality edge finishing solutions for furniture and cabinetry",
      products: [
        { name: "Solid Color Edge Bands", brand: "Various", desc: "Wide range of solid colors" },
        { name: "Woodgrain Edge Bands", brand: "Various", desc: "Natural wood appearance" },
        { name: "High Gloss Edge Bands", brand: "Various", desc: "Premium glossy finish" },
        { name: "Matt Finish Edge Bands", brand: "Various", desc: "Elegant matte texture" },
        { name: "Metallic Edge Bands", brand: "Various", desc: "Modern metallic finishes" },
        { name: "Textured Edge Bands", brand: "Various", desc: "3D surface textures" },
      ],
      icon: "📐",
      color: "bg-amber-500/10 text-amber-600",
    },
    {
      title: "Prestar Metal Wheelbarrows",
      description: "Professional-grade wheelbarrows and construction equipment",
      products: [
        { name: "Prestar 3 Cu.Ft Wheelbarrow", brand: "Prestar", desc: "Standard capacity construction wheelbarrow" },
        { name: "Heavy Duty Wheelbarrow", brand: "Prestar", desc: "Reinforced for demanding jobs" },
        { name: "Pneumatic Spare Wheels", brand: "Prestar", desc: "Replacement pneumatic wheels" },
        { name: "Solid Spare Wheels", brand: "Prestar", desc: "Puncture-proof solid wheels" },
        { name: "Wheelbarrow Trays", brand: "Prestar", desc: "Replacement metal trays" },
        { name: "Wheelbarrow Handles", brand: "Prestar", desc: "Quality hardwood handles" },
      ],
      icon: "🛠️",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Foldable Metal Platform Trolleys",
      description: "Efficient logistics and material handling solutions",
      products: [
        { name: "Mystar Platform Trolley 150kg", brand: "Mystar", desc: "Light duty platform trolley" },
        { name: "Mystar Platform Trolley 300kg", brand: "Mystar", desc: "Medium duty platform trolley" },
        { name: "Mystar Platform Trolley 500kg", brand: "Mystar", desc: "Heavy duty platform trolley" },
        { name: "Multi-Deck Trolley", brand: "Mystar", desc: "3-tier platform trolley" },
        { name: "Netting Trolley", brand: "Mystar", desc: "Four-side netting design" },
        { name: "Foldable Hand Trolley", brand: "Mystar", desc: "Compact foldable design" },
      ],
      icon: "🛒",
      color: "bg-rose-500/10 text-rose-600",
    },
    {
      title: "Oman Nails & Hardware",
      description: "Quality nails and fixing solutions",
      products: [
        { name: "Oman Wire Nails", brand: "Oman Nails", desc: "High quality steel wire nails" },
        { name: "Lost Head Nails", brand: "Oman Nails", desc: "Various sizes available" },
        { name: "Concrete Nails", brand: "Oman Nails", desc: "Hardened steel for masonry" },
        { name: "Roofing Nails", brand: "Oman Nails", desc: "Galvanized roofing fasteners" },
        { name: "G.I. Binding Wire", brand: "Various", desc: "For construction tying applications" },
        { name: "Hose Clamps", brand: "Jolly", desc: "Secure hose connections" },
      ],
      icon: "🔩",
      color: "bg-slate-500/10 text-slate-600",
    },
    {
      title: "Shade Nets & Tarpaulins",
      description: "Weather protection and coverage solutions",
      products: [
        { name: "Shade Nets 35%", brand: "Various", desc: "Light shade coverage" },
        { name: "Shade Nets 50%", brand: "Various", desc: "Medium shade coverage" },
        { name: "Shade Nets 75%", brand: "Various", desc: "Heavy shade coverage" },
        { name: "Shade Nets 90%", brand: "Various", desc: "Maximum shade coverage" },
        { name: "Silpaulin Tarpaulins", brand: "Silpaulin", desc: "100% waterproof, UV resistant" },
        { name: "Hessian Cloth", brand: "Various", desc: "For curing & garden use" },
      ],
      icon: "🏗️",
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "Jubilant Agri & Consumer Products",
      description: "Quality products from Jubilant Industries",
      products: [
        { name: "VAMICOL Foambond", brand: "VAMICOL", desc: "Foam special adhesive" },
        { name: "VAMICOL PVCXTRA", brand: "VAMICOL", desc: "PVC & Acrylic specialist" },
        { name: "Jubiseal Epoxy", brand: "Jubilant", desc: "General purpose epoxy" },
        { name: "Termilak Anti-Termite", brand: "VAMICOL", desc: "Wood protection coating" },
        { name: "VAMIWOOD Melamine", brand: "VAMICOL", desc: "Premium wood finish" },
        { name: "VAMIWOOD Wood Stain", brand: "VAMICOL", desc: "Beautiful wood coloring" },
      ],
      icon: "🏭",
      color: "bg-cyan-500/10 text-cyan-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary to-slate-light">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-4">
              Product Catalog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Complete Building Materials Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Browse our comprehensive range of VAMICOL premium adhesives, laminates, 
              edge banding, and construction supplies from world-renowned brands.
            </p>
            
            {/* Search Bar */}
            <div className="flex gap-4 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search products..." 
                  className="pl-10 bg-background/90 border-0"
                />
              </div>
              <Button variant="outline" className="bg-background/90 border-0 gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {productCategories.map((category, categoryIndex) => (
              <div key={category.title} className="scroll-mt-32" id={category.title.toLowerCase().replace(/\s+/g, '-')}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center text-2xl`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products.map((product, index) => (
                    <div
                      key={product.name}
                      className="card-elevated p-6 group cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          {product.brand}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{product.desc}</p>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary gap-1 p-0">
                        View Details <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Need a Custom Quote?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our team for bulk orders, special requirements, or product inquiries. 
            We're here to help with all your building material needs.
          </p>
          <Button size="lg" variant="secondary" className="gap-2">
            Request Quote <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
