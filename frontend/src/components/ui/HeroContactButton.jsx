import { motion } from "framer-motion";
import { Mail } from 'lucide-react';

const HeroContactButton = () => {
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
        delay: 0.8
      }}
      href="#contact" className="flex items-center px-6 py-3 bg-transparent border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition group">
        Contact
        <Mail className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition" />
    </motion.a>
  )
}

export default HeroContactButton;