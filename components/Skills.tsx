"use client";
import { BiLogoFigma } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";
import { LuScanSearch } from "react-icons/lu";
import { GiThink } from "react-icons/gi";
import { FaBootstrap } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiSanity,
  SiStrapi,
  SiShadcnui
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Python", icon: SiPython, color: "text-emerald-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "React", icon: SiReact, color: "text-cyan-300" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "GitHub", icon: SiGithub, color: "text-white" },
  { name: "Sanity", icon: SiSanity, color: "text-red-500" },
  { name: "Strapi", icon: SiStrapi, color: "text-indigo-500" },
  { name: "Shadcn UI", icon: SiShadcnui, color: "text-white" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
  { name: "Figma", icon: BiLogoFigma, color: "text-pink-400" },
  { name: "Diligent", icon: GrUserWorker, color: "text-emerald-400" },
  { name: "Analysis", icon: LuScanSearch, color: "text-cyan-400" },
  { name: "Creative", icon: GiThink, color: "text-emerald-400" },
];

const Skills1 = () => {
  return (
    <section className="bg-transparent py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
        {skills.map(({ name, icon: Icon, color }, idx) => (
          <div
            key={idx}
            className="group glass p-6 sm:p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:border-emerald-500/40 hover:-translate-y-2 hover:bg-slate-800/40"
          >
            <div className={`text-4xl sm:text-5xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.3)] ${color}`}>
              <Icon />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-400 group-hover:text-white transition-colors text-center uppercase tracking-wider">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills1;

