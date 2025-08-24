import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="container mx-auto">
      <div className="min-h-[90vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center m-4">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-5xl font-bold text-primary">
                Empower Your Business with Advanced Localized Conversational and
                Voice AI
              </h1>
              <p className="text-xl text-caption leading-relaxed">
                Transform your business interactions and drive results with our
                advanced AI solutions
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                className="bg-primary hover:bg-primary/80 cursor-pointer text-white  px-4 py-2 rounded-full font-medium transition-colors"
              >
                Get Started
              </button>
              <button
                type="button"
                className="border-2 border-primary text-primary cursor-pointer hover:bg-primary hover:text-white px-4 py-2 rounded-full font-medium transition-colors"
              >
                Learn More
              </button>
            </div>

            {/* Check Points */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-caption font-medium">
                  Real-Time Analytics
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-caption font-medium">
                  Seamless Integrations
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-caption font-medium">
                  Automated Workflows
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Interface */}
          <div className="lg:order-last">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4">
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="/images/hero.jpg"
                    alt="Business Analytics Dashboard"
                    width={400}
                    height={400}
                    className="w-[300px] h-[250px] md:w-[400px] md:h-[400px] object-cover [clip-path:circle(100%_at_100%_100%)]"
                  />
                </div>

                <div className="bg-secondary rounded-lg p-4 shadow-md max-w-[200px] flex items-start flex-col justify-end gap-3">
                  <div className="text-4xl font-bold text-primary mb-1">
                    230+
                  </div>
                  <p className="text-sm text-caption leading-tight">
                    Some big companies that we work with and trust very much
                  </p>
                  <div className="w-12 h-1 bg-primary rounded-full mt-2"></div>
                </div>

                {/* <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div> */}
              </div>
              <div className=" bg-secondary rounded-lg p-4 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-caption mb-4">
                      Increase your productivity with our AI
                    </p>
                    <h3 className="text-xl font-bold text-primary">
                      Drive more traffic and product sales
                    </h3>
                  </div>
                  <div className="flex items-end space-x-1">
                    <div className="w-[56px] h-[100px] bg-primary rounded-sm"></div>
                    <div className="w-[56px] h-[120px] bg-primary rounded-sm"></div>
                    <div className="w-[56px] h-[150px] bg-primary rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
