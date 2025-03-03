"use client";
import { useEffect, useRef } from "react";

const Skills1: React.FC = () => {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    skillRefs.current.forEach((ref) => {
      if (ref) {
        const percentage = ref.getAttribute("data-percentage");
        ref.style.width = "0%";

        setTimeout(() => {
          ref.style.transition = "width 2s ease-in-out";
          ref.style.width = percentage || "0%";
        }, 100);
      }
    });
  }, []);

  return (
    <div className="flex flex-col gap-8 p-8 max-w-full overflow-x-auto text-white">
      <div className="flex flex-col gap-6">
        <div className="flex items-center bg-gray-800 rounded-lg p-6 shadow-xl hover:bg-indigo-800 transition duration-300">
          <i className="bx bxl-html5 text-4xl text-indigo-400 mr-4"></i>
          <div className="flex-1">
            <span className="font-semibold text-xl">HTML</span>
            <div className="bg-gray-700 rounded-md overflow-hidden h-4 my-3">
              <div
                ref={(el) => {
                  if (el) skillRefs.current[0] = el;
                }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                data-percentage="99%"
              ></div>
            </div>
          </div>
          <span className="text-md font-semibold ml-4">99%</span>
        </div>

        <div className="flex items-center bg-gray-800 rounded-lg p-6 shadow-xl hover:bg-indigo-800 transition duration-300">
          <i className="bx bxl-css3 text-4xl text-indigo-400 mr-4"></i>
          <div className="flex-1">
            <span className="font-semibold text-xl">CSS</span>
            <div className="bg-gray-700 rounded-md overflow-hidden h-4 my-3">
              <div
                ref={(el) => {
                  if (el) skillRefs.current[1] = el;
                }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                data-percentage="99%"
              ></div>
            </div>
          </div>
          <span className="text-md font-semibold ml-4">99%</span>
        </div>

        <div className="flex items-center bg-gray-800 rounded-lg p-6 shadow-xl hover:bg-indigo-800 transition duration-300">
          <i className="bx bxl-javascript text-4xl text-indigo-400 mr-4"></i>
          <div className="flex-1">
            <span className="font-semibold text-xl">JavaScript</span>
            <div className="bg-gray-700 rounded-md overflow-hidden h-4 my-3">
              <div
                ref={(el) => {
                  if (el) skillRefs.current[2] = el;
                }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                data-percentage="99%"
              ></div>
            </div>
          </div>
          <span className="text-md font-semibold ml-4">99%</span>
        </div>

        <div className="flex items-center bg-gray-800 rounded-lg p-6 shadow-xl hover:bg-indigo-800 transition duration-300">
          <i className="bx bxl-typescript text-4xl text-indigo-400 mr-4"></i>
          <div className="flex-1">
            <span className="font-semibold text-xl">TypeScript</span>
            <div className="bg-gray-700 rounded-md overflow-hidden h-4 my-3">
              <div
                ref={(el) => {
                  if (el) skillRefs.current[3] = el;
                }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                data-percentage="99%"
              ></div>
            </div>
          </div>
          <span className="text-md font-semibold ml-4">99%</span>
        </div>

        <div className="flex items-center bg-gray-800 rounded-lg p-6 shadow-xl hover:bg-indigo-800 transition duration-300">
          <i className="bx bxl-react text-4xl text-indigo-400 mr-4"></i>
          <div className="flex-1">
            <span className="font-semibold text-xl">Next.js</span>
            <div className="bg-gray-700 rounded-md overflow-hidden h-4 my-3">
              <div
                ref={(el) => {
                  if (el) skillRefs.current[4] = el;
                }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                data-percentage="80%"
              ></div>
            </div>
          </div>
          <span className="text-md font-semibold ml-4">80%</span>
        </div>

        <div className="flex items-center bg-gray-800 rounded-lg p-6 shadow-xl hover:bg-indigo-800 transition duration-300">
          <i className="bx bxl-python text-4xl text-indigo-400 mr-4"></i>
          <div className="flex-1">
            <span className="font-semibold text-xl">Python</span>
            <div className="bg-gray-700 rounded-md overflow-hidden h-4 my-3">
              <div
                ref={(el) => {
                  if (el) skillRefs.current[5] = el;
                }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                data-percentage="30%"
              ></div>
            </div>
          </div>
          <span className="text-md font-semibold ml-4">30%</span>
        </div>

        <div className="flex items-center bg-gray-800 rounded-lg p-6 shadow-xl hover:bg-indigo-800 transition duration-300">
          <i className="bx bxl-tailwind-css text-4xl text-indigo-400 mr-4"></i>
          <div className="flex-1">
            <span className="font-semibold text-xl">Tailwind CSS</span>
            <div className="bg-gray-700 rounded-md overflow-hidden h-4 my-3">
              <div
                ref={(el) => {
                  if (el) skillRefs.current[6] = el;
                }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                data-percentage="99%"
              ></div>
            </div>
          </div>
          <span className="text-md font-semibold ml-4">99%</span>
        </div>

        <div className="flex items-center bg-gray-800 rounded-lg p-6 shadow-xl hover:bg-indigo-800 transition duration-300">
          <i className="bx bxl-nodejs text-4xl text-indigo-400 mr-4"></i>
          <div className="flex-1">
            <span className="font-semibold text-xl">Node.js</span>
            <div className="bg-gray-700 rounded-md overflow-hidden h-4 my-3">
              <div
                ref={(el) => {
                  if (el) skillRefs.current[7] = el;
                }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                data-percentage="35%"
              ></div>
            </div>
          </div>
          <span className="text-md font-semibold ml-4">35%</span>
        </div>
      </div>
    </div>
  );
};

export default Skills1;
