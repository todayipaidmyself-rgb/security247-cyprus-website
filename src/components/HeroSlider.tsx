import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

interface Slide {
  id: number;
  type: "logo" | "service";
  backgroundImage: string;
  logo?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    type: "logo",
    backgroundImage: "/images/hero-property-security.jpg",
    logo: "/247logo.png",
    subtitle: "24/7 Private Security Services Across Cyprus",
    ctaText: "Request a Security Survey",
    ctaLink: "/contact"
  },
  {
    id: 2,
    type: "service",
    backgroundImage: "/images/hero-alarm-tech.jpg",
    title: "Monitored Alarm Systems",
    description: "State-of-the-art alarm systems with 24/7 professional monitoring and rapid response across Cyprus",
    ctaText: "Explore Alarm Systems",
    ctaLink: "/services"
  },
  {
    id: 3,
    type: "service",
    backgroundImage: "/images/hero-cctv-tech.jpg",
    title: "CCTV & Remote Viewing",
    description: "HD security cameras with mobile app access, night vision, and motion detection for complete peace of mind",
    ctaText: "View CCTV Solutions",
    ctaLink: "/services/cctv"
  },
  {
    id: 4,
    type: "service",
    backgroundImage: "/images/hero-smart-home.jpg",
    title: "Business & Commercial Security",
    description: "Comprehensive security solutions tailored for businesses, retail, and commercial properties across Cyprus",
    ctaText: "Secure Your Business",
    ctaLink: "/services"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Mark as loaded after first render for logo animation
  useEffect(() => {
    setHasLoaded(true);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const slide = slides[currentSlide];
  const isFirstSlide = currentSlide === 0;

  return (
    <section className="relative w-full h-screen md:h-[90vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${slide.backgroundImage}')`,
            filter: isFirstSlide ? "blur(8px)" : "blur(4px)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Slide Content */}
      <div className="relative z-10 container h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          {slide.type === "logo" ? (
            // Slide 1: Logo with Animation
            <>
              <div
                className={`mb-8 transition-all duration-1500 ease-out relative ${
                  hasLoaded && isFirstSlide
                    ? "opacity-100 scale-100 rotate-0"
                    : isFirstSlide
                    ? "opacity-0 scale-110 rotate-12"
                    : "opacity-100 scale-100 rotate-0"
                }`}
                style={{
                  transitionProperty: "opacity, transform",
                  transitionDuration: "1500ms"
                }}
              >
                {/* Premium glow effect */}
                <div 
                  className={`absolute inset-0 bg-accent/30 blur-3xl transition-opacity duration-2000 ${
                    hasLoaded && isFirstSlide ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    animation: hasLoaded && isFirstSlide ? "pulse-glow 3s ease-in-out" : "none"
                  }}
                />
                <img
                  src={slide.logo}
                  alt="247 Security Cyprus"
                  className="w-full max-w-md mx-auto h-auto drop-shadow-2xl relative z-10"
                />
              </div>
              <h2
                className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-foreground mb-8 transition-all duration-1000 delay-300 ${
                  hasLoaded && isFirstSlide
                    ? "opacity-100 translate-y-0"
                    : isFirstSlide
                    ? "opacity-0 translate-y-8"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {slide.subtitle}
              </h2>
              <div
                className={`transition-all duration-1000 delay-500 ${
                  hasLoaded && isFirstSlide
                    ? "opacity-100 translate-y-0"
                    : isFirstSlide
                    ? "opacity-0 translate-y-8"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
                >
                  <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                </Button>
              </div>
            </>
          ) : (
            // Slides 2-4: Service Content
            <>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 transition-all duration-700 ${
                  isAnimating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                }`}
              >
                {slide.title}
              </h1>
              <p
                className={`text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
                  isAnimating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                }`}
              >
                {slide.description}
              </p>
              <div
                className={`transition-all duration-700 delay-200 ${
                  isAnimating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                }`}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
                >
                  <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground p-3 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground p-3 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all disabled:cursor-not-allowed ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
