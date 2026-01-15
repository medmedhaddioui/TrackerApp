import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './shared/Navigation';
import { Footer } from './shared/Footer';
import { ScrollToTop } from './shared/ScrollToTop';
import IndustryInternship from './pages/IndustryInternship';
import CoHostedPrograms from './pages/CoHostedPrograms';
import CustomTrainingPrograms from './pages/CustomTrainingPrograms';
import IndustrialCourses from './pages/IndustrialCourses';
import WorkShops from './pages/WorkShops';
import BootChamps from './pages/BootChamps';
import CareerMentorship from './pages/CareerMentorship';
import HomePage from './pages/HomePage';
import CompaniesPage from './pages/CompaniesPage';
import EducatorsPage from './pages/EducatorsPage';
import UniversitiesPage from './pages/UniversitiesPage';
import BootcampsPage from './pages/BootcampsPage';
import GovernmentsPage from './pages/GovernmentsPage';
import AffiliatesPage from './pages/AffiliatesPage';
import InternsPage from './pages/InternsPage';
import OurMissionPage from './pages/OurMissionPage';
import OurTeamPage from './pages/OurTeamPage';
import JoinUsPage from './pages/JoinUsPage';
import ContactPage from './pages/ContactPage';
import { DarkModeProvider } from './shared/useDarkMode';

export default function App() {
  return (
    <DarkModeProvider>
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions/industry-internships" element={<IndustryInternship />} />
          <Route path="/solutions/co-hosted-programs" element={<CoHostedPrograms />} />
          <Route path="/solutions/custom-training" element={<CustomTrainingPrograms />} />
          <Route path="/solutions/industrial-courses" element={<IndustrialCourses />} />
          <Route path="/solutions/workshops" element={<WorkShops />} />
          <Route path="/solutions/bootcamps" element={<BootChamps />} />
          <Route path="/solutions/career-mentorship" element={<CareerMentorship />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/educators" element={<EducatorsPage />} />
          <Route path="/universities" element={<UniversitiesPage />} />
          <Route path="/educators/universities" element={<UniversitiesPage />} />
          <Route path="/bootcamps" element={<BootcampsPage />} />
          <Route path="/educators/bootcamps" element={<BootcampsPage />} />
          <Route path="/governments" element={<GovernmentsPage />} />
          <Route path="/educators/governments" element={<GovernmentsPage />} />
          <Route path="/affiliates" element={<AffiliatesPage />} />
          <Route path="/educators/affiliates" element={<AffiliatesPage />} />
          <Route path="/interns" element={<InternsPage />} />
          <Route path="/our-mission" element={<OurMissionPage />} />
          <Route path="/about/our-mission" element={<OurMissionPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/about/team" element={<OurTeamPage />} />
          <Route path="/join-us" element={<JoinUsPage />} />
          <Route path="/about/join-us" element={<JoinUsPage />} />
          <Route path="/companies/contact" element={<ContactPage />} />
          <Route path="/educators/contact" element={<ContactPage />} />
          <Route path="/universities/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </DarkModeProvider>
  );
}
