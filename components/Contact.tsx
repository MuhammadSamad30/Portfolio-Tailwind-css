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
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative flex justify-center items-center group">
        <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-3xl transition-all"></div>
        <Image
          src="/contact-pic.png"
          alt="Contact Me"
          width={500}
          height={500}
          className="relative w-full max-w-md rounded-[2rem] border border-slate-700/50 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>

      <div className="glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
        
        <form onSubmit={handleSubmit} className="relative flex flex-col gap-6">
          <h2 className="text-2xl font-bold mb-2">Hire Me / Send a Message</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-400 px-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-400 px-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-400 px-1">Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project or job opportunity..."
              required
              rows={4}
              className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 ${isSubmitting ? 'bg-emerald-800 cursor-not-allowed' : 'bg-emerald-500 hover:bg-emerald-600'} text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/10 active:scale-[0.98] flex items-center justify-center gap-2`}
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
