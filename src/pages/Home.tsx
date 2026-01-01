import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TwoStageHero from "@/components/TwoStageHero";
import SecurityQuiz from "@/components/SecurityQuiz";
import Section from "@/components/Section";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { 
  Shield, 
  Eye, 
  Clock, 
  Key, 
  Home as HomeIcon, 
  Building2, 
  CheckCircle2,
  Phone,
  Award,
  Users,
  TrendingUp
} from "lucide-react";
import { Link } from "wouter";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Home() {
  const heroReveal = useScrollReveal({ threshold: 0.2 });
  
  const services = [
    {
      image: "/images/service-alarm-systems.webp",
      title: "Alarm Systems",
      description: "Advanced burglar alarms with 24/7 monitoring to detect and alert potential intrusions instantly.",
      href: "/services/alarms"
    },
    {
      image: "/images/service-cctv-systems.webp",
      title: "CCTV Systems",
      description: "Professional CCTV installation with remote viewing capabilities from anywhere in the world.",
      href: "/services/cctv"
    },
    {
      image: "/images/service-monitoring.webp",
      title: "24/7 Monitoring",
      description: "Round-the-clock alarm monitoring with immediate contact and attendance to any activation.",
      href: "/monitoring"
    },
    {
      image: "/images/service-keyholding.webp",
      title: "Keyholding Services",
      description: "Secure keyholding with emergency response and pre-booked tradesman access management.",
      href: "/services/keyholding"
    },
    {
      image: "/images/service-vacant-property.webp",
      title: "Vacant Property Checks",
      description: "Periodic property inspections with detailed reports and photos while you're away.",
      href: "/services/vacant-property"
    },
    {
      image: "/images/service-property-management.webp",
      title: "Property Management",
      description: "Complete property management including cleaning, maintenance, garden and pool services.",
      href: "/property-management"
    }
  ];

  const stats = [
    { icon: Users, value: "1000+", label: "Installed Sites" },
    { icon: Award, value: "20+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: TrendingUp, value: "100%", label: "Customer Satisfaction" }
  ];

  const benefits = [
    "Fully licensed by Cyprus Police",
    "Full company public, product & employee liability insurance",
    "Over 20 years of security experience",
    "Professional installers and technicians",
    "Leading marketplace alarm & CCTV equipment",
    "24/7 emergency response service"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Professional Security Systems & Alarm Monitoring in Paphos"
        description="Leading security specialists in Cyprus offering alarm systems, CCTV installation, 24/7 monitoring, and property management services. Trusted by 1000+ clients since 2012."
        keywords="security Cyprus, alarm systems Paphos, CCTV installation Cyprus, 24/7 monitoring, property management Cyprus, home security Paphos, business alarms Cyprus"
      />
      <Header />
      
      {/* Two-Stage Hero: Static Logo Intro → Video */}
      <TwoStageHero />

      {/* Security Needs Quiz */}
      <Section padding="large" className="bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Find Your Perfect Security Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Answer 4 quick questions to get personalized security recommendations for your property
            </p>
          </div>
          <SecurityQuiz />
        </div>
      </Section>

      {/* Services Overview */}
      <Section padding="large">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Comprehensive Security Solutions for Cyprus
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From alarm systems to property management, we provide complete security and peace of mind for your home or business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const cardReveal = useScrollReveal({ threshold: 0.1 });
              
              return (
                <div
                  key={service.title}
                  ref={cardReveal.ref}
                  className={`transition-all duration-700 ease-out ${
                    cardReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                      <Link href={service.href} className="text-primary font-medium hover:underline inline-flex items-center">
                        Learn more →
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="grey" padding="large">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Why Choose 247 Security Cyprus?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                As one of the leading security specialists in Paphos, we take pride in delivering professional service, 
                customer care, and peace of mind to clients across Cyprus.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/why-choose-response-vehicle.jpg" 
                alt="Professional emergency response vehicle lighting system" 
                loading="lazy"
                className="rounded-lg shadow-xl w-full col-span-2"
              />
              <img 
                src="/images/why-choose-cctv-detail.jpg" 
                alt="Professional CCTV camera lens and infrared system" 
                loading="lazy"
                className="rounded-lg shadow-lg w-full"
              />
              <img 
                src="/images/why-choose-alarm-detail.jpg" 
                alt="Modern home security alarm keypad with backlit buttons" 
                loading="lazy"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section padding="large">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const statReveal = useScrollReveal({ threshold: 0.1 });
              
              return (
                <div
                  key={stat.label}
                  ref={statReveal.ref}
                  className={`text-center transition-all duration-700 ease-out ${
                    statReveal.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 24/7 Monitoring CTA */}
      <Section background="dark" padding="large">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              24/7 Professional Monitoring & Response
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 leading-relaxed">
              Our dedicated monitoring center operates around the clock, 365 days a year. 
              With immediate response vehicles and licensed security guards, we're always ready to protect your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/monitoring">Learn About Monitoring</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground">
                <a href={getWhatsAppLink("monitoring")} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section padding="large">
        <div className="container">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Secure Your Property?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote for your home or business security needs. 
              Our experts are ready to help you find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                <a href={getWhatsAppLink("general")} target="_blank" rel="noopener noreferrer">Get Free Quote</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <a href="tel:26323204">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 26 323204
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
