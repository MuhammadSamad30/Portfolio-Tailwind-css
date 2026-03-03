"use client";
import { RiReactjsLine } from "react-icons/ri";
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
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Python", icon: SiPython, color: "text-emerald-400" },
  { name: "NextJs", icon: SiNextdotjs, color: "text-white" },
  { name: "ReactJs", icon: SiReact, color: "text-cyan-300" },
  { name: "React Native", icon: RiReactjsLine, color: "text-blue-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "GitHub", icon: SiGithub, color: "text-white" },
  { name: "Sanity CMS", icon: SiSanity, color: "text-red-500" },
  { name: "Strapi CMS", icon: SiStrapi, color: "text-indigo-500" },
  { name: "Shadcn UI", icon: SiShadcnui, color: "text-white" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
  { name: "Figma", icon: BiLogoFigma, color: "text-pink-400" },
  { name: "Diligent Worker", icon: GrUserWorker, color: "text-emerald-400" },
  { name: "Problem Identification", icon: LuScanSearch, color: "text-cyan-400" },
  { name: "Creative Thinking", icon: GiThink, color: "text-emerald-400" },
];

const Skills1 = () => {
  return (
    <section className="bg-transparent py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map(({ name, icon: Icon, color }, idx) => (
          <div
            key={idx}
            className="group glass p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1"
          >
            <div className={`text-5xl transition-all duration-300 group-hover:scale-110 ${color}`}>
              <Icon />
            </div>
            <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors text-center">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills1;
