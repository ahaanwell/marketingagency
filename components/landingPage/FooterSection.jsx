"use client"
import React from 'react';
import { Phone, Mail, MapPin, Twitter, Facebook, Instagram, Linkedin, Award } from 'lucide-react';

export default function FooterSection() {
  const exploreLinks = [
    { name: "Website Design", href: "#website-design" },
    { name: "Ecommerce Website Development", href: "#ecommerce" },
    { name: "CMS Management", href: "#cms" },
    { name: "Graphic Design", href: "#graphic-design" },
    { name: "Terms & Condition", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" }
  ];

  const serviceLinks = [
    { name: "Website Development", href: "#web-dev" },
    { name: "Mobile Application Development", href: "#mobile-dev" },
    { name: "Digital Marketing", href: "#digital-marketing" },
    { name: "Social Media Marketing", href: "#social-media" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" }
  ];


  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

  const nLinks = "/services"

  return (
    <footer className="bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950" id='contact'>
      {/* Call to Action Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 border-b border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                We Are Just a Call Away!
              </h3>
              <p className="text-blue-100">
                We believe our customers are our priority. If you have any question or need assistance please contact us.
              </p>
            </div>
            <button 
            onClick={openChat}
            className="px-8 py-3 cursor-pointer bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-800 transition-all duration-300 whitespace-nowrap">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">ABOUT US</h4>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              With over hundreds of completed projects by our IT professionals, and serving varied industries, our continuous growth, reliability, and credibility is a recognized one.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">EXPLORE</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={nLinks}
                    className="text-blue-200 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">OUR SERVICES</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={nLinks}
                    className="text-blue-200 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">CONTACT US</h4>
            <div className="space-y-4 mb-6">
              {/* <div className="flex items-start gap-3 text-blue-200 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Top Flat at Pantry Smart LL,WALL1 BA15 1TA UK</span>
              </div> */}
              <div className="flex items-center gap-3 text-blue-200 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:support@livexcellence.net" className="hover:text-white transition-colors">
                  support@livexcellence.net
                </a>
              </div>
              {/* <div className="flex items-center gap-3 text-blue-200 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+610000000000" className="hover:text-white transition-colors">
                  +61 0000000000
                </a>
              </div> */}
            </div>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-semibold text-sm">
              <Award className="w-5 h-5" />
              Authorized
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-blue-300 text-sm">
            © Copyright Livexcellence. All Rights Reserved
          </p>
        </div>
      </div>

      {/* Floating Action Buttons */}
      {/* <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="tel:+442031308210"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
        </a>
        
        <button
          className="px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium whitespace-nowrap"
        >
          Chat with us, were online!
        </button>
      </div> */}
    </footer>
  );
}