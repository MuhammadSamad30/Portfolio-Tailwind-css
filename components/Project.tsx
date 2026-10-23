import "boxicons/css/boxicons.min.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";


const projectData = [
  {
    title: "TradingHub",
    description:
      "A comprehensive trading learning platform to learn forex trading easily, featuring Smart Money Concepts (SMC), strategies, and live trade proofs.",
    link: "https://trade-material.vercel.app/",
    icon: "bx bx-trending-up",
  },
  {
    title: "Age Calculator",
    description:
      "A web application to calculate your exact age in years, months, and days.",
    link: "https://age-calculator-muhammad-samad.vercel.app/",
    icon: "bx bx-calculator",
  },
  {
    title: "SmartCalc Hub",
    description:
      "Featuring multiple calculation modes including 10+ Calculators.",
    link: "https://smartcalc-hub.vercel.app/",
    icon: "bx bxs-calculator",
  },
  {
    title: "Resume Builder",
    icon: "bx bx-edit",
    description:
      "Build a Professional Resume in Minutes. Choose from 4+ Templates, Customize with Ease, and Download Your Perfect CV Instantly.",
    link: "https://shareable-resume-builder-by-samad.vercel.app/",
  },
  {
    title: "Gemini Clone",
    icon: "bx bxs-bot",
    description:
      "Google Gemini Clone with Responsiveness and Pixel Perfect Design",
    link: "https://google-gemini-clone-by-samad.vercel.app/",
  },
  {
    title: "Tasbeeh App",
    description:
      "A digital Tasbeeh app for keeping count of your daily dhikr.",
    link: "https://tasbeeh-app-by-samad.vercel.app/",
    icon: "bx bx-moon",
  },
];

const Project1 = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3 w-full">
      {projectData.map((project, index) => (
        <div
          key={index}
          className="group relative flex min-h-[310px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#181817] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff7048]/50 sm:p-7"
        >
          <span className="absolute right-6 top-6 font-mono text-xs text-white/30">0{index + 1}</span>
          <div>
            <div
              className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-[#ff7048]/20 bg-[#ff7048]/10 text-2xl text-[#ff8968] transition group-hover:rotate-[-6deg] group-hover:bg-[#ff7048]/15"
            >
              <i className={project.icon}></i>
            </div>
            <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-[#f4f0e8] transition-colors group-hover:text-[#ff8968]">
              {project.title}
            </h3>
            <p className="mb-8 max-w-sm text-sm leading-7 text-[#a7a39b]">
              {project.description}
            </p>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-between rounded-xl border border-white/10 px-4 py-3.5 text-sm font-semibold text-[#d9d5ce] transition hover:border-[#ff7048]/60 hover:bg-[#ff7048] hover:text-[#17110f]"
          >
            Explore Project
            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      ))}

      <div className="flex min-h-[310px] flex-col justify-between rounded-[1.5rem] border border-dashed border-white/20 bg-transparent p-6 transition hover:border-[#ff7048]/60 sm:p-7">
        <div>
          <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-2xl text-[#a7a39b]">
            <i className="bx bx-grid-alt"></i>
          </div>
          <h3 className="mb-3 text-xl font-bold text-[#f4f0e8]">More in the archive</h3>
          <p className="mb-8 max-w-sm text-sm leading-7 text-[#a7a39b]">
            Interested in seeing more of my creative journey and technical
            projects?
          </p>
        </div>
        <Link
          href="/projects"
          className="flex w-full items-center justify-between rounded-xl border border-white/10 px-4 py-3.5 text-sm font-semibold text-[#d9d5ce] transition hover:border-[#ff7048]/60 hover:bg-[#ff7048] hover:text-[#17110f]"
        >
          See Full Portfolio
          <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default Project1;
