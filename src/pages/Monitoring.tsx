import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import TwoStageHero from "@/components/TwoStageHero";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Clock,
  Shield,
  Phone,
  Car,
  FileText,
  AlertCircle,
  CheckCircle2,
  Users
} from "lucide-react";
import { Link } from "wouter";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Monitoring() {
  const heroReveal = useScrollReveal({ threshold: 0.2 });

  const process = [
    {
      step: "1",
      title: "Alarm Activation",
      description: "Your alarm system detects an intrusion or emergency and sends an immediate signal to our monitoring center."
    },
    {
      step: "2",
      title: "Instant Alert",
      description: "Our monitoring team receives the alert within seconds and begins the verification process."
    },
    {
      step: "3",
      title: "Contact & Verify",
      description: "We immediately contact you and your designated keyholders to verify the alarm activation."
    },
    {
      step: "4",
      title: "Response Dispatch",
      description: "Our licensed security guards are dispatched in branded response vehicles to attend your property."
    },
    {
      step: "5",
      title: "Physical Attendance",
      description: "Guards conduct a thorough inspection of your property and secure the premises if necessary."
    },
    {
      step: "6",
      title: "Documentation & Report",
      description: "A detailed report is prepared documenting the incident, actions taken, and property status."
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7/365 Monitoring",
      description: "Our monitoring center never closes. We're watching over your property every hour of every day, including holidays."
    },
    {
      icon: Shield,
      title: "Licensed Security Guards",
      description: "All response personnel are fully licensed by Cyprus Police and trained in emergency response procedures."
    },
    {
      icon: Car,
      title: "Rapid Response Vehicles",
      description: "Branded response vehicles are strategically positioned across Paphos for immediate attendance."
    },
    {
      icon: FileText,
      title: "Detailed Documentation",
      description: "Every alarm event is logged and documented with comprehensive reports for your records."
    }
  ];

  const stats = [
    { value: "<5", label: "Minutes Average Response Time" },
    { value: "24/7", label: "Monitoring Coverage" },
    { value: "100%", label: "Licensed Personnel" },
    { value: "1000+", label: "Properties Monitored" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="24/7 Alarm Monitoring Cyprus - Professional Security Response"
        description="Professional 24/7 alarm monitoring in Cyprus with licensed security guards and rapid response. Immediate attendance, keyholding services, and detailed incident reports."
        keywords="24/7 monitoring Cyprus, alarm monitoring Paphos, security response Cyprus, keyholding Cyprus, alarm response service, professional monitoring"
      />
      <Header />

      {/* Hero Section */}
      <TwoStageHero 
        videoSrc="/videos/monitoring-hero-video.mp4"
        posterSrc="/videos/monitoring-hero-poster.jpg"
        title="24/7 Monitoring Cyprus"
        subtitle="Professional alarm monitoring with immediate contact and physical response to protect your property around the clock"
        showButtons={false}
      />

      {/* How It Works */}
      <Section padding="large">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How Our Monitoring Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From alarm activation to resolution, our professional team manages every step of the emergency response process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => {
              const cardReveal = useScrollReveal({ threshold: 0.1 });

              return (
                <div
                  key={item.step}
                  ref={cardReveal.ref}
                  className={`transition-all duration-700 ease-out ${
                    cardReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="h-full border-border/50 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section background="grey" padding="large">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const featureReveal = useScrollReveal({ threshold: 0.1 });

              return (
                <div
                  key={feature.title}
                  ref={featureReveal.ref}
                  className={`text-center transition-all duration-700 ease-out ${
                    featureReveal.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section padding="large">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
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
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Contract Options */}
      <Section background="dark" padding="large">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Flexible Monitoring Contracts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Year-Round Protection</h3>
                  <p className="text-primary-foreground/80 mb-6">
                    365 days of continuous monitoring for permanent residents and year-round property owners.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90">24/7 monitoring coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90">Unlimited alarm responses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90">Priority support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Seasonal Monitoring</h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Flexible monitoring for specific periods when you're away on holiday or business trips.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90">Activate when needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90">Same response service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90">Cost-effective solution</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Keyholding Integration */}
      <Section padding="large">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Keyholding Services
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We can act as keyholders or meet with your designated keyholders at your property. This removes the burden placed on friends and neighbours of having to respond to what could potentially be a dangerous situation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Secure key storage at our facility</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Emergency property access</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Coordination with emergency services</span>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/services/keyholding">Learn About Keyholding</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/KEY.jpg"
                alt="Professional keyholding service"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Compatible Systems */}
      <Section background="grey" padding="large">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AlertCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Don't Have a 247 Security Alarm?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Your alarm doesn't have to be one of our systems. Subject to survey and your alarm being suitable, we can provide the same level of monitoring service for existing alarm systems.
            </p>
            <p className="text-muted-foreground mb-8">
              Records are kept on a continual basis regarding any alarm events and what actions we take to rectify the issues.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href={getWhatsAppLink("monitoring")} target="_blank" rel="noopener noreferrer">Request Compatibility Check</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="large">
        <div className="container">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Get Peace of Mind with Professional Monitoring
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your monitoring needs and get a free quote for 24/7 professional alarm monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={getWhatsAppLink("general")} target="_blank" rel="noopener noreferrer">Get Free Quote</a>
              </Button>
              <Button asChild size="lg" variant="outline">
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
