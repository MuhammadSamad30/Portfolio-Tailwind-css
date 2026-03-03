import ProjectsAll from '@/components/ProjectsAll'
import React from 'react'

const AllProjects = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen">
       <div className="flex flex-col items-center mb-12 px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">Complete <span className="text-emerald-400">Portfolio</span></h2>
        <div className="w-24 h-1 bg-emerald-500 rounded-full"></div>
      </div>
      <ProjectsAll/>
    </div>
  )
}

export default AllProjects