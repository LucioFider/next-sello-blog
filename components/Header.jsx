import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-6xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            src="https://links.papareact.com/yvf"
            alt="logo"
            className="w-44 object-contain cursor-pointer"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3 className="text-gray-300">About</h3>
          <h3 className="text-gray-300">Contact</h3>
          <h3 className="text-gray-600 bg-gray-300 px-4 py-1 rounded-full cursor-pointer">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-gray-500">
        <h3 text-gray-400>Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-gray-200">
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;
