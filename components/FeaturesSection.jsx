"use client";
import { Eye, Rocket, DollarSign, TrendingUp } from "lucide-react";

function FeaturesSection() {
  const features = [
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Our Vision",
      description: "To Establish as Leading Digital Company loved for its Notion, Innovation, and Implementation.",
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Our Mission",
      description: "To Transform Business by Enabling Equitable Technology at Opportune Time by Delighted Teams.",
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Our Values",
      description: "Exceed Expectations of Every Customer in a Right Way while Celebrating Innovation.",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Our Overview",
      description: "Livexcellence Technology is the consequence of impressive digital intellectuals and result-oriented team works.",
    },
  ];

  return (
    <section className="relative bg-orange-50 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
          {/* Left - Heading */}
          <div className="flex flex-col items-center gap-5 justify-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Features are more helpful to create creative shapes as well.
            </h2>
            <p className="text-black text-base leading-relaxed">
              Livexcellence Technology is the Best for website Design and Development, App Development, and Digital Marketing Company in Delhi NCR (National Capital Region) of India.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-l border-t border-black p-8 hover:bg-white transition-colors duration-300"
              style={{
                borderRight: index === features.length - 1 || (index + 1) % 4 === 0 ? '1px solid black' : 'none',
                borderBottom: '1px solid black'
              }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="text-black">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-black text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;