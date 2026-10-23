import About1 from "@/components/About"

const About = () => {
  return (
    <div className="min-h-screen pb-16 pt-32">
      <div className="mx-auto mb-8 max-w-7xl px-6 md:px-12">
        <p className="eyebrow mb-4">A little about me</p>
        <h1 className="section-title">The person behind the pixels<span className="text-[#ff7048]">.</span></h1>
      </div>
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <About1 />
      </div>
    </div>
  )
}

export default About
