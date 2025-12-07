import { useState } from 'react'; 
import PortfolioShowcaseTitle from './PortfolioShowcaseTitle';
import PortfolioShowcaseDescription from './PortfolioShowcaseDescription';
import PortfoliShowcaseTabButtons from '../../ui/PortfoliShowcaseTabButtons';
import PortfolioShowcaseProjectCards from './PortfoliShowcaseProjectCards';
import PortfolioShowcaseTechStackLogos from './PortfolioShowcaseTechStackLogos';


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
  { name: 'Java', logoSrc: '/logos/java.svg', bgColor: 'bg-green-700' },
  { name: 'Git', logoSrc: '/logos/jwt.svg', bgColor: 'bg-pink-500' },
];

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
const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState('projects'); 

  return (
    <section className="relative py-20 px-8 overflow-hidden text-white">
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Title */}
        <PortfolioShowcaseTitle/>

        {/* Content Paragraph */}
        <PortfolioShowcaseDescription/>

        {/* Tab Navigation */}
        <PortfoliShowcaseTabButtons 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />

        <div className="relative w-full md:h-70 h-210">

          {/* Content Area: Projects */}
          <div className={`absolute inset-0 w-full transition duration-300 ${activeTab !== 'projects' ? 'hidden' : ''}`}>
            <PortfolioShowcaseProjectCards/>
          </div>
          
          {/* Content Area: Tech Stack */}
          <div className={`absolute inset-0 w-full transition duration-300 ${activeTab !== 'techstack' ? 'hidden' : ''}`}>
            <PortfolioShowcaseTechStackLogos/>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;