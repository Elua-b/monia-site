'use client'

import React, { useEffect, useRef } from 'react';
import { Heart, Sparkles, Calendar, Star } from 'lucide-react';

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
    <section id="story" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{
          backgroundImage: 'url(/image1.jpg)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-warm-900/30 via-gold-900/20 to-stone-900/30" />
      <div className="absolute inset-0 bg-cream-50/80 backdrop-blur-sm" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-800 mb-4 sm:mb-6">
            Our Love Story
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-warm-600 to-warm-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed px-4">
            "Our love, a story written in the stars. From that first spark in 2017, 
            we're ready to embrace forever as husband and wife."
          </p>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 italic font-medium mt-3 sm:mt-4">
            "For nothing will be impossible with God." - Luke 1:37
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="w-full max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-full bg-gradient-to-b from-warm-600 via-warm-500 to-warm-700 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {/* The First Day */}
              <div className="timeline-item opacity-0 relative transition-all duration-1000 ease-out">
                <div className="text-center">
                  <div className="bg-[#4B4038] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-warm-200 mx-auto max-w-prose" aria-label="The First Day timeline card">
                    <div className="flex items-center justify-center space-x-3 mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-stone-100">The First Day</h3>
                      <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-warm-600" />
                    </div>
                    <p className="text-xs sm:text-sm text-stone-200 mb-2 sm:mb-3 uppercase tracking-wide font-semibold">December 2017</p>
                    <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
                      We met at a friend's birthday party — an immediate connection that sparked something magical. 
                      From the moment our eyes met, we knew this was the beginning of something extraordinary.
                    </p>
                  </div>
                </div>
              </div>

              {/* The Yes Day */}
              <div className="timeline-item opacity-0 relative transition-all duration-1000 ease-out">
                <div className="text-center">
                  <div className="bg-[#4B4038] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-warm-200 mx-auto max-w-prose" aria-label="The Yes Day timeline card">
                    <div className="flex items-center justify-center space-x-3 mb-3 sm:mb-4">
                      <Calendar className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-warm-600" />
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-stone-100">The Yes Day</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-200 mb-2 sm:mb-3 uppercase tracking-wide font-semibold">June 2025</p>
                    <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
                      Andy proposed, and our hearts said yes to forever. A moment we'll cherish for eternity, 
                      surrounded by love and the promise of a beautiful future together.
                    </p>
                  </div>
                </div>
              </div>

              {/* The Best Day */}
              <div className="timeline-item opacity-0 relative transition-all duration-1000 ease-out">
                <div className="text-center">
                  <div className="bg-[#4B4038] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-warm-200 mx-auto max-w-prose" aria-label="The Best Day timeline card">
                    <div className="flex items-center justify-center space-x-3 mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-stone-100">The Best Day</h3>
                      <Heart className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-warm-600" />
                    </div>
                    <p className="text-xs sm:text-sm text-stone-200 mb-2 sm:mb-3 uppercase tracking-wide font-semibold">December 24, 2025</p>
                    <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
                      Our wedding ceremony when we will become husband and wife. The day we've been dreaming of, 
                      where our love story reaches its most beautiful chapter yet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 animate-fade-in px-4">
          <div className="bg-[#4B4038] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl max-w-4xl mx-auto border border-warm-200">
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif italic text-stone-100 leading-relaxed">
              "Love is not just looking at each other, it's looking in the same direction together."
            </blockquote>
            <p className="text-stone-200 font-semibold mt-4 sm:mt-6 text-sm sm:text-base">- Monia & Andy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;