import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Shield,
  Award,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const heroReveal = useScrollReveal({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = new FormData(e.currentTarget);
    payload.set("source_page", window.location.pathname);
    payload.set("lead_type", "website_enquiry");

    try {
      const res = await fetch("https://formspree.io/f/xkovwqwp", {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" }
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Thank you! We'll contact you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      toast.error("There was a problem sending your message. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Agiou Stefanou Street",
        "Lemba, Paphos 8260",
        "Cyprus"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "Office: 26 323204",
        "Mobile: 97 673112",
        "Emergency: 24/7 Available"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@twenty4sevencyprus.com",
        "Response within 24 hours"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Mon-Fri: 9:00 AM - 5:00 PM",
        "Sat-Sun: Closed",
        "Emergency: 24/7"
      ]
    }
  ];

  const trustSignals = [
    {
      icon: Shield,
      text: "Licensed by Cyprus Police"
    },
    {
      icon: Award,
      text: "20+ Years Experience"
    },
    {
      icon: CheckCircle2,
      text: "Fully Insured"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contact 247 Security Cyprus - Get Free Quote for Security Systems"
        description="Contact 247 Security in Paphos for free quotes on alarm systems, CCTV, monitoring, and property management. Call 26 323204 or email info@twenty4sevencyprus.com"
        keywords="contact security Cyprus, free security quote Paphos, alarm quote Cyprus, CCTV quote, security consultation Cyprus"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/ai-smart-security.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container py-20 md:py-28">
          <div
            ref={heroReveal.ref}
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
              heroReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact 247 Security
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Get a free quote or consultation for your security needs in Cyprus
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <Section padding="large">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Get Free Quote</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our security experts will contact you within 24 hours to discuss your requirements.
              </p>
              
              <form
                method="POST"
                action="https://formspree.io/f/xkovwqwp"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+357 99 123456"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a service...</option>
                    <option value="home-alarm">Home Alarm System</option>
                    <option value="business-alarm">Business Alarm System</option>
                    <option value="cctv">CCTV Installation</option>
                    <option value="monitoring">24/7 Monitoring</option>
                    <option value="keyholding">Keyholding Services</option>
                    <option value="vacant-property">Vacant Property Checks</option>
                    <option value="property-management">Property Management</option>
                    <option value="other">Other / Multiple Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your security needs..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground">
                  By submitting this form, you agree to be contacted by 247 Security regarding your enquiry.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Prefer to contact us directly? Use any of the methods below to reach our team.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const cardReveal = useScrollReveal({ threshold: 0.1 });

                  return (
                    <div
                      key={info.title}
                      ref={cardReveal.ref}
                      className={`transition-all duration-700 ease-out ${
                        cardReveal.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <Card className="border-border/50">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-muted-foreground text-sm">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>

              {/* Trust Signals */}
              <div className="mt-8 p-6 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  {trustSignals.map((signal, index) => {
                    const Icon = signal.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-foreground/80">{signal.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="grey" padding="large">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Find Us in Paphos</h2>
            <p className="text-muted-foreground">
              Located in Lemba, Paphos - serving all of Cyprus
            </p>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden" style={{ height: "400px" }}>
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                <p className="font-semibold">Agiou Stefanou Street</p>
                <p>Lemba, Paphos 8260, Cyprus</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Emergency Contact */}
      <Section background="dark" padding="large">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Phone className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              For urgent security matters or emergency response, call our 24/7 hotline
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg">
                <a href="tel:97673112">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 97 673112
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground text-lg">
                <a href="tel:26323204">
                  Office: 26 323204
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
