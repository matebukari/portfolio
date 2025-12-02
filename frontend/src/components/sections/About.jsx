import { Download, Eye, Code, Globe } from 'lucide-react'; 
import StatCard from '../ui/StatCard';

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
    <section className="relative py-4 px-8 overflow-hidden text-white">
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
          About Me
        </h2>
        
        {/* Content Paragraph */}
        <div className="rounded-xl bg-black-100/50 backdrop-blur-[3px] border border-neutral-400/20">
          <p className="max-w-full mx-auto text-lg text-gray-300 leading-relaxed m-2 py-8 px-5">
            Hello, I'm <span className="font-bold text-purple-400">Bukari Máté</span>, a highly motivated 
            and curious aspiring Full-Stack Developer focused on building user-friendly,
            scalable web applications. My technical foundation comes from the Codecool Full-Stack Developer Bootcamp,
            where I gained hands-on experience with JavaScript (ES6+), React, Node.js, Express.js, and MongoDB.
            <p></p>
            I thrive in collaborative, problem-solving environments.
            With a professional background in system administration and customer-facing roles,
            I bring essential soft skills like adaptability, strong communication,
            and teamwork to a professional development team.
            I am eager to contribute to innovative projects and continue developing my skills within the tech industry.
          </p>
        </div>

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