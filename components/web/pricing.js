import React, { useState } from "react";
import Link from "next/link";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Pricing calculations
  const monthlyPrice = {
    basic: 9,
    unlimited: 19,
  };

  const yearlyPrice = {
    basic: (monthlyPrice.basic * 12 * 0.8).toFixed(0), // 20% discount
    unlimited: (monthlyPrice.unlimited * 12 * 0.8).toFixed(0), // 20% discount
  };

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Choose Your Plan
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Find the plan that works best for you. Upgrade anytime to access more
          features and higher limits.
        </p>
        {/* Toggle for Monthly/Yearly */}
        <div className="flex items-center justify-center mb-12">
          <span className="mr-3 text-gray-600">Billed Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={handleToggle}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
          <span className="ml-3 text-gray-600">Billed Yearly</span>
          {isYearly && (
            <span className="ml-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">
              20% OFF
            </span>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Free Plan
            </h3>
            <p className="text-gray-600 mb-6">
              Perfect for testing the waters.
            </p>
            <p className="text-4xl font-bold text-gray-900 mb-4">Free</p>
            <p className="text-gray-600 mb-8">2000 words per month</p>
            <ul className="mb-8 space-y-2">
              <li className="text-gray-600">Access to basic templates</li>
              <li className="text-gray-600">Limited AI chat usage</li>
              <li className="text-gray-600">Email support</li>
            </ul>
            <Link
              href="/signup"
              className="mt-auto inline-block bg-black text-white py-3 px-6 text-lg font-medium hover:bg-gray-800 transition duration-300"
            >
              Get Started - It's Free
            </Link>
          </div>

          {/* Basic Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col border-2 border-blue-600">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Basic Plan
            </h3>
            <p className="text-gray-600 mb-6">Great for growing writers.</p>
            <p className="text-4xl font-bold text-gray-900 mb-4">
              ${isYearly ? yearlyPrice.basic : monthlyPrice.basic}/
              {isYearly ? "year" : "month"}
            </p>
            <p className="text-gray-600 mb-8">
              {isYearly ? "20% off with yearly plan" : "50,000 words per month"}
            </p>
            <ul className="mb-8 space-y-2">
              <li className="text-gray-600">All Free Plan features</li>
              <li className="text-gray-600">Priority support</li>
              <li className="text-gray-600">More AI chat usage</li>
            </ul>
            <Link
              href="/signup"
              className="mt-auto inline-block bg-black text-white py-3 px-6 text-lg font-medium hover:bg-gray-800 transition duration-300"
            >
              Start Your Free Trial
            </Link>
          </div>

          {/* Unlimited Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col relative">
            {isYearly && (
              <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-full">
                20% OFF
              </span>
            )}
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Unlimited Plan
            </h3>
            <p className="text-gray-600 mb-6">
              For power users and professionals.
            </p>
            <p className="text-4xl font-bold text-gray-900 mb-4">
              ${isYearly ? yearlyPrice.unlimited : monthlyPrice.unlimited}/
              {isYearly ? "year" : "month"}
            </p>
            <p className="text-gray-600 mb-8">
              {isYearly
                ? "Unlimited words with yearly plan"
                : "Unlimited words"}
            </p>
            <ul className="mb-8 space-y-2">
              <li className="text-gray-600">All Basic Plan features</li>
              <li className="text-gray-600">Unlimited AI chat access</li>
              <li className="text-gray-600">24/7 premium support</li>
            </ul>
            <Link
              href="/signup"
              className="mt-auto inline-block bg-black text-white py-3 px-6 text-lg font-medium hover:bg-gray-800 transition duration-300"
            >
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
