import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const features = [
    "Premium Quality Materials",
    "Trusted Brand Partners",
    "Expert Support & Service",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Building materials warehouse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/25 via-secondary/80 to-secondary/10" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6 animate-fade-in-up opacity-0 stagger-1">
            Building Materials Trading Company
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up opacity-0 stagger-2">
            Crafting Quality,{" "}
            <span className="text-accent">Building</span> Trust.
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in-up opacity-0 stagger-3">
            Your trusted partner for premium construction materials, adhesives,
            and building supplies. Quality products from world-renowned brands
            delivered with excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up opacity-0 stagger-4">
            <Link to="/products">
              <Button
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 text-base w-full sm:w-auto"
              >
                Explore Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 text-base w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 animate-fade-in-up opacity-0 stagger-5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
