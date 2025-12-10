import Lottie from 'react-lottie';
import { motion } from 'motion/react';
import animationData from '../../../assets/animations/HeroAnimation.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const HeroAnimation = () => {
  return (
    <motion.div
      className="md:w-1/2 max-w-lg w-full"
      whileHover={{ scale: 1.08 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
    >
      <Lottie options={defaultOptions} />
    </motion.div>
  );
};

export default HeroAnimation;
