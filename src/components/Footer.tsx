import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/247logo.png" 
              alt="247 Security Cyprus" 
              className="h-20 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Leading security specialists in Paphos, Cyprus. Protecting homes and businesses since 2012.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/monitoring" className="text-muted-foreground hover:text-primary transition-colors">
                  24/7 Monitoring
                </Link>
              </li>
              <li>
                <Link href="/property-management" className="text-muted-foreground hover:text-primary transition-colors">
                  Property Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/alarms" className="text-muted-foreground hover:text-primary transition-colors">
                  Alarm Systems
                </Link>
              </li>
              <li>
                <Link href="/services/cctv" className="text-muted-foreground hover:text-primary transition-colors">
                  CCTV Installation
                </Link>
              </li>
              <li>
                <Link href="/services/keyholding" className="text-muted-foreground hover:text-primary transition-colors">
                  Keyholding Services
                </Link>
              </li>
              <li>
                <Link href="/services/vacant-property" className="text-muted-foreground hover:text-primary transition-colors">
                  Vacant Property Checks
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Agiou Stefanou Street<br />
                  Lemba, Paphos 8260<br />
                  Cyprus
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:26323204" className="text-muted-foreground hover:text-primary transition-colors">
                  26 323204
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:97673112" className="text-muted-foreground hover:text-primary transition-colors">
                  97 673112 (24hr Emergency)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@twenty4sevencyprus.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@twenty4sevencyprus.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Twenty4Seven Private Security Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <span className="text-muted-foreground">Licensed by Cyprus Police</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground">Fully Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
