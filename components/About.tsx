import Image from "next/image";

const About1 = () => {
  return (
    <div className="py-20 px-6 flex justify-center items-center">
      <div className="glass rounded-[2rem] p-8 md:p-16 max-w-6xl flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative flex justify-center items-center w-full md:w-1/2">
          <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-2xl"></div>
          <Image
            src={"/about-pic.jpg"}
            alt="Muhammad Samad"
            width={500}
            height={500}
            className="relative w-full max-w-sm rounded-2xl border border-slate-700/50 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <div>
            <h2 className="text-emerald-400 font-semibold tracking-wider uppercase mb-2">About Me</h2>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              I am <span className="text-gradient">Muhammad Samad</span>
            </h1>
          </div>
          
          <p className="text-lg text-slate-400 leading-relaxed italic">
            "My journey in technology is driven by curiosity and a commitment to excellence. As an aspiring developer, I&apos;ve immersed myself in the modern web ecosystem, mastering tools like Next.js and Python to transform complex ideas into elegant digital experiences. I thrive on solving challenging problems and am always eager to embrace the next wave of technological innovation."
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
              <h3 className="text-emerald-400 font-bold text-2xl mb-1">10+</h3>
              <p className="text-sm text-slate-500">Projects Completed</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
              <h3 className="text-cyan-400 font-bold text-2xl mb-1">Continuous</h3>
              <p className="text-sm text-slate-500">Learning & Growth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
