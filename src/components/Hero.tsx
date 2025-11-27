import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6 animate-fade-in-up opacity-0 stagger-1">
            Building Materials Trading Company
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up opacity-0 stagger-2">
            Building Excellence,{" "}
            <span className="text-accent">One Material</span> at a Time
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in-up opacity-0 stagger-3">
            Your trusted partner for premium construction materials, adhesives, 
            and building supplies. Quality products from world-renowned brands 
            delivered with excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up opacity-0 stagger-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-teal-dark text-primary-foreground gap-2 text-base"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base"
            >
              Contact Us
            </Button>
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
