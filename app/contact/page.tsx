import Contact1 from "@/components/Contact"

const Contact = () => {
  return (
    <div className="min-h-screen pb-12 pt-32">
      <div className="mx-auto mb-12 max-w-7xl px-6 md:px-12">
        <p className="eyebrow mb-4">Good things start with hello</p>
        <h2 className="section-title">Let&apos;s connect<span className="text-[#ff7048]">.</span></h2>
        <p className="mt-4 max-w-xl text-[#a7a39b]">Have a project, an opportunity, or just want to talk through an idea? Send me a note.</p>
      </div>
      <Contact1/>
    </div>
  )
}

export default Contact
