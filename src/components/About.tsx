import { Target, Users, Award, Truck } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Products" },
    { value: "50+", label: "Brand Partners" },
    { value: "1000+", label: "Happy Clients" },
  ];

  const values = [
    {
      icon: Target,
      title: "Quality Focus",
      description: "We source only the finest materials from trusted manufacturers worldwide.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your success is our priority. Expert advice and support at every step.",
    },
    {
      icon: Award,
      title: "Trusted Brands",
      description: "Partnerships with industry-leading brands ensure consistent quality.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Efficient logistics ensure your materials arrive on time, every time.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Craftsman applying wood adhesive"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-card hidden md:block">
              <div className="text-4xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Craftwork
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Your Trusted Partner in Building Materials
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Craftwork Trading Company has been serving the construction and 
              woodworking industry with premium quality materials for over two decades. 
              Based in the UAE, we've built lasting relationships with world-renowned 
              manufacturers to bring you the best products in the market.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From professional contractors to DIY enthusiasts, we cater to all your 
              building material needs. Our comprehensive product range includes adhesives, 
              tools, hardware, tarpaulins, and specialized finishes from brands like 
              VAMICOL, Don Quichotte, Prestar, and many more.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-card rounded-xl">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center p-6 bg-card rounded-xl hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-secondary mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
