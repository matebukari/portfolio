import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroLinkedInLink = () => {
  return (
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
        delay: 1
      }}
      href="https://www.linkedin.com/in/mate-bukari"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-purple-500 transition duration-300"
    >
      <Linkedin className="w-6 h-6" />
    </motion.a>
  );
};

export default HeroLinkedInLink;
