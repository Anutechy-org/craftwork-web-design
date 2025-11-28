import { Target, Users, Award, Truck, Building2, Globe, Handshake, TrendingUp, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-image.jpg";
import ownerImage from "@/assets/owner-moideen.jpg";

const About = () => {
  const stats = [
    { value: "25+", label: "Years Experience", icon: Building2 },
    { value: "500+", label: "Products", icon: TrendingUp },
    { value: "50+", label: "Brand Partners", icon: Handshake },
    { value: "1000+", label: "Happy Clients", icon: Users },
  ];

  const values = [
    {
      icon: Target,
      title: "Quality Focus",
      description: "We source only the finest materials from trusted manufacturers worldwide, ensuring every product meets stringent quality standards.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your success is our priority. Our expert team provides advice and support at every step of your project journey.",
    },
    {
      icon: Award,
      title: "Trusted Brands",
      description: "Partnerships with industry-leading brands like VAMICOL, Prestar, and Jubilant ensure consistent quality.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Efficient logistics ensure your materials arrive on time, every time. We understand construction timelines matter.",
    },
  ];

  const milestones = [
    { year: "1998", title: "Company Founded", desc: "Craftwork Trading established in Dubai, UAE" },
    { year: "2003", title: "VAMICOL Partnership", desc: "Became exclusive distributor for VAMICOL products" },
    { year: "2008", title: "Regional Expansion", desc: "Extended operations across GCC countries" },
    { year: "2015", title: "Product Range Growth", desc: "Expanded to 500+ products from 50+ brands" },
    { year: "2020", title: "Digital Transformation", desc: "Launched online ordering and logistics tracking" },
    { year: "2024", title: "Continued Growth", desc: "Serving 1000+ clients with excellence" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/80 text-primary rounded-full text-sm font-medium mb-4 mt-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Building Trust Since 1998
            </h1>
            <p className="text-lg text-secondary/80">
              For over two decades, Craftwork Trading Company has been the region's trusted
              partner for premium building materials and construction supplies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background -mt-8 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="card-elevated p-6 text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={ownerImage}
                  alt="Moideen Marunnan - Founder & Managing Director"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary rounded-xl p-4 text-primary-foreground hidden md:block shadow-lg">
                <div className="text-lg font-bold">25+ Years</div>
                <div className="text-sm text-primary-foreground/80">of Leadership</div>
              </div>
            </div>

            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Founder's Message
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                Moideen Marunnan
              </h2>
              <p className="text-primary font-medium mb-6">Founder & Managing Director</p>

              <div className="relative">
                <Quote className="w-12 h-12 text-primary/20 absolute -top-2 -left-4" />
                <blockquote className="text-muted-foreground leading-relaxed space-y-4 pl-8">
                  <p className="text-lg italic">
                    "Our vision at Craftwork Trading has always been to build more than just a business –
                    we are building lasting relationships founded on trust, quality, and integrity."
                  </p>
                  <p>
                    "When I started this company in 1998, I had a simple dream: to provide the construction
                    industry with reliable access to world-class building materials. Today, that dream has
                    grown into a reality that serves thousands of satisfied customers across the UAE and beyond."
                  </p>
                  <p>
                    "We believe in partnering with the best brands in the industry, ensuring that every product
                    we supply meets the highest standards of quality. Our commitment to excellence has made us
                    the trusted choice for contractors, builders, and craftsmen who refuse to compromise on quality."
                  </p>
                  <p className="font-medium text-secondary">
                    "Together, we build excellence – one material at a time."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Craftwork Trading Company was founded in 1998 in Dubai with a simple mission:
                  to provide the construction industry with reliable access to the world's best
                  building materials. What started as a small trading operation has grown into
                  one of the region's most trusted suppliers.
                </p>
                <p>
                  Over the years, we've built strong partnerships with global manufacturers
                  including Jubilant Industries (VAMICOL), Prestar from Malaysia, and many others.
                  These relationships allow us to offer an unmatched range of quality products.
                </p>
                <p>
                  Today, we serve contractors, builders, carpenters, and DIY enthusiasts across
                  the UAE and GCC region. Our commitment to quality, competitive pricing, and
                  excellent service has earned us the trust of over 1,000 satisfied clients.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={aboutImage}
                  alt="Craftsman at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-xl p-6 text-primary-foreground hidden md:block">
                <Globe className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">GCC Coverage</div>
                <div className="text-sm text-primary-foreground/80">Serving the entire region</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at Craftwork Trading.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-elevated p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2" />
                    {index !== milestones.length - 1 && (
                      <div className="absolute top-6 left-1.5 w-1 h-full bg-primary/20" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-secondary mb-1">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary-foreground/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary-foreground mb-4">Our Mission</h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                To be the region's most trusted supplier of building materials by consistently
                delivering quality products, competitive pricing, and exceptional customer service
                that helps our clients build with confidence.
              </p>
            </div>
            <div className="bg-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary-foreground mb-4">Our Vision</h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                To be the first choice for construction professionals across the Middle East,
                setting industry standards for product quality, service excellence, and
                sustainable building practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
