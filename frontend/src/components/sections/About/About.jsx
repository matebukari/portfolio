import AboutStatCard from '../../ui/AboutStatCard';
import AboutTitle from './AboutTitle';
import AboutMeDescription from './AboutMeDescription';
import AboutDownloadCvButton from '../../ui/AboutDownloadCvButton';
import AboutViewProjectsButton from '../../ui/AboutViewProjectsButton';

const About = () => {
  
  return (
    <section className="relative py-4 px-8 text-white">
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Title */}
        <AboutTitle/>
        
        {/* Content Paragraph */}
        <AboutMeDescription/>
        
        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 m-4">
          {/* Download CV Button */}
          <AboutDownloadCvButton/>
          
          {/* View Projects Button */}
          <AboutViewProjectsButton/>
        </div>

        {/* Statistics Cards */}
        <AboutStatCard/>
        
      </div>
    </section>
  );
};

export default About;