"use client";
import Image from "next/image";
import "boxicons/css/boxicons.min.css";
import TypingEffect from "@/components/Typing";
import About1 from "@/components/About";
import Project1 from "@/components/Project";
import Skills1 from "@/components/Skills";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left animate-fadeIn">
            <div>
              <h3 className="text-xl md:text-2xl font-medium text-emerald-400 mb-2">Hey, it&apos;s me</h3>
              <h1 className="text-5xl md:text-7xl font-black mb-4">
                Muhammad Samad
              </h1>
              <div className="text-2xl md:text-4xl font-bold flex items-center justify-center lg:justify-start gap-3">
                <span>I&apos;m a</span>
                <TypingEffect />
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I&apos;m a passionate Full-Stack Developer and lifelong learner, dedicated to crafting high-performance web applications. Currently honing my skills at the Governor&apos;s Sindh IT Initiative, I specialize in building modern, scalable solutions using Next.js, TypeScript, and Python.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4">
              <a
                href="/Muhammad_Samad.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/20 active:scale-95"
              >
                Get Resume
              </a>
              <div className="flex items-center gap-3">
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
                    className="w-12 h-12 flex items-center justify-center glass rounded-full text-2xl text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center group animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative glass p-4 rounded-3xl border-slate-700/50 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <Image
                src={"/home-pic.png"}
                alt="Muhammad Samad"
                width={500}
                height={500}
                className="w-full max-w-[350px] md:max-w-[450px] rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl px-6 py-20 space-y-32">
        <About1 />
        
        <section>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">Featured <span className="text-emerald-400">Projects</span></h2>
            <div className="w-24 h-1 bg-emerald-500 rounded-full"></div>
          </div>
          <Project1 />
        </section>

        <section>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">My <span className="text-emerald-400">Expertise</span></h2>
            <div className="w-24 h-1 bg-emerald-500 rounded-full"></div>
          </div>
          <Skills1 />
        </section>
      </div>
    </div>
  );
};

export default Home;
