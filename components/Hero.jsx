import React from "react";
import S from "../public/letters.svg";

const Hero = () => {
  return (
    <div className="flex justify-between items-center py-10 lg:p-0 border-y border-gray-700  max-w-6xl mx-auto rounded-xl">
      <div className="px-10 space-y-5">
        <h1 className="sm:text-3xl lg:text-6xl text-gray-300 max-w-xl font-serif">
          <span className="underline decoration-blue-600 decoration-4">
            Sello
          </span>{" "}
          <span className="text-sm">✨</span>
          is a one stop hub for web apps and e-commerce solutions.
        </h1>
        <h2 className="text-[#a9adc1] text-xl py-6 font-medium tracking-wide">
          With focus on elegant designs and development.
        </h2>
        <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Take a tour <span className="text-sm">✨</span>
        </button>
      </div>
      <img
        className="hidden md:inline-flex h-32 lg:h-full"
        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        alt="hero"
      />
    </div>
  );
};

export default Hero;
