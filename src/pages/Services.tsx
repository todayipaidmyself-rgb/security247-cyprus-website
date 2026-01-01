import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import TwoStageHero from "@/components/TwoStageHero";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Shield,
  Eye,
  Clock,
  Key,
  Home as HomeIcon,
  Building2,
  UserCheck,
  Car,
  CheckCircle2
} from "lucide-react";
import { Link } from "wouter";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Services() {
  const heroReveal = useScrollReveal({ threshold: 0.2 });

  const services = [
    {
      icon: Shield,
      title: "Home Alarms",
      description: "Advanced burglar alarm systems designed to detect and alert potential intrusions. Professional installation with leading brands including Ajax, DSC, Visonic, and Jablotron.",
      features: [
        "Wireless & wired alarm options",
        "Pet-friendly motion sensors",
        "Smart home integration",
        "Mobile app control",
        "Battery backup systems"
      ],
      href: "/services/alarms",
      image: "/images/service-alarm-systems.webp"
    },
    {
      icon: Building2,
      title: "Business Alarms",
      description: "Comprehensive commercial security systems tailored to protect your business premises, assets, and employees with professional-grade equipment.",
      features: [
        "Multi-zone protection",
        "Access control integration",
        "Fire & smoke detection",
        "Panic buttons",
        "Remote arming/disarming"
      ],
      href: "/services/business-alarms",
      image: "/images/service-business-alarms.webp"
    },
    {
      icon: Eye,
      title: "CCTV Systems",
      description: "Professional CCTV installation with crystal-clear HD footage and remote viewing capabilities from anywhere in the world via mobile app.",
      features: [
        "HD & 4K camera options",
        "Night vision capabilities",
        "Motion detection alerts",
        "Cloud & local storage",
        "Indoor & outdoor cameras"
      ],
      href: "/services/cctv",
      image: "/images/service-cctv-systems.webp"
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-clock professional alarm monitoring with immediate contact and physical attendance to any alarm activation at your property.",
      features: [
        "365 days monitoring",
        "Immediate response",
        "Licensed security guards",
        "Documented reports",
        "Police liaison"
      ],
      href: "/monitoring",
      image: "/images/service-monitoring.webp"
    },
    {
      icon: Key,
      title: "Keyholding Services",
      description: "Secure keyholding with emergency response service and pre-booked tradesman access management for your property.",
      features: [
        "Secure key storage",
        "Emergency access",
        "Tradesman coordination",
        "Property preparation",
        "24/7 availability"
      ],
      href: "/services/keyholding",
      image: "/images/service-keyholding.webp"
    },
    {
      icon: HomeIcon,
      title: "Vacant Property Inspection",
      description: "Periodic property checks with detailed documented reports and photos while you're away, including remedial works planning.",
      features: [
        "Regular inspections",
        "Photo documentation",
        "Detailed reports",
        "Issue identification",
        "Maintenance coordination"
      ],
      href: "/services/vacant-property",
      image: "/images/service-vacant-property.webp"
    },
    {
      icon: UserCheck,
      title: "Security Guarding",
      description: "Physical security presence with fully licensed security guards to protect your property and provide peace of mind.",
      features: [
        "Licensed by Cyprus Police",
        "Trained professionals",
        "Visible deterrent",
        "Patrol services",
        "Incident response"
      ],
      href: "/services/guarding",
      image: "/images/service-security-guarding.webp"
    },
    {
      icon: Car,
      title: "Mobile Patrol",
      description: "Regular mobile patrol services with sign-written response vehicles for alarm activations and property security checks.",
      features: [
        "Branded vehicles",
        "Regular patrols",
        "Alarm response",
        "Property checks",
        "Documented visits"
      ],
      href: "/services/patrol",
      image: "/images/service-mobile-patrol.webp"
    }
  ];

  const benefits = [
    "Free alarm health check service",
    "Professional installation by certified technicians",
    "Leading marketplace equipment (Ajax, DSC, Visonic, HIK Vision)",
    "Comprehensive after-sales support",
    "24/7 emergency response available",
    "Full public and employee liability insurance"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Security Services Cyprus - Alarms, CCTV, Monitoring & More"
        description="Complete security solutions in Cyprus: home & business alarms, CCTV systems, 24/7 monitoring, keyholding, vacant property checks, and security guarding. Free consultations."
        keywords="security services Cyprus, alarm systems Paphos, CCTV Cyprus, security guarding, keyholding services, vacant property inspection Cyprus"
      />
      <Header />

      {/* Hero Section */}
      <TwoStageHero 
        videoSrc="/videos/services-hero-video.mp4"
        posterSrc="/videos/services-hero-poster.jpg"
        title="Security Solutions for Cyprus"
        subtitle="Comprehensive alarm systems, CCTV, monitoring, and security services for homes and businesses across Paphos"
      />

      {/* Services Grid */}
      <Section padding="large">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Security Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From installation to ongoing monitoring, we provide complete security solutions tailored to your needs
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
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{service.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="bg-primary hover:bg-primary/90 w-fit">
                          <Link href={service.href}>Learn More</Link>
                        </Button>
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
      <Section background="grey" padding="large">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              Why Choose 247 Security?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="large">
        <div className="container">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Need Help Choosing the Right Security Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our security experts are ready to assess your property and recommend the perfect security system for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={getWhatsAppLink("general")} target="_blank" rel="noopener noreferrer">Get Free Consultation</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:26323204">Call 26 323204</a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
