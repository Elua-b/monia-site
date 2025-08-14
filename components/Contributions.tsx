'use client'

import React, { useState } from 'react';
import { Copy, CheckCircle } from 'lucide-react';

const Contributions = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const paymentMethods = [
    {
      title: "Monia Courcelle Niyonkuru",
      service: "Momo Pay",
      name: "Maryse Kwizera",
      number: "07886 37741"
    },
    {
      title: "Andy Minega",
      service: "Mobile Pay",
      name: "Arlene Teta Keza",
      number: "07889 92872"
    },
    {
      title: "International Transfers",
      service: "Zelle",
      name: "Gihozokhelia@gmail.com",
      number: "Gihozokhelia@gmail.com"
    }
  ];

  return (
    <section id="contributions" className="py-8 relative overflow-hidden bg-[#4B4038]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-50/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-warm-200 relative z-10">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center uppercase tracking-wide">
            Wedding Contributions
          </h2>
          
          <div className="text-center mb-8">
            <p className="text-lg text-stone-600 mb-4">
              Your presence is the greatest gift, but if you wish to contribute to our new beginning, 
              we would be deeply grateful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="border border-warm-200 rounded-2xl p-4 sm:p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2">{method.title}</h3>
                <p className="text-sm text-stone-500 mb-4">{method.service}</p>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-500 mb-1">
                      Account Name
                    </label>
                    <div className="flex items-center justify-between bg-warm-50 rounded-lg px-3 py-2">
                      <span className="text-sm font-medium text-stone-800">{method.name}</span>
                      <button
                        onClick={() => copyToClipboard(method.name, `name-${index}`)}
                        className="text-stone-400 hover:text-stone-800 transition-colors"
                        aria-label={`Copy ${method.name}`}
                      >
                        {copiedText === `name-${index}` ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-stone-500 mb-1">
                      {method.service === 'Zelle' ? 'Email' : 'Phone Number'}
                    </label>
                    <div className="flex items-center justify-between bg-warm-50 rounded-lg px-3 py-2">
                      <span className="text-sm font-mono font-medium text-stone-800">{method.number}</span>
                      <button
                        onClick={() => copyToClipboard(method.number, `number-${index}`)}
                        className="text-stone-400 hover:text-stone-800 transition-colors"
                        aria-label={`Copy ${method.number}`}
                      >
                        {copiedText === `number-${index}` ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-stone-600">
              Your love and support mean the world to us. Whether you choose to contribute 
              or simply celebrate with us, your presence is what matters most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;