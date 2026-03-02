import React from "react";
import heroImg from "../../assets/hero-image.png";
import ShopByRoom from "../ShopByRoom/ShopByRoom";

function HeroSection() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                Furniture
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                Why Feather
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                Feather for Business
              </a>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <span className="text-2xl font-bold text-gray-900">feather</span>
            </div>
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                Check if We Deliver
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                Search
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                Account
              </a>
              <button className="text-gray-900 hover:text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Curated and Convenient
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              We've built our offerings on the principle that everyone deserves
              high-quality design without the high cost. We offer elevated
              rental inventory, to transform your space. Reuse and recycle - we
              make the decision as light as a "feather"
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200">
              Get Started
            </button>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={heroImg}
                alt="Modern interior design"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <ShopByRoom />
    </div>
  );
}
export default HeroSection;
