import React from 'react';
import { Shield, Eye, Lock, FileText, Users, Globe, Settings, Mail } from 'lucide-react';
import MainLayout from '@/components/MainLayout';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 1,
      icon: <FileText className="w-6 h-6" />,
      title: "Introduction",
      content: [
        "We at Appnexus Technology Private Limited (\"Appnexus\") are committed to protecting your privacy. This Privacy Policy applies to both our website (www.appnexustech.com) and mobile applications owned and controlled by Appnexus. This policy governs our data collection, processing, and usage practices. It also describes your choices regarding the use, access, and correction of your personal information. If you do not agree with the data practices described in this Privacy Policy, you should not use the website or our mobile applications.",
        "This Privacy Policy was last modified on May 24, 2018. We periodically update this Privacy Policy. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice by sending you an email notification. While we will notify you of any material changes to this Privacy Policy, we encourage you to review this Privacy Policy periodically.",
        "If you have any questions about this privacy policy or the treatment of the information you provide us, please write to us by email at privacy@appnexustech.com or by mail to Appnexus Technology Pvt. Ltd, India."
      ]
    },
    {
      id: 2,
      icon: <Eye className="w-6 h-6" />,
      title: "Information We Collect",
      subsections: [
        {
          subtitle: "When You Visit Our Website",
          content: "You are free to explore our websites without providing any personal information about yourself. When you visit the websites or register for the service, we request that you provide personal information about yourself, and we collect navigational information."
        },
        {
          subtitle: "When You Use Our Mobile Application",
          content: "In addition to the information we collect on our websites, when you use our mobile apps, we may also collect your city location, device model and version, and OS version. We send push notifications from time to time to update you about events or promotions. If you no longer wish to receive such communications, you may turn them off at the device level."
        },
        {
          subtitle: "Personal Information",
          content: "This refers to any information that you voluntarily submit to us and that identifies you personally, including contact information, such as your name, e-mail address, company name, address, phone number, and other information about yourself or your business. Personal information can also include information about any transactions, both free and paid, that you enter into on the websites, and information about you that is available on the internet, such as from Facebook, LinkedIn, Twitter, and Google, or publicly available information that we acquire from service providers."
        },
        {
          subtitle: "Log Files",
          content: "When you use our services or view content provided by us, we automatically collect information about your computer hardware and software. This information can include your IP address, browser type, domain names, Internet service provider (ISP), the files viewed on our site, operating system, clickstream data, access times, and referring website addresses. This information is used by Appnexus for the operation of the service, to maintain the quality of the service, and to provide general statistics regarding the use of the Appnexus website."
        },
        {
          subtitle: "Information We Collect from Third Parties",
          content: "From time to time, we may receive personal information about you from third-party sources including partners with which we offer co-branded services or engage in joint marketing activities, and publicly available sources such as social media websites."
        }
      ]
    },
    {
      id: 3,
      icon: <Lock className="w-6 h-6" />,
      title: "How We Use Information We Collect",
      subsections: [
        {
          subtitle: "We Never Sell Personal Information",
          content: "We will never sell your personal information to any third party."
        },
        {
          subtitle: "Use of Personal Information",
          content: "In addition to the uses identified elsewhere in this Privacy Policy, we may use your personal information to: Send information or content to you which we think may be of interest to you by email, or other means, and send you marketing communications relating to our business. Promote the use of our services to you and share promotional and informational content with you in accordance with your communication preferences. Send information to you regarding changes to our customer terms of service, privacy policy (including the cookie policy), or other legal agreements. Meet legal requirements."
        },
        {
          subtitle: "Use of Navigational Information",
          content: "We use navigational information to operate and improve our services or products."
        },
        {
          subtitle: "Security of Your Personal Information",
          content: "We use a variety of security technologies and procedures to help protect your personal information from unauthorized access, use, or disclosure. We secure the personal information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. All personal information is protected using appropriate physical, technical, and organizational measures."
        },
        {
          subtitle: "Social Media Features",
          content: "Our websites include social media features, such as the Facebook Like button and widgets. These features may collect your IP address, which page you are visiting on our sites, and may set a cookie to enable the feature to function properly. This Privacy Policy does not apply to these features. Your interactions with these features are governed by the privacy policy and other policies of the companies providing them."
        },
        {
          subtitle: "External Websites",
          content: "Our websites provide links to other websites. We do not control, and are not responsible for, the content or practices of these other websites. This Privacy Policy does not apply to these other websites, which are subject to any privacy and other policies they may have."
        },
        {
          subtitle: "Public Forums",
          content: "We offer publicly accessible message boards, blogs, and community forums. Please keep in mind that if you directly disclose any information through our public message boards, blogs, or forums, this information may be collected and used by others. We will correct or delete any information you have posted on the websites if you so request."
        }
      ]
    },
    {
      id: 4,
      icon: <Users className="w-6 h-6" />,
      title: "How We Share Information We Collect",
      subsections: [
        {
          subtitle: "Appnexus Partners",
          content: "We may share data with trusted partners to contact you based on your request to receive such communications, help us perform statistical analysis, or provide customer support. Such third parties are prohibited from using your personal information except for these purposes, and they are required to maintain the confidentiality of your information."
        },
        {
          subtitle: "Compelled Disclosure",
          content: "We reserve the right to use or disclose your personal information if required by law or if we reasonably believe that use or disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or comply with a law, court order, or legal process."
        }
      ]
    },
    {
      id: 5,
      icon: <Globe className="w-6 h-6" />,
      title: "International Transfer of Information",
      content: [
        "This Privacy Policy shall apply even if we transfer personal information to other countries. We have taken appropriate safeguards to require that your personal information will remain protected."
      ]
    },
    {
      id: 6,
      icon: <Shield className="w-6 h-6" />,
      title: "Cookies & Similar Technologies",
      subsections: [
        {
          subtitle: "Cookies",
          content: "Appnexus uses cookies or similar technologies (such as web beacons) to analyze trends, administer the website, track users' movements around the website, and gather demographic information about our user base as a whole."
        },
        {
          subtitle: "Advertising",
          content: "We partner with a third-party ad network to either display advertising on our website or to manage our advertising on other sites. Our ad network partner uses cookies and web beacons to collect information about your activities on this and other websites to provide you targeted advertising based upon your interests."
        },
        {
          subtitle: "Third Party Tracking Technologies",
          content: "The use of cookies and web beacons by any tracking utility company is not covered by our Privacy Policy or Cookie Policy."
        }
      ]
    },
    {
      id: 7,
      icon: <Settings className="w-6 h-6" />,
      title: "How to Access and Control Your Personal Data",
      subsections: [
        {
          subtitle: "Reviewing, Correcting, and Removing Your Personal Information",
          content: "You can request access, correction, updates, or deletion of your personal information."
        },
        {
          subtitle: "Objecting to Processing",
          content: "You can object to the processing of your personal information or ask us to restrict processing of your personal information."
        },
        {
          subtitle: "To Unsubscribe from Our Communications",
          content: "You may unsubscribe from our marketing communications by clicking on the \"unsubscribe\" link located on the bottom of our emails, updating your communication preferences, or by sending us an email at info@appnexustech.com."
        }
      ]
    }
  ];

  return (
    <MainLayout>
        <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      {/* Last Updated Banner */}
      <div className="bg-gray-50 border-b border-gray-200 py-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600">
            <strong>Last Updated:</strong> May 24, 2018
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          <div className="space-y-3">
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

        {/* Policy Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} id={`section-${section.id}`} className="scroll-mt-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-gray-900 mt-1">{section.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {section.id}. {section.title}
                  </h2>
                </div>
              </div>

              {section.content && (
                <div className="space-y-4 ml-10">
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.subsections && (
                <div className="space-y-6 ml-10">
                  {section.subsections.map((subsection, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {section.id}.{index + 1} {subsection.subtitle}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {subsection.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gray-900 text-white rounded-lg p-8">
          <div className="flex items-start gap-4">
            <Mail className="w-8 h-8 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                If you have any questions about this privacy policy or the treatment of the information you provide us, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacy@appnexustech.com" className="text-white hover:underline">
                    privacy@appnexustech.com
                  </a>
                </p>
                <p className="text-gray-300">
                  <strong>Address:</strong> Appnexus Technology Pvt. Ltd, India
                </p>
              </div>
            </div>
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