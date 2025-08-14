'use client'

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: '/image1.jpg',
      alt: 'Monia & Andy romantic portrait',
      title: 'Our Beautiful Love'
    },
    {
      src: '/image2.jpg',
      alt: 'Sweet couple portrait',
      title: 'Sweet Memories'
    },
    {
      src: '/image3.jpg',
      alt: 'Romantic couple photo',
      title: 'Romantic Moments'
    },
    {
      src: '/image4.jpg',
      alt: 'Beautiful couple moment',
      title: 'Beautiful Together'
    },
    {
      src: '/image5.jpg',
      alt: 'Loving couple portrait',
      title: 'Pure Love'
    },
    {
      src: '/image1.jpg',
      alt: 'Joyful couple moment',
      title: 'Joyful Hearts'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#4B4038] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-stone-100 mb-6">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-warm-500 to-cream-600 mx-auto mb-8"></div>
          <p className="text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed">
            Capturing the beautiful moments of our love story through elegant portraits and intimate memories
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in bg-warm-100/30 backdrop-blur-sm border border-gold-200/50 box-border"
              onClick={() => openLightbox(index)}
            >
              <div className="w-full !max-w-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full !max-w-full min-w-full object-contain group-hover:scale-110 transition-transform duration-700 rounded-2xl md:rounded-3xl"
                  aria-label={image.alt}
                  onError={(e) => (e.currentTarget.src = '/fallback-image.jpg')}
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg md:text-xl font-serif font-semibold mb-2">
                    {image.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-gold-300" />
                    <span className="text-white/90 text-xs md:text-sm">Click to view</span>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 md:border-4 border-transparent group-hover:border-white/30 rounded-2xl md:rounded-3xl transition-all duration-300"></div>
              
              {/* Floating heart animation on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="h-6 w-6 text-gold-400 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="max-w-4xl max-h-[90vh] w-full relative">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain rounded-xl md:rounded-2xl shadow-2xl max-h-[80vh]"
                aria-label={images[selectedImage].alt}
                onError={(e) => (e.currentTarget.src = '/fallback-image.jpg')}
              />
              
              {/* Image Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6 rounded-b-xl md:rounded-b-2xl">
                <h3 className="text-white text-xl md:text-2xl font-serif font-semibold text-center">
                  {images[selectedImage].title}
                </h3>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-3 md:px-4 py-1 md:py-2 text-white text-xs md:text-sm">
              {selectedImage + 1} of {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;