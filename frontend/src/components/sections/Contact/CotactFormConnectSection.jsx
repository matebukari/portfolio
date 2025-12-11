import { Linkedin, Github } from 'lucide-react';
import ContactFormSocialLinkCard from "../../ui/ContactFormSocialLinkCard";

const socialLinks = [
  { name: 'Let\'s Connect', subtext: 'on LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/mate-bukari', color: 'text-blue-500' },
  { name: 'GitHub', subtext: '@matebukari', icon: Github, url: 'https://github.com/matebukari', color: 'text-gray-400' }, 
];

const CotactFormConnectSection = () => {
  return(
    <div className="space-y-6">
        
      <h3 className="text-xl font-semibold text-white flex items-center space-x-3">
        <span className="h-0.5 w-6 bg-purple-400 shrink-0" />
        <span>Connect With Me</span>
      </h3>
      
      {/* Social Links Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {socialLinks.map((link) => (
          <ContactFormSocialLinkCard key={link.name} {...link} />
        ))}
      </div>
    </div>
  )
}

export default CotactFormConnectSection;