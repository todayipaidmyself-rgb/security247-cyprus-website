import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Eye,
  Smartphone,
  Moon,
  Zap,
  Cloud,
  Shield,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { Link } from "wouter";

export default function CCTV() {
  const heroReveal = useScrollReveal({ threshold: 0.2 });

  const features = [
    {
      icon: Eye,
      title: "Crystal-Clear HD Footage",
      description: "High-definition cameras with 4K options provide exceptional image quality for accurate identification and evidence collection."
    },
    {
      icon: Smartphone,
      title: "Remote Viewing",
      description: "Monitor your property from anywhere in the world using our mobile app. View live footage and receive instant alerts on your smartphone."
    },
    {
      icon: Moon,
      title: "Night Vision",
      description: "Advanced infrared technology ensures clear footage even in complete darkness, providing 24/7 surveillance coverage."
    },
    {
      icon: Zap,
      title: "Motion Detection",
      description: "Intelligent motion sensors trigger instant alerts and recording, ensuring you never miss important events at your property."
    },
    {
      icon: Cloud,
      title: "Cloud & Local Storage",
      description: "Flexible storage options with both cloud backup and local recording ensure your footage is always secure and accessible."
    },
    {
      icon: Shield,
      title: "Weatherproof Design",
      description: "Outdoor cameras built to withstand Cyprus weather conditions, from intense summer heat to winter rain."
    }
  ];

  const benefits = [
    "Professional site survey and system design",
    "Expert installation by certified technicians",
    "Integration with existing alarm systems",
    "Scalable solutions from single cameras to complete coverage",
    "Ongoing maintenance and technical support",
    "Compliance with Cyprus data protection regulations"
  ];

  const brands = [
    "HIK Vision",
    "Pro Vision",
    "Ajax",
    "Dahua",
    "Uniview"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="CCTV Installation Cyprus - HD Security Cameras with Remote Viewing"
        description="Professional CCTV installation in Paphos and Cyprus. HD cameras, night vision, mobile app viewing, motion detection. HIK Vision, Pro Vision. Free site survey and quote."
        keywords="CCTV Cyprus, security cameras Paphos, CCTV installation Cyprus, HD cameras, night vision CCTV, remote viewing cameras, HIK Vision Cyprus, surveillance systems"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/ai-cctv-closeup.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10 py-20 md:py-28">
          <div
            ref={heroReveal.ref}
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
              heroReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              CCTV Systems Cyprus
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Professional CCTV installation and maintenance with remote viewing capabilities and crystal-clear HD footage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground">
                <a href="tel:26323204">Call 26 323204</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <Section padding="large">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Advanced CCTV Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our CCTV systems combine cutting-edge technology with reliable performance to protect your property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const cardReveal = useScrollReveal({ threshold: 0.1 });

              return (
                <div
                  key={feature.title}
                  ref={cardReveal.ref}
                  className={`transition-all duration-700 ease-out ${
                    cardReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="h-full border-border/50 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Coverage Options */}
      <Section background="grey" padding="large">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Indoor & Outdoor Coverage
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our CCTV systems provide comprehensive coverage for both residential and commercial properties. Whether you need to monitor entry points, parking areas, or interior spaces, we design custom solutions tailored to your specific security requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Outdoor Cameras</h4>
                    <p className="text-muted-foreground">Weatherproof cameras for perimeter security, driveways, and parking areas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Indoor Cameras</h4>
                    <p className="text-muted-foreground">Discreet cameras for monitoring interior spaces, entrances, and valuable assets</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">PTZ Cameras</h4>
                    <p className="text-muted-foreground">Pan-tilt-zoom cameras for flexible coverage of large areas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <img
                src="/images/ai-cctv-closeup.jpg"
                alt="Professional CCTV camera installation"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/ai-control-room.jpg"
                  alt="24/7 CCTV monitoring control room"
                  className="rounded-lg shadow-lg w-full"
                />
                <img
                  src="/images/ai-smart-security.jpg"
                  alt="Smart CCTV mobile app viewing"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mobile Monitoring */}
      <Section padding="large">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
                <Smartphone className="h-32 w-32 text-primary mx-auto mb-4" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Mobile App Control</h3>
                  <p className="text-muted-foreground">Available for iOS and Android</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Monitor Your Property from Anywhere
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our mobile app gives you complete control over your CCTV system, no matter where you are in the world. View live footage, review recordings, and receive instant alerts directly on your smartphone.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Live streaming from all cameras</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Instant motion detection alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Playback and download recordings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Multi-device access for family members</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* What Makes Us Different */}
      <Section background="dark" padding="large">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Makes 247 Security Different?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Leading Equipment Brands</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {brands.map((brand) => (
                  <div key={brand} className="px-6 py-3 bg-primary-foreground/10 rounded-lg">
                    <span className="text-primary-foreground/90 font-medium">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Installation & Support */}
      <Section padding="large">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">System Not Working Correctly?</h3>
                  <p className="text-muted-foreground mb-4">
                    We provide expert CCTV repair and maintenance services. Whether you have an existing system that needs attention or want to upgrade your current setup, our experienced technicians can help.
                  </p>
                  <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <a href="tel:26323204">Call for Support</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="grey" padding="large">
        <div className="container">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Install CCTV at Your Property?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free site survey and quotation. Our experts will design a CCTV system perfectly suited to your security needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
