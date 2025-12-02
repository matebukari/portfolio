import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Code, Zap } from 'lucide-react';
import StreamScopeImage from '../../assets/images/StreamScope-screenshot.png'; 

// DATA DEFINITIONS

// Data for the Projects Section
const projectData = [
  {
    title: 'StreamScope',
    description: `StreamScope helps you find movies and TV shows and
    instantly see which platforms they’re available to stream on in your country.
    Browse new releases, popular titles, and detailed show pages with trailers, ratings,
    genres, and full platform availability tailored to your region.`,
    image: StreamScopeImage, 
    demoLink: 'https://stream-scope.netlify.app/',
    detailsLink: '#',
  },
];

// Data for the Tech Stack Section (Logos)
const techStackData = [
  { name: 'HTML', logoSrc: '/logos/html.svg', bgColor: 'bg-orange-500' },
  { name: 'CSS', logoSrc: '/logos/css.svg', bgColor: 'bg-blue-600' },
  { name: 'JavaScript', logoSrc: '/logos/javascript.svg', bgColor: 'bg-yellow-400' },
  { name: 'Tailwind CSS', logoSrc: '/logos/tailwind.svg', bgColor: 'bg-teal-500' },
  { name: 'Express JS', logoSrc: '/logos/express.svg', bgColor: 'bg-purple-800' },
  { name: 'Node JS', logoSrc: '/logos/nodejs.svg', bgColor: 'bg-green-600' },
  { name: 'React', logoSrc: '/logos/react.svg', bgColor: 'bg-cyan-500' },
  { name: 'MongoDB', logoSrc: '/logos/mongodb.svg', bgColor: 'bg-green-700' },
  { name: 'Java', logoSrc: '/logos/jwt.svg', bgColor: 'bg-pink-500' },
  { name: 'Git', logoSrc: '/logos/jwt.svg', bgColor: 'bg-pink-500' },
];


// SUB-COMPONENTS
const TabButton = ({ icon: Icon, label, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center px-8 py-3 font-medium rounded-lg transition duration-300
      ${isActive 
        ? 'bg-purple-900/70 text-white border border-purple-600 shadow-xl' // Active Style
        : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800/70' // Inactive Style
      }`
    }
  >
    <Icon className="w-5 h-5 mr-3" />
    {label}
  </button>
);

const ProjectCard = ({ title, description, image, demoLink, detailsLink }) => (
// Default to vertical on small screens, switch to horizontal on medium screens
  <div className="flex flex-col md:flex-row bg-black-100/50 backdrop-blur-[3px] border border-neutral-400/20 rounded-xl overflow-hidden transition duration-300 hover:border-purple-500/80 hover:shadow-lg">

    {/* Image Section */}
    <div className="h-48 md:w-64 md:h-auto overflow-hidden shrink-0">
      <img 
        src={image}
        alt={`Screenshot of ${title}`}
        className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.05]" 
      />
    </div>

    {/* Content Section */}
    <div className="p-5 space-y-3 flex flex-col justify-between grow">
      <div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-base text-gray-400 mt-2">{description}</p>
      </div>

      {/* Links */}
      <div className="flex justify-start space-x-4 pt-2 text-sm font-medium mt-auto">
        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-400 hover:text-purple-300 transition group font-bold">
          Live Demo, 
          <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition" />
        </a>
        <a href={detailsLink} className="flex items-center text-gray-400 hover:text-white transition group">
          Details 
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition" />
        </a>
      </div>
    </div>
  </div>
);

const LogoCard = ({ name, logoSrc, bgColor }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl transition duration-300 hover:scale-[1.05] group">
      <div className={`w-24 h-24 p-5 rounded-2xl flex items-center justify-center shadow-lg 
                      ${bgColor} bg-opacity-90 border-2 border-transparent 
                      group-hover:border-purple-500/80 transition duration-200`}>
        <img src={logoSrc} alt={`${name} logo`} className="w-full h-full object-contain filter drop-shadow-lg" />
      </div>
      <p className="mt-3 text-sm font-semibold text-gray-300 group-hover:text-white transition duration-200">{name}</p>
    </div>
  );
};


// MAIN PORTFOLIO COMPONENT
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects'); 

  return (
    <section className="relative py-20 px-8 overflow-hidden  text-white">
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-5xl text-center font-extrabold mb-10 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
          Portfolio Showcase
        </h2>

        {/* Content Paragraph */}
        <div className="text-center mb-12 mt-12 mx-auto max-w-3xl rounded-xl bg-black-100/50 backdrop-blur-[3px] border border-neutral-400/20">
          <p className="max-w-full mx-auto text-lg text-gray-300 leading-relaxed m-2 py-8 px-5">
            Explore the tangible results of my development journey: a curated portfolio of real-world applications.
            Dive into the projects to see how I build scalable solutions, and review the Technical Stack that drives the engineering.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          <TabButton 
            icon={Code} 
            label="Projects" 
            isActive={activeTab === 'projects'} 
            onClick={() => setActiveTab('projects')}
          />
          <TabButton 
            icon={Zap} 
            label="Tech Stack" 
            isActive={activeTab === 'techstack'} 
            onClick={() => setActiveTab('techstack')}
          />
        </div>

        {/* Content Area */}
        <div className="min-h-[500px] flex justify-center items-start pt-4">
          {/* Content Area: Projects */}
          {activeTab === 'projects' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {projectData.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </>
          )}
          
          {/* Content Area: Tech Stack */}
          {activeTab === 'techstack' && (
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center p-4">
              {techStackData.map((tech, index) => (
                <LogoCard 
                  key={index} 
                  name={tech.name} 
                  logoSrc={tech.logoSrc} 
                  bgColor={tech.bgColor}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;