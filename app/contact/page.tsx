import Contact1 from "@/components/Contact"

const Contact = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="flex flex-col items-center mb-12 px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">Get In <span className="text-emerald-400">Touch</span></h2>
        <div className="w-24 h-1 bg-emerald-500 rounded-full"></div>
      </div>
      <Contact1/>
    </div>
  )
}

export default Contact