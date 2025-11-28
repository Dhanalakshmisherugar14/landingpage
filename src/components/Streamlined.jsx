import React from 'react';
import { CheckCircleIcon, UsersIcon, ClockIcon } from '@heroicons/react/24/outline';

const Streamlined = () => {
  return (
    <section id="demat-process" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            #COMPLIANCE-FIRST PARTNER
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Streamlined Dematerialisation Process
          </h2>

          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As an authorised channel partner for <strong>NDML's RTA Division</strong>, we provide reliable,
            compliance-first support with priority onboarding and streamlined processes for private companies
          </p>

           <button className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-9 py-4 rounded-xl font-medium transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-blue-600/70 hover:-translate-y-1">
            Get Started Now
          </button>
        </div>

        <hr className="mb-16 border-gray-200" />

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-600 text-left">
            <CheckCircleIcon className="w-9 h-9 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Document Preparation
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              We verify all documents required by <strong>NSDL/NDML</strong> to ensure zero rejections and faster ISIN approval:
            </p>

            <ul className="space-y-3 text-sm text-gray-700 list-inside">
              <li className="flex items-start"><span className="text-blue-600 mr-2 mt-1">✓</span>Net worth certificate, Board resolution</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2 mt-1">✓</span>AoA, MoA and Certificate of Incorporation</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2 mt-1">✓</span>Latest audited financials, GST copy</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2 mt-1">✓</span>PAS-3 / SH-7 (if applicable)</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2 mt-1">✓</span>Mandatory undertakings & NSDL formats</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-600 text-left">
            <UsersIcon className="w-9 h-9 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Tripartite Agreement</h3>

            <p className="text-sm text-gray-600 mb-6">
              We coordinate the mandatory agreement for <strong>ISIN activation</strong> between the three core parties:
            </p>

            <div className="space-y-4 text-base font-medium text-gray-800">
              <p className="p-3 bg-blue-50 rounded-lg border border-blue-200">1. Your Company</p>
              <p className="p-3 bg-blue-50 rounded-lg border border-blue-200">2. NDML/NSDL (Depository)</p>
              <p className="p-3 bg-blue-50 rounded-lg border border-blue-200">3. RTA (Registrar & Share Agent)</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-600 text-left">
            <ClockIcon className="w-9 h-9 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Timeline Transparency</h3>

            <p className="text-sm text-gray-600 mb-6">
              We manage the process efficiently and keep you informed at every step
            </p>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-extrabold text-blue-600">15–20</p>
              <p className="text-lg font-semibold text-gray-700 mt-2">Working Days</p>
              <p className="text-xs text-gray-500 mt-1">
                Typical NSDL onboarding and ISIN activation once documents are submitted
              </p>
            </div>

            <p className="text-xs text-gray-500 mt-6 text-center">
              *Timeline is an estimate based on Depository/RTA processing speed
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
          Ready to secure your compliance and simplify share management?
        </p>

        <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3.5 rounded-xl font-medium transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-blue-600/70 hover:-translate-y-1">
          Start Your Demat Process Now
        </button>

      </div>
    </section>
  );
};

export default Streamlined;
