import React from "react";
import { CheckCircle } from "lucide-react";

const Apply = () => {
  return (
    <section className="py-24 bg-white" id="rule9b-check">
      <div className="max-w-5xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
          Does Rule 9B Apply to Your Company?
        </h2>

        {/* Sub-head */}
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-12">
          A clear checklist to know if you fall under the mandate.
        </p>

        {/* Checklist Card */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-10 text-left space-y-6 hover:shadow-md transition">

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            You are covered under Rule 9B if you are a private company and:
          </h3>

          <ul className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
              You are not a small company as per Section 2(85).
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
              You are a private holding company.
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
              You are a private subsidiary company, including wholly owned subsidiaries.
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
              You are a Section 8 company with share capital.
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
              You are a private company or body corporate governed by a special Act.
            </li>
          </ul>
        </div>

        {/* Extra Info */}
        <p className="text-gray-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mt-10 mb-10">
          We provide clarity on how Rule 9B works for holding and subsidiary companies,
          deemed public companies, and group structures that fall under both Rule 9A and Rule 9B.
        </p>

        {/* CTA */}
         <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-9 py-4 rounded-xl font-medium transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-blue-600/70 hover:-translate-y-1">
          Confirm Your Status
        </button>

      </div>
    </section>
  );
};

export default Apply;
