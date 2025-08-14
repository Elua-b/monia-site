'use client'

import React, { useEffect, useRef } from 'react';
import { Star, Calendar, Heart } from 'lucide-react';

const OurStory = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100');
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden min-h-screen bg-stone-900 text-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-100 mb-4 sm:mb-6">
            Our Love Story
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
            From a chance meeting to forever – here's how our beautiful journey unfolded
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="w-full max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-full bg-stone-600 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-16">
              {/* The First Day */}
              <div className="timeline-item opacity-0 relative transition-all duration-1000 ease-out">
                <div className="text-center bg-stone-700 rounded-lg p-6 sm:p-8 shadow-lg border border-stone-600">
                  <div className="flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-400 mr-2" />
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-100">The First Day</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-400 mb-2 uppercase tracking-wide font-semibold">December 2017</p>
                  <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                    We met at a friend's birthday party — an immediate connection that sparked something magical. From the moment our eyes met, we knew this was the beginning of something extraordinary.
                  </p>
                </div>
              </div>

              {/* The Yes Day */}
              <div className="timeline-item opacity-0 relative transition-all duration-1000 ease-out">
                <div className="text-center bg-stone-700 rounded-lg p-6 sm:p-8 shadow-lg border border-stone-600">
                  <div className="flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-400 mr-2" />
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-100">The Yes Day</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-400 mb-2 uppercase tracking-wide font-semibold">June 2025</p>
                  <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                    Andy proposed, and our hearts said yes to forever. A moment we'll cherish for eternity, surrounded by love and the promise of a beautiful future together.
                  </p>
                </div>
              </div>

              {/* The Best Day */}
              <div className="timeline-item opacity-0 relative transition-all duration-1000 ease-out">
                <div className="text-center bg-stone-700 rounded-lg p-6 sm:p-8 shadow-lg border border-stone-600">
                  <div className="flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-400 mr-2" />
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-100">The Best Day</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-400 mb-2 uppercase tracking-wide font-semibold">December 24, 2025</p>
                  <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                    Our wedding ceremony when we will become husband and wife. The day we've been dreaming of, where our love story reaches its most beautiful chapter yet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;