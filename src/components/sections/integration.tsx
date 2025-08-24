import React from "react";

const IntegrationSection = () => {
  // Array of integration icons/logos (using placeholder icons for now)
  const integrations = [
    { name: "Slack", icon: "💬" },
    { name: "Microsoft Teams", icon: "🟦" },
    { name: "Zoom", icon: "📹" },
    { name: "Google Drive", icon: "💾" },
    { name: "Salesforce", icon: "☁️" },
    { name: "HubSpot", icon: "🔶" },
    { name: "Shopify", icon: "🛍️" },
    { name: "WhatsApp", icon: "💚" },
    { name: "Discord", icon: "🎮" },
    { name: "Telegram", icon: "✈️" },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Chip */}
          <div className="inline-block  text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            INTEGRATIONS
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Your entire business connected to AI.
          </h2>
        </div>

        {/* Integration Icons Marquee */}
        <div className="mb-12">
          <div className="overflow-hidden">
            <div className="flex animate-marquee hover:pause">
              {/* First set of integrations */}
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="group flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 cursor-pointer mx-4 min-w-[120px]"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {integration.icon}
                  </div>
                  <span className="text-xs text-gray-600 text-center font-medium">
                    {integration.name}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {integrations.map((integration) => (
                <div
                  key={`duplicate-${integration.name}`}
                  className="group flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 cursor-pointer mx-4 min-w-[120px]"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {integration.icon}
                  </div>
                  <span className="text-xs text-gray-600 text-center font-medium">
                    {integration.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button
            type="button"
            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
          >
            Explore 70+ Integrations
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

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Connect with your favorite tools and platforms seamlessly
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
