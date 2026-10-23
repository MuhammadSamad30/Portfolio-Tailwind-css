const Footer = () => {
  return (
    <footer className="relative mt-8 w-full overflow-hidden border-t border-white/10 px-6 py-12 md:px-12 md:py-16">
      
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <h2 className="text-2xl font-black tracking-[-.06em] text-[#f4f0e8]">SAMAD<span className="text-[#ff7048]">.</span></h2>
          <p className="max-w-xs text-center text-sm leading-relaxed text-[#858078] md:text-left">
            Crafting high-performance digital experiences with passion and precision.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
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
              className="group flex items-center gap-2 text-[#a7a39b] transition-all hover:text-[#ff8968]"
            >
              <i className={`${social.icon} text-2xl group-hover:scale-110 transition-transform`}></i>
              <span className="font-semibold text-sm tracking-wide">{social.label}</span>
            </a>
          ))}
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-sm font-medium text-[#858078]">
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
