import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Revolab Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex space-x-4">
            <a
              href="#home"
              className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#service"
              className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              Service
            </a>
            <a
              href="#products"
              className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#blog"
              className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              Blog
            </a>
            <a
              href="#careers"
              className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              Careers
            </a>
          </nav>

          {/* Contact Us Button */}
          <div className="flex items-center">
            <button
              type="button"
              className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-900 hover:text-primary p-2"
              aria-label="Open mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
