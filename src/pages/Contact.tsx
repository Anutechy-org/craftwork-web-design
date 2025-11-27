import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}

Message:
${formData.message}
    `.trim();
    
    const mailtoUrl = `mailto:info@craftworktrading.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoUrl, '_blank');
    
    toast({
      title: "Email Client Opened",
      description: "Please send the email from your email client to complete your inquiry.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Dubai, UAE"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+971 6 524 8148"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@craftworktrading.com", "sales@craftworktrading.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Saturday - Thursday", "8:00 AM - 6:00 PM"],
    },
  ];

  const departments = [
    { name: "Sales Inquiries", email: "sales@craftworktrading.com", desc: "Product pricing and bulk orders" },
    { name: "Technical Support", email: "support@craftworktrading.com", desc: "Product specifications and usage" },
    { name: "Accounts", email: "accounts@craftworktrading.com", desc: "Invoices and payment queries" },
    { name: "Partnerships", email: "partners@craftworktrading.com", desc: "Distribution and brand partnerships" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary to-slate-light">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Have questions about our products or services? We're here to help. 
              Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background -mt-8 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info) => (
              <div key={info.title} className="card-elevated p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{info.title}</h3>
                {info.details.map((detail, index) => (
                  <p key={index} className="text-sm text-muted-foreground">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-secondary">Send Us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
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
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Subject *</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
                  Send Message <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
            
            {/* Map & Departments */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="aspect-video bg-muted rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d54.89782829453am125!3d25.076022829453125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Craftwork Trading Location"
                />
              </div>
              
              {/* Department Contacts */}
              <div>
                <h3 className="text-xl font-bold text-secondary mb-4">Contact by Department</h3>
                <div className="space-y-3">
                  {departments.map((dept) => (
                    <div key={dept.name} className="flex items-center justify-between p-4 bg-muted rounded-xl">
                      <div>
                        <h4 className="font-medium text-secondary">{dept.name}</h4>
                        <p className="text-xs text-muted-foreground">{dept.desc}</p>
                      </div>
                      <a 
                        href={`mailto:${dept.email}`} 
                        className="text-sm text-primary hover:underline"
                      >
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our team is available during business hours to answer your calls. 
            For urgent inquiries, reach us directly at our hotline.
          </p>
          <a href="tel:+97165248148">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="w-5 h-5" />
              Call Now: +971 6 524 8148
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
