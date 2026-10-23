"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Skills", href: "/skills" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-white/10 bg-[#10100f]/90 py-3 backdrop-blur-xl" : "border-transparent bg-transparent py-5"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          <Link href="/" className="group flex items-center gap-3" aria-label="Samad home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff7048] text-sm font-black text-[#17110f] transition-transform group-hover:rotate-[-8deg]">MS</span>
            <span className="text-sm font-bold uppercase tracking-[.18em] text-[#f4f0e8]">Samad<span className="text-[#ff7048]">.</span></span>
          </Link>
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => <li key={item.href}><Link href={item.href} className={`text-sm font-medium transition hover:text-[#ff8968] ${pathname === item.href ? "text-[#ff8968]" : "text-[#b7b2aa]"}`}>{item.label}</Link></li>)}
          </ul>
          <Link href="/contact" className="hidden items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-[#f4f0e8] transition hover:border-[#ff7048] hover:text-[#ff8968] md:inline-flex">Let&apos;s talk <i className="bx bx-right-arrow-alt text-lg" /></Link>
          <button type="button" onClick={() => setIsOpen((open) => !open)} className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-2xl text-[#f4f0e8] md:hidden" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}><i className={`bx ${isOpen ? "bx-x" : "bx-menu-alt-right"}`} /></button>
        </div>
      </nav>
      <div className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity md:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setIsOpen(false)} />
      <aside className={`fixed right-0 top-0 z-50 flex h-full w-[min(86vw,380px)] flex-col border-l border-white/10 bg-[#151412] px-8 pb-8 pt-28 shadow-2xl transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`} aria-hidden={!isOpen}>
        <p className="eyebrow mb-8">Navigate</p>
        <ul className="space-y-6">{navLinks.map((item, index) => <li key={item.href}><Link href={item.href} tabIndex={isOpen ? 0 : -1} className="flex items-baseline gap-4 text-3xl font-black tracking-tight text-[#f4f0e8] transition hover:text-[#ff8968]"><span className="font-mono text-xs text-[#ff7048]">0{index + 1}</span>{item.label}</Link></li>)}</ul>
        <Link href="/contact" tabIndex={isOpen ? 0 : -1} className="accent-button mt-auto">Let&apos;s talk <i className="bx bx-right-arrow-alt text-xl" /></Link>
      </aside>
    </>
  );
};

export default Nav;

