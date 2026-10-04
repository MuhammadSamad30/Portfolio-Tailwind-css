"use client";
import "boxicons/css/boxicons.min.css";
import { MdTranslate } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const ProjectsAll = () => {
  const projectCategories = {
    trading: {
      title: "Forex & Financial Education",
      accent: "text-emerald-400",
      bgAccent: "bg-emerald-400",
      border: "border-emerald-500/30",
      projects: [
        {
          title: "TradingHub - Master Trading Concepts",
          description:
            "A comprehensive trading learning platform to help learn forex trading easily, featuring Smart Money Concepts (SMC), actionable strategies, and trade proofs.",
          link: "https://trade-material.vercel.app/",
          icon: "bx bx-trending-up",
        },
      ],
    },
    nextjs: {
      title: "Next.js & Full-Stack",
      accent: "text-emerald-400",
      bgAccent: "bg-emerald-400",
      border: "border-emerald-500/30",
      projects: [
        {
          title: "SmartCalc Hub",
          description:
            "Featuring multiple calculation modes including 10+ Calculators.",
          link: "https://smartcalc-hub.vercel.app/",
          icon: "bx bxs-calculator",
        },
        {
          title: "E-Com Website",
          description:
            "E-commerce Website with responsiveness and Shopping cart functionality!",
          link: "https://e-commerce-website-by-samad.vercel.app/",
          icon: "bx bxs-store-alt",
        },
        {
          title: "Blog App",
          description:
            "Blog App On Next Js 15 Introduction with Fully Responsiveness.",
          link: "https://basic-blog-app-by-samad.vercel.app/",
          icon: "bx bxl-blogger",
        },
        {
          title: "E-Com Hackathon",
          description:
            "Figma to E-Commerce Website Pixel perfect with Responsiveness!",
          link: "https://e-commerce-hackathon-by-samad.vercel.app/",
          icon: "bx bx-store",
        },
        {
          title: "E-Com Back-End",
          description:
            "E-commerce Website with responsiveness and back-end functionality!",
          link: "https://e-commerce-back-end-hackathon-by-samad.vercel.app/",
          icon: "bx bxl-shopify",
        },
        {
          title: "Dino Jumping",
          description:
            "Ball jumping Game like Offline Chrome Dino Game Using NextJs and Tailwind CSS",
          link: "https://dino-clone-game-by-samad.vercel.app/",
          icon: "bx bxs-basketball",
        },
      ],
    },
    python: {
      title: "Python & Automation",
      accent: "text-cyan-400",
      bgAccent: "bg-cyan-400",
      border: "border-cyan-500/30",
      projects: [
        {
          title: "File converter",
          description:
            "Excel to CSV converter with back-end functionality using Streamlit.",
          link: "https://growth-mindset-by-samad.streamlit.app/",
          icon: "bx bxs-file",
        },
        {
          title: "Unit Converter",
          description:
            "Powerful and intuitive unit conversion tool built with Python and Streamlit.",
          link: "https://unit-converter-by-samad.streamlit.app/",
          icon: "bx bx-unite",
        },
        {
          title: "Password Strength",
          description:
            "Checker — check, improve, and generate strong passwords easily!",
          link: "https://strength-password-checker-by-samad.streamlit.app/",
          icon: "bx bxs-lock-alt",
        },
        {
          title: "Library Management",
          description:
            "This project allows you to easily manage your personal book collection.",
          link: "https://library-manager-by-samad.streamlit.app/",
          icon: "bx bxs-book",
        },
        {
          title: "BMI Calculator",
          description:
            "Calculate your Body Mass Index (BMI) with this simple and effective tool.",
          link: "https://bmi-calculator-by-samad.streamlit.app/",
          icon: "bx bxs-heart",
        },
        {
          title: "Translator Agent",
          description:
            "A powerful translator agent that can translate text between multiple languages.",
          link: "https://translator-agent-by-samad.streamlit.app/",
          icon: <MdTranslate className="text-4xl" />,
        },
        {
          title: "Multi Mode ChatBot",
          description:
            "A versatile chatbot that can handle multiple conversation modes.",
          link: "https://multi-mode-chatbot-by-samad.streamlit.app/",
          icon: "bx bxs-chat",
        },
        {
          title: "Universal Downloader",
          description: "Download videos from various platforms with ease.",
          link: "https://video-downloader-by-samad.streamlit.app/",
          icon: "bx bxs-video",
        },
      ],
    },
    frontend: {
      title: "Modern Frontend",
      accent: "text-emerald-400",
      bgAccent: "bg-emerald-400",
      border: "border-emerald-500/30",
      projects: [
        {
          title: "Gemini Clone",
          description:
            "Google Gemini Clone with Responsiveness and Pixel Perfect Design",
          link: "https://google-gemini-clone-by-samad.vercel.app/",
          icon: "bx bxs-bot",
        },
        {
          title: "Resume Builder",
          description:
            "A responsive Resume Builder website built with HTML, CSS, and TypeScript.",
          link: "https://shareable-resume-builder-by-samad.vercel.app/",
          icon: "bx bxs-spreadsheet",
        },
        {
          title: "Age Calculator",
          description:
            "A web application to calculate your exact age in years, months, and days.",
          link: "https://age-calculator-muhammad-samad.vercel.app/",
          icon: "bx bx-calculator",
        },
        {
          title: "ID Card Generator",
          description: "Generate and download your personal ID card.",
          link: "https://muhammad-samad-id-card-generator.vercel.app/",
          icon: "bx bx-id-card",
        },
        {
          title: "Currency Converter",
          description:
            "A simple Currency Converter app built using JavaScript.",
          link: "https://muhammad-samad-currency-convertor.vercel.app/",
          icon: "bx bxl-bitcoin",
        },
      ],
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      {/* Featured Showcase Section: Forex Trading Learning Project */}
      <section className="mb-20 md:mb-28 animate-fadeIn">
        <div className="relative group glass rounded-[2.5rem] p-6 sm:p-10 md:p-12 border-emerald-500/30 overflow-hidden shadow-2xl transition-all duration-500 hover:border-emerald-500/50">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10 group-hover:bg-emerald-500/20 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10 group-hover:bg-cyan-500/20 transition-all duration-700"></div>

          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10">
            {/* Left Content Column */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm font-semibold mb-6 tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Featured Project Spotlight • Live Platform
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white">
                  TradingHub <span className="text-gradient">— Learn Forex Trading</span>
                </h3>

                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
                  A comprehensive trading learning platform built to help anyone learn forex trading easily. Features structured modules covering beginner forex fundamentals, advanced Smart Money Concepts (SMC), high-probability market strategies, risk management, and verified trade proofs.
                </p>

                {/* Feature Highlights Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  <div className="glass p-3.5 rounded-2xl border-slate-800/80 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-xl shrink-0">
                      <i className="bx bx-book-open"></i>
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-white">Forex Basics</h5>
                      <p className="text-[11px] text-slate-400">Easy Fundamentals</p>
                    </div>
                  </div>

                  <div className="glass p-3.5 rounded-2xl border-slate-800/80 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl shrink-0">
                      <i className="bx bx-trending-up"></i>
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-white">SMC Mastery</h5>
                      <p className="text-[11px] text-slate-400">Institutional Logic</p>
                    </div>
                  </div>

                  <div className="glass p-3.5 rounded-2xl border-slate-800/80 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-xl shrink-0">
                      <i className="bx bx-line-chart"></i>
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-white">Strategies</h5>
                      <p className="text-[11px] text-slate-400">Actionable Setups</p>
                    </div>
                  </div>

                  <div className="glass p-3.5 rounded-2xl border-slate-800/80 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl shrink-0">
                      <i className="bx bx-shield-quarter"></i>
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-white">Risk Control</h5>
                      <p className="text-[11px] text-slate-400">Capital Protection</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons & Link */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://trade-material.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-500/20 active:scale-95 group/btn"
                >
                  <span>Launch Live Demo</span>
                  <FaArrowRight className="text-sm transition-transform group-hover/btn:translate-x-1" />
                </a>
                <a
                  href="https://trade-material.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 glass hover:border-emerald-500/50 rounded-2xl text-xs sm:text-sm text-slate-300 hover:text-emerald-400 transition-all flex items-center gap-2 font-mono"
                >
                  <i className="bx bx-link-external text-emerald-400 text-base"></i>
                  https://trade-material.vercel.app/
                </a>
              </div>
            </div>

            {/* Right Information Card */}
            <div className="lg:w-[380px] flex flex-col justify-center">
              <div className="glass rounded-2xl p-6 border-slate-700/60 bg-slate-950/60 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Platform Active
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Platform</span>
                    <span className="text-white font-semibold">TradingHub</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Domain</span>
                    <span className="text-emerald-400 font-medium">Forex Education</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Learning Method</span>
                    <span className="text-cyan-400 font-medium">SMC & Price Action</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Target Level</span>
                    <span className="text-slate-300 font-medium">Beginner to Pro</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Deployment</span>
                    <span className="text-slate-300 font-medium">Vercel (Live)</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-2.5">
                    <i className="bx bxs-badge-check text-emerald-400 text-lg shrink-0 mt-0.5"></i>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Empowering aspiring traders with free guides, SMC setups, and risk management strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-24 md:space-y-32">
        {Object.entries(projectCategories).map(([key, category]) => (
          <section key={key} className="animate-fadeIn">
            <div className="flex flex-col mb-12">
              <h3
                className={`text-2xl sm:text-3xl font-black mb-4 tracking-tight ${category.accent}`}
              >
                {category.title}
              </h3>
              <div className="w-20 h-1.5 bg-slate-800/50 rounded-full overflow-hidden">
                <div
                  className={`h-full w-1/2 rounded-full ${category.bgAccent}`}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {category.projects.map((project, index) => (
                <div
                  key={index}
                  className={`group glass p-6 sm:p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between border-slate-800/50 hover:${category.border}`}
                >
                  <div>
                    <div
                      className={`w-14 h-14 glass rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-all duration-500 ${category.accent}`}
                    >
                      {typeof project.icon === "string" ? (
                        <i className={project.icon} />
                      ) : (
                        project.icon
                      )}
                    </div>
                    <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 flex-1">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 text-center glass rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:text-slate-950 ${category.bgAccent.replace("bg-", "hover:bg-")}`}
                  >
                    View Project
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProjectsAll;
