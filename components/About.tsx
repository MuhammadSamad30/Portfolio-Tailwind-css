import Image from "next/image";

const About1 = () => {
  return (
    <div className="py-12 px-5 flex justify-center items-center overflow-hidden">
      <div className="bg-pink-300 shadow-lg rounded-lg p-6 sm:p-10 max-w-7xl flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="flex justify-center items-center w-full md:w-[30%]">
          <Image
            src={"/about-pic.jpg"}
            alt="Muhammad Samad"
            width={500}
            height={500}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"/>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl text-gray-800 mb-3">About Me</h2>
          <h1 className="text-2xl sm:text-3xl text-gray-800 mb-3">
            I am Muhammad Samad
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mt-4">
            Aspiring developer learning TypeScript, Next.js, and Python to build
            scalable, dynamic web applications and strengthen full-stack
            programming skills. Passionate about coding and continuously
            exploring new technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About1;
