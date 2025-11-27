import { useState } from "react";
import { Briefcase, Users, TrendingUp, Heart, MapPin, Clock, ChevronDown, ChevronUp, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Career = () => {
  const { toast } = useToast();
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear progression paths with training and development opportunities",
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work with experienced professionals in a collaborative environment",
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive health insurance coverage for you and your family",
    },
    {
      icon: Briefcase,
      title: "Competitive Package",
      description: "Market-competitive salary with performance bonuses",
    },
  ];

  const openPositions = [
    {
      id: "sales-exec",
      title: "Sales Executive",
      department: "Sales",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "We're looking for a dynamic Sales Executive to join our team and help grow our customer base across the UAE.",
      requirements: [
        "3+ years experience in B2B sales, preferably in construction materials",
        "Strong communication and negotiation skills",
        "Valid UAE driving license",
        "Fluent in English; Arabic is a plus",
        "Proven track record of meeting sales targets",
      ],
      responsibilities: [
        "Develop and maintain relationships with contractors and builders",
        "Present product portfolio to potential clients",
        "Negotiate contracts and close deals",
        "Achieve monthly and quarterly sales targets",
        "Provide market feedback and competitor analysis",
      ],
    },
    {
      id: "warehouse-supervisor",
      title: "Warehouse Supervisor",
      department: "Operations",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "Seeking an experienced Warehouse Supervisor to oversee our storage and distribution operations.",
      requirements: [
        "5+ years experience in warehouse management",
        "Knowledge of inventory management systems",
        "Leadership experience with team management skills",
        "Understanding of building materials handling",
        "Strong organizational skills",
      ],
      responsibilities: [
        "Manage daily warehouse operations",
        "Supervise warehouse staff and coordinate shifts",
        "Maintain accurate inventory records",
        "Ensure health and safety compliance",
        "Optimize storage and logistics efficiency",
      ],
    },
    {
      id: "accountant",
      title: "Accountant",
      department: "Finance",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "Looking for a detail-oriented Accountant to handle financial operations and reporting.",
      requirements: [
        "Bachelor's degree in Accounting or Finance",
        "3+ years accounting experience",
        "Proficiency in accounting software (QuickBooks, SAP)",
        "Strong Excel skills",
        "Knowledge of UAE VAT regulations",
      ],
      responsibilities: [
        "Manage accounts payable and receivable",
        "Prepare monthly financial reports",
        "Handle VAT filing and compliance",
        "Reconcile bank statements",
        "Support audit preparations",
      ],
    },
    {
      id: "delivery-driver",
      title: "Delivery Driver",
      department: "Logistics",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "Hiring reliable Delivery Drivers for timely product delivery across Dubai and neighboring emirates.",
      requirements: [
        "Valid UAE driving license (Light/Heavy vehicle)",
        "2+ years driving experience in UAE",
        "Knowledge of Dubai roads and areas",
        "Good physical fitness for loading/unloading",
        "Clean driving record",
      ],
      responsibilities: [
        "Deliver products to customers on schedule",
        "Verify delivery items and obtain signatures",
        "Maintain delivery vehicle in good condition",
        "Handle customer queries during delivery",
        "Report any delivery issues promptly",
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. Our HR team will review your application and contact you soon.",
    });
    setFormData({ name: "", email: "", phone: "", position: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary to-slate-light">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-4">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Build Your Career With Us
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Join Craftwork Trading and be part of a dynamic team shaping the future 
              of building materials distribution in the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-background -mt-8 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card-elevated p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Open Positions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our current opportunities and find your perfect role.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((job) => (
              <div key={job.id} className="card-elevated overflow-hidden">
                <button
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                >
                  <div>
                    <h3 className="text-xl font-bold text-secondary">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" /> {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {job.type}
                      </span>
                    </div>
                  </div>
                  {expandedJob === job.id ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                
                {expandedJob === job.id && (
                  <div className="px-6 pb-6 border-t border-border pt-4 animate-fade-in">
                    <p className="text-muted-foreground mb-6">{job.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-secondary mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Button className="mt-6" onClick={() => {
                      setFormData({ ...formData, position: job.title });
                      document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      Apply for this Position
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="section-padding scroll-mt-32">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-secondary mb-4">Submit Your Application</h2>
              <p className="text-muted-foreground">
                Interested in joining our team? Fill out the form below and attach your CV.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="card-elevated p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Full Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone *</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 XX XXX XXXX"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Position Applied For *</label>
                  <Input
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="e.g., Sales Executive"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Cover Letter / Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about yourself and why you'd be a great fit..."
                  rows={5}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Upload CV</label>
                <Input type="file" accept=".pdf,.doc,.docx" className="cursor-pointer" />
                <p className="text-xs text-muted-foreground mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
              </div>
              
              <Button type="submit" size="lg" className="w-full gap-2">
                Submit Application <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* No Current Openings CTA */}
      <section className="py-16 bg-accent">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-accent-foreground mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your CV and we'll 
            keep it on file for future opportunities.
          </p>
          <a href="mailto:careers@craftworktrading.com">
            <Button size="lg" variant="secondary">
              Send Your CV to careers@craftworktrading.com
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
