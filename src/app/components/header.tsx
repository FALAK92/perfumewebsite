"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-pink-400 text-pink-900 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <h1 className="text-4xl font-bold sm:text-4xl">
          <Link href="/" className="hover:text-pink-700">
            Aroma
          </Link>
        </h1>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-pink-900"
          aria-label="Toggle Menu"
        >
          <svg
            className={`w-8 h-8 transition-transform ${
              isOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col bg-pink-300 md:flex md:flex-row items-center absolute md:static top-16 right-0  md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none w-1/2 md:w-auto z-50`}
        >
          <Link
            href="/"
            className="block px-5 py-2 text-[24px] font-medium hover:text-pink-700  rounded-md transition-all"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-5 py-2 text-[24px] font-medium hover:text-pink-700  rounded-md transition-all"
          >
            About
          </Link>
          <Link
            href="/product"
            className="block px-5 py-2 text-[24px] font-medium hover:text-pink-700 rounded-md transition-all"
          >
            Product
          </Link>
          <Link
            href="/contact"
            className="block px-5 py-2 text-[24px] font-medium hover:text-pink-700 rounded-md transition-all"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;




