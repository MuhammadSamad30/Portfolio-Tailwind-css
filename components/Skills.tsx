"use client";
import { TbBrandReactNative } from "react-icons/tb";
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
  { name: "HTML", icon: SiHtml5 }, { name: "CSS", icon: SiCss3 },
  { name: "Tailwind", icon: SiTailwindcss }, { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript }, { name: "Python", icon: SiPython },
  { name: "Next.js", icon: SiNextdotjs }, { name: "React", icon: SiReact },
  { name: "React Native", icon: TbBrandReactNative }, { name: "Node.js", icon: SiNodedotjs },
  { name: "Git", icon: SiGit }, { name: "GitHub", icon: SiGithub },
  { name: "Sanity", icon: SiSanity }, { name: "Strapi", icon: SiStrapi },
  { name: "Shadcn UI", icon: SiShadcnui }, { name: "Bootstrap", icon: FaBootstrap },
  { name: "Figma", icon: BiLogoFigma }, { name: "Diligent", icon: GrUserWorker },
  { name: "Analysis", icon: LuScanSearch }, { name: "Creative", icon: GiThink },
];

const Skills1 = () => {
  return (
    <section className="py-2">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 xl:grid-cols-5">
        {skills.map(({ name, icon: Icon }, idx) => (
          <div
            key={idx}
            className="group flex min-h-[118px] items-center gap-4 rounded-2xl border border-white/10 bg-[#181817] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#ff7048]/50 sm:min-h-[135px] sm:p-5"
          >
            <div className="text-3xl text-[#ff8968] transition duration-300 group-hover:scale-110 sm:text-4xl">
              <Icon />
            </div>
            <span className="text-xs font-bold uppercase tracking-[.08em] text-[#c7c2ba] transition-colors group-hover:text-white sm:text-sm">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills1;
