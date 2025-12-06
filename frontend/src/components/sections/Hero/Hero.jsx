import Lottie from 'react-lottie';
import animationData from '../../../assets/animations/HeroAnimation.json';
import { Github, Linkedin, ExternalLink, Mail } from 'lucide-react';
import MainTitle from './MainTitle';
import Subtitle from './Subtitle';

// Lottie Options
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

// Data for Tech Tags and Social Links
const socialLinks = [
  { icon: Github, href: "YOUR_GITHUB_URL" },
  { icon: Linkedin, href: "YOUR_LINKEDIN_URL" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden text-white">

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        {/* Left Content Area */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">

          {/* 1. Main Title */}
          <MainTitle
            className="scrambled-text-demo"
            radius={30}
            duration={1.2}
            speed={0.5}
            scrambleChars={`.:`}
          />  

          {/* 2. Subtitle / Tagline */}
          <Subtitle
            animateOn="view"
            revealDirection="left"
            sequential
            className="text-lg text-white"
            encryptedClassName="text-lg text-cyan-400"
            pauseDuration={2500}
          >
            {[
              'I design software that solves real-world problems',
              'Building modern web apps from concept to deploy',
              'Turning complex problems into intuitive digital experiences'
            ]}
          </Subtitle>

          {/* 3. Description */}
          <p className="text-lg text-gray-400 max-w-lg pt-4">
            Empowering ideas with code that’s efficient, secure, and ready to grow.
          </p>

          {/* 4. CTA Buttons */}
          <div className="flex justify-center md:justify-start space-x-4 pt-8">
            <a href="#projects" className="flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-xl hover:bg-purple-700 transition group">
              Projects
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition" />
            </a>
            <a href="#contact" className="flex items-center px-6 py-3 bg-transparent border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition group">
              Contact
              <Mail className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition" />
            </a>
          </div>

          {/* 5. Social Links */}
          <div className="flex justify-center md:justify-start space-x-5 pt-8">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition duration-300">
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

        </div>

        {/* Right Content Area: Lottie Animation */}
        <div className="md:w-1/2 max-w-lg w-full">
          <Lottie options={defaultOptions} />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;