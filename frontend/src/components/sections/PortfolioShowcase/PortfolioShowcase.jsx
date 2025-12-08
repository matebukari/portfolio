import { useState } from 'react'; 
import PortfolioShowcaseTitle from './PortfolioShowcaseTitle';
import PortfolioShowcaseDescription from './PortfolioShowcaseDescription';
import PortfoliShowcaseTabButtons from '../../ui/PortfoliShowcaseTabButtons';
import PortfolioShowcaseProjectCards from './PortfoliShowcaseProjectCards';
import PortfolioShowcaseTechStackLogos from './PortfolioShowcaseTechStackLogos';

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