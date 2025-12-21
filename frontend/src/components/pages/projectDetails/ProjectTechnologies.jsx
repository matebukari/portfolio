import { Code } from "lucide-react";

const ProjectTechnologies = ({ technologies = [] }) => {
  return (
    <>
      <div className="flex items-center gap-3 mb-6">
        <Code className="text-sky-400" />
        <h2 className="text-2xl font-semibold text-amber-50">
          Technologies Used
        </h2>
      </div>

      {/* Technologies pills */}
      <div className="flex flex-wrap gap-4">
        {(technologies ?? []).map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 rounded-xl bg-linear-to-br from-blue-900/40 to-black/10 backdrop-blur-[3px] border border-neutral-400/20 px-5 py-3 text-sky-300 shadow-md hover:bg-sky-500/10 transition"
          >
            <img src={tech.logo} alt={tech.name} className="h-5 w-5 object-contain" />
            <span className="text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProjectTechnologies;
