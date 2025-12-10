import { motion } from "framer-motion";

const HeroDescription = () => {
  return (
    <motion.p
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
        delay: 0.5
      }}
      className="text-lg text-gray-400 max-w-lg pt-4">
      Empowering ideas with code that’s efficient, secure, and ready to grow.
    </motion.p>
  )
}

export default HeroDescription;