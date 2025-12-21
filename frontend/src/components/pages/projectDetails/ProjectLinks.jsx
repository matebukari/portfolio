import { ExternalLink, Github } from "lucide-react"

const ProjectLinks = ({ demoLink, githubLink }) => {
  return(
    <div className="flex flex-col gap-6 sm:flex-row">

      {/* Live Demo link */}
      {demoLink ? (
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-2xl cursor-pointer px-4 py-2 w-42 h-15 
            bg-blue-900/40 backdrop-blur-[3px]
            border border-neutral-400/20 transition-all duration-300 ease-out
            hover:border-blue-400/60 hover:scale-[1.04]"
        >
          <div className="flex items-center justify-center text-blue-400">
            <ExternalLink />
          </div>
          <div className="px-2">
            <p className="text-lg font-semibold text-blue-400">Live Demo</p>
          </div>
        </a>
      ) : null}

      {/* Github link */}
      {githubLink ? (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-2xl cursor-pointer px-4 py-2 w-30 h-15
            bg-purple-900/40 backdrop-blur-[3px] 
            border border-neutral-400/20 transition-all duration-300 ease-out
            hover:border-purple-400/60 hover:scale-[1.04]"
        >
          <div className="flex items-center justify-center text-purple-400">
            <Github />
          </div>
          <div className="px-2">
            <p className="text-lg font-semibold text-purple-400">Github</p>
          </div>
        </a>
      ) : null}
    </div>
  )
}

export default ProjectLinks;