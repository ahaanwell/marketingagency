"use client"
import { useState } from 'react';
import { Smartphone, Globe, ShoppingCart, Search, ArrowRight } from 'lucide-react';

function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: 'Digital Marketing',
      description: 'Boost your online visibility and drive organic traffic with our Digital Marketing strategies.',
      icon: Search,
      number: '01'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless user experiences.',
      icon: Smartphone,
      number: '02'
    },
    {
      title: 'Website Development',
      description: 'Responsive, fast, and SEO-optimized websites built with modern technologies.',
      icon: Globe,
      number: '03'
    },
    {
      title: 'CMS & E-Commerce',
      description: 'Powerful content management systems and e-commerce solutions for your business.',
      icon: ShoppingCart,
      number: '04'
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-black overflow-hidden">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dot-pattern"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-8">
          <div>
            <div className="text-white/50 text-sm font-light tracking-widest mb-2">WHAT WE DO</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Our Services
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
            <span className="text-sm font-light">View All</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative border border-white/10 p-8 hover:bg-white/5 transition-all duration-300 cursor-pointer"
              >
                {/* Number */}
                <div className="text-6xl font-bold text-white/10 group-hover:text-white/20 transition-colors mb-8">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="mb-8">
                  <div className="w-16 h-16 border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white transition-all duration-300">
                    <Icon className={`w-8 h-8 transition-colors ${isHovered ? 'text-black' : 'text-white'}`} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-8 right-8">
                  <ArrowRight 
                    className={`w-5 h-5 text-white transition-all duration-300 ${
                      isHovered ? 'translate-x-2 opacity-100' : 'opacity-30'
                    }`} 
                  />
                </div>

                {/* Hover Line */}
                <div className="absolute left-0 bottom-0 right-0 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 text-white border border-white/30 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
            <span className="text-sm font-light tracking-wide">View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .bg-dot-pattern {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
}

export default ServicesSection;