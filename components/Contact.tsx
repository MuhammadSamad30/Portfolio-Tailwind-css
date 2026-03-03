import "boxicons/css/boxicons.min.css";
import Image from "next/image";

const Contact1 = () => {
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
        
        <form className="relative flex flex-col gap-6">
          <h2 className="text-2xl font-bold mb-2">Send me a message</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-400 px-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                required
                className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-400 px-1">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-400 px-1">Message</label>
            <textarea
              placeholder="How can I help you?"
              required
              rows={4}
              className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/10 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>Send Message</span>
            <i className="bx bx-paper-plane text-xl"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact1;
