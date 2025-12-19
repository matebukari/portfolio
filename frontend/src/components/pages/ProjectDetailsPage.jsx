import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Layers, Code, ExternalLink, Github } from "lucide-react";
import projects from "../../data/projects.json"; // adjust path if needed

const ProjectDetailsPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  return (
    <div className="min-h-screen p-6">
      {/* Top Left Header */}
      <div className="flex items-center gap-4 mt-10 mb-12 mx-auto max-w-7xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 rounded-xl cursor-pointer to-black/10 backdrop-blur-[3px] border border-neutral-400/20 px-4 py-3 text-white hover:bg-white/20 transition"
        >
          <ChevronLeft />
          <span className="font-medium">Back</span>
        </button>

        <div className="flex items-center gap-2 text-white/60">
          <span>Projects</span>
          <span className="text-white/40 text-2xl">›</span>
          <span className="text-white font-medium">{project.title}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-14">

          {/* Project name */}
          <div className="font-extrabold text-7xl text-amber-50">
            <h1>{project.title}</h1>
          </div>

          {/* Project description */}
          <div className="text-lg text-gray-400 whitespace-pre-line rounded-2xl p-8 border-2 border-neutral-400/20 bg-black/1 backdrop-blur-[3px]">
            <p>{project.detailsDescription}</p>
          </div>

          {/* Stat cards */}
          <div className="flex flex-col gap-6 sm:flex-row">

            {/* Total Technology Card*/}
            <div className="flex items-center rounded-2xl bg-linear-to-br from-blue-900/40 to-black/10 backdrop-blur-[3px] border border-neutral-400/20 px-6 py-4 shadow-lg w-60">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                <Code />
              </div>

              <div className="px-2">
                <p className="text-2xl font-semibold text-white">
                  {project.technologies?.length ?? 0}
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
                  {project.features?.length ?? 0}
                </p>
                <p className="text-sm text-white/60">Key Features</p>
              </div>
            </div>
          </div>

          {/* Live Demo & Github link */}
          <div className="flex flex-col gap-6 sm:flex-row">

            {/* Live Demo link */}
            {project.demoLink ? (
              <a
                href={project.demoLink}
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
            {project.githubLink ? (
              <a
                href={project.githubLink}
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

          {/* Technologies title */}
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-sky-400" />
            <h2 className="text-2xl font-semibold text-amber-50">
              Technologies Used
            </h2>
          </div>

          {/* Technologies pills */}
          <div className="flex flex-wrap gap-4">
            {(project.technologies ?? []).map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 rounded-xl bg-linear-to-br from-blue-900/40 to-black/10 backdrop-blur-[3px] border border-neutral-400/20 px-5 py-3 text-sky-300 shadow-md hover:bg-sky-500/10 transition"
              >
                <img src={tech.logo} alt={tech.name} className="h-5 w-5 object-contain" />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-14 flex flex-col">
          {/* Project screenshot */}
          {project.screenshot?.src ? (
            <div
              className="group h-80 w-full items-center rounded-2xl overflow-hidden
                border-2 border-neutral-400/20 hover:border-neutral-400/40
                hover:shadow-[0_0_0_1px_rgba(163,163,163,0.4)] transition-all duration-300"
            >
              <img
                src={project.screenshot.src}
                alt={project.screenshot.alt || `${project.title} screenshot`}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-103"
              />
            </div>
          ) : (
            <div className="h-80 w-full rounded-2xl border-2 border-neutral-400/20 bg-black/10 backdrop-blur-[3px] flex items-center justify-center text-white/50">
              Screenshot coming soon
            </div>
          )}

          {/* Features list */}
          <div
            className="w-full rounded-2xl p-8 border-2 border-neutral-400/20 
              hover:shadow-[0_0_0_1px_rgba(163,163,163,0.4)] transition-all duration-300 
              hover:border-neutral-400/40 bg-black/1 backdrop-blur-[3px]"
          >
            <div className="mb-8 flex items-center gap-3">
              <h2 className="text-2xl font-semibold text-amber-50">Key Features</h2>
            </div>

            <div className="space-y-2">
              {(project.features ?? []).length ? (
                project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-xl px-5 py-4 transition
                      hover:bg-white/5 border border-transparent hover:border-neutral-400/40"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-indigo-400 shrink-0" />
                    <p className="text-white/90 leading-relaxed">
                      <span className="mr-2">{feature.icon}</span>
                      <span className="font-semibold text-white">{feature.title}</span>
                      {" — "}
                      <span className="text-white/70">{feature.description}</span>
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-white/60">Features coming soon.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
