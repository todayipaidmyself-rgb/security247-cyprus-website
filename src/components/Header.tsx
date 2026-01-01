import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Monitoring", href: "/monitoring" },
    { name: "Property Management", href: "/property-management" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === href;
    return location.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src="/247logo.png" 
            alt="247 Security Cyprus" 
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex md:items-center md:gap-6 absolute left-1/2 -translate-x-1/2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                isActive(item.href) ? "text-primary" : "text-foreground/80"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex md:items-center md:gap-4 ml-auto">
          <a href="tel:26323204" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary">
            <Phone className="h-4 w-4" />
            <span>26 323204</span>
          </a>
          <Button asChild size="sm" className="bg-accent hover:bg-accent/90">
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container space-y-1 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-secondary ${
                  isActive(item.href) ? "bg-secondary text-primary" : "text-foreground/80"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <a
                href="tel:26323204"
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-foreground/80"
              >
                <Phone className="h-4 w-4" />
                <span>26 323204</span>
              </a>
              <Button asChild className="w-full bg-accent hover:bg-accent/90">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
