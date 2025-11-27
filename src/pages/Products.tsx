import { ArrowRight, Search, Filter, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productCategories } from "@/data/products";

const Products = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <Link 
                key={category.id} 
                to={`/products/${category.id}`}
                className="card-elevated group cursor-pointer overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
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
                  <h3 className="text-lg font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm">
                    View Products <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Need Product Information?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our team for bulk orders, special requirements, or product inquiries. 
            We're here to help with all your building material needs.
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

export default Products;
