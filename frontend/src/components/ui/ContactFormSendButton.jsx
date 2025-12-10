import { Send } from 'lucide-react';
import { motion } from 'motion/react';

const iconVariants = {
  rest: { rotate: 0 },
  hover: { rotate: 405 },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.04 },
};

const ContactFormSendButton = () => {
  return (
    <motion.button
      type="submit"
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="w-full flex items-center justify-center space-x-3 py-4 rounded-lg font-bold text-white shadow-lg
                 bg-linear-to-r from-purple-600 to-indigo-600
                 hover:from-purple-700 hover:to-indigo-700 transition-colors duration-300 hover:cursor-pointer"
    >
      <motion.span
        variants={iconVariants}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      >
        <Send className="w-5 h-5" />
      </motion.span>

      <span>Send Message</span>
    </motion.button>
  );
};

export default ContactFormSendButton;
