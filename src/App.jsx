import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleBackground from './components/Particles';
import About from './components/About';
import Projects from './components/Projects';
import ProjectsPage from './components/ProjectsPage'; // Import the new page
import Contact from './components/Contact';
import Footer from './components/Footer';
import TopProject from './components/TopProject'; // Import the new component
import FunProject from './components/FunProject'; // Import the new component
import GuidedProject from './components/GuidedProject'; // Import the new
import ClonedProject from './components/ClonedProject'; // Import the new component

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ParticleBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects-page" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/topprojects" element={<TopProject />} />
        <Route path="/funprojects" element={<FunProject />} />
        <Route path="/guidedProjects" element={<GuidedProject />} />
        <Route path="/clonedprojects" element={<ClonedProject />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;