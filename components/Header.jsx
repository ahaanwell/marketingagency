"use client"
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/#services' },
    { name: 'Portfolio', link: '/#portfolio' },
    { name: 'About', link: 'about-us' },
    { name: 'Contact', link: 'contact-us' }
  ];

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href={"/"}
              className="text-black font-bold text-xl tracking-widest cursor-pointer hover:text-gray-300 transition-colors"
            >
              LIVEXCELLENCE
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className="text-black/80 hover:text-black cursor-pointer text-md font-light tracking-wide transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-6">
              <Link 
                href={"/contact-us"}
                className="hidden md:block px-6 py-2 border cursor-pointer border-black/30 text-black text-sm font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                Lets Talk
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-black hover:text-gray-300 transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/90 backdrop-blur-md z-40 transition-opacity duration-300 lg:hidden ${
        mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setMobileMenuOpen(false)} />

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-black border-l border-white/10 z-50 transform transition-transform duration-300 lg:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link href={"/"} className="text-white font-light text-lg tracking-widest">
              LIVEXCELLENCE
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 py-8 px-6">
            {navLinks.map((item, index) => (
              <Link
                key={item.link}
                  href={item.link}
                className="block w-full text-left py-4 text-white/80 hover:text-white text-lg font-light tracking-wide transition-colors border-b border-white/5 last:border-0"
                style={{ 
                  animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s forwards` : 'none',
                  opacity: 0
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-white/10">
            <Link 
              href={"/contact-us"}
              className="w-full px-6 py-3 border border-white/30 text-white text-sm font-light tracking-wide hover:bg-white hover:text-black transition-all duration-300"
            >
              Lets Talk
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}

export default Header;