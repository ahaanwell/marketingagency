import React from 'react';
import { FileText, AlertCircle, Shield, User, Scale, Info, CheckCircle } from 'lucide-react';
import MainLayout from '@/components/MainLayout';

export default function TermsAndConditionsPage() {
  const sections = [
    {
      id: 1,
      icon: <Info className="w-6 h-6" />,
      title: "Overview",
      content: [
        "Welcome to Appnexus Technology Pvt Ltd's website (appnexustech.com). These terms and conditions constitute a legal agreement between you and Appnexus Technology Pvt Ltd. By accessing or using this website, you agree to be bound by these terms and conditions. If you do not agree to any part of these terms, please discontinue your use of this website."
      ]
    },
    {
      id: 2,
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Disclaimer",
      content: [
        "If you do not agree with these terms and conditions, please cease using the website immediately."
      ]
    },
    {
      id: 3,
      icon: <FileText className="w-6 h-6" />,
      title: "General Terms of Use",
      content: [
        "The website is intended to provide information about Appnexus Technology Pvt Ltd and its services. By using this website, you agree to adhere to these terms and to use the website only for lawful purposes. You must be of legal age to enter into a contract to use the website and its services."
      ]
    },
    {
      id: 4,
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Disclaimer of General Terms of Use",
      content: [
        "Your use of the website is at your own risk. The information provided on this website is for general informational purposes and may be updated or modified without notice."
      ]
    },
    {
      id: 5,
      icon: <Shield className="w-6 h-6" />,
      title: "Disclaimer of Warranty",
      content: [
        "Appnexus Technology Pvt Ltd makes no warranties, express or implied, regarding the accuracy, completeness, or reliability of any content, material, or services available on this website. We do not guarantee that the website will remain error-free, secure, or uninterrupted."
      ]
    },
    {
      id: 6,
      icon: <FileText className="w-6 h-6" />,
      title: "Right to Content on Website",
      content: [
        "All content on this website is owned by Appnexus Technology Pvt Ltd and is protected by copyright, trademark, and other intellectual property laws. Unauthorized use, reproduction, or distribution of any content on this website is prohibited."
      ]
    },
    {
      id: 7,
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Disclaimer of Content",
      content: [
        "We do not guarantee the accuracy or completeness of any information on this website. While we strive to ensure the website's content is accurate and up-to-date, we make no commitment to update the information. We are not responsible for any inaccuracies or errors.",
        "Links to third-party websites are provided for convenience and do not imply endorsement. You access third-party sites at your own risk."
      ]
    },
    {
      id: 8,
      icon: <User className="w-6 h-6" />,
      title: "Right of User",
      content: [
        "You may use this website solely for its intended purposes and must provide accurate information when required."
      ]
    },
    {
      id: 9,
      icon: <Scale className="w-6 h-6" />,
      title: "Right to Indemnification",
      content: [
        "You agree to indemnify and hold Appnexus Technology Pvt Ltd, its affiliates, and its personnel harmless from any claims, damages, losses, liabilities, or expenses arising from your use of the website or any violation of these terms."
      ]
    },
    {
      id: 10,
      icon: <Shield className="w-6 h-6" />,
      title: "Limited Liability",
      content: [
        "Appnexus Technology Pvt Ltd shall not be liable for any damages resulting from:"
      ],
      list: [
        "Your use or misuse of the website",
        "Reliance on website content or third-party links",
        "Errors or omissions in the website's content or services",
        "Unauthorized access or alteration of your information"
      ]
    }
  ];

  return (
    <MainLayout>
        <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Scale className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms and Conditions</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Please read these terms carefully before using our website and services.
          </p>
        </div>
      </div>

      {/* Important Notice Banner */}
      <div className="bg-gray-50 border-b border-gray-200 py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 bg-white border border-gray-300 rounded-lg p-6">
            <AlertCircle className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Important Notice</h3>
              <p className="text-gray-600">
                By accessing or using this website, you agree to be bound by these terms and conditions. If you do not agree to any part of these terms, please discontinue your use of this website.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#section-${section.id}`}
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <span className="text-gray-400">{section.icon}</span>
                <span className="font-medium">{section.id}. {section.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} id={`section-${section.id}`} className="scroll-mt-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-gray-900 mt-1">{section.icon}</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {section.id}. {section.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {section.content.map((paragraph, index) => (
                      <p key={index} className="text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                    
                    {section.list && (
                      <ul className="space-y-2 mt-4">
                        {section.list.map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-600">
                            <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Acceptance Section */}
        <div className="mt-16 bg-gray-900 text-white rounded-lg p-8">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-8 h-8 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Acceptance of Terms</h3>
              <p className="text-gray-300 leading-relaxed">
                By using this website, you acknowledge that you have read, understood, and agree to these terms and conditions. These terms constitute a binding legal agreement between you and Appnexus Technology Pvt Ltd.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Questions About Our Terms?</h3>
          <p className="text-gray-600 mb-4">
            If you have any questions or concerns about these terms and conditions, please contact us at:
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <strong>Company:</strong> Appnexus Technology Pvt Ltd
            </p>
            <p className="text-gray-700">
              <strong>Website:</strong>{' '}
              <a href="https://appnexustech.com" className="text-gray-900 hover:underline">
                appnexustech.com
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong>{' '}
              <a href="mailto:info@appnexustech.com" className="text-gray-900 hover:underline">
                info@appnexustech.com
              </a>
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-block text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            ↑ Back to Top
          </a>
        </div>
      </div>
    </div>
    </MainLayout>
  );
}