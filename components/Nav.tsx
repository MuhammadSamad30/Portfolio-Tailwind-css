"use client";
import { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#0e0e0e] text-[#fbb703] p-3 px-6 flex items-center justify-between relative">
      <h1 className="text-xl font-bold sm:text-2xl">Portfolio</h1>

      <button
        onClick={toggleMenu}
        className="text-2xl sm:hidden absolute top-3 right-5"
      >
        &#9776;
      </button>

      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col sm:flex sm:flex-row gap-5 items-center sm:gap-8 absolute sm:static top-14 left-0 w-full sm:w-auto bg-[#222] sm:bg-transparent z-10 py-4 sm:py-0`}
      >
        {[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Project", href: "/project" },
          { label: "Skills", href: "/skills" },
          { label: "Contact", href: "/contact" },
        ].map((item) => (
          <li
            key={item.href}
            className="text-lg font-semibold hover:text-white transition-all duration-200"
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
