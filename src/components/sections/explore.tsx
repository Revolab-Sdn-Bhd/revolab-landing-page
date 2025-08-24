import Image from "next/image";
import React from "react";

const ExploreSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Explore our AI solution from Revolab
          </h2>
          <p className="text-xl text-caption mx-auto">
            Identify Your Challenges and Discover How Our AI Solutions Can Help
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="p-4">
            <div className="w-full h-60 bg-secondary rounded-xl mb-6 flex items-center justify-center relative">
              <Image
                src="/images/explore/1_1.png"
                alt="explore_1_1"
                width={300}
                height={300}
              />
              <Image
                src="/images/explore/1_2.png"
                alt="explore_1_2"
                width={120}
                height={120}
                className="absolute bottom-2 left-2"
              />
              <Image
                src="/images/explore/1_3.png"
                alt="explore_1_3"
                width={120}
                height={120}
                className="absolute top-2 right-2"
              />
            </div>
            <div className="mb-6">
              <h3 className="text-sm font-bold text-primary mb-3">
                CALL CENTERS
              </h3>
              <p className="text-[#101828] font-semibold leading-relaxed">
                Our AI powered assistant for eCommerce delivers personalized
                support to boost engagement and cut response times
              </p>
            </div>
          </div>

          <div className="p-4">
            <div className="w-full h-60 bg-secondary rounded-xl mb-6 flex items-center justify-center relative">
              <Image
                src="/images/explore/2_1.png"
                alt="explore_2_1"
                width={300}
                height={200}
                objectFit="cover"
                className="rounded-lg w-[300px] h-[200px] object-cover"
              />
              <Image
                src="/images/explore/2_2.png"
                alt="explore_2_2"
                width={150}
                height={150}
                className="absolute bottom-2 left-2"
              />
            </div>
            <div className="mb-6">
              <h3 className="text-sm font-bold text-primary mb-3">
                ENTERPRISE
              </h3>
              <p className="text-[#101828] font-semibold leading-relaxed">
                Our AI powered assistant for eCommerce delivers personalized
                support to boost engagement and cut response times
              </p>
            </div>
          </div>

          <div className="p-4">
            <div className="w-full h-60 bg-secondary rounded-xl mb-6 flex items-center justify-center relative">
              <Image
                src="/images/explore/3_1.png"
                alt="explore_3_1"
                width={300}
                height={200}
                objectFit="cover"
                className="rounded-lg w-[300px] h-[200px] object-cover"
              />
              <Image
                src="/images/explore/3_2.png"
                alt="explore_3_2"
                width={150}
                height={150}
                className="absolute bottom-2 right-2"
              />
            </div>
            <div className="mb-6">
              <h3 className="text-sm font-bold text-primary mb-3">ECOMMERCE</h3>
              <p className="text-[#101828] font-semibold leading-relaxed">
                Our AI powered assistant for eCommerce delivers personalized
                support to boost engagement and cut response times
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
