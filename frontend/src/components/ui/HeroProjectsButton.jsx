import { motion } from "framer-motion";
import { ExternalLink } from 'lucide-react';

const HeroProjectsButton = () => {
  return(
    <motion.a
      initial={{
        y: 50,
        opacity: 0,
      }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "tween",
        duration: 0.3,
        ease: "easeOut",
        delay: 0.7
      }}
      href="#projects" className="flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-xl hover:bg-purple-700 transition group">
        Projects
      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition" />
    </motion.a>
  )
}

export default HeroProjectsButton;