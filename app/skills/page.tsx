import Skills1 from '@/components/Skills'

const skills = () => {
  return (
    <div className="min-h-screen pb-12 pt-32">
       <div className="mx-auto mb-12 max-w-7xl px-6 md:px-12">
        <p className="eyebrow mb-4">Tools of the trade</p>
        <h2 className="section-title">Technical range<span className="text-[#ff7048]">.</span></h2>
        <p className="mt-4 max-w-xl text-[#a7a39b]">A flexible toolkit for taking an idea from first sketch to a working product.</p>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <Skills1/>
      </div>
    </div>
  )
}

export default skills
