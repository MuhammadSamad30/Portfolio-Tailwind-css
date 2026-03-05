import Image from "next/image";

const About1 = () => {
  return (
    <div className="py-12 md:py-20 flex justify-center items-center px-4 sm:px-0">
      <div className="glass rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 lg:p-20 max-w-6xl flex flex-col lg:flex-row items-center gap-10 lg:gap-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="relative flex justify-center items-center w-full lg:w-1/2">
          <div className="absolute inset-0 bg-emerald-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative p-2 glass rounded-[2rem] border-slate-700/30">
            <Image
              src={"/about-pic.jpg"}
              alt="Muhammad Samad"
              width={500}
              height={500}
              className="relative w-full max-w-[260px] sm:max-w-sm rounded-[1.8rem] border border-slate-700/50 shadow-2xl transition-all duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8 text-center lg:text-left">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">About Me</h2>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight">
              I am <span className="text-gradient">Muhammad Samad</span>
            </h1>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed italic relative px-2 sm:px-0">
            <span className="text-3xl sm:text-4xl absolute -top-4 -left-2 sm:-left-4 text-emerald-500/20 font-serif">&quot;</span>
            My journey in technology is driven by curiosity and a commitment to excellence. As an aspiring developer, I&apos;ve immersed myself in the modern web ecosystem, mastering tools like Next.js and Python to transform complex ideas into elegant digital experiences. I thrive on solving challenging problems and am always eager to embrace the next wave of technological innovation.
            <span className="text-3xl sm:text-4xl absolute -bottom-6 -right-2 sm:-right-4 text-emerald-500/20 font-serif">&quot;</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 sm:mt-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-emerald-500/30 transition-colors group">
              <h3 className="text-emerald-400 font-black text-2xl sm:text-3xl mb-1 group-hover:scale-110 transition-transform origin-left">10+</h3>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">Projects Completed</p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-colors group">
              <h3 className="text-cyan-400 font-black text-2xl sm:text-3xl mb-1 group-hover:scale-110 transition-transform origin-left">∞</h3>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">Continuous Learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;


