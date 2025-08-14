'use client'

import React from 'react';
import { MapPin, Clock, Phone, Calendar } from 'lucide-react';

const Venues = () => {
  return (
    <section id="venues" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative bg-[#4B4038] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-500 border border-warm-200/50 hover:shadow-3xl z-10"
          aria-label="Venues and Schedule card"
          style={{
            backgroundImage: 'url(/image4.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent rounded-3xl"></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-100 mb-8 text-center relative z-20 uppercase tracking-wide">
            Venues & Schedule
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-20">
            {/* Gusaba Ceremony */}
            <div className="space-y-4 bg-stone-800/80 p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-stone-700/50 hover:bg-stone-800/90 transition-all duration-300" aria-label="Gusaba Ceremony details">
              <h3 className="text-xl sm:text-2xl font-bold text-stone-100">Gusaba Ceremony</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-stone-300" />
                  <span className="text-stone-200">Wednesday, December 24, 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-stone-300" />
                  <span className="text-stone-200">Panorama Hope Garden, Rebero</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-stone-300" />
                  <span className="text-stone-200">3:00 PM – 9:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-stone-300" />
                  <span className="text-stone-200">+250 788 306 591</span>
                </div>
              </div>
            </div>
            
            {/* Church & Reception */}
            <div className="space-y-4 bg-stone-800/80 p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-stone-700/50 hover:bg-stone-800/90 transition-all duration-300" aria-label="Church and Reception details">
              <h3 className="text-xl sm:text-2xl font-bold text-stone-100">Church & Reception</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-stone-300" />
                  <span className="text-stone-200">Sunday, January 4, 2026</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-stone-300" />
                  <span className="text-stone-200">Jalia Hall & Garden, Rusororo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-stone-300" />
                  <span className="text-stone-200">Church: 1:00 PM – 3:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-stone-300" />
                  <span className="text-stone-200">Reception: 4:00 PM – 10:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-stone-300" />
                  <span className="text-stone-200">+250 788 306 591</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venues;