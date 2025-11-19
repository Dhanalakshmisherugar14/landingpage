import React from 'react';
import poster from '../assets/poster.png';
import { TriangleAlert } from 'lucide-react';

export default function Hero() {
  return (
    <section id="herosection" className="bg-white text-gray-900 pt-20 pb-10 relative overflow-hidden font-sans">
      <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="z-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Dematerialise Your Company's Securities Securely Under Rule 9B
          </h1>
          
          <p className="text-gray-700 text-lg mb-2">
            We guide private companies to meet Rule 9B and MCA demat requirements on time.
          </p>
          
          <p className="text-gray-600 text-lg mb-8">
            Fast, accurate and regulator-ready dematerialisation across equity, preference shares, debentures, warrants and other securities.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 text-gray-800 text-sm font-medium">
            If your demat compliance is overdue, complete it now to avoid penalties and operational hurdles.
          </div>
          
          <div className="flex gap-6 items-center">
             <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl font-medium transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-blue-600/70 hover:-translate-y-1">
  Book a call
</button>

            <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-2 transition-colors group">
              See how it works <span className="text-lg transition-transform group-hover:translate-x-1">&rsaquo;</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative z-10 flex justify-center md:justify-end">
          <img 
            src={poster} 
            alt="Demat Secure Illustration" 
            className="w-full max-w-[1000px] object-contain md:translate-x-32"
          />
        </div>
      </div>
      
      {/* Background Elements (Optional for depth) */}
      {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div> */}
    </section>
  );
}