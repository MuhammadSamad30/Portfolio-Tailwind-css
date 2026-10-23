import ProjectsAll from '@/components/ProjectsAll'
import React from 'react'

const AllProjects = () => {
  return (
    <div className="min-h-screen pb-12 pt-32">
       <div className="mx-auto mb-14 max-w-7xl px-6 md:px-12">
        <p className="eyebrow mb-4">A few things I&apos;ve made</p>
        <h2 className="section-title">The work archive<span className="text-[#ff7048]">.</span></h2>
        <p className="mt-4 max-w-xl text-[#a7a39b]">Selected products and experiments across full-stack development, modern frontend, and Python.</p>
      </div>
      <ProjectsAll/>
    </div>
  )
}

export default AllProjects
