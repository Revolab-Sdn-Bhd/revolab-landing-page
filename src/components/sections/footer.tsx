import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6">
        <button
          type="button"
          className="w-full bg-gradient-to-r from-white to-[#FAB312] text-primary p-6 rounded-md text-xl md:text-2xl lg:text-4xl font-semibold transition-all duration-200 group mb-10 flex flex-row justify-between cursor-pointer items-center"
        >
          Let's start the conversation.
          <svg
            className="w-8 h-8 ml-4 inline-block transition-transform duration-300 group-hover:translate-x-1"
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:hello@revolab.ai"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    hello@revolab.ai
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+60194567920"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +6019 4567920
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#integrations"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#security"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Use Cases</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#sales"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Sales
                  </a>
                </li>
                <li>
                  <a
                    href="#product-research"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Product & Research
                  </a>
                </li>
                <li>
                  <a
                    href="#customer-success"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Customer Success
                  </a>
                </li>
                <li>
                  <a
                    href="#hiring-recruiting"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Hiring & Recruiting
                  </a>
                </li>
                <li>
                  <a
                    href="#remote-teams"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Remote Teams
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#customers"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Customers
                  </a>
                </li>
                <li>
                  <a
                    href="#press"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#blog"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#help-center"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#changelog"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Revolab. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#privacy-policy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
