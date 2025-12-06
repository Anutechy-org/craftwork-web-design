import { Building2, Phone, Mail, Globe, MapPin, Truck, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GroupCompanies = () => {
  const companies = [
    {
      name: "Arabian Sky Transport LLC",
      description: "Comprehensive transportation and logistics solutions serving Dubai and Ajman region with reliable fleet services.",
      icon: Truck,
      location: "Dubai & Ajman",
      phone: "+971 6 524 8148",
      email: "info@arabiansky.com",
      website: "www.arabiansky.com",
      color: "bg-blue-500/10 text-blue-600",
      borderColor: "border-blue-500/20",
    },
    {
      name: "Ever Rising Transport LLC",
      description: "Professional transport services operating from Dubai Investment Park, providing efficient cargo and logistics solutions.",
      icon: Truck,
      location: "DIP, Dubai",
      phone: "+971 50 106 0547",
      email: "business@everrisinguae.com",
      website: "www.everrisinguae.com",
      color: "bg-emerald-500/10 text-emerald-600",
      borderColor: "border-emerald-500/20",
    },
    {
      name: "Fuelberg Petroleum Trading LLC",
      description: "Trusted petroleum trading company based in Dubai Investment Park, serving the region's fuel and energy needs.",
      icon: Fuel,
      location: "DIP1, Dubai",
      phone: "+971 6 524 8148",
      email: null,
      website: null,
      color: "bg-amber-500/10 text-amber-600",
      borderColor: "border-amber-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/80 text-primary rounded-full text-sm font-medium mb-4 mt-4">
              Our Network
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Group of Companies
            </h1>
            <p className="text-lg text-secondary/80">
              Craftwork Trading is part of a diversified business group with operations spanning
              transportation, logistics, and petroleum trading across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              Our Group Entities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each company in our group operates independently while sharing the same commitment
              to quality, reliability, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => (
              <div
                key={company.name}
                className={`card-elevated p-8 border-t-4 ${company.borderColor} hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`w-16 h-16 ${company.color} rounded-xl flex items-center justify-center mb-6`}>
                  <company.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-secondary mb-3">
                  {company.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {company.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{company.location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <a
                      href={`tel:${company.phone.replace(/\s/g, '')}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {company.phone}
                    </a>
                  </div>

                  {company.email && (
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                      <a
                        href={`mailto:${company.email}`}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {company.email}
                      </a>
                    </div>
                  )}

                  {company.website && (
                    <div className="flex items-center gap-3 text-sm">
                      <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                      <a
                        href={`https://${company.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {company.website}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Company Highlight */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                Craftwork Building Materials Trading Co. LLC
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As the flagship company of our group, Craftwork Trading has been serving the
                construction industry since 1998. We specialize in premium building materials,
                adhesives, and construction supplies, partnering with world-renowned brands
                to deliver quality products across the UAE and GCC region.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+97165248148" className="hover:text-primary transition-colors">
                    +971 6 524 8148
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:info@craftworktrading.com" className="hover:text-primary transition-colors">
                    info@craftworktrading.com
                  </a>
                </div>
              </div>
              <a href="tel:+97165248148">
                <Button className="gap-2">
                  <Phone className="w-4 h-4" />
                  Contact Us
                </Button>
              </a>
            </div>

            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-white">Our Group Strengths</h3>
              <div className="space-y-4">
                {[
                  { title: "25+ Years Experience", desc: "Combined industry expertise across all companies" },
                  { title: "Multi-Sector Presence", desc: "Building materials, transport, and petroleum" },
                  { title: "UAE Coverage", desc: "Operations across Dubai, Ajman, and beyond" },
                  { title: "Trusted Partners", desc: "Strong relationships with global brands" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Partner With Our Group
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you need building materials, transportation services, or fuel supplies,
            our group of companies has you covered.
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

export default GroupCompanies;
