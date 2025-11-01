"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Single Testimonial Card
function TestimonialCard({ testimonial }) {
  return (
    <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl text-center">
      {/* Quote Icon */}
      <Quote className="absolute top-6 right-6 w-16 h-16 text-yellow-400 opacity-20" />

      {/* Avatar */}
      <div className="flex justify-center mb-3">
        <div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="text-2xl font-bold text-white mb-3">{testimonial.name}</h3>

      {/* Testimonial Text */}
      <p className="text-lg text-white/90 leading-relaxed flex items-center justify-center">
        {testimonial.text}
      </p>
    </div>
  );
}

// Navigation Button
function NavButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110"
      aria-label={direction === "prev" ? "Previous testimonial" : "Next testimonial"}
    >
      {direction === "prev" ? (
        <ChevronLeft className="w-6 h-6" />
      ) : (
        <ChevronRight className="w-6 h-6" />
      )}
    </button>
  );
}

// Main Testimonials Section
export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "David Jones",
      text: "Jason was very friendly and knowledgeable. He ran scans and gave us recommendations to improve our computer performance.",
      avatar: "https://ui-avatars.com/api/?name=David+Jones&background=0D8ABC&color=fff&size=128",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      text: "Excellent service! The technician solved my printer issues quickly. Highly recommend their services.",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Mitchell&background=0D8ABC&color=fff&size=128",
    },
    {
      id: 3,
      name: "Michael Brown",
      text: "Fast and reliable support. They helped me set up my home office network and everything works perfectly.",
      avatar: "https://ui-avatars.com/api/?name=Michael+Brown&background=0D8ABC&color=fff&size=128",
    },
    {
      id: 4,
      name: "NIMAL SAMARAWICKRAMA",
      text: "Jason was very friendly and knowledgeable. He ran scans and gave us recommendations to improve our computer performance.",
      avatar: "https://ui-avatars.com/api/?name=David+Jones&background=0D8ABC&color=fff&size=128",
    },
    {
      id: 5,
      name: "Mitchell Jack",
      text: "Excellent service! The technician solved my printer issues quickly. Highly recommend their services.",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Mitchell&background=0D8ABC&color=fff&size=128",
    },
    {
      id: 6,
      name: "Michael Rown",
      text: "Fast and reliable support. They helped me set up my home office network and everything works perfectly.",
      avatar: "https://ui-avatars.com/api/?name=Michael+Brown&background=0D8ABC&color=fff&size=128",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
            TESTIMONIAL
          </h2>
        </div>

        {/* Testimonial Card */}
        <TestimonialCard testimonial={testimonials[currentIndex]} />

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <NavButton direction="prev" onClick={prevTestimonial} />
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? "bg-yellow-400 w-8" : "bg-white/40 hover:bg-white/60"
                }`}
              ></span>
            ))}
          </div>
          <NavButton direction="next" onClick={nextTestimonial} />
        </div>

        {/* Footer Info */}
        <div className="text-center mt-8">
          <p className="text-blue-200 text-sm">
            Showing {currentIndex + 1} of {testimonials.length} testimonials
          </p>
        </div>
      </div>
    </section>
  );
}
