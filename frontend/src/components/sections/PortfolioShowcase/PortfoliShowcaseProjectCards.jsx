import { ExternalLink, ArrowRight, Code } from 'lucide-react';
import { motion } from 'motion/react';
import StreamScopeImage from '../../../assets/images/StreamScope-screenshot.png'; 

// 1. Data for the Projects Section
const projectData = [
  {
    title: 'StreamScope',
    description: `StreamScope helps you find movies and TV shows and see exactly where they’re streaming in your country.`,
    image: StreamScopeImage,
    demoLink: 'https://stream-scope.netlify.app/',
    detailsLink: '#',
  },
  {
    title: 'ScoreMyChores',
    description: `A way to manage household responsibilities. Assign tasks, track progress, and motivate everyone with a point-based reward system.`,
    image: '',
    demoLink: '',
    detailsLink: '#',
  },
];

// 2. Single Project Card (now animated)
const ProjectCard = ({
  title,
  description,
  image,
  demoLink,
  detailsLink,
  index,
}) => (
  <motion.div
    initial={{
      x: index === 0 ? -60 : 60,
      opacity: 0,
    }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{
      type: 'tween',
      duration: 0.5 ,
      ease: 'easeOut',
    }}
    className="text-left will-change-transform flex flex-col md:flex-row bg-black/10 backdrop-blur-[3px] border border-neutral-400/20 rounded-xl overflow-hidden transition duration-300 hover:scale-[1.02] hover:bg-gray-800/50 hover:shadow-lg"
  >
    {/* Image Section: Handles missing image */}
    <div className="h-48 md:w-64 md:h-auto overflow-hidden shrink-0">
      {image ? (
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.05]"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900/50 text-gray-500 text-base font-bold p-4 text-center">
          <Code className="w-8 h-8 mb-2" />
          {title} - In Development
        </div>
      )}
    </div>

    {/* Content Section */}
    <div className="p-5 space-y-3 flex flex-col justify-between grow">
      <div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-base text-gray-400 mt-2">{description}</p>
      </div>

      {/* Links: Only show Live Demo if demoLink is present */}
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
        <a
          href={detailsLink}
          className="flex items-center text-gray-400 hover:text-white transition group"
        >
          Details
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition" />
        </a>
      </div>
    </div>
  </motion.div>
);

// 3. Wrapper that renders the grid of project cards
const PortfolioShowcaseProjectCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
      {projectData.map((project, index) => (
        <ProjectCard key={index} index={index} {...project} />
      ))}
    </div>
  );
};

export default PortfolioShowcaseProjectCards;
