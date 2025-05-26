import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ClientTestimonialData = [
  {
    title: "Wave Digitizing",
    imageSrc: "/images/project1.jpeg",
    imageAlt: "Wave Digitizing Project",
    deploymentLink: "https://www.wavedigitizingservices.com/",
    testimonial:
      "Muhammad Samad is an exceptional developer who consistently delivers high-quality work. His attention to detail and commitment to excellence are truly commendable.",
  },
  {
    title: "Referral Trading",
    imageSrc: "/images/project2.png",
    imageAlt: "Referral Trading Project",
    deploymentLink: "https://referral-web-trading.vercel.app/",
    testimonial:
      "Working with Muhammad was a game-changer. His innovative solutions and technical expertise helped us achieve our goals ahead of schedule.",
  },
];

const cardVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const ClientTestimonial: React.FC = () => {
  const [selected, setSelected] = useState(0);

  const next = () => setSelected((prev) => (prev + 1) % ClientTestimonialData.length);
  const prev = () => setSelected((prev) => (prev - 1 + ClientTestimonialData.length) % ClientTestimonialData.length);

  return (
    <section className="min-h-[120vh] bg-gray-900 py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold text-white tracking-tight">
          What Our Clients Say
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Carousel Buttons */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-500 text-white p-4 rounded-full shadow-2xl z-20 focus:outline-none"
          aria-label="Previous"
        >
          &#10094;
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-500 text-white p-4 rounded-full shadow-2xl z-20 focus:outline-none"
          aria-label="Next"
        >
          &#10095;
        </button>

        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={selected}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
            style={{ width: '100%', height: 'auto' }}
          >
            {/* Image & Link */}
            <div className="relative lg:w-3/5 h-[600px] lg:h-auto flex-shrink-0">
              <motion.img
                src={ClientTestimonialData[selected].imageSrc}
                alt={ClientTestimonialData[selected].imageAlt}
                className="object-cover w-full h-full"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.5 }}
              />
              <a
                href={ClientTestimonialData[selected].deploymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-semibold shadow-2xl transition-all duration-300"
              >
                View Live Project
              </a>
            </div>

            {/* Testimonial Content */}
            <div className="p-12 lg:w-2/5 flex flex-col justify-center space-y-8">
              <h3 className="text-3xl font-bold text-white">
                {ClientTestimonialData[selected].title}
              </h3>
              <div className="relative">
                <svg
                  className="absolute -top-6 -left-6 w-16 h-16 text-indigo-500/30"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.35 4C4.46 7.45 1 13.12 1 19.36c0 5.09 3.07 8.06 6.62 8.06C11.98 27.42 14.48 24.73 14.48 21.56c0-3.17-2.21-5.47-5.09-5.47-.58 0-1.34.1-1.53.19.48-3.26 3.55-7.1 6.62-9.02L9.35 4z" />
                </svg>
                <p className="text-gray-200 text-xl italic leading-relaxed">
                  {ClientTestimonialData[selected].testimonial}
                </p>
                <svg
                  className="absolute -bottom-6 -right-6 w-16 h-16 text-indigo-500/30 transform rotate-180"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.35 4C4.46 7.45 1 13.12 1 19.36c0 5.09 3.07 8.06 6.62 8.06C11.98 27.42 14.48 24.73 14.48 21.56c0-3.17-2.21-5.47-5.09-5.47-.58 0-1.34.1-1.53.19.48-3.26 3.55-7.1 6.62-9.02L9.35 4z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center space-x-4">
          {ClientTestimonialData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none 
                ${selected === idx ? 'bg-indigo-500' : 'bg-gray-600 hover:bg-gray-500'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;