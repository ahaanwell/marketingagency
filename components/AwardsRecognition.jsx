import React from 'react';

export default function AwardsRecognition() {
  const awards = [
    {
      image: '/ITFirms-1.png',
    },
    {
      image: '/zee5.webp',
    },
    {
      image: '/topdevelopers.png',
    },
    {
      image: '/dailyhunt.webp',
    },
    {
      image: '/GoodFirms.png'
    },
    {
      image: '/impact.webp',
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Awards & Recognition
            </h2>
            <p className="text-white text-lg">
              Livexcellence Technology Have been certified by the Top Recognized Authorities From the Global.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex flex-col items-center group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl px-4 md:p-6  transition-all duration-300 hover:shadow-xl hover:scale-105 w-full aspect-square flex items-center justify-center">
                <img 
                  src={award.image} 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}