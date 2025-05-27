import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/HomePage";
import MensenPage from "./pages/MensenPage";
import ExpertisesPage from "./pages/ExpertisesPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/mensen" element={<MensenPage />} />
            <Route path="/expertises" element={<ExpertisesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projecten" element={<ProjectsPage />} />
            <Route path="/projecten/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
