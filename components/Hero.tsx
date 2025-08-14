'use client'

import React, { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-12-24T15:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  const scrollToRSVP = () => {
    const element = document.querySelector('#rsvp');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/image1.jpg)',
        }}
      />
      
      {/* Warm Brown/Sepia Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-800/75 to-stone-900/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-warm-900/40 via-transparent to-warm-900/40" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Main Content */}
        <div className="animate-fade-in mt-16 sm:mt-20 md:mt-24">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-3 sm:mb-4 md:mb-6 font-light tracking-[0.2em] uppercase">
            Hello
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-wide">
            MONIA <span className="text-warm-200">&</span> ANDY
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 sm:mb-10 md:mb-12 font-light italic tracking-wide">
            Forever Begins
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {[
            { value: timeLeft.days, label: 'DAYS' },
            { value: timeLeft.hours, label: 'HOURS' },
            { value: timeLeft.minutes, label: 'MINUTES' },
            { value: timeLeft.seconds, label: 'SECONDS' }
          ].map((item, index) => (
            <div key={index} className="bg-stone-900/30 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 border border-warm-300/20 hover:bg-stone-900/40 transition-all duration-300">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1 sm:mb-2">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-white/80 text-xs sm:text-sm md:text-base font-medium tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Event Details */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-white/90">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wide">
              December 24, 2025
            </span>
          </div>
          
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-white/90">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wide">
              Kigali, Rwanda
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10 md:mt-12">
          <button
            onClick={scrollToRSVP}
            className="bg-warm-800/20 backdrop-blur-sm text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-full font-medium text-sm sm:text-base md:text-lg lg:text-xl hover:bg-warm-700/30 transform hover:scale-105 transition-all duration-300 shadow-2xl border border-warm-300/30 tracking-wide uppercase"
          >
            RSVP Now
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;