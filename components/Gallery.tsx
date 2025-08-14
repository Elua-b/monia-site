'use client'

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: '/image1.jpg', alt: 'Monia & Andy romantic portrait', title: 'Our Beautiful Love' },
    { src: '/image2.jpg', alt: 'Sweet couple portrait', title: 'Sweet Memories' },
    { src: '/image3.jpg', alt: 'Romantic couple photo', title: 'Romantic Moments', label: 'Our Love Story' },
    { src: '/image4.jpg', alt: 'Beautiful couple moment', title: 'Beautiful Together' },
    { src: '/image5.jpg', alt: 'Loving couple portrait', title: 'Pure Love' },
    { src: '/image1.jpg', alt: 'Joyful couple moment', title: 'Joyful Hearts' },
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
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-[#4B4038] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-100 mb-4">
            Our Gallery
          </h2>
          <p className="text-lg sm:text-xl text-stone-300 max-w-xl mx-auto leading-relaxed">
            Capturing the beautiful moments of our love story through elegant portraits
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover rounded-xl"
                onError={(e) => (e.currentTarget.src = '/fallback-image.jpg')}
              />
              {image.label && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl">
                  <span className="text-white text-xl font-serif font-bold">{image.label}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <div className="absolute bottom-2 left-2">
                  <h3 className="text-white text-sm font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="max-w-3xl max-h-[90vh] w-full relative">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain rounded-xl shadow-lg max-h-[80vh]"
                onError={(e) => (e.currentTarget.src = '/fallback-image.jpg')}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-xl">
                <h3 className="text-white text-lg font-serif font-semibold text-center">
                  {images[selectedImage].title}
                </h3>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 text-white text-sm">
              {selectedImage + 1} of {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;