import React from "react";

const StatsSection = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Globally recognized and growing every day
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side: Large AI Image Card */}
          <div
            className="relative rounded-2xl overflow-hidden min-h-[500px] bg-cover bg-center bg-repeat"
            style={{
              backgroundImage: "url('/images/ai.png')",
            }}
          >
            <div className="relative z-10 p-8 h-full flex flex-col justify-start">
              <div className="text-5xl font-bold text-white mb-4">90%</div>
              <p className="text-white text-lg leading-relaxed">
                Nine out of ten leading business have investments in AI
                technologies
              </p>
            </div>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Right Side: 2x2 Grid of Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Stat 2: Business Investment */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="text-4xl font-bold text-gray-900 mb-3">90%</div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Nine out of ten leading business have investments in AI
                technologies
              </p>
            </div>

            {/* Stat 3: Gartner Survey */}
            <div className="bg-green-100 rounded-2xl p-6">
              <div className="text-4xl font-bold text-gray-900 mb-3">37%</div>
              <p className="text-sm text-gray-700 leading-relaxed">
                37% of organizations surveyed by Gartner now use AI in the
                workplace.
              </p>
            </div>

            {/* Stat 4: Consumer Engagement */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <div className="text-4xl font-bold text-gray-900 mb-3">67%</div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Two-thirds of modern consumers are open to using AI to help
                boost customer engagement
              </p>
            </div>

            {/* Stat 5: Additional Stat */}
            <div className="bg-purple-100 rounded-2xl p-6">
              <div className="text-4xl font-bold text-gray-900 mb-3">67%</div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Two-thirds of modern consumers are open to using AI to help
                boost customer engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
