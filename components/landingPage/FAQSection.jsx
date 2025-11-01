"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Who are Livexcellence.?",
      answer: "A Group of qualified computer support experts working on your problems immediately as and when required 24 Hours a day."
    },
    {
      question: "Do you provide any assistance against virus / spyware attacks?",
      answer: "Yes, we provide comprehensive protection against viruses, spyware, malware, and other security threats. Our team uses advanced tools to scan, remove, and prevent future infections while keeping your system secure."
    },
    {
      question: "How will Livexcellence. team fix my problem?",
      answer: "Our expert technicians will connect to your computer remotely using secure software. They'll diagnose the issue, explain the problem, and fix it while you watch. You maintain complete control and can disconnect at any time."
    },
    {
      question: "Is it easy to use?",
      answer: "Absolutely! Our remote support service is designed to be user-friendly. Simply download a small application, share the provided code with our technician, and they'll handle the rest. No technical knowledge required on your part."
    },
    {
      question: "Do you charge to diagnose my computer?",
      answer: "We offer free initial diagnostics to understand your problem. Once we identify the issue, we'll provide you with a clear quote before proceeding with any repairs. No hidden charges."
    },
    {
      question: "Are your technicians qualified to work on my computer?",
      answer: "Yes! All our technicians are certified professionals with years of experience. They undergo regular training to stay updated with the latest technologies and troubleshooting techniques."
    },
    {
      question: "Do you support Apple Macintosh and Linux PC's?",
      answer: "Yes, we support all major operating systems including Windows, macOS (Apple Macintosh), and Linux distributions. Our technicians are trained to handle issues across all platforms."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-200 hover:border-blue-400 transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0 text-blue-600">
                  {activeIndex === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <div className="px-6 pb-6 pt-2 bg-blue-50/50 border-t border-blue-100">
                  <div className="pl-12">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 bg-white rounded-xl shadow-lg border-2 border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you 24/7
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}