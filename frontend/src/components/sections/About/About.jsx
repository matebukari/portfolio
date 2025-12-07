import { Download, Eye, Code, Globe } from 'lucide-react'; 
import StatCard from '../../ui/StatCard';
import AboutTitle from './AboutTitle';
import AboutMeDescription from './AboutMeDescription';
const About = () => {
  const stats = [
    { 
      icon: Code, 
      title: 'TOTAL PROJECTS', 
      count: '1', 
      description: 'Innovative web & mobile solutions crafted' 
    },
    { 
      icon: Globe, 
      title: 'YEARS OF EXPERIENCE', 
      count: '3', 
      description: 'Continuous learning journey' 
    },
  ];

  

  return (
    <section className="relative py-4 px-8 text-white">
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Title */}
        <AboutTitle/>
        
        {/* Content Paragraph */}
        <AboutMeDescription/>
        
        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 m-4">
          {/* Download CV Button */}
          <button className="flex items-center px-6 py-3 cursor-pointer font-semibold text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300">
            <Download className="w-5 h-5 mr-2" /> Download CV
          </button>
          
          {/* View Projects Button */}
          <button className="flex items-center px-6 py-3 cursor-pointer font-semibold text-purple-400 bg-gray-900/50 border border-purple-600 rounded-lg hover:border-purple-400 transition duration-300">
            <Eye className="w-5 h-5 mr-2" /> View Projects
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;