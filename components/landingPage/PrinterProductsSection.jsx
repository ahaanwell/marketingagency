"use client";
import React from "react";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => (
  <div className="group relative bg-white/10 backdrop-blur-md border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-2 cursor-pointer">
    {/* Image Section */}
    <div className="overflow-hidden bg-white p-6 h-52 flex items-center justify-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    {/* Content Section */}
    <div className="p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
        {product.name}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-3">
        {product.description}
      </p>

      {/* Divider */}
      <div className="w-10 h-1 bg-gray-300 mx-auto rounded-full mb-2 group-hover:bg-gray-500 transition-all duration-300"></div>

      {/* Price */}
      <div className="text-gray-900 mb-3">
        <span className="text-sm opacity-80 mr-1">Price:</span>
        <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
      </div>

      {/* Buy Button */}
      <a href="/services" className="w-full lp-primary-bg text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
        <ShoppingCart className="h-4" />
        Buy Now
      </a>
    </div>
  </div>
);

export default function PrinterProductsSection() {
  const products = [
    {
      id: 1,
      name: "DeskJet 2734e All-in-One Printer",
      description:
        "Print, scan, copy, simple setup with Smart app and worry-free wireless.",
      price: 56.0,
      image: "/printer1.webp",
    },
    {
      id: 2,
      name: "DeskJet 4155e All-in-One Printer",
      description:
        "Print, copy, scan, duplex print, auto feeder, mobile/wireless support.",
      price: 81.0,
      image: "/printer2.jpg",
    },
    {
      id: 3,
      name: "ENVY Inspire 7955e All-in-One Printer",
      description:
        "Print, copy, scan in color, auto doc feeder, wireless printing — reliable daily use.",
      price: 99.99,
      image: "/printer3.avif",
    },
    {
      id: 4,
      name: "OfficeJet Pro 9720 Wide Format All-in-One Printer",
      description:
        "Fast color print, copy, scan, fax, 2-sided prints, mobile/wireless printing for professionals.",
      price: 129.89,
      image: "/printer4.avif",
    },
    {
      id: 5,
      name: "LaserJet Pro MFP M128fw All-in-One Printer",
      description:
        "Laser Multifunction Printer, Perfect for Business Print, Copy, Scan and Fax, ADF",
      price: 149.0,
      image: "/printer5.avif",
    },
    {
      id: 6,
      name: "Laser MFP 1188nw All-in-One Printer",
      description:
        "Print, copy, scan, duplex print, auto feeder, mobile/wireless support.",
      price: 89.0,
      image: "/printer6.avif",
    },
    {
      id: 7,
      name: "DeskJet 2820 All-in-One Printer WiFi Print Copy Scan",
      description:
        "Print, copy, scan Print Speed up to 7.5 ppm(black) and up to 5.5 ppm; Bluetooth; Wireless direct printing",
      price: 105.99,
      image: "/printer7.avif",
    },
    {
      id: 8,
      name: "Smart Tank 580 All-in-One Printer",
      description:
        "A4 Colour Smart Tank All-in-One Printer, Perfect for Home; Print, copy, scan; Print speed up to 12 ppm (black)",
      price: 199.89,
      image: "/printer8.avif",
    },
    {
      id: 9,
      name: "Smart Tank 524 All-in-One Printer",
      description: "A4 Colour Smart Tank All-in-One Printer, Perfect for Home Print, Copy and Scan Print",
      price: 206.89,
      image: "/printer9.avif",
    },
    {
      id: 10,
      name: "Smart Tank 675 Wi Fi All-in-One Printer Duplexer",
      description: "A4 Color Smart Tank All-in-One Printer, Perfect for Home Print, Copy, Scan Print speed up to 22 ppm",
      price: 200.89,
      image: "/printer10.avif",
    },
    {
      id: 11,
      name: "OfficeJet Pro 9730 Wide Format All-in-One Printer",
      description: "A3,A4, All in One Printer, Perfect for Business Print, copy, scan Print speed up to 22 ppm (black)",
      price: 135.89,
      image: "/printer11.avif",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Printers for Home and Office
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            High-performance, easy-to-use printers built for every home or
            office. Get the best deals on genuine, reliable models today.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
