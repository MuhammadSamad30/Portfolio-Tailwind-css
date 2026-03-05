const Footer = () => {
  return (
    <footer className="w-full py-16 px-6 border-t border-slate-800/50 mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-3">
          <h2 className="text-3xl font-black text-gradient tracking-tighter">SAMAD</h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xs text-center md:text-left leading-relaxed">
            Crafting high-performance digital experiences with passion and precision.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          {[
            { icon: "bx bxl-github", label: "GitHub", href: "https://github.com/MuhammadSamad30" },
            { icon: "bx bxl-linkedin-square", label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-samad-6b0190290/" },
            { icon: "bx bxl-instagram", label: "Instagram", href: "https://www.instagram.com/s_a_m_a_d11/" }
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-all group"
            >
              <i className={`${social.icon} text-2xl group-hover:scale-110 transition-transform`}></i>
              <span className="font-semibold text-sm tracking-wide">{social.label}</span>
            </a>
          ))}
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} <span className="text-slate-400">Muhammad Samad</span>
          </p>
          <p className="text-slate-600 text-xs tracking-widest uppercase font-bold">
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;