import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTimes,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="bg-[#191919] w-full">
      {" "}
      {/* Changed bg-black to bg-[#191919] */}
      <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <Link href="/">
              <a
                className="flex items-center text-xl font-semibold text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                aria-label="Brand"
              >
                <img
                  src="/images/anylogo.jpg"
                  alt="AnyCopy"
                  className="logo"
                  width={40}
                  height={40}
                />{" "}
                {/* Adjust width/height as needed */}
                AnyCopy
              </a>
            </Link>
          </div>
          {/* End Col */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Product</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <Link href="/blog">
                  <a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-100 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Blog
                  </a>
                </Link>
              </p>

              <p>
                <Link href="/Pricing">
                  <a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Pricing
                  </a>
                </Link>
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Company</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <Link href="/about">
                  <a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-100 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    About
                  </a>
                </Link>
              </p>
              <p>
                <Link href="/Contact">
                  <a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-100 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Contact Us
                  </a>
                </Link>
              </p>
              <p>
                <Link href="/privacy-policy">
                  <a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-100 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Privacy Policy
                  </a>
                </Link>
              </p>
              <p>
                <Link href="/terms-of-use">
                  <a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-100 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Terms of Use
                  </a>
                </Link>
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="col-span-2">
            <h4 className="font-semibold text-gray-100">Stay up to date</h4>
            <form>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-gray-800">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Enter your email"
                  />
                </div>
                <a
                  className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Subscribe
                </a>
              </div>
              <p className="mt-3 text-sm text-gray-400">
                Get New Products, News and Other Updates{" "}
              </p>
            </form>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 AnyCopy AI All rights reserved.
            </p>
          </div>
          {/* End Col */}
          <div className="flex gap-4 items-center py-4">
            <a
              className="w-10 h-10 flex justify-center items-center text-white rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-600"
              href="https://www.facebook.com/anycopyai"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              className="w-10 h-10 flex justify-center items-center text-white rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-600"
              href="https://linkedin.com/company/anycopyai"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              className="w-10 h-10 flex justify-center items-center text-white rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-600"
              href="https://x.com/anycopyai"
              style={{ overflow: "hidden", position: "relative" }} // Corrected comment format
            >
              <img
                src="/xlogo.png"
                alt="X Logo"
                style={{
                  width: "auto",
                  height: "80%",
                  maxWidth: "80%",
                  objectFit: "contain",
                }}
              />
            </a>

            <a
              className="w-10 h-10 flex justify-center items-center text-white rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-600"
              href="https://www.instagram.com/anycopyai"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
          {/* End Social Brands */}
        </div>
      </div>
    </footer>
  );
};

export default Modal;
