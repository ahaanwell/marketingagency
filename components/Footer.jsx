"use client"
import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function Footer() {
  const [email, setEmail] = useState('');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/#services' },
    { name: 'Portfolio', link: '/#portfolio' },
    { name: 'About', link: 'about-us' },
    { name: 'Contact', link: 'contact-us' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'E-Commerce',
    'SEO Services',
    'UI/UX Design',
    'Digital Marketing'
  ];

  const socialMedia = [
    { icon: Facebook, link: '#' },
    { icon: Twitter, link: '#' },
    { icon: Linkedin, link: '#' },
    { icon: Instagram, link: '#' },
    { icon: Youtube, link: '#' },
    { icon: Github, link: '#' }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-footer"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="font-light text-2xl tracking-widest">LIVEXCELLENCE</div>
              <div className="text-xs text-white/50 tracking-wider">MARKETING AGENCY</div>
            </div>
            <p className="text-white/60 mb-8 leading-relaxed font-light text-sm">
              Leading digital agency delivering innovative solutions for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors cursor-pointer">
                <Phone size={16} strokeWidth={1.5} />
                <span className="text-sm font-light">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors cursor-pointer">
                <Mail size={16} strokeWidth={1.5} />
                <span className="text-sm font-light">info@livexcellence.net</span>
              </div>
              <div className="flex items-start space-x-3 text-white/60 hover:text-white transition-colors cursor-pointer">
                <MapPin size={16} strokeWidth={1.5} className="mt-0.5" />
                <span className="text-sm font-light">123 Business St, New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-light tracking-widest mb-6 text-white/50 uppercase">
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="block text-white/60 hover:text-white transition-colors font-light text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-light tracking-widest mb-6 text-white/50 uppercase">
              Services
            </h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="text-white/60 hover:text-white transition-colors cursor-pointer font-light text-sm"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-light tracking-widest mb-6 text-white/50 uppercase">
              Newsletter
            </h3>
            <p className="text-white/60 text-sm mb-6 font-light">
              Subscribe to get the latest updates and exclusive offers.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-white/30 outline-none focus:border-white transition-all font-light text-sm"
              />
              <button
                onClick={handleNewsletterSubmit}
                className="group w-full border border-white text-white px-6 py-3 font-light tracking-wide transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center space-x-2 text-sm uppercase"
              >
                <span>Subscribe</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              {socialMedia.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <Icon size={16} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-white/50 text-xs font-light tracking-wide">
                &copy; 2025 Livexcellence AGENCY. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        {/* <button
          onClick={() => scrollToSection('home')}
          className=" bottom-8 right-8 w-12 h-12 border border-black flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group fixed"
        >
          <ArrowRight size={20} strokeWidth={1.5} className="transform -rotate-90 group-hover:-translate-y-1 transition-transform" />
        </button> */}
      </div>

      <style jsx>{`
        .bg-grid-footer {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </footer>
  );
}

export default Footer;