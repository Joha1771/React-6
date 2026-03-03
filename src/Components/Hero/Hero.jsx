import React from "react";
import heroImg from "../../assets/hero-image.png";
import ShopByRoom from "../ShopByRoom/ShopByRoom";
import ContentCards from "../ContentCards/ContentCards.jsx";

function HeroSection() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header>
        <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <ul className="flex items-center p-0 m-0 space-x-8 list-none">
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Furniture
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Why Feather
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Feather for Business
                </a>
              </li>
            </ul>
            <div className="absolute transform -translate-x-1/2 left-1/2">
              <span className="text-2xl font-bold text-gray-900">feather</span>
            </div>
            <ul className="flex items-center p-0 m-0 space-x-8 list-none">
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Check if We Deliver
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Search
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Account
                </a>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
              Curated and Convenient
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-gray-700">
              We've built our offerings on the principle that everyone deserves
              high-quality design without the high cost. We offer elevated
              rental inventory, to transform your space. Reuse and recycle - we
              make the decision as light as a "feather"
            </p>

            <button className="px-8 py-4 font-semibold text-white transition-colors duration-200 bg-orange-500 rounded-full hover:bg-orange-600">
              Get Started
            </button>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-xl">
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
