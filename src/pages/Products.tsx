import { ArrowRight, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  const productCategories = [
    {
      title: "Wood Adhesives",
      description: "Premium bonding solutions for all woodworking needs",
      products: [
        { name: "VAMICOL All Rounder", brand: "VAMICOL", desc: "Multi-purpose adhesive for long-lasting bonds" },
        { name: "VAMICOL Aquabond", brand: "VAMICOL", desc: "Heatproof & waterproof adhesive" },
        { name: "VAMICOL Watershield", brand: "VAMICOL", desc: "Waterproof with excellent spreadability" },
        { name: "Jivanjor Wood Glue", brand: "Jivanjor", desc: "Premium quality white adhesive" },
        { name: "Polystic Adhesive", brand: "Polystic", desc: "Multi-purpose wood glue" },
        { name: "VAMBOND Wood Glue", brand: "VAMBOND", desc: "Strong bonding for wood applications" },
      ],
      icon: "🪵",
      color: "bg-amber-500/10 text-amber-600",
    },
    {
      title: "Construction Tools",
      description: "Professional-grade equipment for every project",
      products: [
        { name: "Don Quichotte Blades", brand: "Don Quichotte", desc: "High carbon steel, Made in Holland" },
        { name: "Tombo Hand Shovel", brand: "Tombo", desc: "Quality shovels for construction" },
        { name: "Round Shovel", brand: "Various", desc: "For digging and moving materials" },
        { name: "Rapid Clamps", brand: "Various", desc: "For concrete casting framework" },
        { name: "Fixed Couplers", brand: "Various", desc: "Scaffold tube connectors" },
        { name: "Shuttering Clamps", brand: "Various", desc: "Formwork securing clamps" },
      ],
      icon: "🔧",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Tarpaulins & Sheets",
      description: "Weather protection and coverage solutions",
      products: [
        { name: "Silpaulin Premium", brand: "Silpaulin", desc: "100% waterproof, UV resistant" },
        { name: "Silpaulin 70 GSM", brand: "Silpaulin", desc: "Light-duty tarpaulin" },
        { name: "Silpaulin 120 GSM", brand: "Silpaulin", desc: "Medium-duty tarpaulin" },
        { name: "Silpaulin 200 GSM", brand: "Silpaulin", desc: "Heavy-duty tarpaulin" },
        { name: "Shade Nets", brand: "Various", desc: "HDPE shade netting, various GSM" },
        { name: "Hessian Cloth", brand: "India", desc: "For concrete curing & garden use" },
      ],
      icon: "🏗️",
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "Hardware & Fasteners",
      description: "Quality nails, screws, and fixing solutions",
      products: [
        { name: "Oman Wire Nails", brand: "Oman Nails", desc: "High quality steel nails" },
        { name: "Lost Head Nails", brand: "Oman Nails", desc: "Various packing sizes available" },
        { name: "G.I. Binding Wire", brand: "Various", desc: "For tying applications in construction" },
        { name: "Jolly Hose Clamps", brand: "Jolly", desc: "Secure hose connections" },
        { name: "Tierods", brand: "Various", desc: "Formwork securing rods" },
        { name: "Water Stoppers", brand: "Various", desc: "Prevent water passage in concrete" },
      ],
      icon: "🔩",
      color: "bg-slate-500/10 text-slate-600",
    },
    {
      title: "Wood Finishes & Stains",
      description: "Premium stains and coatings for beautiful results",
      products: [
        { name: "VAMIWOOD Melamine", brand: "VAMICOL", desc: "Premium wood finish" },
        { name: "VAMIWOOD Wood Stain", brand: "VAMICOL", desc: "Beautiful wood coloring" },
        { name: "VAMIWOOD Woody", brand: "VAMICOL", desc: "Hi-Gloss wood finish" },
        { name: "Vamistain Universal", brand: "VAMICOL", desc: "Superior tinting strength" },
        { name: "Rex Super Filler", brand: "Rex", desc: "Multi-purpose filler powder" },
        { name: "Crack Filler", brand: "Rex", desc: "For wall repairs, Made in UK" },
      ],
      icon: "🎨",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      title: "Material Handling",
      description: "Efficient logistics and transport solutions",
      products: [
        { name: "Prestar Wheelbarrow", brand: "Prestar", desc: "3 cubic foot capacity" },
        { name: "Mystar Platform Trolley", brand: "Mystar", desc: "150-500kg capacity" },
        { name: "Multi Deck Trolley", brand: "Mystar", desc: "3-tier platform trolley" },
        { name: "Netting Trolley", brand: "Mystar", desc: "Four-side netting design" },
        { name: "PVC Buckets", brand: "Various", desc: "Durable construction buckets" },
        { name: "Spare Wheels", brand: "Prestar", desc: "Pneumatic & solid options" },
      ],
      icon: "🛒",
      color: "bg-rose-500/10 text-rose-600",
    },
    {
      title: "Specialty Adhesives",
      description: "Specialized bonding for specific applications",
      products: [
        { name: "VAMICOL Lamino", brand: "VAMICOL", desc: "Anti-bubble, water resistant" },
        { name: "VAMICOL Supremo", brand: "VAMICOL", desc: "D3 Certified, superfast drying" },
        { name: "VAMICOL LaminoNXT", brand: "VAMICOL", desc: "NXT gen rubber adhesive" },
        { name: "VAMICOL Foambond", brand: "VAMICOL", desc: "Foam special adhesive" },
        { name: "VAMICOL PVCXTRA", brand: "VAMICOL", desc: "PVC & Acrylic specialist" },
        { name: "Jubiseal Epoxy", brand: "VAMICOL", desc: "General purpose epoxy" },
      ],
      icon: "🧪",
      color: "bg-cyan-500/10 text-cyan-600",
    },
    {
      title: "Protective Coatings",
      description: "Surface protection and treatment solutions",
      products: [
        { name: "Termilak Anti-Termite", brand: "VAMICOL", desc: "Wood protection coating" },
        { name: "VAMICOL D4", brand: "VAMICOL", desc: "Fast cure polyurethane" },
        { name: "Masking Tape", brand: "VAMICOL", desc: "Clean paint lines" },
        { name: "Angle Beads", brand: "GCC", desc: "Corner protection" },
        { name: "Expanded Metal Mesh", brand: "GCC", desc: "4\", 6\", 8\", 10\" sizes" },
        { name: "Waller Plates", brand: "Various", desc: "Formwork accessories" },
      ],
      icon: "🛡️",
      color: "bg-orange-500/10 text-orange-600",
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
              Browse our comprehensive range of premium construction materials, adhesives, 
              tools, and supplies from world-renowned brands.
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
