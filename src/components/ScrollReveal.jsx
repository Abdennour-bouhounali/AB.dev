import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = "", direction = "up" }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getDirectionClass = () => {
    if (direction === "left") return "translate-x-[-15px]";
    if (direction === "right") return "translate-x-[15px]";
    return "translate-y-[15px]"; // Default "up"
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible 
          ? "opacity-100 translate-x-0 translate-y-0" 
          : `opacity-0 ${getDirectionClass()}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
