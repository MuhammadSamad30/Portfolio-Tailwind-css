"use client";
import Image from "next/image";
import Link from "next/link";
import TypingEffect from "@/components/Typing";
import About1 from "@/components/About";
import Project1 from "@/components/Project";
import Skills1 from "@/components/Skills";

const socials = [
  { icon: "bx bxl-github", label: "GitHub", href: "https://github.com/MuhammadSamad30" },
  { icon: "bx bxl-linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-samad-6b0190290/" },
  { icon: "bx bxl-instagram", label: "Instagram", href: "https://www.instagram.com/s_a_m_a_d11/" },
];

const SectionHeading = ({ index, eyebrow, title, note }: { index: string; eyebrow: string; title: string; note: string }) => (
  <div className="mb-10 flex items-end justify-between gap-6 border-b border-white/10 pb-5 sm:mb-14">
    <div><p className="eyebrow mb-3">{index} / {eyebrow}</p><h2 className="section-title">{title}</h2></div>
    <p className="hidden max-w-xs text-right text-sm leading-6 text-[#a7a39b] md:block">{note}</p>
  </div>
);

const Home = () => (
  <main>
    <section className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-6 pb-20 pt-32 md:px-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:pt-28">
      <div className="relative z-10 order-2 lg:order-1">
        <p className="eyebrow mb-7 flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#ff7048] shadow-[0_0_14px_#ff7048]" /> Available for select opportunities</p>
        <h1 className="max-w-4xl text-6xl font-black leading-[.91] tracking-[-.075em] sm:text-7xl md:text-8xl xl:text-[7.5rem]">Muhammad<br /><span className="text-[#ff7048]">Samad<span className="text-[#f4f0e8]">.</span></span></h1>
        <div className="mt-8 flex items-center gap-3 text-lg font-semibold text-[#d6d1c8] sm:text-2xl"><span>I build</span><span className="min-w-0 text-[#ff8968]"><TypingEffect /></span></div>
        <p className="mt-6 max-w-xl text-base leading-7 text-[#a7a39b] sm:text-lg sm:leading-8">Digital products with thoughtful details, clear purpose, and the engineering to make them last. Full-stack developer focused on the modern web.</p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link href="#projects" className="accent-button">Explore my work <i className="bx bx-down-arrow-alt text-xl" /></Link>
          <a href="/Muhammad_Samad.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-7 py-4 font-semibold text-[#f4f0e8] transition hover:border-[#ff7048]/60 hover:text-[#ff8968]">View résumé <i className="bx bx-up-right-arrow-alt ml-1" /></a>
        </div>
        <div className="mt-10 flex items-center gap-4 text-sm text-[#858078]"><span className="uppercase tracking-[.18em]">Find me</span><span className="h-px w-8 bg-white/15" />{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-xl transition hover:-translate-y-1 hover:text-[#ff8968]"><i className={social.icon} /></a>)}</div>
      </div>
      <div className="relative order-1 mx-auto w-full max-w-[430px] lg:order-2 lg:max-w-none">
        <div className="absolute -right-4 top-6 h-[78%] w-[78%] rounded-[2rem] border border-[#ff7048]/50 sm:-right-7 sm:top-8" />
        <div className="relative aspect-[.88] overflow-hidden rounded-[1.7rem] bg-[#29231f]">
          <Image src="/home-pic.png" alt="Muhammad Samad" fill priority sizes="(max-width: 1024px) 80vw, 40vw" className="object-cover object-center grayscale-[.2] transition duration-700 hover:scale-[1.03] hover:grayscale-0" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 pt-24 sm:p-8 sm:pt-28"><p className="eyebrow">Builder · Problem solver · Lifelong learner</p><p className="mt-2 text-sm text-white/75">Turning ambitious ideas into useful software.</p></div>
        </div>
        <div className="absolute -bottom-6 -left-3 rounded-2xl border border-white/10 bg-[#191817] px-5 py-4 shadow-2xl sm:-left-8"><p className="text-2xl font-black text-[#ff8968]">10<span className="text-white">+</span></p><p className="mt-1 text-[10px] uppercase tracking-[.18em] text-[#a7a39b]">Projects shipped</p></div>
        <span className="absolute -right-2 -top-8 hidden font-mono text-xs text-[#858078] sm:block">PK · 24°51&apos; N</span>
      </div>
    </section>

    <div className="mx-auto max-w-7xl space-y-28 px-6 pb-28 pt-10 md:space-y-40 md:px-12 md:pb-40">
      <section id="about" className="scroll-mt-28"><SectionHeading index="01" eyebrow="A little about me" title="The person behind the pixels." note="Curiosity first. Craft always." /><About1 /></section>
      <section id="projects" className="scroll-mt-28"><SectionHeading index="02" eyebrow="Selected work" title="Made to be useful." note="A selection of products, experiments, and ideas brought to life." /><Project1 /></section>
      <section id="skills" className="scroll-mt-28"><SectionHeading index="03" eyebrow="Tools of the trade" title="Built across the stack." note="A growing toolkit for shaping better digital experiences." /><Skills1 /></section>
      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#191817] p-8 sm:p-12 md:p-16"><p className="eyebrow">Have an idea in mind?</p><div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="max-w-2xl text-4xl font-black tracking-[-.06em] sm:text-5xl md:text-6xl">Let&apos;s make something <span className="text-[#ff7048]">matter.</span></h2><Link href="/contact" className="accent-button shrink-0">Start a conversation <i className="bx bx-right-arrow-alt text-xl" /></Link></div></section>
    </div>
  </main>
);

export default Home;
