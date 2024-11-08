"use client";
import { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-evenly bg-[#222] text-[#98afca] hover:text-[#4784ca] p-2.5 px-5">
      <h1 className="text-lg font-bold pr-[51%] pl-[2%] sm:text-2xl">
        Portfolio
      </h1>
      <button
        onClick={toggleMenu}
        className="block text-xl cursor-pointer absolute top-2.5 right-5 sm:hidden"
      >
        &#9776;
      </button>
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col sm:flex sm:flex-row items-center justify-center bg-gray-800 w-full p-2.5 absolute top-14 left-0 z-10 gap-5 sm:relative sm:top-auto sm:left-auto sm:bg-transparent sm:w-auto sm:p-0`}
      >
        <li className="pl-[3%] pr-2.5 text-lg font-semibold transition-all duration-200 ease-in hover:text-teal-500 hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="pl-[3%] pr-2.5 text-lg font-semibold transition-all duration-200 ease-in hover:text-teal-500 hover:underline">
          <Link href="/about">About</Link>
        </li>
        <li className="pl-[3%] pr-2.5 text-lg font-semibold transition-all duration-200 ease-in hover:text-teal-500 hover:underline">
          <Link href="/project">Project</Link>
        </li>
        <li className="pl-[3%] pr-2.5 text-lg font-semibold transition-all duration-200 ease-in hover:text-teal-500 hover:underline">
          <Link href="/skills">Skills</Link>
        </li>
        <li className="pl-[3%] pr-2.5 text-lg font-semibold transition-all duration-200 ease-in hover:text-teal-500 hover:underline">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
