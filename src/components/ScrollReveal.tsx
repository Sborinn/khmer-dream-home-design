
import { useEffect, useRef, ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Re-observe when theme changes to ensure animations work correctly
  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef && currentRef.classList.contains("animate-fade-in")) {
      currentRef.classList.remove("animate-fade-in");
      currentRef.classList.add("opacity-0");
      
      setTimeout(() => {
        currentRef.classList.add("animate-fade-in");
      }, 100);
    }
  }, [theme]);

  return (
    <div
      ref={ref}
      className={`opacity-0 transition-opacity duration-500 ${className}`}
    >
      {children}
    </div>
  );
}
