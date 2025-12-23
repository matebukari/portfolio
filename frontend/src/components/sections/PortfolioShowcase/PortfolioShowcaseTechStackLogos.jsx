import { motion } from "motion/react";

const techStackData = [
  { name: 'HTML', logoSrc: "/techLogos/html.svg" },
  { name: 'CSS', logoSrc: "/techLogos/css.svg" },
  { name: 'JavaScript', logoSrc: "/techLogos/javascript.svg" },
  { name: 'Tailwind CSS', logoSrc: "/techLogos/tailwind.svg" },
  { name: 'Express JS', logoSrc: "/techLogos/expressjs.svg" },
  { name: 'Node JS', logoSrc: "/techLogos/nodejs.svg" },
  { name: 'React', logoSrc: "/techLogos/react.svg" },
  { name: 'MongoDB', logoSrc: "/techLogos/mongodb.svg" },
  { name: 'Java', logoSrc: "/techLogos/java.svg" },
  { name: 'Git', logoSrc: "/techLogos/git.svg" },
];

const LogoCard = ({ name, logoSrc, index }) => {
  return (
    <motion.div
      initial={{ scale: 0.4, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        type: "tween",
        duration: 0.35,
        ease: "easeOut",
        delay: index * 0.02,
      }}
      whileHover={{ scale: 1.05 }}
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
      className="will-change-transform flex flex-col items-center justify-center p-4 rounded-xl"
    >
      {/* Box with backlight on hover */}
      <div className="relative w-28 h-32 rounded-2xl flex items-center justify-center">

        {/* Backlight glow (behind) */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                     blur-xl transition-opacity duration-300 
                     bg-linear-to-br from-purple-500/40 via-fuchsia-500/30 to-cyan-400/30"
            aria-hidden="true"
        />

        <div className="w-30 h-30 p-5 rounded-2xl flex flex-col items-center justify-center 
                        bg-black/10 backdrop-blur-[3px] shadow-2xl bg-opacity-90 border border-neutral-400/50
                        group-hover:border-purple-500/80 transition duration-200">
          <img src={logoSrc} alt={`${name} logo`} className="w-14 h-14 object-contain filter drop-shadow-lg " />
          <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-200">
            {name}
          </p>
        </div>
      </div>
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
