import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex justify-between items-center gap-12 lg:gap-8 py-24 px-4  max-w-6xl mx-auto rounded-xl">
      <div className="rounded-lg">
        <Image
          className="hidden md:inline-flex h-32 lg:h-full py-10 rounded-lg"
          src="https://images.unsplash.com/photo-1652077859695-de2851a95620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjUzfHxibGVuZGVyJTIwM2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
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
      </div>
    </div>
  );
};

export default About;
