import { Code, Globe } from 'lucide-react';
import { motion } from "motion/react";

const AboutStatCards = () => {
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
    <div className="flex flex-wrap justify-center gap-6">
      {stats.map((stat, index) => (
        <motion.a
          key={index}
          href="#projects"
          initial={{
            x: index === 0 ? -30 : 30,
            y: 30,
            opacity: 0,
          }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            type: "tween",
            duration: 0.3,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.02,
            backgroundColor: "rgba(31,41,55,0.5)",
          }}
          style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
          className="relative backdrop-blur-[3px] border border-neutral-400/20 p-6 rounded-xl shadow-2xl cursor-pointer w-full md:w-[30%] will-change-transform transition-colors duration-300"
        >
          <div className="flex items-start justify-between">
            <stat.icon className="text-purple-400 w-8 h-8" />
            <span className="text-5xl font-extrabold text-white">
              {stat.count}
            </span>
          </div>
          
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase">
              {stat.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
          </div>

          {/* Bottom-right arrow */}
          <span className="absolute bottom-4 right-4 text-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17L17 7" />
            </svg>
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default AboutStatCards;
