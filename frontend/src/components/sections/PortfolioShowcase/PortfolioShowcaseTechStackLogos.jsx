import { motion } from "motion/react";
import HtmlLogo from "../../../assets/techLogos/html.svg";
import CssLogo from "../../../assets/techLogos/css.svg";
import JavascriptLogo from "../../../assets/techLogos/javascript.svg";
import TailwindLogo from "../../../assets/techLogos/tailwind.svg";
import ExpressJsLogo from "../../../assets/techLogos/expressjs.svg";
import NodeJsLogo from "../../../assets/techLogos/nodejs.svg";
import ReactLogo from "../../../assets/techLogos/react.svg";
import MongoDBLogo from "../../../assets/techLogos/mongodb.svg";
import JavaLogo from "../../../assets/techLogos/java.svg";
import GitLogo from "../../../assets/techLogos/git.svg";

const techStackData = [
  { name: 'HTML', logoSrc: HtmlLogo },
  { name: 'CSS', logoSrc: CssLogo },
  { name: 'JavaScript', logoSrc: JavascriptLogo },
  { name: 'Tailwind CSS', logoSrc: TailwindLogo },
  { name: 'Express JS', logoSrc: ExpressJsLogo },
  { name: 'Node JS', logoSrc: NodeJsLogo },
  { name: 'React', logoSrc: ReactLogo },
  { name: 'MongoDB', logoSrc: MongoDBLogo },
  { name: 'Java', logoSrc: JavaLogo },
  { name: 'Git', logoSrc: GitLogo },
];

const LogoCard = ({ name, logoSrc, index }) => {
  return (
    <motion.div
      initial={{ scale: 0.4, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: index * 0.02,
      }}
      className="will-change-transform flex flex-col items-center justify-center p-4 rounded-xl transition duration-300 hover:scale-[1.05] group"
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
          <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition duration-200">
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
