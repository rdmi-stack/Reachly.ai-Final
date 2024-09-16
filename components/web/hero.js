import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 md:mr-8 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Boost Your Writing with AI
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Unlock effortless writing with our AI-powered tools. Access 50+
              templates for blogs, ads, and emails, and streamline your work
              with our AI chat, Chrome extension, and desktop app.
            </p>
            <div className="flex flex-col md:flex-row md:items-start">
              <div>
                <a
                  href="/signup"
                  className="inline-block bg-black text-white text-lg md:text-xl font-semibold py-4 px-8 hover:bg-gray-800 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Get Started - It's Free
                </a>
                <p className="mt-4 text-sm text-gray-600 font-medium">
                  No credit card required
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full max-w-6xl mx-auto mt-16">
              <div className="relative z-10 bg-white shadow-2xl overflow-hidden">
                {/* Safari-like browser frame */}
                <div className="bg-gray-100 p-2 flex items-center border-b border-gray-200">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 bg-red-500"></div>
                    <div className="h-3 w-3 bg-yellow-500"></div>
                    <div className="h-3 w-3 bg-green-500"></div>
                  </div>
                  <div className="mx-auto bg-white px-3 py-1 text-sm text-gray-600 flex items-center">
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                      />
                    </svg>
                    app.anycopy.co
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/images/anycopy-hero.png"
                    alt="AI Assistant"
                    width={2048}
                    height={1536}
                    className="w-full"
                  />
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
