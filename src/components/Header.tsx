import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Brands", href: "/brands" },
    { name: "Group", href: "/group-companies" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground py-2">
        <div className="container-custom flex items-center justify-between text-sm">
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+97165248148" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +971 6 524 8148
            </a>
            <a href="mailto:info@craftworktrading.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              info@craftworktrading.com
            </a>
          </div>
          <span className="text-white text-xs md:text-sm">
            Your Trusted Building Materials Partner
          </span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Craftwork Trading Company" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-colors underline-animation ${isActive(link.href)
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="tel:+97165248148">
              <Button variant="default" className="bg-primary hover:bg-teal-dark text-primary-foreground gap-2">
                <Phone className="w-4 h-4" />
                Call Us Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium transition-colors py-2 ${isActive(link.href)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:+97165248148" onClick={() => setIsMenuOpen(false)}>
                <Button variant="default" className="bg-primary hover:bg-teal-dark text-primary-foreground w-full mt-2 gap-2">
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
