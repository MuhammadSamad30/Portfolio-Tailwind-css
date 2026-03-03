import Skills1 from '@/components/Skills'

const skills = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen">
       <div className="flex flex-col items-center mb-12 px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">Technical <span className="text-emerald-400">Expertise</span></h2>
        <div className="w-24 h-1 bg-emerald-500 rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <Skills1/>
      </div>
    </div>
  )
}

export default skills