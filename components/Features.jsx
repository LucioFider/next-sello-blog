import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Modern Frontends",
    cta: "Get Started",
    imgUrl:
      "https://images.unsplash.com/photo-1642583980275-876450a71529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzIzfHxibGVuZGVyJTIwM2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Open Source",
    cta: "Get Started",
    imgUrl:
      "https://images.unsplash.com/photo-1639548206755-b20081a7cadc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEwfHxibGVuZGVyJTIwM2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "E-Commerce",
    cta: "Get Started",
    imgUrl:
      "https://images.unsplash.com/photo-1639548206755-b20081a7cadc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEwfHxibGVuZGVyJTIwM2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

const Features = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl items-center justify-center text-[#a9adc1] ">
        Services 🚀
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
              <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                {feature.cta}
              </button>
              <Image
                className="rounded-lg mt-4"
                src={feature.imgUrl}
                alt="feature-image"
                width={200}
                height={200}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
