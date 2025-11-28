import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProductCategoryById, productCategories } from "@/data/products";

const ProductDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getProductCategoryById(categoryId || "");

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-16 container-custom text-center">
          <h1 className="text-3xl font-bold text-secondary mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product category you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get next and previous categories for navigation
  const currentIndex = productCategories.findIndex(c => c.id === categoryId);
  const prevCategory = currentIndex > 0 ? productCategories[currentIndex - 1] : null;
  const nextCategory = currentIndex < productCategories.length - 1 ? productCategories[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/10 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link to="/products" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Products
              </Link>
              <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center text-3xl mb-6`}>
                {category.icon}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
                {category.title}
              </h1>
              <p className="text-lg text-secondary/80 mb-8">
                {category.longDescription}
              </p>
              <a href="tel:+97165248148">
                <Button size="lg" className="bg-primary hover:bg-teal-dark text-primary-foreground gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              Our {category.title} Range
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product, index) => (
              <div
                key={product.name}
                className="card-elevated p-6 group hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {product.brand}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">{product.desc}</p>

                {product.features && (
                  <div className="space-y-2 pt-4 border-t border-border">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 border-t border-border">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {prevCategory ? (
              <Link
                to={`/products/${prevCategory.id}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{prevCategory.title}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : <div />}

            {nextCategory ? (
              <Link
                to={`/products/${nextCategory.id}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="hidden sm:inline">{nextCategory.title}</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Interested in {category.title}?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our team for bulk orders, product specifications, or technical support.
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

export default ProductDetail;
