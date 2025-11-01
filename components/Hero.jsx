"use client"
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[50vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern"></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Top Badge - Responsive positioning */}
        <div className="pt-6 md:pt-8 px-4 sm:px-6 md:px-8">
          <div className="inline-flex items-center space-x-2 border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 animate-fade-in">
            <span className="text-xs sm:text-sm font-light text-white tracking-wide">
              <span className="hidden sm:inline">Planning, Strategy, Design, Development</span>
              <span className="sm:hidden">Strategy & Development</span>
            </span>
            <ArrowRight className="text-white" size={14} />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="w-full max-w-7xl">
            {/* Main Heading - Fully Responsive */}
            <div className="text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-white mb-2 leading-none tracking-tight animate-fade-in">
                Welcome to
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight animate-fade-in animation-delay-500">
                The New Digital Horizon
              </h1>
            </div>
          </div>
        </div>

        {/* Stats Section - Responsive positioning */}
        <div className="pb-8 md:pb-12 lg:pb-6 px-4 sm:px-6 md:px-8">
          <div className="flex justify-center sm:justify-end animate-fade-in animation-delay-1000">
            <div className="text-center sm:text-right">
              <div className="mb-1">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                  3k+
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-light tracking-wide">
                Projects completed<br className="hidden sm:inline" />
                <span className="sm:hidden"> </span>successfully
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
          opacity: 0;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
          opacity: 0;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
          opacity: 0;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        @media (min-width: 640px) {
          .bg-grid-pattern {
            background-size: 40px 40px;
          }
        }
        
        @media (min-width: 768px) {
          .bg-grid-pattern {
            background-size: 50px 50px;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;