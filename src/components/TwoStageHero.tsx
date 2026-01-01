import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface TwoStageHeroProps {
  videoSrc?: string;
  posterSrc?: string;
  title?: string;
  subtitle?: string;
  showButtons?: boolean;
}

export default function TwoStageHero({
  videoSrc = "/videos/hero-video-final.mp4",
  posterSrc = "/videos/hero-poster.jpg",
  title = "Professional Security Solutions",
  subtitle = "Advanced alarm systems, CCTV installation, and 24/7 monitoring services for homes and businesses across Paphos and beyond.",
  showButtons = true
}: TwoStageHeroProps = {}) {
  const [activePanel, setActivePanel] = useState<"intro" | "video">("intro");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const loopTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Start preloading video in background
    if (videoRef.current) {
      videoRef.current.load();
    }

    // Infinite loop system
    const startLoop = () => {
      // Clear any existing timer
      if (loopTimerRef.current) {
        clearTimeout(loopTimerRef.current);
      }

      // Intro panel shows for 3 seconds
      setActivePanel("intro");

      loopTimerRef.current = setTimeout(() => {
        // Switch to video panel
        setActivePanel("video");
        
        // Restart video from beginning for clean loop
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {
            // Autoplay failed, silently continue
          });
        }

        // Video plays for 12 seconds, then loop back to intro
        loopTimerRef.current = setTimeout(() => {
          startLoop(); // Restart the cycle
        }, 12000); // 12 seconds for video
      }, 3000); // 3 seconds for intro
    };

    // Start the loop once video is loaded (or after a short delay)
    const initTimer = setTimeout(() => {
      startLoop();
    }, 100);

    return () => {
      if (loopTimerRef.current) {
        clearTimeout(loopTimerRef.current);
      }
      clearTimeout(initTimer);
    };
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* INTRO PANEL: Static Logo with CCTV Background */}
      <div
        className={`absolute inset-0 z-20 transition-opacity duration-[1500ms] ${
          activePanel === "intro" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* CCTV Background - WebP with JPG fallback */}
        <picture>
          <source srcSet="/images/hero-static-bg.webp" type="image/webp" />
          <img
            src="/images/hero-static-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
        </picture>
        
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Logo and Tagline - Centered */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          {/* Logo with animation - WebP with PNG fallback */}
          <picture>
            <source srcSet="/images/247logo.webp" type="image/webp" />
            <img
              src="/images/247logo-optimized.png"
              alt="247 Security Cyprus"
              className="w-64 md:w-80 lg:w-96 h-auto mb-6 animate-logo-intro-loop"
              loading="eager"
            />
          </picture>
          
          {/* Tagline */}
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-light tracking-wide animate-tagline-fade-loop">
            Quiet protection. Always watching.
          </p>
        </div>
      </div>

      {/* VIDEO PANEL: Security Footage */}
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-[1500ms] ${
          activePanel === "video" ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="metadata"
          poster={posterSrc}
          onLoadedData={handleVideoLoad}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content - Animated with delay */}
        <div 
          className={`relative z-10 container h-full flex flex-col justify-center items-center text-center text-white px-4 transition-opacity duration-1000 ${
            activePanel === "video" ? "animate-video-text" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
            {title}
            <br />
            <span className="text-primary">Protecting Cyprus Since <span className="text-white">2012</span></span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl drop-shadow-md">
            {subtitle}
          </p>
          {showButtons && (
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white text-lg px-8 py-6 backdrop-blur-sm"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
          )}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
