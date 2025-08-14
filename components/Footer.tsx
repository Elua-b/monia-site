'use client'

import React from 'react';
import { Key } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  const handleAdminClick = () => {
    router.push('/admin/login');
  };

  return (
    <footer className="bg-gradient-to-br from-warm-800 via-stone-800 to-warm-900 text-cream-50 py-12 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-gold-400 to-warm-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-r from-warm-400 to-gold-500 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide text-gold-200">
            Monia & Andy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-warm-400 mx-auto mb-4"></div>
          <p className="text-cream-200 italic text-lg">
            Made with love for our special day
          </p>
        </div>

        <div className="border-t border-warm-600/50 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div>
              <p className="text-cream-300 text-sm">
                © 2025 Monia & Andy. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="text-cream-300 text-sm">
                Website by: 
                <a 
                  href="tel:+250791810242" 
                  className="text-gold-300 hover:text-gold-200 transition-colors ml-1 font-medium"
                >
                  Eloi BUGINGO (+250 791 810 242)
                </a>
              </div>
              
              <div className="text-cream-300 text-sm">
                Planned by: 
                <span className="text-gold-300 ml-1 font-medium">M_Rêves.events</span>
              </div>

              {/* Admin Access Button */}
              <button
                onClick={handleAdminClick}
                className="flex items-center space-x-2 text-cream-300 hover:text-gold-300 transition-colors text-sm opacity-50 hover:opacity-100"
                title="Admin Access"
              >
                <Key className="h-4 w-4" />
                <span>Admin</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;