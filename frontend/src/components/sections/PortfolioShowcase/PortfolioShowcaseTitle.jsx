import { motion } from 'framer-motion';

const PortfolioShowcaseTitle = () => {
  
  return (
    <motion.h2
      className="text-5xl sm:text-6xl md:text-7xl whitespace-normal break-normal hyphens-none font-extrabold mb-10 pb-2 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400"
      initial={{ y: -80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 12,
        duration: 1,
      }}
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
    >
      Portfolio Showcase
    </motion.h2>
  )
}

export default PortfolioShowcaseTitle;