import { motion } from 'framer-motion';

const AboutMeDescription = () => {

  const descriptionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="rounded-xl bg-black/10 backdrop-blur-[3px] border border-neutral-400/20"
      variants={descriptionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <p className="max-w-full mx-auto text-lg text-gray-300 leading-relaxed m-2 py-8 px-5">
        Hello, I'm <span className="font-bold text-purple-400">Bukari Máté</span>, and I'm a passionate
        and aspiring Full-Stack Developer excited about building user-friendly, scalable web applications.

        My technical foundation comes from the Codecool Bootcamp, where I gained a solid,
        hands-on understanding of key technologies like JavaScript, React, Node.js, Express.js, and MongoDB.
        I’m dedicated to continuous self-learning, so I'm always expanding my skillset.

        I thrive in collaborative environments, and I'm comfortable working in teams and leveraging Git
        for smooth project management. My previous professional roles also taught me valuable soft skills 
        like strong communication and adaptability, which I’m eager to bring to a professional development team.
        Let's build something innovative together!
      </p>
    </motion.div>
  )
}

export default AboutMeDescription