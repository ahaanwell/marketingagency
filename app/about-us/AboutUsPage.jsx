import React from 'react';
import { Award, Users, Target, Heart, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
import ClientsSection from '@/components/ClientsSection';
import MainLayout from '@/components/MainLayout';

export default function AboutUsPage() {
  const stats = [
    { number: '100+', label: 'Apps Developed' },
    { number: '10+', label: 'Countries Served' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const whyChooseUs = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'We Create Experiences',
      description: 'We create experiences that are attractive, simple to use, and drive results for your company. We are not your typical web development agency.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Quick Response',
      description: 'After you\'ve made up your mind to do a website, you want it NOW! We streamline the process as a full-service website design company.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'We Do The Work',
      description: 'From principals to junior members, we all work together. You will see the same faces from the first hello to project completion.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Competitive Pricing',
      description: 'We offer web design, development, branding, and marketing at fair market pricing with a quicker turnaround.'
    }
  ];

  const expertise = [
    { name: 'AR/VR', description: 'Get virtual assistance services in your mobile app with augmented reality.' },
    { name: 'Blockchain', description: 'Create a decentralized environment to improve security and transparency.' },
    { name: 'Metaverse', description: 'Get 24x7 assistance in launching a future-ready Metaverse.' },
    { name: 'IoT', description: 'Improve productivity and customer experience by reducing downtime.' },
    { name: 'NFT', description: 'Contribute to the exclusive users of crypto collectables.' },
    { name: 'Artificial Intelligence', description: 'AI integration for better and seamless real-time interaction.' }
  ];

  return (
    <MainLayout>
        <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Company</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-300">
            Were a full service digital agency working globally with the largest brands, creating powerful campaigns and flawless developments.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Company Overview</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Livexcellence Technology is the consequence of impressive digital intellectuals and result-oriented teamwork. We have redefined IT services and successfully enlisted them to drive significant benefits. We are not just professional in our services but also courteous to understand every minor and major project individually in detail. Each of our services is customizable, we let our clients choose best for themselves.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg border-2 border-gray-200 p-8 text-center hover:border-gray-900 transition-all duration-300">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-gray-500 font-semibold mb-2 uppercase tracking-wide">We Are Awesome</p>
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:bg-gray-100 transition-all duration-300 border border-gray-200">
                <div className="text-gray-900 mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-black rounded-lg p-8 text-white hover:bg-gray-800 transition-all duration-300">
            <Target className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="leading-relaxed text-gray-300">
              With the motive to offer optimal digital services, we work day and night for customers satisfaction, providing complete digital services in optimal quality.
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-8 text-white hover:bg-gray-800 transition-all duration-300">
            <Award className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="leading-relaxed text-gray-300">
              With a vision to transform your business into a brand, we offer everything in one place. We let the clients opt for handpicked services that suit them.
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-8 text-white hover:bg-gray-800 transition-all duration-300">
            <Heart className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="leading-relaxed text-gray-300">
              Exceed expectations of every customer in the right way while celebrating innovation and building a thriving team and workplace.
            </p>
          </div>
        </div>

        {/* Expertise */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide IT solutions in all fields of languages and adapt latest technologies in development and designing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-gray-900 transition-all duration-300">
                <div className="w-12 h-12 bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Software Development */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-12 mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            We Are Powerhouse of Software Development
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Livexcellence Solutions is the brand technology company committed to providing solutions for the highest degree of business challenges. By our strong industry expertise and technology-enabled approaches, we drive growth and success for existing businesses. We have the ability to accelerate and adapt in line with speedy technology transformation.
          </p>
        </div>

        {/* Brands Section */}
        <ClientsSection/>
      </div>
    </div>
    </MainLayout>
  );
}