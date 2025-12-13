import Navbar from "../ui/Navbar.jsx";
import Hero from "../sections/Hero/Hero.jsx";
import About from "../sections/About/About.jsx";
import PortfolioShowcase from "../sections/PortfolioShowcase/PortfolioShowcase.jsx";
import ContactSection from "../sections/Contact/Contact.jsx";

function PortfolioPage() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <PortfolioShowcase/>
      <ContactSection/>
    </>
  );
}

export default PortfolioPage;
