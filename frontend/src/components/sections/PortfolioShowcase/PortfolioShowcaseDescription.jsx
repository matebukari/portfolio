import { motion } from 'framer-motion';

const PortfolioShowcaseDescription = () => {

  const descriptionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.35,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="mb-12 rounded-xl backdrop-blur-[3px] border border-neutral-400/20"
      style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
      variants={descriptionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <p className="max-w-full mx-auto text-lg text-gray-300 leading-relaxed m-2 py-8 px-5">
        Explore the tangible results of my development journey: a curated portfolio of real-world applications.
        Dive into the projects to see how I build scalable solutions, and review the Technical Stack that drives the engineering.
      </p>
    </motion.div>
  )
}

export default PortfolioShowcaseDescription;