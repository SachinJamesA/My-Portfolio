import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleBackground from './components/Particles';
import About from './components/About';
import Projects from './components/Projects';
import ProjectsPage from './components/ProjectsPage'; // Import the new page
import Contact from './components/Contact';
import Footer from './components/Footer';
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
