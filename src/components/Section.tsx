import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "grey" | "dark";
  padding?: "normal" | "large" | "none";
}

export default function Section({
  children,
  className = "",
  id,
  background = "white",
  padding = "normal",
}: SectionProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const bgClasses = {
    white: "bg-background",
    grey: "bg-secondary/30",
    dark: "bg-primary text-primary-foreground",
  };

  const paddingClasses = {
    none: "",
    normal: "py-16 md:py-24",
    large: "py-24 md:py-32",
  };

  return (
    <section
      ref={ref}
      id={id}
      className={`${bgClasses[background]} ${paddingClasses[padding]} ${className} transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </section>
  );
}
