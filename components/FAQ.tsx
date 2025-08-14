'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What time should I arrive?",
      answer: "We recommend arriving 15 minutes before the scheduled start time to ensure smooth seating arrangements. For the Gusaba ceremony, please arrive by 2:45 PM, and for the church service, please arrive by 12:45 PM."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, both venues have adequate parking facilities. At Panorama Hope Garden and Jalia Hall & Garden, there is ample space for all our guests' vehicles."
    },
    {
      question: "Can I bring a plus-one?",
      answer: "Please refer to your invitation for guest details. If your invitation includes a plus-one, we'd be delighted to have them join us. Otherwise, we kindly ask that you attend solo due to venue capacity."
    },
    {
      question: "Are children welcome?",
      answer: "Yes, children are welcome at our celebration! We love having families celebrate with us. Please include them in your RSVP count so we can prepare accordingly."
    },
    {
      question: "What if I have dietary restrictions?",
      answer: "Please let us know about any dietary restrictions when you RSVP. We'll work with our caterers to ensure everyone has delicious options to enjoy during the celebration."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#4B4038' }}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-stone-800/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-stone-700/50 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-100 mb-8 text-center uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 mb-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-stone-700/50 rounded-2xl">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className="text-lg sm:text-xl font-semibold text-stone-200">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-stone-200" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-stone-200" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-stone-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center bg-stone-700/80 rounded-2xl p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-100 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-stone-300 mb-4">
              Please don't hesitate to reach out to us for any additional information.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
              <a
                href="mailto:moniacourcele@gmail.com"
                className="text-gold-300 hover:text-gold-200 transition-colors font-medium"
              >
                moniacourcele@gmail.com
              </a>
              <a
                href="tel:+4520465296"
                className="text-gold-300 hover:text-gold-200 transition-colors font-medium"
              >
                +45 20 46 52 96
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;