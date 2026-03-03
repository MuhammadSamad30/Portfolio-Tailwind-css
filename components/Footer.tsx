const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 border-t border-slate-800/50 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-2xl font-black text-gradient">SAMAD</h2>
          <p className="text-slate-500 text-sm">Crafting digital experiences with passion and precision.</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/MuhammadSamad30"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors group"
          >
            <i className='bx bxl-github text-2xl group-hover:scale-110 transition-transform'></i>
            <span className="font-medium">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-samad-6b0190290/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors group"
          >
            <i className='bx bxl-linkedin-square text-2xl group-hover:scale-110 transition-transform'></i>
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
        
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;