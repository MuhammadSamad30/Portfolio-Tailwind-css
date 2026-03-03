import "boxicons/css/boxicons.min.css";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const projectData = [
  {
    title: "SmartCalc Hub",
    description: "Featuring multiple calculation modes including 10+ Calculators.",
    link: "https://smartcalc-hub.vercel.app/",
    icon: "bx bxs-calculator",
  },
  {
    title: "Resume Builder",
    icon: "bx bxs-spreadsheet",
    description: "A responsive Resume Builder website built with HTML, CSS, and TypeScript.",
    link: "https://shareable-resume-builder-by-samad.vercel.app/"
  },
  {
    title: "Gemini Clone",
    icon: "bx bxs-bot",
    description: "Google Gemini Clone with Responsiveness and Pixel Perfect Design",
    link: "https://google-gemini-clone-by-samad.vercel.app/"
  },
  {
    title: "E-Com Website",
    icon: "bx bxs-store-alt",
    description: "E-commerce Website with responsiveness and Shopping cart functionality!",
    link: "https://e-commerce-website-by-samad.vercel.app/"
  },
];

const Project1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
      {projectData.map((project, index) => (
        <div 
          key={index}
          className="group glass p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/30 flex flex-col justify-between"
        >
          <div>
            <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-3xl text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all duration-500">
              <i className={project.icon}></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">{project.description}</p>
          </div>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full py-4 text-center glass rounded-xl font-bold hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all duration-300"
          >
            Explore Project
          </a>
        </div>
      ))}
      
      <div className="group glass p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 flex flex-col justify-between border-dashed border-2 border-slate-700/50 bg-transparent">
        <div>
          <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-3xl text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-500">
            <FaArrowUpRightFromSquare className="text-2xl" />
          </div>
          <h3 className="text-2xl font-bold mb-4">View All Works</h3>
          <p className="text-slate-400 leading-relaxed mb-8">Interested in seeing more of my creative journey and technical projects?</p>
        </div>
        <Link 
          href="/projects" 
          className="w-full py-4 text-center glass rounded-xl font-bold hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 transition-all duration-300"
        >
          See Full Portfolio
        </Link>
      </div>  
    </div>
  )
}

export default Project1;