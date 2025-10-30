"use client";
import { useState, useEffect, useRef } from "react";

function CountersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const counters = [
    { number: 3000, suffix: "+", label: "Projects Completed" },
    { number: 250, suffix: "+", label: "Happy Clients" },
    { number: 8, suffix: "+", label: "Years Experience" },
    { number: 30, suffix: "+", label: "Team Members" },
  ];

  // Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [isVisible]);

  // Counter Animation (starts when visible)
  useEffect(() => {
    if (!isVisible) return;

    counters.forEach((counter, i) => {
      let start = 0;
      const end = counter.number;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCounts((prev) => {
            const updated = [...prev];
            updated[i] = end;
            return updated;
          });
          clearInterval(timer);
        } else {
          setCounts((prev) => {
            const updated = [...prev];
            updated[i] = Math.floor(start);
            return updated;
          });
        }
      }, 16);
    });
  }, [isVisible]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Decorative Gradient + Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.03),transparent_50%)]"></div>

      <div className="relative container mx-auto px-6 lg:px-12 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Our Achievements
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-light tracking-wide max-w-lg mx-auto">
            Numbers that define our commitment, experience, and success over the years.
          </p>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-center">
          {counters.map((counter, i) => (
            <div
              key={i}
              className={`group transition-all duration-700 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Number */}
              <div className="text-5xl md:text-6xl font-semibold text-black tracking-tight mb-2">
                {counts[i].toLocaleString()}
                {counter.suffix}
              </div>

              {/* Label */}
              <div className="text-gray-600 text-sm md:text-base font-light tracking-wide">
                {counter.label}
              </div>

              {/* Accent Line */}
              <div className="mt-3 mx-auto w-0 group-hover:w-12 h-[1.5px] bg-black/60 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional decorative blur gradient */}
      <div className="absolute -bottom-20 left-0 right-0 h-40 bg-gradient-to-t from-black/5 to-transparent blur-2xl pointer-events-none"></div>
    </section>
  );
}

export default CountersSection;
