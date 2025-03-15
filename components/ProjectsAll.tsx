"use client";
import "boxicons/css/boxicons.min.css";

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
        },
        {
          title: "Virtual Assistant",
          description:
            "This project is based on voice commands and can answer anything you want!",
          link: "https://virtual-assistant-js-by-samad.vercel.app/",
          icon: "bx-brain",
        },
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
      ],
    },
  };

  return (
    <div className="p-8 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-white drop-shadow-lg">
        All <span className="text-[#ad9bf7]">P</span>rojects
      </h2>
      
      {Object.entries(projectCategories).map(([key, category]) => (
        <div key={key} className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 pl-4 border-l-4 border-[#ad9bf7]">
            {category.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {category.projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-500/10 to-indigo-600/10 backdrop-blur-sm border border-purple-500/20 text-white p-6 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-500/40"
              >
                <h3 className="text-2xl font-semibold flex items-center gap-3 mb-3">
                  <i className={`bx ${project.icon} text-3xl text-[#ad9bf7]`}></i>
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-5 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:translate-y-[-2px]"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsAll;
