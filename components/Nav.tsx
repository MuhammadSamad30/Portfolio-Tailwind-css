"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-slate-950/90 backdrop-blur-lg py-4 shadow-xl border-b border-slate-800/50" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform">
          <span className="text-gradient">SAMAD</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className={`text-sm font-semibold tracking-wide transition-all hover:text-emerald-400 relative group ${
                  pathname === item.href ? "text-emerald-400" : "text-slate-300"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full ${pathname === item.href ? "w-full" : ""}`}></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass text-2xl text-slate-300 hover:text-white transition-all z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <i className="bx bx-x"></i> : <i className="bx bx-menu-alt-right"></i>}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-slate-900 border-l border-slate-800 z-40 p-8 transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-16">
          <ul className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={toggleMenu}
                  className={`text-xl font-bold block transition-all hover:translate-x-2 ${
                    pathname === item.href ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pt-8 border-t border-slate-800">
            <p className="text-sm text-slate-500 mb-4">Connect with me</p>
            <div className="flex gap-4">
              <a href="https://github.com/MuhammadSamad30" target="_blank" className="text-2xl text-slate-400 hover:text-emerald-400"><i className="bx bxl-github"></i></a>
              <a href="https://www.linkedin.com/in/muhammad-samad-6b0190290/" target="_blank" className="text-2xl text-slate-400 hover:text-emerald-400"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

