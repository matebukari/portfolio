import { motion } from "motion/react";

const techStackData = [
  { name: 'HTML', logoSrc: '/logos/html.svg' },
  { name: 'CSS', logoSrc: '/logos/css.svg' },
  { name: 'JavaScript', logoSrc: '/logos/javascript.svg' },
  { name: 'Tailwind CSS', logoSrc: '/logos/tailwind.svg' },
  { name: 'Express JS', logoSrc: '/logos/express.svg' },
  { name: 'Node JS', logoSrc: '/logos/nodejs.svg' },
  { name: 'React', logoSrc: '/logos/react.svg' },
  { name: 'MongoDB', logoSrc: '/logos/mongodb.svg' },
  { name: 'Java', logoSrc: '/logos/java.svg' },
  { name: 'Git', logoSrc: '/logos/jwt.svg' },
];

const LogoCard = ({ name, logoSrc, index }) => {
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: index * 0.05,
      }}
      className="will-change-transform flex flex-col items-center justify-center p-4 rounded-xl transition duration-300 hover:scale-[1.05] group"
    >
      <div className="w-24 h-24 p-10 rounded-2xl flex items-center justify-center 
                      bg-black/10 backdrop-blur-[3px] shadow-2xl bg-opacity-90 border-2 border-transparent 
                      group-hover:border-purple-500/80 transition duration-200">
        <img src={logoSrc} alt={`${name} logo`} className="w-full h-full object-contain filter drop-shadow-lg" />
      </div>
      <p className="mt-3 text-sm font-semibold text-gray-300 group-hover:text-white transition duration-200">
        {name}
      </p>
    </motion.div>
  );
};

const PortfolioShowcaseTechStackLogos = () => (
  <div className="-mt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center p-4">
    {techStackData.map((tech, index) => (
      <LogoCard 
        key={index} 
        index={index}
        name={tech.name} 
        logoSrc={tech.logoSrc}
      />
    ))}
  </div>
);

export default PortfolioShowcaseTechStackLogos;
