'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#story', label: 'Our Story' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#venues', label: 'Venues' },
    { href: '#dresscode', label: 'Dress Code' },
    { href: '#rsvp', label: 'RSVP' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-stone-50/95 backdrop-blur-xl shadow-lg border-b border-warm-300/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className={`h-6 w-6 transition-colors duration-300 ${
              isScrolled ? 'text-warm-600' : 'text-white'
            }`} />
            <div className="text-center">
              <p className={`text-sm font-serif font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-stone-800' : 'text-white'
              }`}>
                Monia & Andy
              </p>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-stone-600' : 'text-white/90'
              }`}>
                December 24, 2025
              </p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 group ${
                  isScrolled 
                    ? 'text-stone-700 hover:text-stone-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-warm-500 to-warm-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              isScrolled ? 'text-stone-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 bg-stone-50/95 backdrop-blur-xl rounded-xl border border-warm-300 shadow-xl animate-fade-in mx-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-stone-700 hover:text-stone-600 hover:bg-stone-50 transition-all duration-300 rounded-lg mx-2 text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;