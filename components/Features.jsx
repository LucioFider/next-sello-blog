import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Modern Frontends",
    cta: "Get Started",
    imgUrl:
      "https://images.unsplash.com/photo-1642583980275-876450a71529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzIzfHxibGVuZGVyJTIwM2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    comingSoon: false,
  },
  {
    title: "Open Source",
    cta: "Get Started",
    imgUrl:
      "https://images.unsplash.com/photo-1653200256772-06b9e87b40f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGJsZW5kZXIlMjAzZCUyMHRveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    comingSoon: true,
  },
  {
    title: "E-Commerce",
    cta: "Get Started",
    imgUrl:
      "https://images.unsplash.com/photo-1641563817292-d2085b953e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJsZW5kZXIlMjAzZCUyMHRveXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    comingSoon: true,
  },
];

const Features = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl place-content-center text-[#a9adc1] ">
        Services🚀
      </h2>
      <h2 className="text-2xl items-center justify-center text-gray-300">
        Defining what we offer!
      </h2>
      <div className="grid lg:grid-cols-3 mx-auto gap-12 lg:gap-8 py-24 px-4 sm:px-6 lg:px-0">
        {features.map((feature) => {
          return (
            <div
              key={feature}
              className="border border-[#2e3039] p-8 shadow-lg items-center bg-[#2e3039] rounded-2xl relative flex flex-col"
            >
              <h2 className="text-4xl font-semibold text-[#a9adc1] my-5">
                {feature.title}
              </h2>
              {features.comingSoon && (
                <p className="absolute top-0 -translate-y-1/2 bg-cyan-500 px-3 py-0.5 text-sm font-semibold tracking-wide text-white shadow-md rounded-full">
                  Coming Soon
                </p>
              )}
              <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                {feature.cta}
              </button>
              <Image
                className="rounded-lg mt-4"
                src={feature.imgUrl}
                alt="feature-image"
                width={500}
                height={500}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
