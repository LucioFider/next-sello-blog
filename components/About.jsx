import Image from "next/image";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const About = () => {
  return (
    <div className="flex justify-between items-center gap-12 lg:gap-8 py-32 px-4  max-w-6xl mx-auto rounded-xl">
      <div className="rounded-lg">
        <Image
          className="hidden md:inline-flex h-32 lg:h-full rounded-lg"
          src="https://images.unsplash.com/photo-1665419652014-3b70f9774d62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsZW5kZXIlMjAzZCUyMGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          width={500}
          height={500}
          alt="hero"
        />
      </div>
      <div className="px-10 space-y-5">
        <h1 className="text-5xl text-gray-300 max-w-xl font-serif tracking-wide leading-tight">
          Hi, Im Fidelis Lucio. I help create quality modern web applications.
        </h1>
        <h2 className="text-[#a9adc1] text-xl font-medium tracking-wide">
          I focus on designing and developing web applications and custom
          e-commerce apps.
        </h2>
        <h2 className="flex items-center gap-2 py-5 text-[#d0d3e0] font-bold text-3xl tracking-wide">
          Learn more about Sello{" "}
          <span className="text-4xl text-white cursor-pointer">
            {" "}
            <BsArrowRightCircle />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default About;
