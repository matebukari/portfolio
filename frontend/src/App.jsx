import Background from "./components/background/Background";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <Background>
      <Navbar />

      {/* Example content */}
      <div className="pt-24 text-white text-6xl font-bold text-center">
        Hero Section Placeholder
      </div>
    </Background>
  );
}

export default App;
