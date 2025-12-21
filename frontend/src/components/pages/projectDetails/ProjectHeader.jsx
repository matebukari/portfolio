import { ChevronLeft } from "lucide-react";

const ProjectHeader = ({ title, onBack }) => {
  return(
    <div className="flex items-center gap-4 mt-10 mb-12 mx-auto max-w-7xl">
      <button
        onClick={onBack}
        className="flex items-center gap-2 rounded-xl cursor-pointer to-black/10 backdrop-blur-[3px] border border-neutral-400/20 px-4 py-3 text-white hover:bg-white/20 transition"
      >
        <ChevronLeft />
        <span className="font-medium">Back</span>
      </button>

      <div className="flex items-center gap-2 text-white/60">
        <span>Projects</span>
        <span className="text-white/40 text-2xl">›</span>
        <span className="text-white font-medium">{title}</span>
      </div>
    </div>
  )
}

export default ProjectHeader;