import Image from "next/image";
import React from "react";

const RevoCallSection = () => {
  return (
    <section className="container mx-auto my-20">
      <div className="bg-gradient-to-r from-[#FBFDFF] to-[#D9EDFF] rounded-lg px-5 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <Image
                src="/images/revo.png"
                alt="RevoCall AI Interface"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-300 rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-4xl font-bold text-primary leading-tight mb-3">
                Meet RevoCall AI
              </h2>
              <div className="">
                <p className="text-xl text-[#0D3769] font-bold">
                  Built for small business
                </p>
                <p className="text-xl text-[#0D3769] font-bold">
                  Powered by AI
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                className="bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-primary/90 transform transition-all duration-200 shadow-lg hover:shadow-xl group"
                type="button"
              >
                DISCOVER REVOCALL AI
                <svg
                  className="w-5 h-5 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevoCallSection;
