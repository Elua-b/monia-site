import React from 'react';

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

  return (
    <section id="dresscode" className="py-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-cream-50/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-warm-200 relative z-10">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center uppercase tracking-wide">
            Dress Code
          </h2>
          
          <div className="text-center mb-8">
            <p className="text-xl text-stone-800 mb-4 font-semibold">Black Tie Optional</p>
            <p className="text-stone-600">
              Dress to impress while staying comfortable for our celebration
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-stone-800 mb-4 text-center">Suggested Color Palette</h3>
            <div className="grid grid-cols-3 md:grid-cols-9 gap-2">
              {colors.map((colorItem, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg flex items-center justify-center text-xs font-medium text-center p-1"
                  style={{ backgroundColor: colorItem.color, color: colorItem.color === '#fde68a' || colorItem.color === '#d6d3d1' || colorItem.color === '#f5f5f4' ? '#000' : '#fff' }}
                >
                  {colorItem.name}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">For Her</h3>
              <ul className="space-y-2 text-stone-600">
                <li>• Elegant cocktail dress or formal gown</li>
                <li>• Dressy heels or elegant flats</li>
                <li>• Please avoid white or ivory colors</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">For Him</h3>
              <ul className="space-y-2 text-stone-600">
                <li>• Dark suit or tuxedo with dress shirt</li>
                <li>• Tie or bow tie, leather dress shoes</li>
                <li>• Colors: black, navy, or charcoal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;