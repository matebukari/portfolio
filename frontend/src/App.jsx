import Background from "./components/background/Background";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Portfolio from "./components/sections/Portfolio";
import ContactSection from "./components/sections/Contact";

function App() {
  return (
    <Background>
      <Navbar />
      <Hero/>
      <About/>
      <Portfolio/>
      <ContactSection/>
    </Background>
  );
}

export default App;
