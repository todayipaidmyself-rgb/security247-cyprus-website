import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Key,
  Shield,
  Sparkles,
  Trees,
  Waves,
  Wrench,
  Home as HomeIcon,
  CheckCircle2,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { Link } from "wouter";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function PropertyManagement() {
  const heroReveal = useScrollReveal({ threshold: 0.2 });

  const services = [
    {
      icon: Key,
      title: "Keyholding / Meet and Greet",
      description: "We offer a key holding service for our clients. We also offer a meet and greet service at your property and, in some instances, we can also provide a meet and greet at the airport.",
      features: [
        "Secure key storage",
        "Property access coordination",
        "Tradesman appointments",
        "Airport meet and greet",
        "Property preparation for arrival"
      ],
      image: "/images/keyholding.jpg"
    },
    {
      icon: Shield,
      title: "Security & Property Checks",
      description: "Twenty4seven PM is part of Twenty4seven Private Security Ltd and offers many security solutions for your property to ensure optimum protection and safety.",
      features: [
        "CCTV Systems",
        "Wireless Alarms",
        "24/7 Alarm Monitoring",
        "Anti Snap Locks",
        "Security barriers",
        "Alarm/CCTV servicing"
      ],
      image: "/images/security-checks.jpg"
    },
    {
      icon: Sparkles,
      title: "Cleaning & Laundry Services",
      description: "We can arrange for your property to be regularly cleaned inside and/or outside, weekly or monthly.",
      features: [
        "Apartments & Villas",
        "Complexes & Communal areas",
        "Commercial properties",
        "Bed linen & towel service",
        "Laundry collection & return",
        "Guest-ready preparation"
      ],
      image: "/images/cleaning-and-Laundry.jpg"
    },
    {
      icon: Trees,
      title: "Garden & Pool Services",
      description: "We offer a garden maintenance and landscaping service on a weekly or monthly basis, plus professional pool maintenance.",
      features: [
        "Grass cutting & bush pruning",
        "Tree cutting & pruning",
        "Flower beds & artificial grass",
        "Pool cleaning & maintenance",
        "Water quality checks",
        "Filter cleaning & pump checks"
      ],
      image: "/images/garden-and-pool.jpg"
    },
    {
      icon: Wrench,
      title: "Repairs & Maintenance",
      description: "We offer a call out service to your property and can deal with any repairs and maintenance. All building work is undertaken from small repairs right through to complete renovations.",
      features: [
        "Lock repairs & plumbing",
        "Electrical work",
        "Kitchen & bathroom renovations",
        "Tiling & woodwork",
        "Concrete repairs",
        "Waterproofing"
      ],
      image: "/images/repairs.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Property Management Cyprus - Complete Estate Management Services"
        description="Comprehensive property management in Paphos: cleaning, garden & pool maintenance, repairs, keyholding, and security services. One-stop solution for your Cyprus property."
        keywords="property management Cyprus, estate management Paphos, cleaning services Cyprus, pool maintenance Paphos, garden services Cyprus, keyholding Cyprus"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/IMG_0816.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container py-20 md:py-28">
          <div
            ref={heroReveal.ref}
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
              heroReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Property Management Cyprus
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Complete property and asset management solutions for your home or estate in Paphos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={getWhatsAppLink("property-management")} target="_blank" rel="noopener noreferrer">Get Free Quote</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground">
                <a href="tel:99381262">Call 9938 1262</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section padding="large">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Your One-Stop Property Management Solution
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Twenty4seven PM is part of Twenty4seven Private Security Ltd and offers comprehensive property and asset management services. Whether you have a single property or a substantial estate, we provide a total solution for everything you need from security to complete estate management, taking all of the stress out of your hands.
            </p>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section background="grey" padding="large">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Property Management Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From security to maintenance, we handle every aspect of property care
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              const serviceReveal = useScrollReveal({ threshold: 0.1 });

              return (
                <div
                  key={service.title}
                  ref={serviceReveal.ref}
                  className={`transition-all duration-700 ease-out ${
                    serviceReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-shadow duration-300">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                      <div className={`relative h-64 lg:h-auto ${!isEven ? "lg:col-start-2" : ""}`}>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-contain p-4 bg-secondary/30"
                        />
                      </div>
                      <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{service.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section padding="large">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Complete Peace of Mind
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Whether you're a permanent resident, seasonal visitor, or property investor, our comprehensive property management services ensure your property is always maintained to the highest standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Single Property or Estate</h4>
                    <p className="text-muted-foreground">Tailored services for any size property portfolio</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Integrated Security</h4>
                    <p className="text-muted-foreground">Combined with our professional security services</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Trusted Local Team</h4>
                    <p className="text-muted-foreground">Experienced professionals who know Paphos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center">
                <HomeIcon className="h-32 w-32 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Stress-Free Property Care</h3>
                <p className="text-muted-foreground">
                  Let us handle everything while you enjoy your time in Cyprus or abroad
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Information */}
      <Section background="dark" padding="large">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Property Management Office
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-primary-foreground">Address</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Shop 2, Sofia Court<br />
                    Kissonerga, Paphos 8574
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-primary-foreground">Phone</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    <a href="tel:99381262" className="hover:text-accent transition-colors">9938 1262</a><br />
                    <a href="tel:97673112" className="hover:text-accent transition-colors">9767 3112 (Emergency)</a>
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-primary-foreground">Email</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    <a href="mailto:pm@twenty4sevencyprus.com" className="hover:text-accent transition-colors">
                      pm@twenty4sevencyprus.com
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-primary-foreground/80 mb-2">Business Hours</p>
              <p className="text-primary-foreground">
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Wednesday: 9:00 AM - 1:00 PM<br />
                Saturday & Sunday: Closed
              </p>
              <p className="text-primary-foreground/60 text-sm mt-4">
                24-hour emergency service available
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="large">
        <div className="container">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Simplify Your Property Management?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your property management needs and discover how we can help maintain your property to the highest standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={getWhatsAppLink("property-management")} target="_blank" rel="noopener noreferrer">Get Free Quote</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">View Security Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
