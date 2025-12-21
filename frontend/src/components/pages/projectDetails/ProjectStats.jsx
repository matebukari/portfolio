import { Code, Layers } from "lucide-react"

const ProjectStats = ({ technologiesCount = 0, featuresCount = 0 }) => {
  return(
    <div className="flex flex-col gap-6 sm:flex-row">

      {/* Total Technology Card*/}
      <div className="flex items-center rounded-2xl bg-linear-to-br from-blue-900/40 to-black/10 backdrop-blur-[3px] border border-neutral-400/20 px-6 py-4 shadow-lg w-60">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
          <Code />
        </div>

        <div className="px-2">
          <p className="text-2xl font-semibold text-white">
            {technologiesCount}
          </p>
          <p className="text-sm text-white/60">Total Technology</p>
        </div>
      </div>

      {/* Key Features Card*/}
      <div className="flex items-center rounded-2xl bg-linear-to-br from-purple-900/40 to-black/10 backdrop-blur-[3px] border border-neutral-400/20 px-6 py-4 shadow-lg w-60">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
          <Layers />
        </div>

        <div className="px-2">
          <p className="text-2xl font-semibold text-white">
            {featuresCount}
          </p>
          <p className="text-sm text-white/60">Key Features</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectStats;