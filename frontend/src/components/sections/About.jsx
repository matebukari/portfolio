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
        <div className="rounded-xl bg-black/10 backdrop-blur-[3px] border border-neutral-400/20">
          <p className="max-w-full mx-auto text-lg text-gray-300 leading-relaxed m-2 py-8 px-5">
            Hello, I'm <span className="font-bold text-purple-400">Bukari Máté</span>, and I'm a passionate
            and aspiring Full-Stack Developer excited about building user-friendly, scalable web applications.

            My technical foundation comes from the Codecool Bootcamp, where I gained a solid,
            hands-on understanding of key technologies like JavaScript, React, Node.js, Express.js, and MongoDB.
            I’m dedicated to continuous self-learning, so I'm always expanding my skillset.

            I thrive in collaborative environments, and I'm comfortable working in teams and leveraging Git
            for smooth project management. My previous professional roles also taught me valuable soft skills 
            like strong communication and adaptability, which I’m eager to bring to a professional development team.
            Let's build something innovative together!
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