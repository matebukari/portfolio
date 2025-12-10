import { User, Mail, MessageSquare } from 'lucide-react';
import ContactFormSendButton from '../../ui/ContactFormSendButton';
import { motion } from 'framer-motion';

const ContactFormFields = () => {
  return(
    <form className="space-y-6">
      {/* Input fields */}
      <motion.div
        initial={{
          y: 30,
          opacity: 0,
        }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "tween",
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative">
          <User className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/20 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"/>
      </motion.div>

      <motion.div
        initial={{
          y: 30,
          opacity: 0,
        }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "tween",
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative">
        <Mail className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/20 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"/>
      </motion.div>

      <motion.div
        initial={{
          y: 30,
          opacity: 0,
        }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "tween",
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative">
        <MessageSquare className="absolute top-4 left-3 w-5 h-5 text-gray-500" />
        <textarea placeholder="Your Message" rows="5" className="w-full bg-white/5 border border-white/20 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300 resize-none"></textarea>
      </motion.div>

      <motion.div
        initial={{
          y: 30,
          opacity: 0,
        }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "tween",
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        <ContactFormSendButton/>
      </motion.div>
    </form>
  )
}

export default ContactFormFields;