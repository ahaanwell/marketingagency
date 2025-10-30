"use client";
import { useEffect, useRef, useState } from "react";

function WorkingProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Info Gathering",
      description: "Gathering Information about Project",
    },
    {
      number: "02",
      title: "Idea Planning",
      description: "Find best ideas for our project",
    },
    {
      number: "03",
      title: "Design Analysis",
      description: "Design analysis gathering make awesome and attractive design.",
    },
    {
      number: "04",
      title: "Testing & Lunch",
      description: "Testing project point to point then launch",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
              Our Working Process
            </h2>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Horizontal Line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-300"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative pt-16 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Green Dot on Timeline */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-lime-400 rounded-full border-2 border-white shadow-lg z-10"></div>

                {/* Large Background Number */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 text-8xl font-bold text-gray-100 select-none pointer-events-none">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative text-center pt-12">
                  <h3 className="text-xl font-bold text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkingProcessSection;