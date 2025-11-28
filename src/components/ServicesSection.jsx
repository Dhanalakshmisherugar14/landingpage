import React from "react";
import { ShieldCheckIcon, CpuChipIcon, ClockIcon } from "@heroicons/react/24/outline";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white" id="act-now">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
          Act Now To Secure Your Company’s Future Today
        </h2>

        {/* Sub-head */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16">
          Demat is both a legal requirement and a governance advantage. Completing it strengthens 
          compliance, transparency and investor readiness
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

          {/* CARD 1 */}
          <div className="
              p-10 bg-white rounded-2xl shadow-md border border-gray-200 
              text-center transition-all duration-300 ease-out
              hover:shadow-2xl hover:border-blue-500 hover:bg-blue-50 hover:scale-105
            ">
            <div className="flex justify-center mb-5">
              <ShieldCheckIcon className="w-14 h-14 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Avoid Penalties & Compliance Blocks
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Non-compliance under Section 450 blocks actions like issuing securities, buybacks and rights issues
            </p>
          </div>

          {/* CARD 2 */}
          <div className="
              p-10 bg-white rounded-2xl shadow-md border border-gray-200 
              text-center transition-all duration-300 ease-out
              hover:shadow-2xl hover:border-blue-500 hover:bg-blue-50 hover:scale-105
            ">
            <div className="flex justify-center mb-5">
              <CpuChipIcon className="w-14 h-14 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Enable A Digital Cap Table
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              A complete digital demat system accelerates diligence, funding and audit processes
            </p>
          </div>

          {/* CARD 3 */}
          <div className="
              p-10 bg-white rounded-2xl shadow-md border border-gray-200 
              text-center transition-all duration-300 ease-out
              hover:shadow-2xl hover:border-blue-500 hover:bg-blue-50 hover:scale-105
            ">
            <div className="flex justify-center mb-5">
              <ClockIcon className="w-14 h-14 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Use The MCA Window Wisely
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Non-small companies are past the deadline — later transitions get 18 months from year-end to comply
            </p>
          </div>

        </div>

        {/* CTA */}
        <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-9 py-4 rounded-xl font-medium transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-blue-600/70 hover:-translate-y-1">
          Go Compliant Today
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
