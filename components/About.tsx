import Image from "next/image";

const About1 = () => (
  <div className="grid items-center gap-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
    <div className="relative mx-auto w-full max-w-sm lg:mx-0">
      <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[1.5rem] border border-[#ff7048]/50" />
      <div className="relative overflow-hidden rounded-[1.5rem] bg-[#24211e]">
        <Image src="/about-pic.png" alt="Muhammad Samad" width={500} height={500} className="aspect-[.9] w-full object-cover grayscale-[.2] transition duration-700 hover:grayscale-0" />
      </div>
      <p className="mt-6 font-mono text-xs uppercase tracking-[.16em] text-[#858078]">Curious by nature · Developer by choice</p>
    </div>
    <div className="py-5 lg:py-10">
      <p className="eyebrow mb-4">A practice of making</p>
      <h3 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-.04em] text-[#f4f0e8] sm:text-4xl">I turn complex ideas into <span className="text-[#ff8968]">simple, thoughtful experiences.</span></h3>
      <p className="mt-6 max-w-2xl text-base leading-8 text-[#a7a39b]">My journey in technology is driven by curiosity and a commitment to craft. I work across the modern web ecosystem, using Next.js, TypeScript, and Python to shape useful products from the first sketch to the final interaction. I enjoy solving the hard parts, learning in public, and making every detail earn its place.</p>
      <div className="mt-9 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/[.025] p-5 sm:p-6"><p className="text-3xl font-black tracking-tight text-[#ff8968]">10<span className="text-[#f4f0e8]">+</span></p><p className="mt-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#a7a39b] sm:text-xs">Projects completed</p></div>
        <div className="rounded-2xl border border-white/10 bg-white/[.025] p-5 sm:p-6"><p className="text-3xl font-black tracking-tight text-[#f4f0e8]">∞</p><p className="mt-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#a7a39b] sm:text-xs">Always learning</p></div>
      </div>
    </div>
  </div>
);

export default About1;


