"use client";

import "boxicons/css/boxicons.min.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Contact1 = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "5587f0e2-27a2-44f9-a8b4-2f816a68115d");
    formData.append("subject", "Business Inquiry: New Client Interested in Hiring You");
    formData.append("from_name", "Portfolio Contact Form");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        router.push("/thanks");
      } else {
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please check your connection.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:px-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
      <div className="relative hidden justify-center lg:flex">
        <Image
          src="/contact-pic.png"
          alt="Contact Me"
          width={500}
          height={500}
          className="relative aspect-[.86] w-full max-w-md rounded-[1.5rem] border border-white/10 object-cover grayscale-[.2] transition-all duration-500 hover:grayscale-0"
        />
        <div className="absolute bottom-6 left-6 rounded-xl border border-white/10 bg-[#10100f]/85 px-4 py-3 backdrop-blur"><p className="eyebrow">Currently open</p><p className="mt-1 text-sm text-white">For thoughtful collaborations</p></div>
      </div>

      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#181817] p-6 sm:p-8 md:p-10">
        
        <form onSubmit={handleSubmit} className="relative flex flex-col gap-6">
          <p className="eyebrow">Tell me what you&apos;re building</p>
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-[#f4f0e8]">Let&apos;s talk details.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="px-1 text-sm font-medium text-[#c7c2ba]">Full name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="rounded-xl border border-white/10 bg-[#10100f] p-4 text-[#f4f0e8] placeholder:text-[#66615b] focus:border-[#ff7048]/70 focus:outline-none focus:ring-1 focus:ring-[#ff7048]/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="px-1 text-sm font-medium text-[#c7c2ba]">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="rounded-xl border border-white/10 bg-[#10100f] p-4 text-[#f4f0e8] placeholder:text-[#66615b] focus:border-[#ff7048]/70 focus:outline-none focus:ring-1 focus:ring-[#ff7048]/30"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="px-1 text-sm font-medium text-[#c7c2ba]">Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project or job opportunity..."
              required
              rows={4}
              className="resize-none rounded-xl border border-white/10 bg-[#10100f] p-4 text-[#f4f0e8] placeholder:text-[#66615b] focus:border-[#ff7048]/70 focus:outline-none focus:ring-1 focus:ring-[#ff7048]/30"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold text-[#17110f] transition ${isSubmitting ? 'cursor-not-allowed bg-[#a44a31]' : 'bg-[#ff7048] hover:bg-[#ff8968]'}`}
          >
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            <i className={`bx ${isSubmitting ? 'bx-loader-alt animate-spin' : 'bx-paper-plane'} text-xl`}></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact1;
