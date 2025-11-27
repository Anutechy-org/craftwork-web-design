import { ExternalLink } from "lucide-react";

const Brands = () => {
  const mainBrands = [
    {
      name: "VAMICOL",
      description: "Premium adhesives & specialty coatings",
      tagline: "Jubilant Industries",
      featured: true,
    },
    {
      name: "Jubilant Agri & Consumer",
      description: "Quality industrial products",
      tagline: "Trusted Manufacturer",
      featured: false,
    },
    {
      name: "Prestar",
      description: "Metal wheelbarrows & equipment",
      tagline: "Malaysia",
      featured: false,
    },
    {
      name: "Oman Nails",
      description: "Quality steel nails & hardware",
      tagline: "Oman",
      featured: false,
    },
    {
      name: "Mystar",
      description: "Foldable platform trolleys",
      tagline: "Total Solutions",
      featured: false,
    },
    {
      name: "Silpaulin",
      description: "Shade nets & tarpaulins",
      tagline: "100% Waterproof",
      featured: false,
    },
  ];

  return (
    <section id="brands" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Trusted Global Brands
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We partner with world-renowned manufacturers to bring you the highest 
            quality building materials and industrial supplies.
          </p>
        </div>

        {/* Featured Brand - VAMICOL */}
        <div className="mb-12">
          <div className="card-elevated p-8 md:p-12 bg-gradient-to-br from-secondary to-slate-light text-secondary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-accent text-sm font-medium uppercase tracking-wider">
                  Featured Brand
                </span>
                <h3 className="text-4xl md:text-5xl font-bold mt-2 mb-4">VAMICOL</h3>
                <p className="text-secondary-foreground/80 max-w-lg mb-4">
                  Industry-leading premium adhesives and specialty coatings. 
                  From All Rounder to Aquabond, VAMICOL delivers exceptional bonding 
                  solutions for every application.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["All Rounder", "Aquabond", "Lamino", "Supremo", "Watershield"].map((product) => (
                    <span
                      key={product}
                      className="px-3 py-1 bg-primary/20 rounded-full text-sm text-secondary-foreground"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-bold text-primary-foreground">V</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainBrands.filter(b => !b.featured).map((brand, index) => (
            <div
              key={brand.name}
              className="card-elevated p-6 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-xl font-bold text-primary">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">{brand.name}</h3>
              <p className="text-muted-foreground text-sm mb-3">{brand.description}</p>
              <span className="text-xs text-primary font-medium">{brand.tagline}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
