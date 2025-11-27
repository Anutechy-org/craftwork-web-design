import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Products = () => {
  const productCategories = [
    {
      title: "VAMICOL Premium Adhesives",
      description: "Industry-leading bonding solutions for professional applications",
      products: ["VAMICOL All Rounder", "VAMICOL Aquabond", "VAMICOL Lamino"],
      icon: "🧪",
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Laminates (HPL)",
      description: "High Pressure Laminates for superior surface finishing",
      products: ["Decorative Laminates", "Compact Laminates", "Industrial Laminates"],
      icon: "🎨",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      title: "PVC Edge Banding",
      description: "Quality edge finishing solutions for furniture",
      products: ["Solid Color Bands", "Woodgrain Bands", "High Gloss Bands"],
      icon: "📐",
      color: "bg-amber-500/10 text-amber-600",
    },
    {
      title: "Prestar Metal Wheelbarrows",
      description: "Professional-grade wheelbarrows and equipment",
      products: ["3 Cu.Ft Wheelbarrow", "Heavy Duty Wheelbarrow", "Spare Wheels"],
      icon: "🛠️",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Foldable Platform Trolleys",
      description: "Efficient logistics and material handling",
      products: ["Mystar Platform Trolley", "Multi-Deck Trolley", "Netting Trolley"],
      icon: "🛒",
      color: "bg-rose-500/10 text-rose-600",
    },
    {
      title: "Oman Nails & Hardware",
      description: "Quality nails, screws, and fixing solutions",
      products: ["Oman Wire Nails", "Lost Head Nails", "G.I. Binding Wire"],
      icon: "🔩",
      color: "bg-slate-500/10 text-slate-600",
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
            From premium adhesives to laminates, we provide comprehensive building materials 
            to meet all your construction and industrial needs.
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
          <Link to="/products">
            <Button
              size="lg"
              className="bg-primary hover:bg-teal-dark text-primary-foreground gap-2"
            >
              View Full Catalog
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
