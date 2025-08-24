import React from "react";

const TrustedSection = () => {
  return (
    <section className="bg-primary rounded-2xl py-5 container mx-auto">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center px-4">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-md lg:text-xl font-medium text-white leading-tight">
              Trusted by Malaysian based SMEs and Enterprise
            </h2>
          </div>

          {/* Right Content - Company Logos */}
          <div className="flex flex-row gap-2 items-center">
            {/* Logo 1 */}
            <div className="bg-white rounded-lg p-6 flex items-center justify-center hover:scale-105 transition-transform">
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  Company 1
                </span>
              </div>
            </div>

            {/* Logo 2 */}
            <div className="bg-white rounded-lg p-6 flex items-center justify-center hover:scale-105 transition-transform">
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  Company 2
                </span>
              </div>
            </div>

            {/* Logo 3 */}
            <div className="bg-white rounded-lg p-6 flex items-center justify-center hover:scale-105 transition-transform">
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  Company 3
                </span>
              </div>
            </div>

            {/* Logo 4 */}
            <div className="bg-white rounded-lg p-6 flex items-center justify-center hover:scale-105 transition-transform">
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  Company 4
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
