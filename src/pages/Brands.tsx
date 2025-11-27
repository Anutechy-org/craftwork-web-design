import { ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Brands = () => {
  const featuredBrand = {
    name: "VAMICOL",
    tagline: "Jubilant Industries",
    description: "Industry-leading adhesives, wood finishes, and specialty coatings. VAMICOL has been at the forefront of bonding technology, delivering exceptional quality for decades.",
    products: [
      { name: "All Rounder", desc: "Multi-purpose adhesive for long-lasting bonds" },
      { name: "Aquabond", desc: "Heatproof & waterproof adhesive solution" },
      { name: "Lamino", desc: "Anti-bubble, water resistant laminate adhesive" },
      { name: "Supremo", desc: "D3 Certified with superfast drying" },
      { name: "Watershield", desc: "Waterproof with excellent spreadability" },
      { name: "LaminoNXT", desc: "Next generation rubber adhesive technology" },
      { name: "Nano", desc: "Nano-based technology for superfast bonding" },
      { name: "VAMIWOOD", desc: "Premium melamine wood finish range" },
    ],
    highlights: [
      "Industry-leading bond strength",
      "Comprehensive product range",
      "Trusted by professionals worldwide",
      "ISO certified manufacturing",
    ],
  };

  const brands = [
    {
      name: "Don Quichotte",
      origin: "Made in Holland",
      description: "Premium high carbon steel blades and cutting tools. Manufactured with austempered steel for extreme flexibility and absolute safety.",
      products: ["Steel Blades", "Cutting Tools", "Professional Equipment"],
      highlights: ["High hardness", "Extreme flexibility", "Modern manufacturing"],
    },
    {
      name: "Prestar",
      origin: "Malaysia",
      description: "Quality wheelbarrows and material handling equipment designed for durability and efficiency in construction environments.",
      products: ["Wheelbarrows", "Spare Wheels", "Construction Carts"],
      highlights: ["Wider leg profile", "Boltless undercarriage", "Power coated finish"],
    },
    {
      name: "Mystar",
      origin: "Malaysia",
      description: "Total logistic solutions provider offering platform trolleys, multi-deck carts, and material handling equipment.",
      products: ["Platform Trolleys", "Multi-Deck Trolleys", "Netting Trolleys"],
      highlights: ["Heavy duty wheels", "Foldable handles", "Multiple capacities"],
    },
    {
      name: "Jivanjor",
      origin: "India",
      description: "Premium quality wood adhesives with the tagline 'Naya Yug, Naya Jod'. Specially formulated for unmatched bond strength.",
      products: ["Wood Glue", "Contact Adhesives", "Multi-Purpose Adhesives"],
      highlights: ["Hybrid technology", "Preservatives added", "Long shelf life"],
    },
    {
      name: "Silpaulin",
      origin: "India",
      description: "Supreme quality multilayered cross-laminated UV stabilized tarpaulins. 100% waterproof with excellent tensile strength.",
      products: ["Premium Tarpaulins", "Shade Nets", "Protective Sheets"],
      highlights: ["100% waterproof", "UV resistant", "High tensile strength"],
    },
    {
      name: "Oman Nails",
      origin: "Oman",
      description: "High quality steel wire nails with strict quality control. Easy hammering-in and higher pull-out value.",
      products: ["Wire Nails", "Lost Head Nails", "Various Sizes"],
      highlights: ["High quality steel", "Strict QC", "Multiple packings"],
    },
    {
      name: "Rex",
      origin: "Made in UK",
      description: "Multi-purpose filler powder ideal for repairs to plaster, plasterboard, wood, brick, stone and most building materials.",
      products: ["Super Filler", "Crack Filler", "Repair Compounds"],
      highlights: ["Easy to mix", "Superb adhesion", "Rock hard finish"],
    },
    {
      name: "Jolly",
      origin: "International",
      description: "Quality hose clamps and fastening solutions for mechanical and construction applications.",
      products: ["Hose Clamps", "Fasteners", "Fixing Solutions"],
      highlights: ["Secure connections", "Multiple sizes", "Durable construction"],
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
              Our Partners
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Trusted Global Brands
            </h1>
            <p className="text-lg text-primary-foreground/80">
              We partner with world-renowned manufacturers to bring you the highest 
              quality building materials and tools. Each brand represents excellence in their field.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Brand - VAMICOL */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="card-elevated p-8 md:p-12 bg-gradient-to-br from-secondary to-slate-light text-secondary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <span className="text-accent text-sm font-medium uppercase tracking-wider">
                    Featured Brand
                  </span>
                  <h2 className="text-5xl md:text-6xl font-bold mt-2 mb-2">{featuredBrand.name}</h2>
                  <p className="text-primary text-lg mb-6">{featuredBrand.tagline}</p>
                  <p className="text-secondary-foreground/80 mb-8 text-lg leading-relaxed">
                    {featuredBrand.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {featuredBrand.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-secondary-foreground/90">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-primary hover:bg-teal-dark text-primary-foreground">
                    View All VAMICOL Products
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {featuredBrand.products.map((product) => (
                    <div key={product.name} className="bg-secondary-foreground/10 rounded-xl p-4">
                      <h4 className="font-semibold text-secondary-foreground mb-1">{product.name}</h4>
                      <p className="text-xs text-secondary-foreground/70">{product.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Brands Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">All Partner Brands</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each brand in our portfolio represents decades of expertise and commitment to quality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {brands.map((brand) => (
              <div key={brand.name} className="card-elevated p-8 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors">
                      {brand.name}
                    </h3>
                    <span className="text-sm text-primary font-medium">{brand.origin}</span>
                  </div>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{brand.name.charAt(0)}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{brand.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {brand.products.map((product) => (
                    <span key={product} className="px-3 py-1 bg-muted rounded-full text-sm text-foreground">
                      {product}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2">
                  {brand.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-accent-foreground mb-4">
            Become a Distribution Partner
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Interested in partnering with us? We're always looking to expand our network 
            of quality distributors across the region.
          </p>
          <Button size="lg" variant="secondary">
            Contact Our Team
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brands;
