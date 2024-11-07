"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-pink-300 text-pink-900">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold sm:text-5xl">
          <Link href="/" >Aroma</Link>
        </h1>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-pink-900"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        
        <nav
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row md:items-center w-full md:w-auto mt-4 md:mt-0`}
        >
          <Link href="/" className="block px-5 py-2 text-2xl hover:text-pink-700">
            Home
          </Link>
          <Link href="/about" className="block px-5 py-2 text-2xl hover:text-pink-700">
            About
          </Link>
          <Link href="/product" className="block px-5 py-2 text-2xl hover:text-pink-700">
            Product
          </Link>
          <Link href="/contact" className="block px-5 py-2 text-2xl hover:text-pink-700">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

