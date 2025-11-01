"use client";
import React from "react";

const ServiceCard = ({ title, image }) => (
  <div className="group relative bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-2 cursor-pointer">
    {/* Image Section */}
    <div className="overflow-hidden h-52 p-4 bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    {/* Content */}
    <div className="p-6 text-center">
      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
      <div className="w-10 h-1 bg-white/40 mx-auto rounded-full mb-3 group-hover:bg-white/70 transition-all duration-300"></div>
      <p className="text-blue-100 text-sm leading-relaxed">
        Professional and reliable service solutions tailored to your needs.
      </p>
    </div>
  </div>
);

export default function ServicesShowcaseSection() {
  const services = [
    {
      title: "Computer Services",
      image: "/computerservice.jpg",
    },
    {
      title: "Printer Services",
      image: "/printerservice.avif",
    },
    {
      title: "Security Services",
      image: "/securityservice.jpeg",
    },
    {
      title: "Peripheral Support",
      image: "/peripheralservice.jpeg",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Do What You Do Best — We’ll Handle The Rest
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Let our expert technical team remove every technical hurdle so you
            can focus on what matters most.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
