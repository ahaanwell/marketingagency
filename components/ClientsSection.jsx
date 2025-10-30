"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ClienteleList() {
  const clients = [
    { name: 'Adarsh', logo: '/adarsh.webp' },
    { name: 'mahindra', logo: '/mahindra.png' },
    { name: 'sobha', logo: '/sobha.webp' },
    { name: 'myniwa', logo: '/myniwa.png' },
    { name: 'dailyhunt', logo: '/dailyhunt.webp' },
    { name: 'impact', logo: '/impact.webp' },
    { name: 'aerologistics', logo: '/aerologistics.png' },
    { name: 'omaxe', logo: '/omaxe.png' },
    { name: 'dalmia', logo: '/dalmia.png' },
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-8">
              Not just clients, they are more like partners
            </h2>
            <p className="text-white text-lg">
              Livexcellence Technology Have been certified by the Top Recognized Authorities From the Global.
            </p>
          </div>

          {/* Right Grid - Client Logos */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-white/10">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-black p-3 md:p-8 flex items-center justify-center min-h-[60px] md:min-h-[140px] hover:bg-white/5 transition-all duration-300 group"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-full max-h-20 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}