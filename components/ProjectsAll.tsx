"use client";
import "boxicons/css/boxicons.min.css";
import { MdTranslate } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const ProjectsAll = () => {
  const projectCategories = {
    trading: {
      title: "Forex & Financial Education",
      accent: "text-[#ff8968]",
      bgAccent: "bg-[#ff7048]",
      border: "border-[#ff7048]/30",
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
      accent: "text-[#ff8968]",
      bgAccent: "bg-[#ff7048]",
      border: "border-[#ff7048]/30",
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
        {
          title: "Tasbeeh App",
          description:
            "A digital Tasbeeh app for keeping count of your daily dhikr.",
          link: "https://tasbeeh-app-by-samad.vercel.app/",
          icon: "bx bx-moon",
        },
      ],
    },
    python: {
      title: "Python & Automation",
      accent: "text-[#ff8968]",
      bgAccent: "bg-[#ff7048]",
      border: "border-[#ff7048]/30",
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
      accent: "text-[#ff8968]",
      bgAccent: "bg-[#ff7048]",
      border: "border-[#ff7048]/30",
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
          title: "MyIdentity.io",
          description: "Generate and download your personal ID card.",
          link: "https://myidentity-io.vercel.app/",
          icon: "bx bx-id-card",
        }
      ],
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      {/* Featured Showcase Section: Forex Trading Learning Project */}
      <section className="mb-20 md:mb-28 animate-fadeIn">
        <div className="relative group glass rounded-[2rem] p-6 sm:p-10 md:p-12 border-[#ff7048]/25 overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#ff7048]/50">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#ff7048]/10 blur-[100px] transition-all duration-700 group-hover:bg-[#ff7048]/20"></div>
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#ffb38e]/5 blur-[100px] transition-all duration-700 group-hover:bg-[#ffb38e]/10"></div>

          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10">
            {/* Left Content Column */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff7048]/30 bg-[#ff7048]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#ff8968] md:text-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff7048]"></span>
                  Featured Project Spotlight • Live Platform
                </div>

                <h3 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  TradingHub <span className="text-[#ff8968]">— Learn Forex Trading</span>
                </h3>

                <p className="mb-8 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
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
                  className="accent-button group/btn shadow-lg shadow-[#ff7048]/10"
                >
                  <span>Launch Live Demo</span>
                  <FaArrowRight className="text-sm transition-transform group-hover/btn:translate-x-1" />
                </a>
                <a
                  href="https://trade-material.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex items-center gap-2 rounded-2xl px-5 py-3.5 font-mono text-xs text-slate-300 transition-all hover:border-[#ff7048]/50 hover:text-[#ff8968] sm:text-sm"
                >
                  <i className="bx bx-link-external text-[#ff8968] text-base"></i>
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
                  <span className="flex items-center gap-1.5 font-mono text-xs text-[#ff8968]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff7048]"></span>
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
                    <span className="font-medium text-[#ff8968]">Forex Education</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Learning Method</span>
                    <span className="font-medium text-[#ff8968]">SMC & Price Action</span>
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
                    <i className="bx bxs-badge-check mt-0.5 shrink-0 text-lg text-[#ff8968]"></i>
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
                      className="group glass flex flex-col justify-between rounded-[1.5rem] border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff7048]/50 sm:p-8"
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
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-4 font-bold transition-all duration-300 hover:border-[#ff7048] hover:bg-[#ff7048] hover:text-slate-950"
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
