const ProjectScreenshot = ({ title, screenshot}) => {
  if (screenshot?.src) {
    return(
      <div
        className="group w-full items-center rounded-2xl overflow-hidden
          h-56 sm:h-64 md:h-80
          border-2 border-neutral-400/20 hover:border-neutral-400/40
          hover:shadow-[0_0_0_1px_rgba(163,163,163,0.4)] transition-all duration-300"
      >
        <img
          src={screenshot.src}
          alt={screenshot.alt || `${title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-103"
        />
      </div>
    );
  }

  return(
    <div className="h-80 w-full rounded-2xl border-2 border-neutral-400/20 bg-black/10 backdrop-blur-[3px] flex items-center justify-center text-white/50">
      Screenshot coming soon
    </div>
  );
};

export default ProjectScreenshot;