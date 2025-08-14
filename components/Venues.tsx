'use client'

import React from 'react';
import { MapPin, Clock, Phone, Calendar } from 'lucide-react';

const Venues = () => {
  return (
    <section id="venues" className="py-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4B4038] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-warm-200 relative z-10" aria-label="Venues and Schedule card">
          <h2 className="text-3xl font-bold text-stone-100 mb-8 text-center uppercase tracking-wide">
            Venues & Schedule
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Gusaba Ceremony */}
            <div className="space-y-4" aria-label="Gusaba Ceremony details">
              <h3 className="text-xl font-bold text-stone-100">Gusaba Ceremony</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-stone-100" />
                  <span className="text-stone-200">Wednesday, December 24, 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-stone-100" />
                  <span className="text-stone-200">Panorama Hope Garden, Rebero</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-stone-100" />
                  <span className="text-stone-200">3:00 PM – 9:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-stone-100" />
                  <span className="text-stone-200">+250 788 306 591</span>
                </div>
              </div>
            </div>
            
            {/* Church & Reception */}
            <div className="space-y-4" aria-label="Church and Reception details">
              <h3 className="text-xl font-bold text-stone-100">Church & Reception</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-stone-100" />
                  <span className="text-stone-200">Sunday, January 4, 2026</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-stone-100" />
                  <span className="text-stone-200">Jalia Hall & Garden, Rusororo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-stone-100" />
                  <span className="text-stone-200">Church: 1:00 PM – 3:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-stone-100" />
                  <span className="text-stone-200">Reception: 4:00 PM – 10:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-stone-100" />
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