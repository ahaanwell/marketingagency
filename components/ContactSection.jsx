"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you shortly.");
    setFormData({ name: "", email: "", projectType: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9319197564",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@livexcellence.net",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "C-21 Sector 8, Gurugram, India",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon - Fri: 9am - 6pm",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.04),transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-gray-500 text-xs font-light tracking-[0.2em] mb-4">
            LET’S CONNECT
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
            Have a project in mind? Let’s create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg p-10 rounded-3xl"
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-transparent border-b border-gray-300 text-gray-900 placeholder-transparent focus:border-black outline-none py-3 transition-all"
                  placeholder="Your Name"
                />
                <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-black">
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-transparent border-b border-gray-300 text-gray-900 placeholder-transparent focus:border-black outline-none py-3 transition-all"
                  placeholder="Email Address"
                />
                <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-black">
                  Email Address
                </label>
              </div>

              {/* Project Type */}
              <div className="relative">
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none bg-transparent border-b border-gray-300 text-gray-900 py-3 outline-none focus:border-black transition-all"
                >
                  <option value="">Select Project Type</option>
                  <option value="web">Web Development</option>
                  <option value="app">Mobile App</option>
                  <option value="branding">Branding</option>
                  <option value="seo">SEO & Marketing</option>
                </select>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="1"
                  required
                  className="peer w-full bg-transparent border-b border-gray-300 text-gray-900 placeholder-transparent focus:border-black outline-none py-3 resize-none transition-all"
                  placeholder="Tell us about your project"
                ></textarea>
                <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-black">
                  Tell us about your project
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group w-full md:w-auto px-10 py-4 bg-black text-white rounded-full font-medium tracking-wider flex items-center justify-center gap-2 hover:bg-gray-800 transition-all"
              >
                Send Message
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={i}
                  className="group bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-5 group-hover:bg-black transition-all">
                    <Icon className="w-6 h-6 text-black group-hover:text-white transition-all" />
                  </div>
                  <h4 className="text-sm uppercase text-gray-500 font-light tracking-widest mb-2">
                    {info.label}
                  </h4>
                  <p className="text-gray-900 font-light">{info.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-100 to-transparent blur-3xl"></div>
    </section>
  );
}

export default ContactSection;
