"use client";
import "boxicons/css/boxicons.min.css";
import { MdTranslate } from "react-icons/md";

const ProjectsAll = () => {
  const projectCategories = {
    html: {
      title: "HTML, CSS & JavaScript",
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
          icon: "bxs-spreadsheet",
        },
        {
          title: "Age Calculator",
          description:
            "A web application to calculate your exact age in years, months, and days.",
          link: "https://age-calculator-delta-pearl.vercel.app/",
          icon: "bx-calculator",
        },
        {
          title: "I'D Card Generator",
          description: "Generate and download your personal ID card.",
          link: "https://muhammad-samad-id-card-generator.vercel.app/",
          icon: "bx-id-card",
        },
        {
          title: "Currency Converter",
          description: "A simple Currency Converter app built using JavaScript.",
          link: "https://muhammad-samad-currency-convertor.vercel.app/",
          icon: "bxl-bitcoin",
        }
      ],
    },
    nextjs: {
      title: "Next.js Projects",
      projects: [
        {
          title: "E-Com Website",
          description:
            "E-commerce Website with responsive ness and Shopping cart functionality!",
          link: "https://e-commerce-website-by-samad.vercel.app/",
          icon: "bxs-store-alt",
        },
        {
          title: "Blog App",
          description:
            "Blog App On Next Js 15 Introduction with Fully Responsive ness.",
          link: "https://basic-blog-app-by-samad.vercel.app/",
          icon: "bxl-blogger",
        },
        {
          title: "E-Com Hackathon",
          description:
            "Figma to E-Commerce Website Pixel perfect with Responsive ness!",
          link: "https://e-commerce-hackathon-by-samad.vercel.app/",
          icon: "bx-store",
        },
        {
          title: "ExamQuiz.io",
          description:
            "a platform to test your knowledge. Start your quiz and challenge yourself with different levels of difficulty",
          link: "https://exam-quiz-io-muhammad-samad.vercel.app/",
          icon: "bx bx-laptop",
        },
        {
          title: "E-Com Back-End",
          description:
            "E-commerce Website with responsive ness and back-end functionality!",
          link: "https://e-commerce-back-end-hackathon-by-samad.vercel.app/",
          icon: "bx bxl-shopify",
        },
        {
          title: "Dino Jumping",
          description:
            "Ball jumping Game like Offline Chrome Dino Game Using NextJs and Tailwind CSS",
          link: "https://dino-clone-game-by-samad.vercel.app/",
          icon: "bx bxs-basketball",
        }
      ],
    },
    python: {
      title: "Python Projects",
      projects: [
        {
          title: "File converter Excel to CSV",
          description:
            "File converter Excel to CSV with responsive ness and back-end functionality! Using Streamlit",
          link: "https://growth-mindset-by-samad.streamlit.app/",
          icon: "bx bxs-file",
        },
        {
          title: "Unit Converter",
          description:
            "Ultimate Unit Converter: A powerful and intuitive unit conversion tool built with Python and Streamlit.",
          link: "https://unit-converter-by-samad.streamlit.app/",
          icon: "bx bx-unite",
        },
        {
          title: "Password Strength",
          description:
            "Password Strength Checker — check, improve, and generate strong passwords easily!",
          link: "https://strength-password-checker-by-samad.streamlit.app/",
          icon: "bx bxs-lock-alt",
        },
        {
          title: "Library Management",
          description:
            "This project allows you to easily manage your personal book collection",
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
          icon: <MdTranslate/>,
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
  }
      ],
    },
  };

  return (
    <div className="p-8 bg-gradient-to-b from-gray-950 to-gray-800 min-h-screen">
      <h2 className="text-5xl font-extrabold text-center mb-16 text-[#fbb703] drop-shadow-2xl tracking-tight">
        All Projects
      </h2>
      <div className="space-y-20">
        {Object.entries(projectCategories).map(([key, category]) => (
          <section key={key}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-10 bg-[#fbb703] rounded-full" />
              <h3 className="text-3xl font-bold text-white tracking-wide">
                {category.title}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
              {category.projects.map((project, index) => (
                <div
                  key={index}
                  className="relative group bg-gradient-to-br from-[#2d2a4a] to-[#1a1833] border border-[#fbb70333] rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-yellow-500/20"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#fbb70322] pointer-events-none" />
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      {typeof project.icon === "string" ? (
                        <i className={`bx ${project.icon} text-4xl text-[#fbb703] drop-shadow-lg`} />
                      ) : (
                        <span className="text-4xl text-[#fbb703] drop-shadow-lg">{project.icon}</span>
                      )}
                      <span className="text-xl font-semibold text-white">{project.title}</span>
                    </div>
                    <p className="text-gray-300 text-base mb-6 flex-1">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 bg-[#fbb703] text-gray-900 px-6 py-2 rounded-full font-bold shadow-md transition-all duration-200 hover:bg-[#ffb703] hover:scale-105"
                    >
                      <span>View Project</span>
                      <i className="bx bx-right-arrow-alt text-xl" />
                    </a>
                  </div>
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
