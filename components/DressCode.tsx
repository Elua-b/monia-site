'use client';

import React, { useState } from 'react';

const DressCode = () => {
  const colors = [
    { name: 'Deep Warm', color: '#7d3200' },
    { name: 'Warm Brown', color: '#a04000' },
    { name: 'Gold', color: '#d97706' },
    { name: 'Light Gold', color: '#fbbf24' },
    { name: 'Cream', color: '#fde68a' },
    { name: 'Stone', color: '#78716c' },
    { name: 'Light Stone', color: '#a8a29e' },
    { name: 'Warm Beige', color: '#d6d3d1' },
    { name: 'Soft Cream', color: '#f5f5f4' }
  ];

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="dresscode" className="py-12 sm:py-16 md:py-20 relative overflow-hidden" style={{ '--accent-color': selectedColor || '#fde68a', backgroundColor: '#4B4038' } as React.CSSProperties}>
      <div className="max-w-5xl mx-auto px-4">
        <div
          className="bg-stone-800/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-stone-700/50 relative z-10 group"
          style={{
            background: 'linear-gradient(135deg, rgba(75, 64, 56, 0.9), rgba(75, 64, 56, 0.7))',
            transition: 'background 0.3s ease',
          }}
        >
          {/* Gradient overlay with hover effect */}
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-stone-700/20 to-transparent group-hover:from-gold-300/10 group-hover:via-stone-700/30 group-hover:to-transparent transition-all duration-300"
          ></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-100 mb-8 text-center uppercase tracking-wide">
            Dress Code
          </h2>
          
          <div className="text-center mb-8">
            <p className="text-xl sm:text-2xl text-stone-200 mb-4 font-semibold">Black Tie Optional</p>
            <p className="text-stone-300">
              Dress to impress while staying comfortable for our celebration
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-stone-100 mb-4 text-center">Suggested Color Palette</h3>
            <div className="grid grid-cols-3 md:grid-cols-9 gap-2">
              {colors.map((colorItem, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium text-center p-1 cursor-pointer relative ${selectedColor === colorItem.color ? 'ring-2 ring-gold-500' : ''}`}
                  style={{ backgroundColor: colorItem.color, color: colorItem.color === '#fde68a' || colorItem.color === '#d6d3d1' || colorItem.color === '#f5f5f4' ? '#000' : '#fff' }}
                  onClick={() => setSelectedColor(colorItem.color)}
                  onMouseEnter={(e) => {
                    const tooltip = document.createElement('div');
                    tooltip.className = 'absolute z-10 bg-black text-white text-xs rounded px-2 py-1 bottom-full mb-2';
                    tooltip.textContent = `${colorItem.name} (${colorItem.color})`;
                    e.currentTarget.appendChild(tooltip);
                  }}
                  onMouseLeave={(e) => {
                    const tooltip = e.currentTarget.querySelector('div');
                    if (tooltip) tooltip.remove();
                  }}
                >
                  {colorItem.name}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-100 mb-4">For Her</h3>
              <ul className={`space-y-2 text-stone-300 ${isExpanded ? 'block' : 'line-clamp-2'}`}>
                <li>• Elegant cocktail dress or formal gown</li>
                <li>• Dressy heels or elegant flats</li>
                <li>• Please avoid white or ivory colors</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-100 mb-4">For Him</h3>
              <ul className={`space-y-2 text-stone-300 ${isExpanded ? 'block' : 'line-clamp-2'}`}>
                <li>• Dark suit or tuxedo with dress shirt</li>
                <li>• Tie or bow tie, leather dress shoes</li>
                <li>• Colors: black, navy, or charcoal</li>
              </ul>
            </div>
          </div>

          {/* Toggle Button */}
          <div className="text-center mt-4">
            <button
              className="mt-2 px-4 py-2 bg-stone-700 text-stone-100 rounded-lg hover:bg-stone-600 transition-colors duration-300"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;