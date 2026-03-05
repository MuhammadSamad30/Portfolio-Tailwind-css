"use client";
import "boxicons/css/boxicons.min.css";
import { MdTranslate } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const ProjectsAll = () => {
  const projectCategories = {
    nextjs: {
      title: "Next.js & Full-Stack",
      accent: "text-emerald-400",
      bgAccent: "bg-emerald-400",
      border: "border-emerald-500/30",
      projects: [
        {
          title: "SmartCalc Hub",
          description: "Featuring multiple calculation modes including 10+ Calculators.",
          link: "https://smartcalc-hub.vercel.app/",
          icon: "bx bxs-calculator",
        },
        {
          title: "E-Com Website",
          description: "E-commerce Website with responsiveness and Shopping cart functionality!",
          link: "https://e-commerce-website-by-samad.vercel.app/",
          icon: "bx bxs-store-alt",
        },
        {
          title: "Blog App",
          description: "Blog App On Next Js 15 Introduction with Fully Responsiveness.",
          link: "https://basic-blog-app-by-samad.vercel.app/",
          icon: "bx bxl-blogger",
        },
        {
          title: "E-Com Hackathon",
          description: "Figma to E-Commerce Website Pixel perfect with Responsiveness!",
          link: "https://e-commerce-hackathon-by-samad.vercel.app/",
          icon: "bx bx-store",
        },
        {
          title: "E-Com Back-End",
          description: "E-commerce Website with responsiveness and back-end functionality!",
          link: "https://e-commerce-back-end-hackathon-by-samad.vercel.app/",
          icon: "bx bxl-shopify",
        },
        {
          title: "Dino Jumping",
          description: "Ball jumping Game like Offline Chrome Dino Game Using NextJs and Tailwind CSS",
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
          description: "Excel to CSV converter with back-end functionality using Streamlit.",
          link: "https://growth-mindset-by-samad.streamlit.app/",
          icon: "bx bxs-file",
        },
        {
          title: "Unit Converter",
          description: "Powerful and intuitive unit conversion tool built with Python and Streamlit.",
          link: "https://unit-converter-by-samad.streamlit.app/",
          icon: "bx bx-unite",
        },
        {
          title: "Password Strength",
          description: "Checker — check, improve, and generate strong passwords easily!",
          link: "https://strength-password-checker-by-samad.streamlit.app/",
          icon: "bx bxs-lock-alt",
        },
        {
          title: "Library Management",
          description: "This project allows you to easily manage your personal book collection.",
          link: "https://library-manager-by-samad.streamlit.app/",
          icon: "bx bxs-book",
        },
        {
          title: "BMI Calculator",
          description: "Calculate your Body Mass Index (BMI) with this simple and effective tool.",
          link: "https://bmi-calculator-by-samad.streamlit.app/",
          icon: "bx bxs-heart",
        },
        {
          title: "Translator Agent",
          description: "A powerful translator agent that can translate text between multiple languages.",
          link: "https://translator-agent-by-samad.streamlit.app/",
          icon: <MdTranslate className="text-4xl" />,
        },
        {
          title: "Multi Mode ChatBot",
          description: "A versatile chatbot that can handle multiple conversation modes.",
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
          description: "Google Gemini Clone with Responsiveness and Pixel Perfect Design",
          link: "https://google-gemini-clone-by-samad.vercel.app/",
          icon: "bx bxs-bot",
        },
        {
          title: "Resume Builder",
          description: "A responsive Resume Builder website built with HTML, CSS, and TypeScript.",
          link: "https://shareable-resume-builder-by-samad.vercel.app/",
          icon: "bx bxs-spreadsheet",
        },
        {
          title: "Age Calculator",
          description: "A web application to calculate your exact age in years, months, and days.",
          link: "https://age-calculator-delta-pearl.vercel.app/",
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
          description: "A simple Currency Converter app built using JavaScript.",
          link: "https://muhammad-samad-currency-convertor.vercel.app/",
          icon: "bx bxl-bitcoin",
        },
      ],
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      <div className="space-y-24 md:space-y-32">
        {Object.entries(projectCategories).map(([key, category]) => (
          <section key={key} className="animate-fadeIn">
            <div className="flex flex-col mb-12">
              <h3 className={`text-2xl sm:text-3xl font-black mb-4 tracking-tight ${category.accent}`}>
                {category.title}
              </h3>
              <div className="w-20 h-1.5 bg-slate-800/50 rounded-full overflow-hidden">
                <div className={`h-full w-1/2 rounded-full ${category.bgAccent}`}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {category.projects.map((project, index) => (
                <div
                  key={index}
                  className={`group glass p-6 sm:p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between border-slate-800/50 hover:${category.border}`}
                >
                  <div>
                    <div className={`w-14 h-14 glass rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-all duration-500 ${category.accent}`}>
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
                    className={`w-full py-4 text-center glass rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:text-slate-950 ${category.bgAccent.replace('bg-', 'hover:bg-')}`}
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

