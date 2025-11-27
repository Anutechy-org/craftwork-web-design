import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Brand logos
import vamicolLogo from "@/assets/brands/vamicol-logo.png";
import jubilantLogo from "@/assets/brands/jubilant-logo.png";
import prestarLogo from "@/assets/brands/prestar-logo.png";
import mystarLogo from "@/assets/brands/mystar-logo.png";
import omanNailsLogo from "@/assets/brands/oman-nails-logo.png";
import silpaulinLogo from "@/assets/brands/silpaulin-logo.png";

const Brands = () => {
  const mainBrands = [
    {
      name: "VAMICOL",
      description: "Premium adhesives & specialty coatings",
      tagline: "Jubilant Industries",
      featured: true,
      logo: vamicolLogo,
    },
    {
      name: "Jubilant Agri & Consumer",
      description: "Quality industrial products",
      tagline: "Trusted Manufacturer",
      featured: false,
      logo: jubilantLogo,
    },
    {
      name: "Prestar",
      description: "Metal wheelbarrows & equipment",
      tagline: "Malaysia",
      featured: false,
      logo: prestarLogo,
    },
    {
      name: "Oman Nails",
      description: "Quality steel nails & hardware",
      tagline: "Oman",
      featured: false,
      logo: omanNailsLogo,
    },
    {
      name: "Mystar",
      description: "Foldable platform trolleys",
      tagline: "Total Solutions",
      featured: false,
      logo: mystarLogo,
    },
    {
      name: "Silpaulin",
      description: "Shade nets & tarpaulins",
      tagline: "100% Waterproof",
      featured: false,
      logo: silpaulinLogo,
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

        {/* Brand Logos Strip */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
          {[vamicolLogo, jubilantLogo, prestarLogo, mystarLogo, omanNailsLogo, silpaulinLogo].map((logo, index) => (
            <div key={index} className="h-14 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img src={logo} alt="Brand logo" className="h-full w-auto object-contain" />
            </div>
          ))}
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
                <div className="flex items-center gap-4 mt-2 mb-4">
                  <img src={vamicolLogo} alt="VAMICOL Logo" className="h-12 md:h-16 w-auto" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">VAMICOL</h3>
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
                <div className="w-32 h-32 md:w-40 md:h-40 bg-primary/20 rounded-2xl flex items-center justify-center p-4">
                  <img src={vamicolLogo} alt="VAMICOL" className="w-full h-full object-contain" />
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
              className="card-elevated p-6 group cursor-pointer hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-20 h-16 bg-muted rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors p-2">
                  <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">{brand.name}</h3>
              <p className="text-muted-foreground text-sm mb-3">{brand.description}</p>
              <span className="text-xs text-primary font-medium">{brand.tagline}</span>
            </div>
          ))}
        </div>

        {/* View All Brands Link */}
        <div className="text-center mt-10">
          <Link 
            to="/brands" 
            className="inline-flex items-center gap-2 text-primary hover:text-teal-dark font-medium transition-colors"
          >
            View All Brands
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Brands;
