import { Share2, User, Mail, MessageSquare, Send, Linkedin, Instagram, } from 'lucide-react';

// DATA
const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, user: 'Let\'s Connect', url: 'YOUR_LINKEDIN_URL', color: 'text-blue-500' },
  { name: 'Instagram', icon: Instagram, user: '@BukariMate', url: 'YOUR_INSTAGRAM_URL', color: 'text-pink-500' },
];

// SUB-COMPONENTS
const SocialLinkCard = ({ name, icon: Icon, user, url, color }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 transition duration-200 backdrop-blur-[2px]"
  >
    <Icon className={`w-6 h-6 ${color}`} />
    <div>
      <p className="text-sm font-semibold text-white">{name}</p>
      <p className="text-xs text-gray-400">{user}</p>
    </div>
  </a>
);


const ContactSection = () => {
  return (
    <section className="py-20 -mt-15 px-8 min-h-screen flex items-center justify-center text-white relative overflow-hidden">

      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 z-10 w-full max-w-5xl">

          {/* GET IN TOUCH / FORM CARD (Left Side) */}
        <div className="lg:w-2/3 p-6 sm:p-8 rounded-2xl border border-neutral-400/10 
                      bg-black/10 backdrop-blur-[3px] shadow-2xl">
              
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-extrabold text-white">
              Get in Touch
            </h2>
            <Share2 className="w-6 h-6 text-purple-400 hover:text-white transition duration-200 cursor-pointer" />
          </div>
            <p className="text-gray-300 mb-8">
              Have something to discuss? Send me a message and let's talk.
            </p>

            {/* Form Fields */}
          <form className="space-y-6">
            <div className="relative">
              <User className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/20 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
              />
            </div>

            <div className="relative">
              <Mail className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/20 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute top-4 left-3 w-5 h-5 text-gray-500" />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full bg-white/5 border border-white/20 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300 resize-none"
              ></textarea>
            </div>
              
            {/* Send Message Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-3 py-4 rounded-lg font-bold text-white shadow-lg transition duration-300
                        bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
        
        {/* CONNECT WITH ME CARD (Right Side) */}
        <div className="lg:w-1/3 p-6 sm:p-8 rounded-2xl border border-neutral-400/20 
                    bg-black/10 backdrop-blur-[3px] shadow-2xl flex flex-col space-y-6">
            
          <h3 className="text-xl font-semibold text-purple-400 border-l-4 border-purple-500 pl-3">
            Connect With Me
          </h3>

          <div className="space-y-4 grow">
            {socialLinks.map((link) => (
              <SocialLinkCard key={link.name} {...link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;