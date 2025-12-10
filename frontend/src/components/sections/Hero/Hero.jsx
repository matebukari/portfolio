import HeroTitle from './HeroTitle';
import HeroSubTitle from './HeroSubtitle';
import HeroDescription from './HeroDescription';
import HeroContactButton from '../../ui/HeroContactButton';
import HeroProjectsButton from '../../ui/HeroProjectsButton';
import HeroGithubLink from '../../ui/HeroGithubLink';
import HeroLinkedInLink from '../../ui/HeroLinkedInLink';
import HeroAnimation from './HeroAnimation';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center p-4 overflow-hidden text-white">

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        {/* Left Content Area */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">

          {/* 1. Main Title */}
          <HeroTitle
            className="scrambled-text"
            radius={30}
            duration={1.2}
            speed={0.5}
            scrambleChars={`.:`}
          />  

          {/* 2. Subtitle / Tagline */}
          <HeroSubTitle
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
          </HeroSubTitle>

          {/* 3. Description */}
          <HeroDescription/>

          {/* 4. CTA Buttons */}
          <div className="flex justify-center md:justify-start space-x-4 pt-8">
            <HeroProjectsButton/>
            <HeroContactButton/>
          </div>

          {/* 5. Social Links */}
          <div className="flex justify-center md:justify-start space-x-5 pt-8">
            <HeroGithubLink/>
            <HeroLinkedInLink/>
          </div>

        </div>

        {/* Right Content Area: Lottie Animation */}
        <HeroAnimation/>
      </div>
      
    </section>
  );
};

export default Hero;