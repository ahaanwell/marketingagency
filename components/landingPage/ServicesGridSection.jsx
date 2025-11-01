"use client";
import React from "react";
import {
  Monitor,
  Smartphone,
  Tv,
  Shield,
  Wifi,
  Video,
  Settings,
  Home,
} from "lucide-react";

// Small reusable card component
const ServiceCard = ({ icon, title, link }) => {
  return (
    <a
      href="/services"
      className="group flex items-center gap-4 bg-white/95 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white"
    >
      <div className="flex-shrink-0 text-blue-600 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
        {title}
      </h3>
    </a>
  );
};

export default function ServicesGridSection() {
  const services = [
    { icon: <Monitor className="w-7 h-7" />, title: "Computers & Printers", link: "#computers-printers" },
    { icon: <Wifi className="w-7 h-7" />, title: "WiFi & Networking", link: "#wifi-networking" },
    { icon: <Smartphone className="w-7 h-7" />, title: "Mobile Devices", link: "#mobile-devices" },
    { icon: <Video className="w-7 h-7" />, title: "Audio & Video", link: "#audio-video" },
    { icon: <Tv className="w-7 h-7" />, title: "TV Mounting", link: "#tv-mounting" },
    { icon: <Settings className="w-7 h-7" />, title: "Smart Home", link: "#smart-home" },
    { icon: <Shield className="w-7 h-7" />, title: "Home Security", link: "#home-security" },
    { icon: <Home className="w-7 h-7" />, title: "Around the Home", link: "#around-home" },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            How can we help?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Choose from our wide range of technical and smart home services.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
