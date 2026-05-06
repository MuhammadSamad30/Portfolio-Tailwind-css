import Link from "next/link";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="glass p-12 rounded-[2rem] text-center max-w-lg relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="bx bx-check text-5xl text-emerald-400"></i>
          </div>
          <h1 className="text-4xl font-black mb-4">Message <span className="text-emerald-400">Sent!</span></h1>
          <p className="text-slate-400 text-lg mb-8">
            Thank you for reaching out. I have received your message and will get back to you as soon as possible.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
          >
            <i className="bx bx-home text-xl"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
