import React from "react";
import { ShieldCheck, FileCheck, Users, Ban } from "lucide-react";

const MandatorySection = () => {
  return (
    <section id="why-demat" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-900 mb-5">
          Why Dematerialisation Is Mandatory Now
        </h2>

        {/* Sub-head */}
       <p className="text-gray-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-16 font-normal">
  Rule 9B makes electronic holding and transfer compulsory for eligible private companies.
  If Rule 9B applies to your company, you must transition fully to the demat system
</p>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-16">

          {/* Card 1 */}
          <div className="p-7 rounded-2xl shadow-sm border border-gray-200 bg-white hover:shadow-lg hover:border-blue-400 transition-all">
            <div className="flex items-center justify-center mb-4">
              <FileCheck className="text-blue-600" size={32} />
            </div>
            <h3 className="font-semibold text-gray-800 text-xl mb-3">
              Issue Only Dematerialised Securities
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              All new securities must be issued only in dematerialised form — physical certificates
              are no longer permitted
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-7 rounded-2xl shadow-sm border border-gray-200 bg-white hover:shadow-lg hover:border-blue-400 transition-all">
            <div className="flex items-center justify-center mb-4">
              <ShieldCheck className="text-blue-600" size={32} />
            </div>
            <h3 className="font-semibold text-gray-800 text-xl mb-3">
              Dematerialise All Existing Physical Holdings
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Companies must establish the required systems to convert all existing physical
              securities into demat
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-7 rounded-2xl shadow-sm border border-gray-200 bg-white hover:shadow-lg hover:border-blue-400 transition-all">
            <div className="flex items-center justify-center mb-4">
              <Users className="text-blue-600" size={32} />
            </div>
            <h3 className="font-semibold text-gray-800 text-xl mb-3">
              Promoters, Directors & KMP Must Hold in Demat
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Before buybacks, bonus issues, rights issues or private placements, key personnel
              must hold their securities in demat form
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-7 rounded-2xl shadow-sm border border-gray-200 bg-white hover:shadow-lg hover:border-blue-400 transition-all">
            <div className="flex items-center justify-center mb-4">
              <Ban className="text-blue-600" size={32} />
            </div>
            <h3 className="font-semibold text-gray-800 text-xl mb-3">
              No Physical Transfers Allowed Post-Deadline
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Physical transfers are prohibited. Shareholders must dematerialise to transfer
              or subscribe to any new securities
            </p>
          </div>
        </div>

        {/* Final Note */}
        <p className="text-gray-600 max-w-3xl mx-auto text-md leading-relaxed mb-10">
          This mandate is grounded in Section 29 of the Companies Act and Rule 9B of the PAS Rules.
          The statutory deadline for most private companies has already passed
        </p>

        {/* CTA Button */}
         <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-9 py-4 rounded-xl font-medium transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-blue-600/70 hover:-translate-y-1">
          Check Rule 9B Applicability
        </button>

      </div>
    </section>
  );
};

export default MandatorySection;
