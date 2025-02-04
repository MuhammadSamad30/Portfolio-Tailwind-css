"use client";
import "boxicons/css/boxicons.min.css";

const ProjectsAll = () => {
  const projects = [
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
    }
  ];

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center mb-6">
        All <span className="text-[#ad9bf7]">P</span>rojects
      </h2>
      <div className="flex flex-wrap gap-5 justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="animate-colorCycle bg-gradient-to-r from-purple-700 to-blue-500 text-white w-[300px] p-5 rounded-[15px] shadow-lg transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-2xl"
          >
            <h3 className="text-[1.5rem] flex items-center gap-2 mb-2">
              {project.title} <i className={`bx ${project.icon}`}></i>
            </h3>
            <p className="text-gray-200 text-base leading-6 mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 no-underline px-4 py-2 rounded-lg font-bold transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsAll;
