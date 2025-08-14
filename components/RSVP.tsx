'use client'

import React, { useState } from 'react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guests: '1',
    guestNames: '',
    dietaryRestrictions: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your RSVP has been submitted successfully.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          attendance: '',
          guests: '1',
          guestNames: '',
          dietaryRestrictions: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        setSubmitMessage(`Error: ${errorData.error || 'Failed to submit RSVP'}`);
      }
    } catch (error) {
      setSubmitMessage('Error: Failed to submit RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="rsvp" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Dark Brown Background */}
      <div className="absolute inset-0 bg-[#4B4038] opacity-100" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-800/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-stone-700/50 hover:shadow-3xl transition-all duration-500 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-100 mb-8 text-center uppercase tracking-wide">
            RSVP
          </h2>
          
          <div className="text-center mb-8">
            <p className="text-xl sm:text-2xl text-stone-200 mb-4">We can't wait to celebrate with you!</p>
            <p className="text-lg sm:text-xl text-stone-300 font-semibold">Please respond by December 1, 2025</p>
          </div>

          {submitMessage && (
            <div className={`mb-6 p-4 rounded-lg text-center ${
              submitMessage.includes('Error') 
                ? 'bg-red-100 text-red-800 border border-red-300' 
                : 'bg-green-100 text-green-800 border border-green-300'
            }`}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-stone-200 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-stone-700/50 text-stone-100 placeholder-stone-400"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-200 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-stone-700/50 text-stone-100 placeholder-stone-400"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-stone-200 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-stone-700/50 text-stone-100 placeholder-stone-400"
                  placeholder="+250 XXX XXX XXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-200 mb-2">
                  Will you attend? *
                </label>
                <select
                  name="attendance"
                  required
                  value={formData.attendance}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-stone-700/50 text-stone-100"
                >
                  <option value="" className="text-stone-400">Please select</option>
                  <option value="both" className="text-stone-100">Both Traditional Wedding and Reception</option>
                  <option value="traditional-only" className="text-stone-100">Traditional Wedding Only</option>
                  <option value="reception-only" className="text-stone-100">Reception Only</option>
                  <option value="no" className="text-stone-100">Sorry, I can't make it</option>
                </select>
              </div>
            </div>

            {formData.attendance && formData.attendance !== 'no' && (
              <>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-200 mb-2">
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-stone-700/50 text-stone-100"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num} className="text-stone-100">{num}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-200 mb-2">
                      Guest Names
                    </label>
                    <input
                      type="text"
                      name="guestNames"
                      value={formData.guestNames}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-stone-700/50 text-stone-100 placeholder-stone-400"
                      placeholder="Names of additional guests"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-stone-200 mb-2">
                    Dietary Restrictions
                  </label>
                  <input
                    type="text"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-stone-700/50 text-stone-100 placeholder-stone-400"
                    placeholder="Any dietary restrictions or allergies"
                  />
                </div>
              </>
            )}

            <div className="mb-6">
              <label className="block text-sm font-medium text-stone-200 mb-2">
                Special Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none bg-stone-700/50 text-stone-100 placeholder-stone-400"
                placeholder="Any special message for the happy couple?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-gold-600 to-warm-700 text-white py-4 px-8 rounded-lg font-semibold hover:from-gold-700 hover:to-warm-800 transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Send RSVP'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVP;