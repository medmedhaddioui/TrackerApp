import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import CompaniesPage from './pages/CompaniesPage';
import EducatorsPage from './pages/EducatorsPage';
import UniversitiesPage from './pages/UniversitiesPage';
import BootcampsPage from './pages/BootcampsPage';
import GovernmentsPage from './pages/GovernmentsPage';
import AffiliatesPage from './pages/AffiliatesPage';
import InternsPage from './pages/InternsPage';

export default function App() {
    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/educators" element={<EducatorsPage />} />
          <Route path="/educators/universities" element={<UniversitiesPage />} />
          <Route path="/educators/bootcamps" element={<BootcampsPage />} />
          <Route path="/educators/governments" element={<GovernmentsPage />} />
          <Route path="/educators/affiliates" element={<AffiliatesPage />} />
          <Route path="/interns" element={<InternsPage />} />
        </Routes>
        <Footer  scrollToSection={scrollToSection} />
      </div>
    </Router>
  );
}
