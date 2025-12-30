import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'motion/react';
import animationData from '../../../assets/animations/HeroAnimation.json';

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
      <Player
        autoplay
        loop
        src={animationData}
        style={{ width: '100%', height: '100%' }}
      />
    </motion.div>
  );
};

export default HeroAnimation;
