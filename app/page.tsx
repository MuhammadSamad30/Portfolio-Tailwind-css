"use client";
import Image from "next/image";
import TypingEffect from "@/components/Typing";
import About1 from "@/components/About";
import Project1 from "@/components/Project";
import Skills1 from "@/components/Skills";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left animate-fadeIn order-2 lg:order-1">
            <div className="space-y-2">
              <h3 className="text-lg md:text-2xl font-semibold text-emerald-400">Hey, it&apos;s me</h3>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                Muhammad Samad
              </h1>
              <div className="text-xl sm:text-2xl md:text-4xl font-bold flex items-center justify-center lg:justify-start gap-3">
                <span className="text-slate-300">I&apos;m a</span>
                <TypingEffect />
              </div>
            </div>
            
            <p className="text-base md:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I&apos;m a passionate <span className="text-white font-medium">Full-Stack Developer</span> and lifelong learner, dedicated to crafting high-performance web applications. I specialize in building modern, scalable solutions using <span className="text-emerald-400">Next.js</span>, <span className="text-cyan-400">TypeScript</span>, and <span className="text-emerald-400">Python</span>.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mt-4">
              <a
                href="/Muhammad_Samad.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-500/20 active:scale-95 text-center w-full sm:w-auto"
              >
                Download Resume
              </a>
              <div className="flex items-center gap-4">
                {[
                  { icon: "bx bxl-github", href: "https://github.com/MuhammadSamad30" },
                  { icon: "bx bxl-linkedin", href: "https://www.linkedin.com/in/muhammad-samad-6b0190290/" },
                  { icon: "bx bxl-instagram", href: "https://www.instagram.com/s_a_m_a_d11/" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center glass rounded-xl text-2xl text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all hover:-translate-y-1"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center group animate-fadeIn order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl group-hover:blur-[50px] transition-all duration-700"></div>
            <div className="relative glass p-3 sm:p-4 rounded-[2.5rem] border-slate-700/50 lg:rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out shadow-2xl">
              <Image
                src={"/home-pic.png"}
                alt="Muhammad Samad"
                width={500}
                height={500}
                className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] rounded-[2rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl px-6 md:px-12 py-16 md:py-32 space-y-24 md:space-y-48">
        <About1 />
        
        <section id="projects" className="scroll-mt-32">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 tracking-tight">
              Featured <span className="text-emerald-400">Projects</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></div>
          </div>
          <Project1 />
        </section>

        <section id="skills" className="scroll-mt-32">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 tracking-tight">
              My <span className="text-emerald-400">Expertise</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></div>
          </div>
          <Skills1 />
        </section>
      </div>
    </div>
  );
};

export default Home;
