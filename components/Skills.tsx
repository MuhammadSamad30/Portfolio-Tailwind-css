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
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "NextJs", icon: SiNextdotjs },
  { name: "ReactJs", icon: SiReact },
  { name: "React Native", icon: RiReactjsLine },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Sanity CMS", icon: SiSanity },
  { name: "Strapi CMS", icon: SiStrapi },
  { name: "Shadcn UI", icon: SiShadcnui },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Figma", icon: BiLogoFigma},
  { name: "Diligent Worker", icon: GrUserWorker },
  { name: "Problem Identification", icon: LuScanSearch },
  { name: "Creative Thinking", icon: GiThink },
];

const Skills1 = () => {
  return (
    <section className="min-h-screen bg-[#0e0e0e] py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map(({ name, icon: Icon }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-3 p-8 rounded-xl bg-[#1a1a1a] shadow-md hover:shadow-yellow-500/20 transition duration-300"
          >
            <Icon className="text-4xl text-yellow-400" />
            <span className="text-sm font-bold text-yellow-100">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills1;
