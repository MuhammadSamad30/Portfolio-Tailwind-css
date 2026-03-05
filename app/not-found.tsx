import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-2xl w-full glass rounded-[2.5rem] p-10 md:p-20 text-center animate-fadeIn">
        <div className="space-y-6">
          <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-gradient">
            404
          </h1>
          
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Page Not Found
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
              Oops! It seems the page you are looking for has vanished into the digital void.
            </p>
          </div>

          <div className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-500/20 active:scale-95 group"
            >
              <i className="bx bx-home-alt text-xl"></i>
              Back to Home
              <i className="bx bx-right-arrow-alt text-xl transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>
        </div>

        {/* Decorative subtle border at the bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800/50">
          <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">
            Muhammad Samad Portfolio
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
