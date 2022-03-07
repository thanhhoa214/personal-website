import AboutMeSection from './components/AboutMeSection';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';

function App() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <AboutMeSection></AboutMeSection>
        <ExperienceSection></ExperienceSection>
        <ProjectSection></ProjectSection>
        <ContactSection></ContactSection>
      </main>
    </>
  );
}

export default App;
