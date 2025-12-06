import { CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Brand logos
import vamicolLogo from "@/assets/brands/vamicol-logo.png";
import jubilantLogo from "@/assets/brands/jubilant-logo.png";
import prestarLogo from "@/assets/brands/prestar-logo.png";
import mystarLogo from "@/assets/brands/mystar-logo.png";
import omanNailsLogo from "@/assets/brands/oman-nails-logo.png";
import silpaulinLogo from "@/assets/brands/silpaulin-logo.png";

const Brands = () => {
  const featuredBrand = {
    name: "VAMICOL",
    tagline: "Jubilant Agri & Consumer Products MEA",
    logo: vamicolLogo,
    description: "Industry-leading premium adhesives and specialty coatings. VAMICOL has been at the forefront of bonding technology, delivering exceptional quality for decades across the Middle East and beyond.",
    products: [
      { name: "All Rounder", desc: "Multi-purpose adhesive for long-lasting bonds" },
      { name: "D3 Supremo", desc: "D3 Certified with superfast drying" },
      { name: "Fast X", desc: "Waterproof with excellent spreadability" },
      { name: "D4PUR", desc: "Next generation rubber adhesive technology" },
      { name: "SQ100", desc: "Nano-based technology for superfast bonding" },
      { name: "Jubi Spray", desc: "Nano-based technology for superfast bonding" },
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
      name: "Jubilant Agri & Consumer Products",
      origin: "India",
      logo: jubilantLogo,
      description: "A leading manufacturer of industrial and consumer products, providing quality solutions across multiple sectors including adhesives, coatings, and specialty chemicals.",
      products: ["Industrial Adhesives", "Specialty Coatings", "Consumer Products"],
      highlights: ["Trusted manufacturer", "Global presence", "Quality certified"],
    },
    {
      name: "Prestar",
      origin: "Malaysia",
      logo: prestarLogo,
      description: "Quality metal wheelbarrows and material handling equipment designed for durability and efficiency in construction environments.",
      products: ["Metal Wheelbarrows", "Spare Wheels", "Construction Carts"],
      highlights: ["Wider leg profile", "Boltless undercarriage", "Power coated finish"],
    },
    {
      name: "Mystar",
      origin: "Malaysia",
      logo: mystarLogo,
      description: "Total logistic solutions provider offering foldable metal platform trolleys, multi-deck carts, and material handling equipment.",
      products: ["Foldable Platform Trolleys", "Multi-Deck Trolleys", "Netting Trolleys"],
      highlights: ["Heavy duty wheels", "Foldable handles", "Multiple capacities"],
    },
    {
      name: "Oman Nails",
      origin: "Oman",
      logo: omanNailsLogo,
      description: "High quality steel wire nails with strict quality control. Easy hammering-in and higher pull-out value for reliable fastening.",
      products: ["Wire Nails", "Lost Head Nails", "Various Sizes"],
      highlights: ["High quality steel", "Strict QC", "Multiple packings"],
    },
    {
      name: "Silpaulin",
      origin: "India",
      logo: silpaulinLogo,
      description: "Supreme quality multilayered cross-laminated UV stabilized tarpaulins and shade nets. 100% waterproof with excellent tensile strength.",
      products: ["Shade Nets", "Premium Tarpaulins", "Protective Sheets"],
      highlights: ["100% waterproof", "UV resistant", "High tensile strength"],
    },
    {
      name: "HPL Laminates",
      origin: "Various",
      logo: null,
      description: "High Pressure Laminates for superior surface finishing in furniture, interior design, and architectural applications.",
      products: ["Decorative Laminates", "Compact Laminates", "Industrial Laminates"],
      highlights: ["Durable surface", "Wide design range", "Easy maintenance"],
    },
    {
      name: "PVC Edge Banding",
      origin: "Various",
      logo: null,
      description: "Quality PVC edge banding solutions for furniture and cabinetry, available in a wide range of colors, textures, and finishes.",
      products: ["Solid Colors", "Woodgrain Finish", "High Gloss"],
      highlights: ["Perfect edge finish", "Multiple textures", "Durable application"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/80 text-primary rounded-full text-sm font-medium mb-4 mt-4">
              Our Partners
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Trusted Global Brands
            </h1>
            <p className="text-lg text-secondary/80">
              We partner with world-renowned manufacturers to bring you the highest
              quality building materials and industrial supplies. Each brand represents excellence in their field.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Logos Strip */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container-custom">
          <div className="text-center mb-8">
            <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">Trusted by Industry Leaders</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[vamicolLogo, jubilantLogo, prestarLogo, mystarLogo, omanNailsLogo, silpaulinLogo].map((logo, index) => (
              <div key={index} className="h-16 md:h-20 w-auto hover:scale-110 transition-all duration-300 opacity-100 hover:opacity-100">
                <img src={logo} alt="Brand logo" className="h-full w-auto object-contain" />
              </div>
            ))}
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
                  <div className="w-32 h-12 bg-white rounded-xl flex items-center justify-center p-2">
                    <img src={vamicolLogo} alt="VAMICOL" className="w-full h-full object-contain" />
                  </div>
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

                  <Link to="/products/vamicol-adhesives">
                    <Button className="bg-primary hover:bg-teal-dark text-primary-foreground">
                      View All VAMICOL Products
                    </Button>
                  </Link>
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
                  {brand.logo ? (
                    <div className="w-32 h-24 flex items-center justify-center">
                      <img src={brand.logo} alt={`${brand.name} logo`} className="max-w-full max-h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">{brand.name.charAt(0)}</span>
                    </div>
                  )}
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
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our team for product inquiries, bulk orders, or to become a distribution partner.
          </p>
          <a href="tel:+97165248148">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="w-5 h-5" />
              Call Us Now
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brands;
