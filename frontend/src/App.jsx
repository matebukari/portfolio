import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./components/background/Background";

import PortfolioPage from "./components/pages/PortfolioPage.jsx";
import ProjectDetailsPage from "./components/pages/ProjectDetailsPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Background>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        </Routes>
      </Background>
    </BrowserRouter>
  );
}

export default App;
