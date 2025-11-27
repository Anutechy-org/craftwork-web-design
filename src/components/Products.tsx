import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { productCategories } from "@/data/products";

const Products = () => {
  // Show first 6 categories on homepage
  const displayCategories = productCategories.slice(0, 6);

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
          {displayCategories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="card-elevated group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 ${category.color} rounded-xl flex items-center justify-center text-xl`}>
                  {category.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.products.slice(0, 3).map((product) => (
                    <div
                      key={product.name}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {product.name}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
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
