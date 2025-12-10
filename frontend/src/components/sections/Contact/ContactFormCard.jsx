import ContactFormHeader from './ContactFormHeader';
import ContactFormFields from './ContactFormFields';
import CotactFormConnectSection from './CotactFormConnectSection';
import { motion } from 'framer-motion';

const ContactFormCard = () => {

  return (
    <div className="p-6 w-full max-w-2xl sm:p-10 rounded-2xl border border-neutral-400/10 
                    bg-black/10 backdrop-blur-[3px] shadow-2xl relative">
        
      {/* HEADER */}
      <ContactFormHeader/>

      {/* FORM FIELDS and Send Message Button */}
      <motion.div
        initial={{
          x: -30,
          opacity: 0,
        }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "tween",
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <ContactFormFields/>
      </motion.div>
      
      {/* --- HORIZONTAL RULE --- */}
      <hr className="my-10 border-white/10" />

      {/* CONNECT WITH ME SECTION */}
      <CotactFormConnectSection/>
    </div>
  )
}

export default ContactFormCard;