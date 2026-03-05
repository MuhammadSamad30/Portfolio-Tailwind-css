import "boxicons/css/boxicons.min.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const projectData = [
  {
    title: "SmartCalc Hub",
    description: "Featuring multiple calculation modes including 10+ Calculators.",
    link: "https://smartcalc-hub.vercel.app/",
    icon: "bx bxs-calculator",
    color: "emerald"
  },
  {
    title: "Resume Builder",
    icon: "bx bxs-spreadsheet",
    description: "A responsive Resume Builder website built with HTML, CSS, and TypeScript.",
    link: "https://shareable-resume-builder-by-samad.vercel.app/",
    color: "cyan"
  },
  {
    title: "Gemini Clone",
    icon: "bx bxs-bot",
    description: "Google Gemini Clone with Responsiveness and Pixel Perfect Design",
    link: "https://google-gemini-clone-by-samad.vercel.app/",
    color: "emerald"
  },
  {
    title: "E-Com Website",
    icon: "bx bxs-store-alt",
    description: "E-commerce Website with responsiveness and Shopping cart functionality!",
    link: "https://e-commerce-website-by-samad.vercel.app/",
    color: "cyan"
  },
];

const Project1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
      {projectData.map((project, index) => (
        <div 
          key={index}
          className="group glass p-6 sm:p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/30 flex flex-col justify-between"
        >
          <div>
            <div className={`w-14 h-14 glass rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-all duration-500 ${project.color === 'emerald' ? 'text-emerald-400 group-hover:bg-emerald-500/10' : 'text-cyan-400 group-hover:bg-cyan-500/10'}`}>
              <i className={project.icon}></i>
            </div>
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base">{project.description}</p>
          </div>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`w-full py-4 text-center glass rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${project.color === 'emerald' ? 'hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500' : 'hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500'}`}
          >
            Explore Project
            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      ))}
      
      <div className="group glass p-6 sm:p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/30 flex flex-col justify-between border-dashed border-2 border-slate-700/50 bg-transparent min-h-[300px]">
        <div>
          <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-3xl text-slate-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-all duration-500">
            <i className="bx bx-grid-alt"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3">View All Works</h3>
          <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base">Interested in seeing more of my creative journey and technical projects?</p>
        </div>
        <Link 
          href="/projects" 
          className="w-full py-4 text-center glass rounded-xl font-bold hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all duration-300 flex items-center justify-center gap-2"
        >
          See Full Portfolio
          <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
        </Link>
      </div>  
    </div>
  )
}

export default Project1;