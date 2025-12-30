import { ExternalLink, ArrowRight, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import projects from "../../../data/projects.json";

const ProjectCard = ({ title, description, image, demoLink, slug, index }) => (
  <motion.div
    initial={{ x: index % 2 === 0 ? -24 : 24, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
    whileHover={{
      scale: 1.02,
      backgroundColor: 'rgba(31,41,55,0.5)'
    }}
    style={{
      transform: "translateZ(0)",
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      backgroundColor: 'rgba(0,0,0,0.1)'
    }}
    className="text-left flex flex-col md:flex-row md:backdrop-blur-[3px] border border-neutral-400/20 rounded-xl overflow-hidden hover:shadow-lg"
  >
    {/* Image */}
    <div className="h-48 md:w-64 md:h-auto overflow-hidden shrink-0">
      {image ? (
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="w-full h-full object-cover transition duration-300 hover:scale-[1.05]"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900/50 text-gray-500 text-base font-bold p-4 text-center">
          <Code className="w-8 h-8 mb-2" />
          {title} - In Development
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-5 space-y-3 flex flex-col justify-between grow">
      <div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-base text-gray-400 mt-2">{description}</p>
      </div>

      <div className="flex justify-start space-x-4 pt-2 text-sm font-medium mt-auto">
        {demoLink ? (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-purple-400 hover:text-purple-300 transition group font-bold"
          >
            Live Demo
            <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition" />
          </a>
        ) : (
          <span className="flex items-center text-gray-600 font-bold">
            Live Demo (Unavailable)
          </span>
        )}

        <Link
          to={`/projects/${slug}`}
          className="flex items-center text-gray-400 hover:text-white transition group"
        >
          Details
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition" />
        </Link>
      </div>
    </div>
  </motion.div>
);

const PortfolioShowcaseProjectCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          index={index}
          title={project.title}
          description={project.cardDescription}
          image={project.screenshot?.src || ""}
          demoLink={project.demoLink}
          slug={project.slug}
        />
      ))}
    </div>
  );
};

export default PortfolioShowcaseProjectCards;
