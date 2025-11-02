"use client"
import { useState, useEffect } from 'react';

function TechnologySection() {

  // Technologies for marquee sliders
  const marqueeTopTechnologies = [
    'HTML5/CSS3', 'ANGULAR JS', 'WORDPRESS', 'REACT JS', 'VUE JS', 'NODE JS',
    'HTML5/CSS3', 'ANGULAR JS', 'WORDPRESS', 'REACT JS', 'VUE JS', 'NODE JS'
  ];

  const marqueeBottomTechnologies = [
    'REACTNATIVE', 'ANDROID', 'IOS', 'SWIFT', 'FLUTTER', 'KOTLIN',
    'REACTNATIVE', 'ANDROID', 'IOS', 'SWIFT', 'FLUTTER', 'KOTLIN'
  ];

  return (
    <section className="w-full">
      <div className=" z-10 w-full">
        {/* Auto-Sliding Marquee - Top Row (Left to Right) */}
        <div className="overflow-hidden bg-gradient-to-r from-orange-400 to-pink-400 py-6 w-full">
          <div className="flex animate-marquee-left whitespace-nowrap">
            {marqueeTopTechnologies.map((tech, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center px-12 text-white font-bold text-2xl tracking-wider w-full"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Auto-Sliding Marquee - Bottom Row (Right to Left) */}
        <div className="overflow-hidden bg-black py-6">
          <div className="flex animate-marquee-right whitespace-nowrap">
            {marqueeBottomTechnologies.map((tech, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center px-12 text-white font-bold text-2xl tracking-wider"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 20s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default TechnologySection;