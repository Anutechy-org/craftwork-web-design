import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const productCategories = [
    {
      title: "Wood Adhesives",
      description: "Premium bonding solutions for all woodworking needs",
      products: ["VAMICOL All Rounder", "Jivanjor Wood Glue", "Polystic Adhesive"],
      icon: "🪵",
      color: "bg-amber-500/10 text-amber-600",
    },
    {
      title: "Construction Tools",
      description: "Professional-grade equipment for every project",
      products: ["Don Quichotte Blades", "Tombo Shovels", "Rapid Clamps"],
      icon: "🔧",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Tarpaulins & Sheets",
      description: "Weather protection and coverage solutions",
      products: ["Silpaulin Premium", "Shade Nets", "Hessian Cloth"],
      icon: "🏗️",
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "Hardware & Fasteners",
      description: "Quality nails, screws, and fixing solutions",
      products: ["Oman Wire Nails", "G.I. Binding Wire", "Hose Clamps"],
      icon: "🔩",
      color: "bg-slate-500/10 text-slate-600",
    },
    {
      title: "Wood Finishes",
      description: "Premium stains and coatings for beautiful results",
      products: ["VAMIWOOD Melamine", "Wood Stains", "Vamistain"],
      icon: "🎨",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      title: "Material Handling",
      description: "Efficient logistics and transport solutions",
      products: ["Prestar Wheelbarrows", "Mystar Trolleys", "Platform Carts"],
      icon: "🛒",
      color: "bg-rose-500/10 text-rose-600",
    },
  ];

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Product Range
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Complete Building Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From foundation to finish, we provide comprehensive building materials 
            to meet all your construction and woodworking needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {productCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-elevated p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {category.description}
              </p>
              <div className="space-y-2">
                {category.products.map((product) => (
                  <div
                    key={product}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {product}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-teal-dark text-primary-foreground gap-2"
          >
            View Full Catalog
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
