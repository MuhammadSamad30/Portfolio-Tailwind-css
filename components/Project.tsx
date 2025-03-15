import "boxicons/css/boxicons.min.css";
import Link from "next/link";

const projectData = [
  {
    title: "Resume Builder",
    icon: "bx bxs-spreadsheet",
    description: "A responsive Resume Builder website built with HTML, CSS, and TypeScript.",
    link: "https://shareable-resume-builder-by-samad.vercel.app/"
  },
  {
    title: "E-Com Website",
    icon: "bx bxs-store-alt",
    description: "E-commerce Website with responsive ness and Shopping cart functionality!",
    link: "https://e-commerce-website-by-samad.vercel.app/"
  },
  {
    title: "Blog App",
    icon: "bx bxl-blogger",
    description: "Blog App On Next Js 15 Introduction with Fully Responsive ness",
    link: "https://basic-blog-app-by-samad.vercel.app/"
  },
  {
    title: "E-Com Back-End",
    description:
      "E-commerce Website with responsive ness and back-end functionality!",
    link: "https://e-commerce-back-end-hackathon-by-samad.vercel.app/",
    icon: "bx bxl-shopify",
  },
];

const Project1 = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center p-5">
      {projectData.map((project, index) => (
        <div 
          key={index}
          className="backdrop-blur-md bg-white/10 border border-white/20 text-white w-[300px] p-5 rounded-[15px] 
          shadow-lg transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-2xl"
        >
          <h3 className="text-[1.5rem] flex items-center gap-2 mb-2">
            {project.title} <i className={project.icon}></i>
          </h3>
          <p className="text-gray-200 text-base leading-6 mb-4">{project.description}</p>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white no-underline 
            px-4 py-2 rounded-lg font-bold transition-colors duration-300 ease-in-out 
            hover:bg-white/20"
          >
            View Project
          </a>
        </div>
      ))}
      
      <div className="backdrop-blur-md bg-white/10 border border-white/20 text-white w-[300px] p-5 rounded-[15px] 
        shadow-lg transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-2xl">
        <h3 className="text-[1.5rem] mb-3">Want To See All</h3>
        <p></p>
        <Link 
          href="/projects" 
          className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white no-underline 
          px-4 py-2 rounded-lg font-bold transition-colors duration-300 ease-in-out 
          hover:bg-white/20"
        >
          View Project
        </Link>
      </div>  
    </div>
  )
}

export default Project1