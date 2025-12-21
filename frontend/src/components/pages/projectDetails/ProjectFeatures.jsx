const ProjectFeatures = ({ features = [] }) => {
  return(
    <div
      className="w-full rounded-2xl p-8 border-2 border-neutral-400/20 
        hover:shadow-[0_0_0_1px_rgba(163,163,163,0.4)] transition-all duration-300 
        hover:border-neutral-400/40 bg-black/1 backdrop-blur-[3px]"
    >
      <div className="mb-8 flex items-center gap-3">
        <h2 className="text-2xl font-semibold text-amber-50">Key Features</h2>
      </div>

      <div className="space-y-2">
        {features.length ? (
          features.map((feature, idx) => (
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
  )
}

export default ProjectFeatures;