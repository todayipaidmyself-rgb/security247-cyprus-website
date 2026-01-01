import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function VideoHero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Preload video in background
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Poster Image - Shows immediately, hides when video loads */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backgroundImage: 'url(/videos/hero-video-poster.jpg)' }}
      />

      {/* Video Background - Loads in background, fades in when ready */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={handleVideoLoad}
      >
        <source src="/videos/hero-video-final.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 container h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
          Professional Security Solutions
          <br />
          <span className="text-primary">Protecting Cyprus Since 2012</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl drop-shadow-md">
          Advanced alarm systems, CCTV installation, and 24/7 monitoring services
          for homes and businesses across Paphos and beyond.
        </p>
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
  );
}
