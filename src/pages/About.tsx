import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Shield, Target, Users } from "lucide-react";
import { Link } from "wouter";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function About() {
  const heroReveal = useScrollReveal({ threshold: 0.2 });

  const values = [
    {
      icon: Shield,
      title: "Our Mission",
      description: "Protecting your home, business and personal property is our speciality and what we are renowned for within the industry. We take great pride in working with local communities, authorities, and the Police Force to provide you with the utmost security and 'Peace of Mind'."
    },
    {
      icon: Target,
      title: "Our Aims",
      description: "We know how a thief or burglar goes about their business and we specialise and take great pleasure in deterring, detecting, and preventing them from targeting your home. We work closely with the local authorities and Police Force to be proactive in our approach to security."
    },
    {
      icon: Users,
      title: "Our Promise",
      description: "Customer care and after-sales service are paramount to us as a company and we will deliver on all we promise. We provide a full 'after-sales service' and work genuinely upon reputation and recognition within the community."
    },
    {
      icon: Award,
      title: "Our Delivery",
      description: "We assure you of our attention to your security needs with professional installation, ongoing maintenance, and 24/7 support. Our team of experienced technicians ensures every system operates at peak performance."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About 247 Security Cyprus - Leading Security Specialists Since 2012"
        description="Learn about 247 Security Cyprus, Paphos leading security company with 30+ years experience, 1000+ installations, and full Cyprus Police licensing. Professional alarm and CCTV services."
        keywords="about 247 security, security company Cyprus, Paphos security specialists, licensed security Cyprus, alarm company history"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/ai-control-room.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container py-20 md:py-28">
          <div
            ref={heroReveal.ref}
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
              heroReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About 247 Security Cyprus
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Leading security specialists in Paphos since 2012
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <Section padding="large">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Originally founded in 2012, we noticed a gap in the security market in Cyprus for high quality alarm and monitoring services. Having had 30+ years in the alarm and police services behind us, we were far too aware of how the industry in Cyprus was a long way behind what was and is possible in the UK.
                </p>
                <p>
                  24/7 Security was born with the specific aim of closing that gap to give all homeowners in Cyprus a level of security that inspires peace of mind and the comfort that their home and belongings were safe from the opportunistic thief that seem to be growing in Cyprus.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/about-us-image.jpg"
                alt="247 Security team"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Growth Section */}
      <Section background="grey" padding="large">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="/images/our-story.jpg"
                alt="Security installation"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Growth & Expansion
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Because of this, over the past 10+ years, 24/7 Security has gone from strength-to-strength. Since our inception, we have grown dramatically and now have in excess of 1000 installed sites, from simple alarm systems, right through to total security solutions, with CCTV, security barriers, high quality snap-safe locks and 24 hour, 7 day a week monitoring services that make our solutions second to none.
                </p>
                <p>
                  Combine this with our newly launched property and asset management services and you have a total solution for everything you need from security to a complete estate management solution, taking all of the stress out of your hands. Whether you have a single property or a substantial estate, 24/7 Security is your one-stop shop for all your property needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Values */}
      <Section padding="large">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Leading the Way in Security & Customer Satisfaction
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence drives everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const cardReveal = useScrollReveal({ threshold: 0.1 });

              return (
                <div
                  key={value.title}
                  ref={cardReveal.ref}
                  className={`transition-all duration-700 ease-out ${
                    cardReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-card border border-border/50 rounded-lg p-8 h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Experience & Credentials */}
      <Section background="dark" padding="large">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Experience & Credentials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2 text-accent">30+</div>
                <div className="text-primary-foreground/80">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 text-accent">1000+</div>
                <div className="text-primary-foreground/80">Installed Security Sites</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 text-accent">24/7</div>
                <div className="text-primary-foreground/80">Monitoring & Support</div>
              </div>
            </div>
            <div className="mt-12 text-center space-y-4">
              <p className="text-lg text-primary-foreground/90">
                Fully Licensed by Cyprus Police | Complete Public & Employee Liability Insurance
              </p>
              <p className="text-primary-foreground/80">
                Leading installers for Ajax, DSC, Visonic, Jablotron, Infinite Prime, HIK Vision & Pro Vision
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
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the difference that professional security services can make for your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={getWhatsAppLink("general")} target="_blank" rel="noopener noreferrer">Get Free Quote</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
