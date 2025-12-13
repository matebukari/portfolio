import ContactTitle from './ConatctTitle';
import ContactFormCard from './ContactFormCard';


const ContactSection = () => {
  return (
    <section id='contact' className="py-20 -mt-15 px-8 min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        <ContactTitle/>
        <ContactFormCard/>
        
      </div>
    </section>
  );
};

export default ContactSection;