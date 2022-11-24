import React from "react";
import S from "../public/letters.svg";

const Hero = () => {
  return (
    <div className="flex justify-between items-center py-10 lg:p-0 border-y border-gray-600  max-w-6xl mx-auto rounded-xl">
      <div className="px-10 space-y-5">
        <h1 className="text-6xl text-white max-w-xl font-serif">
          <span className="underline decoration-blue-600 decoration-4">
            Sello
          </span>{" "}
          <span className="text-sm">✨</span>
          is a place to write, read and connect.
        </h1>
        <h2 className="text-[#4f515d] text-xl font-medium tracking-wide">
          Its easy and free to post your thinking on any topic and connect with
          millions of readers.
        </h2>
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
