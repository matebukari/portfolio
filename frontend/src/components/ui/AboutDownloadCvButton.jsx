import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutDownloadCvButton = () => {
  return(
    <motion.button
      initial={{ x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
      className="will-change-transform flex items-center px-6 py-3 cursor-pointer font-semibold text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
    >
      <Download className="w-5 h-5 mr-2" /> Download CV
    </motion.button>
  )
}

export default AboutDownloadCvButton;