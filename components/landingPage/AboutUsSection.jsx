"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// ✅ Reusable Accordion Item Component
const FeatureAccordionItem = ({ number, title, description, details, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-blue-600 min-w-[40px]">{number}</span>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
            {!isOpen && <p className="text-sm text-gray-600">{description}</p>}
          </div>
        </div>
        <div className="text-blue-600">{isOpen ? <ChevronUp /> : <ChevronDown />}</div>
      </button>

      {/* Accordion Content */}
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 py-3 border-t border-gray-100 bg-blue-50/50" : "max-h-0"
        }`}
      >
        <p className="text-gray-700 leading-relaxed text-sm">{details}</p>
      </div>
    </div>
  );
};

// ✅ Main Section
export default function AboutUsSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      number: "01",
      title: "Remote, Secure Support",
      description: "Certified engineers ready to troubleshoot your printer issues.",
      details:
        "Our expert technicians provide instant remote support through secure connections — so you get solutions quickly without leaving your home or office.",
    },
    {
      number: "02",
      title: "Diagnosis, Repair & Optimization",
      description: "Complete diagnostic and performance optimization services.",
      details:
        "We identify and fix hardware/software issues efficiently, and fine-tune your systems for the best possible performance.",
    },
    {
      number: "03",
      title: "Virus & Malware Removal",
      description: "Keep your devices protected from digital threats.",
      details:
        "We eliminate all types of malware, trojans, and viruses while implementing long-term protection measures for future safety.",
    },
    {
      number: "04",
      title: "Easy Fix – Instant Resolution",
      description: "Quick, effective solutions for everyday technical issues.",
      details:
        "Our team offers fast, reliable fixes for common problems — keeping you productive without unnecessary downtime.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="max-w-7xl mx-auto ">
        <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-snug">
              Who We Are & What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Livexcellence. is a leading IT brand providing continuous
              global support to consumers and businesses. Our mission is to make
              technology simple and accessible through expert solutions and
              reliable service for all your computing needs.
            </p>
          </div>
      <div className="grid lg:grid-cols-2 gap-12 justify-center items-center">
        {/* Left: Images */}
          <div className="flex justify-center">
            <img
              src="/codinglaptop.jpg"
              alt="Dell laptop"
              className="w-full object-contain rounded-2xl"
            />
          </div>

        {/* Right: Text + Accordion */}
        <div className="">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <FeatureAccordionItem
                key={index}
                {...feature}
                isOpen={activeIndex === index}
                onToggle={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
