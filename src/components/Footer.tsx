import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Brands", href: "/brands" },
    { name: "About Us", href: "/about" },
    { name: "Group", href: "/group-companies" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  const productCategories = [
    { name: "VAMICOL Adhesives", href: "/products#vamicol-premium-adhesives" },
    { name: "Laminates (HPL)", href: "/products#laminates-(hpl)" },
    { name: "PVC Edge Banding", href: "/products#pvc-edge-banding" },
    { name: "Prestar Wheelbarrows", href: "/products#prestar-metal-wheelbarrows" },
    { name: "Platform Trolleys", href: "/products#foldable-metal-platform-trolleys" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Craftwork Trading" className="h-10 w-auto mb-6 brightness-0 invert" />
            <p className="text-secondary-foreground/70 text-sm mb-6 leading-relaxed">
              Your trusted partner for premium building materials, VAMICOL adhesives,
              and construction supplies in the UAE.
            </p>
            <div className="flex gap-4">
              {["facebook", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs uppercase font-bold">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">
                  Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+971586510418" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  +971 58 651 0418
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@craftworktrading.com" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  info@craftworktrading.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">
                  Sat - Thu: 8AM - 6PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Craftwork Building Materials Trading Co. LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/60">
            <Link to="/contact" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
