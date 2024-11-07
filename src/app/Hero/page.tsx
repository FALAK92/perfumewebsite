"use client";

import Image from "next/image";
import { useEffect } from "react";




export default function Hero() {
  

  useEffect(() => {
    const handleScroll = () => {
      const content = document.getElementById("content");
      if (content) {
        if (window.scrollY > 50) {
          content.classList.add("animate-fade");
        } else {
          content.classList.remove("animate-fade");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/b2.webp')",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-16 gap-12">
        
        <div
          id="content"
          className="text-left text-pink-900 max-w-lg transition-all duration-700 ease-in-out"
        >
          <h1 className="text-5xl font-bold mb-4 animate-slide-left">
            Discover Your Signature Scent
          </h1>
          <p className="text-lg mb-6 animate-fade-in">
            Explore our exclusive range of perfumes to find a fragrance that
            matches your style.
          </p>
          <button className="px-6 py-3 bg-pink-900 text-white hover:bg-pink-700 rounded-md font-semibold transition duration-300 animate-bounce">
            Shop Now
          </button>
        </div>

        
        <div className="relative w-[600px] h-[600px] animate-fade-in-up hover:scale-105 transition-transform duration-500 ease-out">

          
          <div className="relative w-[600px] h-[600px]">
            <Image
              src="/p2r.png"
              alt="Perfume Bottle 1"
              layout="fill"
              objectFit="contain"
            />
          </div>

        </div>
      </div>
    </div>
  );
}