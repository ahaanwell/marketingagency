"use client";
import React, { useState } from "react";
import { Printer, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const servicesMenu = [
    { name: "Technical Support", href: "#technical-support" },
    { name: "Website Design & Development", href: "#website-design" },
    { name: "Mobile Application Development", href: "#mobile-app" },
    { name: "Digital Marketing", href: "#digital-marketing" },
    { name: "Social Media Marketing", href: "#social-media" },
  ];

  const productsMenu = [
    { name: "Printer", href: "#printer" },
    { name: "Antivirus", href: "#antivirus" },
  ];

  const pricingMenu = [
    { name: "Plans", href: "#plans" },
    { name: "Authorization", href: "#authorization" },
  ];

  const handleMouseEnter = (dropdown) => setOpenDropdown(dropdown);
  const handleMouseLeave = () => setOpenDropdown(null);

  const nLinks = "/services";

  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <button className="font-bold text-white text-lg tracking-widest">
              LIVEXCELLENCE
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <a href={nLinks} className="px-4 py-2 text-gray-800 hover:text-blue-600 font-medium transition-all duration-200">
              Home
            </a>
            <a href={nLinks} className="px-4 py-2 text-gray-800 hover:text-blue-600 font-medium transition-all duration-200">
              About
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-gray-800 hover:text-blue-600 font-medium transition-all">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "services" && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-gray-100 animate-slideDown">
                  {servicesMenu.map((item, i) => (
                    <a
                      key={i}
                      href={nLinks}
                      className="flex items-center justify-between px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all group"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-gray-800 hover:text-blue-600 font-medium transition-all">
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "products" && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-gray-100 animate-slideDown">
                  {productsMenu.map((item, i) => (
                    <a
                      key={i}
                      href={nLinks}
                      className="flex items-center justify-between px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all group"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("pricing")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-gray-800 hover:text-blue-600 font-medium transition-all">
                Pricing
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "pricing" && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-gray-100 animate-slideDown">
                  {pricingMenu.map((item, i) => (
                    <a
                      key={i}
                      href={nLinks}
                      className="flex items-center justify-between px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all group"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={openChat}
              className="ml-2 lp-primary-bg cursor-pointer text-white font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Chat Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          <a href={nLinks} className="block px-4 py-2 text-gray-800 font-medium hover:bg-blue-50 rounded-lg">
            Home
          </a>
          <a href={nLinks} className="block px-4 py-2 text-gray-800 font-medium hover:bg-blue-50 rounded-lg">
            About
          </a>

          {/* Services */}
          <div className="px-4 py-2 text-gray-800 font-semibold">Services</div>
          {servicesMenu.map((item, i) => (
            <a
              key={i}
              href={nLinks}
              className="block pl-8 py-2 text-gray-600 hover:text-blue-600 text-sm"
            >
              {item.name}
            </a>
          ))}

          {/* Products */}
          <div className="px-4 py-2 text-gray-800 font-semibold">Products</div>
          {productsMenu.map((item, i) => (
            <a
              key={i}
              href={nLinks}
              className="block pl-8 py-2 text-gray-600 hover:text-blue-600 text-sm"
            >
              {item.name}
            </a>
          ))}

          {/* Pricing */}
          <div className="px-4 py-2 text-gray-800 font-semibold">Pricing</div>
          {pricingMenu.map((item, i) => (
            <a
              key={i}
              href={nLinks}
              className="block pl-8 py-2 text-gray-600 hover:text-blue-600 text-sm"
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={openChat}
            className="block w-full mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 rounded-full shadow hover:shadow-lg"
          >
            Chat Now
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
}
