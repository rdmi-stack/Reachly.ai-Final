import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="px-4 py-12 mx-auto max-w-7xl">
      <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
        <div className="col-span-3">
          <Link href="/" passHref>
            <a className="flex items-center">
              <Image
                src="/images/anylogo.jpg"
                alt="AnyCopy"
                width={40}
                height={40}
              />
              <span className="ml-2 text-xl font-semibold text-gray-800">
                AnyCopy
              </span>
            </a>
          </Link>
          <p className="my-4 text-xs leading-normal text-gray-600">
            © 2024 AnyCopy AI All rights reserved.
          </p>
        </div>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Product
          </p>
          <Link href="/blog" passHref>
            <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800">
              Blog
            </a>
          </Link>
          <Link href="/Pricing" passHref>
            <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800">
              Pricing
            </a>
          </Link>
        </nav>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Company
          </p>
          <Link href="/about" passHref>
            <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800">
              About
            </a>
          </Link>
          <Link href="/Contact" passHref>
            <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800">
              Contact Us
            </a>
          </Link>
          <Link href="/privacy-policy" passHref>
            <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800">
              Privacy Policy
            </a>
          </Link>
          <Link href="/terms-of-use" passHref>
            <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800">
              Terms of Use
            </a>
          </Link>
        </nav>
        <div className="col-span-2 md:col-span-1 lg:col-span-4">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Stay up to date
          </p>
          <form>
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2">
              <input
                type="email"
                className="w-full py-3 px-4 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-gray-600">
            Get New Products, News and Other Updates
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
        <p className="mb-2 text-xs text-left text-gray-600 md:mb-0">
          Get New Products, News and Other Updates
        </p>
        <div className="flex gap-4 items-center">
          <a
            href="https://www.facebook.com/anycopyai"
            className="text-gray-600 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://linkedin.com/company/anycopyai"
            className="text-gray-600 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://x.com/anycopyai"
            className="text-gray-600 hover:text-gray-900"
          >
            <Image src="/xlogo.png" alt="X Logo" width={24} height={24} />
          </a>
          <a
            href="https://www.instagram.com/anycopyai"
            className="text-gray-600 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
